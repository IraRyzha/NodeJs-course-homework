const findArrayFromRange = (fromNum, toNum) => {
  const array = [];

  for (let i = fromNum; i <= toNum; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      array.push(i);
    }
  }

  return array;
};

const result = findArrayFromRange(1, 25);

console.log(result);
