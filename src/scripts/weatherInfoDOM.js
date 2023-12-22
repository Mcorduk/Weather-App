// DOM stuffs for Aside HTML semantic tag where weather info is presented
// Define an object to store references to DOM info elements
const weatherElements = {
  city: document.getElementById("city"),
  country: document.getElementById("country"),
  localDate: document.getElementById("local-date"),
  date: document.getElementById("date"),
  temperature: document.getElementById("temperature"),
  weatherIcon: document.getElementById("weather-icon"),
  condition: document.getElementById("condition"),
  feelsLike: document.getElementById("feels-like"),
  humidity: document.getElementById("humidity"),
  wind: document.getElementById("wind"),
};

function capitalizeFirstLetters(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

// Reusable function to set content to elements
const setElementContent = (element, content) => {
  element.innerHTML = content;
};

const renderWeatherLocation = ({ city, country }) => {
  setElementContent(weatherElements.city, city);
  setElementContent(weatherElements.country, country);
};

const renderLocalDate = ({localDate}) => {
  setElementContent(weatherElements.localDate,localDate);
};

// Fahrenheit values will be used in a future state
const renderTemps = ({ tempC, tempF, feelsLikeC, feelsLikeF }) => {
  setElementContent(weatherElements.temperature, tempC);
  setElementContent(weatherElements.feelsLike, feelsLikeC);
};

const renderWeatherCondition = ({ condition }) => {
  setElementContent(
    weatherElements.condition,
    capitalizeFirstLetters(condition),
  );
};

const renderWeatherDetails = ({ humidity, wind }) => {
  setElementContent(weatherElements.humidity, humidity);
  setElementContent(weatherElements.wind, wind);
};

const renderWeatherIcon = (refactoredWeatherData) => {
  weatherElements.weatherIcon.src = `./img/weather-icons/animated/${refactoredWeatherData.icon}.svg`;
};

function renderWeatherInfo(refactoredWeatherData) {
  // Location
  renderWeatherLocation(refactoredWeatherData);
  // Local Date
  renderLocalDate(refactoredWeatherData);
  // Temperatures and Feels Like in Celc and Fahrenheit
  renderTemps(refactoredWeatherData);
  // Weather Icon
  renderWeatherIcon(refactoredWeatherData);
  // Weather Condition
  renderWeatherCondition(refactoredWeatherData);
  // Weather Details
  renderWeatherDetails(refactoredWeatherData);
}

export default renderWeatherInfo;
