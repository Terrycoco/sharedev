const n = require('actions/types').nav;




export function requestRoute(route, dir) {
  return {
    type: n.REQUEST_ROUTE,
    payload: {route: route, fromDir: dir}
  };
}


export function routeLoaded() {
  return {
    type: n.ROUTE_LOADED
  };
}

export function goBack() {
  return {
    type: n.GO_BACK
  };
}