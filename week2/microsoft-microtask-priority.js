/*Question: Predict the exact output. Explain why the asyncFn behaves differently than a standard promise chain.*/

console.log('1 - Sync');

setTimeout(() => {
  console.log('2 - Macrotask');
}, 0);

async function asyncFn() {
  console.log('3 - Inside Async');
  await Promise.resolve();
  console.log('4 - After Await');
}

asyncFn();

Promise.resolve().then(() => {
  console.log('5 - Microtask');
});

console.log('6 - Sync End');


/*Solution:

As per javascript execution, 
The first console statement will be pushed to the call stack , 
setTimout will be pushed to the macrotask queue
3 - Inside Async will be pushed to the call stack
everything after await will be in the microtask queue - 4 -After Await 
5- microtask will again be pushed to the microtask queue
6-sync end will be in the call stack

so the final output is 1- sync, 3- Inside Async, 6 - Sync End, 4 - After Await, 5 - MicroTask, 2- Macrotask */