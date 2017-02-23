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


export function welcomed() {
  return {
    type: a.WELCOMED
  };
}

export function setPrevPath(prevPath) {
  return {
    type: a.PREV_PATH,
    payload: {prevPath: prevPath}
  };
}

