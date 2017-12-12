import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

Rx.Observable.range(1,10)
  .zip(Rx.Observable.interval(500), (left,right) => `${left} at ${right*500} milesegs`)
  .subscribe(createSubscriber('zip'));
