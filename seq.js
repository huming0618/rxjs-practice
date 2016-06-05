//http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/creating_and_subscribing_to_simple_observable_sequences.html#creating-and-subscribing-to-a-simple-sequence

console.log('#Creating and subscribing to a simple sequence');
let Rx = require('rxjs/Rx');
let source = Rx.Observable.range(1, 5);

// Prints out each item
let subscription1 = source.subscribe(
 x => console.log('#1 onNext: %s', x),
 e => console.log('onError: %s', e),
 () => console.log('#1 onCompleted'));

let subscription2 = source.subscribe(
x => console.log('#2 onNext: %s', x),
e => console.log('onError: %s', e),
() => console.log('#2 onCompleted'));


// => onNext: 1
// => onNext: 2
// => onNext: 3
// => onNext: 4
// => onNext: 5
// => onCompleted
