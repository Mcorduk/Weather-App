import fetchCurrentWeather from "./fetch";
import { renderTempsFahrenheit } from "./weatherInfoDOM";
// DOM stuffs for Main HTML semantic tag where user input is

// User Input Search Box Listeners
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", (event) => {
  // Prevent the default submit event
  event.preventDefault();
  fetchCurrentWeather(input.value);
  // Clear the input value
  input.value = "";
});
// User Toggle Celcius / Fahrenheit Listeners
const checkbox = document.getElementById("toggle-temp");

checkbox.addEventListener("change", () => {
  renderTempsFahrenheit();
});

export {};
