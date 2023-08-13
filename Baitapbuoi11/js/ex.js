//Bai1

const serverUrl = `https://api.shrtco.de/v2/`;

var shortUrl = async function (url) {
  var resp = await fetch(serverUrl + "shorten?url=" + url);
  if (resp.ok) {
    var data = await resp.json();
    console.log(`Link rút gọn :${data.result.short_link}`);
  } else {
    throw new Error("Lỗi");
  }
};
shortUrl("https://www.youtube.com/");
