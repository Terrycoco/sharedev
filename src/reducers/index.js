import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';
import appReducer from 'reducers/appReducer';
import navReducer from 'reducers/navReducer';
import walkReducer from 'reducers/walkReducer';
import geoReducer from 'reducers/geoReducer';
import authReducer from 'reducers/authReducer';
import formReducer from 'reducers/formReducer';

const rootReducer = combineReducers({
  browser: responsiveStateReducer,
  app: appReducer,
  nav: navReducer,
  walks: walkReducer,
  geo: geoReducer,
  auth: authReducer,
  forms: formReducer
});

export default rootReducer;

