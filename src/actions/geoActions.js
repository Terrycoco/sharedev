const a = require('./types').geo;
const IP_API = "https://ipinfo.io/json";
import {round} from 'utils/math';
import axios from 'axios';
import config from 'utils/config';
import {latLng2Box} from 'utils/geo';

const SECS = 1000;
const PRECISION = 6;  //5 is within a yard or so




export function initLoc() {
  return ((dispatch, getState) => {
    if (getState().geo.here.lat != null) {
      //already fetched
      return null;
    }
    if ("geolocation" in navigator || navigator.geolocation) {

      const positionOptions = {
        maximumAge: 30 * SECS, 
        timeout: 27 * SECS, 
        enableHighAccuracy: true  //this needed for walking scale?
      };

      const success = function(position) {
        console.log('location succeeded:');
        const loc = {
          lat: round(position.coords.latitude, PRECISION),
          lng: round(position.coords.longitude, PRECISION),
          ts: position.timestamp,
          used: 'navigator'
        };
        const box = latLng2Box(loc.lat, loc.lng);
        const payload = {loc, box};
        console.log('payload:', payload);
        dispatch(setHere(payload)); 
      };

      const error = function(err) {
         console.log('geolocator error');
         useGoogleLocator(dispatch); 
      };

      pingLocation(success, error, positionOptions);
 
    } else {
      // dispatch(setAvail(false));
      dispatch(setMsg("Geolocation API is not supported in your browser."));
    }
 }) //end func
} // end initLoc



function useGoogleLocator(dispatch) {
  console.log('google locator called');
  const key = config.googleApiKey;
  const API = `https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`;
  axios.post(API)
  .then((response) => {
    console.log('response from google:', response);
    const loc = {
        lat: round(response.data.location.lat, PRECISION),
        lng: round(response.data.location.lng, PRECISION),
        ts: Date.now(),
        used: 'google'
      };
      const box = latLng2Box(loc.lat, loc.lng);
      const payload = {loc, box};
      dispatch(setHere(payload)); 
  })
  .catch((error) => {
     console.log('google error:', error);
     initIpLocation(dispatch);
  });
}


function initIpLocation(dispatch) {
  axios.get(IP_API)
  .then((response) => {
    console.log('ip:', response.data);
    let locarr = response.data.loc.split(",");
    console.log(locarr);
    const lat = parseFloat(locarr[0]);
    const lng = parseFloat(locarr[1]);
    let loc = {
      lat: lat,
      lng: lng,
      ts: Date.now(),
      formatted_address: response.data.city + ", " + response.data.region + ", " + response.data.country,
      used: 'ip'
    };
    dispatch(setHere(loc));
    })
  .catch(function(response) {
      console.log('ERROR:', response);
      dispatch(updateMsg(response));
   });
}

function setAvail(avail) {
  return {
    type: a.SET_AVAIL, 
    payload: {avail: avail}
  };
}


export function setHere(payload) {
  return {
    type: a.SET_HERE, 
    payload: payload
  };
}



function setMsg(msg) {
  return {
    type: a.UPDATE_MSG, 
    payload: {msg: msg}
  };
}





function getCity(loc) {
  return function(dispatch, getState) {
    const api = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${loc.lat},${loc.lng}`;
    axios.get(api)
    .then((response) => {
      console.log('response:', response);
    });
  }

}

function pingLocation(success, error, positionOptions) {
   return navigator.geolocation.getCurrentPosition(success, error, positionOptions);
 }
