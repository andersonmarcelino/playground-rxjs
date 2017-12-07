'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple$ = new _Rx2.default.Subject();

simple$.subscribe((0, _util.createSubscriber)("subject"));

simple$.next("1");
simple$.next("chola");
simple$.complete();

var interval$ = _Rx2.default.Observable.interval(1000).take(5);
var intervalSubject$ = new _Rx2.default.Subject();

interval$.subscribe(intervalSubject$);

intervalSubject$.subscribe((0, _util.createSubscriber)("sub01"));
intervalSubject$.subscribe((0, _util.createSubscriber)("sub02"));
intervalSubject$.subscribe((0, _util.createSubscriber)("sub03"));

setTimeout(function () {
  return intervalSubject$.subscribe((0, _util.createSubscriber)("LOOK AT ME!"));
}, 3000);