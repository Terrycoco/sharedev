const a = require('actions/types').auth;
import {updateConn} from 'actions/appActions';
import axios from 'utils/auth/axios_headers';
import{getApi} from 'utils/environment';
const isOnline = require('is-online');
const API_URL = getApi();

export function signupUser({username, email, password}, router) {
  return function(dispatch, getState) {
    dispatch(showLoader());
    isOnline().then(online => {
      dispatch(updateConn(online));
      if (!online) {
        return;
      } else {
        axios.post(`${API_URL}/signup`, { username, email, password})
        .then(response => {
          let payload = {new: true, username: response.data.username, aCheck: response.data.aCheck};
          dispatch(authUser(payload));
          localStorage.setItem('token', response.data.token);

          let toRoute = getState().auth.authRoute;
          router.push(toRoute);
        })
        .catch((error) => {
          dispatch({
             type: a.AUTH_ERROR,
             payload: error.response.data.error
          });
        })
      } //end if
    })
  }
}

export function signinUser({usernameOrEmail, password}, router) {
  return function( dispatch, getState ) {
    dispatch(showLoader());
    isOnline().then(online => {
      dispatch(updateConn(online));
      if (!online) {
        return;
      } else {
   //submit email password to server
    axios.post(`${API_URL}/signin`, {usernameOrEmail, password})
      .then(response => {
      // req is good...
         // update state to indicate user is authenticated
        let payload = {username: response.data.username, aCheck: response.data.aCheck, walkIds: response.data.walkIds};
        dispatch(authUser(payload));

        // save jwt token to local storage
         localStorage.setItem('token', response.data.token);

         //get where we need to go back to from store
         const toRoute = getState().auth.authRoute || '/';
         router.push(toRoute);
      })
      .catch((error) => {
      //req is bad...
       // show error to user)
       dispatch(authError('Bad login info. Try again'));
      });
   } //end if
 }); //end online
}  //end func
} //end signin

export function checkTokenAndLogin() {
  return  function(dispatch, getState) {
    dispatch(showLoader());
    isOnline().then(online => {
      dispatch(updateConn(online));
      if (!online) {
        return;
      } else {
    const token = localStorage.getItem('token');
    if (!token || token == '') {
      dispatch(clearAuth());
      return;
    }
    axios.post(`${API_URL}/login`)
    .then(response => {
      let payload = {username: response.data.username, aCheck: response.data.aCheck, walkIds: response.data.walkIds};
      dispatch(authUser(payload));
    })
    .catch((err) => {
      //req is bad...
       // show error to user)
       dispatch(clearAuth());
       dispatch(authError(err.response.data.error))
    });
   } //end if
 }); //end online
}  //end func
} //end login

export function logout(router) {
  return function(dispatch, getState) {
    isOnline().then(online => {
      dispatch(updateConn(online));
      if (!online) {
        return; 
      } else {
         
        axios.post(`${API_URL}/logout`)
        .then(response => {
          dispatch({type: a.UNAUTH_USER});
          localStorage.removeItem('token');
          router.push('/');
        })
        .catch((error) => {
          dispatch({
             type: a.AUTH_ERROR,
             payload: error.response.data.error
          });
          dispatch({type: a.UNAUTH_USER});
          localStorage.removeItem('token');
          router.push('/');
        })
      } //end if
    })
  }
}


export function authUser(payload) {
  return {
    type: a.AUTH_USER,
    payload: payload
  };
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

