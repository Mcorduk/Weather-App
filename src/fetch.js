
// Hard coding API Key. Learning how to not do this is not covered yet, using free plan.



async function fetchCurrentWeather() {
  const promise = await fetch("https://api.weatherapi.com/v1/current.json?key=e6f9f80a7ad94403a0d95411232112&q=london", {mode: "cors"});
  const dataJSon = await promise.json();
  console.log(dataJSon);

  const city = dataJSon.location.name;
  console.log(city);

  const {country} = dataJSon.location;
  console.log(country);

  const condition = dataJSon.current.condition.text;
  console.log(condition);

  const tempC = dataJSon.current.temp_c;
  console.log(tempC);

  const tempF = dataJSon.current.temp_f;
  console.log(tempF);

  const {humidity} = dataJSon.current;
  console.log(humidity);

  const feelsLikeC = dataJSon.current.feelslike_c;
  console.log(feelsLikeC);

  const feelsLikeF = dataJSon.current.feelslike_f;
  console.log(feelsLikeF);

  const wind = dataJSon.current.wind_kph;
  console.log(wind);
  
}

fetchCurrentWeather();
// `https://api.weatherapi.com/v1/current.json?key=e6f9f80a7ad94403a0d95411232112&q=${city}`

export { fetchCurrentWeather };

