//Bai 1

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var diff = arrA.reduce(function (prev, current) {
  if (arrB.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
console.log(diff);

//Bai 2

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var diff = arr.reduce(function (prev, current) {
  var str = "";
  if (Array.isArray(current) === false) {
    prev.push(current);
  }
  if (Array.isArray(current)) {
    str = String(current).split(",");
  }
  for (i in str) {
    prev.push(Number(str[i]));
  }
  return prev;
}, []);
console.log(diff);

//Bai 3

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
var newArr = [[], [], []];
var diff = arr.reduce(function (prev, current) {
  for (i in current) {
    if (current[i] === String(current[i])) {
      newArr[0].push(current[i]);
    } else if (current[i] === Number(current[i])) {
      newArr[1].push(current[i]);
    } else {
      newArr[2].push(current[i]);
    }
  }
  return newArr;
}, newArr);
console.log(diff);
