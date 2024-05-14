//1How many callbacks queues in Node.js and what are they? 
//1Give examples to explain how different callbacks are enqueued in different queues.
//     * The Event Loop Queue: and Various Asynchronous Callback Queues.
 //    ** Node.js, when you write asynchronous code using callbacks,(timer queue, I/O queue,and NextTickQueue...) 
 //     *these callbacks get queued up in different lines (or queues) based on the type of task they represent. 
 //    *The event loop then manages these queues, ensuring that each task is executed at the right time.
//__________________________________________________________________________________________________________________

//2console.log('start');

// setTimeout(() => console.log('timeout 1'), 0);

// setTimeout(() => {

//     console.log('timeout 2')

//     process.nextTick(() => console.log('nextTick 3'));

// }, 0);

// setTimeout(() => console.log('timeout 3'), 0);

// new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...1'));

// new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...2'));

// process.nextTick(() =>  console.log('nextTick 1'));

// process.nextTick(() =>  console.log('nextTick 2'));

// console.log('end');
//Answer
// start
// end
// nextTick 1
// nextTick 2
// Promise...1
// Promise...2
// timeout 1
// timeout 2
// nextTick 3
// timeout 3

//________________________________________________________________________________________________________________________________________
//3const fs = require('fs');


// fs.readFile('hello.txt', () => {

//     console.log('readFile....');

// });

// setTimeout(() => console.log('timeout'), 0);

// setImmediate(() => console.log('Immediate'));

//Answers
// Immediate
// readFile....
// timeout



