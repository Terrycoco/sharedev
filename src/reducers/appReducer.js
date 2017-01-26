var t = require('actions/types').app;

const INITIAL_STATE = {
  history: []
};


export default function(state=INITIAL_STATE, action) {
  let newstate;
  switch(action.type) {
    case t.ADD_ROUTE_TO_HISTORY:
      //if new route is home start over
      var newArray;
      if (action.route == "/") {
        newArray = [];
      } else {
      newArray = state.history.slice();
      }
      newArray.push(action.route);
      newstate = Object.assign({}, state, {history: newArray});
      return newstate;
    case t.DELETE_LAST_ROUTE:
      let newArray = state.history.slice();
      newArray.pop();
      newstate = Object.assign({}, state, {history: newArray});
      return newstate;
   }
  return state;
}