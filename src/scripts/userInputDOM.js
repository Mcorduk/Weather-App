import fetchCurrentWeather from "./fetch";
// DOM stuffs for Main HTML semantic tag where user input is

// User Input DOM
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  fetchCurrentWeather(input.value);
  input.value = "";
});

export {};
