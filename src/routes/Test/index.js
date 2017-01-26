import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';


class Test extends Component {
  constructor(props){
    super(props);
    console.log('test props: ', props);
  }

  handleTouchTap(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="PAGE CREATE" >
        <PageBar title="Testing" leftIcon="hamburger" backTo="/L" />
        <div className="CONTENT">
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Test);