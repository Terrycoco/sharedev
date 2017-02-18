const s = require('actions/types').search;
const f = require('actions/types').form;

import {authRoute} from 'actions/authActions';
import {setHere} from 'actions/geoActions';
import axios from 'utils/auth/axios_headers';
import {geom2Box, latLng2Box} from 'utils/geo';
import{getApi} from 'utils/environment';
import { walksToGeoJson } from 'utils/geojson';


const API_URL = getApi();
// const API_URL = 'https://api-tmarr.rhcloud.com';

export function saveParams(payload) {
  return function(dispatch, getState) {
   //check to see if city is current loc
   if (payload.city == 'Current Location' || payload.city == null) {
    const loc = getState().geo.here;
    const box = latLng2Box(loc.lat, loc.lng);
    payload = {loc, box};
    dispatch(setHere(payload));  //resets the box
   }
   dispatch(setParams(payload));  //sets other params
  }
}


//saves city, and cat
function setParams(payload) {
  return {
    type: s.SAVE_PARAMS,
    payload: payload
  };
}

export function resetBoxFromGeom(geom) {
  return function(dispatch) {
    let box = geom2Box(geom);
    console.log('box:', box);
    dispatch(setBox(box));
 }
}

function setBox(box) {
  return {
    type: s.SET_BOX,
    payload: {box: box}
  };
}

export function searchWalks(params, router) {
  return function(dispatch, getState) {
    dispatch(setParams(params));  //sets city & cat params


    let locparams;
   //check to see if city is current loc
   if (params.city == 'Current Location' || params.city == null) {
    const loc = getState().geo.here;  //reping?
    const box = latLng2Box(loc.lat, loc.lng);
    locparams = {loc, box};
    dispatch(setHere(locparams));  //resets the box
   } else {
    locparams = {box: getState().search.params.box};
   }

   const tofly = Object.assign({}, locparams, params);

   //make request
    const requestURL = API_URL + '/searchwalks';
    axios.post(requestURL, tofly)
     .then((response) => {
        let payload = response.data;
        dispatch(saveWalks(payload));
        router.push('/results');
     })
     .catch((err) => {
        console.log(err);
     })
  }
}


export function getMyWalks(router) {
  return function(dispatch, getState) {
   //must be authenticated
   if (!getState().auth.authenticated) {
    dispatch(authRoute('/mywalks'));
    router.push('/signin');
    return;
   }
   //make request 
    const requestURL = API_URL + '/mywalks';
    axios.get(requestURL)
     .then((response) => {
        let payload = response.data;
        dispatch(saveMyWalks(payload));
     })
     .catch((err) => {
        console.log(err);
     })
  }
}

function saveWalks(payload) {
  return {
    type: s.SAVE_WALKS,
    payload: payload
  };
}

function saveMyWalks(data) {
  //parse out ids for easy access
  let arr = [];
  data.features.map(walk => {
    arr.push(walk.properties.id);
  });
  return {
    type: s.SAVE_MY_WALKS,
    payload: {myWalks: data, myWalkIds: arr}
  };
}

export function addToMyWalks(walkId, router) {
  return function(dispatch, getState) {
    //must be authenticated
   if (!getState().auth.authenticated) {
    dispatch(authRoute('/summary'));
    router.push('/signin');
    return;
   }
   //make request 
    const requestURL = API_URL + '/mywalks/add/' + walkId;
    axios.get(requestURL)
    //should return whole dataset again?
     .then((response) => {
        let payload = response.data;
        dispatch(saveMyWalks(payload));
     })
     .catch((err) => {
        console.log(err);
     })
  }
}

export function removeFromMyWalks(walkId, router) {
  return function(dispatch, getState) {
    //must be authenticated
   if (!getState().auth.authenticated) {
    dispatch(authRoute('/summary'));
    router.push('/signin');
    return;
   }
   //make request 
    const requestURL = API_URL + '/mywalks/remove/' + walkId;
    axios.get(requestURL)
    //should return whole dataset again?
     .then((response) => {
        let payload = response.data;
        dispatch(saveMyWalks(payload));
     })
     .catch((err) => {
        console.log(err);
     })
  }
}

export function getWalkSummary(walkId, router) {
 return function(dispatch, getState) {
  //check if there?
  //TODO: may want to store this for offline?
  //if not already fetched
  if (getState().search.selectedWalk.id != walkId) {
    const requestURL = API_URL + `/walk/${walkId}`;
    axios.get(requestURL)
    .then(response => {
      //change route from geoJson to normal object
    
      let walk = Object.assign({}, response.data);
      dispatch(saveWalk(walk));
      router.push('/summary');
    })
    .catch((err) => {
        console.log(err);
    })
  } else {
    //already in store just go show
    router.push('/summary');
  }
 }
}

function saveWalk(payload) {
  return {
    type: s.SAVE_WALK,
    payload: payload
  };
}

export function getWalkStops(walkId){
  return function(dispatch, getState) {
//check if there?
  //TODO: may want to store this for offline?
  //if not already fetched
  if (getState().search.selectedWalk.stops.length == 0) {
    console.log('gothere');
    const requestURL = API_URL + `/points/${walkId}`;
    axios.get(requestURL)
    .then(response => {
      dispatch(saveStops(response.data));
    })
    .catch((err) => {
        console.log(err);
    })
  } else {
    //already in store just go show
    return;
  }
 }
}

function saveStops(payload) {
  return {
    type: s.SAVE_STOPS,
    payload: payload
  };
}

export function getRoute(walkId) {
  return function(dispatch, getState) {
    const requestURL = API_URL + `/route/${walkId}`;
    axios.get(requestURL)
    .then(response => {
      dispatch(saveRoute(response.data.route.legs));
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

function saveRoute(payload) {
  return {
    type: s.SAVE_ROUTE,
    payload: payload
  };
}

export function saveStopIdx(idx) {
  return {
    type: s.SAVE_STOP_IDX,
    payload: idx
  };
}