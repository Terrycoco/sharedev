import React, {Component} from 'react';
import {requestRoute} from 'actions/navActions';
import {connect} from 'react-redux';

class Link extends Component {
  handleClick() {
    this.props.requestRoute(this.props.to, this.props.fromDir);
  }
  render() {
    return (
      <span key={this.props.key} onClick={this.handleClick.bind(this)}>{this.props.children}</span>
    );
  }
}

Link.propTypes = {
  to: React.PropTypes.string.isRequired,
  fromDir: React.PropTypes.string,
  key: React.PropTypes.string.isRequired
};

export default connect(null, {requestRoute})(Link);