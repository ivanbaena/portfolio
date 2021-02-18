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

/***/ "./src/client/App.module.css":
/*!***********************************!*\
  !*** ./src/client/App.module.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"app\":\"_1ncT4rSogl3caIfpsD0bBI\"});\n\n//# sourceURL=webpack://app/./src/client/App.module.css?");

/***/ }),

/***/ "./src/client/components/header/Header.module.css":
/*!********************************************************!*\
  !*** ./src/client/components/header/Header.module.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"navlist\":\"KeEXnEs7mqgIlMMNVgDT1\",\"navitem\":\"_1gLn5gnc0xD6jHVAtsdBii\",\"header\":\"_2-nAEQIapvxZf41i-zxJ03\",\"logo\":\"vKR5a1W2t9BGAYvx-4-F8\",\"nav\":\"sG6TYb7E-7mWvTjcFnnvm\"});\n\n//# sourceURL=webpack://app/./src/client/components/header/Header.module.css?");

/***/ }),

/***/ "./src/client/components/landing/Landing.module.scss":
/*!***********************************************************!*\
  !*** ./src/client/components/landing/Landing.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"landing\":\"_3BWqK7UvSUU5sXFz_7NB\",\"textbox\":\"_1ReLAG7XbWyOUNRhGlurzs\",\"heading\":\"hMrmYbooKNZKf1NLlAXme\"});\n\n//# sourceURL=webpack://app/./src/client/components/landing/Landing.module.scss?");

/***/ }),

/***/ "./src/client/components/scene/Scene.module.scss":
/*!*******************************************************!*\
  !*** ./src/client/components/scene/Scene.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"scene\":\"_2WsLVeUcGKxQgxmiIABYY4\"});\n\n//# sourceURL=webpack://app/./src/client/components/scene/Scene.module.scss?");

/***/ }),

/***/ "./src/client/components/slider/Slider.module.scss":
/*!*********************************************************!*\
  !*** ./src/client/components/slider/Slider.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://app/./src/client/components/slider/Slider.module.scss?");

/***/ }),

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ \"./src/client/components/header/index.ts\");\n/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.module.css */ \"./src/client/App.module.css\");\n\n\n\n\nconst App = ({ route }) => {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.app },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__.Header, null),\n        (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(route.routes)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    component: App,\n});\n\n\n//# sourceURL=webpack://app/./src/client/App.tsx?");

/***/ }),

/***/ "./src/client/Routes.tsx":
/*!*******************************!*\
  !*** ./src/client/Routes.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Routes\": () => (/* binding */ Routes)\n/* harmony export */ });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/client/App.tsx\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home */ \"./src/client/pages/Home.tsx\");\n/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/NotFound */ \"./src/client/pages/NotFound.tsx\");\n\n\n\nconst Routes = [\n    Object.assign(Object.assign({}, _App__WEBPACK_IMPORTED_MODULE_0__.default), { routes: [\n            Object.assign(Object.assign({}, _pages_Home__WEBPACK_IMPORTED_MODULE_1__.default), { path: \"/\", exact: true }),\n            Object.assign({}, _pages_NotFound__WEBPACK_IMPORTED_MODULE_2__.default),\n        ] }),\n];\n\n\n//# sourceURL=webpack://app/./src/client/Routes.tsx?");

/***/ }),

/***/ "./src/client/components/header/Header.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/header/Header.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.css */ \"./src/client/components/header/Header.module.css\");\n\n\n\nconst linksData = [\n    { name: 'ivan', path: '/' },\n    { name: 'work', path: '/work' },\n    { name: 'about', path: '/about' },\n];\nconst Header = () => {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        console.log('mounted header');\n    }, []);\n    const renderNavLinks = () => {\n        return linksData.slice(1).map((item, index) => {\n            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2__.default.navitem, key: index, to: item.path }, item.name));\n        });\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", { className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2__.default.header },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: linksData[0].path, className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2__.default.logo }, linksData[0].name),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", { className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2__.default.nav }, renderNavLinks())));\n};\n\n\n//# sourceURL=webpack://app/./src/client/components/header/Header.tsx?");

