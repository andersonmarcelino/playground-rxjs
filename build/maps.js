'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
console.log(arrayMergeMap([1,2,3,4,5], a => [a,a*2,a*3]));

function arrayMap(array, projection){
  const returnArray = [];
  for (let item of array){
    returnArray.push(projection(item));
  }
  return returnArray;
}

function arrayMergeMap(array, projection){
  const returnArray = [];
  for (let item of array){
    const projectedArray = projection(item);
    for (let projected of projectedArray){
      returnArray.push(projected);
    }
  }
  return returnArray;
}

Rx.Observable.range(2,3)
  .mergeMap(i => Rx.Observable.timer(i * 1000).map(() => `after ${i} seconds`))
  .subscribe(createSubscriber("mergeMap"));
*/

_Rx2.default.Observable.fromPromise(getTracks()).mergeMap(function (tracks) {
  return _Rx2.default.Observable.from(tracks);
}).subscribe((0, _util.createSubscriber)("tracks"));

function getTracks() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(["track 1", "track 2", "track 3"]);
    }, 1000);
  });
};