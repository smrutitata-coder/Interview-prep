/*Question: What will be the output? Can the context of greet be changed using .call()? Why or why not? */

const profile = {
  userName: 'Vasanth',
  greet: () => {
    console.log(`Hi, I'm ${this.userName}`);
  },
  welcome: function() {
    console.log(`Welcome, ${this.userName}`);
  }
};

const friend = { userName: 'Candidate' };

profile.greet.call(friend); 
profile.welcome.call(friend);


/*Solution 

The first call will print Hi, I'm undefined, because greet is an arrow function. arrow functions have a lexical this,
so when u invoke them with call, they dont have any context and will print undefined.

The second call will print Welcome, Candidate because its a normal function and we have invoked that function with call
so the function will have the context that has been passed in the arguments of call. 
the context of greet cannot be changed using call,because call doesnt have any impact on arrow functions 

*/