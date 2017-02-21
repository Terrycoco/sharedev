import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import PageBar from 'components/PageBar';
import Link from 'navigation/Link';
import ErrorBox from 'components/Auth/ErrorBox';
import Loader from 'components/Loader';
import {theme} from 'styles/theme';

require('./auth.scss');
require('../Forms/forms.scss');

const style = {
  color: theme.errorText,
  backgroundColor: theme.errorBackground,
  display: 'table'
};


class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: '',
      password: '',
      toRoute: props.toRoute
    };

    this.doSubmit = this.doSubmit.bind(this);
    this.doCancel = this.doCancel.bind(this);
  }


  componentWillMount() {
    this.props.clearError();
  }

  doSubmit() {
    const values = {
      usernameOrEmail: this.state.usernameOrEmail,
      password: this.state.password
    };
    this.props.signinUser(values); //will go to authRoute on success
  }

  doCancel() {
    this.props.requestRoute('home');
  }

  handleChange(name, e) {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  handleFocus(name, e){
    //clear out what's in there
    let field = {};
    field[name] = '';
    this.setState(field);
    this.props.clearError();
  }

  render() {
    return (
      <div className="PAGE SEARCH" key="signin">
         <PageBar title="Signin" leftIcon="hamburger" backTo="/" />

         <div className="CONTENT center-children">
           <div className="FORM" id="signin-form">
            <form >
                <div className="msg">
                  <p>Sign in to ShareWalks to continue</p>
                   <span className="linkDiv">New User? <Link to="signup" key="signupLink" fromDir="left">Sign Up Here</Link></span>
                </div>
            
                <TextField
                    hintText='Username or Email'
                    floatingLabelText="Username or Email"
                    onFocus={this.handleFocus.bind(this, 'usernameOrEmail')}
                    onChange={this.handleChange.bind(this, 'usernameOrEmail')}
                    value={this.state.usernameOrEmail}
                  /><br />
                <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    type="password"
                    onFocus={this.handleFocus.bind(this, 'password')}
                    onChange={this.handleChange.bind(this, 'password')}
                    value={this.state.password}
                  /><br />
                             <br /> <br />

                  <div className="left-children">
                    <RaisedButton label="Sign In" secondary={true} onClick={this.doSubmit} />
                    <FlatButton label="Cancel" secondary={true} onClick={this.doCancel} />
                  </div>
                    {this.props.loader ? <Loader /> : <div></div>}
                    <ErrorBox error={this.props.error} />
             
                        <br />
                    

            </form>

         </div>
         </div>
     </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    error: state.auth.error,
    loader: state.auth.loader
  };
}

export default connect(mapStateToProps, {actions})(Signin);