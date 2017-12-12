'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Rx2.default.Observable.fromPromise(getApi()).catch(function (e) {
  return _Rx2.default.Observable.of(e);
}).subscribe((0, _util.createSubscriber)("get Api"));

function getApi() {
  return new Promise(function (resolve, reject) {
    console.log("getting API");
    reject(new Error("Error"));
  });
}