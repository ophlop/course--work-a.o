// Currency API script part
let coine = "USD";
let coineTwo = "RUB";
let json;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "34eb46cf27msh7166df608a6238cp161b5ejsn0f643a99bbf7",
    "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
  },
};
let currencyPairsPrice = ["USD", "EUR", "CNY", "CHF", "JPY", "TRY"];

let renderDIVParent = document.querySelector(".left-row__course-info");

function firstValue() {
  for (let i = 0; i < currencyPairsPrice.length; i++) {
    let renderDIVChild = document.createElement("div");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    renderDIVChild.classList.add("left-row__course-card");
    span1.classList.add("course-card__currencies");
    span2.classList.add("course-card__price-course");
    span2.classList.add(`currencyCell${i}`);
    span1.innerHTML = `${currencyPairsPrice[i]}:`;
    span2.innerHTML = `${fetch(
      `https://currency-exchange.p.rapidapi.com/exchange?from=${currencyPairsPrice[i]}&to=${coineTwo}&q=1.0`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        span2.innerHTML = `${data.toFixed(2)}`;
      })}`;
    renderDIVChild.appendChild(span1);
    renderDIVChild.appendChild(span2);
    renderDIVParent.appendChild(renderDIVChild);
  }
}

window.addEventListener("load", (event) => {
  firstValue();
});

setTimeout(
  setInterval(function repeatCurrency() {
    for (let j = 0; j < 6; j++) {
      let removeElements = document.querySelector(".left-row__course-card");
      removeElements.remove();
    }
    firstValue();
  }, 15000),
  15000
);

// News-Slider API script part

// this option to take info
let API_KEY = `46bf7938af1a4d51a5d7f2e990d61c41`;
const date = new Date();

let dateToday = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

let url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&category=business&" +
  `from=${dateToday}&` +
  "sortBy=popularity&" +
  `apiKey=${API_KEY}`;

let req = fetch(url).then((response) => response.json());

// part two - render information
let news = [];

function lengthStr(str) { 
  if(!str && str !== null) {
  let newArr = str.split("");
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (i != 120) {
      result.push(newArr[i]);
    } else {
      break;
    }
  }
  return `${result.join("")}...`;
} else {
  return str
}
}

function showActualNews(req) {
  req
    .then((data) => (news = data.articles))
    .then(() => {
      let renderDIVParent = document.querySelector(".swiper-wrapper");
      let requests = news.map((el) => {
        if (!el.urlToImage) el.urlToImage = "./src_files/img/imgUrlBroken.png";
        return new Promise(function (resolve) {
          let img = new Image();
          img.onerror = img.onabort = function () {
            el.urlToImage = "./src_files/img/imgUrlBroken.png";
            resolve("error");
          };
          img.onload = function () {
            resolve("success");
          };
          img.src = el.urlToImage;
        });
      });
      Promise.all(requests).then(() => {
        for (let i = 0; i < 25; i++) {
          let renderDIVChild = document.createElement("div");
          let h3 = document.createElement("h3");
          let p = document.createElement("p");
          let img = document.createElement("img");
          let a = document.createElement("a");
          // inside options
          renderDIVChild.classList.add("swiper-slide");
          // img settings
          img.classList.add("news-img");
          img.src = `${news[i].urlToImage}`;
          img.alt = "news-image";
          // h3 settings
          h3.classList.add("news-title");
          h3.innerHTML = `${
            news[i].title ? news[i].title : "Title not avaliable"
          }`;
          // a settings
          a.classList.add("news-url");
          a.target = "_blank";
          a.href = `${news[i].url}`;
          // p settings
          p.classList.add("news-text");
          p.innerHTML = `${lengthStr(news[i].description)}`;
          // render
          a.append(p);
          renderDIVChild.append(img, h3, a);
          renderDIVParent.append(renderDIVChild);
        }
      });
    });
}

showActualNews(req)