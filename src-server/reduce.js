import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

Rx.Observable.range(1,20)
  .reduce((acc,value) => acc + value)
  .subscribe(createSubscriber('reduce'));

Rx.Observable.range(1,10)
  .merge(Rx.Observable.never())
  .scan((acc,value) => acc * value)
  .subscribe(createSubscriber('scan'));

Rx.Observable.range(1,10)
  .map(i => i*i)
  .scan(([last, _],current) => [current,last], [])
  .subscribe(createSubscriber('scan deconstruct'));

