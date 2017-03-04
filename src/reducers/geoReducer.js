var a = require('actions/types').geo;
var s = require('actions/types').walk;

const INITIAL_STATE = {
  avail: null,
  here: {
    formatted_address: null,
    lat: null,
    lng: null,
    ts: null,
    used: null
  },
  msg: null,
  mapGeom: null
};

export default function(state=INITIAL_STATE, action) {
  // console.log('got to reducer action.payload:', action.payload);
  let newstate;
  switch(action.type) {
    case a.SET_AVAIL:
      newstate = Object.assign({}, state, {avail: action.payload.avail, msg: 'geo avail'} )
      return newstate;
    case a.SET_HERE:
      newstate = Object.assign({}, state, {here: action.payload.loc, avail: true, msg: 'loc set' });
      return newstate;
    case a.UPDATE_MSG:
      newstate = Object.assign({}, state, {msg: action.payload.msg });
      return newstate;
    case s.SET_MAP_GEOM:
      newstate = Object.assign({}, state, {mapGeom: action.payload.geom});
      return newstate;
    case a.SET_HERE_FROM_IP:
      newstate = Object.assign({}, state, {here: action.payload.loc, msg: 'loc set' });
      return newstate;
    }
  return state;
};