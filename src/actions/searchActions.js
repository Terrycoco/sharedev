const s = require('actions/types').search;
const f = require('actions/types').form;
import {setHere} from 'actions/geoActions';
import axios from 'axios';
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
   console.log('params tofly:', tofly);

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

function saveWalks(payload) {
  return {
    type: s.SAVE_WALKS,
    payload: payload
  };
}

export function getWalkDetails(walkId, router) {
  console.log('router:', router);
 return function(dispatch, getState) {
  //check if there?
  //TODO: may want to store this for offline?
  //if not already fetched
  if (getState().search.selectedWalk.id != walkId) {
    const requestURL = API_URL + `/walk/${walkId}`;
    axios.get(requestURL)
    .then(response => {
      //change route from geoJson to normal object
      let route = JSON.parse(response.data.route);
      let walk = Object.assign({}, response.data, {route: route});
      dispatch(saveWalk(walk));
      router.push('/details');
    })
    .catch((err) => {
        console.log(err);
    })
  } else {
    //already in store just go show
    router.push('/details');
  }
 }
}

function saveWalk(payload) {
  return {
    type: s.SAVE_WALK,
    payload: payload
  };
}

