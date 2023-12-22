// Hard coding API Key. Learning how to not do this is not covered yet, using free plan.
const city = document.getElementById("city").innerHTML;
const date = document.getElementById("city").innerHTML;

async function fetchCurrentWeather(location) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=e6f9f80a7ad94403a0d95411232112&q=${location}`,
    { mode: "cors" },
  );
  const dataJSon = await promise.json();
  console.log(dataJSon);

  const city = dataJSon.location.name;

  const { country } = dataJSon.location;

  const condition = dataJSon.current.condition.text;

  const tempC = dataJSon.current.temp_c;

  const tempF = dataJSon.current.temp_f;

  const { humidity } = dataJSon.current;

  const feelsLikeC = dataJSon.current.feelslike_c;

  const feelsLikeF = dataJSon.current.feelslike_f;

  const wind = dataJSon.current.wind_kph;
}

// `https://api.weatherapi.com/v1/current.json?key=e6f9f80a7ad94403a0d95411232112&q=${city}`

const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  fetchCurrentWeather(input.value);
});

export { };

