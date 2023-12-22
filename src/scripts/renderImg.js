// Match API data with desired icons and background module

const iconBgMap = {
  113: "sunny",
  116: "partly-cloudy",
  119: "cloudy",
  122: "cloudy",
  143: "foggy",
  176: "rainy",
  179: "snowy",
  182: "rainy",
  185: "rainy",
  200: "thunder",
  227: "snowy",
  230: "snowy",
  248: "foggy",
  260: "foggy",
  263: "rainy",
  266: "rainy",
  281: "rainy",
  284: "rainy",
  293: "rainy",
  296: "rainy",
  299: "rainy",
  302: "rainy",
  305: "rainy",
  308: "rainy",
  311: "rainy",
  314: "rainy",
  317: "rainy",
  320: "rainy",
  323: "snowy",
  326: "snowy",
  329: "snowy",
  332: "snowy",
  335: "snowy",
  338: "snowy",
  350: "snowy",
  353: "rainy",
  356: "rainy",
  359: "rainy",
  362: "rainy",
  365: "rainy",
  368: "snowy",
  371: "snowy",
  374: "snowy",
  377: "snowy",
  386: "thunder",
  389: "thunder",
  392: "snowy",
  395: "snowy"
};

const changeBackground = (background) => {
  const body = document.querySelector("body");

  body.style.backgroundImage = `url('./img/backgrounds/${background}.jpg')`;
};

const renderBackground = (icon) => {

    changeBackground(iconBgMap.icon);
};

export default renderBackground;
