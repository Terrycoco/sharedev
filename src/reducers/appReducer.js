var a = require('actions/types').app;
var auth = require('actions/types').auth;
var geo = require('actions/types').geo;

const INITIAL_STATE = {
  offline: false,  //assume online,
  welcomed: false,
  prevPath: '',
  rotate: true
};


export default function(state=INITIAL_STATE, action) {
  let newstate;
  switch(action.type) {
    case a.UPDATE_CONN:
      return Object.assign({}, state, {offline: action.payload});
    case a.WELCOMED:
      return Object.assign({}, state, {welcomed: true});
    case a.SHOWED_ROTATE:
      return Object.assign({}, state, {rotate: false});
    case auth.AUTH_ERROR:
      if (action.payload == 'Error: Network Error') {
        return Object.assign({}, state, {offline: true});
      }
    case geo.GEO_ERROR:
      if (action.payload == 'Error: Network Error') {
        return Object.assign({}, state, {offline: true});
      }
  }
  return state;
}