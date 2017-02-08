import React, {Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect } from 'react-redux';
import { checkConn } from 'actions/appActions';

require('./transitions.scss');

export default function(InputComponent, props) {
  class SlideIn extends Component {

    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.props.checkConn();
    }

    render() {
      let name = `pageSlider-${props.fromDir.toLowerCase() || 'right'}`;
      return (
       <ReactCSSTransitionGroup 
          component="div"
          transitionName={name}
          transitionEnter={true}
          transitionEnterTimeout={650}
          transitionAppear={true}
          transitionAppearTimeout={650}
          transitionLeaveTimeout={1000}>
          <InputComponent {...props} />
       </ReactCSSTransitionGroup>
      );
    }
  }

  return connect(null, { checkConn })(SlideIn);
}