// Match API data with desired icons and background module

// Fetch JSON with background image
function fetchData() {
  return fetch("data.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error loading JSON file:", error);
      // Optionally, you can throw the error or handle it as needed
      throw error;
    });
}
// Function to get the "bg" value based on the icon number
function getBgByIcon(icon, weatherData) {
  // Find the object in the array that matches the given icon number
  const matchingObject = weatherData.find(
    (weatherCondition) => weatherCondition.icon === icon,
  );

  // If a matching object is found, return its "bg" property; otherwise, return null
  return matchingObject ? matchingObject.bg : null;
}

const changeBackground = (background) => {
  const body = document.querySelector("body");

  body.style.backgroundImage = `url('./img/backgrounds/${background}.jpg')`;
};

const renderBackground = (icon) => {
  fetchData().then((weatherData) => {
    const bgValue = getBgByIcon(icon, weatherData);
    changeBackground(bgValue);
  });
};

export default renderBackground;
