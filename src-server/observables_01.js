import Rx from 'rxjs/Rx';

const simple$ = new Rx.Observable(observer => {
  console.log("Generating Observable");
  setTimeout(() => {
    observer.next("An Item");
    setTimeout(() => {
      observer.next("Another Item");
      observer.complete();
    },1000);
  },1000);
});

const error$ = new Rx.Observable(observer => observer.error(new Error("WHOA!!")));

error$.subscribe(
  item => console.log(`one.next ${item}`),
  error => console.log(`one.error ${error.stack}`),
  () => console.log("one.complete")
);

setTimeout(() => {
simple$.subscribe({
  next(item) {
    console.log(`two.next ${item}`)
  },
  error: error => console.log(`two.error ${error}`),
  complete: () => console.log("two.complete")
});
},3000);
