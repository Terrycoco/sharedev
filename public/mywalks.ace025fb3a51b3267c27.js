webpackJsonp([18,6],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(72);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(39)
  , document = __webpack_require__(23).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(27) && !__webpack_require__(31)(function(){
  return Object.defineProperty(__webpack_require__(117)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(29)
  , toIObject    = __webpack_require__(28)
  , arrayIndexOf = __webpack_require__(209)(false)
  , IE_PROTO     = __webpack_require__(76)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(84);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(69)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(207), __esModule: true };

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveParams = saveParams;
exports.resetBoxFromGeom = resetBoxFromGeom;
exports.searchWalks = searchWalks;
exports.getMyWalks = getMyWalks;
exports.addToMyWalks = addToMyWalks;
exports.removeFromMyWalks = removeFromMyWalks;
exports.getWalkSummary = getWalkSummary;
exports.getWalkStops = getWalkStops;
exports.getRoute = getRoute;
exports.saveStopIdx = saveStopIdx;

var _authActions = __webpack_require__(79);

var _geoActions = __webpack_require__(85);

var _axios_headers = __webpack_require__(86);

var _axios_headers2 = _interopRequireDefault(_axios_headers);

var _geo = __webpack_require__(87);

var _environment = __webpack_require__(33);

var _geojson = __webpack_require__(182);

var _navActions = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = __webpack_require__(22).search;
var f = __webpack_require__(22).form;

var API_URL = (0, _environment.getApi)();
// const API_URL = 'https://api-tmarr.rhcloud.com';

function saveParams(payload) {
  return function (dispatch, getState) {
    //check to see if city is current loc
    if (payload.city == 'Current Location' || payload.city == null) {
      var loc = getState().geo.here;
      var box = (0, _geo.latLng2Box)(loc.lat, loc.lng);
      payload = { loc: loc, box: box };
      dispatch((0, _geoActions.setHere)(payload)); //resets the box
    }
    dispatch(setParams(payload)); //sets other params
  };
}

//saves city, and cat
function setParams(payload) {
  return {
    type: s.SAVE_PARAMS,
    payload: payload
  };
}

function resetBoxFromGeom(geom) {
  return function (dispatch) {
    var box = (0, _geo.geom2Box)(geom);
    console.log('box:', box);
    dispatch(setBox(box));
  };
}

function setBox(box) {
  return {
    type: s.SET_BOX,
    payload: { box: box }
  };
}

function searchWalks(params) {
  return function (dispatch, getState) {
    dispatch(setParams(params)); //sets city & cat params


    var locparams = void 0;
    //check to see if city is current loc
    if (params.city == 'Current Location' || params.city == null) {
      var loc = getState().geo.here; //reping?
      var box = (0, _geo.latLng2Box)(loc.lat, loc.lng);
      locparams = { loc: loc, box: box };
      dispatch((0, _geoActions.setHere)(locparams)); //resets the box
    } else {
      locparams = { box: getState().walks.params.box };
    }

    var tofly = Object.assign({}, locparams, params);

    //make request
    var requestURL = API_URL + '/searchwalks';
    _axios_headers2.default.post(requestURL, tofly).then(function (response) {
      var payload = response.data;
      dispatch(saveWalks(payload));
      dispatch((0, _navActions.requestRoute)('results', 'right'));
    }).catch(function (err) {
      console.log(err);
    });
  };
}

function getMyWalks() {
  return function (dispatch, getState) {
    //must be authenticated
    if (!getState().auth.authenticated) {
      dispatch((0, _authActions.authRoute)('mywalks'));
      dispatch((0, _navActions.requestRoute)('signin', 'left'));
      return;
    }
    //make request 
    var requestURL = API_URL + '/mywalks';
    _axios_headers2.default.get(requestURL).then(function (response) {
      var payload = response.data;
      dispatch(saveMyWalks(payload));
    }).catch(function (err) {
      console.log(err);
    });
  };
}

function saveWalks(payload) {
  return {
    type: s.SAVE_WALKS,
    payload: payload
  };
}

function saveMyWalks(data) {
  //parse out ids for easy access
  var arr = [];
  data.features.map(function (walk) {
    arr.push(walk.properties.id);
  });
  return {
    type: s.SAVE_MY_WALKS,
    payload: { myWalks: data, myWalkIds: arr }
  };
}

function addToMyWalks(walkId) {
  return function (dispatch, getState) {
    //must be authenticated
    if (!getState().auth.authenticated) {
      dispatch((0, _authActions.authRoute)('summary'));
      dispatch((0, _navActions.requestRoute)('signin', 'left'));
      return;
    }
    //make request 
    var requestURL = API_URL + '/mywalks/add/' + walkId;
    _axios_headers2.default.get(requestURL)
    //should return whole dataset again?
    .then(function (response) {
      var payload = response.data;
      dispatch(saveMyWalks(payload));
    }).catch(function (err) {
      console.log(err);
    });
  };
}

function removeFromMyWalks(walkId) {
  return function (dispatch, getState) {
    //must be authenticated
    if (!getState().auth.authenticated) {
      dispatch((0, _authActions.authRoute)('summary'));
      dispatch((0, _navActions.requestRoute)('signin', 'left'));
      return;
    }
    //make request 
    var requestURL = API_URL + '/mywalks/remove/' + walkId;
    _axios_headers2.default.get(requestURL)
    //should return whole dataset again?
    .then(function (response) {
      var payload = response.data;
      dispatch(saveMyWalks(payload));
    }).catch(function (err) {
      console.log(err);
    });
  };
}

function getWalkSummary(walkId) {
  return function (dispatch, getState) {
    //check if there?
    //TODO: may want to store this for offline?
    //if not already fetched
    if (getState().walks.selectedWalk.id != walkId) {
      var requestURL = API_URL + ('/walk/' + walkId);
      _axios_headers2.default.get(requestURL).then(function (response) {
        //change route from geoJson to normal object

        var walk = response.data;
        dispatch(saveWalk(walk));
        dispatch((0, _navActions.requestRoute)('summary', 'right'));
      }).catch(function (err) {
        console.log(err);
      });
    } else {
      //already in store just go show
      dispatch((0, _navActions.requestRoute)('summary', 'right'));
    }
  };
}

function saveWalk(payload) {
  return {
    type: s.SAVE_WALK,
    payload: payload
  };
}

function getWalkStops(walkId) {
  return function (dispatch, getState) {
    //check if there?
    //TODO: may want to store this for offline?
    //if not already fetched
    if (getState().walks.selectedWalk.stops.length == 0) {
      var requestURL = API_URL + ('/points/' + walkId);
      _axios_headers2.default.get(requestURL).then(function (response) {
        dispatch(saveStops(response.data));
      }).catch(function (err) {
        console.log(err);
      });
    } else {
      //already in store just go show
      return;
    }
  };
}

function saveStops(payload) {
  return {
    type: s.SAVE_STOPS,
    payload: payload
  };
}

function getRoute(walkId) {
  return function (dispatch, getState) {
    var requestURL = API_URL + ('/route/' + walkId);
    _axios_headers2.default.get(requestURL).then(function (response) {
      var legs = [];
      response.data.route.route.legs.map(function (leg) {
        var thisleg = { index: leg.index,
          distance: leg.distance,
          maneuvers: [] };
        if (leg.distance > 0) {
          leg.maneuvers.map(function (man) {
            var thisman = { index: man.index,
              startPoint: man.startPoint,
              narrative: man.narrative };
            return thisleg.maneuvers.push(thisman);
          }); //end man map
        } // end if
        return legs.push(thisleg);
      }); //end leg map


      dispatch(saveRoute(legs));
    }).catch(function (err) {
      console.log(err);
    });
  }; //end func
} // end call

function saveRoute(payload) {
  return {
    type: s.SAVE_ROUTE,
    payload: payload
  };
}

function saveStopIdx(idx) {
  return {
    type: s.SAVE_STOP_IDX,
    payload: idx
  };
}

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommon = getCommon;
exports.createGoNext = createGoNext;
exports.goWithAuth = goWithAuth;

var _actions = __webpack_require__(48);

var actions = _interopRequireWildcard(_actions);

var _environment = __webpack_require__(33);

var _axios = __webpack_require__(57);

var _axios2 = _interopRequireDefault(_axios);

var _navActions = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var f = __webpack_require__(22).form;

var API_URL = (0, _environment.getApi)();


//categories
function getCommon() {
  return function (dispatch, getState) {
    var cats = getState().forms.shared.categories.slice(); //get default from initial state
    if (cats.length == 1) {
      var requestURL = API_URL + '/searchform';
      _axios2.default.get(requestURL).then(function (response) {
        var payload = response.data;
        //add default cat to beginning
        payload.unshift(cats[0]);
        dispatch(loadCommon(payload));
      }).catch(function (err) {
        console.log(err);
      });
    }
    return; //already fetched
  };
}

function loadCommon(payload) {
  return {
    type: f.LOAD_COMMON,
    payload: payload
  };
}

function createGoNext(pageIdx, fromDir, params) {
  console.log('got to createGoNext :', pageIdx, fromDir, params);
  var payload = { pageIdx: pageIdx };
  if (fromDir) {
    payload.fromDir = fromDir;
  }
  if (params) {
    payload.params = params;
  }
  return {
    type: f.CREATE_GO_NEXT,
    payload: payload
  };
}

function goWithAuth(pageIdx, fromDir, params) {
  //check to see if user is authenticated
  //if not go to signin first
  return function (dispatch, getState) {
    //is user authenticated?
    if (!getState().auth.authenticated) {
      dispatch((0, _navActions.requestRoute)('/signin', 'left'));
      return null;
    } else {
      dispatch((0, _navActions.requestRoute)(this.getState().toRoute, 'right'));
      return null;
    }
  };
}

function savePageIdx(pageIdx) {
  return {
    type: f.SAVE_PAGE_IDX,
    payload: pageIdx
  };
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(124);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const indentString = __webpack_require__(186);
const cleanStack = __webpack_require__(185);

const cleanInternalStack = stack => stack.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, '');

class AggregateError extends Error {
	constructor(errors) {
		// Even though strings are iterable, we don't allow them to prevent subtle user mistakes
		if (!errors[Symbol.iterator] || typeof errors === 'string') {
			throw new TypeError(`Expected input to be iterable, got ${typeof errors}`);
		}

		errors = Array.from(errors).map(err => err instanceof Error ? err : new Error(err));

		let message = errors.map(err => cleanInternalStack(cleanStack(err.stack))).join('\n');
		message = '\n' + indentString(message, 4);

		super(message);
		this.name = this.constructor.name;
		Object.defineProperty(this, '_errors', {value: errors});
	}
	* [Symbol.iterator]() {
		for (const error of this._errors) {
			yield error;
		}
	}
}

module.exports = AggregateError;


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (val) {
	if (val === null || val === undefined) {
		return [];
	}

	return Array.isArray(val) ? val : [val];
};


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);
var bind = __webpack_require__(84);
var Axios = __webpack_require__(167);
var defaults = __webpack_require__(58);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(81);
axios.CancelToken = __webpack_require__(166);
axios.isCancel = __webpack_require__(82);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(181);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(81);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(58);
var utils = __webpack_require__(12);
var InterceptorManager = __webpack_require__(168);
var dispatchRequest = __webpack_require__(169);
var isAbsoluteURL = __webpack_require__(177);
var combineURLs = __webpack_require__(175);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);
var transformData = __webpack_require__(172);
var isCancel = __webpack_require__(82);
var defaults = __webpack_require__(58);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(83);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walksToGeoJson = walksToGeoJson;
//conversion service to geoJSON

// { "type": "FeatureCollection",
//     "features": [
//       { "type": "Feature",
//         "geometry": {"type": "Point", "coordinates": [-117.85320, 33.78834]},
//         "properties": {"title": "Walk Title",
//                        "descr": "I am a walk found here"}
//       },
//       { "type": "Feature",
//         "geometry": {"type": "Point", "coordinates": [-117.85310, 33.78833]},
//         "properties": {"title": "Another Walk Title",
//                        "descr": "I am another walk found here"}
//       }
//     ]
// }

function walksToGeoJson(queryResult) {
  var i = 0;
  var json = {
    type: "FeatureCollection",
    features: []
  };

  for (i = 0; i < queryResult.length; i++) {
    //create a feature
    var feature = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [row.lng, row.lat]
      },
      properties: {}
    };

    //add each property from queries to feature
    for (prop in queryResult[i]) {
      if ((prop !== "lat" || prop != "lng") && queryResult[i].hasOwnProperty(prop)) {
        feature.properties[prop] = queryResult[i][prop];
      }
    }

    //push feature onto main object
    json.features.push(feature);
  } //end loop

  return json;
}

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = round;
function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0) return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] + exp : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp));
}

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const extractPathRegex = /\s+at.*(?:\(|\s)(.*)\)?/;
const pathRegex = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/babel-polyfill\/.*)?\w+)\.js:\d+:\d+)|native)/;

