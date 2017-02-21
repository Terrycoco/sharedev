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

