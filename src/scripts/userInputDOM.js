import fetchCurrentWeather from "./fetch";
// DOM stuffs for Main HTML semantic tag where user input is

// User Input DOM
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", (event) => {
  // Prevent the default submit event
  event.preventDefault();
  fetchCurrentWeather(input.value);
  // Clear the input value
  input.value = "";
});

export {};
