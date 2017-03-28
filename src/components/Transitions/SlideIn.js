import React, {Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect } from 'react-redux';
import * as actions from 'actions/appActions';

require('./transitions.scss');

export default function(InputComponent, objProps) {
  class SlideIn extends Component {

    constructor(props) {
      super(props);
      //priority given to direction passed in
      this.state = {
        fromDir: objProps.fromDir || "right"
      };
    }

    componentDidMount() {
      console.log('got to slidein');
      this.props.checkConn();
    }

    render() {
        console.log('slide in Render called');
      let name = `pageSlider-${this.state.fromDir}`;
      return (
       <ReactCSSTransitionGroup 
          className="center-children"
          component="div"
          transitionName={name}
          transitionEnter={true}
          transitionEnterTimeout={650}
          transitionAppear={true}
          transitionAppearTimeout={650}
          transitionLeaveTimeout={1000}>
          <InputComponent  />
       </ReactCSSTransitionGroup>
      );
    }
  }

  // function mapStateToProps(state) {
  //   return {
  //     fromDir: state.forms.create.fromDir
  //   };
  // }

  return connect(null, actions)(SlideIn);
}