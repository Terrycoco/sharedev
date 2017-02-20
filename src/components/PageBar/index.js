import React, { Component } from 'react';
import {myColors} from 'styles/theme';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

require('./pagebar.scss');

const icons = {
  hamburger: "/images/menu_white.png",
  goLeft: "/images/left_arrow.png",
  goRight: "/images/right_arrow.png"
};



function back(prevPath) {
  //add the L if not there
  if (prevPath == '' ) return "/";
  if (prevPath.charAt(0) !== "/") {
    prevPath = "/" + prevPath;
  }
  if (prevPath.slice(-1) !== "L") {
    return prevPath + "L";
  }
  return prevPath;
}

class PageBar extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    //if passed in use it
    if (this.props.backTo) {
      browserHistory.push(back(this.props.backTo));
    } else {
     browserHistory.push(back(this.props.prevPath));
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
    prevPath: state.app.prevPath  //put there by app
  };
}


export default connect(mapStateToProps, actions)(PageBar);


 // 

      // <AppBar title={this.props.title}
      //         onTouchTap={this.handleTouchTap.bind(this)}
      //         showMenuIconButton={this.props.leftIcon}
      //         style={{backgroundColor: myColors[this.props.color]
      //                 }} />