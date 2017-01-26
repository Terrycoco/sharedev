import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import * as actions from 'actions/searchActions';
import SnakeMap from 'components/Maps/SnakeMap';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

require('./details.scss');


class Details extends Component {
  constructor(props){
    super(props);
  }


  render() {

    return (
      <div className="PAGE" key="details">
        <PageBar title="Walk Details" leftIcon="goLeft" backTo="/resultsL" />
        <div className="CONTENT">
          <h2></h2>
          <SnakeMap  />
          <List>
            <Subheader>Walk Details</Subheader>
          </List>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    walk: state.search.selectedWalk
  };
}

export default connect(mapStateToProps, actions)(Details);
