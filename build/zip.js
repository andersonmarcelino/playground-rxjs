'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Rx2.default.Observable.range(1, 10).zip(_Rx2.default.Observable.interval(500), function (left, right) {
  return left + ' at ' + right * 500 + ' milesegs';
}).subscribe((0, _util.createSubscriber)('zip'));