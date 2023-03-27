/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateALEMNEY_SCHOOL"]("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\n\r\n\r\n$(document).ready(function(){\r\n\r\n  $('#toggler').click(function(){\r\n    $('.wrap').toggleClass('toggled');\r\n   })  \r\n  \r\n   var CurrentDate= new Date();\r\n   $(\"#current_year\").text(CurrentDate.getFullYear());\r\n\r\n})\r\nfunction backFunction() {\r\n  var background = document.body;\r\n  background.classList.toggle(\"night-mode\");\r\n  }\r\n\r\n  function myFunction() {\r\n    let x = document.getElementById(\"icon\");\r\n    if (x.style.display === \"none\") {\r\n      x.style.display = \"block\";\r\n    } else {\r\n      x.style.display = \"none\";\r\n    }\r\n  }\r\n  function BTNFunction() {\r\n    var y = document.getElementById(\"readmore\");\r\n    if (y.style.display === \"none\") {\r\n      y.style.display = \"block\";\r\n    } else {\r\n      y.style.display = \"none\";\r\n    }\r\n\r\n  }\r\n\r\n  function DateFunction() {\r\n    var x = document.getElementById(\"DateFunction\").value;\r\n    document.getElementById(\"demo\").innerHTML = x;\r\n  }\r\n\r\n\r\n  const cities = \r\n  {\r\n    EGY:  [\"القاهرة\", \"الإسكندرية\", \"البحيرة\", \"كفر الشيخ\", \"دمياط\", \"بورسعيد\", \"الإسماعيلية\", \"السويس\", \"الشرقية\", \"بني سويف\", \"المنيا\", \"أسيوط\", \"الفيوم\", \"المنوفية\", \"الغربية\", \"الدقهلية\", \"كفر الدوار\", \"قنا\", \"الأقصر\", \"أسوان\", \"سوهاج\", \"الوادي الجديد\", \"شمال سيناء\", \"جنوب سيناء\", \"البحر الأحمر\", \"مطروح\", \"الساحل الشمالي\"],\r\n    KSA: [\r\n      \"Alabama\",\r\n      \"Alaska\",\r\n      \"Arizona\",\r\n      \"Arkansas\",\r\n      \"California\",\r\n      \"Colorado\",\r\n      \"Connecticut\",\r\n      \"Delaware\",\r\n      \"Florida\",\r\n      \"Georgia\",\r\n      \"Hawaii\",\r\n      \"Idaho\",\r\n      \"Illinois\",\r\n      \"Indiana\",\r\n      \"Iowa\",\r\n      \"Kansas\",\r\n      \"Kentucky\",\r\n      \"Louisiana\",\r\n      \"Maine\",\r\n      \"Maryland\",\r\n      \"Massachusetts\",\r\n      \"Michigan\",\r\n      \"Minnesota\",\r\n      \"Mississippi\",\r\n      \"Missouri\",\r\n      \"Montana\",\r\n      \"Nebraska\",\r\n      \"Nevada\",\r\n      \"New Hampshire\",\r\n      \"New Jersey\",\r\n      \"New Mexico\",\r\n      \"New York\",\r\n      \"North Carolina\",\r\n      \"North Dakota\",\r\n      \"Ohio\",\r\n      \"Oklahoma\",\r\n      \"Oregon\",\r\n      \"Pennsylvania\",\r\n      \"Rhode Island\",\r\n      \"South Carolina\",\r\n      \"South Dakota\",\r\n      \"Tennessee\",\"Texas\",\"Utah\",\"Vermont\",\"Virginia\",\"Washington\",\"West Virginia\",\"Wisconsin\",\"Wyoming\"\r\n    ],\r\n    UAE: [\"أبو ظبي\",\"دبي\",\"شارقة\",\"عجمان\",\"أم القيوين\",\"رأس الخيمة\",\"الفجيرة\"]\r\n  };\r\n\r\n  const countrySelect = document.getElementById('country');\r\n  const citySelect = document.getElementById('city');\r\n\r\n  countrySelect.addEventListener('change', (event) => {\r\n    const selectedCountry = event.target.value;\r\n    citySelect.innerHTML = '';\r\n    citySelect.disabled = true;\r\n    const defaultOption = document.createElement('option');\r\n    defaultOption.text = '--Please choose a city--';\r\n    defaultOption.value = '';\r\n    citySelect.appendChild(defaultOption);\r\n\r\n    if (selectedCountry) {\r\n      const citiesArray = cities[selectedCountry];\r\n      citiesArray.forEach(city => {\r\n        const option = document.createElement('option');\r\n        option.value = city;\r\n        option.text = city;\r\n        citySelect.appendChild(option);\r\n      });\r\n      citySelect.disabled = false;\r\n    }\r\n    var video = document.getElementById(\"video\");\r\n    var card = document.querySelector(\".card\");\r\n  \r\n    card.addEventListener(\"click\", function() {\r\n      video.play();\r\n    });\r\ndocument.querySelector('.sidebar-toggle').addEventListener('click', function() {\r\n  document.querySelector('.sidebar').classList.toggle('active');\r\n});\r\n\r\n$('#toggler').click(function(){\r\n  $('.wrap').toggleClass('toggled');\r\n })\r\n  });\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://ALEMNEY-SCHOOL/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e6fba93b6ee7989bbcf2")
/******/ })();
/******/ 
/******/ }
);