var a = require('actions/types').auth;

const INITIAL_STATE = {
  authenticated: false,
  error: null,
  username: null,
  aCheck: false,
  authRoute: '',
  loader: false
};


export default function(state=INITIAL_STATE, action) {

  switch(action.type) {
    case a.AUTH_USER:
      return { ...state, authenticated: true, username: action.username, aCheck: action.aCheck, error: null, loader: false};
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