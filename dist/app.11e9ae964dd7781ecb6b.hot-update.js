"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatealemny_school"]("app",{

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* eslint-env browser */\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\n\n/** @typedef {any} TODO */\n\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === \"undefined\";\nvar forEach = Array.prototype.forEach;\n\n/**\n * @param {function} fn\n * @param {number} time\n * @returns {(function(): void)|*}\n */\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    // @ts-ignore\n    var self = this;\n    // eslint-disable-next-line prefer-rest-params\n    var args = arguments;\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n    clearTimeout(timeout);\n\n    // @ts-ignore\n    timeout = setTimeout(functionCall, time);\n  };\n}\nfunction noop() {}\n\n/**\n * @param {TODO} moduleId\n * @returns {TODO}\n */\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n  if (!src) {\n    if (document.currentScript) {\n      src = /** @type {HTMLScriptElement} */document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName(\"script\");\n      var lastScriptTag = scripts[scripts.length - 1];\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n    srcByModuleId[moduleId] = src;\n  }\n\n  /**\n   * @param {string} fileMap\n   * @returns {null | string[]}\n   */\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n    if (!filename) {\n      return [src.replace(\".js\", \".css\")];\n    }\n    if (!fileMap) {\n      return [src.replace(\".js\", \".css\")];\n    }\n    return fileMap.split(\",\").map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), \"g\");\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\n/**\n * @param {TODO} el\n * @param {string} [url]\n */\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    }\n\n    // eslint-disable-next-line\n    url = el.href.split(\"?\")[0];\n  }\n  if (!isUrlRequest( /** @type {string} */url)) {\n    return;\n  }\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n  if (!url || !(url.indexOf(\".css\") > -1)) {\n    return;\n  }\n\n  // eslint-disable-next-line no-param-reassign\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener(\"load\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener(\"error\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\n/**\n * @param {string} href\n * @param {TODO} src\n * @returns {TODO}\n */\nfunction getReloadUrl(href, src) {\n  var ret;\n\n  // eslint-disable-next-line no-param-reassign\n  href = normalizeUrl(href);\n  src.some(\n  /**\n   * @param {string} url\n   */\n  // eslint-disable-next-line array-callback-return\n  function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\n/**\n * @param {string} [src]\n * @returns {boolean}\n */\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n  var elements = document.querySelectorAll(\"link\");\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n    var url = getReloadUrl(el.href, src);\n    if (!isUrlRequest(url)) {\n      return;\n    }\n    if (el.visited === true) {\n      return;\n    }\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\nfunction reloadAll() {\n  var elements = document.querySelectorAll(\"link\");\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n    updateCss(el);\n  });\n}\n\n/**\n * @param {string} url\n * @returns {boolean}\n */\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n\n  // It is not http or https\n  if (!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(url)) {\n    return false;\n  }\n  return true;\n}\n\n/**\n * @param {TODO} moduleId\n * @param {TODO} options\n * @returns {TODO}\n */\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log(\"no window.document found, will not HMR CSS\");\n    return noop;\n  }\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n    if (options.locals) {\n      console.log(\"[HMR] Detected local css modules. Reload all css\");\n      reloadAll();\n      return;\n    }\n    if (reloaded) {\n      console.log(\"[HMR] css reload %s\", src.join(\" \"));\n    } else {\n      console.log(\"[HMR] Reload all css\");\n      reloadAll();\n    }\n  }\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://alemny-school/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n\n/* eslint-disable */\n\n/**\n * @param {string[]} pathComponents\n * @returns {string}\n */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case \"..\":\n        accumulator.pop();\n        break;\n      case \".\":\n        break;\n      default:\n        accumulator.push(item);\n    }\n    return accumulator;\n  }, /** @type {string[]} */[]).join(\"/\");\n}\n\n/**\n * @param {string} urlString\n * @returns {string}\n */\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n  var protocol = urlString.indexOf(\"//\") !== -1 ? urlString.split(\"//\")[0] + \"//\" : \"\";\n  var components = urlString.replace(new RegExp(protocol, \"i\"), \"\").split(\"/\");\n  var host = components[0].toLowerCase().replace(/\\.$/, \"\");\n  components[0] = \"\";\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://alemny-school/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1680119194043\n      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"publicPath\":\"../\",\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://alemny-school/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _laylazi_bootstrap_rtl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @laylazi/bootstrap-rtl */ \"./node_modules/@laylazi/bootstrap-rtl/dist/js/bootstrap.js\");\n/* harmony import */ var _laylazi_bootstrap_rtl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laylazi_bootstrap_rtl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery/dist/jquery.min */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min */ \"./node_modules/@fortawesome/fontawesome-free/js/all.min.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n$(window).on('load', function () {\r\n  element.addEventListener(\"click\", myFunction);\r\n  element.addEventListener(\"click\", backFunction);\r\n  element.addEventListener(\"click\", BTNFunction);\r\n  element.addEventListener(\"click\", DateFunction);\r\n\r\n\r\n  $('#toggler').click(function(){\r\n    $('.wrap').toggleClass('toggled');\r\n   })  \r\n  \r\n   var CurrentDate= new Date();\r\n   $(\"#current_year\").text(CurrentDate.getFullYear());\r\n\r\n})\r\nfunction backFunction() {\r\n  var background = document.body;\r\n  background.classList.toggle(\"night-mode\");\r\n  }\r\n\r\n  function myFunction() {\r\n    let x = document.getElementById(\"icon\");\r\n    if (x.style.display === \"none\") {\r\n      x.style.display = \"block\";\r\n    } else {\r\n      x.style.display = \"none\";\r\n    }\r\n  }\r\n  function BTNFunction() {\r\n    var y = document.getElementById(\"readmore\");\r\n    if (y.style.display === \"none\") {\r\n      y.style.display = \"block\";\r\n    } else {\r\n      y.style.display = \"none\";\r\n    }\r\n\r\n  }\r\n\r\n  function DateFunction() {\r\n    var x = document.getElementById(\"DateFunction\").value;\r\n    document.getElementById(\"demo\").innerHTML = x;\r\n  }\r\n\r\n  document.addEventListener(\"click\", function(){\r\n    \r\n  })\r\n  const cities = \r\n  {\r\n    EGY:  [\"القاهرة\", \"الإسكندرية\", \"البحيرة\", \"كفر الشيخ\", \"دمياط\", \"بورسعيد\", \"الإسماعيلية\", \"السويس\", \"الشرقية\", \"بني سويف\", \"المنيا\", \"أسيوط\", \"الفيوم\", \"المنوفية\", \"الغربية\", \"الدقهلية\", \"كفر الدوار\", \"قنا\", \"الأقصر\", \"أسوان\", \"سوهاج\", \"الوادي الجديد\", \"شمال سيناء\", \"جنوب سيناء\", \"البحر الأحمر\", \"مطروح\", \"الساحل الشمالي\"],\r\n    KSA: [\r\n      \"Alabama\",\r\n      \"Alaska\",\r\n      \"Arizona\",\r\n      \"Arkansas\",\r\n      \"California\",\r\n      \"Colorado\",\r\n      \"Connecticut\",\r\n      \"Delaware\",\r\n      \"Florida\",\r\n      \"Georgia\",\r\n      \"Hawaii\",\r\n      \"Idaho\",\r\n      \"Illinois\",\r\n      \"Indiana\",\r\n      \"Iowa\",\r\n      \"Kansas\",\r\n      \"Kentucky\",\r\n      \"Louisiana\",\r\n      \"Maine\",\r\n      \"Maryland\",\r\n      \"Massachusetts\",\r\n      \"Michigan\",\r\n      \"Minnesota\",\r\n      \"Mississippi\",\r\n      \"Missouri\",\r\n      \"Montana\",\r\n      \"Nebraska\",\r\n      \"Nevada\",\r\n      \"New Hampshire\",\r\n      \"New Jersey\",\r\n      \"New Mexico\",\r\n      \"New York\",\r\n      \"North Carolina\",\r\n      \"North Dakota\",\r\n      \"Ohio\",\r\n      \"Oklahoma\",\r\n      \"Oregon\",\r\n      \"Pennsylvania\",\r\n      \"Rhode Island\",\r\n      \"South Carolina\",\r\n      \"South Dakota\",\r\n      \"Tennessee\",\"Texas\",\"Utah\",\"Vermont\",\"Virginia\",\"Washington\",\"West Virginia\",\"Wisconsin\",\"Wyoming\"\r\n    ],\r\n    UAE: [\"أبو ظبي\",\"دبي\",\"شارقة\",\"عجمان\",\"أم القيوين\",\"رأس الخيمة\",\"الفجيرة\"]\r\n  };\r\n\r\n  const countrySelect = document.getElementById('country');\r\n  const citySelect = document.getElementById('city');\r\n\r\n  countrySelect.addEventListener('change', (event) => {\r\n    const selectedCountry = event.target.value;\r\n    citySelect.innerHTML = '';\r\n    citySelect.disabled = true;\r\n    const defaultOption = document.createElement('option');\r\n    defaultOption.text = '--Please choose a city--';\r\n    defaultOption.value = '';\r\n    citySelect.appendChild(defaultOption);\r\n\r\n    if (selectedCountry) {\r\n      const citiesArray = cities[selectedCountry];\r\n      citiesArray.forEach(city => {\r\n        const option = document.createElement('option');\r\n        option.value = city;\r\n        option.text = city;\r\n        citySelect.appendChild(option);\r\n      });\r\n      citySelect.disabled = false;\r\n    }\r\n\r\n});\r\nvar video = document.getElementById(\"video\");\r\nvar card = document.querySelector(\".card\");\r\n\r\ncard.addEventListener(\"click\", function() {\r\n  video.play();\r\n});\r\ndocument.querySelector('.sidebar-toggle').addEventListener('click', function() {\r\ndocument.querySelector('.sidebar').classList.toggle('active');\r\n});\r\n\r\n$('#toggler').click(function(){\r\n$('.wrap').toggleClass('toggled');\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://alemny-school/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7d02f5bf8d85ff9e4b65")
/******/ })();
/******/ 
/******/ }
);