export function objectToArray(obj) {
  let arr = Object.keys(obj).map(function(key) {
    return obj[key];
  });
  return arr;
}

