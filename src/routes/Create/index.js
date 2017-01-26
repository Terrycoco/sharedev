import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';



class Create extends Component {
  constructor(props){
    super(props);
  }

  handleTouchTap(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="PAGE CREATE" >
        <PageBar title="Create a Walk" leftIcon="hamburger" backTo="/L" />
        <div className="CONTENT">
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Create);