export function box2Bounds(L, box) {
  //sw, ne bounds for leaflet
  const sw = L.latLng(box.bottom, box.left);
  const ne = L.latLng(box.top, box.right);
  return L.latLngBounds(sw, ne);
}

//google geom to box
export function geom2Box(geom) {
  const e = geom.viewport.b.b;
  const w = geom.viewport.b.f;
  const n = geom.viewport.f.b;
  const s = geom.viewport.f.f;
  return {
    right: e, left: w, top: n, bottom: s
  };
}

//convert leaflet bounds into box
export function bounds2Box(bounds) {
  if (bounds) {
    const e = bounds.getEast();
    const w = bounds.getWest();
    const n = bounds.getNorth();
    const s = bounds.getSouth();
    return {
      right: e, left: w, top: n, bottom: s
    };
  }
}

export function latLng2Box(lat, lng) {
  let centerPoint = [lat, lng];
  let distance = 1;
  let boundsarr = getBoundingBox(centerPoint, distance);

 var bounds = {
    left: boundsarr[0],
    bottom: boundsarr[1],
    right: boundsarr[2],
    top: boundsarr[3]
 };
 return bounds;
}

function getBoundingBox(centerPoint, distance) {
  var MIN_LAT, MAX_LAT, MIN_LON, MAX_LON, R, radDist, degLat, degLon, radLat, radLon, minLat, maxLat, minLon, maxLon, deltaLon;
  if (distance < 0) {
    return 'Illegal arguments';
  }
  // helper functions (degrees<–>radians)
  Number.prototype.degToRad = function () {
    return this * (Math.PI / 180);
  };
  Number.prototype.radToDeg = function () {
    return (180 * this) / Math.PI;
  };
  // coordinate limits
  MIN_LAT = (-90).degToRad();
  MAX_LAT = (90).degToRad();
  MIN_LON = (-180).degToRad();
  MAX_LON = (180).degToRad();
  // Earth's radius (km)
  R = 6378.1;
  // angular distance in radians on a great circle
  radDist = distance / R;
  // center point coordinates (deg)
  degLat = centerPoint[0];
  degLon = centerPoint[1];
  // center point coordinates (rad)
  radLat = degLat.degToRad();
  radLon = degLon.degToRad();
  // minimum and maximum latitudes for given distance
  minLat = radLat - radDist;
  maxLat = radLat + radDist;
  // minimum and maximum longitudes for given distance
  minLon = void 0;
  maxLon = void 0;
  // define deltaLon to help determine min and max longitudes
  deltaLon = Math.asin(Math.sin(radDist) / Math.cos(radLat));
  if (minLat > MIN_LAT && maxLat < MAX_LAT) {
    minLon = radLon - deltaLon;
    maxLon = radLon + deltaLon;
    if (minLon < MIN_LON) {
      minLon = minLon + 2 * Math.PI;
    }
    if (maxLon > MAX_LON) {
      maxLon = maxLon - 2 * Math.PI;
    }
  }
  // a pole is within the given distance
  else {
    minLat = Math.max(minLat, MIN_LAT);
    maxLat = Math.min(maxLat, MAX_LAT);
    minLon = MIN_LON;
    maxLon = MAX_LON;
  }
  return [
    minLon.radToDeg(), //w
    minLat.radToDeg(), //s
    maxLon.radToDeg(), //e
    maxLat.radToDeg()  //n
  ];
};