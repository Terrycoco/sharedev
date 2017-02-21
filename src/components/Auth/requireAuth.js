import React, { Component } from 'react';
import { connect } from 'react-redux';
import SlideIn from 'components/Transitions/SlideIn';
import * as actions from 'actions/authActions';

export default function(InputComponent, objProps) {
  class Authenticated extends Component {
    constructor(props) {
      super(props);
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

        this.props.requestRoute('signin', 'left');
      }
    }

    //and when the props change
    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        //send where we want to go to the store
        this.props.authRoute(this.state.toRoute);

        this.props.requestRoute('signin', 'left');
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