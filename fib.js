//http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/creating_and_subscribing_to_simple_observable_sequences.html#creating-and-subscribing-to-a-simple-sequence

let Rx = require('rxjs/Rx')

function* fibonacci () {
  var fn1 = 1;
  var fn2 = 1;
  while (1){
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    yield current;
  }
}

// Converts a generator to an observable sequence
let gen = fibonacci()
let source1 = Rx.Observable.from(gen).take(5);
let source2 = Rx.Observable.from(gen).take(10);
// Prints out each item
source1.subscribe(
  x => console.log('#1 onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('#1 onCompleted'));

source2.subscribe(
  x => console.log('#2 onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('#2 onCompleted'));
