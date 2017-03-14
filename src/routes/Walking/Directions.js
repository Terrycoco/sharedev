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
  }


  getClickHandler(idx) {
    //set current Maneuver idx
    let func = this.props.setCurrentManeuver;
    let handler = function() {
      func(idx);
    }
    return handler;
  }
  

  renderNextStop() {
    //this is the end of the walk?
    let addr = this.props.stops[this.props.selectedStopIdx + 1].address;
    let title = this.props.stops[this.props.selectedStopIdx + 1].pt_title;
    return [<div key="addr" className="next-stop">
                <div className="next-stop-button">
                  <div className="next-title">{title}</div>
                  <div className="next-address">{addr}</div>
                </div>
            </div>,
            ];
  }

  renderItems() {
    let classname;
    if (this.props.selectedStopIdx == this.props.route.length) {
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
        return <li key={man + man.index} className="maneuver last" onClick={this.getClickHandler(idx)} >You have arrived. Rotate device for Stop Info</li>;
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
         <div className="maneuver-title">Directions</div>
          {this.renderNextStop()}
         <ul className="maneuver-container">
             {this.renderItems()}
         </ul>

      </div>
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

// <li key={man + man.index} className="last-stop">
//                     <RaisedButton label="I'm Here!" style={styles.button} onClick={this.handleHere}/>
//                </li>