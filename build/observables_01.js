"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple$ = new _Rx2.default.Observable(function (observer) {
  console.log("Generating Observable");
  setTimeout(function () {
    observer.next("An Item");
    setTimeout(function () {
      observer.next("Another Item");
      observer.complete();
    }, 1000);
  }, 1000);
});

var error$ = new _Rx2.default.Observable(function (observer) {
  return observer.error(new Error("WHOA!!"));
});

error$.subscribe(function (item) {
  return console.log("one.next " + item);
}, function (error) {
  return console.log("one.error " + error.stack);
}, function () {
  return console.log("one.complete");
});

setTimeout(function () {
  simple$.subscribe({
    next: function next(item) {
      console.log("two.next " + item);
    },

    error: function error(_error) {
      return console.log("two.error " + _error);
    },
    complete: function complete() {
      return console.log("two.complete");
    }
  });
}, 3000);