/***/ }),

/***/ "./src/client/components/header/index.ts":
/*!***********************************************!*\
  !*** ./src/client/components/header/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Header)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/client/components/header/Header.tsx\");\n\n\n\n//# sourceURL=webpack://app/./src/client/components/header/index.ts?");

/***/ }),

/***/ "./src/client/components/landing/Landing.tsx":
/*!***************************************************!*\
  !*** ./src/client/components/landing/Landing.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Landing\": () => (/* binding */ Landing)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Landing_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.module.scss */ \"./src/client/components/landing/Landing.module.scss\");\n\n\nconst Landing = () => {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _Landing_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.landing },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _Landing_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.textbox },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", { className: _Landing_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.heading },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Ivan Baena \"),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Front End Developer\")))));\n};\n\n\n//# sourceURL=webpack://app/./src/client/components/landing/Landing.tsx?");

/***/ }),

/***/ "./src/client/components/landing/index.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/landing/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Landing\": () => (/* reexport safe */ _Landing__WEBPACK_IMPORTED_MODULE_0__.Landing)\n/* harmony export */ });\n/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing */ \"./src/client/components/landing/Landing.tsx\");\n\n\n\n//# sourceURL=webpack://app/./src/client/components/landing/index.tsx?");

/***/ }),

/***/ "./src/client/components/scene/Scene.tsx":
/*!***********************************************!*\
  !*** ./src/client/components/scene/Scene.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scene\": () => (/* binding */ Scene)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Scene_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene.module.scss */ \"./src/client/components/scene/Scene.module.scss\");\n\n\nconst Scene = ({ children, className, style, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { id: 'scene', className: `${_Scene_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.scene} ${className}`, style: style }, children));\n\n\n//# sourceURL=webpack://app/./src/client/components/scene/Scene.tsx?");

/***/ }),

/***/ "./src/client/components/scene/index.ts":
/*!**********************************************!*\
  !*** ./src/client/components/scene/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scene\": () => (/* reexport safe */ _Scene__WEBPACK_IMPORTED_MODULE_0__.Scene)\n/* harmony export */ });\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene */ \"./src/client/components/scene/Scene.tsx\");\n\n\n\n//# sourceURL=webpack://app/./src/client/components/scene/index.ts?");

/***/ }),

/***/ "./src/client/components/slider/Slider.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/slider/Slider.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"swiper/react\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"swiper\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slider.module.scss */ \"./src/client/components/slider/Slider.module.scss\");\n\n\n\n\n// install Swiper modules\nswiper__WEBPACK_IMPORTED_MODULE_2___default().use([swiper__WEBPACK_IMPORTED_MODULE_2__.Mousewheel, swiper__WEBPACK_IMPORTED_MODULE_2__.Scrollbar]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ children }) => {\n    const [slide, setSlide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [swiperContainer, setSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n    const newChildren = react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, (child) => react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {\n        swiperInstance: swiperContainer,\n        slideIndex: slide,\n    }));\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, { freeModeMomentumVelocityRatio: 1.2, freeModeMomentumRatio: 1.2, freeModeMomentumBounceRatio: 4, scrollbar: { draggable: true, hide: false }, mousewheel: true, direction: 'vertical', watchSlidesVisibility: true, freeMode: true, \n        // freeModeSticky={true}\n        onSwiper: (swiper) => setSwiper(swiper), \n        // onScrollbarDragMove={(swiper) => setSlide(swiper.activeIndex)}\n        onScroll: (swiper) => {\n            console.log(swiper.activeIndex);\n        }, onActiveIndexChange: (swiper) => {\n            setSlide(swiper.activeIndex);\n        } }, newChildren.map((child, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, { key: i }, child)))));\n});\n\n\n//# sourceURL=webpack://app/./src/client/components/slider/Slider.tsx?");

