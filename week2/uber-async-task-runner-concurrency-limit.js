/**
 * @param {Array<() => Promise<any>>} tasks - Array of functions returning promises
 * @param {number} limit - Maximum concurrent executions
 */


async function promiseAllWithConcurrencyLimit(tasks, limit){
    let nextIndex = 0
    let result = new Array(tasks.length)
    async function worker(){
        while(nextIndex < tasks.length){
            const i = nextIndex
            nextIndex++
            result[i] = await tasks[i]()
        }   
    }
    let workers = []

    for(let i=0;i<Math.min(tasks.length,limit);i++){
        workers.push(worker())
    }

    await Promise.all(workers)
    return result
}


// --- Input Data for Testing ---
const createDriverTask = (id, delay) => () => 
  new Promise((resolve) => {
    console.log(` Fetching Driver ${id}...`);
    setTimeout(() => {
      console.log(` Driver ${id} loaded`);
      resolve(`Data for Driver ${id}`);
    }, delay);
  });

const tasks = [createDriverTask(1, 500), createDriverTask(2, 1000), createDriverTask(3, 200), createDriverTask(4, 200)];

// If limit is 2, Task 1 and 2 start. 
// When Task 2 finishes at 0.5s, Task 3 starts immediately.
promiseAllWithConcurrencyLimit(tasks, 2).then(results => {
  console.log("All tasks completed:", results);
});