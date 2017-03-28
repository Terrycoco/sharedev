import React, { Component } from 'react';
import {connect} from 'react-redux';
import {requestRoute} from 'actions/navActions';


require('./pagebar.scss');

const icons = {
  hamburger: "/images/menu_white.png",
  goLeft: "/images/left_arrow.png",
  goRight: "/images/right_arrow.png",
  info: "/images/info.png"
};



class PageBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerLeft: " ",
      innerRight: " "
    };
    this.getHandler = this.getHandler.bind(this);
    this.setInner = this.setInner.bind(this);
  }



  componentDidMount() {
    this.setInner(this.props);
  }

  setInner(props) {
    //sets state
    if (props.iconLeft && icons[props.iconLeft]) {
      this.setState({innerLeft: <img src={icons[props.iconLeft]} />});
    //if text 
    } else  {
      this.setState({innerLeft: props.iconLeft});
    }

    if (props.iconRight && icons[props.iconRight]) {
      this.setState({innerRight: <img src={icons[props.iconRight]} />});
    //if text 
    } else  {
      this.setState({innerRight: props.iconRight});
    }
  }

  componentWillReceiveProps(nextProps) {
   this.setInner(nextProps);
  }

  getHandler(side) {
      if (this.props['on' + side]) {
        let passed = this.props['on' + side];
        //if passed in use it
        if (typeof passed === 'function') {
          return function(event) {
            passed(); //flips
          }
        }
        else if (passed === 'prev') {
          let prev = this.props.prevRoute;
          let func = this.props.requestRoute;
          let handler = function(e) {
            func(prev, "left");
          }
          return handler;
        } 
        else {
          //just passed name of route to take
          let func = this.props.requestRoute;
          return function(e) {
            func(passed, side.toLowerCase());
          }
        }
      //not passed
      } else {
         return function(e) {
          //does nothing
         }
      }

  }


  render() {
    return (
      <div className="PageBar">
        <span className="Left" onClick={this.getHandler("Left")}>{this.state.innerLeft}</span>
        <span className="title">{this.props.title}</span>
        <span className="Right" onClick={this.getHandler("Right")}>{this.state.innerRight}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    prevRoute: state.nav.prevRoute
  };
}


export default connect(mapStateToProps, {requestRoute})(PageBar);
