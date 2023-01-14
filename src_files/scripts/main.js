// Currency API script part begin
let coine = "USD";
let coineTwo = "RUB";
let json;

function showActualCourses(currencyPairsPrice = [{ from: "USD", to: "RUB" }]) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "34eb46cf27msh7166df608a6238cp161b5ejsn0f643a99bbf7",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  let requests = currencyPairsPrice.map((el) =>
    fetch(
      `https://currency-exchange.p.rapidapi.com/exchange?from=${el}&to=RUB&q=1.0`,
      options
    )
      .then((response) => {
        if (!response.ok) {
          console.log("response1", response);
          throw new Error("Fetch error");
        }
        console.log("response2", response);
        return response.json();
      })
      .then((response) => {
        el.course = response.toFixed(2);
        console.log("response3", response.json());
      })
  );
  return requests;
  Promise.all(requests)
    .then(() => {
      if (!showLeftRowInfo) {
        createCourses(currencyPairsPrice);
        console.log("CC", createCourses(currencyPairsPrice));
      } else {
        updateCourses(currencyPairsPrice);
        console.log("else CC", updateCourses(currencyPairsPrice));
      }
    })
    .catch((err) => {
      console.log(`${err}`);
    });
}

showActualCourses(currencyPairsPrice);
setInterval(() => {
  showActualCourses(currencyPairsPrice);
}, 900000);

// Currency API script part end
