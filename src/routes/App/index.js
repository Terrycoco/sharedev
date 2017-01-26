import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'styles/theme';
import Home from 'routes/Home';
import PageBar from 'components/PageBar';

//app-wide style
require('./app.scss');


class App extends Component {

  render() {
    return ( 
      <MuiThemeProvider muiTheme={theme}>
       <div className="APP">
          {this.props.children}
       </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

