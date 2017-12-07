import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util.js';

const currentUser$ = new Rx.BehaviorSubject({isLoggedIn: false});
const isLoggedIn$ = currentUser$.map(u => u.isLoggedIn);

isLoggedIn$.subscribe(createSubscriber("isLoogedIn"));

//currentUser$.next({isLoggedIn: false});

setTimeout(() => currentUser$.next({isLoggedIn: true}) ,2000);

setTimeout(() => isLoggedIn$.subscribe(createSubscriber("delayed")) ,1000);

