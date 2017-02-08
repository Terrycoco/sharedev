import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'styles/theme';
import Home from 'routes/Home';
import PageBar from 'components/PageBar';
import { connect } from 'react-redux';
import {checkTokenAndLogin}  from 'actions';
import Indicator from 'components/ConnIndicator';

//app-wide style
require('./app.scss');


class App extends Component {
  componentWillMount() {
    this.props.checkTokenAndLogin();  //also checks conn?
  }
  render() {
    return ( 
      <MuiThemeProvider muiTheme={theme}>
       <div className="APP">
       
       {this.props.children}
         <Indicator />
       </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(null, {checkTokenAndLogin})(App);