module.exports = stack => {
	return stack.replace(/\\/g, '/')
		.split('\n')
		.filter(x => {
			const pathMatches = x.match(extractPathRegex);
			if (pathMatches === null || !pathMatches[1]) {
				return true;
			}

			return !pathRegex.test(pathMatches[1]);
		})
		.filter(x => x.trim() !== '')
		.join('\n');
};


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var repeating = __webpack_require__(200);

module.exports = function (str, indent, count) {
	if (typeof str !== 'string' || typeof indent !== 'string') {
		throw new TypeError('`string` and `indent` should be strings');
	}

	if (count != null && typeof count !== 'number') {
		throw new TypeError('`count` should be a number');
	}

	if (count === 0) {
		return str;
	}

	indent = count > 1 ? repeating(indent, count) : indent;

	return str.replace(/^(?!\s*$)/mg, indent);
};


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var numberIsNan = __webpack_require__(194);

module.exports = Number.isFinite || function (val) {
	return !(typeof val !== 'number' || numberIsNan(val) || val === Infinity || val === -Infinity);
};


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
	'www.google.com',
	'www.cloudflare.com',
	'www.baidu.com',
	'www.yandex.ru'
];


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser */

const arrify = __webpack_require__(164);
const pAny = __webpack_require__(195);
const prependHttp = __webpack_require__(197);
const URL = __webpack_require__(88);

