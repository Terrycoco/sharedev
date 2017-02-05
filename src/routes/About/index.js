import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';


require('./about.scss');

class About extends Component {
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
        <PageBar title="About" leftIcon="hamburger" backTo="/" />
        <div className="CONTENT">
         <p>Author: Terry Marr</p>
          <p>Built Using: </p>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(About);