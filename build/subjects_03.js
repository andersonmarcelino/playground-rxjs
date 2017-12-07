'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replay$ = new _Rx2.default.ReplaySubject(3);
replay$.next(1);
replay$.next(2);

replay$.subscribe((0, _util.createSubscriber)("one"));

replay$.next(3);
replay$.next(4);
replay$.next(5);
replay$.next(6);

replay$.subscribe((0, _util.createSubscriber)("two"));

replay$.next(7);
replay$.next(8);

var async$ = new _Rx2.default.AsyncSubject();
async$.next(1);

async$.subscribe((0, _util.createSubscriber)("one"));
async$.next(2);
async$.complete();

setTimeout(function () {
  async$.subscribe((0, _util.createSubscriber)("two"));
}, 2000);