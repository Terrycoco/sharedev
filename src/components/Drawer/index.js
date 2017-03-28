import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions/walkActions';

require('./drawer.scss');

class Drawer extends Component {
 constructor(props) {
  super(props);
   this.togDrawer = this.togDrawer.bind(this);
 }

 togDrawer() {
  this.props.toggleDrawer();
 }
 

 render() {
  return (
    <div className={"slider " + (this.props.drawerOpen ? "open" : "closed")}> 
     {this.props.children}
    </div>
  );
 }
}

function mapStateToProps(state) {
  return {
    drawerOpen: state.walks.ui.drawerOpen
  };
}


export default connect(mapStateToProps, actions)(Drawer);