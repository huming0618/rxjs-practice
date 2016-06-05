//http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/creating_and_subscribing_to_simple_observable_sequences.html#creating-and-subscribing-to-a-simple-sequence
let Rx = require('rxjs/Rx')
console.log('Current time: ' + Date.now());

let source = Rx.Observable.timer(
  5000, /* 5 seconds */
  1000 /* 1 second */)
   .timestamp();

let subscription = source.subscribe(
  x => console.log(x.value + ': ' + x.timestamp));
