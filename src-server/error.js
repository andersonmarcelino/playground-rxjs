import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

Rx.Observable.fromPromise(getApi())
  .catch(e => Rx.Observable.of(e))
  .subscribe(createSubscriber("get Api"));

function getApi() {
  return new Promise((resolve,reject) => {
    console.log("getting API")
    reject(new Error("Error"));
  });
}
