import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import LeafletMap from 'components/Maps/LeafletMap';
import WalkList from 'components/Walks/WalkList';
import * as actions from 'actions';

require('./results.scss');


class Results extends Component {
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
    this.props.getWalkDetails(walkId, this.context.router);
  }
  
  render() {
    return (
      <div className="PAGE" key="results">
        <PageBar title="Find A Walk" leftIcon="goLeft" backTo="/searchL" fwdTo={(this.state.isFlipped) ? "List" : "Map"} onFlip={this.flip} />
        <div className="CONTENT">
          <input ref={input => this._name = input} id="walkId" className="hidden"></input>
          <button id="goToDetails" onClick={this.handleClick} className="hidden"></button>
          <div className={(this.state.isFlipped) ? 'flip-container flip' : 'flip-container'}>
            <div className="flipper">
              <div className="front" >
                <WalkList />
              </div>
              <div className="back" >
               <LeafletMap />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default connect(null, actions)(Results);

 // <div className="back-logo"></div>
 //                <div className="back-title">@davidwalshblog</div>
 //                <p>Mozilla Web Developer, MooTools & jQuery Consultant, MooTools Core Developer, Javascript Fanatic, CSS Tinkerer, PHP Hacker, and web lover.</p>