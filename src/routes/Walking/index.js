import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import WalkingMap from 'components/Maps/WalkingMap';
import Drawer from 'components/Drawer';
import Directions from 'components/Directions';
import * as actions from 'actions';
import StopDetail from 'routes/StopDetail';

require('./walking.scss');

class Walking extends Component {
  constructor(props){
    super(props);
    this.state = {
      togDrawer: false,
      isFlipped: false
    };
    this.flip = this.flip.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toNextStop = this.toNextStop.bind(this);
  }

  flip() {
     this.setState({isFlipped: !this.state.isFlipped});
  }

  toggleDrawer() {
     this.setState({togDrawer: !this.state.togDrawer});
  }

  toNextStop() {
    //change selectedStopIdx
    //flip
  }

  handleClick(e) {
    e.preventDefault();
    let walkId = this._name.value;
    this.props.getWalkStops(walkId ); //opens stops after
  }
  
  render() {
    return (
      <div className="PAGE" key="results">
        <PageBar title="Walk Route" leftIcon="goLeft" backTo="summary" fwdTo={(this.state.isFlipped ? "Stop" : "Map")} onFwd={this.flip}  />
        <div id="walking-content">
        <div className={(this.state.isFlipped) ? 'flip-container flip' : 'flip-container'}>
            <div className="flipper">
              <div className="front" >
                <StopDetail />
              </div>
              <div className="back" >
                <WalkingMap />
              </div>
            </div>
        </div>
        <Drawer toggleText="Next Stop :" toggleClass="toggle">
            <Directions onNextStopClick={this.toNextStop}  />
        </Drawer>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  
 };
}


export default connect(mapStateToProps, actions)(Walking);
