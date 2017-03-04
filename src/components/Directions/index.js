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
    this.state = {open: false};
    this.renderItems = this.renderItems.bind(this);
    this.getClickHandler = this.getClickHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderAddress = this.renderAddress.bind(this);
    this.handleHere = this.handleHere.bind(this);
  }

  getClickHandler(idx) {
    //set current Maneuver idx
    let func = this.props.setCurrentManeuver;
    let handler = function() {
      func(idx);
    }
    return handler;
  }
  
  handleClick() {
    this.props.onStopClick();
  }

  handleHere() {
    this.props.onNextStopClick();
  }

  renderAddress() {
    //if this is not the last stop
    console.log('ssidx:', this.props.selectedStopIdx);
    console.log('stops.length: ', this.props.stops.length);
    if (this.props.selectedStopIdx < this.props.stops.length) {
      //get the street address of next stop
      let addr = this.props.stops[this.props.selectedStopIdx + 1].address;
      console.log('addr:', addr);
      //return it as a li
      return <li key={"addr"} className="address">{addr}</li>;
    }
  }

  renderItems() {
    let classname;
    let maneuvers = this.props.route[this.props.selectedStopIdx].maneuvers;

    if (maneuvers.length == 0) {
      return <li key="man">Next Stop is here</li>
    }
    return maneuvers.map((man, idx) => {
      //current maneuver
      if (idx == this.props.selectedManeuverIdx) {
        return <li key={man + man.index} className="maneuver-current"  onClick={this.getClickHandler(idx)}>{man.narrative}</li>
      }
      //last maneuver
      else if (idx == maneuvers.length - 1 ) {
        return <li key={man + man.index} className="last-stop"><RaisedButton label="I'm Here!" style={styles.button} onClick={this.handleHere}/></li>
      }
      //other maneuver
      else {
        return <li key={man + man.index} className="maneuver"  onClick={this.getClickHandler(idx)}>{man.narrative}</li>
      }
      
    });
  }

  render() {
    return (
      <ul className="maneuver-container">
       {this.renderAddress()}
       {this.renderItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.walks.selectedWalk.route,
    stops: state.walks.selectedWalk.stops,
    selectedStopIdx: state.walks.selectedWalk.selectedStopIdx,
    selectedManeuverIdx: state.walks.selectedWalk.selectedManeuverIdx
  };
}

export default connect(mapStateToProps, actions)(Directions);