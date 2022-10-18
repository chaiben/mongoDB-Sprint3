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
const app = new Middlewares(calculator);

app.use((req, next) => {
  req.a = req.a ** 2;
  req.b = req.b ** 2;
  console.log('Calculate square', req)
  next();
});
app.use((req, next) => {
  req.a = req.a ** 3;
  req.b = req.b ** 3;
  console.log('Calculate cube', req)
  next();
});
app.use((req, next) => {
  req.a = req.a / 2;
  req.b = req.b / 2;
  console.log('Calculate a division', req)
  next();
});

console.log('Result of add: ' + app.add({a: 5, b: 10}));
console.log('Result of subtract: ' + app.subtract({a: 10, b: 6}));
console.log('Result of multiply: ' + app.multiply({a: 2, b:3}));

