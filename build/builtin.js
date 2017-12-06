'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Rx.Observable.interval(500)
//  .take(5)
//  .subscribe(createSubscriber("Interval"));
//
//Rx.Observable.timer(1000,500)
//  .take(5)
//  .subscribe(createSubscriber("Timer"));

_Rx2.default.Observable.of("Hello, World", 42, "WHOA").subscribe((0, _util.createSubscriber)("of"));

_Rx2.default.Observable.from([1, 2, 3]).map(function (i) {
  return i * 10;
}).subscribe((0, _util.createSubscriber)("from"));

_Rx2.default.Observable.throw(new Error("Hey!")).subscribe((0, _util.createSubscriber)("error"));

_Rx2.default.Observable.empty().subscribe((0, _util.createSubscriber)("empty"));

var sideEffect = 0;

var defer$ = _Rx2.default.Observable.defer(function () {
  sideEffect++;
  return _Rx2.default.Observable.of(sideEffect);
});

defer$.subscribe((0, _util.createSubscriber)("defer.one"));
defer$.subscribe((0, _util.createSubscriber)("defer.two"));
defer$.subscribe((0, _util.createSubscriber)("defer.three"));

_Rx2.default.Observable.never().subscribe((0, _util.createSubscriber)("never"));

_Rx2.default.Observable.range(10, 30).filter(function (i) {
  return i % 5 === 0;
}).subscribe((0, _util.createSubscriber)("rage"));