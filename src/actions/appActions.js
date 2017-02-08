const a = require('actions/types').app;
const isOnline = require('is-online');

export function updateConn(online) {
  return {
    type: a.UPDATE_CONN,
    payload: !online
  };
}


export function checkConn() {
  return function(dispatch) {
    isOnline().then(online => {
      dispatch(updateConn(online));
    });
  }
}