import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from 'actions/walkActions';

require('./stop.scss');


class StopDetail extends Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate() {
    if (this.props.isShowing) {
      ReactDOM.findDOMNode(this.refs.toppage).scrollIntoView();
    }
  }

  render() {
    let kicker = this.props.walkTitle;
    return (
      <div className="FORM stop-container">
        <div id="toppage" className="toppage" ref="toppage">--</div>
        <div className="kicker" >{kicker}</div>
        <h4 className="walk-title"  >{this.props.stop.pt_title}</h4>
        <hr className="primary"/> 
        <p className="fade textbox"  >{this.props.stop.pt_descr}</p>
        <hr className="primary"/> 
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    walkTitle: state.walks.selectedWalk.title,
    stop: state.walks.selectedWalk.stops[state.walks.selectedWalk.selectedStopIdx]
  };
}

export default connect(mapStateToProps, actions)(StopDetail);