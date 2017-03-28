import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import * as actions from 'actions/navActions';

require('./coming.scss');

class Coming extends Component {
  constructor(props){
    super(props);
  }

  handleTouchTap(e) {
    e.preventDefault();
  }
  render() {
    let style = {zIndex: this.props.zindex};
    return (
      <div style={style} className="PAGE" key="about">
        <PageBar title="Coming Soon" iconLeft="hamburger" onLeft="home" />
        <div className="CONTENT center-children">
        <div className="FORM">
         <div className="textbox">
            <h4 className="header">Coming Soon</h4>
            <p>Hi and thanks for visiting ShareWalks!</p>
            <p>We are hard at work finishing this feature.  If you like what you see, we'd love to hear from you!</p>
            <p><a href= "mailto:sharewalks1@gmail.com">Send Feedback</a></p>
          </div>
         <div className="FIXED-FOOTER">
             <RaisedButton label="Back" secondary={true} onClick={this.props.goBack} />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Coming);