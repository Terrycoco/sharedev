var s = require('actions/types').walk;
var g = require('actions/types').geo;
var a = require('actions/types').auth;

const INITIAL_STATE = {
  //pass these onto search
  params: {
    city: "Current Location",
    cat_id: 0,
    cat_idx: 0,  //the chosen element index
    box: {
      bottom: null,
      top: null,
      left: null,
      right: null
    }
  },

  //mywalks
  myWalkIds: [],

  myWalks: {
    features: []
  },

  //search results
  walks: {
    features: []
  },

  //current Walk
  selectedWalk: {
    id: null,
    geoJson: {},
    route: [],  //always 1 less than stops
    attributes: [], 
    stops: [],
    selectedStopIdx:0,
    selectedManeuverIdx: 0
  },

  ui: {
    drawerOpen: false
  }
};


export default function(state=INITIAL_STATE, action) {
  let newstate, newobj;
  switch(action.type) {
    case g.SET_HERE:
      newobj = Object.assign({}, state.params, {box: action.payload.box});
      newstate = Object.assign({}, state, {params: newobj});
      break;
    case s.SET_BOX:
      newobj = Object.assign({}, state.params, {box: action.payload.box} );
      newstate = Object.assign({}, state, {params: newobj});
      break;
    case s.SAVE_PARAMS:
     newobj = Object.assign({}, state.params, action.payload);
     newstate = Object.assign({}, state, {params: newobj});
     break;
    case s.SAVE_WALKS:
     newstate = Object.assign({}, state, {walks: action.payload});
     break;
    case s.SAVE_MY_WALKS:
     newstate = Object.assign({}, state, {myWalks: action.payload.myWalks, myWalkIds: action.payload.myWalkIds});
     break;
    case s.SAVE_WALK:
     newobj = Object.assign({}, state.selectedWalk, action.payload);
     newstate = Object.assign({}, state, {selectedWalk: newobj});
     break;
    case s.SAVE_STOPS:
     newobj = Object.assign({}, state.selectedWalk, {stops: action.payload});
     newstate = Object.assign({}, state, {selectedWalk: newobj });
     break;
    case s.SAVE_ROUTE:
     newobj = Object.assign({}, state.selectedWalk, {route: action.payload});
     newstate = Object.assign({}, state, {selectedWalk: newobj});
     break;
    case s.SAVE_STOP_IDX:
      newobj = Object.assign({}, state.selectedWalk, {selectedStopIdx: action.payload, selectedManeuverIdx: 0});
      newstate = Object.assign({}, state, {selectedWalk: newobj });
      break;
    case s.CURRENT_MANEUVER:
      newobj = Object.assign({}, state.selectedWalk, {selectedManeuverIdx: action.payload});
      newstate = Object.assign({}, state, {selectedWalk: newobj });
      break;
    case s.TOGGLE_DRAWER:
       newstate = Object.assign({}, state, {ui: {drawerOpen: !state.ui.drawerOpen }});
      break;
    case s.CLOSE_DRAWER:
       newstate = Object.assign({}, state, {ui: {drawerOpen: false }});
      break;
    case s.OPEN_DRAWER:
       newstate = Object.assign({}, state, {ui: {drawerOpen: true }});
      break;
    //also listen when user logs in to parse out mywalks
    case a.AUTH_USER:
      newstate = Object.assign({}, state, {myWalkIds: action.payload.walkIds});
      break;
    default:
      return state;
  }
  return newstate;
}