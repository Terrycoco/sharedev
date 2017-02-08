import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import CreateForm from 'components/Forms/CreateForm';

require('./create.scss');

class Create extends Component {
  constructor(props){
    super(props);
    this.goNext = this.goNext.bind(this);
  }
  //grab router from context
  static contextTypes = {
    router: React.PropTypes.object
  } 

  handleTouchTap(e) {
    e.preventDefault();
  }
  goNext() {
    //here we will slide in the next page
  }
  render() {
    return (
      <div className="PAGE CREATE" >
        <PageBar title="Create a Walk" leftIcon="hamburger" backTo="/L" />
        <div className="CONTENT center-children">
          <CreateForm />

        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Create);