import { combineReducers } from 'redux';
import appReducer from 'reducers/appReducer';
import searchReducer from 'reducers/searchReducer';
import geoReducer from 'reducers/geoReducer';

const rootReducer = combineReducers({
  app: appReducer,
  search: searchReducer,
  geo: geoReducer
});

export default rootReducer;

