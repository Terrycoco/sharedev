const a = require('actions/types').auth;
import axios from 'utils/auth/axios_headers';
import{getApi} from 'utils/environment';

const API_URL = getApi();

export function signupUser({username, email, password}, router) {
  return function(dispatch, getState) {
    dispatch(showLoader());
    axios.post(`${API_URL}/signup`, { username, email, password})
    .then(response => {
          console.log('signup response:',response);
      dispatch({type: a.AUTH_USER, username: response.data.username, aCheck: response.data.aCheck});
      localStorage.setItem('token', response.data.token);
      const toRoute = getState().auth.authRoute || '/';
      router.push(toRoute);
    })
    .catch((error) => {
      dispatch({
         type: a.AUTH_ERROR,
         payload: error.response.data.error
      });
    })
  }
}

export function signinUser({usernameOrEmail, password}, router) {
  //redux-thunk allows us to return a function which accepts the dispatch function
  //redux-thunk will automatically call this function
  return function( dispatch, getState ) {
    dispatch(showLoader());
   //submit email password to server
    axios.post(`${API_URL}/signin`, {usernameOrEmail, password})
      .then(response => {
        console.log('signin response:', response);
      // req is good...
         // update state to indicate user is authenticated
         dispatch({type: a.AUTH_USER, username: response.data.username, aCheck: response.data.aCheck});
        // save jwt token to local storage
         localStorage.setItem('token', response.data.token);
         const toRoute = getState().auth.authRoute || '/';
         router.push(toRoute);
      })
      .catch((error) => {
      //req is bad...
       console.log(error);
       // show error to user)
       dispatch(authError('Bad login info. Try again'));
      });
   }
}


export function checkTokenAndLogin() {
  return  function(dispatch, getState) {

    const token = localStorage.getItem('token');
    if (!token || token == '') {
      console.log('not tokenized');
      dispatch(clearAuth());
      return;
    }

    axios.post(`${API_URL}/login`)
    .then(response => {
      console.log('token login', response);
      dispatch({type: a.AUTH_USER, username: response.data.username, aCheck: response.data.aCheck});
    })
    .catch((error) => {
      //req is bad...
       console.log(error);
       // show error to user)
       dispatch(clearAuth());
    });
  }
}

export function authError(error) {
  return {
    type: a.AUTH_ERROR,
    payload: error
  };
}

export function authRoute(route) {
  return {
    type: a.AUTH_ROUTE,
    payload: route
  };
}

export function clearAuth() {
  return {
    type: a.UNAUTH_USER
  };
}

export function clearError() {
  return {
    type: a.CLEAR_ERROR
  };
}

export function showLoader() {
  return {
    type: a.SHOW_LOADER
  };
}