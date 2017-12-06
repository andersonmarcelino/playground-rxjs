import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';


//Rx.Observable.interval(500)
//  .take(5)
//  .subscribe(createSubscriber("Interval"));
//
//Rx.Observable.timer(1000,500)
//  .take(5)
//  .subscribe(createSubscriber("Timer"));

Rx.Observable.of("Hello, World", 42, "WHOA")
  .subscribe(createSubscriber("of"));

Rx.Observable.from([1,2,3])
  .map(i => i*10)
  .subscribe(createSubscriber("from"));

Rx.Observable.throw(new Error("Hey!"))
  .subscribe(createSubscriber("error"));

Rx.Observable.empty()
  .subscribe(createSubscriber("empty"));

let sideEffect = 0;

const defer$ = Rx.Observable.defer(() => {
  sideEffect++;
  return Rx.Observable.of(sideEffect);
});

defer$.subscribe(createSubscriber("defer.one"));
defer$.subscribe(createSubscriber("defer.two"));
defer$.subscribe(createSubscriber("defer.three"));

Rx.Observable.never()
  .subscribe(createSubscriber("never"));

Rx.Observable.range(10,30)
  .filter(i => i%5 === 0)
  .subscribe(createSubscriber("rage"));
