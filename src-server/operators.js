import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

Rx.Observable.range(1, 10)
  .do(a => console.log(`from ${a}`))
  .map(a => a*a)
  .subscribe(createSubscriber("do"));

Rx.Observable.range(1, 10)
  .finally(() => console.log("Finally scope"))
  .map(a => a*2)
  .subscribe(createSubscriber("finally"));

Rx.Observable.range(1, 10)
  .filter(a => a%2==0)
  .map(a => a/2)
  .subscribe(createSubscriber("filter"));

Rx.Observable.interval(1000)
  .startWith(-1)
  .subscribe(createSubscriber("startWith"));
