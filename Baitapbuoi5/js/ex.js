var content =
  "Proident quis dolore Lorem commodo id et. Consequat eu cupidatat minim nisi labore aliqua do ex.";
var keyword = content.split(" ");
var color = function (n) {
  if (n === keyword.length) {
    n = 0;
  }
  keyword[n] = "<span>" + keyword[n] + "</span>";
  if (n >= 1) {
    keyword[n - 1] = keyword[n - 1].replace(/<\/?[^>]+(>|$)/g, "");
  }
  if (n === 0) {
    keyword[keyword.length - 1] = keyword[keyword.length - 1].replace(
      /<\/?[^>]+(>|$)/g,
      ""
    );
  }

  document.getElementById("id").innerHTML = keyword.join(" ");
  console.log(keyword);
  setTimeout(() => {
    color(n + 1);
  }, 1000);
};
color(0);