module.exports = hosts => {
	return pAny(arrify(hosts).map(url => {
		return new Promise(resolve => {
			url = new URL(prependHttp(url));

			const hostname = url.hostname;
			const protocol = url.protocol || '';
			const port = url.port ? `:${url.port}` : '';

			const img = new Image();
			img.onload = () => resolve(true);
			img.onerror = () => resolve(false);
			img.src = `${protocol}//${hostname}${port}/favicon.ico?${Date.now()}`;
		});
	}));
};


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Number.isNaN || function (x) {
	return x !== x;
};


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const pSome = __webpack_require__(196);

module.exports = iterable => pSome(iterable, 1).then(values => values[0]);

module.exports.AggregateError = pSome.AggregateError;


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const AggregateError = __webpack_require__(163);

module.exports = (iterable, count) => new Promise((resolve, reject) => {
	if (!Number.isFinite(count)) {
		throw new TypeError(`Expected a finite number, got ${typeof count}`);
	}

	const values = [];
	const errors = [];
	let elCount = 0;
	let maxErrors = -count + 1;
	let done = false;

	const fulfilled = value => {
		if (done) {
			return;
		}

		values.push(value);

		if (--count === 0) {
			done = true;
			resolve(values);
		}
	};

	const rejected = error => {
		if (done) {
			return;
		}

		errors.push(error);

		if (--maxErrors === 0) {
			done = true;
			reject(new AggregateError(errors));
		}
	};

	for (const el of iterable) {
		maxErrors++;
		elCount++;
		Promise.resolve(el).then(fulfilled, rejected);
	}

	if (count > elCount) {
		throw new RangeError(`Expected input to contain at least ${count} items, but contains ${elCount} items`);
	}
});

