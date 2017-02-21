import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import Link from 'navigation/Link';

require('./home.scss');

class Home extends Component {

  render() {
    return (
     <div className="HOME" >
         <PageBar title="ShareWalks" />
         <nav className="CONTENT center-children">
          <ul className="INNERPAGE main-menu">
             <li ><Link key="search" to="search" fromDir="right"><span>Find A Walk</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             <li ><Link key="create" to="create" fromDir="right"><span>Create A Walk</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             <li ><Link key="mywalks" to="mywalks" fromDir="right"><span>My Walks</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             <li ><Link key="about" to="about" fromDir="right"><span>About ShareWalks</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
             
           <li ><Link key="test" to="test" fromDir="right"><span>Test</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
          </ul>
          </nav>
   
     </div>
    );
  }
}

export default Home;
