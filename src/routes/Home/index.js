import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';
import {Link} from 'react-router';

require('./home.scss');

class Home extends Component {
  testDetail(){
    this.props.getWalkDetails(4);
  }

  render() {
    return (
     <div className="HOME" >
         <PageBar title="ShareWalks" />
         <nav className="CONTENT">
          <ul className="main-menu">
             <li key={'search'}><Link to="/searchR"><span>Find A Walk</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             <li key={'create'}><Link to="/createR"><span>Create A Walk</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             <li key={'mywalks'}><Link to="/mywalksR"><span>My Walks</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             <li key={'about'}><Link to="/aboutR"><span>About ShareWalks</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             
             <li key={'test'}><Link to="/testR"><span>Test</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
          </ul>
          </nav>
   
     </div>
    );
  }
}

export default connect(null, actions)(Home);
