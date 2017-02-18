import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import WalkingMap from 'components/Maps/WalkingMap';
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
  //grab router from context
  static contextTypes = {
    router: React.PropTypes.object
  }

  flip() {
     this.setState({isFlipped: !this.state.isFlipped});
  }

  handleClick(e) {
    e.preventDefault();
    let walkId = this._name.value;
    this.props.getWalkStops(walkId, this.context.router); //opens stops after
  }
  
  render() {
    return (
      <div className="PAGE" key="results">
        <PageBar title="Walk Stops" leftIcon="goLeft" backTo="/summary" fwdTo={(this.state.isFlipped) ? "List" : "Map"} onFlip={this.flip} />
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
   walkId: state.search.selectedWalk.walkId
 };
}


export default connect(mapStateToProps, actions)(Stops);
