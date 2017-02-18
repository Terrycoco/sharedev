import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';
import {Link} from 'react-router';

require('./home.scss');

class Home extends Component {

  render() {
    return (
     <div className="HOME" >
         <PageBar title="ShareWalks" />
         <nav className="CONTENT center-children">
          <ul className="INNERPAGE main-menu">
             <li key={'search'}><Link to="/search"><span>Find A Walk</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             <li key={'create'}><Link to="/create"><span>Create A Walk</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             <li key={'mywalks'}><Link to="/mywalks"><span>My Walks</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             <li key={'about'}><Link to="/about"><span>About ShareWalks</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             
           <li key={'test'}><Link to="/test"><span>Test</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
          </ul>
          </nav>
   
     </div>
    );
  }
}

export default connect(null, actions)(Home);
