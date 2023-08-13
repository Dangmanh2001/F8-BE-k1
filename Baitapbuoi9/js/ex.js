//Bai 1
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

var getCategories = function (categories, parentId = 0) {
  if (categories.length) {
    return categories.map(function (category) {
      if (category.parent === parentId) {
        delete category.parent;
        return category;
      }
      categories.forEach((element) => {
        if (category.parent === element.id) {
          if (element.children === undefined) {
            element.children = [];
          }
          delete category.parent;
          element.children.push(category);
        }
      });
    });
  }
};
var result = getCategories(categories).filter(function (e) {
  return e != undefined;
});
console.log(result);

//Bai 2
Array.prototype.reduce2 = function (callback, initialValue) {
  if (initialValue === undefined) {
    initialValue = this[0];
    if (initialValue) {
      for (var i = 0; i < this.length - 1; i++) {
        initialValue = callback(initialValue, this[i + 1], i + 1, this);
      }
    }
    return initialValue;
  } else {
    if (initialValue) {
      for (var i = 0; i < this.length; i++) {
        initialValue = callback(initialValue, this[i], i, this);
      }
    }
    return initialValue;
  }
};

var arr = [2, 5, 6, 4, 7];
var result = arr.reduce2(function (prev, current, a, b) {
  console.log(prev, current);
  return current;
}, 10);
console.log(result);

//Bai 4
var price = 120000;
Object.prototype.getCurrency = function (unit) {
  var a = this.toString().split("");
  console.log(a);

  for (var i = a.length - 1; i >= 0; i -= 3) {
    console.log(a[i]);
    if (i === a.length - 1) {
      continue;
    }
    a[i] += ",";
  }
  return a.join("") + unit;
};

console.log(price.getCurrency("d"));

//Bai 3
var a = [1, 2, 3, 4, 5];
Array.prototype.filter2 = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr[arr.length] = this[i];
    }
  }
  return arr;
};
var b = a.filter2(function (e, i, b) {
  console.log(i, b);
  return e > 3;
});
console.log(b);
