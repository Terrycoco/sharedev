import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';

import * as actions from 'actions';

require('routes/Results/results.scss');


class Test extends Component {
  render() {
    return (
      <div className="PAGE" key="about">
         <PageBar title="Coming Soon" iconLeft="hamburger" onLeft="home" />
         <div className="CONTENT">
           <div className="COLUMN-1">
            <div className="FORM">something here</div>
           </div>
           <div className="COLUMN-1">
            <div className="FORM">something here</div>
           </div>
         </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    browser: state.browser
  };
}

export default connect(mapStateToProps, actions)(Test);