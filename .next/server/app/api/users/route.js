/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/route";
exports.ids = ["app/api/users/route"];
exports.modules = {

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("better-sqlite3");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=%2Fhome%2Favetis%2FDesktop%2Fpicsart-lessons%2Fcrud%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Favetis%2FDesktop%2Fpicsart-lessons%2Fcrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=%2Fhome%2Favetis%2FDesktop%2Fpicsart-lessons%2Fcrud%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Favetis%2FDesktop%2Fpicsart-lessons%2Fcrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_avetis_Desktop_picsart_lessons_crud_src_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/route.ts */ \"(rsc)/./src/app/api/users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/route\",\n        pathname: \"/api/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/route\"\n    },\n    resolvedPagePath: \"/home/avetis/Desktop/picsart-lessons/crud/src/app/api/users/route.ts\",\n    nextConfigOutput,\n    userland: _home_avetis_Desktop_picsart_lessons_crud_src_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGYXZldGlzJTJGRGVza3RvcCUyRnBpY3NhcnQtbGVzc29ucyUyRmNydWQlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZhdmV0aXMlMkZEZXNrdG9wJTJGcGljc2FydC1sZXNzb25zJTJGY3J1ZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDb0I7QUFDakc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXUvP2E4MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL2F2ZXRpcy9EZXNrdG9wL3BpY3NhcnQtbGVzc29ucy9jcnVkL3NyYy9hcHAvYXBpL3VzZXJzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2Vycy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL2F2ZXRpcy9EZXNrdG9wL3BpY3NhcnQtbGVzc29ucy9jcnVkL3NyYy9hcHAvYXBpL3VzZXJzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=%2Fhome%2Favetis%2FDesktop%2Fpicsart-lessons%2Fcrud%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Favetis%2FDesktop%2Fpicsart-lessons%2Fcrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/_lib/model.ts":
/*!*******************************!*\
  !*** ./src/app/_lib/model.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllUsers: () => (/* binding */ getAllUsers),\n/* harmony export */   getUserByLogin: () => (/* binding */ getUserByLogin),\n/* harmony export */   insertUser: () => (/* binding */ insertUser)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sql = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())('auth.db');\nconst getUserByLogin = (login)=>{\n    const user = sql.prepare(\"SELECT * FROM users where login = ?\").get(login);\n    if (user) {\n        return user;\n    }\n    return null;\n};\nconst getAllUsers = ()=>{\n    return sql.prepare(`SELECT * FROM users`).all();\n};\nconst insertUser = (user)=>{\n    return sql.prepare(`INSERT INTO users(name, surname, login, password)\n                        VALUES(@name, @surname, @login, @password)`).run(user);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL19saWIvbW9kZWwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsTUFBTSxJQUFJRCx1REFBRUEsQ0FBQztBQUVaLE1BQU1FLGlCQUFpQixDQUFDQztJQUMzQixNQUFNQyxPQUFPSCxJQUFJSSxPQUFPLENBQUMsdUNBQXVDQyxHQUFHLENBQUNIO0lBQ3BFLElBQUdDLE1BQUs7UUFDSixPQUFPQTtJQUNYO0lBQ0EsT0FBTztBQUNYLEVBQUM7QUFFTSxNQUFNRyxjQUFjO0lBQ3ZCLE9BQU9OLElBQUlJLE9BQU8sQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQUVHLEdBQUc7QUFDakQsRUFBQztBQUVNLE1BQU1DLGFBQWEsQ0FBQ0w7SUFDdkIsT0FBT0gsSUFBSUksT0FBTyxDQUFDLENBQUM7a0VBQzBDLENBQUMsRUFBRUssR0FBRyxDQUFDTjtBQUN6RSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXUvLi9zcmMvYXBwL19saWIvbW9kZWwudHM/ODY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnYmV0dGVyLXNxbGl0ZTMnXG5pbXBvcnQgeyBJbnB1dFVzZXIsIElVc2VyIH0gZnJvbSAnLi90eXBlcydcbmNvbnN0IHNxbCA9IG5ldyBkYignYXV0aC5kYicpXG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyQnlMb2dpbiA9IChsb2dpbjpzdHJpbmcpOihJVXNlcnxudWxsKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IHNxbC5wcmVwYXJlKFwiU0VMRUNUICogRlJPTSB1c2VycyB3aGVyZSBsb2dpbiA9ID9cIikuZ2V0KGxvZ2luKVxuICAgIGlmKHVzZXIpe1xuICAgICAgICByZXR1cm4gdXNlciBhcyBJVXNlclxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNxbC5wcmVwYXJlKGBTRUxFQ1QgKiBGUk9NIHVzZXJzYCkuYWxsKClcbn1cblxuZXhwb3J0IGNvbnN0IGluc2VydFVzZXIgPSAodXNlcjogSW5wdXRVc2VyKSA9PiB7XG4gICAgcmV0dXJuIHNxbC5wcmVwYXJlKGBJTlNFUlQgSU5UTyB1c2VycyhuYW1lLCBzdXJuYW1lLCBsb2dpbiwgcGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICBWQUxVRVMoQG5hbWUsIEBzdXJuYW1lLCBAbG9naW4sIEBwYXNzd29yZClgKS5ydW4odXNlcilcbn0iXSwibmFtZXMiOlsiZGIiLCJzcWwiLCJnZXRVc2VyQnlMb2dpbiIsImxvZ2luIiwidXNlciIsInByZXBhcmUiLCJnZXQiLCJnZXRBbGxVc2VycyIsImFsbCIsImluc2VydFVzZXIiLCJydW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/_lib/model.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/_lib/validation.ts":
/*!************************************!*\
  !*** ./src/app/_lib/validation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fieldsValidation: () => (/* binding */ fieldsValidation)\n/* harmony export */ });\nconst fieldsValidation = (body)=>{\n    const { name, surname, login, password } = body;\n    if (!name.trim() || !surname.trim() || !login.trim() || !password.trim()) {\n        return Response.json({\n            status: 'error',\n            message: 'Fill in all fields',\n            payload: null\n        });\n    }\n    if (password.length <= 6) {\n        return Response.json({\n            status: 'error',\n            message: 'The password must be at least six',\n            paylaod: null\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL19saWIvdmFsaWRhdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTUEsbUJBQW1CLENBQUNDO0lBQzdCLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFDLEdBQUdKO0lBRXpDLElBQUcsQ0FBQ0MsS0FBS0ksSUFBSSxNQUFNLENBQUNILFFBQVFHLElBQUksTUFBTSxDQUFDRixNQUFNRSxJQUFJLE1BQU0sQ0FBQ0QsU0FBU0MsSUFBSSxJQUFJO1FBQ3JFLE9BQU9DLFNBQVNDLElBQUksQ0FBQztZQUNqQkMsUUFBUTtZQUNSQyxTQUFTO1lBQ1RDLFNBQVM7UUFDYjtJQUNKO0lBRUEsSUFBR04sU0FBU08sTUFBTSxJQUFJLEdBQUc7UUFDckIsT0FBT0wsU0FBU0MsSUFBSSxDQUFDO1lBQ2pCQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEcsU0FBUztRQUNiO0lBQ0o7QUFDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXUvLi9zcmMvYXBwL19saWIvdmFsaWRhdGlvbi50cz84ZjQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0VXNlciB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBmaWVsZHNWYWxpZGF0aW9uID0gKGJvZHk6IElucHV0VXNlcikgPT4ge1xuICAgIGNvbnN0IHtuYW1lLCBzdXJuYW1lLCBsb2dpbiwgcGFzc3dvcmR9ID0gYm9keVxuXG4gICAgaWYoIW5hbWUudHJpbSgpIHx8ICFzdXJuYW1lLnRyaW0oKSB8fCAhbG9naW4udHJpbSgpIHx8ICFwYXNzd29yZC50cmltKCkpIHtcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0ZpbGwgaW4gYWxsIGZpZWxkcycsXG4gICAgICAgICAgICBwYXlsb2FkOiBudWxsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYocGFzc3dvcmQubGVuZ3RoIDw9IDYpIHtcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IHNpeCcsXG4gICAgICAgICAgICBwYXlsYW9kOiBudWxsXG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJmaWVsZHNWYWxpZGF0aW9uIiwiYm9keSIsIm5hbWUiLCJzdXJuYW1lIiwibG9naW4iLCJwYXNzd29yZCIsInRyaW0iLCJSZXNwb25zZSIsImpzb24iLCJzdGF0dXMiLCJtZXNzYWdlIiwicGF5bG9hZCIsImxlbmd0aCIsInBheWxhb2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/_lib/validation.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/route.ts":
/*!************************************!*\
  !*** ./src/app/api/users/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_lib_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/_lib/model */ \"(rsc)/./src/app/_lib/model.ts\");\n/* harmony import */ var _app_lib_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_lib/validation */ \"(rsc)/./src/app/_lib/validation.ts\");\n\n\nconst POST = async (req)=>{\n    const body = await req.json();\n    const validate = await (0,_app_lib_validation__WEBPACK_IMPORTED_MODULE_1__.fieldsValidation)(body)?.json().then((response)=>response);\n    if (validate.status == 'error') {\n        return Response.json(validate);\n    }\n    const checkLogin = await (0,_app_lib_model__WEBPACK_IMPORTED_MODULE_0__.getUserByLogin)(body.login);\n    if (checkLogin) {\n        return Response.json({\n            status: 'error',\n            message: 'A user with that name already exists',\n            payload: null\n        });\n    }\n    const result = (0,_app_lib_model__WEBPACK_IMPORTED_MODULE_0__.insertUser)(body);\n    if (result.changes == 1) {\n        return Response.json({\n            status: 'ok',\n            message: '',\n            payload: {\n                ...body,\n                id: result.lastInsertRowid\n            }\n        });\n    } else {\n        return Response.json({\n            status: 'error',\n            message: 'Internal server error',\n            payload: null\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEQ7QUFFTDtBQUdsRCxNQUFNRyxPQUFPLE9BQU9DO0lBQ3ZCLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtJQUUzQixNQUFNQyxXQUFXLE1BQU1MLHFFQUFnQkEsQ0FBQ0csT0FBT0MsT0FBT0UsS0FBS0MsQ0FBQUEsV0FBWUE7SUFFdkUsSUFBR0YsU0FBU0csTUFBTSxJQUFJLFNBQVM7UUFDM0IsT0FBT0MsU0FBU0wsSUFBSSxDQUFDQztJQUN6QjtJQUVBLE1BQU1LLGFBQWEsTUFBTVosOERBQWNBLENBQUNLLEtBQUtRLEtBQUs7SUFHbEQsSUFBR0QsWUFBWTtRQUNYLE9BQU9ELFNBQVNMLElBQUksQ0FBQztZQUNqQkksUUFBUTtZQUNSSSxTQUFTO1lBQ1RDLFNBQVM7UUFDYjtJQUNKO0lBRUEsTUFBTUMsU0FBU2YsMERBQVVBLENBQUNJO0lBRTFCLElBQUdXLE9BQU9DLE9BQU8sSUFBSSxHQUFHO1FBQ3BCLE9BQU9OLFNBQVNMLElBQUksQ0FBQztZQUNqQkksUUFBUTtZQUNSSSxTQUFTO1lBQ1RDLFNBQVM7Z0JBQ0wsR0FBR1YsSUFBSTtnQkFDUGEsSUFBSUYsT0FBT0csZUFBZTtZQUM5QjtRQUNKO0lBQ0osT0FBTTtRQUNGLE9BQU9SLFNBQVNMLElBQUksQ0FBQztZQUNqQkksUUFBUTtZQUNSSSxTQUFTO1lBQ1RDLFNBQVM7UUFDYjtJQUNKO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1Ly4vc3JjL2FwcC9hcGkvdXNlcnMvcm91dGUudHM/ODkzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRVc2VyQnlMb2dpbiwgaW5zZXJ0VXNlciB9IGZyb20gXCJAL2FwcC9fbGliL21vZGVsXCI7XG5pbXBvcnQgeyBJbnB1dFVzZXIsIElSZXNwb25zZSB9IGZyb20gXCJAL2FwcC9fbGliL3R5cGVzXCI7XG5pbXBvcnQgeyBmaWVsZHNWYWxpZGF0aW9uIH0gZnJvbSBcIkAvYXBwL19saWIvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IFBPU1QgPSBhc3luYyAocmVxOiBOZXh0UmVxdWVzdCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpIGFzIElucHV0VXNlclxuXG4gICAgY29uc3QgdmFsaWRhdGUgPSBhd2FpdCBmaWVsZHNWYWxpZGF0aW9uKGJvZHkpPy5qc29uKCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZSlcblxuICAgIGlmKHZhbGlkYXRlLnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHZhbGlkYXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrTG9naW4gPSBhd2FpdCBnZXRVc2VyQnlMb2dpbihib2R5LmxvZ2luKVxuXG5cbiAgICBpZihjaGVja0xvZ2luKSB7XG4gICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBIHVzZXIgd2l0aCB0aGF0IG5hbWUgYWxyZWFkeSBleGlzdHMnLFxuICAgICAgICAgICAgcGF5bG9hZDogbnVsbFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGluc2VydFVzZXIoYm9keSlcblxuICAgIGlmKHJlc3VsdC5jaGFuZ2VzID09IDEpIHtcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgLi4uYm9keSxcbiAgICAgICAgICAgICAgICBpZDogcmVzdWx0Lmxhc3RJbnNlcnRSb3dpZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSBcbiAgICB9ZWxzZSB7XG4gICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InLFxuICAgICAgICAgICAgcGF5bG9hZDogbnVsbFxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiZ2V0VXNlckJ5TG9naW4iLCJpbnNlcnRVc2VyIiwiZmllbGRzVmFsaWRhdGlvbiIsIlBPU1QiLCJyZXEiLCJib2R5IiwianNvbiIsInZhbGlkYXRlIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiUmVzcG9uc2UiLCJjaGVja0xvZ2luIiwibG9naW4iLCJtZXNzYWdlIiwicGF5bG9hZCIsInJlc3VsdCIsImNoYW5nZXMiLCJpZCIsImxhc3RJbnNlcnRSb3dpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=%2Fhome%2Favetis%2FDesktop%2Fpicsart-lessons%2Fcrud%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Favetis%2FDesktop%2Fpicsart-lessons%2Fcrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();