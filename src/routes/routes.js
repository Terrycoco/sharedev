/**
 * This file handles all routing and async loading of
 * split JavaScript files. The splitting of components
 * is based off the routes created in this file.
 */

 // <App /> is where our navigation and child components get passed through
import App from 'routes/App';
import SlideIn from 'components/Transitions/SlideIn'; //slider HOC
import requireAuth from 'components/Auth/requireAuth';  //auth HOC
import Home from 'routes/Home';


// import Create from 'routes/Create';

// import Search from 'routes/Search';
// import Results from 'routes/Results';

// throws an error in the console if the page wasn't able to load
function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

// Loading modules!
function loadRoute(cb) {
  return module => cb(null, module.default);
}

/**
 * This object we are exporting is the equivalent of:
 * <Route path="/" component={App}>
 *   <IndexRoute component={Home}/>
 *   <Route path="about" component={About}/>
 *   <Route path="users" component={Users}>
 *   <Route path="*" component={Home}/>
 * </Route>
 */

 export default {
  path: '/', // at index '/', the <App /> component will be loaded
  component: App,
  indexRoute: { // but we also want our indexRoute to load <Home />
    component: SlideIn(Home, {fromDir: "left"})
  },
  childRoutes: [
    {
      path: '/about', // '/about' loads <App /> with <About /> passed as a child
      getComponent(location, cb) {
        System.import('routes/About')
          .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
          .catch(errorLoading);
      }
    },

    {
      path: '/search', // loads <App /> with <Search /> passed as a child
      getComponent(location, cb) {
        System.import('routes/Search')
          .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
          .catch(errorLoading);
      }
    },
    {
      path: '/searchL', // loads <App /> with <Search /> passed as a child
      getComponent(location, cb) {
        System.import('routes/Search')
          .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
          .catch(errorLoading);
      },
    },

        {
      path: '/results', // loads <App /> with <Search /> passed as a child
      getComponent(location, cb) {
        System.import('routes/Results')
          .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
          .catch(errorLoading);
      }
    },
        {
      path: '/resultsL', // loads <App /> with <Search /> passed as a child
      getComponent(location, cb) {
        System.import('routes/Results')
          .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
          .catch(errorLoading);
      }
    },

    {
      path: '/details', // loads <App /> with <Search /> passed as a child
      getComponent(location, cb) {
        System.import('routes/Details')
          .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
          .catch(errorLoading);
      }
    },
        {
      path: '/detailsL', // loads <App /> with <Search /> passed as a child
      getComponent(location, cb) {
        System.import('routes/Details')
          .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
          .catch(errorLoading);
      }
    },

    {
      path: '/create', 
      getComponent(location, cb) {
        System.import('routes/Create')
          .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
          .catch(errorLoading);
      }

    },

    // {
    //   path: '/create', 
    //   getComponent(location, cb) {
    //     System.import('routes/Create')
    //       .then(module => cb(null, requireAuth(module.default, {fromDir: "right", toRoute: "/create"})))
    //       .catch(errorLoading);
    //   }
    // },   

    {
      path: '/mywalks', 
      getComponent(location, cb) {
        System.import('routes/MyWalks')
          .then(module => cb(null, SlideIn(module.default, {fromDir: "right"})))
          .catch(errorLoading);
      }
    },

    {
      path: '/signup', 
      getComponent(location, cb) {
        System.import('components/Auth/Signup')
          .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
          .catch(errorLoading);
      }
    },


    {
      path: '/signin', 
      getComponent(location, cb) {
        System.import('components/Auth/Signin')
          .then(module => cb(null, SlideIn(module.default, {fromDir: "left"})))
          .catch(errorLoading);
      }
    },






    {
      path: '*', // fallback to <App /> if the route isn't found
      component: SlideIn(Home, {fromDir: "left"})
    },
  ],
};

function getToRoute(path) {
  return path.split("/")[2];
}