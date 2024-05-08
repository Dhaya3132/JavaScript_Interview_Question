function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        else {
            return function (...args2) {
                return curried(...args, ...args2);
            }
        }
    }
}


const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'


//Currying - Is same like a highorder function but difference it takes an multiple arguments and transform into squence of function.