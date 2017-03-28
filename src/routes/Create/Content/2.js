import React, {Component} from 'react';
import {connect } from 'react-redux';
import * as actions from 'actions/formActions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


require('styles/_forms.scss');

class Create2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title || '',
      walk_descr: props.walk_descr || ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescrChange = this.handleDescrChange.bind(this);
  }


  componentDidMount() {
    this.props.createGoNext(2);
  }


  handleTitleChange(event, value) {
    this.setState({title: value.trim()});
    this.props.saveFormState({title: value.trim()})
  }


  handleDescrChange(event, value) {
    this.props.saveFormState('create', {walk_descr: value.trim()})
    this.setState({walk_descr: value.trim()});
  }

 


  render() {
    return (
       <div className="FORM" key="create2">
        <form className="form-text">
          <span className="header center-children"><h4>Walk Title and Summary</h4></span>
          <p>Give your walk a title and brief description. In a paragraph or two, let others know what they can expect to see and do on your walk.</p> 
            <TextField
                id="titleCreate"
                value={this.state.title}
                placeholder="Walk Title"
                floatingLabelText="Walk Title"
                floatingLabelFixed={true}
                onChange={this.handleTitleChange}
                fullWidth={true}
             />
            <br />
           <p></p>
   
          <TextField
                id="walkDescrCreate"
                value={this.state.walk_descr}
                placeholder="Walk Summary"
                floatingLabelText="Walk Summary"
                floatingLabelFixed={true}
                onChange={this.handleDescrChange}
                fullWidth={true}
                multiLine={true}
              />
            <br />

          <br />
        </form>
 
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.forms.create.params.title,
    walk_descr: state.forms.create.params.walk_descr
  };
}

export default connect(mapStateToProps, actions)(Create2);