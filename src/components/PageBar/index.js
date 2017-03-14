import React, { Component } from 'react';
import {connect} from 'react-redux';
import {requestRoute} from 'actions/navActions';

require('./pagebar.scss');

const icons = {
  hamburger: "/images/menu_white.png",
  goLeft: "/images/left_arrow.png",
  goRight: "/images/right_arrow.png",
  info: "/images/info.png"
};



class PageBar extends Component {
  constructor(props) {
    super(props);
    this.renderSpan = this.renderSpan.bind(this);
    this.getHandler = this.getHandler.bind(this);
  }

  getHandler(side) {
      if (this.props['on' + side]) {
        let passed = this.props['on' + side];
        //if passed in use it
        if (typeof passed === 'function') {
          return function(event) {
            passed();
          }
        }
        else if (passed === 'prev') {
          let prev = this.props.prevRoute;
          let func = this.props.requestRoute;
          let handler = function(e) {
            func(prev, "left");
          }
          return handler;
        } 
        else {
          //just passed name of route to take
          let func = this.props.requestRoute;
          return function(e) {
            func(passed, side.toLowerCase());
          }
        }
      //not passed
      } else {
         return function(e) {
          //does nothing
         }
      }

  }

  renderSpan(side) {
    let inner;
    //if icon called for show it
    if (this.props['icon'+ side]) {
      if (icons[this.props['icon'+ side]])
         inner = <img className="fade" src={icons[this.props['icon' + side]]} />;
      //not an icon use as text (needed for flipper sometimes)
      else {
         inner = this.props['icon'+ side];
      }
    //if text 
    } else if (this.props['text' + side]) {
      inner = this.props['text' + side];
    }
    return <span className={"fade " + side} onClick={this.getHandler(side)}>{inner}</span>;
  }


  render() {
       return (
      <div className="PageBar">
        {this.renderSpan('Left')}
        <span className="title fade">{this.props.title}</span>
        {this.renderSpan('Right')}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    prevRoute: state.nav.prevRoute
  };
}


export default connect(mapStateToProps, {requestRoute})(PageBar);
