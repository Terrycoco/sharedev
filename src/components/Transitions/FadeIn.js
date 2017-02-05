import React, {Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('./transitions.scss');

export default function(InputComponent) {
  class FadeIn extends Component {
    render() {
      let name = `fader`;
      return (
       <ReactCSSTransitionGroup 
          component="span"
          transitionName={name}
          transitionEnter={true}
          transitionEnterTimeout={650}
          transitionAppear={true}
          transitionAppearTimeout={650}
          transitionLeave={true}
          transitionLeaveTimeout={1000}>
          <InputComponent {...props} />
       </ReactCSSTransitionGroup>
      );
    }
  }

  return FadeIn;
}