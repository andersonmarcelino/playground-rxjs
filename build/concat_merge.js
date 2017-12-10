'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Rx.Observable.interval(1000)
  .merge(Rx.Observable.interval(500))
  .take(5)
  .subscribe(createSubscriber("merge"));
*/

_Rx2.default.Observable.concat(_Rx2.default.Observable.range(1, 5), _Rx2.default.Observable.range(10, 3)).subscribe((0, _util.createSubscriber)("concat"));

_Rx2.default.Observable.merge(_Rx2.default.Observable.interval(1000).map(function (a) {
  return a + ' seconds';
}), _Rx2.default.Observable.interval(500).map(function (a) {
  return a + ' half seconds';
})).take(20).subscribe((0, _util.createSubscriber)("merge"));