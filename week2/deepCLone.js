function deepClone(value, weakMap = new WeakMap()) {
  if(typeof value !== 'object' || value === null) return value

  if(weakMap.has(value)){
    return weakMap.get(value)
  }

  let copy = Array.isArray(value) ? [] : {}

  weakMap.set(value, copy)

  
  for(let key in value){
    if(value.hasOwnProperty(key)){
        copy[key] = deepClone(value[key], weakMap)
    }
  }

  return copy
 
}

const original = {
  a: 1,
  b: { c: 2 },
  d: [11, 7],
};
original.self = original; // Circular reference!

const copy = deepClone(original);
console.log(copy!== original); // true
console.log(copy.b!== original.b); // true
console.log(copy.self === copy); // true (circularity