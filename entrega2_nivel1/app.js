const Middlewares = require("./Middlewares");

class Maths {
  add({a, b}) {
    return a + b;
  }
  subtract({a, b}) {
    return a - b;
  }
  multiply({a, b}) {
    return a * b;
  }
}

const calculator = new Maths();

// Square function
const square = new Middlewares(calculator);

square.use((req, next) => {
  console.log('Square of', req)
  next();
});

square.use((req, next) => {
  req.a = req.a ** 2;
  console.log(req)
  next();
});

square.use((req, next) => {
  req.b = req.b ** 2
  console.log(req)
  next();
});


console.log(square.add({a: 5, b: 10}));
console.log(square.subtract({a: 10, b: 6}));
console.log(square.multiply({a: 2, b:3}));

// Cube function
const cube = new Middlewares(calculator);

cube.use((req, next) => {
  console.log('Cube of', req)
  next();
});

cube.use((req, next) => {
  req.a = req.a ** 3;
  console.log(req)
  next();
});

cube.use((req, next) => {
  req.b = req.b ** 2
  console.log(req)
  next();
});


console.log(cube.add({a: 5, b: 10}));
console.log(cube.subtract({a: 10, b: 6}));
console.log(cube.multiply({a: 2, b:3}));

// Divide function
const divide = new Middlewares(calculator);

divide.use((req, next) => {
  console.log('divide of', req)
  next();
});

divide.use((req, next) => {
  req.a = req.a / req.b
  console.log(req)
  next();
});

divide.use((req, next) => {
  req.b = req.b ** 2
  console.log(req)
  next();
});


console.log(divide.add({a: 5, b: 10}));
console.log(divide.subtract({a: 10, b: 6}));
console.log(divide.multiply({a: 2, b:3}));