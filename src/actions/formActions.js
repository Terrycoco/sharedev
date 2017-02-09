import * as actions from 'actions';
const f = require('actions/types').form;
import {getApi} from 'utils/environment';
const API_URL = getApi();
import axios from 'axios';

//categories
export function getCommon() {
 return function(dispatch, getState) {
    let cats = getState().forms.shared.categories.slice(); //get default from initial state
    if (cats.length == 1) {
     const requestURL = API_URL + '/searchform';
     axios.get(requestURL)
     .then((response) => {
        let payload = response.data;
        //add default cat to beginning
        payload.unshift(cats[0]);
        dispatch(loadCommon(payload));
     })
     .catch((err) => {
        console.log(err);
     })
   }
   return; //already fetched
  }
}


function loadCommon(payload) {
  return {
    type: f.LOAD_COMMON,
    payload: payload
  };
}

export function createGoNext(pageIdx, fromDir, params) {
  console.log('got to createGoNext :', pageIdx, fromDir, params);
  let payload = {pageIdx: pageIdx};
  if (fromDir) {
    payload.fromDir = fromDir;
  }
  if (params) {
    payload.params = params;
  }
  return {
    type: f.CREATE_GO_NEXT,
    payload: payload
  };
}

export function goWithAuth(pageIdx, fromDir, params) {
  //check to see if user is authenticated
  //if not go to signin first
  return function(dispatch, getState) {
    //is user authenticated?
    if (!getState().auth.authenticated) {
      router.push('/signin');
      return null;
    } else {
      router.push(this.getState().toRoute);
      return null;
    }
  }
}

function savePageIdx(pageIdx) {
  return {
    type: f.SAVE_PAGE_IDX,
    payload: pageIdx
  };
}