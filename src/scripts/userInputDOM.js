import { doc } from "prettier";
import fetchCurrentWeather from "./fetch";
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
const temp = document.getElementById("temperature-container");
const tempF = document.getElementById("temperatureF-container");
const feelsLike = document.getElementById("feels-like-container");
const feelsLikeF = document.getElementById("feels-likeF-container");
const checkbox = document.getElementById("toggle-temp");

checkbox.addEventListener("change", () => {
  temp.classList.toggle("hidden");
  feelsLike.classList.toggle("hidden");
  tempF.classList.toggle("hidden");
  feelsLikeF.classList.toggle("hidden");
});

export { };

