import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';


class Test extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.getRoute(2);
  }
  render() {
    return (
      <div className="PAGE CREATE" >
        <PageBar title="Testing" leftIcon="hamburger" backTo="/L" />
        <div className="CONTENT">
        <button onClick={this.handleClick}>Route</button>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Test);