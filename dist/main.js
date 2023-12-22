/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/fetch.js":
/*!******************************!*\
  !*** ./src/scripts/fetch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderImg */ \"./src/scripts/renderImg.js\");\n/* harmony import */ var _weatherInfoDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherInfoDOM */ \"./src/scripts/weatherInfoDOM.js\");\n\n\n/* Hard coding API Key. \nLearning how to not is not covered in Odin curriculum yet.\nBut I am using Weather API's free plan so it is okay.\n*/\n\nfunction extractWeatherIcon(iconUrl) {\n  const inputString = iconUrl;\n  // Example URL response \"//cdn.weatherapi.com/weather/64x64/day/116.png\"\n  // Need the icon code: 116, regex looks for 3 digits before .png and gives the code\n  // The icon code matches icon names in ../../dist/img/weather-icons/animated\n  const regex = /\\/(\\d{3})\\.png/;\n  const match = inputString.match(regex);\n  if (match) {\n    // Get second index of the match method because we need the group (\\d{3})\n    const weatherIconCode = match[1];\n    return weatherIconCode;\n  }\n  console.log(\"No regex match found for weather icon code\");\n  return 1;\n}\n\n// Create and return an object for only the values that I need from weather json\nfunction refactorWeatherData(weatherData) {\n  const refactoredWeatherData = {\n    city: weatherData.location.name,\n    country: weatherData.location.country,\n    localDate: weatherData.location.localtime,\n    tempC: weatherData.current.temp_c,\n    tempF: weatherData.current.temp_f,\n    condition: weatherData.current.condition.text,\n    feelsLikeC: weatherData.current.feelslike_c,\n    feelsLikeF: weatherData.current.feelslike_f,\n    humidity: weatherData.current.humidity,\n    wind: weatherData.current.wind_kph,\n    icon: extractWeatherIcon(weatherData.current.condition.icon)\n  };\n  return refactoredWeatherData;\n}\nasync function fetchCurrentWeather(location) {\n  // Function to refactor the API responded JSON to usable object\n\n  try {\n    // Fetch the response for current day's weather data from Weather API\n    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e6f9f80a7ad94403a0d95411232112&q=${location}`, {\n      mode: \"cors\"\n    });\n    // Turn data into JSON\n    const weatherData = await response.json();\n    console.log(weatherData);\n    // Refactor the data into a more readable object with needed data only.\n    const refactoredWeatherData = refactorWeatherData(weatherData);\n    console.log(refactoredWeatherData);\n    // Using render function from weatherInfoDOM module\n    (0,_weatherInfoDOM__WEBPACK_IMPORTED_MODULE_1__.renderWeatherInfo)(refactoredWeatherData);\n    // Render the background depending on weather condition\n    console.log(refactoredWeatherData.icon);\n    (0,_renderImg__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(refactoredWeatherData.icon);\n  } catch (error) {\n    console.log(error);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchCurrentWeather);\n\n//# sourceURL=webpack://webpack-template-repo/./src/scripts/fetch.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ \"./src/scripts/fetch.js\");\n/* harmony import */ var _renderImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderImg */ \"./src/scripts/renderImg.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ \"./src/scripts/theme.js\");\n/* harmony import */ var _userInputDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userInputDOM */ \"./src/scripts/userInputDOM.js\");\n/* harmony import */ var _weatherInfoDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weatherInfoDOM */ \"./src/scripts/weatherInfoDOM.js\");\n\n\n\n\n\n\n// Default city for the initial load\n(0,_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"singapore\");\n\n//# sourceURL=webpack://webpack-template-repo/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/renderImg.js":
/*!**********************************!*\
  !*** ./src/scripts/renderImg.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Match API data with desired icons and background module\n\nconst iconBgMap = {\n  113: \"sunny\",\n  116: \"partly-cloudy\",\n  119: \"cloudy\",\n  122: \"cloudy\",\n  143: \"foggy\",\n  176: \"rainy\",\n  179: \"snowy\",\n  182: \"rainy\",\n  185: \"rainy\",\n  200: \"thunder\",\n  227: \"snowy\",\n  230: \"snowy\",\n  248: \"foggy\",\n  260: \"foggy\",\n  263: \"rainy\",\n  266: \"rainy\",\n  281: \"rainy\",\n  284: \"rainy\",\n  293: \"rainy\",\n  296: \"rainy\",\n  299: \"rainy\",\n  302: \"rainy\",\n  305: \"rainy\",\n  308: \"rainy\",\n  311: \"rainy\",\n  314: \"rainy\",\n  317: \"rainy\",\n  320: \"rainy\",\n  323: \"snowy\",\n  326: \"snowy\",\n  329: \"snowy\",\n  332: \"snowy\",\n  335: \"snowy\",\n  338: \"snowy\",\n  350: \"snowy\",\n  353: \"rainy\",\n  356: \"rainy\",\n  359: \"rainy\",\n  362: \"rainy\",\n  365: \"rainy\",\n  368: \"snowy\",\n  371: \"snowy\",\n  374: \"snowy\",\n  377: \"snowy\",\n  386: \"thunder\",\n  389: \"thunder\",\n  392: \"snowy\",\n  395: \"snowy\"\n};\nconst changeBackground = background => {\n  const body = document.querySelector(\"body\");\n  body.style.backgroundImage = `url('./img/backgrounds/${background}.jpg')`;\n};\nconst renderBackground = icon => {\n  changeBackground(iconBgMap.icon);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBackground);\n\n//# sourceURL=webpack://webpack-template-repo/./src/scripts/renderImg.js?");

/***/ }),

