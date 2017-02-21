import React, { Component } from 'react';
import {connect} from 'react-redux';
import {requestRoute} from 'actions/navActions';

require('./pagebar.scss');

const icons = {
  hamburger: "/images/menu_white.png",
  goLeft: "/images/left_arrow.png",
  goRight: "/images/right_arrow.png"
};



class PageBar extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    //if passed in use it
    if (this.props.backTo) {
      this.props.requestRoute(this.props.backTo, "left")
    } else {
      this.props.requestRoute(this.props.prevRoute, "left");
    } 
  }
  
  render() {
    const onLeft = (this.props.leftIcon != null) ? <img className="fade" src={icons[this.props.leftIcon]}/> : <span>  </span>;
    const onRight = (this.props.fwdTo) ? this.props.fwdTo : " ";
    return (
      <div className="PageBar">
        <span className="fade left" onClick={this.goBack}>{onLeft}</span>  
        <span className="title fade">{this.props.title}</span>
        <span onClick={this.props.onFlip} className="fade right">{onRight}</span>     
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
