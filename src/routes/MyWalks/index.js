import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';
import MyWalkList from 'components/Walks/MyWalkList';
import {browserHistory} from 'react-router';

class MyWalks extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    //fetch mywalks 
    this.props.getMyWalks(browserHistory); 
  }

  handleTouchTap(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="PAGE MYWALKS" key="mywalks">
        <PageBar title="My Walks" leftIcon="hamburger" backTo="/home" />
        <div className="CONTENT center-children">
           <MyWalkList />
        </div>
      </div>
    );
  }
}


export default connect(null, actions)(MyWalks);