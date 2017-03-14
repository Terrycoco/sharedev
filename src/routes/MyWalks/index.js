import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions/walkActions';
import {connect} from 'react-redux';
import MyWalkList from 'components/Walks/MyWalkList';

class MyWalks extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    //fetch mywalks 
    this.props.getMyWalks(); 
  }

  handleTouchTap(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="PAGE" key="mywalks" >
        <PageBar title="My Walks" iconLeft="hamburger" onLeft="home" />
        <div className="CONTENT">
         <div className="COLUMN-1">
           <MyWalkList />
         </div>
        </div>
      </div>
    );
  }
}


 
export default connect(null, actions)(MyWalks);