import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

function createInterval$(time) {
  return new Rx.Observable(observer => {
    let index = 0;
    let interval = setInterval(() => {
      console.log(`generating ${index}`);
      observer.next(index++);
    },time);

    return () => clearInterval(interval);
  });
}

function take$(sourceObservable$, amount){
  return new Rx.Observable(observer => {
    let count = 0;
    const subscription = sourceObservable$.subscribe({
      next(item) {
        observer.next(item);
        console.log(count);
        if (++count >= amount){
          observer.complete();
        }
      },
      error(error) { observer.error(error); },
      complete() { observer.complete(); }
    });

    return () => subscription.unsubscribe();
  });
}

const everySecond$ = createInterval$(1000);
const firstFiveSeconds$ = take$(everySecond$,5);
const subscription = firstFiveSeconds$.subscribe(createSubscriber("one"));
