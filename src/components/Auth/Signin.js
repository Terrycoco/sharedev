import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/authActions';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import PageBar from 'components/PageBar';
import {Link} from 'react-router';
import ErrorBox from 'components/Auth/ErrorBox';
import Loader from 'components/Loader';
import {theme} from 'styles/theme';

require('./auth.scss');

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

  //grab router from context
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillMount() {
    this.props.clearError();
  }

  doSubmit() {
    const values = {
      usernameOrEmail: this.state.usernameOrEmail,
      password: this.state.password
    };
    this.props.signinUser(values, this.context.router); //will go to authRoute on success
  }

  doCancel() {
    this.context.router.push('/');
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
      <div >
         <PageBar title="Signin" leftIcon="hamburger" backTo="/" />

         <div className="CONTENT center-children">
          <div className="FORM">
            <form >
                <div className="msg">
                  <p>Sign in to ShareWalks to continue</p>
                   <span className="linkDiv">New User? <Link to={{ pathname: "/signup"}}>Sign Up Here</Link></span>
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

export default connect(mapStateToProps, actions)(Signin);