module.exports.AggregateError = AggregateError;


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (url) {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string, got ' + typeof url);
	}

	url = url.trim();

	if (/^\.*\/|^(?!localhost)\w+:/.test(url)) {
		return url;
	}

	return url.replace(/^(?!(?:\w+:)?\/\/)/, 'http://');
};


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (;
    part = parser.exec(query);
    result[decodeURIComponent(part[1])] = decodeURIComponent(part[2])
  );

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isFinite = __webpack_require__(189);

module.exports = function (str, n) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected `input` to be a string');
	}

	if (n < 0 || !isFinite(n)) {
		throw new TypeError('Expected `count` to be a positive finite number');
	}

	var ret = '';

	do {
		if (n & 1) {
			ret += str;
		}

		str += str;
	} while ((n >>= 1));

	return ret;
};


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 }
  , URL;

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
module.exports = function lolcation(loc) {
  loc = loc || global.location || {};
  URL = URL || __webpack_require__(88);

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(219)))

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(212);
module.exports = __webpack_require__(16).Object.assign;

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(28)
  , toLength  = __webpack_require__(120)
  , toIndex   = __webpack_require__(211);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(36)
  , gOPS     = __webpack_require__(75)
  , pIE      = __webpack_require__(60)
  , toObject = __webpack_require__(47)
  , IObject  = __webpack_require__(114)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(31)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(69)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(25);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(210)});

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(23)
  , core      = __webpack_require__(16)
  , ctx       = __webpack_require__(73)
  , hide      = __webpack_require__(35)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(34)
  , IE8_DOM_DEFINE = __webpack_require__(118)
  , toPrimitive    = __webpack_require__(78)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(27) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(31)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(114)
  , defined = __webpack_require__(68);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isProd = isProd;
exports.getApi = getApi;

var _config = __webpack_require__(70);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var envVar = process.env.OPENSHIFT_ENV_VAR;

function isProd() {
  if (true) {
    return true;
  }
  return false;
}

