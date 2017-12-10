import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

const simple$ = new Rx.Observable(observer => {
  observer.next("one");
  observer.next("two");
  observer.next("three");

  return () => console.log("Disposed");
});


const published$ = simple$.publishReplay(2);

const sub1 = published$.subscribe(createSubscriber("one"));
const connection = published$.connect();
const sub2 = published$.subscribe(createSubscriber("two"));

sub1.unsubscribe();
sub2.unsubscribe();

connection.unsubscribe();
