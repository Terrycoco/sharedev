import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions/walkActions';
import RaisedButton from 'material-ui/RaisedButton';

require('./directions.scss');

const styles = {
  button: {
    width: "90%"
  }
};



class Directions extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, lastClass: ""};
    this.renderItems = this.renderItems.bind(this);
    this.getClickHandler = this.getClickHandler.bind(this);
    this.renderNextStop = this.renderNextStop.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }


  getClickHandler(idx) {
    //set current Maneuver idx
    let func = this.props.setCurrentManeuver;
    let handler = function() {
      func(idx);
    }
    return handler;
  }
  
  toggleDrawer() {
    this.props.toggleDrawer();
  }

  renderNextStop() {
    //this is the end of the walk?
    let nextStop = this.props.selectedStopIdx + 1;
    if ( nextStop <= this.props.lastStopIdx) {
      let addr = this.props.stops[nextStop].address;
      let title = this.props.stops[nextStop].pt_title;
      return [<div key="addr" className="next-stop">
                  <div className="next-stop-button">
                    <div className="next-title">{title}</div>
                    <div className="next-address">{addr}</div>
                  </div>
              </div>
              ];
    } else {
      return null;
    }
  }

  renderItems() {
    let classname;
    if (this.props.selectedStopIdx == this.props.lastStopIdx) {
      //last stop no next stop
      return [<div key="addr" className="next-stop">
                    <div className="next-stop-button">
                      <div className="next-title">End Walk</div>
                      <div className="next-address">Do something here</div>
                    </div>
              </div>
                ]; 
    } 

    let maneuvers = this.props.route[this.props.selectedStopIdx].maneuvers;

    if (maneuvers.length == 0) {
      return <li key="man">Next Stop is here</li>;
    }
    return maneuvers.map((man, idx) => {
      //current maneuver
      if (idx == this.props.selectedManeuverIdx) {
        return <li key={man + man.index} className="maneuver current" onClick={this.getClickHandler(idx)}>{man.narrative}</li>;
      }
      //last maneuver - you have arrived
      else if (idx == maneuvers.length - 1 ) {
        //do nothing right now
        return <li key={man + man.index} className="maneuver last" onClick={this.getClickHandler(idx)} >{man.narrative}</li>;
      }
      //other maneuver
      else {
        return <li key={man + man.index} className="maneuver"  onClick={this.getClickHandler(idx)}>{man.narrative}</li>;
      }
      
    });
  }

  render() {
    return (
      <div className="fade directions" >
          <div className="maneuver-title" onClick={this.toggleDrawer}>Directions To Next Stop</div>
           {this.renderNextStop()}
          <ul className="maneuver-container">
              {this.renderItems()}
          </ul>
       </div>
    );
  }
}

function mapStateToProps(state) {
  const selectedWalk = state.walks.selectedWalk;
  return {
    route: selectedWalk.route,
    stops: selectedWalk.stops,
    selectedStopIdx: selectedWalk.selectedStopIdx,
    lastStopIdx: selectedWalk.lastStopIdx,
    selectedManeuverIdx: selectedWalk.selectedManeuverIdx
  };
}

export default connect(mapStateToProps, actions)(Directions);

