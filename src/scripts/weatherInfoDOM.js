// DOM stuffs for Aside HTML semantic tag where weather info is presented
// Define an object to store references to DOM info elements
const weatherElements = {
  city: document.getElementById("city"),
  country: document.getElementById("country"),
  date: document.getElementById("date"),
  temperature: document.getElementById("temperature"),
  weatherIcon: document.getElementById("weather-icon"),
  condition: document.getElementById("condition"),
  feelsLike: document.getElementById("feels-like"),
  humidity: document.getElementById("humidity"),
  wind: document.getElementById("wind"),
};

function getCurrentDateTime() {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(new Date());

  return formattedDate;
}

function renderWeatherInfo(refactoredWeatherData) {
  // Location
  weatherElements.city.innerHTML = refactoredWeatherData.city;
  weatherElements.country.innerHTML = refactoredWeatherData.country;
  // Date
  const currentDateTime = getCurrentDateTime();
  weatherElements.date.innerHTML = currentDateTime;

  // Temperatures and Feels Like in Celc and Fahrenheit
  const tempCelcius = refactoredWeatherData.tempC;
  const tempFahrenheit = refactoredWeatherData.tempF;
  const feelsLikeCelcius = refactoredWeatherData.feelsLikeC;
  const feelsLikeFahrenheit = refactoredWeatherData.feelsLikeF;

  weatherElements.temperature.innerHTML = tempCelcius;
  weatherElements.feelsLike.innerHTML = feelsLikeCelcius;
  // Weather Details
  weatherElements.humidity.innerHTML = refactoredWeatherData.humidity;
  weatherElements.wind.innerHTML = refactoredWeatherData.wind;
}

export default renderWeatherInfo;
