import { combineReducers } from 'redux';
import appReducer from 'reducers/appReducer';
import navReducer from 'reducers/navReducer';
import searchReducer from 'reducers/searchReducer';
import geoReducer from 'reducers/geoReducer';
import authReducer from 'reducers/authReducer';
import formReducer from 'reducers/formReducer';

const rootReducer = combineReducers({
  app: appReducer,
  nav: navReducer,
  search: searchReducer,
  geo: geoReducer,
  auth: authReducer,
  forms: formReducer
});

export default rootReducer;