/***/ }),

/***/ "./src/client/components/slider/data.ts":
/*!**********************************************!*\
  !*** ./src/client/components/slider/data.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = [\n    {\n        text: 'text-1',\n        color: '#d0e0e7',\n        viewbox: {\n            content: 'slide one viewbox',\n            backgroundColor: 'lightslategrey',\n            template: ['base'],\n            zIndex: 5,\n        },\n        item: {\n            project: 'Sleepless',\n            description: 'Sleepless app helps those sleep less every night!',\n            keywords: ['web', 'react', 'graphql'],\n        },\n    },\n    {\n        text: 'text-two',\n        color: '#effcfd',\n        viewbox: {\n            content: 'slide two viewbox',\n            backgroundColor: 'purple',\n            template: ['base', 'back'],\n            zIndex: 3,\n        },\n        item: {\n            project: 'Nanny Jersey',\n            description: 'Babysitter called out? Find a certified nanny fast,  in the great state of New Jersey!',\n            keywords: ['web', 'react', 'graphql'],\n        },\n    },\n    {\n        text: 'text-three',\n        color: '#fbf3d5',\n        viewbox: {\n            content: 'slide three viewbox',\n            backgroundColor: 'plum',\n            template: ['base', 'back', 'deep'],\n            zIndex: 4,\n        },\n        item: {\n            project: 'Piggy',\n            description: 'An free easy way to save money. Make your monthly budgets and eliminate dead spending',\n            keywords: ['web', 'react', 'graphql'],\n        },\n    },\n];\n\n\n//# sourceURL=webpack://app/./src/client/components/slider/data.ts?");

/***/ }),

/***/ "./src/client/components/viewbox/Viewbox.tsx":
/*!***************************************************!*\
  !*** ./src/client/components/viewbox/Viewbox.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Viewbox\": () => (/* binding */ Viewbox)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"swiper/react\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"swiper\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scene */ \"./src/client/components/scene/index.ts\");\n/* harmony import */ var _slider_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slider/data */ \"./src/client/components/slider/data.ts\");\n\n\n\n\n\n// install Swiper modules\nswiper__WEBPACK_IMPORTED_MODULE_2___default().use([\n    swiper__WEBPACK_IMPORTED_MODULE_2__.Mousewheel,\n    swiper__WEBPACK_IMPORTED_MODULE_2__.Scrollbar,\n    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,\n    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,\n    swiper__WEBPACK_IMPORTED_MODULE_2__.EffectCoverflow,\n]);\nconst viewboxItems = () => _slider_data__WEBPACK_IMPORTED_MODULE_4__.data.map((item) => item.viewbox);\nconst Viewbox = ({ swiperInstance, }) => {\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(viewboxItems());\n    const [slide, setSlide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        if (items.length === 0) {\n            setItems(viewboxItems());\n        }\n    }, [swiperInstance, slide]);\n    const renderItems = (items) => {\n        return items.map((item, i) => {\n            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, { key: i },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { style: { height: '100vh' } }, i)));\n        });\n    };\n    if (swiperInstance && Object.keys(swiperInstance).length === 0)\n        return null;\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_scene__WEBPACK_IMPORTED_MODULE_3__.Scene, { style: { backgroundColor: _slider_data__WEBPACK_IMPORTED_MODULE_4__.data[slide].color } },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, { freeModeMomentumVelocityRatio: 4, freeModeMomentumRatio: 4, freeModeMomentumBounceRatio: 4, scrollbar: { draggable: true }, mousewheel: {\n                invert: false,\n            }, direction: 'horizontal', slidesPerView: 'auto', freeMode: true, onScroll: (swiper) => {\n                console.log(swiper);\n                if (swiper.isBeginning || swiper.isEnd) {\n                    swiperInstance === null || swiperInstance === void 0 ? void 0 : swiperInstance.mousewheel.enable();\n                }\n                else {\n                    swiperInstance === null || swiperInstance === void 0 ? void 0 : swiperInstance.slideTo(1, 600);\n                    swiperInstance === null || swiperInstance === void 0 ? void 0 : swiperInstance.mousewheel.disable();\n                    const body = document.querySelector('body');\n                    if (body) {\n                        body.style.overflow = 'hidden';\n                    }\n                }\n            }, onActiveIndexChange: (swiper) => {\n                setSlide(swiper.activeIndex);\n            } }, renderItems(items))));\n};\n\n\n//# sourceURL=webpack://app/./src/client/components/viewbox/Viewbox.tsx?");

