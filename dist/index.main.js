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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".projectModal {\\r\\n  display: none;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\nconst header = () => {\r\n  const titleHeader = document.createElement(\"header\");\r\n  titleHeader.className = \"h1-container\";\r\n  \r\n  const hTitle = document.createElement(\"h1\");\r\n  hTitle.innerHTML = \"To do Organizer\";\r\n  titleHeader.appendChild(hTitle);\r\n\r\n  return titleHeader;\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _ui_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-projects */ \"./src/ui-projects.js\");\n\r\n\r\n\r\ndocument.body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.default)());\r\ndocument.body.appendChild((0,_ui_projects__WEBPACK_IMPORTED_MODULE_1__.default)());\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory),\n/* harmony export */   \"projectProto\": () => (/* binding */ projectProto)\n/* harmony export */ });\n// prototype for project\r\n\r\nconst projectProto = {\r\n  addTask(task) {\r\n    this.tasks.push(task)\r\n  },\r\n  deleteTask(taskTitle) {\r\n    const taskIndex = this.tasks.findIndex( task => task.title === taskTitle);\r\n    return this.tasks.splice(taskIndex, 1);\r\n  },\r\n  getTasks() {\r\n    return this.tasks;\r\n  },\r\n}\r\n\r\n// factory function for project\r\n\r\nconst projectFactory = (title, tasks = []) => {\r\n  let obj = Object.create(projectProto);\r\n  obj.tasks = tasks;\r\n  obj.title = title;\r\n  return obj;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoFactory\": () => (/* binding */ todoFactory)\n/* harmony export */ });\n\r\n\r\n// To-do prototype \r\nconst todoProto = {\r\n  setDescription(str) {\r\n    this.description = str;\r\n  },\r\n  setPriority(int) {\r\n    this.priority = int;\r\n  },\r\n\r\n  setDate(date) {\r\n    this.date = date;\r\n  },\r\n  \r\n  getDescription() {\r\n    return this.description;\r\n  },\r\n  getPriority() {\r\n    return this.priority;\r\n  },\r\n  getDate() {\r\n    return this.date;\r\n  },\r\n  \r\n  // updateStatus() {\r\n    \r\n  // }\r\n}\r\n\r\n// factory function\r\nconst todoFactory = (title) => {\r\n  let obj = Object.create(todoProto);\r\n  obj.title = title;\r\n  return obj\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/ui-projects.js":
/*!****************************!*\
  !*** ./src/ui-projects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ panel)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _ui_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-tasks */ \"./src/ui-tasks.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n \r\n\r\n\r\n\r\nconst panel = () => {\r\n  let projects = [];\r\n  const element = document.createElement(\"aside\");\r\n  element.className = \"side-panel\";\r\n\r\n  const projectContainer = document.createElement(\"div\");\r\n  projectContainer.className = \"project-container\";\r\n\r\n  const getProjectsFromLS = () => {\r\n    if (localStorage.getItem(\"projects\") === null) {\r\n      projects = [];\r\n    } else {\r\n      projects = JSON.parse(localStorage.getItem(\"projects\"));\r\n    }\r\n    return projects;\r\n  }\r\n\r\n  const clearProjects = () => {\r\n    let projectsList = document.querySelector(\".projects-ul\");\r\n    projectsList.remove();\r\n  }\r\n\r\n  const createDeleteBtn = (project, projectLI) => {\r\n    let deleteBtn = document.createElement('button');\r\n    deleteBtn.innerHTML = \"Delete\";\r\n    projectLI.appendChild(deleteBtn);\r\n    deleteBtn.addEventListener('click', () => {\r\n      deleteProject(project);\r\n      displayProjects();\r\n    });\r\n  }\r\n\r\n  const createToDosBtn = (project, projectLI) => {\r\n    let toDosBtn = document.createElement('button');\r\n    toDosBtn.innerHTML = \"ToDos\";\r\n    projectLI.appendChild(toDosBtn);\r\n    toDosBtn.addEventListener('click', () => {\r\n      document.body.appendChild((0,_ui_tasks__WEBPACK_IMPORTED_MODULE_2__.toDos)(project));\r\n    });\r\n  }\r\n\r\n  const deleteProject = (project) => {\r\n    deleteProjectLS(project);\r\n    const deletedProject = document.querySelector(`.project-li-${project.id}`)\r\n    deletedProject.remove();\r\n  }\r\n\r\n  const displayProjects = () => {\r\n    if (projectContainer.children.length > 0) {\r\n      clearProjects();\r\n    }\r\n    const projectList = document.createElement(\"ul\");\r\n    projectList.className = \"projects-ul\";\r\n    getProjectsFromLS();\r\n    projects.forEach((project) => {\r\n      Object.setPrototypeOf(project, _project__WEBPACK_IMPORTED_MODULE_0__.projectProto)\r\n      let projectLink = document.createElement(\"li\");\r\n      projectLink.className = `project-li-${project.id}`;\r\n      projectLink.innerHTML = project.title;\r\n      createDeleteBtn(project, projectLink);\r\n      createToDosBtn(project, projectLink);\r\n      projectList.appendChild(projectLink);\r\n    });\r\n    projectContainer.appendChild(projectList);\r\n  }\r\n\r\n  if (localStorage.getItem(\"projects\") != null) {\r\n    displayProjects();\r\n  }\r\n\r\n  element.appendChild(projectContainer);\r\n\r\n  // New Project UI\r\n  const newProjectBtn = document.createElement(\"p\");\r\n  newProjectBtn.innerHTML = \"New project\";\r\n\r\n  const projectForm = document.createElement(\"form\");\r\n  projectForm.className = \"projectModal\";\r\n\r\n  const inputTitle = document.createElement(\"input\");\r\n  inputTitle.setAttribute(\"type\", \"text\");\r\n  inputTitle.setAttribute(\"name\", \"title\");\r\n  inputTitle.setAttribute(\"placeholder\", \"Project name\");\r\n\r\n  const submitBtn = document.createElement(\"input\");\r\n  submitBtn.setAttribute(\"type\", \"submit\");\r\n  submitBtn.setAttribute(\"value\", \"OK\");\r\n\r\n  projectForm.appendChild(inputTitle);\r\n  projectForm.appendChild(submitBtn);\r\n\r\n  const newProject = (str) => {\r\n    const myProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(str);\r\n\r\n    storeProjectLS(myProject);\r\n  };\r\n\r\n  // Store project ls\r\n\r\n  const storeProjectLS = (project) => {\r\n    if (localStorage.getItem(\"projects\") === null) {\r\n      projects = [];\r\n    } else {\r\n      projects = JSON.parse(localStorage.getItem(\"projects\"));\r\n    }\r\n    projects.push(project);\r\n    project.id = projects.indexOf(project);\r\n    localStorage.setItem(\"projects\", JSON.stringify(projects));\r\n\r\n    return projects;\r\n  }\r\n\r\n  // Delete project from localstorage\r\n   \r\n  const deleteProjectLS = myProject => {\r\n    projects = JSON.parse(localStorage.getItem(\"projects\"));\r\n    let projectIndex = projects.findIndex(project => myProject.title === project.title)\r\n    projects.splice(projectIndex, 1)\r\n    localStorage.setItem(\"projects\", JSON.stringify(projects));\r\n\r\n    return projects;\r\n  }\r\n\r\n  newProjectBtn.onclick = () => {\r\n    projectForm.style.display = \"block\";\r\n  };\r\n\r\n  projectForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    const title = projectForm.elements.title.value;\r\n    newProject(title);\r\n    projectForm.style.display = \"none\";\r\n    displayProjects();\r\n  }); // add client-side validations for empty or too long strings\r\n\r\n  element.appendChild(newProjectBtn);\r\n  element.appendChild(projectForm);\r\n\r\n  return element;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/ui-projects.js?");

