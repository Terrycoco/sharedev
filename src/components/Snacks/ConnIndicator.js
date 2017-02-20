import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux';
import {checkConn} from 'actions/appActions';

class ConnIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  componentWillMount() {
    this.props.checkConn();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.offline != this.props.offline) {
      this.setState({open: true});
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  }
  render() {
    let msg;
    if (this.props.offline) {
       msg = "You are offline";
    } else {
      msg = "You are back online";
    }
    return (
      <Snackbar
        open={this.state.open}
        message={msg}
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    offline: state.app.offline
  };
}


export default connect(mapStateToProps, {checkConn})(ConnIndicator);