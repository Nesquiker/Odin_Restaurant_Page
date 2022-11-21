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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildContact)\n/* harmony export */ });\n\n\nfunction buildContact() {\n    const container = document.querySelector(\"#content_entry\");\n    const contact_title_container = document.createElement(\"div\");\n    contact_title_container.classList.add(\"content_text_group\");\n    const welcome = document.createElement(\"h2\");\n    welcome.textContent = \"Need a reservation? Just want to chat?\";\n    const contact_us = document.createElement(\"h1\");\n    contact_us.textContent = \"Contact Us\";\n    const title_picture = document.createElement(\"img\");\n    title_picture.alt = \"Crabs touching claws\";\n    title_picture.src = \"./content/crabs_touching.jpg\";\n    const about_container = document.createElement(\"div\");\n    about_container.classList.add(\"content_text_group\");\n    const about_title = document.createElement(\"h2\");\n    about_title.textContent = \"Contact Information\";\n    const hours_container = document.createElement(\"div\");\n    hours_container.classList.add(\"content_text_group\");\n    hours_container.classList.add(\"hours\");\n    const hours_list = document.createElement(\"ul\");\n    const days = [\n        \"Call us at: 1-505-445-3456\",\n        \"E-mail: thelastolje@olje.com\",\n        \"Mail: 456 Moscow Lane\",\n    ];\n    for (let day of days) {\n        const li_div = document.createElement(\"li\");\n        li_div.textContent = day;\n        hours_list.appendChild(li_div);\n    }\n    contact_title_container.appendChild(welcome);\n    contact_title_container.appendChild(contact_us);\n    hours_container.appendChild(about_title);\n    hours_container.appendChild(hours_list)\n    container.replaceChildren(\n        contact_title_container,\n        title_picture,\n        hours_container\n    )\n}\n\n//# sourceURL=webpack://odin_restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/frame.js":
/*!**********************!*\
  !*** ./src/frame.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildFrame)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction buildFrame() {\n    const container = document.querySelector(\"#content\");\n    const header = buildHeader();\n    const body = buildBody();\n    const footer = buildFooter();\n    container.appendChild(header);\n    container.appendChild(body);\n    container.appendChild(footer);\n}\n\nfunction buildHeader() {\n    const button_container = document.createElement(\"div\");\n    button_container.classList.add(\"button_container\");\n    const home_button = document.createElement(\"button\");\n    home_button.id = \"home\";\n    home_button.textContent = \"Home\";\n    home_button.classList.add(\"selected\");\n    home_button.addEventListener(\"click\", _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    const menu_button = document.createElement(\"button\");\n    menu_button.id = \"menu\";\n    menu_button.textContent = \"Menu\";\n    menu_button.addEventListener(\"click\", _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    const contact_button = document.createElement(\"button\");\n    contact_button.id = \"contact\";\n    contact_button.textContent = \"Contact\";\n    contact_button.addEventListener(\"click\", _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    button_container.appendChild(home_button);\n    button_container.appendChild(menu_button);\n    button_container.appendChild(contact_button);\n    return button_container;\n}\n\nfunction buildBody() {\n    const body_container = document.createElement(\"div\");\n    body_container.classList.add(\"body_container\");\n    const content_entry = document.createElement(\"div\");\n    content_entry.id = \"content_entry\";\n    body_container.appendChild(content_entry);\n    return body_container;\n}\n\nfunction buildFooter() {\n    const footer_container = document.createElement(\"div\");\n    footer_container.classList.add(\"footer_container\");\n    const content_sources = document.createElement(\"div\");\n    content_sources.classList.add(\"foot_notes\");\n    content_sources.textContent = \"Background Image: tirachard     Fonts: Billy Argel Fonts\";\n    const creator_source = document.createElement(\"div\");\n    creator_source.classList.add(\"foot_notes\");\n    creator_source.textContent = \"Created by: Sean Reid\";\n    footer_container.appendChild(content_sources);\n    footer_container.appendChild(creator_source);\n    return footer_container;\n\n\n}\n\n//# sourceURL=webpack://odin_restaurant_page/./src/frame.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildHome)\n/* harmony export */ });\n\nfunction buildHome() {\n    const container = document.querySelector(\"#content_entry\");\n    const title_container = document.createElement(\"div\");\n    title_container.classList.add(\"content_text_group\");\n    const welcome = document.createElement(\"h2\");\n    welcome.textContent = \"Welcome to Moscow's' finest seafood restaurant:\";\n    const restaurant_name = document.createElement(\"h1\");\n    restaurant_name.textContent = \"Lastolje\";\n    const title_picture = document.createElement(\"img\");\n    title_picture.alt = \"Fishing boat\";\n    title_picture.src = \"./content/boat.jpg\";\n    const about_container = document.createElement(\"div\");\n    about_container.classList.add(\"content_text_group\");\n    const about_title = document.createElement(\"h2\");\n    about_title.textContent = \"About Us\";\n    const about_text = document.createElement(\"p\");\n    about_text.textContent = \"The Lastolje is a restaurant dedicated to unveiling the incredible culinary secrets locked\" +\n        \"away in the world under water. Lastolje started as a humble fishing outfit and now serves as one of Moscows most\" +\n        \"excellent seafood restaurants. Eat with us and experience seafood at its best.\";\n    const about_picture  = document.createElement(\"img\");\n    about_picture.alt = \"Man with raw seafood\";\n    about_picture.src = \"./content/fresh_fish.jpg\";\n    const hours_container = document.createElement(\"div\");\n    hours_container.classList.add(\"content_text_group\");\n    hours_container.classList.add(\"hours\");\n    const hours_title = document.createElement(\"h2\");\n    const hours_list = document.createElement(\"ul\");\n    const days = [\n        \"Sunday: 10am to 11pm\",\n        \"Monday: 2pm to 9pm\",\n        \"Tuesday: 10am to 11pm\",\n        \"Wednesday: 10am to 11pm\",\n        \"Thursday: 10am to 11pm\",\n        \"Friday: 10 am to 11pm\",\n        \"Saturday: 10am to 11pm\",\n        \"Holidays: Call us for times and reservations!\"\n    ];\n    for (let day of days) {\n        const li_div = document.createElement(\"li\");\n        li_div.textContent = day;\n        hours_list.appendChild(li_div);\n    }\n    title_container.appendChild(welcome);\n    title_container.appendChild(restaurant_name);\n    about_container.appendChild(about_title);\n    about_container.appendChild(about_text);\n    hours_container.appendChild(hours_title);\n    hours_container.appendChild(hours_list);\n    container.appendChild(title_container);\n    container.appendChild(title_picture);\n    container.appendChild(about_container);\n    container.appendChild(about_picture);\n    container.appendChild(hours_container);\n    container.replaceChildren(title_container, title_picture, about_container, about_picture, hours_container);\n}\n\n//# sourceURL=webpack://odin_restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ constructTab)\n/* harmony export */ });\n/* harmony import */ var _src_frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/frame.js */ \"./src/frame.js\");\n/* harmony import */ var _src_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/home.js */ \"./src/home.js\");\n/* harmony import */ var _src_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/menu.js */ \"./src/menu.js\");\n/* harmony import */ var _src_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\nfunction alert() {\n    console.log(\"Alert!\");\n}\n\nfunction constructTab(e) {\n    const current_button = document.querySelector(\".selected\");\n    if (current_button === e.target) {\n        return;\n    }\n    current_button.classList.remove(\"selected\");\n    e.target.classList.add(\"selected\");\n    if (e.target.textContent === \"Home\") {\n        (0,_src_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else if (e.target.textContent === \"Menu\") {\n        (0,_src_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else if (e.target.textContent === \"Contact\") {\n        (0,_src_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n}\n\nfunction main() {\n    (0,_src_frame_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_src_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    alert();\n}\n\nmain();\n\n//# sourceURL=webpack://odin_restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMenu)\n/* harmony export */ });\n\n\nfunction buildMenu() {\n    const container = document.querySelector(\"#content_entry\");\n\n    /* MENU TITLE */\n    const title_container = document.createElement(\"div\");\n    title_container.classList.add(\"content_text_group\");\n    const welcome = document.createElement(\"h2\");\n    welcome.textContent = \"We guarantee it is all great\";\n    const menu_title = document.createElement(\"h1\");\n    menu_title.textContent = \"Menu\";\n    const title_picture = document.createElement(\"img\");\n    title_picture.alt = \"Platter of seafood\";\n    title_picture.src = \"./content/platter.jpg\";\n\n    /* APPETIZERS */\n    const section_title_container = document.createElement(\"div\");\n    section_title_container.classList.add(\"content_text_group\");\n    const appetizers = document.createElement(\"h1\");\n    appetizers.textContent = \"Appetizers\";\n    appetizers.id = \"sub_2\";\n    const appetizer_1 = document.createElement(\"div\");\n    appetizer_1.classList.add(\"content_text_group\");\n    const app_title_1 = document.createElement(\"h2\");\n    app_title_1.textContent = \"Baltic Oysters - 8$\";\n    const app_desc_1 = document.createElement(\"p\");\n    app_desc_1.textContent = \"Oysters direct from the Baltic sea. Served in a delicate butter, tarragon, and paprika sauce.\" +\n        \" Comes with 8 oysters.\";\n    const app_1_image = document.createElement(\"img\");\n    app_1_image.alt = \"Picture of Oysters\";\n    app_1_image.src = \"./content/mussels.jpg\";\n    const appetizer_2 = document.createElement(\"div\");\n    appetizer_2.classList.add(\"content_text_group\");\n    const app_title_2 = document.createElement(\"h2\");\n    app_title_2.textContent = \"Shrimp Cocktail - 10$\";\n    const app_desc_2 = document.createElement(\"p\");\n    app_desc_2.textContent = \"Shrimp cocktail served in our proprietary sauce. Served with lemon, onion, and cucumber.\" +\n        \" The shrimp come with the head on.\";\n    const app_2_image = document.createElement(\"img\");\n    app_2_image.alt = \"Picture of shrimp cocktail\";\n    app_2_image.src = \"./content/shrimp.jpg\";\n\n    /* MAIN COURSES */\n    const main_title_container = document.createElement(\"div\");\n    main_title_container.classList.add(\"content_text_group\");\n    const main_course_title = document.createElement(\"h1\");\n    main_course_title.textContent = \"Main Courses\";\n    main_course_title.id = \"sub_1\";\n    const main_1 = document.createElement(\"div\");\n    main_1.classList.add(\"content_text_group\");\n    const main_title_1 = document.createElement(\"h2\");\n    main_title_1.textContent = \"Seafood Soup - 12$\";\n    const main_desc_1 = document.createElement(\"p\");\n    main_desc_1.textContent = \"Shrimp, Mussels, and clams all in a hearty soup. Seasoned with our trademark curry.\" +\n        \" Served with bread.\";\n    const main_1_image = document.createElement(\"img\");\n    main_1_image.alt = \"Picture of Seafood soup\";\n    main_1_image.src = \"./content/seafood_soup.jpg\";\n\n    /* COURSE 2 */\n    const main_2 = document.createElement(\"div\");\n    main_2.classList.add(\"content_text_group\");\n    const main_title_2 = document.createElement(\"h2\");\n    main_title_2.textContent = \"Tuna Steak - 29$\";\n    const main_desc_2 = document.createElement(\"p\");\n    main_desc_2.textContent = \"Seared Tuna steaks on a bed of garden vegetables and red potatoes. Tuna is fresh caught \" +\n        \" Served with our home made aoli.\";\n    const main_2_image = document.createElement(\"img\");\n    main_2_image.alt = \"Picture of Tuna steaks\";\n    main_2_image.src = \"./content/tuna_dish.jpg\";\n\n    /* COURSE 2 */\n    const main_3 = document.createElement(\"div\");\n    main_3.classList.add(\"content_text_group\");\n    const main_title_3 = document.createElement(\"h2\");\n    main_title_3.textContent = \"Shrimp and Rice - 21$\";\n    const main_desc_3 = document.createElement(\"p\");\n    main_desc_3.textContent = \"Fresh caught shrimp battered and served on a bed of rice mixed with herbs and vegetables\" +\n        \" grown locally.\";\n    const main_3_image = document.createElement(\"img\");\n    main_3_image.alt = \"Picture of shrimp in rice\";\n    main_3_image.src = \"./content/Shrimp_and_rice.jpg\";\n\n    /* ADD TO CONTENT */\n    title_container.appendChild(welcome);\n    title_container.appendChild(menu_title);\n    section_title_container.appendChild(appetizers);\n    appetizer_1.appendChild(app_title_1);\n    appetizer_1.appendChild(app_desc_1);\n    appetizer_2.appendChild(app_title_2);\n    appetizer_2.appendChild(app_desc_2);\n    main_title_container.appendChild(main_course_title);\n    main_1.appendChild(main_title_1);\n    main_1.appendChild(main_desc_1);\n    main_2.appendChild(main_title_2);\n    main_2.appendChild(main_desc_2);\n    main_3.appendChild(main_title_3);\n    main_3.appendChild(main_desc_3);\n\n\n    container.replaceChildren(\n        title_container,\n        title_picture,\n        section_title_container,\n        appetizer_1,\n        app_1_image,\n        appetizer_2,\n        app_2_image,\n        main_title_container,\n        main_1,\n        main_1_image,\n        main_2,\n        main_2_image,\n        main_3,\n        main_3_image\n    );\n}\n\n//# sourceURL=webpack://odin_restaurant_page/./src/menu.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;