function getApi() {
  return isProd() ? _config2.default.production.api : _config2.default.development.api;
}

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(39);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(26)
  , createDesc = __webpack_require__(46);
module.exports = __webpack_require__(27) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(119)
  , enumBugKeys = __webpack_require__(74);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Divider = __webpack_require__(445);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Divider2.default;

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(14);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(13);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = __webpack_require__(4);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider(props, context) {
  var inset = props.inset,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['inset', 'style']);
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      prepareStyles = _context$muiTheme.prepareStyles;


  var styles = {
    root: {
      margin: 0,
      marginTop: -1,
      marginLeft: inset ? 72 : 0,
      height: 1,
      border: 'none',
      backgroundColor: baseTheme.palette.borderColor
    }
  };

  return _react2.default.createElement('hr', (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }));
};

Divider.muiName = 'Divider';

 false ? Divider.propTypes = {
  /**
   * If true, the `Divider` will be indented.
   */
  inset: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;

Divider.defaultProps = {
  inset: false
};

Divider.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};

exports.default = Divider;

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Divider = __webpack_require__(444);

var _Divider2 = _interopRequireDefault(_Divider);

var _actions = __webpack_require__(48);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(44);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(355);

var WalkItem = function (_Component) {
  _inherits(WalkItem, _Component);

  function WalkItem(props) {
    _classCallCheck(this, WalkItem);

    var _this = _possibleConstructorReturn(this, (WalkItem.__proto__ || Object.getPrototypeOf(WalkItem)).call(this, props));

    _this.goToWalk = _this.goToWalk.bind(_this);
    return _this;
  }

  _createClass(WalkItem, [{
    key: 'goToWalk',
    value: function goToWalk(walkId) {
      this.props.getWalkSummary(this.props.walk.id);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'walk-card', onClick: this.goToWalk },
          _react2.default.createElement(
            'p',
            { className: 'walk-title' },
            this.props.walk.title
          ),
          _react2.default.createElement(
            'p',
            { className: 'walk-city' },
            this.props.walk.city
          ),
          _react2.default.createElement(
            'p',
            { className: 'walk-start' },
            'Starts at ' + this.props.walk.start_pt_text
          )
        ),
        _react2.default.createElement(_Divider2.default, null)
      );
    }
  }]);

  return WalkItem;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, actions)(WalkItem);

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(68);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geoActions = __webpack_require__(85);

Object.keys(_geoActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _geoActions[key];
    }
  });
});

var _appActions = __webpack_require__(49);

Object.keys(_appActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _appActions[key];
    }
  });
});

var _walkActions = __webpack_require__(125);

Object.keys(_walkActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _walkActions[key];
    }
  });
});

var _authActions = __webpack_require__(79);

Object.keys(_authActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _authActions[key];
    }
  });
});

var _formActions = __webpack_require__(128);

Object.keys(_formActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _formActions[key];
    }
  });
});

var _navActions = __webpack_require__(45);

Object.keys(_navActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _navActions[key];
    }
  });
});

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateConn = updateConn;
exports.checkConn = checkConn;
exports.welcomed = welcomed;
exports.setPrevPath = setPrevPath;
var a = __webpack_require__(22).app;
var isOnline = __webpack_require__(59);

function updateConn(online) {
  return {
    type: a.UPDATE_CONN,
    payload: !online
  };
}

function checkConn() {
  return function (dispatch) {
    isOnline().then(function (online) {
      dispatch(updateConn(online));
    });
  };
}

function welcomed() {
  return {
    type: a.WELCOMED
  };
}

function setPrevPath(prevPath) {
  return {
    type: a.PREV_PATH,
    payload: { prevPath: prevPath }
  };
}

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(44);

var _WalkItem = __webpack_require__(468);

var _WalkItem2 = _interopRequireDefault(_WalkItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(355);

var WalkList = function (_Component) {
  _inherits(WalkList, _Component);

  function WalkList(props) {
    _classCallCheck(this, WalkList);

    var _this = _possibleConstructorReturn(this, (WalkList.__proto__ || Object.getPrototypeOf(WalkList)).call(this, props));

    _this.renderItems = _this.renderItems.bind(_this);
    return _this;
  }

  _createClass(WalkList, [{
    key: 'renderItems',
    value: function renderItems() {
      var items = void 0;
      if (this.props.mywalks.length == 0) {
        return _react2.default.createElement(
          'div',
          { className: 'noresults' },
          _react2.default.createElement(
            'p',
            null,
            'No Saved Walks'
          )
        );
      } else {
        items = this.props.mywalks.map(function (walk) {
          if (walk.geometry.type != "LineString") {
            return _react2.default.createElement(_WalkItem2.default, { key: 'walksum' + walk.properties.id,
              walk: walk.properties, backTo: 'mywalks'
            });
          }
        });
      }
      return items;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'walklist' },
        this.renderItems()
      );
    }
  }]);

  return WalkList;
}(_react.Component);

