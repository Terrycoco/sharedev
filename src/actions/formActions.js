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

export function createGoNext(nextNum, fromDir) {
  return {
    type: f.CREATE_GO_NEXT,
    payload: {pageIdx: nextNum, fromDir: fromDir}
  };
}