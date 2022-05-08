"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var forEach = function forEach(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
};

var _default = forEach;
exports["default"] = _default;