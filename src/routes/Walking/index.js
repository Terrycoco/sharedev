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
      isFlipped: false,
      width: 314,
      height: 300
    };
    this.handleClick = this.handleClick.bind(this);
    this.toNext = this.toNext.bind(this);
    this.toPrev = this.toPrev.bind(this);
    this.flip = this.flip.bind(this);
    this.goToTop = this.goToTop.bind(this);
    this.responsiveDesign = this.responsiveDesign.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
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
    let nextStopIdx = this.props.selectedStopIdx + 1;
    if (nextStopIdx <= this.props.stopCount - 1  ) {
      this.props.saveStopIdx(nextStopIdx);
    }
  }

  goToTop() {
    if (!this.state.isFlipped) {
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

  toggleDrawer() {
    this.props.toggleDrawer();
  }

  handleClick(e) {
    e.preventDefault();
    let walkId = this._name.value;
    this.props.getWalkStops(walkId ); //opens stops after
  }



  responsiveDesign() {
    if (this.props.browser.lessThan.medium) {
      return [
      <PageBar key="pagebar" title="Walking" iconLeft="hamburger" onLeft="home" iconRight={(this.state.isFlipped) ? "info" : "Map"} onRight={this.flip} />,
      <div key="content" className="CONTENT-NOT-PARENT">  
        <div className={(this.state.isFlipped) ? 'flip-container flip' : 'flip-container'}>
            <div className="flipper">
              <div className="front FLIP-CONTENT" >
                  <div className="COLUMN-1">
                    <StopDetail isShowing={!this.state.isFlipped} />
                  </div>
              </div>
              <div className="back FLIP-CONTENT" >
                  <div className="COLUMN-1" >
                     <WalkingMap />
                   </div>
              </div>
            </div>
        </div>
        </div>];
     } else {
       return [
         <PageBar key="pagebar" title="Walking" iconLeft="hamburger" onLeft="home" />,
          <div key="content" className="CONTENT"> 
             <div key="1" className="COLUMN-1">
                 <StopDetail isShowing={!this.state.isFlipped} />
             </div>,
             <div key="2" className="COLUMN-1">
                 <WalkingMap />
             </div>
         </div>
        ];
     }
    
  }
  
  render() {
    let prevClass = null;
    let nextClass = null;
    if (this.props.selectedStopIdx == 0 ) {
      prevClass = "disabled";
    } else if (this.props.selectedStopIdx == this.props.lastStopIdx) {
      nextClass = "disabled";
    }
    return (
      <div className="PAGE" key="walking">
        {this.responsiveDesign()}
        <Drawer><Directions/></Drawer>
        <div className="FIXED-FOOTER stop-btns">
           <button className={"btn-sm " + prevClass} onClick={this.toPrev} disabled={(prevClass ? true : false)}>Prev</button>
           <button className="btn-sm dir-btn" onClick={this.toggleDrawer} >Directions</button>
           <button className={"btn-sm " + nextClass} onClick={this.toNext} disabled={(nextClass ? true : false)} >Next</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
   let selectedWalk = state.walks.selectedWalk;
  return {
    stopCount: selectedWalk.stops.length,
    selectedStopIdx: selectedWalk.selectedStopIdx,
    lastStopIdx: selectedWalk.lastStopIdx,
    browser: state.browser,
    drawerOpen: state.walks.ui.drawerOpen
  };
}


export default connect(mapStateToProps, actions)(Walking);
