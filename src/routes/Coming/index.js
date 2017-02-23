import React, { Component } from 'react';
import PageBar from 'components/PageBar';



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
      <div style={style} className="PAGE ABOUT" key="about">
        <PageBar title="About" leftIcon="hamburger" backTo="home" />
        <div className="CONTENT center-children">
         <div className="textbox">
            <span className="header center-children">
                  <h4>Coming Soon</h4>
            </span>
            <p>Hi and thanks for visiting ShareWalks!</p>
            <p>We are hard at work finishing this feature.  If you like what you see, we'd love to hear from you!</p>
            <p>  <a href= "mailto:sharewalks1@gmail.com">Send Feedback</a></p>
        </div>
        </div>
      </div>
    );
  }
}

export default Coming;