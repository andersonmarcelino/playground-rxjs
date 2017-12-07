import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

const replay$ = new Rx.ReplaySubject(3);
replay$.next(1);
replay$.next(2);

replay$.subscribe(createSubscriber("one"));

replay$.next(3);
replay$.next(4);
replay$.next(5);
replay$.next(6);

replay$.subscribe(createSubscriber("two"));

replay$.next(7);
replay$.next(8);

const async$ = new Rx.AsyncSubject();
async$.next(1);

async$.subscribe(createSubscriber("one"));
async$.next(2);
async$.complete();

setTimeout(() => {
  async$.subscribe(createSubscriber("two"));
},2000);
