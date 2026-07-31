function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

function calculate(a, b, callback) {
  console.log(callback(a, b));
}

calculate(3, 4, add); // 7
calculate(3, 4, multiply); // 12

/* bai 2 */
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
counter(); // 5
counter(); // 6

/* bài 3 */

function repeatTimes(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}

repeatTimes(5, (index) => {
  console.log(`Lần thứ ${index}`);
});

/* bài 4 */
function createGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
}

const greetVi = createGreeter("Xin chào");
const greetEn = createGreeter("Hello");

greetVi("An"); // "Xin chào, An!"
greetEn("An"); // "Hello, An!"

