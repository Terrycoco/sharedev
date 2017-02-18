import React, {Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect } from 'react-redux';
import { checkConn } from 'actions/appActions';

require('./transitions.scss');

export default function(InputComponent, props) {
  class SlideIn extends Component {

    constructor(props) {
      super(props);
      console.log('got to slidein: ', props);
      //priority given to direction passed in, then store
      this.state = {
        fromDir: props.fromDir || this.props.fromDir || "right"
      };
    }

    componentWillMount() {
      this.props.checkConn();
    }

    render() {
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
          <InputComponent {...props} />
       </ReactCSSTransitionGroup>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      fromDir: state.forms.create.fromDir
    };
  }

  return connect(mapStateToProps, { checkConn })(SlideIn);
}