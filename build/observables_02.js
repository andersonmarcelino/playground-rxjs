"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createInterval$(time) {
  return new _Rx2.default.Observable(function (observer) {
    var index = 0;
    var interval = setInterval(function () {
      console.log("generating " + index);
      observer.next(index++);
    }, time);

    return function () {
      return clearInterval(interval);
    };
  });
}

function createSubscriber(tag) {
  return {
    next: function next(item) {
      console.log(tag + ".next " + item);
    },
    error: function error(_error) {
      console.log(tag + ".error " + (_error.stack || _error));
    },
    complete: function complete() {
      console.log(tag + ".complete");
    }
  };
}

function take$(sourceObservable$, amount) {
  return new _Rx2.default.Observable(function (observer) {
    var count = 0;
    var subscription = sourceObservable$.subscribe({
      next: function next(item) {
        observer.next(item);
        console.log(count);
        if (++count >= amount) {
          observer.complete();
        }
      },
      error: function error(_error2) {
        observer.error(_error2);
      },
      complete: function complete() {
        observer.complete();
      }
    });

    return function () {
      return subscription.unsubscribe();
    };
  });
}

var everySecond$ = createInterval$(1000);
var firstFiveSeconds$ = take$(everySecond$, 5);
var subscription = firstFiveSeconds$.subscribe(createSubscriber("one"));