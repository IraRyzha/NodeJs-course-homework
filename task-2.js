const isNumberPalindrome = (num) => {
  let isPalindrom = true;
  const numEl = num.toString().split("");

  for (let i = 0; i <= numEl.length / 2; i++) {
    if (!(numEl[i] === numEl[numEl.length - 1 - i])) {
      isPalindrom = false;
    }
  }

  return isPalindrom;
};

console.log(isNumberPalindrome(121));
console.log(isNumberPalindrome(-121));
console.log(isNumberPalindrome(3553));
console.log(isNumberPalindrome(987));
console.log(isNumberPalindrome(19));
