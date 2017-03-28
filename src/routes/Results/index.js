import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import LeafletMap from 'components/Maps/LeafletMap';
import WalkList from 'components/Walks/WalkList';
import * as actions from 'actions';
import sizing from 'styles/sizing';

require('./results.scss');



class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFlipped: false
    };
    this.flip = this.flip.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.responsiveDesign = this.responsiveDesign.bind(this);
  }

  componentDidMount() {
    // this.props.setRightText('Map');
  }


  flip() {
     this.setState({isFlipped: !this.state.isFlipped});

  }

  handleClick(e) {
    e.preventDefault();
    let walkId = this._name.value;
    this.props.getWalkSummary(walkId);
  }

  responsiveDesign() {
    let style;
   

   //small screens
    if (this.props.browser.lessThan.medium) {
      style = {width: this.props.browser.width, height: this.props.browser.height - sizing.header.sm};
      return [
      <PageBar key="pagebar" title="Find A Walk" iconLeft="goLeft" onLeft="search" onRight={this.flip} iconRight={(this.state.isFlipped ? "List" : "Map")} />,
      <div key="content" className="CONTENT-NOT-PARENT">  
        <div className={(this.state.isFlipped) ? 'flip-container flip' : 'flip-container'}>
            <div className="flipper">
              <div className="front FLIP-CONTENT" >
                 <div className="COLUMN-1" style={style}>
                  <WalkList />
                 </div>
              </div>
              <div className="back FLIP-CONTENT">
                 <div className="COLUMN-1"  style={style}>
                  <LeafletMap />
                 </div>
              </div>
            </div>
        </div>
      </div>];

      //larger screens
     } else {
       style = {width: this.props.browser.width * .49, height: this.props.browser.height - sizing.header.md };
       return [
         <PageBar key="pagebar" title="Find A Walk" iconLeft="goLeft" onLeft="search" />,
          <div key="content" className="CONTENT"> 
             <div key="1" className="COLUMN-1" style={style}>
                <WalkList />
             </div>,
             <div key="2" className="COLUMN-1" style={style}>
                <LeafletMap />
             </div>
         </div>
        ];
     }
    
  }
  
  render() {
    return (
      <div className="PAGE" key="results" >
        <input ref={input => this._name = input} id="walkId" className="hidden"></input>
        <button id="goToSummary" onClick={this.handleClick} className="hidden"></button>
         {this.responsiveDesign()}
        </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    browser: state.browser
  };
}

export default connect(mapStateToProps, actions)(Results);