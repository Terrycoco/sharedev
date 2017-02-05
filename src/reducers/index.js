import { combineReducers } from 'redux';
import appReducer from 'reducers/appReducer';
import searchReducer from 'reducers/searchReducer';
import geoReducer from 'reducers/geoReducer';
import authReducer from 'reducers/authReducer';

const rootReducer = combineReducers({
  app: appReducer,
  search: searchReducer,
  geo: geoReducer,
  auth: authReducer
});

export default rootReducer;

