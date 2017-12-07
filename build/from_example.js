'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readdir$ = _Rx2.default.Observable.bindNodeCallback(_fs2.default.readdir);

readdir$('./src-server').mergeMap(function (files) {
  return _Rx2.default.Observable.from(files);
}).subscribe((0, _util.createSubscriber)('readdir'));

function getItem() {
  return new Promise(function (resolve, reject) {
    return setTimeout(function () {
      return resolve('Hello');
    }, 1000);
  });
}

_Rx2.default.Observable.fromPromise(getItem()).subscribe((0, _util.createSubscriber)("Promise"));