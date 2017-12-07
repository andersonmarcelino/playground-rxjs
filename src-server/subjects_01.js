import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

const simple$ = new Rx.Subject();

simple$.subscribe(createSubscriber("subject"));

simple$.next("1");
simple$.next("chola");
simple$.complete();

const interval$ = Rx.Observable.interval(1000).take(5);
const intervalSubject$ = new Rx.Subject();

interval$.subscribe(intervalSubject$);

intervalSubject$.subscribe(createSubscriber("sub01"));
intervalSubject$.subscribe(createSubscriber("sub02"));
intervalSubject$.subscribe(createSubscriber("sub03"));

setTimeout(()=> intervalSubject$.subscribe(createSubscriber("LOOK AT ME!")),3000);
