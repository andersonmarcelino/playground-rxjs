'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createInterval$(time) {
  return new _Rx2.default.Observable(function (observer) {
    var index = 0;
    var interval = setInterval(function () {
      console.log('generating ' + index);
      observer.next(index++);
    }, time);

    return function () {
      return clearInterval(interval);
    };
  });
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
      error: function error(_error) {
        observer.error(_error);
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
var subscription = firstFiveSeconds$.subscribe((0, _util.createSubscriber)("one"));