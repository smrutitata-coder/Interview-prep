const state = {
  user: { id: 101, details: { city: 'Bangalore' } },
  theme: 'dark'
};

const newState = {...state };
newState.user.details.city = 'Chennai';

console.log(state.user.details.city); 
// Expected output? Why did it change?

/*Solution:

newState is a shallow copy of state. shallow copy creates a new reference for properites at the global level only.
it uses the same reference as the parent for nested properties. newState.user.details.city = 'Chennai'; 
this will change the value at the reference of the parent as well.
so console.log(state.user.details.city);  will print Chennai.

To change the city value to Chennai, we need to use either StructuredClone or DeepClone.

*/