function mapStateToProps(state) {
  return {
    mywalks: state.walks.myWalks.features
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WalkList);

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageBar = __webpack_require__(115);

var _PageBar2 = _interopRequireDefault(_PageBar);

var _actions = __webpack_require__(48);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(44);

var _MyWalkList = __webpack_require__(504);

var _MyWalkList2 = _interopRequireDefault(_MyWalkList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyWalks = function (_Component) {
  _inherits(MyWalks, _Component);

  function MyWalks(props) {
    _classCallCheck(this, MyWalks);

    return _possibleConstructorReturn(this, (MyWalks.__proto__ || Object.getPrototypeOf(MyWalks)).call(this, props));
  }

  _createClass(MyWalks, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //fetch mywalks 
      this.props.getMyWalks();
    }
  }, {
    key: 'handleTouchTap',
    value: function handleTouchTap(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'PAGE MYWALKS', key: 'mywalks' },
        _react2.default.createElement(_PageBar2.default, { title: 'My Walks', leftIcon: 'hamburger', backTo: 'home' }),
        _react2.default.createElement(
          'div',
          { className: 'CONTENT ' },
          _react2.default.createElement(
            'div',
            { className: 'COLUMN center-children' },
            _react2.default.createElement(_MyWalkList2.default, null)
          )
        )
      );
    }
  }]);

  return MyWalks;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, actions)(MyWalks);

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(165);

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(12);
var normalizeHeaderName = __webpack_require__(179);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(80);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(80);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const isReachable = __webpack_require__(191);
const hostnames = __webpack_require__(190);

module.exports = options => {
	options = options || {};
	return isReachable(options.hostnames || hostnames);
};


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  development: {
    api: 'http://localhost:3090'
  },

  production: {
    api: 'https://api-tmarr.rhcloud.com'
  },
  googleApiKey: 'AIzaSyDmE6MtwHWYwR1C-ketRL9vZcbrMlK0ps0',
  mapzenApiKey: 'mapzen-sAkpydF',
  mapboxApiKey: 'pk.eyJ1IjoidGVycnljb2NvIiwiYSI6ImNpd3VjZDg1djAwdTEydHFydDVhN3NmNXIifQ.mH05pbOoxVeyzPKas0Gbig',
  mapquestKey: 'GVTzKzwMDTCKBu1S2Vx0RaN0XaWUYTlj',
  mapquestSecret: 'uIigGYgRCE0XWs63'
};

exports.default = config;

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(208);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(77)('keys')
  , uid    = __webpack_require__(61);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(23)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(39);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signupUser = signupUser;
exports.signinUser = signinUser;
exports.checkTokenAndLogin = checkTokenAndLogin;
exports.logout = logout;
exports.authUser = authUser;
exports.authError = authError;
exports.authRoute = authRoute;
exports.clearAuth = clearAuth;
exports.clearError = clearError;
exports.showLoader = showLoader;

var _appActions = __webpack_require__(49);

var _navActions = __webpack_require__(45);

var _axios_headers = __webpack_require__(86);

var _axios_headers2 = _interopRequireDefault(_axios_headers);

var _environment = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = __webpack_require__(22).auth;

var isOnline = __webpack_require__(59);
var API_URL = (0, _environment.getApi)();

function signupUser(_ref, toRoute) {
  var username = _ref.username,
      email = _ref.email,
      password = _ref.password;

  return function (dispatch, getState) {
    dispatch(showLoader());
    isOnline().then(function (online) {
      dispatch((0, _appActions.updateConn)(online));
      if (!online) {
        return;
      } else {
        _axios_headers2.default.post(API_URL + '/signup', { username: username, email: email, password: password }).then(function (response) {
          var payload = { new: true, username: response.data.username, aCheck: response.data.aCheck };
          dispatch(authUser(payload));
          localStorage.setItem('token', response.data.token);

          var toRoute = getState().auth.authRoute;
          dispatch((0, _navActions.requestRoute)(toRoute, 'right'));
        }).catch(function (error) {
          dispatch({
            type: a.AUTH_ERROR,
            payload: error.response.data.error
          });
        });
      } //end if
    });
  };
}

