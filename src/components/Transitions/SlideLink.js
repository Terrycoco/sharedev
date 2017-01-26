import React from 'react';
import {Link} from 'react-router';


//passes along a slide direction parameter to a route
const SlideLink = function({to, fromDir, children}) {
  return (
    <Link
      to={`${to}/${fromDir}`}
      >
      {children}
    </Link>
  )
}
export default SlideLink;