import React, {Component} from 'react';
import {connect } from 'react-redux';
import * as actions from 'actions/formActions';
import RaisedButton from 'material-ui/RaisedButton';

require('./forms.scss');

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.getDescr = this.getDescr.bind(this);
    this.state = {
      descr: props.descr
    };
  }
  getDescr() {
    return {__html: this.state.descr};
  }

  render() {
    return (
     <div className="FORM">
       <div className="form-text" dangerouslySetInnerHTML={this.getDescr()} />
       <RaisedButton label="Let's Get Started" secondary={true} onClick={this.goNext} />
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    descr: state.form.create.intro
  };
}

export default connect(mapStateToProps, actions)(CreateForm);