import React, {Component} from 'react';
import * as actions from 'actions/navActions';
import {connect} from 'react-redux';

class Link extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.requestRoute(this.props.to, this.props.fromDir);
  }
  render() {
    return (
      <span key={this.props.key} onClick={this.handleClick}>{this.props.children}</span>
    );
  }
}

Link.propTypes = {
  to: React.PropTypes.string.isRequired,
  fromDir: React.PropTypes.string,
  key: React.PropTypes.string
};

export default connect(null, actions)(Link);