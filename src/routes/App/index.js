import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'styles/theme';
import Home from 'routes/Home';
import PageBar from 'components/PageBar';
import { connect } from 'react-redux';
import {checkTokenAndLogin, setPrevPath}  from 'actions';
import ConnIndicator from 'components/Snacks/ConnIndicator';
import Welcome from 'components/Snacks/Welcome';


//app-wide style
require('./app.scss');


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.checkTokenAndLogin();  //also checks conn & loads myWalks
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.setPrevPath(this.props.location.pathname); //save in store
    }
  }

  render() {
    return ( 
      <MuiThemeProvider muiTheme={theme}>
       <div className="APP">
         {this.props.children}
         <ConnIndicator />
         <Welcome />
       </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  console.log('store:', state);
  return {
    prevPath: state.app.prevPath
  };
}

export default connect(mapStateToProps, {checkTokenAndLogin, setPrevPath})(App);

