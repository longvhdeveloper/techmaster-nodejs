/*var x = 100;
console.log("Gia tri cua x la " + x);
var a;
console.log("Gia tri cua a la " + a);
// Kiem tra 1 bien da ton tai hay chua
if (a === undefined) {
  console.log("a is undefined.");
} else {
  console.log("a is have value");
}

a = null;
console.log("a value is " + a * 12);

if (x === 100) {
  console.log("x is 100");
  var c = 222;
  let d = 333; // Pham vi cua d chi trong khoi lenh nay
}

// Pham vi cua c ra tan day !
console.log("c = " + c);
const PI = 3.14;*/

//////////////////////////////////////////////////////////////
/*let s = "Day la 1 string";
console.log(s);
// concat string
const PI = 3.14;
let message = "PI la " + PI;
console.log(message);
console.log('Day la phim "Chien tranh giua cac vi sao"');
console.log("C:\\Users\\vlong");
let stringMultiLine = "\
Hello \n\
How are you ?\n";
console.log(stringMultiLine);

let name = "Hoang";
let weight = 70;
console.log(`Hello ${name}, your weight is ${weight}`);
console.log(`Hello
How are you ?`);*/
//////////////////////////////////////////////////////////////
// Ham tra ve gia tri
/*function square(x) {
  return x * x;
}
console.log(`Binh phuong cua 8 la ${square(8)}`);

function area(width, height = width) {
  return width * height;
}
console.log(`Dien tich hinh chu nhat ${area(5, 3)}`);
console.log(`Dien tich hinh vuong ${area(5)}`);

function printParam(...ints) {
  console.log(ints.join("->"));
}

printParam(1, 2, 3, 4);
printParam(1, 2, 3, 4, 5, 6, 7, 8);

function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello("Hoang");

var sayGoodbye = function(name) {
  console.log(`Goodbye ${name}`);
};

sayGoodbye("Jackie");*/
//////////////////////////////////////////////////////////////
// Arrow function
// const addNumbers = function(a, b) {
//   console.log("Do someting");
//   return a + b;
// };

const addNumbers = (a, b) => a + b;
console.log(`Tong cua 2 so la ${addNumbers(2, 3)}`);

const sayHello = name => {
  console.log(`Hello ${name}`);
};
sayHello("Hoang");

// setInterval(() => {
//   console.log("Hello");
// }, 1000);

let a = [1, 2, 3, 4, 5];
let b = a.map(item => {
  return item * 2;
});

console.log(b);
