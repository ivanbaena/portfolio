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

/***/ "./src/client/components/project/projects.module.css":
/*!***********************************************************!*\
  !*** ./src/client/components/project/projects.module.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"container\":\"-nbAA3fgGCmEIT2aT-lzR\"});\n\n//# sourceURL=webpack://app/./src/client/components/project/projects.module.css?");

/***/ }),

/***/ "./src/client/Routes.tsx":
/*!*******************************!*\
  !*** ./src/client/Routes.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Routes\": () => (/* binding */ Routes)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/client/app.tsx\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home */ \"./src/client/pages/Home.tsx\");\n/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/NotFound */ \"./src/client/pages/NotFound.tsx\");\n/* harmony import */ var _pages_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/admin */ \"./src/client/pages/admin.tsx\");\n\n\n\n\nconst Routes = [\n    Object.assign(Object.assign({}, _app__WEBPACK_IMPORTED_MODULE_0__.default), { routes: [\n            Object.assign(Object.assign({}, _pages_Home__WEBPACK_IMPORTED_MODULE_1__.default), { path: '/', exact: true }),\n            Object.assign(Object.assign({}, _pages_admin__WEBPACK_IMPORTED_MODULE_3__.default), { path: '/admin', exact: true }),\n            Object.assign({}, _pages_NotFound__WEBPACK_IMPORTED_MODULE_2__.default),\n        ] }),\n];\n\n\n//# sourceURL=webpack://app/./src/client/Routes.tsx?");

/***/ }),

/***/ "./src/client/app.tsx":
/*!****************************!*\
  !*** ./src/client/app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst App = ({ route }) => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(route.routes));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    component: App,\n});\n\n\n//# sourceURL=webpack://app/./src/client/app.tsx?");

/***/ }),

/***/ "./src/client/components/form/form.tsx":
/*!*********************************************!*\
  !*** ./src/client/components/form/form.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst renderInputs = (refs, inputs) => {\n    const ex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    return inputs.map((input, i) => {\n        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: 'field', key: i },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", { className: 'label' }, input),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: 'control' },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", { ref: refs[input], className: 'input', type: 'text', placeholder: `${input}-text`, name: input }))));\n    });\n};\nconst Form = ({ inputs, mutationCallback }) => {\n    let refs = {};\n    for (const input of inputs) {\n        refs = Object.assign(Object.assign({}, refs), { [input]: (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)() });\n    }\n    const handleOnSubmit = (e) => {\n        var _a, _b;\n        e.preventDefault();\n        let obj = {};\n        for (const ref in refs) {\n            if (ref === 'keywords') {\n                obj = Object.assign(Object.assign({}, obj), { [ref]: (_a = refs[ref].current) === null || _a === void 0 ? void 0 : _a.value.split(',') });\n            }\n            else\n                obj = Object.assign(Object.assign({}, obj), { [ref]: (_b = refs[ref].current) === null || _b === void 0 ? void 0 : _b.value });\n        }\n        mutationCallback({ variables: obj });\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: 'columns' },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", { className: 'column is-half is-offset-one-quarter', onSubmit: handleOnSubmit },\n            renderInputs(refs, inputs),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { type: 'submit' }, \"Submit\"))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n\n//# sourceURL=webpack://app/./src/client/components/form/form.tsx?");

/***/ }),

/***/ "./src/client/components/form/index.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/form/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/client/components/form/form.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_form__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n//# sourceURL=webpack://app/./src/client/components/form/index.tsx?");

/***/ }),

/***/ "./src/client/components/project/add-project/add-project.tsx":
/*!*******************************************************************!*\
  !*** ./src/client/components/project/add-project/add-project.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mutations */ \"./src/client/mutations/index.ts\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form */ \"./src/client/components/form/index.tsx\");\n\n\n\n\nconst AddProject = () => {\n    const [addProject, { data }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_mutations__WEBPACK_IMPORTED_MODULE_2__.POST_PROJECT);\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"Create a Project\"),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form__WEBPACK_IMPORTED_MODULE_3__.default, { inputs: ['name', 'brief', 'keywords', 'github', 'main', 'img'], mutationCallback: addProject, data: data && data })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProject);\n\n\n//# sourceURL=webpack://app/./src/client/components/project/add-project/add-project.tsx?");

/***/ }),

/***/ "./src/client/components/project/add-project/index.tsx":
/*!*************************************************************!*\
  !*** ./src/client/components/project/add-project/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project */ \"./src/client/components/project/add-project/add-project.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_add_project__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n//# sourceURL=webpack://app/./src/client/components/project/add-project/index.tsx?");

/***/ }),

/***/ "./src/client/components/project/index.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/project/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/client/components/project/projects.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_projects__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n//# sourceURL=webpack://app/./src/client/components/project/index.tsx?");

