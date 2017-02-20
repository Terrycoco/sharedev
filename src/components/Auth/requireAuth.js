import React, { Component } from 'react';
import { connect } from 'react-redux';
import SlideIn from 'components/Transitions/SlideIn';
import * as actions from 'actions/authActions';
import {browserHistory} from 'react-router';

export default function(InputComponent, objProps) {
  class Authenticated extends Component {
    constructor(props) {
      super(props);
      console.log('requireAuth objProps:', objProps);
      this.state = {
        fromDir: objProps.fromDir,
        toRoute: objProps.toRoute 
      };
    }

    
    //check before first render
    componentWillMount() {
      if(!this.props.authenticated) {
        //store where we want to go afterwards
        this.props.authRoute(this.state.toRoute);

        browserHistory.push({ 
          pathname: `/signin`
        });
      }
    }

    //and when the props change
    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        //send where we want to go to the store
        this.props.authRoute(this.state.toRoute);

        browserHistory.push({ 
          pathname: `/signin`
        });
      }
    }

    render() {
      let GoThere = SlideIn(InputComponent, objProps);
      return (
        <GoThere />
      );
    }
  }


  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated
    };
  }

  return connect(mapStateToProps, actions)(Authenticated);
}