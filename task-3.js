function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Пройшло ${ms / 1000} секунди`);
    }, ms);
  });
}

// Виклик функції
delay(7000).then((value) => console.log(value));
delay(2000).then((value) => console.log(value));
delay(5000).then((value) => console.log(value));
