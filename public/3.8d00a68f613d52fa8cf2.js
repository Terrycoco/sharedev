webpackJsonp([3],{249:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(5),i=o(f),p=n(135),s=o(p),b=n(136),y=r(b),d=n(51),h=function(e){function t(e){return u(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),c(t,[{key:"handleTouchTap",value:function(e){e.preventDefault()}},{key:"render",value:function(){return i.default.createElement("div",{className:"PAGE CREATE"},i.default.createElement(s.default,{title:"Create a Walk",leftIcon:"hamburger",backTo:"/L"}),i.default.createElement("div",{className:"CONTENT"}))}}]),t}(f.Component);t.default=(0,d.connect)(null,y)(h)}});