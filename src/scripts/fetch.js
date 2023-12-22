/* Hard coding API Key. 
Learning how to not is not covered in Odin curriculum yet.
But I am using Weather API's free plan so it is okay.
*/

async function fetchCurrentWeather(location) {
  // Function to refactor the API responded JSON to usable object
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
    };
  }
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=e6f9f80a7ad94403a0d95411232112&q=${location}`,
      { mode: "cors" },
    );

    const weatherData = await response.json();

    const refactoredWeatherData = refactorWeatherData(weatherData);

    console.log(refactoredWeatherData);
  } catch (error) {
    console.log(error);
  }
}

fetchCurrentWeather("singapore");

export {};
