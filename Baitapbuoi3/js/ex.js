//Bai 1
var n = 10,
  a = [],
  b = [];

for (var i = 0; i <= n; i++) {
  if (i % 2 === 0) {
    a.push(i);
  } else {
    b.push(i);
  }
}
console.log("Số chẵn:" + a);
console.log("Số chẵn:" + b);

//Bai 2
var n = 3;
var S = 0;
for (var i = 1; i <= n; i++) {
  S += i * (i + 1);
}
console.log(S);

//Bai 3
var a = 5,
  b = 9,
  totalEven = 0,
  totalOdd = 0;
if (a % 1 === 0 && b % 1 === 0) {
  if (a < b) {
    for (var i = a; i <= b; i++) {
      if (i % 2 === 0) {
        totalEven += i;
      } else {
        totalOdd += i;
      }
    }
  } else if (a > b) {
    for (var i = b; i <= a; i++) {
      if (i % 2 === 0) {
        totalEven += i;
      } else {
        totalOdd += i;
      }
    }
  } else {
    console.log("a phải khác b");
  }
} else {
  console.log("dữ liệu không hợp lệ");
}
console.log(totalEven, totalOdd);

//Bai 4
function prime(n) {
  if (n <= 1) {
    console.log(n + " không phải số nguyên tố");
  } else if (n > 1) {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return console.log(n + " không phải số nguyên tố");
      }
    }
    console.log(n + " là số nguyên tố");
  }
}
prime(2);

//Bai 5
var S = 0;

function total(n) {
  if (n <= 0) {
    return;
  }

  S += 1 / n;
  total(n - 1);
  return S;
}
console.log(total(6));
