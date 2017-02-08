const a = require('./types').geo;
const IP_API = "https://ipinfo.io/json";
import {round} from 'utils/math';
import axios from 'axios';
import config from 'utils/config';
import {latLng2Box} from 'utils/geo';
import {updateConn} from 'actions/appActions';
const isOnline = require('is-online');
const SECS = 1000;
const PRECISION = 6;  //5 is within a yard or so




export function initLoc() {
  return ((dispatch, getState) => {
    isOnline()
    .then(online => {
    if (online) {
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
            dispatch(setHere(payload)); 
          };

          const error = function(err) {
             // console.log('error1:', err);
             useGoogleLocator(dispatch); 
          };

          pingLocation(success, error, positionOptions);
     
        } else {
          // dispatch(setAvail(false));
          dispatch(geoError("Geolocation API is not supported in your browser."));
        }
      }
  else {
    //not online
    dispatch(updateConn(online));
   }
  }) 
}) //end func
} //end initLoc

function useGoogleLocator(dispatch) {
  // console.log('google locator called');
  const key = config.googleApiKey;
  const API = `https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`;
  axios.post(API)
  .then((response) => {
    // console.log('response from google:', response);
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
  .catch((err) => {
     // console.log('error2:', err);
     initIpLocation(dispatch);
  });
}


function initIpLocation(dispatch) {
  axios.get(IP_API)
  .then((response) => {
    let locarr = response.data.loc.split(",");
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
  .catch(function(err) {
      // console.log('error3:', err);
      dispatch(geoError(err));
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



function geoError(error) {
  return {
    type: a.GEO_ERROR,
    payload: error
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
