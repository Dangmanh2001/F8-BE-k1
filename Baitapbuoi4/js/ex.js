//Bai 1
var n = 10;
var numberSeri = [];
var fibonaci = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonaci(n - 1) + fibonaci(n - 2);
};

for (var i = 0; i < n; i++) {
  var a = fibonaci(i);
  numberSeri.push(a);
}
console.log(`Dãy số: ${numberSeri}`);

//Bai 2
var reverseNumber = function (n) {
  var a = "";
  var b = n.toString();
  for (var i = b.length - 1; i >= 0; i--) {
    a += b[i];
  }
  console.log(parseInt(a));
};
reverseNumber(51210);

//Bai 3

var a = [
  "Không",
  "Một",
  "Hai",
  "Ba",
  "Bốn",
  "Năm",
  "Sáu",
  "Bảy",
  "Tám",
  "Chín",
];

var number = function (n) {
  var sohangnghin = parseInt(n / 1000),
    sohangtram = parseInt((n / 100) % 10),
    sohangchuc = parseInt((n % 100) / 10),
    sohangdonvi = n % 10,
    str = n.toString();
  if (
    str.length === 4 &&
    a[sohangchuc] === "Không" &&
    a[sohangdonvi] != "Không" &&
    a[sohangtram] === "Không"
  ) {
    console.log(
      a[sohangnghin] +
        " Nghìn " +
        a[sohangtram] +
        " Trăm " +
        " Linh " +
        a[sohangdonvi]
    );
  } else if (
    str.length === 4 &&
    a[sohangchuc] === "Không" &&
    a[sohangdonvi] === "Không" &&
    a[sohangtram] === "Không"
  ) {
    console.log(a[sohangnghin] + " Nghìn ");
  } else if (
    str.length === 4 &&
    a[sohangchuc] === "Một" &&
    a[sohangdonvi] != "Không"
  ) {
    console.log(
      a[sohangnghin] +
        " Nghìn " +
        a[sohangtram] +
        " Trăm " +
        " Mười " +
        a[sohangdonvi]
    );
  } else if (
    str.length === 4 &&
    a[sohangchuc] === "Một" &&
    a[sohangdonvi] === "Không"
  ) {
    console.log(
      a[sohangnghin] + " Nghìn " + a[sohangtram] + " Trăm " + " Mười"
    );
  } else if (
    str.length === 4 &&
    a[sohangchuc] != "Không" &&
    a[sohangdonvi] === "Không"
  ) {
    console.log(
      a[sohangnghin] +
        " Nghìn " +
        a[sohangtram] +
        " Trăm " +
        a[sohangchuc] +
        " Mươi"
    );
  } else if (str.length === 4) {
    console.log(
      a[sohangnghin] +
        " Nghìn " +
        a[sohangtram] +
        " Trăm " +
        a[sohangchuc] +
        " " +
        a[sohangdonvi]
    );
  } else if (
    str.length === 3 &&
    a[sohangchuc] === "Một" &&
    a[sohangdonvi] != "Không"
  ) {
    console.log(a[sohangtram] + " Trăm " + " Mười " + a[sohangdonvi]);
  } else if (
    str.length === 3 &&
    a[sohangchuc] === "Không" &&
    a[sohangdonvi] != "Không"
  ) {
    console.log(a[sohangtram] + " Trăm" + "Linh " + a[sohangdonvi]);
  } else if (
    str.length === 3 &&
    a[sohangchuc] === "Không" &&
    a[sohangdonvi] === "Không"
  ) {
    console.log(a[sohangtram] + " Trăm");
  } else if (
    str.length === 3 &&
    a[sohangchuc] != "Một" &&
    a[sohangdonvi] === "Không"
  ) {
    console.log(a[sohangtram] + " Trăm " + a[sohangchuc] + " Mươi");
  } else if (
    str.length === 3 &&
    a[sohangchuc] === "Một" &&
    a[sohangdonvi] === "Không"
  ) {
    console.log(a[sohangtram] + " Trăm " + "Mười");
  } else if (str.length === 3) {
    console.log(
      a[sohangtram] + " Trăm " + a[sohangchuc] + " " + a[sohangdonvi]
    );
  } else if (
    str.length === 2 &&
    a[sohangchuc] != "Một" &&
    a[sohangdonvi] != "Không"
  ) {
    console.log(a[sohangchuc] + " " + a[sohangdonvi]);
  } else if (
    str.length === 2 &&
    a[sohangchuc] != "Một" &&
    a[sohangdonvi] === "Không"
  ) {
    console.log(a[sohangchuc] + " Mươi");
  } else if (
    str.length === 2 &&
    a[sohangchuc] === "Một" &&
    a[sohangdonvi] != "Không"
  ) {
    console.log("Mười " + a[sohangdonvi]);
  } else if (
    str.length === 2 &&
    a[sohangchuc] === "Một" &&
    a[sohangdonvi] === "Không"
  ) {
    console.log("Mười ");
  } else if (str.length === 1) {
    console.log(a[sohangdonvi]);
  }
};
number(321);
