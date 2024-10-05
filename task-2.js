const isNumberPalindrom = (num) => {
  let isPalindrom = true;
  const numEl = num.toString().split("");

  for (i = 0; i <= numEl.length / 2; i++) {
    if (numEl[i] === numEl[numEl.length - 1 - i]) {
      continue;
    } else {
      isPalindrom = false;
      break;
    }
  }

  return isPalindrom;
};

console.log(isNumberPalindrom(121));
console.log(isNumberPalindrom(-121));
console.log(isNumberPalindrom(3553));
console.log(isNumberPalindrom(987));
console.log(isNumberPalindrom(19));
