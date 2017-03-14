import React, { Component } from 'react';
import PageBar from 'components/PageBar';



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
        <PageBar title="About" iconLeft="hamburger" onLeft="home" />
        <div className="CONTENT">
         <div className="COLUMN-1">
          <div className="FORM">
            <div className="textbox">
           <p>Author: Terry Marr</p>
           <p>Built Using: React, Redux, Leaflet, Node, Postgres</p>
           <p>This project is under construction.  If you like what you see, we'd love to hear from you!</p>
           <p>  <a href= "mailto:sharewalks1@gmail.com">Contact Us</a></p>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default About;