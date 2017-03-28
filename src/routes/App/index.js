import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'styles/theme';
import { connect } from 'react-redux';
import * as actions  from 'actions';
import ConnIndicator from 'components/Snacks/ConnIndicator';
import Welcome from 'components/Snacks/Welcome';
import Loader from 'components/Loader';
import SlideIn from 'components/Transitions/SlideIn';
import requireAuth from 'components/Auth/requireAuth';
import {getComponent} from 'navigation/router';
import {MakeQuerablePromise} from 'utils/promises';


//app-wide style
require('./app.scss');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { component: Loader };
  }

  componentDidMount() {
    this.props.requestRoute("home", "left");
  }

  componentWillMount() {
    //checks conn token, logs in & loads myWalks into store
    this.props.checkTokenAndLogin();
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.nextRoute && nextProps.nextRoute !== this.props.nextRoute) {
      let route = nextProps.nextRoute;

      let self = this;
      let prom = MakeQuerablePromise(getComponent(route, nextProps.fromDir));
      prom.then(function(comp){   //wait for promise to finish
        self.setState({component: comp});
      });

    } //end if
  }


  render() {

    return ( 
      <MuiThemeProvider muiTheme={theme}>
       <div className="APP" >
         <this.state.component />
         <ConnIndicator />
         <Welcome />
       </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  console.log('store (App):', state);
  return {
    nextRoute: state.nav.nextRoute,
    fromDir: state.nav.fromDir,
    currentRoute: state.nav.currentRoute
  };
}

export default connect(mapStateToProps, actions)(App);

