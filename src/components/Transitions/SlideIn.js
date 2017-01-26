import React, {Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('./transitions.scss');

export default function(InputComponent, props) {
  class SlideIn extends Component {
    //grab router from context
    static contextTypes = {
      router: React.PropTypes.object
    }


    
    // //check before first render
    // componentWillMount() {
    //   if(!this.props.authenticated) {
    //     this.context.router.push('/signin'); //redirect
    //   }
    // }

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

  return SlideIn;
}