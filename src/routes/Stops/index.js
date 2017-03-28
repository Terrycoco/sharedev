import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import WalkingMap from 'routes/Walking/WalkingMap';
import StopList from 'components/Walks/StopList';
import * as actions from 'actions';


class Stops extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFlipped: false
    };
    this.flip = this.flip.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  flip() {
     this.setState({isFlipped: !this.state.isFlipped});
  }

  handleClick(e) {
    e.preventDefault();
    let walkId = this._name.value;
    this.props.getWalkStops(walkId ); //opens stops after
  }
  
  render() {
    return (
      <div className="PAGE" key="results">
        <PageBar title="Walk Stops" iconLeft="goLeft" onLeft="summary" iconRight={(this.state.isFlipped) ? "List" : "Map"} onRight={this.flip} />
        <div className="CONTENT">
          <input ref={input => this._name = input} id="walkStopId" className="hidden"></input>
          <button id="goToStop" onClick={this.handleClick} className="hidden"></button>
          <div className={(this.state.isFlipped) ? 'flip-container flip' : 'flip-container'}>
            <div className="flipper">
              <div className="front" >
                <StopList />
              </div>
              <div className="back" >
               <WalkingMap />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
   walkId: state.walks.selectedWalk.walkId
 };
}


export default connect(mapStateToProps, actions)(Stops);
