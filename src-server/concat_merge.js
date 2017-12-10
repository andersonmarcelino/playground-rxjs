import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

/*
Rx.Observable.interval(1000)
  .merge(Rx.Observable.interval(500))
  .take(5)
  .subscribe(createSubscriber("merge"));
*/

Rx.Observable.concat(
  Rx.Observable.range(1,5),
  Rx.Observable.range(10,3))
  .subscribe(createSubscriber("concat"));

Rx.Observable.merge(
  Rx.Observable.interval(1000).map(a => `${a} seconds`),
  Rx.Observable.interval(500).map(a => `${a} half seconds`))
  .take(20)
  .subscribe(createSubscriber("merge"));
