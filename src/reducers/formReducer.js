//store data here for lookups and form text
const f = require('actions/types').form;


const INITIAL_STATE = {
  shared: {
    categories: [
        {  
           id: 0,
           category: 'Any',
           descr: 'Search for <em>any</em> type of walk',
           sort: 0 
        }
    ],
  },

  create: {
    pageIdx: 0,
    fromDir: "right",
    params: {
      city: "Current Location",
      cat_id: null,
      cat_idx: null
    }
  }
}

export default function(state=INITIAL_STATE, action) {
  let newstate, newobj;
  switch(action.type) {
    case f.LOAD_COMMON:
      newobj = Object.assign({}, state.shared, {categories: action.payload});
      return Object.assign({}, state, {shared: newobj});
    case f.CREATE_GO_NEXT:
      newobj = Object.assign({}, state.create, {pageIdx: action.payload.pageIdx, fromDir: action.payload.fromDir});
      return Object.assign({}, state, {create: newobj})
  }
  return state;
}