/***/ }),

/***/ "./src/client/components/project/project/project.tsx":
/*!***********************************************************!*\
  !*** ./src/client/components/project/project/project.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Project = ({ name, brief, keywords, main, github, img, }) => {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, name),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", { src: img, alt: name }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, brief),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, keywords.map((keyword, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", { key: i }, keyword)))),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", { href: '#' }, github),\n            \" \",\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", { href: '#' }, main))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://app/./src/client/components/project/project/project.tsx?");

/***/ }),

/***/ "./src/client/components/project/projects.tsx":
/*!****************************************************!*\
  !*** ./src/client/components/project/projects.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _project_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project */ \"./src/client/components/project/project/project.tsx\");\n/* harmony import */ var _projects_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.module.css */ \"./src/client/components/project/projects.module.css\");\n/* harmony import */ var _queries___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queries/ */ \"./src/client/queries/index.ts\");\n\n\n\n\n\nconst Projects = () => {\n    const { loading, error, data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_queries___WEBPACK_IMPORTED_MODULE_4__.GET_PROJECTS, { ssr: false });\n    if (loading)\n        return 'Loading...';\n    if (error)\n        return `Error! ${error.message}`;\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _projects_module_css__WEBPACK_IMPORTED_MODULE_3__.default.container }, data.projects.map((project, i) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_project_project__WEBPACK_IMPORTED_MODULE_2__.default, Object.assign({}, project, { key: i }));\n    })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n\n//# sourceURL=webpack://app/./src/client/components/project/projects.tsx?");

/***/ }),

/***/ "./src/client/mutations/index.ts":
/*!***************************************!*\
  !*** ./src/client/mutations/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"POST_PROJECT\": () => (/* reexport safe */ _project__WEBPACK_IMPORTED_MODULE_0__.POST_PROJECT)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/client/mutations/project.ts\");\n\n\n\n//# sourceURL=webpack://app/./src/client/mutations/index.ts?");

/***/ }),

/***/ "./src/client/mutations/project.ts":
/*!*****************************************!*\
  !*** ./src/client/mutations/project.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"POST_PROJECT\": () => (/* binding */ POST_PROJECT)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst POST_PROJECT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `\n  mutation AddProject(\n    $name: String!\n    $brief: String!\n    $keywords: [String!]\n    $github: String!\n    $main: String!\n    $img: String!\n  ) {\n    addProject(\n      name: $name\n      brief: $brief\n      keywords: $keywords\n      github: $github\n      main: $main\n      img: $img\n    ) {\n      _id\n    }\n  }\n`;\n\n\n//# sourceURL=webpack://app/./src/client/mutations/project.ts?");

/***/ }),

/***/ "./src/client/pages/Home.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/Home.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/project */ \"./src/client/components/project/index.tsx\");\n\n\nconst HomePage = (props) => {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Home Page\"),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_project__WEBPACK_IMPORTED_MODULE_1__.default, null)));\n};\nconst loadData = () => { };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    component: HomePage,\n    loadData: loadData,\n});\n\n\n//# sourceURL=webpack://app/./src/client/pages/Home.tsx?");

/***/ }),

/***/ "./src/client/pages/NotFound.tsx":
/*!***************************************!*\
  !*** ./src/client/pages/NotFound.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NotFound = ({ staticContext }) => {\n    if (staticContext) {\n        staticContext.notFound = true;\n    }\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Oops route not found!\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    component: NotFound,\n});\n\n\n//# sourceURL=webpack://app/./src/client/pages/NotFound.tsx?");

/***/ }),

/***/ "./src/client/pages/admin.tsx":
/*!************************************!*\
  !*** ./src/client/pages/admin.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_project_add_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/project/add-project */ \"./src/client/components/project/add-project/index.tsx\");\n\n\nconst Admin = () => {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Admin\"),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_project_add_project__WEBPACK_IMPORTED_MODULE_1__.default, null)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    component: Admin,\n    loadData: () => { },\n});\n\n\n//# sourceURL=webpack://app/./src/client/pages/admin.tsx?");

/***/ }),

/***/ "./src/client/queries/index.ts":
/*!*************************************!*\
  !*** ./src/client/queries/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_PROJECTS\": () => (/* reexport safe */ _project__WEBPACK_IMPORTED_MODULE_0__.GET_PROJECTS)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/client/queries/project.ts\");\n\n\n\n//# sourceURL=webpack://app/./src/client/queries/index.ts?");

/***/ }),

/***/ "./src/client/queries/project.ts":
/*!***************************************!*\
  !*** ./src/client/queries/project.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_PROJECTS\": () => (/* binding */ GET_PROJECTS)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_PROJECTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `\n  query GetProjects {\n    projects {\n      name\n      brief\n      keywords\n      github\n      main\n      img\n    }\n  }\n`;\n\n\n//# sourceURL=webpack://app/./src/client/queries/project.ts?");

