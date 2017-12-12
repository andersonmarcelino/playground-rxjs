import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

const simple$ = Rx.Observable.range(1,10);

simple$.first()
  .subscribe(createSubscriber("first"));

simple$.last()
  .subscribe(createSubscriber("last"));

simple$.single()
  .subscribe(createSubscriber("single"));

Rx.Observable.of(1)
  .single()
  .subscribe(createSubscriber("right single"));

simple$.skip(3)
  .subscribe(createSubscriber("skip"));

Rx.Observable.from([1,2,3,6,3,2,1])
  .skipWhile(i => i<6)
  .subscribe(createSubscriber("skip while"));

Rx.Observable.from([1,2,3,6,3,2,1])
  .takeWhile(i => i<6)
  .subscribe(createSubscriber("take while"));

Rx.Observable.interval(500)
  .skipUntil(Rx.Observable.timer(2000))
  .takeUntil(Rx.Observable.timer(5000))
  .subscribe(createSubscriber("skip/take until"));
