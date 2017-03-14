import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from 'routes/App';

//needed for onTouchTap (material-ui)
require('react-tap-event-plugin')();



const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      reduxThunk
    ),
    process.env.NODE_ENV == 'development' && window.devToolsExtension ? 
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


ReactDOM.render(
  <Provider store={store} >
     <App />
   </Provider> 
, document.getElementById('root')
);

