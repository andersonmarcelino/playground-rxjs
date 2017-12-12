'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Rx2.default.Observable.range(1, 100).bufferCount(25).subscribe((0, _util.createSubscriber)('buffer count'));

_Rx2.default.Observable.interval(500).buffer(_Rx2.default.Observable.interval(2000)).take(10).mergeMap(function (a) {
  return a;
}).subscribe((0, _util.createSubscriber)('buffer Time'));

_Rx2.default.Observable.range(1, 10).toArray().subscribe((0, _util.createSubscriber)('to array'));