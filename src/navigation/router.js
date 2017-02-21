/**
 * This file handles all routing and async loading of
 * split JavaScript files. The splitting of components
 * is based off the routes created in this file.
 */
import SlideIn from 'components/Transitions/SlideIn'; //slider HOC
import requireAuth from 'components/Auth/requireAuth';  //auth HOC
import Home from 'routes/Home'; //preimport

// throws an error in the console if the page wasn't able to load
function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}


export function getComponent(route, fromDir) {
  let dir = fromDir || "right";
  switch (route) {
    case 'home':
      return System.import('routes/Home')
          .then(module => {
              return SlideIn(Home, {fromDir: dir});
          });
    case 'create':
      return System.import('routes/Create')
          .then(module => {
              return SlideIn(module.default, {fromDir: dir});
          });
    case 'search':
      return System.import('routes/Search')
          .then(module => {
              return SlideIn(module.default, {fromDir: dir});
          });
    case 'results':
      return System.import('routes/Results')
          .then(module => {
              return SlideIn(module.default, {fromDir: dir});
          });
    case 'summary':
      return System.import('routes/Summary')
          .then(module => {
              return SlideIn(module.default, {fromDir: dir});
          });

    case 'mywalks':
      return System.import('routes/MyWalks')
          .then(module => {
              return requireAuth(module.default, {fromDir: dir, toRoute: "mywalks"});
          });
    case 'signin':
      return System.import('components/Auth/Signin')
          .then(module => {
              return SlideIn(module.default, {fromDir: dir});
          });
    case 'signup':
      return System.import('components/Auth/Signup')
          .then(module => {
              return SlideIn(module.default, {fromDir: dir});
          });
    case 'about':
      return System.import('routes/About')
          .then(module => {
              return SlideIn(module.default, {fromDir: dir});
          });
    case 'test':
      return System.import('routes/Test')
          .then(module => {
              return SlideIn(module.default, {fromDir: dir});
          });
    default: 
      return System.import('routes/Home')
          .then(module => {
              return SlideIn(Home, {fromDir: dir});
          });
  } //end switch
}

  // path: '/', // at index '/', the <App /> component will be loaded
  // component: App,
  // indexRoute: { // but we also want our indexRoute to load <Home />
  //   component: SlideIn(Home, {fromDir: "left"}) //home always left
  // },
  // childRoutes: 
// const routes: {
//   home: ,
// };
//     {
//       path: 'about', // '/about' loads <App /> with <About /> passed as a child
//       component: getComponent(location, cb) {
//         System.import('routes/About')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
//           .catch(errorLoading);
//       },
//       prev: 'home'
//     },

//     {
//       path: 'aboutL', 
//       component: getComponent(location, cb) {
//         System.import('routes/About')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
//           .catch(errorLoading);
//       },
//       prev: 'home'
//     },

//     {
//       path: 'search', 
//       component: getComponent(location, cb) {
//         System.import('routes/Search')
//           .then(module => {
//             cb(null, SlideIn(module.default, {fromDir: "right"}))
//            })
//           .catch(errorLoading);
//       }
//     },
//     {
//       path: 'searchL', // loads <App /> with <Search /> passed as a child
//       component: getComponent(location, cb) {
//         System.import('routes/Search')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
//           .catch(errorLoading);
//       },
//     },

//         {
//       path: 'results', // loads <App /> with <Search /> passed as a child
//       component: getComponent(location, cb) {
//         System.import('routes/Results')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
//           .catch(errorLoading);
//       }
//     },
//         {
//       path: 'resultsL', // loads <App /> with <Search /> passed as a child
//       component: getComponent(location, cb) {
//         System.import('routes/Results')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
//           .catch(errorLoading);
//       }
//     },

//     {
//       path: 'summary', // loads <App /> with <Search /> passed as a child
//       component: getComponent(location, cb) {
//         System.import('routes/Summary')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
//           .catch(errorLoading);
//       }
//     },
//     {
//       path: 'summaryL', // loads <App /> with <Search /> passed as a child
//       component: getComponent(location, cb) {
//         System.import('routes/Summary')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
//           .catch(errorLoading);
//       }
//     },
//     {
//       path: 'stops', // loads <App /> with <Search /> passed as a child
//       component: getComponent(location, cb) {
//         System.import('routes/Stops')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
//           .catch(errorLoading);
//       }
//     },
//     //first page of create is not requiredAuth -- second page is
//     {
//       path: 'create', 
//       component: getComponent(location, cb) {
//         System.import('routes/Create')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
//           .catch(errorLoading);
//       }

//     },
//     {
//       path: 'createL', 
//       component: getComponent(location, cb) {
//         System.import('routes/Create')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
//           .catch(errorLoading);
//       }

//     },


//     //requireAuth has built-in SlideIn as return -- just pass props
//     //must pass in toRoute which will be saved in store
//     {
//       path: 'mywalks', 
//       component: getComponent(location, cb) {
//         System.import('routes/MyWalks')
//           .then(module => cb(null, requireAuth(module.default, {fromDir: "right", toRoute: "/mywalks"})))
//           .catch(errorLoading);
//       }
//     },
//     {
//       path: 'mywalksL', 
//       component: getComponent(location, cb) {
//         System.import('routes/MyWalks')
//           .then(module => cb(null, requireAuth(module.default, {fromDir: "left", toRoute: "/mywalks"})))
//           .catch(errorLoading);
//       }
//     },

//     {
//       path: 'signup', 
//       component: getComponent(location, cb) {
//         System.import('components/Auth/Signup')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
//           .catch(errorLoading);
//       }
//     },


//     {
//       path: 'signin', 
//       component: getComponent(location, cb) {
//         System.import('components/Auth/Signin')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
//           .catch(errorLoading);
//       }
//     },

//     {
//       path: 'test', 
//       component: getComponent(location, cb) {
//         System.import('routes/Test')
//           .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
//           .catch(errorLoading);
//       }
//     },




//     {
//       path: '*', // fallback to <App /> if the route isn't found
//       component: SlideIn(Home, {fromDir: "left"})
//     },
// };


