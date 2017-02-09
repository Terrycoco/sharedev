var s = require('actions/types').search;
var g = require('actions/types').geo;

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

  //search results
  walks: {
    features: []
  },


  selectedWalk: {
    id: null,
    geoJson: {},
    route: [],
    attributes: []
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
    case s.SAVE_WALK:
     newobj = Object.assign({}, state.selectedWalk, action.payload);
     newstate = Object.assign({}, state, {selectedWalk: newobj});
     break;
    default:
      return state;
  }
  console.log('newstate:', newstate);
  return newstate;
}