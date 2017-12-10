import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

/*
console.log(arrayMergeMap([1,2,3,4,5], a => [a,a*2,a*3]));

function arrayMap(array, projection){
  const returnArray = [];
  for (let item of array){
    returnArray.push(projection(item));
  }
  return returnArray;
}

function arrayMergeMap(array, projection){
  const returnArray = [];
  for (let item of array){
    const projectedArray = projection(item);
    for (let projected of projectedArray){
      returnArray.push(projected);
    }
  }
  return returnArray;
}

Rx.Observable.range(2,3)
  .mergeMap(i => Rx.Observable.timer(i * 1000).map(() => `after ${i} seconds`))
  .subscribe(createSubscriber("mergeMap"));
*/

Rx.Observable.fromPromise(getTracks())
  .mergeMap(tracks => Rx.Observable.from(tracks))
  .subscribe(createSubscriber("tracks"));

function getTracks(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(["track 1","track 2","track 3"]);
    },1000);
  });
};
