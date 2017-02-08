import * as actions from 'actions';
const f = require('actions/types').form;
import {getApi} from 'utils/environment';
const API_URL = getApi();
import axios from 'axios';

//categories
export function getSearchForm() {
 return function(dispatch, getState) {
    let cats = getState().form.common.categories.slice();
    if (cats.length == 1) {
     const requestURL = API_URL + '/searchform';
     axios.get(requestURL)
     .then((response) => {
        let payload = response.data;
        //add default cat to beginning
        payload.unshift(cats[0]);
        dispatch(loadSearchForm(payload));
     })
     .catch((err) => {
        console.log(err);
     })
   }
   return; //already fetched
  }
}


function loadSearchForm(payload) {
  return {
    type: f.LOAD_SEARCH_FORM,
    payload: payload
  };
}