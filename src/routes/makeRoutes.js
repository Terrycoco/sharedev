import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from 'routes/App';
import SlideIn from 'components/Transitions/SlideIn';
import Home from 'routes/Home';
import Search from 'routes/Search';
import MyWalks from 'routes/MyWalks';
import Create from 'routes/Create';
import About from 'routes/About';
import Details from 'routes/Details';
import Results from 'routes/Results';
import Test from 'routes/Test';
System.import Signup from 'components/Auth/signup';
System.import Signin from 'components/Auth/signin';

//pass in the store to this function
const makeRoutes = function (store) {


    return (<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={Home} />

         <Route path="/R" component={SlideIn(Home, { fromDir: "right" })}/>
         <Route path="/L" component={SlideIn(Home, { fromDir: "left" })}/>
         <Route path="/home" component={Home}/>
         <Route path="/homeR" component={SlideIn(Home, { fromDir: "right" })}/>
         <Route path="/homeL" component={SlideIn(Home, { fromDir: "left" })}/>

         <Route path="/searchR" component={SlideIn(Search, { fromDir: "right" })}/>
         <Route path="/searchL" component={SlideIn(Search, { fromDir: "left" })}/>

         <Route path="/resultsR" component={SlideIn(Results, { fromDir: "right"})}/>
         <Route path="/resultsL" component={SlideIn(Results, { fromDir: "left"  })}/>

         <Route path="/createR" component={SlideIn(Create, { fromDir: "right" })} />
         <Route path="/createL" component={SlideIn(Create, { fromDir: "left" })} />

         <Route path="/mywalksR" component={SlideIn(MyWalks, { fromDir: "right" })} />
         <Route path="/mywalksL" component={SlideIn(MyWalks, { fromDir: "left" })} />

         <Route path="/aboutR" component={SlideIn(About, { fromDir: "right" })} />
         <Route path="/aboutL" component={SlideIn(About, { fromDir: "left" })} />

         <Route path="/detailsR" component={SlideIn(Details, { fromDir: "right" })} />
         <Route path="/detailsL" component={SlideIn(Details, { fromDir: "left" })} />
      
         <Route path="/signup" component={Signup} />
         <Route path="/signin" component={Signin} />

         <Route path="/testR" component={SlideIn(Test, { fromDir: "right"})} />
         <Route path="/testL" component={SlideIn(Test, { fromDir: "left"})} />

      </Route>
    </Router>
  </Provider>
);
}

makeRoutes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default makeRoutes;