import React, { Component } from 'react';
import { connect } from 'react-redux';
import SlideIn from 'components/Transitions/SlideIn';
import * as actions from 'actions/authActions';

export default function(InputComponent, objProps) {
  class Authenticated extends Component {
    constructor(props) {
      super(props);
      console.log('got to requireAuth');
      this.state = {
        fromDir: objProps.fromDir,
        toRoute: objProps.toRoute 
      };
    }

    //grab router from context
    static contextTypes = {
      router: React.PropTypes.object
    }
    
    //check before first render
    componentWillMount() {
      if(!this.props.authenticated) {
        //send where we want to go to the store
        this.props.authRoute(this.state.toRoute);

        this.context.router.push({ 
          pathname: `/signin`
        });
      }
    }

    //and when the props change
    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        //pass along where we're going
        this.context.router.push({ 
          pathname: `/signin`
        });
      }
    }

    render() {
      let GoThere = SlideIn(InputComponent, {fromDir: this.state.fromDir});
      return (
        <GoThere {...this.props} />
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