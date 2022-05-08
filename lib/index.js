"use strict";

var _es6_functional = require("./es6_functional");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(0, _es6_functional.forEach)([1, 2, 3], function (data) {
  return console.log(data);
});
console.log("\n");
console.log(_typeof(_es6_functional.forEach));
(0, _es6_functional.tellType)(1);
(0, _es6_functional.tellType)(_es6_functional.forEach);