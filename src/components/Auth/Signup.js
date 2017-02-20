import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/authActions';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import PageBar from 'components/PageBar';
import ErrorBox from 'components/Auth/ErrorBox';
import {Link} from 'react-router';
import {theme} from 'styles/theme';


require('./auth.scss');
require('../Forms/forms.scss');

const style = {
  errors: {
     color: theme.errorText
   }
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errors: {}
    };
    this.doSubmit = this.doSubmit.bind(this);
    this.doCancel = this.doCancel.bind(this);
    this.validate = this.validate.bind(this);
  }

  //grab router from context
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillMount() {
    this.props.clearError();
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
    this.setState({errors: {}}); //clear errors
    this.props.clearError();
  }

  handleBlur(name, e) {
    this.validate(name);
  }

  doSubmit() {
    this.handleBlur('passwordConfirm');
    let values = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    this.props.signupUser(values, this.context.router, this.props.toRoute);
  }
  
  validate(name) {
    this.setState({errors: {}}); //clear errors
    let errors = {};
    switch(name){
      case 'username':
         if (this.state.username.trim().length < 1) {
           errors.username = "Username is required";
           break;
         }
      case 'email':      
        if (this.state.email.length < 4 ) { //TODO: regex email validation
          errors.email = "Must be a valid email";
          break;
        }
      case 'password':
        if (this.state.password.length < 1) {
          errors.password = "Password is required";
          break;
        }
      case 'passwordConfirm':
        if (this.state.password !== this.state.passwordConfirm) {
          errors.passwordConfirm = 'Passwords must match';
        }
    }
    this.setState({errors: errors});
  }

  doCancel() {
    this.context.router.push('/');
  }

  render() {
    return (
     <div className="PAGE SEARCH" key="signup">
         <PageBar title="Signup" leftIcon="hamburger" backTo="/"/>
        
         <div className="CONTENT center-children">
           <div className="FORM" id="signup-form">
            <form >
                <div className="msg">
                  <p>Sign up to ShareWalks to continue</p>
                   <span className="linkDiv">Already a User? <Link to={{ pathname: "/signin"}}>Sign In Here</Link></span>
                  </div>
             
                <TextField
                    hintText="Username"
                    floatingLabelText="Username"
                    onChange={this.handleChange.bind(this, 'username')}
                    onFocus={this.handleFocus.bind(this, 'username')}
                    onBlur={this.handleBlur.bind(this, 'username')}
                    value={this.state.username}
                    errorText={this.state.errors.username}
                    errorStyle={style.errors}
                  /><br />
                <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    onChange={this.handleChange.bind(this, 'email')}
                    onFocus={this.handleFocus.bind(this, 'email')}
                    value={this.state.email}
                    errorText={this.state.errors.email}
                    errorStyle={style.errors}
                  /><br />
                <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    type="password"
                    onChange={this.handleChange.bind(this, 'password')}
                    onFocus={this.handleFocus.bind(this, 'password')}
                    value={this.state.password}
                    errorText={this.state.errors.password}
                    errorStyle={style.errors}
                  /><br />
                <TextField
                    hintText="Confirm Password"
                    floatingLabelText="Confirm Password"
                    type="password"
                    onChange={this.handleChange.bind(this, 'passwordConfirm')}
                    onFocus={this.handleFocus.bind(this, 'passwordConfirm')}
                    onBlur={this.handleBlur.bind(this, 'passwordConfirm')}
                    value={this.state.passwordConfirm}
                    errorText={this.state.errors.passwordConfirm}
                    errorStyle={style.errors}
                  /><br /><br />
                    <div className="left-children">
                   <RaisedButton label="Sign Up" secondary={true} onClick={this.doSubmit} />
                   <FlatButton label="Cancel" secondary={true} onClick={this.doCancel} />
                    </div>

                        <ErrorBox error={this.props.error} />

            </form>
          </div>
         </div>
     </div>
    );
  }

}

function mapStateToProps(state) {
  return {
   error: state.auth.error
  };
}

export default connect(mapStateToProps, actions)(Signup);