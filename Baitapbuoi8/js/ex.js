//Bai 1

var Nameprofile = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
};
const customers = [];
var createCustomers = function (n) {
  if (!Array.isArray(n)) {
    return "Không phải mảng";
  }
  n.push(new Nameprofile("Nguyễn Văn A", 11, "Hà Nội"));
  n.push(new Nameprofile("Nguyễn Văn B", 2, "Hải Phòng"));
  n.push(new Nameprofile("Nguyễn Văn C", 12, "TP.HCM"));
  for (i in n) {
    var arr = n[i]["name"].split(" ");
    var newArr = arr[0].concat(" " + arr[arr.length - 1]);

    customers[i].shortname = newArr;
  }

  customers.sort(function (a, b) {
    return a.age - b.age;
  });
  return n;
};
var result = createCustomers(customers);
console.log(result);

//Bai 2

var Acc = function (name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
};
var data = [],
  handleRegister = function (name, password, email) {
    if (name === undefined) {
      return console.log("Tên đăng nhập không được để trống");
    }
    if (password === undefined) {
      return console.log("Hãy nhập mật khẩu");
    }
    if (email === undefined) {
      return console.log("Hãy nhập email");
    }
    data.push(new Acc(name, password, email));
  };
handleRegister("manh", 2213, "abc@gmail.com");
handleRegister("manh1", 2214, "abc@gmail.com");
handleRegister(123, undefined, "123@fdsa");
console.log(data);

var handleLogin = function (email, password) {
  for (i in data) {
    if (data[i].email === email && data[i].password === password) {
      return console.log(data[i]);
    }
  }
  return console.log("Thông tin đăng nhập không chính xác");
};
handleLogin("abc@gmail.com", 2214);
