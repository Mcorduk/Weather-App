/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/scripts/fetch.js":
      /*!******************************!*\
  !*** ./src/scripts/fetch.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* Hard coding API Key. \nLearning how to not is not covered in Odin curriculum yet.\nBut I am using Weather API\'s free plan so it is okay.\n*/\n\nasync function fetchCurrentWeather(location) {\n  // Function to refactor the API responded JSON to usable object\n  function refactorWeatherData(weatherData) {\n    const city = weatherData.location.name;\n    const {\n      country\n    } = weatherData.location;\n    const condition = weatherData.current.condition.text;\n    const tempC = weatherData.current.temp_c;\n    const tempF = weatherData.current.temp_f;\n    const {\n      humidity\n    } = weatherData.current;\n    const feelsLikeC = weatherData.current.feelslike_c;\n    const feelsLikeF = weatherData.current.feelslike_f;\n    const wind = weatherData.current.wind_kph;\n    const {\n      icon\n    } = weatherData.current;\n    return {\n      city,\n      country,\n      condition,\n      tempC,\n      tempF,\n      humidity,\n      feelsLikeC,\n      feelsLikeF,\n      wind\n    };\n  }\n  try {\n    // Fetch the response for current day\'s weather data from Weather API\n    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e6f9f80a7ad94403a0d95411232112&q=${location}`, {\n      mode: "cors"\n    });\n    // Turn data into JSON\n    const weatherData = await response.json();\n    // Refactor the data into a more readable object with needed data only.\n    const refactoredWeatherData = refactorWeatherData(weatherData);\n    console.log(refactoredWeatherData);\n  } catch (error) {\n    console.log(error);\n  }\n}\nfetchCurrentWeather("singapore");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchCurrentWeather);\n\n//# sourceURL=webpack://webpack-template-repo/./src/scripts/fetch.js?',
        );

        /***/
      },

    /***/ "./src/scripts/index.js":
      /*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/scripts/fetch.js");\n/* harmony import */ var _renderImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderImg */ "./src/scripts/renderImg.js");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./src/scripts/theme.js");\n/* harmony import */ var _userInputDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userInputDOM */ "./src/scripts/userInputDOM.js");\n\n\n\n\n\n//# sourceURL=webpack://webpack-template-repo/./src/scripts/index.js?',
        );

        /***/
      },

    /***/ "./src/scripts/renderImg.js":
      /*!**********************************!*\
  !*** ./src/scripts/renderImg.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n// Match API data with desired icons and background module\n\n\n\n//# sourceURL=webpack://webpack-template-repo/./src/scripts/renderImg.js?",
        );

        /***/
      },

    /***/ "./src/scripts/theme.js":
      /*!******************************!*\
  !*** ./src/scripts/theme.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n// Dark - Light Theme Toggle Module\n\n\n\n//# sourceURL=webpack://webpack-template-repo/./src/scripts/theme.js?",
        );

        /***/
      },

    /***/ "./src/scripts/userInputDOM.js":
      /*!*************************************!*\
  !*** ./src/scripts/userInputDOM.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/scripts/fetch.js");\n\n// DOM stuffs for Main HTML semantic tag where user input is\n\n// User Input DOM\nconst button = document.querySelector("button");\nconst input = document.querySelector("input");\nbutton.addEventListener("click", () => {\n  (0,_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value);\n  input.value = "";\n});\n\n\n//# sourceURL=webpack://webpack-template-repo/./src/scripts/userInputDOM.js?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__(
    "./src/scripts/index.js",
  );
  /******/
  /******/
})();
