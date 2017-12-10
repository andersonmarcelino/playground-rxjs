import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

const interval$ = Rx.Observable.interval(1000)
  .take(10)
  .publish();

setInterval(() => interval$.connect(),5000);

setTimeout(() => {
  interval$.subscribe(createSubscriber("one"));
} ,1200);

setTimeout(() => {
  interval$.subscribe(createSubscriber("two"));
} ,3200);
