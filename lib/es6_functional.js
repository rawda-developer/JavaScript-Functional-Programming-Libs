"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tellType = exports.forEach = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var forEach = function forEach(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
};

exports.forEach = forEach;

var tellType = function tellType(data) {
  if (typeof data === "function") {
    data([1, 2, 3], function (item) {
      return console.log(item);
    });
  } else console.log("The type of data is " + _typeof(data));
};

exports.tellType = tellType;