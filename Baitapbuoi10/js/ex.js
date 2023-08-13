//Bai 1

var getSum = function (...number) {
  var total = 0;
  for (var i = 0; i < number.length; i++) {
    if (typeof number[i] !== " number" && isNaN(number[i])) {
      throw new Error("Lỗi");
    } else {
      total += Number(number[i]);
    }
  }

  return total;
};

console.log(getSum(1, 2, 3, "1.2"));

//Bai 2

var openFile = function () {
  var myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      var data = "File đã được mở";
      resolve(data);
    }, 1000);
  });
  return myPromise;
};
var readFile = function () {
  var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      var data = "F8 - Học lập trình để đi làm";
      resolve(data);
      reject("Lỗi");
    }, 1000);
  });
  return myPromise;
};
var closeFile = function () {
  setTimeout(function () {
    console.log("File đã đóng");
  }, 1000);
};
openFile()
  .then(function (response) {
    console.log(response);
    return readFile();
  })
  .then(function (response) {
    console.log(response);
    return closeFile();
  })
  .catch(function (err) {
    console.log(err);
  });