function signinUser(_ref2) {
  var usernameOrEmail = _ref2.usernameOrEmail,
      password = _ref2.password;

  return function (dispatch, getState) {
    dispatch(showLoader());
    isOnline().then(function (online) {
      dispatch((0, _appActions.updateConn)(online));
      if (!online) {
        return;
      } else {
        //submit email password to server
        _axios_headers2.default.post(API_URL + '/signin', { usernameOrEmail: usernameOrEmail, password: password }).then(function (response) {
          // req is good...
          // update state to indicate user is authenticated
          var payload = { username: response.data.username, aCheck: response.data.aCheck, walkIds: response.data.walkIds };
          dispatch(authUser(payload));

          // save jwt token to local storage
          localStorage.setItem('token', response.data.token);

          //get where we need to go back to from store
          var toRoute = getState().auth.authRoute || 'home';
          dispatch((0, _navActions.requestRoute)(toRoute, 'right'));
        }).catch(function (error) {
          //req is bad...
          // show error to user)
          dispatch(authError('Bad login info. Try again'));
        });
      } //end if
    }); //end online
  }; //end func
} //end signin

function checkTokenAndLogin() {
  return function (dispatch, getState) {
    dispatch(showLoader());
    isOnline().then(function (online) {
      dispatch((0, _appActions.updateConn)(online));
      if (!online) {
        return;
      } else {
        var token = localStorage.getItem('token');
        if (!token || token == '') {
          dispatch(clearAuth());
          return;
        }
        _axios_headers2.default.post(API_URL + '/login').then(function (response) {
          var payload = { username: response.data.username, aCheck: response.data.aCheck, walkIds: response.data.walkIds };
          dispatch(authUser(payload));
        }).catch(function (err) {
          //req is bad...
          // show error to user)
          dispatch(clearAuth());
          dispatch(authError(err.response.data.error));
        });
      } //end if
    }); //end online
  }; //end func
} //end login

function logout() {
  return function (dispatch, getState) {
    isOnline().then(function (online) {
      dispatch((0, _appActions.updateConn)(online));
      if (!online) {
        return;
      } else {

        _axios_headers2.default.post(API_URL + '/logout').then(function (response) {
          dispatch({ type: a.UNAUTH_USER });
          localStorage.removeItem('token');
          dispatch((0, _navActions.requestRoute)('home', 'left'));
        }).catch(function (error) {
          dispatch({
            type: a.AUTH_ERROR,
            payload: error.response.data.error
          });
          dispatch({ type: a.UNAUTH_USER });
          localStorage.removeItem('token');
          dispatch((0, _navActions.requestRoute)('home', 'left'));
        });
      } //end if
    });
  };
}

function authUser(payload) {
  return {
    type: a.AUTH_USER,
    payload: payload
  };
}

function authError(error) {
  return {
    type: a.AUTH_ERROR,
    payload: error
  };
}

function authRoute(route) {
  return {
    type: a.AUTH_ROUTE,
    payload: route
  };
}

function clearAuth() {
  return {
    type: a.UNAUTH_USER
  };
}

function clearError() {
  return {
    type: a.CLEAR_ERROR
  };
}

function showLoader() {
  return {
    type: a.SHOW_LOADER
  };
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);
var settle = __webpack_require__(171);
var buildURL = __webpack_require__(174);
var parseHeaders = __webpack_require__(180);
var isURLSameOrigin = __webpack_require__(178);
var createError = __webpack_require__(83);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(173);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(176);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(170);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initLoc = initLoc;
exports.setHere = setHere;

var _math = __webpack_require__(183);

var _axios = __webpack_require__(57);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(70);

var _config2 = _interopRequireDefault(_config);

var _geo = __webpack_require__(87);

var _appActions = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = __webpack_require__(22).geo;
var IP_API = "https://ipinfo.io/json";

var isOnline = __webpack_require__(59);
var SECS = 1000;
var PRECISION = 6; //5 is within a yard or so


function initLoc() {
  return function (dispatch, getState) {
    isOnline().then(function (online) {
      if (online) {
        if (getState().geo.here.lat != null) {
          //already fetched
          return null;
        }
        if ("geolocation" in navigator || navigator.geolocation) {

          var positionOptions = {
            maximumAge: 30 * SECS,
            timeout: 27 * SECS,
            enableHighAccuracy: true //this needed for walking scale?
          };

          var success = function success(position) {
            console.log('location succeeded:');
            var loc = {
              lat: (0, _math.round)(position.coords.latitude, PRECISION),
              lng: (0, _math.round)(position.coords.longitude, PRECISION),
              ts: position.timestamp,
              used: 'navigator'
            };
            var box = (0, _geo.latLng2Box)(loc.lat, loc.lng);
            var payload = { loc: loc, box: box };
            dispatch(setHere(payload));
          };

          var error = function error(err) {
            // console.log('error1:', err);
            useGoogleLocator(dispatch);
          };

          pingLocation(success, error, positionOptions);
        } else {
          // dispatch(setAvail(false));
          dispatch(geoError("Geolocation API is not supported in your browser."));
        }
      } else {
        //not online
        dispatch((0, _appActions.updateConn)(online));
      }
    });
  }; //end func
} //end initLoc

