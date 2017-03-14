import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'styles/theme';
import { connect } from 'react-redux';
import * as actions  from 'actions';
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

    //fetch home page if not already fetched and load
    getComponent('home', 'left')
      .then(comp => {
        this.setState({component: comp});
        this.props.routeLoaded();
      });

      //checks conn token, logsin & loads myWalks into store
      this.props.checkTokenAndLogin();
      // noBounce.init({animate: true});

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
       <div className="APP" >
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

export default connect(mapStateToProps, actions)(App);