/***/ }),

/***/ "./src/ui-tasks.js":
/*!*************************!*\
  !*** ./src/ui-tasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDos\": () => (/* binding */ toDos)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\nconst toDos = (project) => {\r\n let projectTasks = project.getTasks();\r\n\r\n  const displayTodos = () => {\r\n\r\n    const container = document.createElement(\"div\");\r\n    container.className = \"toDos-div\";\r\n\r\n    const ulContainer = document.createElement(\"ul\");\r\n    ulContainer.className = \"ul-container\";\r\n\r\n    projectTasks.forEach((task) => {\r\n      let taskLink = document.createElement(\"li\");\r\n      taskLink.className = `task-li-${task.id}`;\r\n      taskLink.innerHTML = task.title;\r\n            \r\n    });\r\n\r\n   //task.id = projectTasks.indexOf(task);\r\n\r\n    // New task\r\n\r\n    const newTaskBtn = document.createElement(\"h3\");\r\n    newTaskBtn.innerHTML = \"New Task\";\r\n\r\n    const taskForm = document.createElement(\"form\");\r\n    taskForm.className = \"taskModal\";\r\n\r\n    const inputTitle = document.createElement(\"input\");\r\n    inputTitle.setAttribute(\"type\", \"text\");\r\n    inputTitle.setAttribute(\"name\", \"title\");\r\n    inputTitle.setAttribute(\"placeholder\", \"Task name\");\r\n\r\n    const inputDescription = document.createElement(\"input\");\r\n    inputDescription.setAttribute(\"type\", \"text\");\r\n    inputDescription.setAttribute(\"name\", \"description\");\r\n    inputDescription.setAttribute(\"placeholder\", \"Description\");\r\n\r\n    const inputPriority = document.createElement(\"select\");\r\n    inputTitle.setAttribute(\"name\", \"priority\");\r\n\r\n    const optionOne = document.createElement(\"option\")\r\n    optionOne.setAttribute(\"value\", \"1\");\r\n    optionOne.innerHTML = \"High\";\r\n\r\n    inputPriority.appendChild(optionOne);\r\n\r\n    const optionTwo = document.createElement(\"option\")\r\n    optionTwo.setAttribute(\"value\", \"2\");\r\n    optionTwo.innerHTML = \"Medium\";\r\n\r\n    inputPriority.appendChild(optionTwo);\r\n\r\n    const optionThree = document.createElement(\"option\")\r\n    optionThree.setAttribute(\"value\", \"3\");\r\n    optionThree.innerHTML = \"Low\";\r\n\r\n    inputPriority.appendChild(optionThree);    \r\n    \r\n\r\n    const inputDate = document.createElement(\"input\");\r\n    inputDate.setAttribute(\"type\", \"date\");\r\n    inputDate.setAttribute(\"name\", \"date\");\r\n    inputDate.setAttribute(\"value\", \"yyyy-mm-dd\");\r\n      \r\n    const submitBtn = document.createElement(\"input\");\r\n    submitBtn.setAttribute(\"type\", \"submit\");\r\n    submitBtn.setAttribute(\"value\", \"OK\");\r\n \r\n    taskForm.appendChild(inputTitle);\r\n    taskForm.appendChild(inputDescription); \r\n    taskForm.appendChild(inputPriority);\r\n    taskForm.appendChild(inputDate);\r\n    taskForm.appendChild(submitBtn);\r\n    \r\n    container.appendChild(newTaskBtn);\r\n    container.appendChild(taskForm);\r\n\r\n\r\n    // Update project ls\r\n\r\n    const updateProjectLS = (project) => {\r\n      if (localStorage.getItem(\"projects\") === null) {\r\n        projects = [];\r\n      } else {\r\n        projects = JSON.parse(localStorage.getItem(\"projects\"));\r\n      }\r\n      let indexProject = projects.indexOf(project);\r\n      projects[indexProject] = project;     \r\n      localStorage.setItem(\"projects\", JSON.stringify(projects));\r\n    }\r\n\r\n    \r\n\r\n    taskForm.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      const title = taskForm.elements.title.value;\r\n      const description = taskForm.elements.description.value; \r\n      const priority = taskForm.elements.priority.value;\r\n      const date = taskForm.elements.date.value;\r\n\r\n      let myTask = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(title, description, priority, date);\r\n      project.addTask(myTask);\r\n\r\n      updateProjectLS(project); \r\n\r\n    })\r\n\r\n\r\n\r\n\r\n\r\n    return container;\r\n  \r\n  }\r\n\r\n  return displayTodos();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/ui-tasks.js?");

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
/******/ 			id: moduleId,
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;