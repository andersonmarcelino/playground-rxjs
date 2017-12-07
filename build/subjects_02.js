'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentUser$ = new _Rx2.default.BehaviorSubject({ isLoggedIn: false });
var isLoggedIn$ = currentUser$.map(function (u) {
  return u.isLoggedIn;
});

isLoggedIn$.subscribe((0, _util.createSubscriber)("isLoogedIn"));

//currentUser$.next({isLoggedIn: false});

setTimeout(function () {
  return currentUser$.next({ isLoggedIn: true });
}, 2000);

setTimeout(function () {
  return isLoggedIn$.subscribe((0, _util.createSubscriber)("delayed"));
}, 1000);