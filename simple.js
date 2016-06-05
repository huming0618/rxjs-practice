let Rx = require('rxjs/Rx');


let source = Rx.Observable.create(observer => {
  // Yield a single value and complete

  observer.next(42);
  observer.complete();

  // Any cleanup logic might go here
  return () => console.log('disposed')
});

let subscription = source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));

// => onNext: 42
// => onCompleted

//subscription.dispose();
