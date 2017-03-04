import React, {Component} from 'react';

require('./drawer.scss');

class Drawer extends Component {
 constructor(props) {
  super(props);
   this.state = {
    open: true
   };
   this.togDrawer = this.togDrawer.bind(this);
 }

 togDrawer() {
  this.setState({open: !this.state.open});
 }

 render() {
  return (
    <div className={"drawer " + (this.state.open ? "open" : "")}> 
      <div className="toggle" onClick={this.togDrawer}>{this.props.toggleText}</div>
      
       {this.props.children}
    </div>

  );
 }
}

export default Drawer;