/***/ }),

/***/ "./src/helpers/apollo.ts":
/*!*******************************!*\
  !*** ./src/helpers/apollo.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"context\": () => (/* binding */ context)\n/* harmony export */ });\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ \"cross-fetch\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Apollo Setup\nconst client = (req) => new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    ssrMode: true,\n    // Remember that this is the interface the SSR server will use to connect to the\n    // API server, so we need to ensure it isn't firewalled, etc\n    link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)({\n        uri: 'http://localhost:4000/graphql',\n        fetch: (cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()),\n        credentials: 'same-origin',\n        headers: {\n            cookie: req.header('Cookie'),\n        },\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(),\n});\nconst context = {};\n\n\n//# sourceURL=webpack://app/./src/helpers/apollo.ts?");

/***/ }),

/***/ "./src/helpers/html.tsx":
/*!******************************!*\
  !*** ./src/helpers/html.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Html\": () => (/* binding */ Html)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Html = ({ content, state }) => {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"html\", { lang: 'en-us' },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"head\", null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"link\", { rel: 'stylesheet', href: '/main.css' })),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"body\", null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { id: 'root', dangerouslySetInnerHTML: { __html: content } }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", { dangerouslySetInnerHTML: {\n                    __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\\\u003c')};`,\n                } })),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", { src: '/bundle.js' })));\n};\n\n\n//# sourceURL=webpack://app/./src/helpers/html.tsx?");

/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Html\": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_0__.Html),\n/* harmony export */   \"renderer\": () => (/* reexport safe */ _renderer__WEBPACK_IMPORTED_MODULE_1__.renderer),\n/* harmony export */   \"client\": () => (/* reexport safe */ _apollo__WEBPACK_IMPORTED_MODULE_2__.client),\n/* harmony export */   \"context\": () => (/* reexport safe */ _apollo__WEBPACK_IMPORTED_MODULE_2__.context)\n/* harmony export */ });\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html */ \"./src/helpers/html.tsx\");\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ \"./src/helpers/renderer.tsx\");\n/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apollo */ \"./src/helpers/apollo.ts\");\n\n\n\n\n\n//# sourceURL=webpack://app/./src/helpers/index.ts?");

/***/ }),

/***/ "./src/helpers/renderer.tsx":
/*!**********************************!*\
  !*** ./src/helpers/renderer.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderer\": () => (/* binding */ renderer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/react/ssr */ \"@apollo/client/react/ssr\");\n/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.tsx\");\n/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apollo */ \"./src/helpers/apollo.ts\");\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html */ \"./src/helpers/html.tsx\");\n\n\n\n\n\n\n\n\n\nconst renderer = (req, res) => {\n    const clientInstance = (0,_apollo__WEBPACK_IMPORTED_MODULE_7__.client)(req);\n    console.log('IVAN_CLIENT,', clientInstance);\n    const initialState = clientInstance.extract();\n    const App = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, { client: clientInstance },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, { location: req.url, context: _apollo__WEBPACK_IMPORTED_MODULE_7__.context }, (0,react_router_config__WEBPACK_IMPORTED_MODULE_4__.renderRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_6__.Routes))));\n    const promises = (0,react_router_config__WEBPACK_IMPORTED_MODULE_4__.matchRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_6__.Routes, req.path)\n        .map(({ route }) => {\n        return route.loadData ? route.loadData(initialState) : null;\n    })\n        .map((promise) => {\n        if (promise) {\n            return new Promise((resolve, reject) => {\n                promise.then(resolve).catch(resolve);\n            });\n        }\n    });\n    (0,_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_5__.getDataFromTree)(App).then(() => {\n        Promise.all(promises).then(() => {\n            if (_apollo__WEBPACK_IMPORTED_MODULE_7__.context.url || _apollo__WEBPACK_IMPORTED_MODULE_7__.context.notFound) {\n                if (_apollo__WEBPACK_IMPORTED_MODULE_7__.context.url)\n                    return res.redirect(301, _apollo__WEBPACK_IMPORTED_MODULE_7__.context.url);\n                if (_apollo__WEBPACK_IMPORTED_MODULE_7__.context.notFound)\n                    res.status(404);\n            }\n            // We are ready to render for real\n            const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)(App);\n            const html = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_html__WEBPACK_IMPORTED_MODULE_8__.Html, { content: content, state: initialState });\n            res.status(200);\n            res.send(`<!doctype html>${(0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToStaticMarkup)(html)}`);\n            res.end();\n        });\n    });\n};\n\n\n//# sourceURL=webpack://app/./src/helpers/renderer.tsx?");

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