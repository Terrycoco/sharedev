//store data here for lookups and form text
const f = require('actions/types').form;


const INITIAL_STATE = {
  common: {
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
    intro: `<p>Creating a ShareWalk is fun and easy.  Just answer a few questions about your walk and you're on your way.</p>
          <p>Don't worry about being perfect, you can always come back and edit your walk at any time.</p>
          <p>You can add sites to your walk right from your phone, or, if you prefer, away from the walk using our map.</p>
          <span class="center-children"><h4 class="form-center">Ready?</h4></span>`
  }
}

export default function(state=INITIAL_STATE, action) {
  let newstate, newobj;
  switch(action.type) {
    case f.LOAD_SEARCH_FORM:
      newobj = Object.assign({}, state.common, action.payload);
      return Object.assign({}, state, {common: newobj});
  default:
    return state;
  }
}