export function objectToArray(obj) {
  let arr = Object.keys(obj).map(function(key) {
    return obj[key];
  });
  return arr;
}

export function sortObjectArrayByProp(arr, propName) {
  arr.sort(function(a,b) {
    if (a[propName] < b[propName])
       return -1;
    if (a[propName] > b[propName])
      return 1;
    return 0;
  });
  return arr;
}