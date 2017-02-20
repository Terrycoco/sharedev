import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux';
import {welcomed} from 'actions/appActions';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  componentDidMount() {
    console.log('welcome mounted props:', this.props);
    if (this.props.authenticated && !this.props.welcomed) {
       this.setState({open: true});
       this.props.welcomed();
    }
  }

  componentWillReceiveProps(nextProps) {
     console.log('welcome nextprops:', nextProps);
    if (nextProps.authenticated && nextProps.welcomedBack == false) {
       this.setState({open: true});
       this.props.welcomed();
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  }
  render() {
    let msg;
    if (this.props.new) {
      msg = `Welcome to ShareWalks, ${this.props.username}!`;
    } else {
      msg = `Welcome back, ${this.props.username}!`;
    }
    return (
      <Snackbar
        open={this.state.open}
        message={msg}
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose.bind(this)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    welcomedBack: state.app.welcomed,
    new: state.auth.new,
    username: state.auth.username
  };
}


export default connect(mapStateToProps, {welcomed})(Welcome);