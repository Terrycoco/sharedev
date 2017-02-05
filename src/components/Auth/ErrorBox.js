import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('./auth.scss');


export class ErrorBox extends Component {
  constructor(props) {
    super(props);
    this.renderError = this.renderError.bind(this);
  }
  renderError() {
    if (this.props.error) {
      return <div key="errbox" className="form-error">{this.props.error}</div>
    }
  }

  render () {

    return (

        <ReactCSSTransitionGroup 
            component="div"
            transitionName="fader"
            transitionEnter={true}
            transitionEnterTimeout={650}
            transitionLeave={true}
            transitionLeaveTimeout={1000}>
            {this.renderError()}
    </ReactCSSTransitionGroup>

    );
  }
}

export default ErrorBox;