/***/ }),

/***/ "./src/client/components/viewbox/index.ts":
/*!************************************************!*\
  !*** ./src/client/components/viewbox/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Viewbox\": () => (/* reexport safe */ _Viewbox__WEBPACK_IMPORTED_MODULE_0__.Viewbox)\n/* harmony export */ });\n/* harmony import */ var _Viewbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Viewbox */ \"./src/client/components/viewbox/Viewbox.tsx\");\n\n\n\n//# sourceURL=webpack://app/./src/client/components/viewbox/index.ts?");

/***/ }),

/***/ "./src/client/pages/Home.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/Home.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_slider_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/slider/Slider */ \"./src/client/components/slider/Slider.tsx\");\n/* harmony import */ var _components_landing___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/landing/ */ \"./src/client/components/landing/index.tsx\");\n/* harmony import */ var _components_viewbox___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/viewbox/ */ \"./src/client/components/viewbox/index.ts\");\n\n\n\n\nconst Div = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { style: { backgroundColor: 'black', height: '100vh' } }, \"Slide\"));\nconst HomePage = (props) => {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_slider_Slider__WEBPACK_IMPORTED_MODULE_1__.default, null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_landing___WEBPACK_IMPORTED_MODULE_2__.Landing, null),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_viewbox___WEBPACK_IMPORTED_MODULE_3__.Viewbox, null),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Div, null))));\n};\nconst loadData = () => {\n    console.log('load data');\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    component: HomePage,\n    loadData: loadData,\n});\n\n\n//# sourceURL=webpack://app/./src/client/pages/Home.tsx?");

/***/ }),

/***/ "./src/client/pages/NotFound.tsx":
/*!***************************************!*\
  !*** ./src/client/pages/NotFound.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NotFound = ({ staticContext }) => {\n    if (staticContext) {\n        staticContext.notFound = true;\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Oops route not found!\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    component: NotFound,\n});\n\n\n//# sourceURL=webpack://app/./src/client/pages/NotFound.tsx?");

/***/ }),

/***/ "./src/helpers/Html.tsx":
/*!******************************!*\
  !*** ./src/helpers/Html.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Html\": () => (/* binding */ Html)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Html = ({ content, state }) => {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"html\", { lang: \"en-us\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"head\", null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"link\", { rel: \"stylesheet\", href: \"/main.css\" })),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"body\", null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { id: \"root\", dangerouslySetInnerHTML: { __html: content } }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", { dangerouslySetInnerHTML: {\n                    __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, \"\\u003c\")};`,\n                } }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", { src: \"/bundle.js\" }))));\n};\n\n\n//# sourceURL=webpack://app/./src/helpers/Html.tsx?");

/***/ }),

/***/ "./src/helpers/apollo.ts":
/*!*******************************!*\
  !*** ./src/helpers/apollo.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"context\": () => (/* binding */ context)\n/* harmony export */ });\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ \"cross-fetch\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Apollo Setup\nconst client = (req) => new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    ssrMode: true,\n    // Remember that this is the interface the SSR server will use to connect to the\n    // API server, so we need to ensure it isn't firewalled, etc\n    link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)({\n        uri: \"http://localhost:4000/graphql\",\n        fetch: (cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()),\n        credentials: \"include\",\n        headers: {\n            cookie: req.header(\"Cookie\"),\n        },\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(),\n});\nconst context = {};\n\n\n//# sourceURL=webpack://app/./src/helpers/apollo.ts?");

