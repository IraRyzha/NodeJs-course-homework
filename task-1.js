const findArrayFromRange = (fromNum, toNum) => {
  const array = [];

  for (i = fromNum; i <= toNum; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      array.push(i);
    } else {
      continue;
    }
  }

  return array;
};

const result = findArrayFromRange(1, 25);

console.log(result);
