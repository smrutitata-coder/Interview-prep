Function.prototype.myBind = function(context){
    const fn = this
    return function(...args){
        return fn.call(context, args)
    }
}

const Person = {  
    greet: function(city){
        return `Hi, ${this.name}, Welcome to ${city}`
    }
}

const user={
    name: 'Vishal'
}

const boundGreet = Person.greet.myBind(user)
console.log(boundGreet('Bengaluru'))