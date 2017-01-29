var a = require('actions/types').auth;

const INITIAL_STATE = {
  authenticated: false,
  error: '',
  submitted: false,
  username: '',
  aCheck: false
};


export default function(state=INITIAL_STATE, action) {
  console.log('reducer: action:', action);
  switch(action.type) {
    case a.AUTH_USER:
      return { ...state, authenticated: true, username: action.username, aCheck: action.aCheck, error: '', submitted: true};
    case a.UNAUTH_USER:
      return { ...state, authenticated: false, aCheck: false, username: '', submitted: true};
    case a.AUTH_ERROR:
      return { ...state, error: action.payload, aCheck: false, submitted: true};
    case a.CLEAR_SUBMIT:
      return {...state, submitted: false};
    case a.CLEAR_ERROR:
      return {...state, error: ''};
  }
  return state;
}