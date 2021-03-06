import React, {Component} from 'react';
import {connect } from 'react-redux';
import * as actions from 'actions/formActions';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


require('styles/_forms.scss');

class Create1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: props.params.city,
      cat_idx: props.params.cat_idx || null, //idx
      cat_id: props.params.cat_id || null
    };
    this.getDescr = this.getDescr.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCityFocus = this.handleCityFocus.bind(this);
    this.handleCityLostFocus = this.handleCityLostFocus.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  componentWillMount() {
    //get cats if not already done
    this.props.getCommon();
  }

  componentDidMount() {
    this.props.createGoNext(1); //I'm here
    if(this.props.params.cat_idx) {
      this.setState({descr: this.props.cats[this.props.params.cat_idx].descr});
    } else {
      this.setState({descr: 'Select a Main Category for your walk'});
    }
    const cityField = document.getElementById('cityCreate');
    const options = {
      types: ['(cities)'] //TODO: want neighborhoods?
    };
    const geoAutocomplete = new window.google.maps.places.Autocomplete((cityField), options);
    
    geoAutocomplete.addListener('place_changed', () => {
      const selectedPlace = geoAutocomplete.getPlace();
      const componentForm = {
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name'
      };

      //get each component of the address from place details
      //and fill in the corresponding field on the form
     let selectedSuggest= {};
     for (let addressComponent of selectedPlace.address_components) {
      const addressType = addressComponent.types[0];
      if (componentForm[addressType]) {
        selectedSuggest[addressType] = addressComponent[componentForm[addressType]];
      }
     }

     //change state to update field
     let newcity = selectedPlace.formatted_address;
     //save to store and set state
     this.props.saveFormState({city: newcity});
     this.setState({city: newcity});
   }); //end addListen
  }

  renderItems() {
    let items;
      items = this.props.cats.map(function(cat, idx) {
        if (idx > 0) {
         return <MenuItem
                      key={"cat" + (idx)}
                      value={idx}
                      primaryText={cat.category}
                   />; 
        }
      });
    return items;
  }

  getDescr() {
    return {__html: this.state.descr};
  }

  //reflect user's changes back to them
  handleCityChange(event, value) {
    this.setState({city: value.trim()});
  }

  handleCityFocus(event){
    //clear out what's in there
    this.setState({city: ' '});
  }

  handleCityLostFocus(event) {
    if (this.state.city.trim() == '') {
      this.setState({city: 'Current Location'});
    }
  }

  handleCatChange(event, value) {
    let cat = this.props.cats[value + 1];
    //save to store and set state
    let obj = {cat_idx: value + 1, cat_id: cat.id, descr: cat.descr};
    this.setState(obj);
    this.props.saveFormState('create', obj);
  }



  render() {
    const items = this.renderItems();
    return (
       <div className="FORM" key="create1"> 
        <form className="form-text">
          <span className="header center-children"><h4>City and Category</h4></span>
          <p>First, tell us where your walk is located and it's main category.  This is how others will find your walk.</p>
            <TextField
                id="cityCreate"
                value={this.state.city}
                placeholder="Current Location"
                floatingLabelText="City"
                floatingLabelFixed={true}
                onChange={this.handleCityChange}
                onFocus={this.handleCityFocus}
                onBlur={this.handleCityLostFocus}
             />
            <br />

          <SelectField
              value={this.state.cat_idx}
              onChange={this.handleCatChange}
              maxHeight={400}
              floatingLabelText="Main Walk Category"
              floatingLabelFixed={true}
              fullWidth={true}
              >
              {items}
          </SelectField>
           <div className="descr" dangerouslySetInnerHTML={this.getDescr()} />
            <br />

          <br />
        </form>

 
 
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cats: state.forms.shared.categories,
    params: state.forms.create.params
  };
}

export default connect(mapStateToProps, actions)(Create1);