import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {connect } from 'react-redux';
import * as actions from 'actions/searchActions';
import config from 'utils/config';
import {browserHistory} from 'react-router';
import {isProd} from 'utils/environment';


require('./searchForm.scss');

// const PLACE_API = `https://maps.googleapis.com/maps/api/js?key=${config.googleApiKey}&libraries=places`;



class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        city: props.city,
        cat_idx: props.cat_idx, //idx
        cat_id: props.cats[props.cat_idx].id, //id
        descr: props.cats[props.cat_idx].descr
    };
    this.getDescr = this.getDescr.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCityFocus = this.handleCityFocus.bind(this);
    this.handleCityLostFocus = this.handleCityLostFocus.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getDevVars = this.getDevVars.bind(this);
  }

   //grab router from context
    static contextTypes = {
      router: React.PropTypes.object
   } 

    componentWillMount() {
      this.props.getSearchForm(); //load lookups into store if needed
    }

   componentDidMount() {
    const cityField = document.getElementById('citySearch');
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
     this.setState({city: newcity});
     this.props.resetBoxFromGeom(selectedPlace.geometry); //put into store
   }); //end addListener
  }
   
  handleCityChange(event, value) {
    this.setState({city: value});
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
    let cat = this.props.cats[value];
    this.setState({cat_idx: value, cat_id: cat.id, descr: cat.descr});
  }

  handleSearch() {
    //save the params into store so when we come back
    const params = {city: this.state.city, 
                    cat_id: this.state.cat_id,
                    cat_idx: this.state.cat_idx};
    this.props.searchWalks(params, this.context.router);

    //  //this will prob move to actions??
    // browserHistory.push('/results');
  }

  renderItems() {
    let items;
      items = this.props.cats.map(function(cat, idx) {
         return <MenuItem
                      key={"cat" + idx}
                      value={idx}
                      primaryText={cat.category}
                   />; 
      });
    return items;
  }

  getDescr() {
    return {__html: this.state.descr};
  }

  getDevVars() {
    if (!isProd()) {
      return (
        <p>{this.props.geo.here.lat + ',' + this.props.geo.here.lng + ' ' + this.props.geo.here.used}</p>
      );
    } else {
      return null;
    };
  }

   
  render() {
    const items = this.renderItems();
    // const devVars = this.getDevVars();
    //outer placement style is passed in from parent
    return(
        <div className="FORM" id="search-form">
          <TextField
              id="citySearch"
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
            floatingLabelText="Walk Category"
            floatingLabelFixed={true}
            fullWidth={true}
            >
            {items}
        </SelectField>
          <br />
          <div className="descr" dangerouslySetInnerHTML={this.getDescr()} />
        <br />

        <RaisedButton label="Search" secondary={true} onClick={this.handleSearch} />
      </div>

    );
  }
} //end component


function mapStateToProps(state) {
  return {
    cats: state.search.form.categories,
    cat_idx: state.search.params.cat_idx,
    city: state.search.params.city,
    geo: state.geo
  };
}


export default connect(mapStateToProps, actions)(SearchForm);

        // <ListItem key={"li-1"} value={-1} primaryText="Any" secondaryText="Search any type of walk"/>
