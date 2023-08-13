//Bài 1
var numbers = [7, 32, 6, 753, 5];
var max = 0,
  min = numbers[0];

for (i in numbers) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}
console.log(max);
console.log(min);
console.log(
  `Vị trí của số lớn nhất là vị trí thứ: ${numbers.indexOf(max) + 1}`
);
console.log(
  `Vị trí của số lớn nhất là vị trí thứ: ${numbers.indexOf(min) + 1}`
);

//Bài 2
var numbers = [8, 35, 7, 11, 5],
  totalPrime = 0;
var prime = function (n) {
  for (var i = 1; i <= n; i++) {
    if (n <= 1) {
      return false;
    } else if (n > 1) {
      for (var i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
    }
    return true;
  }
};

for (i in numbers) {
  if (prime(numbers[i]) === true) {
    totalPrime += numbers[i];
  }
}
if (totalPrime === 0) {
  console.log("Không có số nguyên tố trong mảng");
} else {
  console.log(totalPrime);
}

//Bài 3
var numbers = [2, 3, 5, 55, 6, 2, 3, 56, "i", "i", "abc", "abc"],
  newNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  if (newNumbers.indexOf(numbers[i]) === -1) {
    newNumbers.push(numbers[i]);
  }
}
console.log(newNumbers);

//Bài 4
var numbers = [5, 1, 9, 8, 10];
var element = 4;
var arrange = function () {
  var newNumbers = [];
  newNumbers = numbers.sort(function (a, b) {
    {
      return a - b;
    }
  });
  console.log(newNumbers);
};

arrange(numbers.unshift(element));
