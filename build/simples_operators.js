'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple$ = _Rx2.default.Observable.range(1, 10);

simple$.first().subscribe((0, _util.createSubscriber)("first"));

simple$.last().subscribe((0, _util.createSubscriber)("last"));

simple$.single().subscribe((0, _util.createSubscriber)("single"));

_Rx2.default.Observable.of(1).single().subscribe((0, _util.createSubscriber)("right single"));

simple$.skip(3).subscribe((0, _util.createSubscriber)("skip"));

_Rx2.default.Observable.from([1, 2, 3, 6, 3, 2, 1]).skipWhile(function (i) {
  return i < 6;
}).subscribe((0, _util.createSubscriber)("skip while"));

_Rx2.default.Observable.from([1, 2, 3, 6, 3, 2, 1]).takeWhile(function (i) {
  return i < 6;
}).subscribe((0, _util.createSubscriber)("take while"));

_Rx2.default.Observable.interval(500).skipUntil(_Rx2.default.Observable.timer(2000)).takeUntil(_Rx2.default.Observable.timer(5000)).subscribe((0, _util.createSubscriber)("skip/take until"));