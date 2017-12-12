import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

Rx.Observable.range(1,100)
  .bufferCount(25)
  .subscribe(createSubscriber('buffer count'));

Rx.Observable.interval(500)
  .buffer(Rx.Observable.interval(2000))
  .take(10)
  .mergeMap(a => a)
  .subscribe(createSubscriber('buffer Time'));

Rx.Observable.range(1,10)
  .toArray()
  .subscribe(createSubscriber('to array'));
