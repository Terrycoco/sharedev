import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import Link from 'navigation/Link';
import {isProd} from 'utils/environment';
import {connect} from 'react-redux';

require('./home.scss');

class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
     <div className="HOME" >
         <PageBar title="ShareWalks" />
         <div className="CONTENT" >
            <nav className="COLUMN-1">
              <ul className="main-menu">
                 <li ><Link key="search" to="search" fromDir="right"><span>Find A Walk</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
                 <li ><Link key="create" to="create" fromDir="right"><span>Create A Walk</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
                 <li ><Link key="mywalks" to="mywalks" fromDir="right"><span>My Walks</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
                 <li ><Link key="about" to="about" fromDir="right"><span>About ShareWalks</span><img className="fade" src="/images/right_arrow.png"/></Link></li>
               {isProd() ? null :  <li ><Link key="test" to="test" fromDir="right"><span>Test</span><img className="fade" src="/images/right_arrow.png"/></Link></li>}
              </ul>
            </nav>
          </div>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return { 

  };
}


export default connect(mapStateToProps)(Home);
