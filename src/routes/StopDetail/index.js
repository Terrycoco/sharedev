import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import * as actions from 'actions/walkActions';
//import SnakeMap from 'components/Maps/SnakeMap';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {browserHistory} from 'react-router';

require('./summary.scss');


class StopDetail extends Component {
  constructor(props){
    super(props);
    this.renderAttributes = this.renderAttributes.bind(this);
    this.goToStops = this.goToStops.bind(this);
  }

  goToStops() {
    this.props.getWalkStops(this.props.walk.id, browserHistory);
  }

 

  render() {

    return (
      <div className="PAGE" key="summary">
        <PageBar title="Walk Summary" leftIcon="goLeft" backTo="/resultsL" />
        <div className="CONTENT">

          <div className="stop-content">

            <h4 id="stop-title">{this.props.walk.title}</h4>
            <p className="byline">Brought to you by <span className="username">{this.props.walk.username}</span></p>
            <hr className="primary"/> 
            <p className="walkdescr">{this.props.walk.descr}</p>
            <hr className="primary"/> 


            <div className="even-children">
             <RaisedButton id="summary_savebtn" label="Save To MyWalks" secondary={true} />
             <RaisedButton label="See Stops" secondary={true} onClick={this.goToStops} />
            </div>
         </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stop: state.search.selectedWalk.id
  };
}

export default connect(mapStateToProps, actions)(StopDetail);