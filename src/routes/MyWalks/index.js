import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';
import MyWalkList from 'components/Walks/MyWalkList';

class MyWalks extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    //fetch mywalks 
    this.props.getMyWalks(); 
  }

  handleTouchTap(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="PAGE MYWALKS" key="mywalks">
        <PageBar title="My Walks" leftIcon="hamburger" backTo="home" />
        <div className="CONTENT ">
         <div className="COLUMN center-children">
           <MyWalkList />
        </div>
        </div>
      </div>
    );
  }
}


export default connect(null, actions)(MyWalks);