function useGoogleLocator(dispatch) {
  // console.log('google locator called');
  var key = _config2.default.googleApiKey;
  var API = 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + key;
  _axios2.default.post(API).then(function (response) {
    // console.log('response from google:', response);
    var loc = {
      lat: (0, _math.round)(response.data.location.lat, PRECISION),
      lng: (0, _math.round)(response.data.location.lng, PRECISION),
      ts: Date.now(),
      used: 'google'
    };
    var box = (0, _geo.latLng2Box)(loc.lat, loc.lng);
    var payload = { loc: loc, box: box };
    dispatch(setHere(payload));
  }).catch(function (err) {
    // console.log('error2:', err);
    initIpLocation(dispatch);
  });
}

function initIpLocation(dispatch) {
  _axios2.default.get(IP_API).then(function (response) {
    var locarr = response.data.loc.split(",");
    var lat = parseFloat(locarr[0]);
    var lng = parseFloat(locarr[1]);
    var loc = {
      lat: lat,
      lng: lng,
      ts: Date.now(),
      formatted_address: response.data.city + ", " + response.data.region + ", " + response.data.country,
      used: 'ip'
    };
    dispatch(setHere(loc));
  }).catch(function (err) {
    // console.log('error3:', err);
    dispatch(geoError(err));
  });
}

function setAvail(avail) {
  return {
    type: a.SET_AVAIL,
    payload: { avail: avail }
  };
}

function setHere(payload) {
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
  return function (dispatch, getState) {
    var api = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + loc.lat + ',' + loc.lng;
    _axios2.default.get(api).then(function (response) {
      console.log('response:', response);
    });
  };
}

function pingLocation(success, error, positionOptions) {
  return navigator.geolocation.getCurrentPosition(success, error, positionOptions);
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(57);

var _axios2 = _interopRequireDefault(_axios);

var _environment = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AUTH_TOKEN = localStorage.getItem('token') || '';

_axios2.default.defaults.baseURL = (0, _environment.getApi)() || 'http://localhost:3090';
_axios2.default.defaults.headers.common['Authorization'] = AUTH_TOKEN;
_axios2.default.defaults.headers.post['Content-Type'] = 'application/json';

exports.default = _axios2.default;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.box2Bounds = box2Bounds;
exports.geom2Box = geom2Box;
exports.bounds2Box = bounds2Box;
exports.latLng2Box = latLng2Box;
function box2Bounds(L, box) {
  //sw, ne bounds for leaflet
  var sw = L.latLng(box.bottom, box.left);
  var ne = L.latLng(box.top, box.right);
  return L.latLngBounds(sw, ne);
}

//google geom to box
function geom2Box(geom) {
  var e = geom.viewport.b.b;
  var w = geom.viewport.b.f;
  var n = geom.viewport.f.b;
  var s = geom.viewport.f.f;
  return {
    right: e, left: w, top: n, bottom: s
  };
}

//convert leaflet bounds into box
function bounds2Box(bounds) {
  if (bounds) {
    var e = bounds.getEast();
    var w = bounds.getWest();
    var n = bounds.getNorth();
    var s = bounds.getSouth();
    return {
      right: e, left: w, top: n, bottom: s
    };
  }
}

function latLng2Box(lat, lng) {
  var centerPoint = [lat, lng];
  var distance = 1;
  var boundsarr = getBoundingBox(centerPoint, distance);

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
    return 180 * this / Math.PI;
  };
  // coordinate limits
  MIN_LAT = (-90).degToRad();
  MAX_LAT = 90 .degToRad();
  MIN_LON = (-180).degToRad();
  MAX_LON = 180 .degToRad();
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
  return [minLon.radToDeg(), //w
  minLat.radToDeg(), //s
  maxLon.radToDeg(), //e
  maxLat.radToDeg() //n
  ];
};

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(201)
  , lolcation = __webpack_require__(202)
  , qs = __webpack_require__(198)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
URL.prototype.set = function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
      url.pathname = value.length && value.charAt(0) !== '/' ? '/' + value : value;

      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
};

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
URL.prototype.toString = function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
};

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;


/***/ })

},[519]);