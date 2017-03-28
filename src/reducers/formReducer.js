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
      cat_idx: null,
      title: '',
      walk_descr: '',
    }
  }
}

export default function(state=INITIAL_STATE, action) {
  console.log('form reducer:', action.payload);
  let newstate, newobj, withParams;
  switch(action.type) {
    case f.LOAD_COMMON:
      newobj = Object.assign({}, state.shared, {categories: action.payload});
      return Object.assign({}, state, {shared: newobj});
    case f.CREATE_GO_NEXT:
    //saves whatever params are passed to create obj
      newobj = Object.assign({}, state.create, action.payload);
      return Object.assign({}, state, {create: newobj});
    case f.SAVE_CREATE_PARAMS:
      let params = Object.assign({}, state.create.params, action.payload.params);
      let create = Object.assign({}, {pageIdx: state.create.pageIdx, fromDir: state.create.fromDir, params: params});
      return Object.assign({}, state, {create: create});
   }
  return state;
}