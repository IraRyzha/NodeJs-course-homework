// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const generator1 = generator();

// console.log(generator1.next().value);
// console.log(generator1.next().value);
// console.log(generator1.next().value);

function createGenerator() {
  let count = 0;

  return function* () {
    if (count < 3) {
      count++;
      yield count;
    } else {
      return;
    }
  };
}

const generator2 = createGenerator();

console.log(generator2().next().value); // 1

console.log(generator2().next().value); // 2

console.log(generator2().next().value); // 3

console.log(generator2().next().value); // undefined

// aditional task

function sum(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}

function add(a, b, c, d) {
  return a + b + c + d;
}

const curriedSum = sum(add);

console.log(curriedSum(1)(2)(3)(4)); // 10

// or

function sum2(a) {
  let currentSum = a;

  function innerSum(b) {
    currentSum += b;
    return innerSum;
  }

  innerSum.valueOf = function () {
    return currentSum;
  };

  return innerSum;
}

const a = sum2(1)(2)(3)(4).valueOf();

console.log(a); // 10
