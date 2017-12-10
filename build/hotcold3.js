'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Rx2.default.Observable.prototype.shareReplay = function (n) {
  return this.publishReplay(n).refCount();
};

var simple$ = new _Rx2.default.Observable(function (observer) {
  observer.next("one");
  observer.next("two");
  observer.next("three");

  return function () {
    return console.log("Disposed");
  };
});

var published$ = simple$.shareReplay(2);

var sub1 = published$.subscribe((0, _util.createSubscriber)("one"));
var sub2 = published$.subscribe((0, _util.createSubscriber)("two"));

sub1.unsubscribe();
sub2.unsubscribe();