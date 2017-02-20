var a = require('actions/types').app;
var auth = require('actions/types').auth;
var geo = require('actions/types').geo;

const INITIAL_STATE = {
  offline: false,  //assume online,
  welcomed: false,
  prevPath: ''
};


export default function(state=INITIAL_STATE, action) {
  console.log('action: ', action.type);
  let newstate;
  switch(action.type) {
    case a.UPDATE_CONN:
      return Object.assign({}, state, {offline: action.payload});
    case a.WELCOMED:
      return Object.assign({}, state, {welcomed: true});
    case auth.AUTH_ERROR:
      if (action.payload.error == 'Error: Network Error') {
        return Object.assign({}, state, {offline: true});
      }
    case geo.GEO_ERROR:
      if (action.payload.error == 'Error: Network Error') {
        return Object.assign({}, state, {offline: true});
      }
    case a.PREV_PATH:
      return Object.assign({}, state, {prevPath: action.payload.prevPath});
   }
  return state;
}