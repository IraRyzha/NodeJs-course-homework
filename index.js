// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

function recursiveIteration(array, index = 0) {
  console.log(array);
  if (index < array.length) {
    if (Array.isArray(array[index])) {
      recursiveIteration(array[index]);
    } else {
      console.log(array[index]);
    }
    recursiveIteration(array, index + 1);
  }
}

const array = [3, [0, 2], 5, 16, [[8], 0], 7];
recursiveIteration(array);
