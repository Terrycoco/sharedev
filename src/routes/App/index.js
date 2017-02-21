import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'styles/theme';
import PageBar from 'components/PageBar';
import { connect } from 'react-redux';
import {checkTokenAndLogin, routeLoaded}  from 'actions';
import ConnIndicator from 'components/Snacks/ConnIndicator';
import Welcome from 'components/Snacks/Welcome';
import {getComponent} from 'navigation/router';
import Loader from 'components/Loader';

//app-wide style
require('./app.scss');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {component: null};
  }

  componentDidMount() {
    getComponent('home', 'left')
      .then(comp => {
        this.setState({component: comp});
        this.props.routeLoaded();
      });
    this.props.checkTokenAndLogin();  //also checks conn & loads myWalks
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nextRoute != this.props.nextRoute) {
      getComponent(nextProps.nextRoute, nextProps.fromDir)
      .then(comp => {
        this.setState({component: comp});
        this.props.routeLoaded();
      });
    }
  }

  render() {
    return ( 
      <MuiThemeProvider muiTheme={theme}>
       <div className="APP">
         {(this.state.component) ? <this.state.component /> : <Loader />}
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
    nextRoute: state.nav.nextRoute,
    fromDir: state.nav.fromDir
  };
}

export default connect(mapStateToProps, {checkTokenAndLogin, routeLoaded})(App);

