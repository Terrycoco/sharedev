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


require('./stop.scss');


class StopDetail extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

          <div className="FORM">
            <h4 id="stop-title">{this.props.stop.pt_title}</h4>
            <hr className="primary"/> 
            <p className="textbox">{this.props.stop.pt_descr}</p>
            <hr className="primary"/>
          </div>
 
  
    );
  }
}

function mapStateToProps(state) {
  return {
    stop: state.walks.selectedWalk.stops[state.walks.selectedWalk.selectedStopIdx]
  };
}

export default connect(mapStateToProps, actions)(StopDetail);