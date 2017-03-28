var n = require('actions/types').nav;

const INITIAL_STATE = {
  prevRoute: null,
  nextRoute: null,
  fromDir: null,
  currentRoute: null
};


export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case n.CHANGE_ROUTE:
      return {...state, currentRoute: action.payload.route, history: state.history.concat([action.payload.route])};
    case n.GO_BACK:
      return  {...state, nextRoute: action.prevRoute, fromDir: "left"};
    case n.REQUEST_ROUTE: 
      return  {...state, nextRoute: action.payload.route, fromDir: action.payload.fromDir};
    case n.ROUTE_LOADED:
     return {...state, prevRoute: state.currentRoute, currentRoute: state.nextRoute}; //now next & current are same
   }
  return state;
}