/***/ "./src/scripts/theme.js":
/*!******************************!*\
  !*** ./src/scripts/theme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// Dark - Light Theme Toggle Module\n\n\n\n//# sourceURL=webpack://webpack-template-repo/./src/scripts/theme.js?");

/***/ }),

/***/ "./src/scripts/userInputDOM.js":
/*!*************************************!*\
  !*** ./src/scripts/userInputDOM.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ \"./src/scripts/fetch.js\");\n/* harmony import */ var _weatherInfoDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherInfoDOM */ \"./src/scripts/weatherInfoDOM.js\");\n\n\n// DOM stuffs for Main HTML semantic tag where user input is\n\n// User Input Search Box Listeners\nconst button = document.querySelector(\"button\");\nconst input = document.querySelector(\"input\");\nbutton.addEventListener(\"click\", event => {\n  // Prevent the default submit event\n  event.preventDefault();\n  (0,_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input.value);\n  // Clear the input value\n  input.value = \"\";\n});\n// User Toggle Celcius / Fahrenheit Listeners\nconst checkbox = document.getElementById(\"toggle-temp\");\ncheckbox.addEventListener(\"change\", () => {\n  (0,_weatherInfoDOM__WEBPACK_IMPORTED_MODULE_1__.renderTempsFahrenheit)();\n});\n\n\n//# sourceURL=webpack://webpack-template-repo/./src/scripts/userInputDOM.js?");

/***/ }),

/***/ "./src/scripts/weatherInfoDOM.js":
/*!***************************************!*\
  !*** ./src/scripts/weatherInfoDOM.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTempsFahrenheit: () => (/* binding */ renderTempsFahrenheit),\n/* harmony export */   renderWeatherInfo: () => (/* binding */ renderWeatherInfo)\n/* harmony export */ });\n// DOM stuffs for Aside HTML semantic tag where weather info is presented\n// Define an object to store references to DOM info elements\nconst weatherElements = {\n  city: document.getElementById(\"city\"),\n  country: document.getElementById(\"country\"),\n  localDate: document.getElementById(\"local-date\"),\n  date: document.getElementById(\"date\"),\n  temperature: document.getElementById(\"temperature\"),\n  weatherIcon: document.getElementById(\"weather-icon\"),\n  condition: document.getElementById(\"condition\"),\n  feelsLike: document.getElementById(\"feels-like\"),\n  humidity: document.getElementById(\"humidity\"),\n  wind: document.getElementById(\"wind\")\n};\nfunction capitalizeFirstLetters(str) {\n  return str.replace(/\\b\\w/g, match => match.toUpperCase());\n}\n\n// Reusable function to set content to elements\nconst setElementContent = (element, content) => {\n  element.innerHTML = content;\n};\nconst renderWeatherLocation = _ref => {\n  let {\n    city,\n    country\n  } = _ref;\n  setElementContent(weatherElements.city, city);\n  if (country === \"USA United States of America\") {\n    setElementContent(weatherElements.country, \"USA\");\n  } else {\n    setElementContent(weatherElements.country, country);\n  }\n};\nconst renderLocalDate = _ref2 => {\n  let {\n    localDate\n  } = _ref2;\n  setElementContent(weatherElements.localDate, localDate);\n};\n\n// Fahrenheit values will be used in a future state\nconst renderTempsCelcius = _ref3 => {\n  let {\n    tempC,\n    feelsLikeC\n  } = _ref3;\n  setElementContent(weatherElements.temperature, tempC);\n  setElementContent(weatherElements.feelsLike, feelsLikeC);\n};\nconst renderTempsFahrenheit = _ref4 => {\n  let {\n    tempF,\n    feelsLikeF\n  } = _ref4;\n  setElementContent(weatherElements.temperature, tempF);\n  setElementContent(weatherElements.feelsLike, feelsLikeF);\n};\nconst renderWeatherCondition = _ref5 => {\n  let {\n    condition\n  } = _ref5;\n  setElementContent(weatherElements.condition, capitalizeFirstLetters(condition));\n};\nconst renderWeatherDetails = _ref6 => {\n  let {\n    humidity,\n    wind\n  } = _ref6;\n  setElementContent(weatherElements.humidity, humidity);\n  setElementContent(weatherElements.wind, wind);\n};\nconst renderWeatherIcon = refactoredWeatherData => {\n  weatherElements.weatherIcon.src = `./img/weather-icons/animated/${refactoredWeatherData.icon}.svg`;\n};\nfunction renderWeatherInfo(refactoredWeatherData) {\n  // Location\n  renderWeatherLocation(refactoredWeatherData);\n  // Local Date\n  renderLocalDate(refactoredWeatherData);\n  // Temperatures and Feels Like in Celc\n  // Toggle to fahrenheit can be found in userinputDOM module\n  renderTempsCelcius(refactoredWeatherData);\n  // Weather Icon\n  renderWeatherIcon(refactoredWeatherData);\n  // Weather Condition\n  renderWeatherCondition(refactoredWeatherData);\n  // Weather Details\n  renderWeatherDetails(refactoredWeatherData);\n}\n\n\n//# sourceURL=webpack://webpack-template-repo/./src/scripts/weatherInfoDOM.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;