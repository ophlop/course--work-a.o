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

let oldSpan = [];

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
        oldSpan.push(`${data.toFixed(2)}`);
        console.log(oldSpan);
        span2.innerHTML = `${data.toFixed(2)}`;
      })}`;
    renderDIVChild.appendChild(span1);
    renderDIVChild.appendChild(span2);
    renderDIVParent.appendChild(renderDIVChild);
  }
  return oldSpan;
}
firstValue(oldSpan);

console.log(oldSpan);
console.log(oldSpan.length);

function newCourses() {
  let newCourses = [];
  for (let i = 0; i < currencyPairsPrice.length; i++) {
    fetch(
      `https://currency-exchange.p.rapidapi.com/exchange?from=${currencyPairsPrice[i]}&to=${coineTwo}&q=1.0`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        newCourses.push(`${data.toFixed(2)}`);
      });
  }
  return newCourses;
}

let updateSpan = newCourses();
console.log(updateSpan);
console.log(updateSpan.length);

function cicleUpdateCourse(oldSpan, updateSpan) {
  for (let i = 0; i < currencyPairsPrice.length; i++) {
    if (oldSpan[i] !== updateSpan[i]) {
      let newValue = document.querySelector(`.currencyCell${i}`);
      newValue.innerHTML = updateSpan[i];
    }
  }
}

setInterval(newCourses(), 5000);

setInterval(cicleUpdateCourse(), 5000);
