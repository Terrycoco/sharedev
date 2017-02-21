var n = require('actions/types').nav;

const INITIAL_STATE = {
  prevRoute: null,
  nextRoute: 'home',
  fromDir: 'right',
  currentRoute: 'home'
};


export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case n.CHANGE_ROUTE:
      return {...state, currentRoute: action.payload.route, history: state.history.concat([action.payload.route])};
    case n.GO_BACK:
      break;
    case n.REQUEST_ROUTE: 
      return  {...state, nextRoute: action.payload.route, fromDir: action.payload.fromDir};
    case n.ROUTE_LOADED:
     return {...state, prevRoute: state.currentRoute, currentRoute: state.nextRoute};
   }
  return state;
}