/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Html\": () => (/* reexport safe */ _Html__WEBPACK_IMPORTED_MODULE_0__.Html),\n/* harmony export */   \"renderer\": () => (/* reexport safe */ _renderer__WEBPACK_IMPORTED_MODULE_1__.renderer),\n/* harmony export */   \"client\": () => (/* reexport safe */ _apollo__WEBPACK_IMPORTED_MODULE_2__.client),\n/* harmony export */   \"context\": () => (/* reexport safe */ _apollo__WEBPACK_IMPORTED_MODULE_2__.context)\n/* harmony export */ });\n/* harmony import */ var _Html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Html */ \"./src/helpers/Html.tsx\");\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ \"./src/helpers/renderer.tsx\");\n/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apollo */ \"./src/helpers/apollo.ts\");\n\n\n\n\n\n//# sourceURL=webpack://app/./src/helpers/index.ts?");

/***/ }),

/***/ "./src/helpers/renderer.tsx":
/*!**********************************!*\
  !*** ./src/helpers/renderer.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderer\": () => (/* binding */ renderer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/react/ssr */ \"@apollo/client/react/ssr\");\n/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.tsx\");\n/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apollo */ \"./src/helpers/apollo.ts\");\n/* harmony import */ var _Html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Html */ \"./src/helpers/Html.tsx\");\n\n\n\n\n\n\n\n\n\nconst renderer = (req, res) => {\n    const clientInstance = (0,_apollo__WEBPACK_IMPORTED_MODULE_7__.client)(req);\n    const initialState = clientInstance.extract();\n    const App = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, { client: clientInstance },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, { location: req.url, context: _apollo__WEBPACK_IMPORTED_MODULE_7__.context }, (0,react_router_config__WEBPACK_IMPORTED_MODULE_4__.renderRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_6__.Routes))));\n    const promises = (0,react_router_config__WEBPACK_IMPORTED_MODULE_4__.matchRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_6__.Routes, req.path)\n        .map(({ route }) => {\n        return route.loadData ? route.loadData(initialState) : null;\n    })\n        .map((promise) => {\n        if (promise) {\n            return new Promise((resolve, reject) => {\n                promise.then(resolve).catch(resolve);\n            });\n        }\n    });\n    (0,_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_5__.getDataFromTree)(App).then(() => {\n        Promise.all(promises).then(() => {\n            if (_apollo__WEBPACK_IMPORTED_MODULE_7__.context.url || _apollo__WEBPACK_IMPORTED_MODULE_7__.context.notFound) {\n                if (_apollo__WEBPACK_IMPORTED_MODULE_7__.context.url)\n                    return res.redirect(301, _apollo__WEBPACK_IMPORTED_MODULE_7__.context.url);\n                if (_apollo__WEBPACK_IMPORTED_MODULE_7__.context.notFound)\n                    res.status(404);\n            }\n            // We are ready to render for real\n            const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)(App);\n            const html = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Html__WEBPACK_IMPORTED_MODULE_8__.Html, { content: content, state: initialState });\n            res.status(200);\n            res.send(`<!doctype html>\n${(0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToStaticMarkup)(html)}`);\n            res.end();\n        });\n    });\n};\n\n\n//# sourceURL=webpack://app/./src/helpers/renderer.tsx?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/index */ \"./src/helpers/index.ts\");\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"dist\"));\n// Page Renderer\napp.use((req, res) => {\n    (0,_helpers_index__WEBPACK_IMPORTED_MODULE_1__.renderer)(req, res);\n});\napp.listen(3000, () => {\n    console.log(\"React SSR! is ready on PORT: 3000\");\n});\n\n\n//# sourceURL=webpack://app/./src/index.ts?");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@apollo/client/react/ssr");;

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("cross-fetch");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("swiper");;

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("swiper/react");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;