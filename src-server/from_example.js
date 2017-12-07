import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';
import fs from 'fs';

const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir);

readdir$('./src-server')
  .mergeMap(files => Rx.Observable.from(files))
  .subscribe(createSubscriber('readdir'));

function getItem(){
  return new Promise ((resolve, reject) => setTimeout(() => resolve('Hello'),1000));
}

Rx.Observable.fromPromise(getItem())
  .subscribe(createSubscriber("Promise"));
