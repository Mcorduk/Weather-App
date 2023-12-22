/* Hard coding API Key. 
Learning how to not is not covered in Odin curriculum yet.
But I am using Weather API's free plan so it is okay.
*/

function extractWeatherIcon(iconUrl){
  const inputString = iconUrl;
  // Example URL response "//cdn.weatherapi.com/weather/64x64/day/116.png"
  // Need the icon code: 116, regex looks for 3 digits before .png and gives the code
  // The icon code matches icon names in ../../dist/img/weather-icons/animated
  const regex = /\/(\d{3})\.png/;

  const match = inputString.match(regex);

  if (match) {
    // Get second index of the match method because we need the group (\d{3})
    const weatherIconCode = match[1];
    return weatherIconCode;
  } 
    console.log("No regex match found for weather icon code");
    return 1;
  
}

function refactorWeatherData(weatherData) {
  const city = weatherData.location.name;

  const { country } = weatherData.location;

  const condition = weatherData.current.condition.text;

  const tempC = weatherData.current.temp_c;

  const tempF = weatherData.current.temp_f;

  const { humidity } = weatherData.current;

  const feelsLikeC = weatherData.current.feelslike_c;

  const feelsLikeF = weatherData.current.feelslike_f;

  const wind = weatherData.current.wind_kph;
  // Pass icon url to regex function to get icon code from the API 
  const icon = extractWeatherIcon(weatherData.current.condition.icon);

  return {
    city,
    country,
    condition,
    tempC,
    tempF,
    humidity,
    feelsLikeC,
    feelsLikeF,
    wind,
    icon
  };
}

async function fetchCurrentWeather(location) {
  // Function to refactor the API responded JSON to usable object

  try {
    // Fetch the response for current day's weather data from Weather API
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=e6f9f80a7ad94403a0d95411232112&q=${location}`,
      { mode: "cors" },
    );
    // Turn data into JSON
    const weatherData = await response.json();
    console.log(weatherData);
    // Refactor the data into a more readable object with needed data only.
    const refactoredWeatherData = refactorWeatherData(weatherData);

    console.log(refactoredWeatherData);
  } catch (error) {
    console.log(error);
  }
}

fetchCurrentWeather("singapore");

export default fetchCurrentWeather;
