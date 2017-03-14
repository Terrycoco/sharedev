import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import WalkingMap from './WalkingMap';
import Drawer from 'components/Drawer';
import Directions from './Directions';
import * as actions from 'actions/walkActions';
import StopDetail from './StopDetail';
import FadeIn from 'components/Transitions/FadeIn';

require('./walking.scss');
require('./directions.scss');
require('./stop.scss');

class Walking extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFlipped: false //flip shows the map
    };
    this.handleClick = this.handleClick.bind(this);
    this.toNext = this.toNext.bind(this);
    this.toPrev = this.toPrev.bind(this);
    this.flip = this.flip.bind(this);
    this.goToTop = this.goToTop.bind(this);
  }

  componentDidUpdate() {
    this.goToTop();
  }


  flip() {
    this.setState({isFlipped: !this.state.isFlipped});
    console.log('flip after set', this.state.isFlipped);
    this.goToTop();
  }

  toNext() {
    //called back from drawer directions
    let nextStopIdx = this.props.selectedStopIdx + 1;
    if (nextStopIdx <= this.props.stopCount - 1  ) {
      this.props.saveStopIdx(nextStopIdx);
   }
  }

  goToTop() {
    console.log('flip goToTop', this.state.isFlipped);
    if (!this.state.isFlipped) {
      console.log('got here');
      document.getElementById('toppage').scrollIntoView();
    }
  }

  toPrev() {
    //called back from drawer directions
    let prevStopIdx = this.props.selectedStopIdx - 1;
    if (prevStopIdx >= 0) {
      this.props.saveStopIdx(prevStopIdx);
      this.goToTop();
    }
  }

  handleClick(e) {
    e.preventDefault();
    let walkId = this._name.value;
    this.props.getWalkStops(walkId ); //opens stops after
  }
  
  render() {
    return (
      <div className="PAGE" key="walking">
        <PageBar title="Walking" iconLeft="goLeft" onLeft="summary" iconRight={(this.state.isFlipped) ? "info" : "Map"} onRight={this.flip} />
        <div className="CONTENT">
          <div className="COLUMN-1">
           <div className={(this.state.isFlipped) ? 'flip-container flip' : 'flip-container'}>
              <div className="flipper">
                <div className="front" >
                  <StopDetail isShowing={!this.state.isFlipped} />
                </div>
                 <div className="back" >
                  <WalkingMap />
                  <Directions onNextStopClick={this.toNextStop}  />
                </div>
              </div>
            </div> 
           
            <div className="stop-btns">
             <button className="btn-sm" onClick={this.toPrev}>Prev</button>
             <button className="btn-sm" onClick={this.toNext}>Next</button>
           </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
   let selectedWalk = state.walks.selectedWalk;
  return {
    stopCount: selectedWalk.stops.length,
    selectedStopIdx: selectedWalk.selectedStopIdx
  };
}


export default connect(mapStateToProps, actions)(Walking);
