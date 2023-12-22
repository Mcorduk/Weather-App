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

// Get Current Date info in following example format: 12/21/2023, 3:55:03 PM
function getCurrentDateTime() {
  // Define options for the Intl.DateTimeFormat
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  // Create a new DateTimeFormat object with the specified options
  const formatter = new Intl.DateTimeFormat("en-US", options);
  // Format the current date and time using the formatter
  const formattedDate = formatter.format(new Date());
  // Return the formatted date and time

  return formattedDate;
}

const renderWeatherLocation = () => {
  weatherElements.city.innerHTML = refactoredWeatherData.city;
  weatherElements.country.innerHTML = refactoredWeatherData.country;
};

const renderDate = () => {
  const currentDateTime = getCurrentDateTime();
  weatherElements.date.innerHTML = currentDateTime;
};

const renderTemps = () => {
  const tempCelcius = refactoredWeatherData.tempC;
  const tempFahrenheit = refactoredWeatherData.tempF;
  const feelsLikeCelcius = refactoredWeatherData.feelsLikeC;
  const feelsLikeFahrenheit = refactoredWeatherData.feelsLikeF;

  weatherElements.temperature.innerHTML = tempCelcius;
  weatherElements.feelsLike.innerHTML = feelsLikeCelcius;
};

const renderWeatherDetails = () => {
  weatherElements.humidity.innerHTML = refactoredWeatherData.humidity;
  weatherElements.wind.innerHTML = refactoredWeatherData.wind;
};

function renderWeatherInfo(refactoredWeatherData) {
  // Location
  renderWeatherLocation();
  // Date
  renderDate();
  // Temperatures and Feels Like in Celc and Fahrenheit
  renderTemps();
  // Weather Details
  renderWeatherDetails();
  // Weather Icon
}

export default renderWeatherInfo;
