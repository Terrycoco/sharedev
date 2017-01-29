import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/authActions';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import PageBar from 'components/PageBar';
import {browserHistory} from 'react-router';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null
    };
    this.doSubmit = this.doSubmit.bind(this);
    this.doCancel = this.doCancel.bind(this);
  }

  //grab router from context
  static contextTypes = {
    router: React.PropTypes.object
  }
    

  doSubmit() {
    let values = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    this.props.signupUser(values);
  }

  doCancel() {
    this.context.router.goBack();
  }

  render() {
    return (
      <div >
         <PageBar title="Signup" />

         <div className="CONTENT">

            <form className="FORM" onSubmit={this.doSubmit}>
                <p>Sign in to ShareWalks to continue</p>
                <TextField
                    hintText="Username or Email"
                    floatingLabelText="Username or Email"
                  /><br />
                <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    type="password"
                  /><br />
            <RaisedButton label="Sign In" secondary={true} onClick={this.doSubmit} />
            <FlatButton label="Cancel" secondary={true} onClick={this.doCancel} />
                   <br />
            </form>

         </div>
     </div>
    );
  }

}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps, actions)(Signup);