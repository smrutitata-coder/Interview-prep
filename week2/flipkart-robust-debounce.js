function debounce(func, wait, immediate = false) {
  let timeout

  return function(...args){
    const callNow = immediate && !timeout

    clearTimeout(timeout)

    setTimeout(()=>{
        timeout = null
        func.apply(this, args)
    },timeout)

    if(callNow){
        func.apply(this,args)
    }
  }
}

// Usage in UI:
const onSearch = debounce((e) => console.log("Searching for:", e.target.value), 300);
// document.getElementById('search').addEventListener('input', onSearch);