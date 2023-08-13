//Bai 1
var a = 20,
  b = 10;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

// Bai 2
var S;
S = (10 + 20 + 5) ^ (10 / 2);
console.log(S);

// Bai 3
var a = 50,
  b = 2,
  c = 30;
if (a > b && a > c) {
  console.log("Số lớn nhất là" + a);
}
if (b > a && b > c) {
  console.log("Số lớn nhất là" + b);
}
if (c > b && c > a) {
  console.log("Số lớn nhất là" + a);
}

// Bai 4
var a = 9,
  b = -5;
if (a * b > 0) {
  console.log("a và b cùng dấu");
} else if (a * b < 0) {
  console.log("a và b trái dấu");
} else if (a * b == 0) {
  console.log("a và b khác dấu");
}
// Bai 5
var a = 52,
  b = 65,
  c = 6;

if (a > b) {
  a = b + ((b = a), 0);
}
if (a > c) {
  a = c + ((c = a), 0);
}
if (b > c) {
  b = c + ((c = b), 0);
}
console.log(a, b, c);

if (a > b) {
  a = b + ((b = a), 0);
}
if (a > c) {
  a = c + ((c = a), 0);
}
if (b > c) {
  b = c + ((c = b), 0);
}
console.log(a, b, c);
