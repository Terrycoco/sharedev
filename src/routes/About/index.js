import React, { Component } from 'react';
import PageBar from 'components/PageBar';
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
        <PageBar title="About" leftIcon="hamburger" backTo="home" />
        <div className="CONTENT">
          <p>Author: Terry Marr</p>
          <p>Built Using: React, Redux, Leaflet, Node, Postgres</p>
          <p>This project is under construction.  If you like what you see, write me at sharewalks1@gmail.com.</p>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(About);