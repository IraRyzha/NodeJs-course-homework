const value = 5;

const double = (value) => {
  return new Promise((resolve) => resolve(value * 2));
};

const addTen = (value) => {
  return new Promise((resolve) => resolve(value + 10));
};

double(value)
  .then((result) => addTen(result))
  .then((result) => {
    console.log(result);
  });
