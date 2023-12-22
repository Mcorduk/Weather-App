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

// Reusable function to set content to elements
const setElementContent = (element, content) => {
  element.innerHTML = content;
};

const renderWeatherLocation = ({city, country}) => {
  setElementContent(weatherElements.city, city);
  setElementContent(weatherElements.country, country);
};

const renderDate = () => {
  const currentDateTime = getCurrentDateTime();
  setElementContent(weatherElements.date,currentDateTime);
};

// Fahrenheit values will be used in a future state
const renderTemps = ({tempC, tempF, feelsLikeC, feelsLikeF}) => {

  setElementContent(weatherElements.temperature, tempC);
  setElementContent(weatherElements.feelsLike, feelsLikeC);
};

const renderWeatherDetails = ({humidity, wind}) => {
  setElementContent(weatherElements.humidity, humidity);
  setElementContent(weatherElements.wind, wind);
};

const renderWeatherIcon = (refactoredWeatherData) => {
  weatherElements.weatherIcon.src = `./weather-icons/animated/${refactoredWeatherData.icon}.svg`;
}; 

function renderWeatherInfo(refactoredWeatherData) {
  // Location
  renderWeatherLocation(refactoredWeatherData);
  // Date
  renderDate();
  // Temperatures and Feels Like in Celc and Fahrenheit
  renderTemps(refactoredWeatherData);
  // Weather Details
  renderWeatherDetails(refactoredWeatherData);
  // Weather Icon
  renderWeatherIcon(refactoredWeatherData);
}

export default renderWeatherInfo;
