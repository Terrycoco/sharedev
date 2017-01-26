import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import makeRoutes from 'routes/makeRoutes';


//needed for onTouchTap (material-ui)
require('react-tap-event-plugin')();



const store = createStore(
  reducers,
  compose( 
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? 
        window.devToolsExtension() : f => f
  )
);



// //register service workers
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }).catch(function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

const Routes = makeRoutes(store);

ReactDOM.render(Routes, document.getElementById('root'));

