import React, { Component } from 'react';
import {myColors} from 'styles/theme';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {Link} from 'react-router';

require('./pagebar.scss');

const icons = {
  hamburger: "/images/menu_white.png",
  goLeft: "/images/left_arrow.png",
  goRight: "/images/right_arrow.png"
};

class PageBar extends Component {
  render() {
    const onLeft = (this.props.leftIcon != null) ? <img className="fade" src={icons[this.props.leftIcon]}/> : <span>  </span>;
    const onRight = (this.props.fwdTo) ? this.props.fwdTo : " ";
    return (
      <div className="PageBar">
        <Link className="fade" to={this.props.backTo}>{onLeft}</Link>     
        <span className="title fade">{this.props.title}</span>
        <span onClick={this.props.onFlip} className="fade right">{onRight}</span>     
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('store:', state);
  return {
    
  };
}



export default connect(mapStateToProps, actions)(PageBar);




      // <AppBar title={this.props.title}
      //         onTouchTap={this.handleTouchTap.bind(this)}
      //         showMenuIconButton={this.props.leftIcon}
      //         style={{backgroundColor: myColors[this.props.color]
      //                 }} />