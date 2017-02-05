import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/authActions';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import PageBar from 'components/PageBar';
import {Link} from 'react-router';

require('./auth.scss');

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
    this.props.signinUser(values, this.context.router);
  }

  doCancel() {
    this.context.router.push('/');
  }

  handleChange(name, e) {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  render() {
    let formerr = this.props.error || null;
    return (
      <div >
         <PageBar title="Signin" />

         <div className="CONTENT center-children">

            <form className="FORM" onSubmit={this.doSubmit}>
                <p>Sign in to ShareWalks to continue</p>
                <TextField
                    hintText="Username or Email"
                    onChange={this.handleChange.bind(this, 'usernameOrEmail')}
                    floatingLabelText="Username or Email"
                    value={this.state.usernameEmail}
                  /><br />
                <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    type="password"
                    onChange={this.handleChange.bind(this, 'password')}
                    value={this.state.password}
                  /><br />
                  <div className="form-error">{formerr}</div>
            <RaisedButton label="Sign In" secondary={true} onClick={this.doSubmit} />
            <FlatButton label="Cancel" secondary={true} onClick={this.doCancel} />
            <br />
            <div className="linkDiv">New User? <Link to={{ pathname: "/signup"}}>Sign Up Here</Link></div>
            </form>

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

export default connect(mapStateToProps, actions)(Signin);