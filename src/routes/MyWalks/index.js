import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/chevron-left';
import * as actions from 'actions';
import {connect} from 'react-redux';

class MyWalks extends Component {
  constructor(props){
    super(props);
  }

  handleTouchTap(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="PAGE MYWALKS" key="mywalks">
        <PageBar title="My Walks" leftIcon="hamburger" backTo="/homeL" />
        <div className="CONTENT">
           List of Walks
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(MyWalks);