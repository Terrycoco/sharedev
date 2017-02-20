var a = require('actions/types').auth;

const INITIAL_STATE = {
  authenticated: false,
  new: false,
  error: null,
  username: null,
  aCheck: false,
  authRoute: '',
  loader: false
};


export default function(state=INITIAL_STATE, action) {

  switch(action.type) {
    case a.AUTH_USER:
      let isnew = action.payload.new ? true : false;
      return { ...state, authenticated: true, username: action.payload.username, aCheck: action.payload.aCheck, error: null, loader: false, new: isnew};
    case a.UNAUTH_USER:
      return INITIAL_STATE; //back to initial state
    case a.AUTH_ERROR:
      return { ...state, error: action.payload, aCheck: false, loader: false};
    case a.CLEAR_ERROR:
      return {...state, error: null, loader: false};
    case a.AUTH_ROUTE:
      return {...state, authRoute: action.payload, loader: false};
    case a.SHOW_LOADER:
      return {...state, loader: true}
  }
  return state;
}