import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import * as actions from 'actions/searchActions';
import SnakeMap from 'components/Maps/SnakeMap';

require('./details.scss');


class Details extends Component {
  constructor(props){
    super(props);
  }


  render() {

    return (
      <div className="PAGE" key="details">
        <PageBar title="Find A Walk" leftIcon="goLeft" backTo="/resultsL" />
        <div className="CONTENT">
          <SnakeMap  />
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
