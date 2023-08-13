//Bai 1
var km = 200,
  total;

if (km <= 1 && km > 0) {
  total = km * 15000;
} else if (km <= 5 && km > 1) {
  total = km * 13500;
} else if (km > 5 && km < 120) {
  total = km * 11000;
} else if (km > 120) {
  total = km * 11000 - km * 11000 * (1 / 10);
} else {
  console.log("Số km phải là sô dương");
}
console.log(total);

//Bai 2
var kWh = 2.3,
  distance,
  bac1,
  bac2,
  bac3,
  bac4,
  bac5,
  bac6;

if (Number.parseFloat(kWh)) {
  if (kWh > 0 && kWh <= 50) {
    console.log((bac1 = kWh * 1678));
  } else if (kWh > 50 && kWh <= 100) {
    distance = kWh - 50;
    bac2 = distance * 1734 + 50 * 1678;
    console.log(bac2);
  } else if (kWh > 100 && kWh <= 200) {
    distance = kWh - 100;
    bac3 = distance * 2014 + 50 * 1678 + 50 * 1734;
    console.log(bac3);
  } else if (kWh > 200 && kWh <= 300) {
    distance = kWh - 200;
    bac4 = distance * 2536 + 50 * 1678 + 50 * 1734 + 100 * 2014;
    console.log(bac4);
  } else if (kWh > 300 && kWh <= 400) {
    distance = kWh - 300;
    bac5 = distance * 2834 + 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536;
    console.log(bac5);
  } else if (kWh > 400) {
    distance = kWh - 400;
    bac6 =
      distance * 2927 +
      50 * 1678 +
      50 * 1734 +
      100 * 2014 +
      100 * 2536 +
      100 * 2834;
    console.log(bac6);
  } else {
    console.log("Số điện phải là số dương");
  }
} else {
  console.log("Dữ liệu không hợp lệ");
}

//Bai 3
var x = 6,
  giaithua = 1;
if (x >= 0 && x <= 1 && x % 1 === 0) {
  console.log(giaithua);
} else if (x > 1 && x % 1 === 0) {
  for (var i = 1; i <= x; i++) {
    giaithua = giaithua * i;
  }
  console.log(giaithua);
} else {
  console.log("Dữ liệu không hợp lệ");
}

//Bai 4
var b = 5;
a = [];
if (b > 0 && b % 1 == 0) {
  for (i = 1; i <= b; i++) {
    if (b % i === 0) {
      a.push(i);
    }
  }
  if (a.length == 2) {
    console.log(b + " là số nguyên tố");
  } else {
    console.log(b + " không phải số nguyên tố");
  }
} else {
  console.log("Dữ liệu phải là số nguyên dương");
}
