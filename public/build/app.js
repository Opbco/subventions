(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$":
/*!******************************************************!*\
  !*** ./assets/react/controllers/ sync \.(j%7Ct)sx?$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Components/Badge.jsx": "./assets/react/controllers/Components/Badge.jsx",
	"./Components/BreadCrumbs.jsx": "./assets/react/controllers/Components/BreadCrumbs.jsx",
	"./Components/Contact.jsx": "./assets/react/controllers/Components/Contact.jsx",
	"./Components/Copyright.jsx": "./assets/react/controllers/Components/Copyright.jsx",
	"./Components/Header.jsx": "./assets/react/controllers/Components/Header.jsx",
	"./Components/SideBar.jsx": "./assets/react/controllers/Components/SideBar.jsx",
	"./Components/TopBar.jsx": "./assets/react/controllers/Components/TopBar.jsx",
	"./Components/demandes/DemandePieces.jsx": "./assets/react/controllers/Components/demandes/DemandePieces.jsx",
	"./Components/demandes/ImprimeEts.jsx": "./assets/react/controllers/Components/demandes/ImprimeEts.jsx",
	"./Components/structures/Entete.jsx": "./assets/react/controllers/Components/structures/Entete.jsx",
	"./Components/structures/StructureDetails.jsx": "./assets/react/controllers/Components/structures/StructureDetails.jsx",
	"./Components/users/resetForm.js": "./assets/react/controllers/Components/users/resetForm.js",
	"./Components/users/signinForm.js": "./assets/react/controllers/Components/users/signinForm.js",
	"./Components/users/signupForm.js": "./assets/react/controllers/Components/users/signupForm.js",
	"./Error.jsx": "./assets/react/controllers/Error.jsx",
	"./Main.jsx": "./assets/react/controllers/Main.jsx",
	"./Pages/Home.jsx": "./assets/react/controllers/Pages/Home.jsx",
	"./Pages/MyCompteBancaire.jsx": "./assets/react/controllers/Pages/MyCompteBancaire.jsx",
	"./Pages/MyDemandes.jsx": "./assets/react/controllers/Pages/MyDemandes.jsx",
	"./Pages/NewDemande.jsx": "./assets/react/controllers/Pages/NewDemande.jsx",
	"./Pages/PageLayout.jsx": "./assets/react/controllers/Pages/PageLayout.jsx",
	"./Pages/SignIn.jsx": "./assets/react/controllers/Pages/SignIn.jsx",
	"./redux/actions/UserActions.js": "./assets/react/controllers/redux/actions/UserActions.js",
	"./redux/actions/configActions.js": "./assets/react/controllers/redux/actions/configActions.js",
	"./redux/reducers/UserReducer.js": "./assets/react/controllers/redux/reducers/UserReducer.js",
	"./redux/reducers/configReducer.js": "./assets/react/controllers/redux/reducers/configReducer.js",
	"./redux/requests/publicAxios.js": "./assets/react/controllers/redux/requests/publicAxios.js",
	"./redux/requests/useApiAxios.js": "./assets/react/controllers/redux/requests/useApiAxios.js",
	"./redux/services/openApi.js": "./assets/react/controllers/redux/services/openApi.js",
	"./redux/store.js": "./assets/react/controllers/redux/store.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-react/dist/render_controller.js */ "./node_modules/@symfony/ux-react/dist/render_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-react */ "./node_modules/@symfony/ux-react/dist/register_controller.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


// assets/app.js


// Registers React controller components to allow loading them from Twig
//
// React controller components are components that are meant to be rendered
// from Twig. These component then rely on other components that won't be called
// directly from Twig.
//
// By putting only controller components in `react/controllers`, you ensure that
// internal components won't be automatically included in your JS built file if
// they are not necessary.
(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/react/controllers/Components/Badge.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/controllers/Components/Badge.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Badge": () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _excluded = ["children", "variant", "shape"];
var _templateObject;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StyledBadge = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-width: 18px;\n  min-height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ", ";\n  padding: ", ";\n  font-size: 11px;\n  font-weight: 600;\n\n  ", "\n"])), function (_ref) {
  var shape = _ref.shape;
  return shape === "circle" ? "50%" : "16px";
}, function (_ref2) {
  var shape = _ref2.shape;
  return shape === "circle" ? "0" : "0 6px";
}, function (_ref3) {
  var variant = _ref3.variant;
  switch (variant) {
    case "info":
      return "\n                background-color: #048acd;\n                color: #fff;\n                ";
    case "success":
      return "\n                background-color: #0cbb34;\n                color: #fff;\n\n                ";
    case "danger":
      return "\n                background-color: #fb3939;\n                color: #fff;\n\n                ";
    case "warning":
      return "\n                background-color: #e25807;\n                color: #fff;\n\n                ";
  }
});
var Badge = function Badge(_ref4) {
  var children = _ref4.children,
    _ref4$variant = _ref4.variant,
    variant = _ref4$variant === void 0 ? "info" : _ref4$variant,
    _ref4$shape = _ref4.shape,
    shape = _ref4$shape === void 0 ? "rounded" : _ref4$shape,
    rest = _objectWithoutProperties(_ref4, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledBadge, _extends({
    variant: variant,
    shape: shape
  }, rest), children);
};

/***/ }),

/***/ "./assets/react/controllers/Components/BreadCrumbs.jsx":
/*!*************************************************************!*\
  !*** ./assets/react/controllers/Components/BreadCrumbs.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/theme */ "./assets/react/utils/theme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../redux/actions/configActions */ "./assets/react/controllers/redux/actions/configActions.js");






var BreadCrumbs = function BreadCrumbs(props) {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var colors = (0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.tokens)(theme.palette.mode);
  var pathname = location.pathname;
  var handleDelete = function handleDelete(e, item) {
    props.removeMenuBread(item);
    e.preventDefault();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    "aria-label": "breadcrumb",
    style: {
      backgroundColor: colors.primary[400]
    },
    className: "breadcrumb-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", {
    className: "breadcrumb"
  }, pathname != "/" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "breadcrumb-item",
    key: "HomeStart",
    onClick: function onClick() {
      return props.clearMenuBread();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/"
  }, props.t("home"))), props.menus.map(function (menu, index) {
    if (menu) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "breadcrumb-item ".concat(pathname == menu.to && "active"),
        key: "breadcrumb".concat(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
        to: menu.to
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: props.t(menu.label),
        onDelete: function onDelete(e) {
          return handleDelete(e, index);
        },
        color: pathname == menu.to ? "secondary" : "primary",
        size: "small"
      })));
    }
  })));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    menus: state.config.menuo
  };
};
var mapActionsToProps = {
  removeMenuBread: _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_3__.removeMenuBread,
  clearMenuBread: _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_3__.clearMenuBread
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapActionsToProps)(BreadCrumbs));

/***/ }),

/***/ "./assets/react/controllers/Components/Contact.jsx":
/*!*********************************************************!*\
  !*** ./assets/react/controllers/Components/Contact.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_icons_material_Call__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Call */ "./node_modules/@mui/icons-material/Call.js");
/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Mail */ "./node_modules/@mui/icons-material/Mail.js");
/* harmony import */ var _mui_icons_material_SaveAlt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/SaveAlt */ "./node_modules/@mui/icons-material/SaveAlt.js");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Copyright */ "./assets/react/controllers/Components/Copyright.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");







var Contact = function Contact(props) {
  var t = props.t,
    signin = props.signin,
    signup = props.signup;
  console.log(i18next__WEBPACK_IMPORTED_MODULE_2__["default"].language);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      mb: 8,
      mx: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      width: "100%",
      marginBlock: 4,
      padding: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4"
  }, t("contact_cellinfo", {
    ns: "login"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 2,
    marginY: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Call__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: "#29b027"
    },
    href: "tel:674921111",
    target: "_blank"
  }, "674 92 11 11 / 674 58 16 07")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 2,
    marginY: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: "#29b027"
    },
    href: "mailto:sg.celinfo.cea1@minesec.gov.cm",
    target: "_blank"
  }, "sg.celinfo.cea1@minesec.gov.cm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 2,
    marginY: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_SaveAlt__WEBPACK_IMPORTED_MODULE_10__["default"], null), i18next__WEBPACK_IMPORTED_MODULE_2__["default"].language.startsWith("fr") ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    style: {
      color: "#29b027"
    },
    href: "/uploads/Guide utilisateur subvention.pdf",
    target: "_blank",
    download: true
  }, "Guide utilisateur pour une demande de subvention") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    style: {
      color: "#29b027"
    },
    href: "/uploads/Guidelines to apply subvention.pdf",
    target: "_blank",
    download: true
  }, "Guidelines to apply for financial grant")), i18next__WEBPACK_IMPORTED_MODULE_2__["default"].language.startsWith("fr") ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    width: "100%",
    height: "315",
    src: "https://www.youtube.com/embed/PfPz3B0p058?si=OIj3gTv6f2jmk_s3",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    width: "100%",
    height: "315",
    src: "https://www.youtube.com/embed/xl-u7HsA1xE?si=Zvzec1WHVO2ovkHG",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "button",
    variant: "body1",
    sx: {
      color: "#3d8514"
    },
    onClick: function onClick() {
      signup();
    }
  }, t("want_signup", {
    ns: "login"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "button",
    variant: "body1",
    sx: {
      color: "#3d8514"
    },
    onClick: function onClick() {
      signin();
    }
  }, t("want_signin", {
    ns: "login"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Copyright__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      mt: 5
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./assets/react/controllers/Components/Copyright.jsx":
/*!***********************************************************!*\
  !*** ./assets/react/controllers/Components/Copyright.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Copyright = function Copyright(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    variant: "body2",
    color: "text.secondary",
    align: "center"
  }, props), "Copyright © ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "inherit",
    href: "#"
  }, "MINESEC"), " ", new Date().getFullYear(), ".");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copyright);

/***/ }),

/***/ "./assets/react/controllers/Components/Header.jsx":
/*!********************************************************!*\
  !*** ./assets/react/controllers/Components/Header.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/theme */ "./assets/react/utils/theme.js");



var Header = function Header(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle;
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var colors = (0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.tokens)(theme.palette.mode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mb: "30px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h2",
    color: colors.grey[100],
    fontWeight: "bold",
    sx: {
      m: "0 0 5px 0"
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5",
    color: colors.greenAccent[400]
  }, subtitle));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./assets/react/controllers/Components/SideBar.jsx":
/*!*********************************************************!*\
  !*** ./assets/react/controllers/Components/SideBar.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pro-sidebar */ "./node_modules/react-pro-sidebar/dist/index.es.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/theme */ "./assets/react/utils/theme.js");
/* harmony import */ var _mui_icons_material_Foundation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Foundation */ "./node_modules/@mui/icons-material/Foundation.js");
/* harmony import */ var _mui_icons_material_Source__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Source */ "./node_modules/@mui/icons-material/Source.js");
/* harmony import */ var _mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/MenuOutlined */ "./node_modules/@mui/icons-material/MenuOutlined.js");
/* harmony import */ var _mui_icons_material_CreateNewFolder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/CreateNewFolder */ "./node_modules/@mui/icons-material/CreateNewFolder.js");
/* harmony import */ var _mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/AccountBalance */ "./node_modules/@mui/icons-material/AccountBalance.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../redux/actions/configActions */ "./assets/react/controllers/redux/actions/configActions.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Constants */ "./assets/react/utils/Constants.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















// hex to rgba converter
var hexToRgba = function hexToRgba(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
};
var Item = function Item(_ref) {
  var title = _ref.title,
    to = _ref.to,
    icon = _ref.icon,
    selected = _ref.selected,
    setSelected = _ref.setSelected;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
      to: to
    }),
    icon: icon,
    active: window.location.pathname === to,
    onClick: function onClick(e) {
      return setSelected(e, to, title);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, title));
};
var SideBar = function SideBar(props) {
  var _icon, _button;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)(),
    t = _useTranslation.t;
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var colors = (0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.tokens)(theme.palette.mode);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapsed = _useState2[0],
    setIsCollapsed = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Dashboard"),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelect = _useState4[1];

  //console.log(props.access_token);

  var setSelected = function setSelected(item, to, title) {
    if (to != "/") props.addMenuBread({
      to: to,
      label: title
    });
    setSelect(item);
  };
  var menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400
    },
    icon: (_icon = {
      color: theme.palette.menu.icon
    }, _defineProperty(_icon, "&.".concat(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_1__.menuClasses.disabled), {
      color: theme.palette.menu.disabled.color
    }), _defineProperty(_icon, "&.".concat(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_1__.menuClasses.active), {
      color: "#b6c8d9"
    }), _icon),
    SubMenuExpandIcon: {
      color: "#b6b7b9"
    },
    subMenuContent: function subMenuContent(_ref2) {
      var level = _ref2.level;
      return {
        backgroundColor: level === 0 ? hexToRgba(theme.palette.menu.menuContent, !isCollapsed ? 0.4 : 1) : "transparent",
        width: "300px"
      };
    },
    button: (_button = {}, _defineProperty(_button, "&.".concat(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_1__.menuClasses.disabled), {
      color: theme.palette.menu.disabled.color
    }), _defineProperty(_button, "&:hover", {
      backgroundColor: hexToRgba(theme.palette.menu.hover.backgroundColor, 1),
      color: theme.palette.menu.hover.color
    }), _defineProperty(_button, "&.".concat(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_1__.menuClasses.active), {
      backgroundColor: hexToRgba(theme.palette.menu.hover.backgroundColor, 0.7),
      color: theme.palette.menu.hover.color
    }), _button),
    label: function label(_ref3) {
      var open = _ref3.open;
      return {
        fontWeight: open ? 600 : undefined
      };
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_1__.Sidebar, {
    collapsed: isCollapsed,
    breakPoint: "md",
    backgroundColor: hexToRgba(theme.palette.sidebar.backgroundColor, 1),
    rootStyles: {
      color: theme.palette.sidebar.color
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    menuItemStyles: menuItemStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    onClick: function onClick() {
      return setIsCollapsed(!isCollapsed);
    },
    icon: isCollapsed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_10__["default"], null) : undefined,
    style: {
      margin: "10px 0 20px 0"
    }
  }, !isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ml: "15px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h4",
    color: colors.grey[100]
  }, "MINESEC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: function onClick() {
      return setIsCollapsed(!isCollapsed);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_10__["default"], null)))), !isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    mb: "25px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "profile-user",
    width: "100px",
    height: "100px",
    src: "".concat(_utils_Constants__WEBPACK_IMPORTED_MODULE_6__["default"].BASE_URL, "/images/logo_minesec.jpg"),
    style: {
      cursor: "pointer",
      borderRadius: "50%"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h5",
    color: colors.grey[100],
    fontWeight: "bold",
    sx: {
      m: "10px 0 0 0"
    }
  }, props.username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, Boolean(props.session) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, {
    title: t("menu_demande"),
    to: "/demande",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CreateNewFolder__WEBPACK_IMPORTED_MODULE_13__["default"], null),
    selected: selected,
    setSelected: setSelected
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, {
    title: t("menu_structure"),
    to: "/",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Foundation__WEBPACK_IMPORTED_MODULE_14__["default"], null),
    selected: selected,
    setSelected: setSelected
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, {
    title: t("menu_demandes"),
    to: "/mydemandes",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Source__WEBPACK_IMPORTED_MODULE_15__["default"], null),
    selected: selected,
    setSelected: setSelected
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, {
    title: t("menu_compte"),
    to: "/compteBancaire",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_16__["default"], null),
    selected: selected,
    setSelected: setSelected
  })))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.auth.credentials.structure.name,
    roles: state.auth.credentials.role,
    session: state.auth.credentials.session,
    access_token: state.auth.access_token,
    menus: state.config.menuo
  };
};
var mapActionsToProps = {
  addMenuBread: _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_5__.addMenuBread
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapActionsToProps)(SideBar));

/***/ }),

/***/ "./assets/react/controllers/Components/TopBar.jsx":
/*!********************************************************!*\
  !*** ./assets/react/controllers/Components/TopBar.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/theme */ "./assets/react/utils/theme.js");
/* harmony import */ var _mui_icons_material_LightModeOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/LightModeOutlined */ "./node_modules/@mui/icons-material/LightModeOutlined.js");
/* harmony import */ var _mui_icons_material_DarkModeOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/DarkModeOutlined */ "./node_modules/@mui/icons-material/DarkModeOutlined.js");
/* harmony import */ var _mui_icons_material_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/NotificationsOutlined */ "./node_modules/@mui/icons-material/NotificationsOutlined.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _redux_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../redux/actions/UserActions */ "./assets/react/controllers/redux/actions/UserActions.js");
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material/Settings */ "./node_modules/@mui/icons-material/Settings.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../redux/actions/configActions */ "./assets/react/controllers/redux/actions/configActions.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/Constants */ "./assets/react/utils/Constants.jsx");
/* harmony import */ var react_fast_marquee__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-fast-marquee */ "./node_modules/react-fast-marquee/dist/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






















var Topbar = function Topbar(props) {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)(),
    t = _useTranslation.t;
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var colors = (0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.tokens)(theme.palette.mode);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl = _useState2[0],
    setAnchorEl = _useState2[1];
  var open = Boolean(anchorEl);
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    display: "flex",
    justifyContent: "space-between",
    p: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    display: "flex",
    backgroundColor: colors.primary[400],
    borderRadius: "3px",
    sx: {
      maxWidth: "650px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_fast_marquee__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h4"
  }, Boolean(props.user.session) ? t("active_session", {
    ns: "common",
    annee: new Date(props.user.session.dateOpen.date).getFullYear(),
    dateO: (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(props.user.session.dateOpen.date), "dd MMM yyyy"),
    dateC: (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(props.user.session.dateClosed.date), "dd MMM yyyy")
  }) : t("session_absent")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    display: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: function onClick() {
      return props.changeMode(theme.palette.mode);
    }
  }, theme.palette.mode === "dark" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_DarkModeOutlined__WEBPACK_IMPORTED_MODULE_14__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LightModeOutlined__WEBPACK_IMPORTED_MODULE_15__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_16__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleClick,
    "aria-controls": open ? "account-menu" : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? "true" : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    title: "Account settings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18__["default"], {
    alt: "profile-user",
    src: "".concat(_utils_Constants__WEBPACK_IMPORTED_MODULE_7__["default"].BASE_URL, "/images/avatar.webp"),
    sx: {
      width: 32,
      height: 32
    }
  }, props.user.username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "secondary",
    onClick: function onClick() {
      return i18next__WEBPACK_IMPORTED_MODULE_5__["default"].changeLanguage(i18next__WEBPACK_IMPORTED_MODULE_5__["default"].language.startsWith("fr") ? "en" : "fr");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    title: t("change_language")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h3"
  }, i18next__WEBPACK_IMPORTED_MODULE_5__["default"].language.startsWith("fr") ? " EN" : " FR"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_19__["default"], {
    anchorEl: anchorEl,
    id: "account-menu",
    open: open,
    onClose: handleClose,
    onClick: handleClose,
    PaperProps: {
      elevation: 0,
      sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1
        },
        "&:before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: "background.paper",
          transform: "translateY(-50%) rotate(45deg)",
          zIndex: 0
        }
      }
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "top"
    },
    anchorOrigin: {
      horizontal: "right",
      vertical: "bottom"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18__["default"], null), " Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18__["default"], null), " My account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_23__["default"], {
    fontSize: "small"
  })), "Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onClick: function onClick() {
      return props.logoutUser();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_24__["default"], {
    fontSize: "small"
  })), t("logout"))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.credentials
  };
};
var mapActionsToProps = {
  changeMode: _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_4__.changeMode,
  logoutUser: _redux_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__.logoutUser
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapActionsToProps)(Topbar));

/***/ }),

/***/ "./assets/react/controllers/Components/demandes/DemandePieces.jsx":
/*!************************************************************************!*\
  !*** ./assets/react/controllers/Components/demandes/DemandePieces.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_AttachFile__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material/AttachFile */ "./node_modules/@mui/icons-material/AttachFile.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material_UploadFile__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/UploadFile */ "./node_modules/@mui/icons-material/UploadFile.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_services_openApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../redux/services/openApi */ "./assets/react/controllers/redux/services/openApi.js");
/* harmony import */ var _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../redux/actions/configActions */ "./assets/react/controllers/redux/actions/configActions.js");
/* harmony import */ var _controllers_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../controllers/Error */ "./assets/react/controllers/Error.jsx");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/Constants */ "./assets/react/utils/Constants.jsx");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _utils_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/Loading */ "./assets/react/utils/Loading.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var DemandePieces = function DemandePieces(props) {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
    t = _useTranslation.t;
  var fileInputField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),
    _useState2 = _slicedToArray(_useState, 2),
    Id = _useState2[0],
    setId = _useState2[1];
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var _useDeleteDemandePiec = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_3__.useDeleteDemandePieceMutation)(),
    _useDeleteDemandePiec2 = _slicedToArray(_useDeleteDemandePiec, 2),
    deleteDemandePiece = _useDeleteDemandePiec2[0],
    isDeleting = _useDeleteDemandePiec2[1].isLoading;
  var _useGetListPiecesQuer = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_3__.useGetListPiecesQuery)(props.structure.quality != "Etablissement" ? 1 : 0, {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
      skip: false
    }),
    pieces = _useGetListPiecesQuer.data,
    loading = _useGetListPiecesQuer.isFetching,
    error = _useGetListPiecesQuer.error;
  var _useGetDemandePiecesQ = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_3__.useGetDemandePiecesQuery)(props.demandeId, {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
      skip: false
    }),
    mypieces = _useGetDemandePiecesQ.data,
    loadingp = _useGetDemandePiecesQ.isFetching,
    errorm = _useGetDemandePiecesQ.error;
  var _useUploadDemandeFile = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_3__.useUploadDemandeFileMutation)(),
    _useUploadDemandeFile2 = _slicedToArray(_useUploadDemandeFile, 2),
    uploadfile = _useUploadDemandeFile2[0],
    isUpdating = _useUploadDemandeFile2[1].isLoading;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var compulPiece = mypieces === null || mypieces === void 0 ? void 0 : mypieces.filter(function (pie) {
      var _pie$piece;
      return (_pie$piece = pie.piece) === null || _pie$piece === void 0 ? void 0 : _pie$piece.compulsory;
    });
    var compulsoryPieces = pieces === null || pieces === void 0 ? void 0 : pieces.filter(function (pie) {
      return pie.compulsory;
    });
    props.setValide((compulPiece === null || compulPiece === void 0 ? void 0 : compulPiece.length) != (compulsoryPieces === null || compulsoryPieces === void 0 ? void 0 : compulsoryPieces.length));
  }, [mypieces, pieces]);
  var getPieceFile = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (piece) {
    var file = mypieces === null || mypieces === void 0 ? void 0 : mypieces.find(function (file) {
      var _file$piece;
      return ((_file$piece = file.piece) === null || _file$piece === void 0 ? void 0 : _file$piece.id) === piece.id;
    });
    return file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: theme.palette.menu.icon,
      href: "".concat(_utils_Constants__WEBPACK_IMPORTED_MODULE_6__["default"].BASE_URL, "/uploads/").concat(file.file.fileName),
      target: "_blank",
      rel: "noopener"
    }, file.file.fileName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      variant: "subtitle1"
    }, t("message.file_not_attached"));
  }, [mypieces]);
  var handleDeleteClick = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function (id) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
      title: t("message.delete_piece"),
      icon: "question",
      showCancelButton: true,
      confirmButtonText: t("delete"),
      confirmButtonColor: theme.palette.error
    }).then(function (result) {
      if (result.isConfirmed) {
        deleteDemandePiece({
          id: props.demandeId,
          piece: id
        }).then(function (res) {
          if (res.data) {
            props.setInfoMsg({
              message: t("message.delete_piece_success"),
              severity: "success"
            });
          }
        })["catch"](function (error) {
          props.setInfoMsg({
            message: error.response.data.message,
            severity: "error"
          });
        });
      }
    });
  }, [mypieces]);
  var pickFile = function pickFile(id) {
    setId(id);
    fileInputField.current.click();
  };
  var handleNewFile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var valideFileNamePattern, allowedTypes, _e$target$files$, _res$data, formData, res, _res$error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            valideFileNamePattern = /[ `!@#$%^&*()+\-=[\]{};':"\\|,<>\/?~]|[\u00C0-\u00FF\u0100-\u017F\u0180-\u024F]/;
            allowedTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];
            if (!e.target.files[0]) {
              _context.next = 20;
              break;
            }
            if (!(e.target.files[0].size > 2097152)) {
              _context.next = 6;
              break;
            }
            props.setInfoMsg({
              message: t("message.file_upload_toobig"),
              severity: "warning"
            });
            return _context.abrupt("return", false);
          case 6:
            if (allowedTypes.includes((_e$target$files$ = e.target.files[0]) === null || _e$target$files$ === void 0 ? void 0 : _e$target$files$.type)) {
              _context.next = 9;
              break;
            }
            props.setInfoMsg({
              message: t("message.file_upload_wrongtype"),
              severity: "warning"
            });
            return _context.abrupt("return", false);
          case 9:
            if (!valideFileNamePattern.test(e.target.files[0].name)) {
              _context.next = 13;
              break;
            }
            console.log(e.target.files[0].name);
            props.setInfoMsg({
              message: t("message.file_upload_wrongname"),
              severity: "warning"
            });
            return _context.abrupt("return", false);
          case 13:
            formData = new FormData();
            formData.append("fileName", e.target.files[0].name);
            formData.append("file", e.target.files[0]);
            _context.next = 18;
            return uploadfile({
              id: props.demandeId,
              piece: Id,
              data: formData
            });
          case 18:
            res = _context.sent;
            if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.success) {
              props.setInfoMsg({
                message: t("message.file_upload_success"),
                severity: "success"
              });
            } else {
              props.setInfoMsg({
                message: res === null || res === void 0 ? void 0 : (_res$error = res.error) === null || _res$error === void 0 ? void 0 : _res$error.data.message,
                severity: "error"
              });
            }
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleNewFile(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  if (error || errorm) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_controllers_Error__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    style: {
      visibility: "hidden"
    },
    type: "file",
    ref: fileInputField,
    onChange: handleNewFile,
    accept: "image/png, image/jpeg, .pdf"
  }), (mypieces === null || mypieces === void 0 ? void 0 : mypieces.length) != (pieces === null || pieces === void 0 ? void 0 : pieces.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "filled",
    severity: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, t("message.file_upload_alert")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, t("message.file_upload_incomplet")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, t("message.file_upload_condition"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    severity: "success"
  }, t("message.file_upload_all")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      width: "100%"
    },
    "aria-label": "caption table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "left",
    colSpan: 3
  }, t("list_piece_exigee", {
    val: (pieces === null || pieces === void 0 ? void 0 : pieces.length) || 0
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, pieces === null || pieces === void 0 ? void 0 : pieces.map(function (piece, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: "indexlistp".concat(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      sx: {
        backgroundColor: piece.compulsory ? "#f10231" : "#0004"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_AttachFile__WEBPACK_IMPORTED_MODULE_25__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
      primary: i18next__WEBPACK_IMPORTED_MODULE_8__["default"].language == "en" ? piece.nameen : piece.name,
      secondary: i18next__WEBPACK_IMPORTED_MODULE_8__["default"].language == "en" ? piece.signataireen : piece.signataire
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      align: "right"
    }, getPieceFile(piece)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      align: "right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
      direction: "row",
      alignItems: "center",
      columnGap: 1
    }, isUpdating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
      color: "inherit"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"], {
      edge: "start",
      "aria-label": "upload",
      disabled: Boolean(mypieces === null || mypieces === void 0 ? void 0 : mypieces.find(function (val) {
        return (val === null || val === void 0 ? void 0 : val.piece.id) == piece.id;
      })),
      onClick: function onClick() {
        return pickFile(piece.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_UploadFile__WEBPACK_IMPORTED_MODULE_30__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"], {
      color: theme.palette.card.main,
      edge: "end",
      "aria-label": "delete",
      disabled: !Boolean(mypieces === null || mypieces === void 0 ? void 0 : mypieces.find(function (val) {
        return (val === null || val === void 0 ? void 0 : val.piece.id) == piece.id;
      })),
      onClick: function onClick() {
        return handleDeleteClick(piece.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_31__["default"], null)))));
  })))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: state.auth.roles,
    structure: state.auth.credentials.structure,
    session: state.auth.credentials.session
  };
};
var mapActionsToProps = {
  setInfoMsg: _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_4__.setInfoMsg
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapActionsToProps)(DemandePieces));

/***/ }),

/***/ "./assets/react/controllers/Components/demandes/ImprimeEts.jsx":
/*!*********************************************************************!*\
  !*** ./assets/react/controllers/Components/demandes/ImprimeEts.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Slide/Slide.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_services_openApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/services/openApi */ "./assets/react/controllers/redux/services/openApi.js");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Error */ "./assets/react/controllers/Error.jsx");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react_to_pdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-to-pdf */ "./node_modules/react-to-pdf/dist/module.js");
/* harmony import */ var _structures_Entete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../structures/Entete */ "./assets/react/controllers/Components/structures/Entete.jsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var Transition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
    direction: "up",
    ref: ref
  }, props));
});
var Field = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"])(function (_ref) {
  var theme = _ref.theme;
  return {
    minWidth: "120mm",
    borderBottom: "solid 2px",
    borderBottomColor: theme.palette.card.main,
    paddingBottom: 4,
    textTransform: "uppercase",
    fontWeight: 300,
    letterSpacing: 0.4,
    fontSize: 12
  };
});
var ImprimeEts = function ImprimeEts(props) {
  var _props$user;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
    t = _useTranslation.t;
  var printRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  var _useGetStructureDetai = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_3__.useGetStructureDetailsQuery)(props.structure.id, {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
      skip: false
    }),
    struct = _useGetStructureDetai.data,
    isFetching = _useGetStructureDetai.isFetching,
    error = _useGetStructureDetai.error;
  var _useGetDemandePiecesQ = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_3__.useGetDemandePiecesQuery)(props.demandeId, {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
      skip: false
    }),
    pieces = _useGetDemandePiecesQ.data,
    loading = _useGetDemandePiecesQ.isFetching,
    error_pieces = _useGetDemandePiecesQ.error;
  var isOrg = props.structure.quality !== "Etablissement";
  var options = {
    filename: "Demande_subvention_".concat(props.demandeId),
    method: "save",
    resolution: react_to_pdf__WEBPACK_IMPORTED_MODULE_6__.Resolution.HIGH,
    page: {
      margin: react_to_pdf__WEBPACK_IMPORTED_MODULE_6__.Margin.MEDIUM,
      format: "A4",
      orientation: "portrait"
    },
    canvas: {
      mimeType: "image/jpeg",
      qualityRatio: 1
    },
    overrides: {
      pdf: {
        compress: true
      },
      canvas: {
        useCORS: true
      }
    }
  };
  var openPDF = function openPDF() {
    (0,react_to_pdf__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
      return document.getElementById("pdf-wrapper");
    }, options);
  };
  if (error || error_pieces) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Error__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fullScreen: true,
    TransitionComponent: Transition,
    open: props.open,
    onClose: function onClose() {
      return props.handleOpenClose(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, t("message.demande_updated_success")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: printRef,
    id: "pdf-wrapper",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      width: "100%",
      maxWidth: "190mm",
      margin: "60px auto !important"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_structures_Entete__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "column",
    alignItems: "flex-start",
    gap: 1,
    flex: 1,
    width: "100%",
    marginTop: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, "STRUCTURE :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.name)), !isOrg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    sx: {
      flex: 1
    }
  }, "Num\xE9ro d'immatriculation :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.code)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, "Nom du responsable :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.nomFondateur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, "ordre :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.ordre.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    sx: {
      flex: 1
    }
  }, "type :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.forme.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, "r\xE9gion :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.subdivision.division.region.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, "d\xE9partement :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.subdivision.division.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    sx: {
      flex: 1
    }
  }, "arrondissement:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.subdivision.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, "Email: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
    sx: {
      textTransform: "none"
    }
  }, (_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 1,
    marginTop: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h4"
  }, "pi\xE8ces jointes:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: {
      fontSize: "11pt"
    }
  }, pieces === null || pieces === void 0 ? void 0 : pieces.map(function (piece, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: "piece".concat(i)
    }, " ", piece === null || piece === void 0 ? void 0 : piece.piece.name, " ");
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, "N", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("sup", null, "o"), " de d\xE9p\xF4t du dossier: ", props.demandeId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    textTransform: "none"
  }, "Signature du requ\xE9rant")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "subtitle1",
    marginTop: isOrg ? 10 : 0
  }, (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(new Date(), "dd MMM yyyy, hh:ii")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick: function onClick() {
      return props.handleOpenClose(false);
    },
    variant: "outlined"
  }, t("print.cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick: openPDF,
    variant: "outlined"
  }, t("print.pdf")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_to_print__WEBPACK_IMPORTED_MODULE_5___default()), {
    trigger: function trigger() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        type: "submit",
        variant: "outlined"
      }, t("print.btn"));
    },
    content: function content() {
      return printRef.current;
    }
  })));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.credentials,
    structure: state.auth.credentials.structure
  };
};
var mapActionsToProps = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapActionsToProps)(ImprimeEts));

/***/ }),

/***/ "./assets/react/controllers/Components/structures/Entete.jsx":
/*!*******************************************************************!*\
  !*** ./assets/react/controllers/Components/structures/Entete.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var Entete = function Entete(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "R\xE9publique du cameroun"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    textAlign: "center",
    textTransform: "none"
  }, "Paix-Travail-Patrie", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "**************")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Minist\xE8re des enseignements secondaires", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "**************"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "secr\xE9tariat g\xE9n\xE9ral")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Republic of cameroon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    textAlign: "center",
    textTransform: "none"
  }, "Peace-Work-Fatherland", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "**************")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Ministry of secondary education", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "**************"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "secretariat general"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4"
  }, "Demande de subvention financi\xE8re de l'\xE9tat aux organisations et aux \xE9tablissements scolaires ou formations priv\xE9s d'enseignement secondaire et normal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4"
  }, "Ann\xE9e budgetaire ", new Date(props.user.session.dateOpen.date).getFullYear()));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.credentials
  };
};
var mapActionsToProps = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapActionsToProps)(Entete));

/***/ }),

/***/ "./assets/react/controllers/Components/structures/StructureDetails.jsx":
/*!*****************************************************************************!*\
  !*** ./assets/react/controllers/Components/structures/StructureDetails.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/configActions */ "./assets/react/controllers/redux/actions/configActions.js");
/* harmony import */ var _redux_services_openApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/services/openApi */ "./assets/react/controllers/redux/services/openApi.js");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Error */ "./assets/react/controllers/Error.jsx");







var Field = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"])(function (_ref) {
  var theme = _ref.theme;
  return {
    flex: 1,
    minWidth: "300px",
    borderBottom: "solid 2px",
    borderBottomColor: theme.palette.menu.icon,
    paddingBottom: 4,
    textTransform: "uppercase",
    fontWeight: 500,
    letterSpacing: 0.4,
    fontSize: 12
  };
});
var StructureDetails = function StructureDetails(props) {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
    t = _useTranslation.t;
  var _useGetStructureDetai = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_4__.useGetStructureDetailsQuery)(props.structure.id, {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
      skip: false
    }),
    struct = _useGetStructureDetai.data,
    isFetching = _useGetStructureDetai.isFetching,
    error = _useGetStructureDetai.error;
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Error__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "column",
    alignItems: "flex-start",
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "caption"
  }, t("structure.region"), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.subdivision.division.region.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "column",
    alignItems: "flex-start",
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "caption"
  }, t("structure.division"), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.subdivision.division.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "column",
    alignItems: "flex-start",
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "caption"
  }, t("structure.subdivision"), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.subdivision.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "column",
    alignItems: "flex-start",
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "caption"
  }, t("structure.code"), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.code)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "column",
    alignItems: "flex-start",
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "caption"
  }, t("structure.name"), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "column",
    alignItems: "flex-start",
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "caption"
  }, t("structure.type"), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.typeStructure)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "column",
    alignItems: "flex-start",
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "caption"
  }, t("structure.ordre"), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.ordre.name)), !props.isOrg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "column",
    alignItems: "flex-start",
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "caption"
  }, t("structure.forme"), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.forme.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "column",
    alignItems: "flex-start",
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "caption"
  }, t("structure.system"), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.langue.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "column",
    alignItems: "flex-start",
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "caption"
  }, t("structure.adresse"), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, struct === null || struct === void 0 ? void 0 : struct.adresse))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: state.auth.roles,
    structure: state.auth.credentials.structure
  };
};
var mapActionsToProps = {
  setInfoMsg: _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_3__.setInfoMsg
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapActionsToProps)(StructureDetails));

/***/ }),

/***/ "./assets/react/controllers/Components/users/resetForm.js":
/*!****************************************************************!*\
  !*** ./assets/react/controllers/Components/users/resetForm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "LButton": () => (/* binding */ LButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _redux_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/UserActions */ "./assets/react/controllers/redux/actions/UserActions.js");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Copyright */ "./assets/react/controllers/Components/Copyright.jsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/LoadingButton/LoadingButton.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var _mui_icons_material_LockPersonTwoTone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/LockPersonTwoTone */ "./node_modules/@mui/icons-material/LockPersonTwoTone.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/Constants */ "./assets/react/utils/Constants.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject, _templateObject2;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var Field = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: transparent;\n  & label.Mui-focused {\n    color: black;\n    font-weight: bold;\n    font-size: 1rem;\n  }\n  & .MuiInputBase-root.Mui-focused fieldset {\n    border-color: #29b027;\n    outline-color: #29b027;\n  }\n  & .MuiFormHelperText-root.Mui-error {\n    background-color: white;\n    padding: 0.8rem;\n  }\n"])));
var LButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"])(_mui_lab__WEBPACK_IMPORTED_MODULE_9__["default"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: #359d38;\n  margin-block: 10px;\n  &:hover {\n    border-color: #29a000;\n    background-color: #29a000;\n  }\n"])));
var ResetForm = function ResetForm(props) {
  var _location$state;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)();
  var from = ((_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.from) || "/";
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  var checkoutSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
    code_immatriculation: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(props.t("required", {
      ns: "login"
    })).min(5, props.t("error_immatriculation_length", {
      ns: "login"
    })).test("code_immatriculation-exists", props.t("immatriculation_check", {
      ns: "login"
    }), /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(_utils_Constants__WEBPACK_IMPORTED_MODULE_6__["default"].BASE_URL, "/api/open/immatriculation"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  code_immatriculation: value,
                  purpose: 0
                })
              });
            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.status == 200);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()),
    plainPassword: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(props.t("required", {
      ns: "login"
    }))
    // check minimum characters
    .min(8, props.t("error_pass_length", {
      ns: "login"
    }))
    // different error messages for different requirements
    .matches(/[0-9]/, props.t("error_password", {
      ns: "login",
      val: "digit"
    })).matches(/[a-z]/, props.t("error_password", {
      ns: "login",
      val: "lowercase"
    })).matches(/[A-Z]/, props.t("error_password", {
      ns: "login",
      val: "uppercase"
    })),
    confirm_password: yup__WEBPACK_IMPORTED_MODULE_5__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_5__.ref("plainPassword"), null], "Does not match with password!").required(props.t("required", {
      ns: "login"
    }))
  });
  var initialValues = {
    code_immatriculation: "",
    plainPassword: "",
    confirm_password: ""
  };
  var handleFormSubmit = function handleFormSubmit(data) {
    return props.resetUser(data, navigate, from);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      mb: 8,
      mx: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      m: 1,
      bgcolor: "#359d38"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LockPersonTwoTone__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    component: "h1",
    variant: "h5"
  }, props.t("resetting", {
    ns: "login"
  })), props.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    severity: "error",
    sx: {
      width: "100%",
      mt: 3,
      mb: 2
    },
    onClose: function onClose() {
      props.clearErrors();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, props.t("error", {
    ns: "login"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, props.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
    onSubmit: handleFormSubmit,
    initialValues: initialValues,
    validationSchema: checkoutSchema,
    validateOnChange: false,
    validateOnBlur: false
  }, function (_ref2) {
    var values = _ref2.values,
      errors = _ref2.errors,
      touched = _ref2.touched,
      handleBlur = _ref2.handleBlur,
      handleChange = _ref2.handleChange,
      handleSubmit = _ref2.handleSubmit,
      isValidating = _ref2.isValidating;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      component: "form",
      onSubmit: handleSubmit,
      sx: {
        mt: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      margin: "normal",
      required: true,
      fullWidth: true,
      size: "small",
      id: "usercode_immatriculationname",
      label: props.t("code_immatriculation", {
        ns: "login"
      }),
      name: "code_immatriculation",
      autoFocus: true,
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.code_immatriculation,
      error: !!touched.code_immatriculation && !!errors.code_immatriculation,
      helperText: touched.code_immatriculation && errors.code_immatriculation
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "plainPassword",
      label: props.t("password", {
        ns: "login"
      }),
      type: "password",
      id: "plainPassword",
      autoComplete: "current-password",
      size: "small",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.plainPassword,
      error: !!touched.plainPassword && !!errors.plainPassword,
      helperText: touched.plainPassword && errors.plainPassword
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "confirm_password",
      label: props.t("confirm_password", {
        ns: "login"
      }),
      type: "password",
      id: "confirm_password",
      autoComplete: "current-password",
      size: "small",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.confirm_password,
      error: !!touched.confirm_password && !!errors.confirm_password,
      helperText: touched.confirm_password && errors.confirm_password
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LButton, {
      type: "submit",
      variant: "contained",
      fullWidth: true,
      size: "large",
      loading: props.isLoading || isValidating
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.t("reset", {
      ns: "login"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      container: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      item: true,
      xs: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      component: "button",
      variant: "body1",
      sx: {
        color: "#3d8514"
      },
      onClick: function onClick() {
        props.help();
      }
    }, props.t("want_help", {
      ns: "login"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      component: "button",
      variant: "body1",
      sx: {
        color: "#3d8514"
      },
      onClick: function onClick() {
        props.signin();
      }
    }, props.t("want_signin", {
      ns: "login"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Copyright__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        mt: 5
      }
    }));
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.auth.errors,
    isLoading: state.auth.loading
  };
};
var mapActionsToProps = {
  resetUser: _redux_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__.resetUser,
  clearErrors: _redux_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__.clearErrors
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapActionsToProps)(ResetForm));

/***/ }),

/***/ "./assets/react/controllers/Components/users/signinForm.js":
/*!*****************************************************************!*\
  !*** ./assets/react/controllers/Components/users/signinForm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "LButton": () => (/* binding */ LButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _redux_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../redux/actions/UserActions */ "./assets/react/controllers/redux/actions/UserActions.js");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Copyright */ "./assets/react/controllers/Components/Copyright.jsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/LoadingButton/LoadingButton.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ "./node_modules/@mui/icons-material/LockOutlined.js");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var getCharacterValidationError = function getCharacterValidationError(str) {
  return "Your password must have at least 1 ".concat(str, " character");
};
var Field = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: transparent;\n  & label.Mui-focused {\n    color: black;\n    font-weight: bold;\n    font-size: 1rem;\n  }\n  & .MuiInputBase-root.Mui-focused fieldset {\n    border-color: #29b027;\n    outline-color: #29b027;\n  }\n  & .MuiFormHelperText-root.Mui-error {\n    background-color: white;\n    padding: 0.8rem;\n  }\n"])));
var LButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])(_mui_lab__WEBPACK_IMPORTED_MODULE_8__["default"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: #359d38;\n  margin-block: 10px;\n  &:hover {\n    border-color: #29a000;\n    background-color: #29a000;\n  }\n"])));
var SigninForm = function SigninForm(props) {
  var _location$state;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)();
  var from = ((_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.from) || "/";
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var checkoutSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
    username: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(props.t("required", {
      ns: "login"
    })),
    password: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(props.t("required", {
      ns: "login"
    }))
    // check minimum characters
    .min(8, props.t("error_pass_length", {
      ns: "login"
    }))
    // different error messages for different requirements
    .matches(/[0-9]/, props.t("error_password", {
      ns: "login",
      val: "digit"
    })).matches(/[a-z]/, props.t("error_password", {
      ns: "login",
      val: "lowercase"
    })).matches(/[A-Z]/, props.t("error_password", {
      ns: "login",
      val: "uppercase"
    }))
  });
  var initialValues = {
    username: "",
    password: ""
  };
  var handleFormSubmit = function handleFormSubmit(data) {
    return props.loginUser(data, navigate, from);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      mt: 0,
      mb: 8,
      mx: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      m: 1,
      bgcolor: "#359d38"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h5"
  }, props.t("connection", {
    ns: "login"
  })), props.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    severity: "error",
    sx: {
      width: "100%",
      mt: 3,
      mb: 2
    },
    onClose: function onClose() {
      props.clearErrors();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, props.t("error", {
    ns: "login"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, props.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
    onSubmit: handleFormSubmit,
    initialValues: initialValues,
    validationSchema: checkoutSchema
  }, function (_ref) {
    var values = _ref.values,
      errors = _ref.errors,
      touched = _ref.touched,
      handleBlur = _ref.handleBlur,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      component: "form",
      onSubmit: handleSubmit,
      sx: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      margin: "normal",
      required: true,
      fullWidth: true,
      id: "username",
      label: props.t("username", {
        ns: "login"
      }),
      name: "username",
      autoFocus: true,
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.username,
      error: !!touched.username && !!errors.username,
      helperText: touched.username && errors.username
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "password",
      label: props.t("password", {
        ns: "login"
      }),
      type: "password",
      id: "password",
      autoComplete: "current-password",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.password,
      error: !!touched.password && !!errors.password,
      helperText: touched.password && errors.password
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      component: "button",
      variant: "body1",
      sx: {
        color: "#d32f2f",
        textDecorationColor: "#d32f2f"
      },
      onClick: function onClick() {
        props.reset();
      }
    }, props.t("want_reset", {
      ns: "login"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LButton, {
      type: "submit",
      variant: "contained",
      fullWidth: true,
      size: "large",
      loading: props.isLoading
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.t("signin", {
      ns: "login"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
      container: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
      item: true,
      xs: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      component: "button",
      variant: "body1",
      sx: {
        color: "#3d8514"
      },
      onClick: function onClick() {
        props.help();
      }
    }, props.t("want_help", {
      ns: "login"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      component: "button",
      variant: "body1",
      sx: {
        color: "#3d8514"
      },
      onClick: function onClick() {
        props.signup();
      }
    }, props.t("want_signup", {
      ns: "login"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Copyright__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        mt: 5
      }
    }));
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.auth.errors,
    isLoading: state.auth.loading
  };
};
var mapActionsToProps = {
  loginUser: _redux_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__.loginUser,
  clearErrors: _redux_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__.clearErrors
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapActionsToProps)(SigninForm));

/***/ }),

/***/ "./assets/react/controllers/Components/users/signupForm.js":
/*!*****************************************************************!*\
  !*** ./assets/react/controllers/Components/users/signupForm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "LButton": () => (/* binding */ LButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _redux_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../redux/actions/UserActions */ "./assets/react/controllers/redux/actions/UserActions.js");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Copyright */ "./assets/react/controllers/Components/Copyright.jsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/LoadingButton/LoadingButton.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var _mui_icons_material_PersonAdd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/PersonAdd */ "./node_modules/@mui/icons-material/PersonAdd.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/Constants */ "./assets/react/utils/Constants.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject, _templateObject2;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var getCharacterValidationError = function getCharacterValidationError(str) {
  return "Your password must have at least 1 ".concat(str, " character");
};
var Field = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: transparent;\n  & label.Mui-focused {\n    color: black;\n    font-weight: bold;\n    font-size: 1rem;\n  }\n  & .MuiInputBase-root.Mui-focused fieldset {\n    border-color: #29b027;\n    outline-color: #29b027;\n  }\n  & .MuiFormHelperText-root.Mui-error {\n    background-color: white;\n    padding: 0.8rem;\n  }\n"])));
var LButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"])(_mui_lab__WEBPACK_IMPORTED_MODULE_9__["default"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: #359d38;\n  margin-block: 10px;\n  &:hover {\n    border-color: #29a000;\n    background-color: #29a000;\n  }\n"])));
var SignupForm = function SignupForm(props) {
  var _location$state;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)();
  var from = ((_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.from) || "/";
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  var checkoutSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
    code_immatriculation: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(props.t("required", {
      ns: "login"
    })).min(5, props.t("error_immatriculation_length", {
      ns: "login"
    })).test("code_immatriculation-exists", props.t("immatriculation_nexist", {
      ns: "login"
    }), /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(_utils_Constants__WEBPACK_IMPORTED_MODULE_6__["default"].BASE_URL, "/api/open/immatriculation"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  code_immatriculation: value,
                  purpose: 1
                })
              });
            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.status == 200);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()),
    username: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(props.t("required", {
      ns: "login"
    })).test("username-exists", props.t("username_exist", {
      ns: "login"
    }), /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(value) {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("".concat(_utils_Constants__WEBPACK_IMPORTED_MODULE_6__["default"].BASE_URL, "/api/open/username"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: value
                })
              });
            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", response.status == 200);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()),
    plainPassword: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(props.t("required", {
      ns: "login"
    }))
    // check minimum characters
    .min(8, props.t("error_pass_length", {
      ns: "login"
    }))
    // different error messages for different requirements
    .matches(/[0-9]/, props.t("error_password", {
      ns: "login",
      val: "digit"
    })).matches(/[a-z]/, props.t("error_password", {
      ns: "login",
      val: "lowercase"
    })).matches(/[A-Z]/, props.t("error_password", {
      ns: "login",
      val: "uppercase"
    })),
    email: yup__WEBPACK_IMPORTED_MODULE_5__.string().email(props.t("error_email", {
      ns: "login"
    })).required(props.t("required", {
      ns: "login"
    })).test("email-exists", props.t("email_exist", {
      ns: "login"
    }), /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(value) {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch("".concat(_utils_Constants__WEBPACK_IMPORTED_MODULE_6__["default"].BASE_URL, "/api/open/email"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  email: value
                })
              });
            case 2:
              response = _context3.sent;
              return _context3.abrupt("return", response.status == 200);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()),
    confirm_email: yup__WEBPACK_IMPORTED_MODULE_5__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_5__.ref("email"), null], "Does not match with email!").email().required(props.t("required", {
      ns: "login"
    })),
    confirm_password: yup__WEBPACK_IMPORTED_MODULE_5__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_5__.ref("plainPassword"), null], "Does not match with password!").required(props.t("required", {
      ns: "login"
    }))
  });
  var initialValues = {
    code_immatriculation: "",
    username: "",
    email: "",
    plainPassword: "",
    confirm_email: "",
    confirm_password: ""
  };
  var handleFormSubmit = function handleFormSubmit(data) {
    return props.registerUser(data, navigate, from);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      mb: 8,
      mx: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      m: 1,
      bgcolor: "#359d38"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_PersonAdd__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    component: "h1",
    variant: "h5"
  }, props.t("creating", {
    ns: "login"
  })), props.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    severity: "error",
    sx: {
      width: "100%",
      mt: 3,
      mb: 2
    },
    onClose: function onClose() {
      props.clearErrors();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, props.t("error", {
    ns: "login"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, props.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
    onSubmit: handleFormSubmit,
    initialValues: initialValues,
    validationSchema: checkoutSchema,
    validateOnChange: false,
    validateOnBlur: false
  }, function (_ref4) {
    var values = _ref4.values,
      errors = _ref4.errors,
      touched = _ref4.touched,
      handleBlur = _ref4.handleBlur,
      handleChange = _ref4.handleChange,
      handleSubmit = _ref4.handleSubmit,
      isValidating = _ref4.isValidating;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      component: "form",
      onSubmit: handleSubmit,
      sx: {
        mt: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      margin: "normal",
      required: true,
      fullWidth: true,
      size: "small",
      id: "usercode_immatriculationname",
      label: props.t("code_immatriculation", {
        ns: "login"
      }),
      name: "code_immatriculation",
      autoFocus: true,
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.code_immatriculation,
      error: !!touched.code_immatriculation && !!errors.code_immatriculation,
      helperText: touched.code_immatriculation && errors.code_immatriculation
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      margin: "normal",
      required: true,
      fullWidth: true,
      size: "small",
      id: "username",
      label: props.t("username", {
        ns: "login"
      }),
      name: "username",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.username,
      error: !!touched.username && !!errors.username,
      helperText: touched.username && errors.username
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      margin: "normal",
      required: true,
      fullWidth: true,
      id: "email",
      label: props.t("email", {
        ns: "login"
      }),
      name: "email",
      type: "email",
      size: "small",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.email,
      error: !!touched.email && !!errors.email,
      helperText: touched.email && errors.email
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      margin: "normal",
      required: true,
      fullWidth: true,
      id: "confirm_email",
      label: props.t("confirm_email", {
        ns: "login"
      }),
      name: "confirm_email",
      type: "email",
      size: "small",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.confirm_email,
      error: !!touched.confirm_email && !!errors.confirm_email,
      helperText: touched.confirm_email && errors.confirm_email
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "plainPassword",
      label: props.t("password", {
        ns: "login"
      }),
      type: "password",
      id: "plainPassword",
      autoComplete: "current-password",
      size: "small",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.plainPassword,
      error: !!touched.plainPassword && !!errors.plainPassword,
      helperText: touched.plainPassword && errors.plainPassword
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "confirm_password",
      label: props.t("confirm_password", {
        ns: "login"
      }),
      type: "password",
      id: "confirm_password",
      autoComplete: "current-password",
      size: "small",
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.confirm_password,
      error: !!touched.confirm_password && !!errors.confirm_password,
      helperText: touched.confirm_password && errors.confirm_password
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LButton, {
      type: "submit",
      variant: "contained",
      fullWidth: true,
      size: "large",
      loading: props.isLoading || isValidating
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.t("signup", {
      ns: "login"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      container: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      item: true,
      xs: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      component: "button",
      variant: "body1",
      sx: {
        color: "#3d8514"
      },
      onClick: function onClick() {
        props.help();
      }
    }, props.t("want_help", {
      ns: "login"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      component: "button",
      variant: "body1",
      sx: {
        color: "#3d8514"
      },
      onClick: function onClick() {
        props.signin();
      }
    }, props.t("want_signin", {
      ns: "login"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Copyright__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        mt: 5
      }
    }));
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.auth.errors,
    isLoading: state.auth.loading
  };
};
var mapActionsToProps = {
  registerUser: _redux_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__.registerUser,
  clearErrors: _redux_actions_UserActions__WEBPACK_IMPORTED_MODULE_2__.clearErrors
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapActionsToProps)(SignupForm));

/***/ }),

/***/ "./assets/react/controllers/Error.jsx":
/*!********************************************!*\
  !*** ./assets/react/controllers/Error.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");


var Error = function Error(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    severity: "error",
    sx: {
      width: "100%",
      mt: 3,
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Something went wrong. Please try again."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

/***/ }),

/***/ "./assets/react/controllers/Main.jsx":
/*!*******************************************!*\
  !*** ./assets/react/controllers/Main.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/i18n */ "./assets/react/utils/i18n.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/store */ "./assets/react/controllers/redux/store.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var _utils_IsAuthenticated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/IsAuthenticated */ "./assets/react/utils/IsAuthenticated.js");
/* harmony import */ var _utils_IsAuthorized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/IsAuthorized */ "./assets/react/utils/IsAuthorized.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fontsource/roboto/300.css */ "./node_modules/@fontsource/roboto/300.css");
/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fontsource/roboto/400.css */ "./node_modules/@fontsource/roboto/400.css");
/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fontsource/roboto/500.css */ "./node_modules/@fontsource/roboto/500.css");
/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fontsource/roboto/700.css */ "./node_modules/@fontsource/roboto/700.css");
/* harmony import */ var _utils_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/Loading */ "./assets/react/utils/Loading.jsx");
/* harmony import */ var _Pages_Home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Pages/Home */ "./assets/react/controllers/Pages/Home.jsx");
/* harmony import */ var _utils_ErrorPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/ErrorPage */ "./assets/react/utils/ErrorPage.jsx");
/* harmony import */ var _Pages_PageLayout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Pages/PageLayout */ "./assets/react/controllers/Pages/PageLayout.jsx");
/* harmony import */ var _Pages_SignIn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Pages/SignIn */ "./assets/react/controllers/Pages/SignIn.jsx");
/* harmony import */ var _Pages_NewDemande__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Pages/NewDemande */ "./assets/react/controllers/Pages/NewDemande.jsx");
/* harmony import */ var _Pages_MyCompteBancaire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Pages/MyCompteBancaire */ "./assets/react/controllers/Pages/MyCompteBancaire.jsx");
/* harmony import */ var _Pages_MyDemandes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Pages/MyDemandes */ "./assets/react/controllers/Pages/MyDemandes.jsx");






















var Main = function Main(_ref) {
  var page = _ref.page;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)(),
    t = _useTranslation.t;
  var router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.createBrowserRouter)([{
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_IsAuthenticated__WEBPACK_IMPORTED_MODULE_5__["default"], {
      auth: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_PageLayout__WEBPACK_IMPORTED_MODULE_15__["default"], null)),
    errorElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_ErrorPage__WEBPACK_IMPORTED_MODULE_14__["default"], null),
    children: [{
      index: true,
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_Home__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "MINESEC-SUBVENTIONS"
      }),
      handle: {
        crumb: function crumb() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
            to: "/"
          }, t("home"));
        }
      }
    }, {
      path: "demande",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_NewDemande__WEBPACK_IMPORTED_MODULE_17__["default"], {
        title: "Apply for this session"
      }),
      handle: {
        crumb: function crumb() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
            to: "/"
          }, t("home"));
        }
      }
    }, {
      path: "mydemandes",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_MyDemandes__WEBPACK_IMPORTED_MODULE_19__["default"], {
        title: "List of my applications"
      }),
      handle: {
        crumb: function crumb() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
            to: "/"
          }, t("home"));
        }
      }
    }, {
      path: "compteBancaire",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_MyCompteBancaire__WEBPACK_IMPORTED_MODULE_18__["default"], {
        title: "Update my bank account details"
      }),
      handle: {
        crumb: function crumb() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
            to: "/"
          }, t("home"));
        }
      }
    }]
  }, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_IsAuthenticated__WEBPACK_IMPORTED_MODULE_5__["default"], {
      auth: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_SignIn__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: "let's log in"
    })),
    handle: {
      crumb: function crumb() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
          to: "/login"
        }, t("login"));
      }
    }
  }]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__.store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__.PersistGate, {
    persistor: _redux_store__WEBPACK_IMPORTED_MODULE_3__.persistor,
    loading: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.RouterProvider, {
    router: router
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./assets/react/controllers/Pages/Home.jsx":
/*!*************************************************!*\
  !*** ./assets/react/controllers/Pages/Home.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/theme */ "./assets/react/utils/theme.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Constants */ "./assets/react/utils/Constants.jsx");







var Home = function Home(props) {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
    t = _useTranslation.t;
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var colors = (0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.tokens)(theme.palette.mode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      flexGrow: 1,
      maxWidth: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h3",
    textAlign: "center"
  }, t("welcome_message"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " ", props.structure.name), props.structure.isTech && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h5",
    textAlign: "center",
    my: 8
  }, t("welcome_file_stat_estp_message"), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: "".concat(_utils_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].BASE_URL, "/uploads/").concat(i18next__WEBPACK_IMPORTED_MODULE_4__["default"].language == "en" ? "Eng Administrative Form Subv ESTP.pdf" : "Fr Fiche Administrative Subv ESTP.pdf"),
    target: "_blank",
    rel: "noopener",
    color: "#1FA030"
  }, t("welcome_file_stat_estp"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "outlined",
    severity: "warning",
    sx: {
      marginTop: 6,
      fontSize: 16
    }
  }, t("welcome_alert_account_message")));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: state.auth.roles,
    structure: state.auth.credentials.structure
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps)(Home));

/***/ }),

/***/ "./assets/react/controllers/Pages/MyCompteBancaire.jsx":
/*!*************************************************************!*\
  !*** ./assets/react/controllers/Pages/MyCompteBancaire.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_services_openApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../redux/services/openApi */ "./assets/react/controllers/redux/services/openApi.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_UploadFile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/UploadFile */ "./node_modules/@mui/icons-material/UploadFile.js");
/* harmony import */ var _controllers_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controllers/Error */ "./assets/react/controllers/Error.jsx");
/* harmony import */ var _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../redux/actions/configActions */ "./assets/react/controllers/redux/actions/configActions.js");
/* harmony import */ var _utils_Globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/Globals */ "./assets/react/utils/Globals.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Constants */ "./assets/react/utils/Constants.jsx");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/LoadingButton/LoadingButton.js");
/* harmony import */ var _utils_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/Loading */ "./assets/react/utils/Loading.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var Field = (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-block: 8px;\n  & label {\n    font-weight: bold;\n    font-size: 1rem;\n  }\n"])));
var MyCompteBancaire = function MyCompteBancaire(props) {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    initialValues = _useState2[0],
    setInitialValues = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    copyRib = _useState4[0],
    setCopyRib = _useState4[1];
  var fileInputField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useGetMyCompteBancai = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_5__.useGetMyCompteBancaireQuery)(props.structure.id, {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
      skip: false
    }),
    compte = _useGetMyCompteBancai.data,
    isFetching = _useGetMyCompteBancai.isFetching,
    error = _useGetMyCompteBancai.error;
  var _useUploadRibFileMuta = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_5__.useUploadRibFileMutation)(),
    _useUploadRibFileMuta2 = _slicedToArray(_useUploadRibFileMuta, 2),
    uploadRibFile = _useUploadRibFileMuta2[0],
    isUploading = _useUploadRibFileMuta2[1].isLoading;
  var _useEditOrCreateCompt = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_5__.useEditOrCreateCompteBancaireMutation)(),
    _useEditOrCreateCompt2 = _slicedToArray(_useEditOrCreateCompt, 2),
    updateCreateCompte = _useEditOrCreateCompt2[0],
    isUpdating = _useEditOrCreateCompt2[1].isLoading;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = props.title;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _compte$copyRIB;
    setInitialValues({
      id: (compte === null || compte === void 0 ? void 0 : compte.id) || 0,
      numero: (compte === null || compte === void 0 ? void 0 : compte.numero) || "",
      intitule: (compte === null || compte === void 0 ? void 0 : compte.intitule) || "",
      nameBanque: (compte === null || compte === void 0 ? void 0 : compte.nameBanque) || "",
      copyRIB: (compte === null || compte === void 0 ? void 0 : (_compte$copyRIB = compte.copyRIB) === null || _compte$copyRIB === void 0 ? void 0 : _compte$copyRIB.id) || 0
    });
    if (compte !== null && compte !== void 0 && compte.copyRIB) {
      setCopyRib(compte === null || compte === void 0 ? void 0 : compte.copyRIB);
    }
  }, [compte]);
  var checkoutSchema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
    numero: yup__WEBPACK_IMPORTED_MODULE_3__.string().required(t("form.error_numero_required")).min(8, t("form.error_numero_length")),
    intitule: yup__WEBPACK_IMPORTED_MODULE_3__.string().required(t("form.error_intitule_required")).min(9, t("form.error_intitule_required")),
    copyRIB: yup__WEBPACK_IMPORTED_MODULE_3__.number().positive(t("form.error_copierib_required")).integer().required(t("form.error_copierib_required")),
    nameBanque: yup__WEBPACK_IMPORTED_MODULE_3__.string().required(t("form.error_namebanque_required")).min(9, t("form.error_namebanque_length"))
  });
  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return updateCreateCompte(_objectSpread(_objectSpread({}, data), {}, {
              structure: props.structure.id
            }));
          case 2:
            res = _context.sent;
            if (res !== null && res !== void 0 && res.data.success) {
              props.setInfoMsg({
                message: t("message.compte_create_updated_success"),
                severity: "success"
              });
            } else {
              props.setInfoMsg({
                message: res === null || res === void 0 ? void 0 : res.data.message,
                severity: "error"
              });
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleFormSubmit(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleNewFile = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, setFieldValue) {
      var allowedTypes, _e$target$files$, _res$data, formData, res, _res$data2, _res$data$data, _res$error;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            allowedTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];
            if (!e.target.files[0]) {
              _context2.next = 16;
              break;
            }
            console.log(e.target.files[0]);
            if (!(e.target.files[0].size > 2097152)) {
              _context2.next = 6;
              break;
            }
            props.setInfoMsg({
              message: t("message.file_upload_toobig"),
              severity: "warning"
            });
            return _context2.abrupt("return", false);
          case 6:
            if (allowedTypes.includes((_e$target$files$ = e.target.files[0]) === null || _e$target$files$ === void 0 ? void 0 : _e$target$files$.type)) {
              _context2.next = 9;
              break;
            }
            props.setInfoMsg({
              message: t("message.file_upload_wrongtype"),
              severity: "warning"
            });
            return _context2.abrupt("return", false);
          case 9:
            formData = new FormData();
            formData.append("fileName", e.target.files[0].name);
            formData.append("file", e.target.files[0]);
            _context2.next = 14;
            return uploadRibFile({
              id: props.structure.id,
              data: formData
            });
          case 14:
            res = _context2.sent;
            if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.success) {
              props.setInfoMsg({
                message: t("message.file_upload_success"),
                severity: "success"
              });
              setCopyRib((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.data);
              setFieldValue("copyRIB", (_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.id);
            } else {
              props.setInfoMsg({
                message: res === null || res === void 0 ? void 0 : (_res$error = res.error) === null || _res$error === void 0 ? void 0 : _res$error.data.message,
                severity: "error"
              });
            }
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleNewFile(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  if (isFetching) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Loading__WEBPACK_IMPORTED_MODULE_10__["default"], null);
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_controllers_Error__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    enableReinitialize: true,
    onSubmit: handleFormSubmit,
    initialValues: _objectSpread({}, initialValues),
    validationSchema: checkoutSchema
  }, function (_ref3) {
    var values = _ref3.values,
      errors = _ref3.errors,
      touched = _ref3.touched,
      handleBlur = _ref3.handleBlur,
      handleChange = _ref3.handleChange,
      handleSubmit = _ref3.handleSubmit,
      setFieldValue = _ref3.setFieldValue;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      component: "form",
      onSubmit: handleSubmit,
      sx: {
        my: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      variant: "h4",
      marginTop: 3,
      marginBottom: 6
    }, t("account_details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      id: "nameBanque",
      label: t("form.namebanque"),
      fullWidth: true,
      name: "nameBanque",
      variant: "standard",
      InputLabelProps: {
        shrink: true
      },
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.nameBanque,
      error: !!touched.nameBanque && !!errors.nameBanque,
      helperText: touched.nameBanque && errors.nameBanque
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      id: "numero",
      label: t("form.numero"),
      fullWidth: true,
      name: "numero",
      variant: "standard",
      InputLabelProps: {
        shrink: true
      },
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.numero,
      error: !!touched.numero && !!errors.numero,
      helperText: touched.numero && errors.numero
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      id: "intitule",
      label: t("form.intitule"),
      fullWidth: true,
      name: "intitule",
      variant: "standard",
      InputLabelProps: {
        shrink: true
      },
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.intitule,
      error: !!touched.intitule && !!errors.intitule,
      helperText: touched.intitule && errors.intitule
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginY: 1
    }, values.copyRIB ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      href: "".concat(_utils_Constants__WEBPACK_IMPORTED_MODULE_9__["default"].BASE_URL, "/uploads/").concat(copyRib.fileName),
      target: "_blank",
      rel: "noopener",
      color: touched.copyRIB && "#FF0000"
    }, copyRib.fileName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      variant: "subtitle1",
      color: touched.copyRIB && "red"
    }, t("form.file_not_attached")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      style: {
        visibility: "hidden"
      },
      type: "file",
      ref: fileInputField,
      onChange: function onChange(e) {
        return handleNewFile(e, setFieldValue);
      },
      accept: "image/png, image/jpeg, .pdf"
    }), isUploading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      color: "inherit"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      edge: "start",
      "aria-label": "upload",
      onClick: function onClick() {
        return fileInputField.current.click();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_UploadFile__WEBPACK_IMPORTED_MODULE_19__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_20__["default"], {
      type: "submit",
      variant: "contained",
      fullWidth: true,
      size: "large",
      loading: isUpdating
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, t("form.submit_compte")))));
  });
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: state.auth.roles,
    structure: state.auth.credentials.structure,
    session: state.auth.credentials.session
  };
};
var mapActionsToProps = {
  setInfoMsg: _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_7__.setInfoMsg
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapActionsToProps)(MyCompteBancaire));

/***/ }),

/***/ "./assets/react/controllers/Pages/MyDemandes.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/controllers/Pages/MyDemandes.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../redux/actions/configActions */ "./assets/react/controllers/redux/actions/configActions.js");
/* harmony import */ var _redux_services_openApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../redux/services/openApi */ "./assets/react/controllers/redux/services/openApi.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Table */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/TableBody */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/tableCellClasses.js");
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TableContainer */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/TableHead */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _utils_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Loading */ "./assets/react/utils/Loading.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }














var StyledTableCell = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__["default"])(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"])(function (_ref) {
  var _ref2;
  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"].head), {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    writingMode: "sideways-lr",
    padding: 0
  }), _defineProperty(_ref2, "&.".concat(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"].body), {
    fontSize: 14
  }), _ref2;
});
var StyledTableRow = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__["default"])(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"])(function (_ref3) {
  var theme = _ref3.theme;
  return {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
  };
});
var MyDemandes = function MyDemandes(props) {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
    t = _useTranslation.t;
  var _useGetMyDemandesQuer = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_4__.useGetMyDemandesQuery)(props.structure.id, {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
      skip: false
    }),
    data = _useGetMyDemandesQuer.data,
    isFetching = _useGetMyDemandesQuer.isFetching,
    error = _useGetMyDemandesQuer.error;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = props.title;
  }, []);
  console.log(data, error);
  return isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__["default"],
    sx: {
      p: "2px 6px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      minWidth: 700
    },
    size: "small",
    "aria-label": "search table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, null, t("table.reference")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.dateDemande")), props.structure.quality == "Etablissement" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.ptEffectifs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.assuranceElevePt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.QuoteFenascoPt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.cotisationSeducPt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.positionGeoPt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.apsCnpsPt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.reverseRetenuFiscPt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.percentExamenPt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.personnelsPt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.permaVacatairePt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.conformitePt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.equipementsPt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.mesuresBarieresPt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.cleanSchoolPt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.digitalisationPt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.score"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.status")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.montant")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
    align: "right"
  }, t("table.observation")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14__["default"], null, data === null || data === void 0 ? void 0 : data.map(function (row) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableRow, {
      key: row.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      component: "th",
      scope: "row"
    }, row.session), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.date_demande), props.structure.quality == "Etablissement" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.effectif_eleves), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.assurance_eleves), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.quote_part_fenasco), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.cotisation_seduc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.position_geographique), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.aps_cnps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.reverse_retenu_fiscale), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.pourcentage_examen), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.personnels), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.ration_permanent_vacataire), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.conformite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.equipements), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.mesures_barieres), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.clean_school), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.digitalisation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.score)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.statut), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.montant), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableCell, {
      align: "right"
    }, row.observation));
  }))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: state.auth.roles,
    structure: state.auth.credentials.structure
  };
};
var mapActionsToProps = {
  setInfoMsg: _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_3__.setInfoMsg
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapActionsToProps)(MyDemandes));

/***/ }),

/***/ "./assets/react/controllers/Pages/NewDemande.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/controllers/Pages/NewDemande.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormHelperText/FormHelperText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/LoadingButton/LoadingButton.js");
/* harmony import */ var _redux_services_openApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../redux/services/openApi */ "./assets/react/controllers/redux/services/openApi.js");
/* harmony import */ var _controllers_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controllers/Error */ "./assets/react/controllers/Error.jsx");
/* harmony import */ var _Components_structures_StructureDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/structures/StructureDetails */ "./assets/react/controllers/Components/structures/StructureDetails.jsx");
/* harmony import */ var _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../redux/actions/configActions */ "./assets/react/controllers/redux/actions/configActions.js");
/* harmony import */ var _Components_demandes_DemandePieces__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/demandes/DemandePieces */ "./assets/react/controllers/Components/demandes/DemandePieces.jsx");
/* harmony import */ var _Components_demandes_ImprimeEts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/demandes/ImprimeEts */ "./assets/react/controllers/Components/demandes/ImprimeEts.jsx");
/* harmony import */ var _utils_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/Loading */ "./assets/react/utils/Loading.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var Grid = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])("div")(function (_ref) {
  var theme = _ref.theme;
  return "\n  display: grid;\n  width: 96%;\n  margin: 10px auto;\n  grid-template-columns: 70% 30%;\n  gap: 20px;\n  grid-template-areas: \n    \"piece   piece\"\n    \"demande structure\";\n  ".concat(theme.breakpoints.down("sm"), "{\n    grid-template-columns: 1fr;\n    grid-template-areas:\n    \"structure\" \n    \"piece\";\n    \"demande\"\n  }\n");
});
var Field = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  & label {\n    font-weight: bold;\n    font-size: 1rem;\n  }\n"])));
var DemandeContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])("div")("\n  grid-area: demande;\n");
var StructureContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])("div")("\n  grid-area: structure;\n");
var PieceContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])("div")("\n  grid-area: piece;\n");
var NewDemande = function NewDemande(props) {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      nombreEleve: 0,
      nombrePersonnelEnseignant: 0,
      nombrePersonnelPermanent: 0,
      personnel_autorise: false,
      personnel_contract: false,
      percentExamen: 0,
      nomFondateur: "",
      contactFondateur: "",
      contacts: "",
      isOrg: isOrg
    }),
    _useState2 = _slicedToArray(_useState, 2),
    initialValues = _useState2[0],
    setInitialValues = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    valide = _useState4[0],
    setValide = _useState4[1];
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"])();
  var isOrg = props.structure.quality !== "Etablissement";
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openFormPrint = _useState6[0],
    setOpenFormPrint = _useState6[1];
  var _useGetDemandeCurrent = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_5__.useGetDemandeCurrentQuery)({
      id: props.structure.id,
      session: props.session.id
    }, {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
      skip: false
    }),
    demande = _useGetDemandeCurrent.data,
    isFetching = _useGetDemandeCurrent.isFetching,
    error = _useGetDemandeCurrent.error;
  var _useEditDemandeMutati = (0,_redux_services_openApi__WEBPACK_IMPORTED_MODULE_5__.useEditDemandeMutation)(),
    _useEditDemandeMutati2 = _slicedToArray(_useEditDemandeMutati, 2),
    updateDemande = _useEditDemandeMutati2[0],
    isUpdating = _useEditDemandeMutati2[1].isLoading;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = props.title;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (demande) {
      var _demande$structure, _demande$structure2, _demande$structure3;
      setInitialValues({
        nombreEleve: (demande === null || demande === void 0 ? void 0 : demande.nombreEleve) || 0,
        nombrePersonnelEnseignant: (demande === null || demande === void 0 ? void 0 : demande.nombrePersonnelEnseignant) || 0,
        nombrePersonnelPermanent: (demande === null || demande === void 0 ? void 0 : demande.nombrePersonnelPermanent) || 0,
        personnel_autorise: (demande === null || demande === void 0 ? void 0 : demande.personnel_autorise) || false,
        personnel_contract: (demande === null || demande === void 0 ? void 0 : demande.personnel_contract) || false,
        percentExamen: (demande === null || demande === void 0 ? void 0 : demande.percentExamen) || 0,
        nomFondateur: (demande === null || demande === void 0 ? void 0 : (_demande$structure = demande.structure) === null || _demande$structure === void 0 ? void 0 : _demande$structure.nomFondateur) || "",
        contactFondateur: (demande === null || demande === void 0 ? void 0 : (_demande$structure2 = demande.structure) === null || _demande$structure2 === void 0 ? void 0 : _demande$structure2.contactFondateur) || "",
        contacts: (demande === null || demande === void 0 ? void 0 : (_demande$structure3 = demande.structure) === null || _demande$structure3 === void 0 ? void 0 : _demande$structure3.contacts) || "",
        isOrg: isOrg
      });
    }
  }, [demande, isOrg]);
  var checkoutSchema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
    nomFondateur: yup__WEBPACK_IMPORTED_MODULE_3__.string().required(t("form.error_namef_required")).min(4, t("form.error_namef_length")),
    contactFondateur: yup__WEBPACK_IMPORTED_MODULE_3__.string().required(t("form.error_contactf_required")).min(9, t("form.error_contacts_length")),
    isOrg: yup__WEBPACK_IMPORTED_MODULE_3__.boolean().notRequired(),
    personnel_autorise: yup__WEBPACK_IMPORTED_MODULE_3__.boolean().when("isOrg", function (_ref2, schema) {
      var _ref3 = _slicedToArray(_ref2, 1),
        isOrg = _ref3[0];
      return isOrg ? schema.notRequired() : schema.required(t("form.error_personnel_autorise_required"));
    }),
    personnel_contract: yup__WEBPACK_IMPORTED_MODULE_3__.boolean().when("isOrg", function (_ref4, schema) {
      var _ref5 = _slicedToArray(_ref4, 1),
        isOrg = _ref5[0];
      return isOrg ? schema.notRequired() : schema.required(t("form.error_personnel_contract_required"));
    }),
    contacts: yup__WEBPACK_IMPORTED_MODULE_3__.string().required(t("form.error_contacts_required")).min(9, t("form.error_contacts_length")),
    percentExamen: yup__WEBPACK_IMPORTED_MODULE_3__.number().when("isOrg", function (_ref6, schema) {
      var _ref7 = _slicedToArray(_ref6, 1),
        isOrg = _ref7[0];
      return isOrg ? schema.notRequired() : schema.positive(t("form.error_nombre_positif")).required(t("form.error_percentExamen_required")).min(0, t("form.error_nombre_min", {
        val: 0
      })).max(100, t("form.error_nombre_max", {
        val: 100
      }));
    }),
    nombrePersonnelEnseignant: yup__WEBPACK_IMPORTED_MODULE_3__.number().when("isOrg", function (_ref8, schema) {
      var _ref9 = _slicedToArray(_ref8, 1),
        isOrg = _ref9[0];
      return isOrg ? schema.notRequired() : schema.positive(t("form.error_nombre_positif")).required(t("form.error_nombrePersonnelEnseignant_required"));
    }),
    nombreEleve: yup__WEBPACK_IMPORTED_MODULE_3__.number().when("isOrg", function (_ref10, schema) {
      var _ref11 = _slicedToArray(_ref10, 1),
        isOrg = _ref11[0];
      return isOrg ? schema.notRequired() : schema.positive(t("form.error_nombre_positif")).required(t("form.error_nombreEleve_required"));
    }),
    nombrePersonnelPermanent: yup__WEBPACK_IMPORTED_MODULE_3__.number().positive(t("form.error_nombrePersonnelPermanent_required")).when("nombrePersonnelEnseignant", function (_ref12, schema) {
      var _ref13 = _slicedToArray(_ref12, 1),
        nombrePersonnelEnseignant = _ref13[0];
      return nombrePersonnelEnseignant ? schema.max(nombrePersonnelEnseignant, t("form.error_nombre_max", {
        val: nombrePersonnelEnseignant
      })) : schema.min(0, t("form.error_nombre_min", {
        val: 0
      })).notRequired();
    })
  }, [["nombrePersonnelPermanent", "nombrePersonnelEnseignant"], ["nombreEleve", "isOrg"], ["nombrePersonnelEnseignant", "isOrg"], ["percentExamen", "isOrg"], ["personnel_autorise", "isOrg"], ["personnel_contract", "isOrg"]]);
  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var res, jres;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return updateDemande(_objectSpread(_objectSpread({}, data), {}, {
              id: demande === null || demande === void 0 ? void 0 : demande.id
            }));
          case 2:
            res = _context.sent;
            jres = JSON.parse(res === null || res === void 0 ? void 0 : res.data);
            if (jres !== null && jres !== void 0 && jres.success) {
              props.setInfoMsg({
                message: t("message.demande_updated_success"),
                severity: "success"
              });
              setOpenFormPrint(true);
            } else {
              props.setInfoMsg({
                message: jres === null || jres === void 0 ? void 0 : jres.message,
                severity: "error"
              });
            }
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleFormSubmit(_x2) {
      return _ref14.apply(this, arguments);
    };
  }();
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_controllers_Error__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DemandeContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    enableReinitialize: true,
    onSubmit: handleFormSubmit,
    initialValues: _objectSpread({}, initialValues),
    validationSchema: checkoutSchema
  }, function (_ref15) {
    var values = _ref15.values,
      errors = _ref15.errors,
      touched = _ref15.touched,
      handleBlur = _ref15.handleBlur,
      handleChange = _ref15.handleChange,
      handleSubmit = _ref15.handleSubmit,
      setFieldValue = _ref15.setFieldValue;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      component: "form",
      onSubmit: handleSubmit,
      sx: {
        my: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }
    }, isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, !isOrg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", {
      style: {
        marginBlock: 20,
        padding: 15,
        borderWidth: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("legend", null, t("demande.group")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      id: "nombreEleve",
      label: t("form.nombreEleve"),
      fullWidth: true,
      type: "number",
      name: "nombreEleve",
      variant: "standard",
      InputLabelProps: {
        shrink: true
      },
      inputProps: {
        min: 0
      },
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.nombreEleve,
      error: !!touched.nombreEleve && !!errors.nombreEleve,
      helperText: touched.nombreEleve && errors.nombreEleve
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      id: "percentExamen",
      label: t("form.percentExamen"),
      fullWidth: true,
      type: "number",
      name: "percentExamen",
      variant: "standard",
      InputLabelProps: {
        shrink: true
      },
      inputProps: {
        min: 0,
        max: 100
      },
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.percentExamen,
      error: !!touched.percentExamen && !!errors.percentExamen,
      helperText: touched.percentExamen && errors.percentExamen,
      sx: {
        my: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      id: "nombrePersonnelEnseignant",
      label: t("form.nombrePersonnelEnseignant"),
      fullWidth: true,
      name: "nombrePersonnelEnseignant",
      type: "number",
      variant: "standard",
      inputProps: {
        min: 0
      },
      InputLabelProps: {
        shrink: true
      },
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.nombrePersonnelEnseignant,
      error: !!touched.nombrePersonnelEnseignant && !!errors.nombrePersonnelEnseignant,
      helperText: touched.nombrePersonnelEnseignant && errors.nombrePersonnelEnseignant,
      sx: {
        my: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      id: "nombrePersonnelPermanent",
      label: t("form.nombrePersonnelPermanent"),
      fullWidth: true,
      name: "nombrePersonnelPermanent",
      type: "number",
      variant: "standard",
      inputProps: {
        min: 0
      },
      InputLabelProps: {
        shrink: true
      },
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.nombrePersonnelPermanent,
      error: !!touched.nombrePersonnelPermanent && !!errors.nombrePersonnelPermanent,
      helperText: touched.nombrePersonnelPermanent && errors.nombrePersonnelPermanent,
      sx: {
        my: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
        checked: values.personnel_autorise,
        onChange: function onChange(e) {
          setFieldValue("personnel_autorise", e.target.checked);
        }
      }),
      label: t("form.personnel_autorise")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, touched.personnel_autorise && errors.personnel_autorise)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
        checked: values.personnel_contract,
        onChange: function onChange(e) {
          setFieldValue("personnel_contract", e.target.checked);
        }
      }),
      label: t("form.personnel_contract")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, touched.personnel_contract && errors.personnel_contract))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", {
      style: {
        padding: 15,
        borderWidth: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("legend", null, t("structure.group")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      id: "contacts",
      label: t("form.contacts"),
      fullWidth: true,
      name: "contacts",
      variant: "standard",
      InputLabelProps: {
        shrink: true
      },
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.contacts,
      error: !!touched.contacts && !!errors.contacts,
      helperText: touched.contacts && errors.contacts
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      id: "nomFondateur",
      label: t("form.nomFondateur"),
      fullWidth: true,
      name: "nomFondateur",
      variant: "standard",
      InputLabelProps: {
        shrink: true
      },
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.nomFondateur,
      error: !!touched.nomFondateur && !!errors.nomFondateur,
      helperText: touched.nomFondateur && errors.nomFondateur,
      sx: {
        my: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, {
      id: "contactFondateur",
      label: t("form.contactFondateur"),
      fullWidth: true,
      name: "contactFondateur",
      variant: "standard",
      InputLabelProps: {
        shrink: true
      },
      onBlur: handleBlur,
      onChange: handleChange,
      value: values.contactFondateur,
      error: !!touched.contactFondateur && !!errors.contactFondateur,
      helperText: touched.contactFondateur && errors.contactFondateur,
      sx: {
        my: 1
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", {
      style: {
        padding: 15,
        marginBlock: 10,
        borderWidth: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("legend", null, t("contact.group")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      variant: "h5"
    }, "Le S\xE9cretariat Technique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      variant: "body1"
    }, "Tel:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "tel:677378455",
      target: "_blank"
    }, "677 37 84 55 / 694 29 81 31 / 677 686 474")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      variant: "body2"
    }, "Email:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "mailto:desg.sdsgepesg.ssub@minesec.gov.cm",
      target: "_blank"
    }, "desg.sdsgepesg.ssub@minesec.gov.cm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      variant: "h5",
      sx: {
        mt: 2
      }
    }, "La Cellule Informatique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      variant: "body1"
    }, "Tel:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "tel:674921111",
      target: "_blank"
    }, "674 92 11 11 / 674 58 16 07")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      variant: "body2"
    }, "Email:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "mailto:sg.celinfo.cea1@minesec.gov.cm",
      target: "_blank"
    }, "sg.celinfo.cea1@minesec.gov.cm")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_21__["default"], {
      type: "submit",
      variant: "contained",
      fullWidth: true,
      size: "large",
      loading: isUpdating,
      disabled: valide
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, t("form.submit")))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StructureContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_structures_StructureDetails__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOrg: isOrg
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PieceContainer, null, Boolean(demande) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_demandes_DemandePieces__WEBPACK_IMPORTED_MODULE_9__["default"], {
    demandeId: demande === null || demande === void 0 ? void 0 : demande.id,
    setValide: setValide
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_demandes_ImprimeEts__WEBPACK_IMPORTED_MODULE_10__["default"], {
    demandeId: demande === null || demande === void 0 ? void 0 : demande.id,
    open: openFormPrint,
    handleOpenClose: setOpenFormPrint
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: state.auth.roles,
    structure: state.auth.credentials.structure,
    session: state.auth.credentials.session
  };
};
var mapActionsToProps = {
  setInfoMsg: _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_8__.setInfoMsg
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapActionsToProps)(NewDemande));

/***/ }),

/***/ "./assets/react/controllers/Pages/PageLayout.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/controllers/Pages/PageLayout.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _Components_TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/TopBar */ "./assets/react/controllers/Components/TopBar.jsx");
/* harmony import */ var _Components_SideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/SideBar */ "./assets/react/controllers/Components/SideBar.jsx");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/theme */ "./assets/react/utils/theme.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Snackbar */ "./node_modules/@mui/material/Snackbar/Snackbar.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _Components_Copyright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Copyright */ "./assets/react/controllers/Components/Copyright.jsx");
/* harmony import */ var _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../redux/actions/configActions */ "./assets/react/controllers/redux/actions/configActions.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _Components_BreadCrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/BreadCrumbs */ "./assets/react/controllers/Components/BreadCrumbs.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















var Alert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Alert(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
    elevation: 6,
    ref: ref,
    variant: "filled"
  }, props));
});
var PageLayout = function PageLayout(props) {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isSidebar = _useState2[0],
    setIsSidebar = _useState2[1];
  var colors = (0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.tokens)(props.mode);
  var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.themeSettings)(props.mode));
  }, [props.mode]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_SideBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isSidebar: isSidebar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "main",
    sx: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto"
    },
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_TopBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setIsSidebar: setIsSidebar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      mt: 4,
      mb: 4,
      mx: 4,
      maxWidth: "100dvw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_BreadCrumbs__WEBPACK_IMPORTED_MODULE_8__["default"], {
    t: t
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Outlet, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Copyright__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      pt: 4
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_17__["default"], {
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    open: props.snackOpen,
    autoHideDuration: 6000,
    onClose: props.clearInfoMsg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Alert, {
    onClose: props.clearInfoMsg,
    severity: props.infoSeverity,
    sx: {
      width: "100%"
    }
  }, props.messageInfo))))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    mode: state.config.mode,
    messageInfo: state.config.infoMessage,
    snackOpen: state.config.snackOpen,
    infoSeverity: state.config.infoSeverity
  };
};
var mapActionsToProps = {
  setInfoMsg: _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_7__.setInfoMsg,
  clearInfoMsg: _redux_actions_configActions__WEBPACK_IMPORTED_MODULE_7__.clearInfoMsg
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapActionsToProps)(PageLayout));

/***/ }),

/***/ "./assets/react/controllers/Pages/SignIn.jsx":
/*!***************************************************!*\
  !*** ./assets/react/controllers/Pages/SignIn.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _Components_users_signinForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/users/signinForm */ "./assets/react/controllers/Components/users/signinForm.js");
/* harmony import */ var _Components_users_signupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/users/signupForm */ "./assets/react/controllers/Components/users/signupForm.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _Components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Contact */ "./assets/react/controllers/Components/Contact.jsx");
/* harmony import */ var _Components_users_resetForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/users/resetForm */ "./assets/react/controllers/Components/users/resetForm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var SignIn = function SignIn(props) {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
    t = _useTranslation.t;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(1),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    signIn = _React$useState2[0],
    setSignIn = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    document.title = props.title;
  }, []);
  var renderComponent = function renderComponent(t) {
    switch (signIn) {
      case 1:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_users_signinForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
          t: t,
          reset: function reset() {
            return setSignIn(2);
          },
          help: function help() {
            return setSignIn(3);
          },
          signup: function signup() {
            return setSignIn(0);
          }
        });
      case 2:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_users_resetForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
          t: t,
          signin: function signin() {
            return setSignIn(1);
          },
          help: function help() {
            return setSignIn(3);
          }
        });
      case 3:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
          t: t,
          signin: function signin() {
            return setSignIn(1);
          },
          signup: function signup() {
            return setSignIn(0);
          }
        });
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_users_signupForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
          t: t,
          signin: function signin() {
            return setSignIn(1);
          },
          help: function help() {
            return setSignIn(3);
          }
        });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    component: "main",
    sx: {
      height: "100vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sx: {
      backgroundImage: "url(./images/minesec.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      position: "relative",
      maxWidth: 700,
      backgroundColor: "#fff3",
      backdropFilter: "blur(15px)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      position: "absolute",
      top: 5,
      right: 5,
      color: "mediumspringgreen"
    },
    onClick: function onClick() {
      return i18next__WEBPACK_IMPORTED_MODULE_4__["default"].changeLanguage(i18next__WEBPACK_IMPORTED_MODULE_4__["default"].language.startsWith("fr") ? "en" : "fr");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: t("change_language")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, i18next__WEBPACK_IMPORTED_MODULE_4__["default"].language.startsWith("fr") ? " EN" : " FR"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    style: {
      marginInline: "auto",
      marginBlockStart: "2rem",
      marginBlockEnd: "1rem",
      textAlign: "center",
      fontSize: "1.6rem",
      fontWeight: 700
    }
  }, t("welcome_title", {
    ns: "login"
  })), renderComponent(t))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);

/***/ }),

/***/ "./assets/react/controllers/redux/actions/UserActions.js":
/*!***************************************************************!*\
  !*** ./assets/react/controllers/redux/actions/UserActions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearErrors": () => (/* binding */ clearErrors),
/* harmony export */   "getUserData": () => (/* binding */ getUserData),
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "loginUser": () => (/* binding */ loginUser),
/* harmony export */   "logoutUser": () => (/* binding */ logoutUser),
/* harmony export */   "registerUser": () => (/* binding */ registerUser),
/* harmony export */   "resetUser": () => (/* binding */ resetUser),
/* harmony export */   "setErrors": () => (/* binding */ setErrors),
/* harmony export */   "setMe": () => (/* binding */ setMe)
/* harmony export */ });
/* harmony import */ var _reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/UserReducer */ "./assets/react/controllers/redux/reducers/UserReducer.js");
/* harmony import */ var _reducers_configReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/configReducer */ "./assets/react/controllers/redux/reducers/configReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/Constants */ "./assets/react/utils/Constants.jsx");




var publicAxios = axios__WEBPACK_IMPORTED_MODULE_3__["default"].create({
  baseURL: _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["default"].BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
var loginUser = function loginUser(userData, navigate, from) {
  return function (dispatch) {
    dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.IS_BUSY)());
    publicAxios.post("/api/login_check", userData).then(function (res) {
      if (res.data.token) {
        navigate(from);
        dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.AUTHENTICATED)(res.data));
      }
    })["catch"](function (err) {
      var _err$response, _err$response$data;
      dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.SET_ERRORS)((_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message));
    });
  };
};
var registerUser = function registerUser(userData, navigate) {
  return function (dispatch) {
    dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.IS_BUSY)());
    publicAxios.post("/api/register", userData).then(function (res) {
      if (res.status === 201) {
        dispatch(loginUser({
          username: userData.username,
          password: userData.plainPassword
        }, navigate, "/"));
      } else {
        dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.SET_ERRORS)(res.data.message));
      }
    })["catch"](function (err) {
      console.log(err);
      dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.SET_ERRORS)(err.message));
    });
  };
};
var resetUser = function resetUser(userData, navigate) {
  return function (dispatch) {
    dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.IS_BUSY)());
    publicAxios.post("/api/reset", userData).then(function (res) {
      if (res.status === 200) {
        dispatch(loginUser({
          username: userData.code_immatriculation,
          password: userData.plainPassword
        }, navigate, "/"));
      } else {
        dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.SET_ERRORS)(res.data.message));
      }
    })["catch"](function (err) {
      var _err$response2;
      console.log(err);
      dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.SET_ERRORS)((_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.data));
    });
  };
};
var logoutUser = function logoutUser(navigate) {
  return function (dispatch) {
    dispatch((0,_reducers_configReducer__WEBPACK_IMPORTED_MODULE_1__.CLEAR_MENU)());
    dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.UNAUTHENTICATED)());
  };
};
var setErrors = function setErrors(errors) {
  return function (dispatch) {
    dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.SET_ERRORS)(errors));
  };
};
var setMe = function setMe(membre) {
  return function (dispatch) {
    dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.SET_USER)(membre));
  };
};
var getUserData = function getUserData(access_token, authenticated) {
  return function (dispatch) {
    publicAxios.get("/api/structure/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(access_token)
      }
    }).then(function (res) {
      dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.SET_USER)(res.data));
      dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.AUTHENTICATED)(authenticated));
    })["catch"](function (err) {
      dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.SET_ERRORS)(err.message));
    });
  };
};
var clearErrors = function clearErrors() {
  return function (dispatch) {
    dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ERRORS)());
  };
};
var loading = function loading() {
  return function (dispatch) {
    dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_0__.IS_BUSY)());
  };
};

/***/ }),

/***/ "./assets/react/controllers/redux/actions/configActions.js":
/*!*****************************************************************!*\
  !*** ./assets/react/controllers/redux/actions/configActions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMenuBread": () => (/* binding */ addMenuBread),
/* harmony export */   "changeMode": () => (/* binding */ changeMode),
/* harmony export */   "clearInfoMsg": () => (/* binding */ clearInfoMsg),
/* harmony export */   "clearMenuBread": () => (/* binding */ clearMenuBread),
/* harmony export */   "removeMenuBread": () => (/* binding */ removeMenuBread),
/* harmony export */   "setInfoMsg": () => (/* binding */ setInfoMsg)
/* harmony export */ });
/* harmony import */ var _reducers_configReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/configReducer */ "./assets/react/controllers/redux/reducers/configReducer.js");

var changeMode = function changeMode(mode) {
  return function (dispatch) {
    dispatch((0,_reducers_configReducer__WEBPACK_IMPORTED_MODULE_0__.SET_MODE)(mode === "light" ? "dark" : "light"));
  };
};
var setInfoMsg = function setInfoMsg(message) {
  return function (dispatch) {
    dispatch((0,_reducers_configReducer__WEBPACK_IMPORTED_MODULE_0__.SET_INFO_MESSAGE)(message));
  };
};
var addMenuBread = function addMenuBread(menu) {
  return function (dispatch) {
    dispatch((0,_reducers_configReducer__WEBPACK_IMPORTED_MODULE_0__.ADD_MENU)(menu));
  };
};
var removeMenuBread = function removeMenuBread(item) {
  return function (dispatch) {
    dispatch((0,_reducers_configReducer__WEBPACK_IMPORTED_MODULE_0__.REMOVE_MENU)(item));
  };
};
var clearMenuBread = function clearMenuBread() {
  return function (dispatch) {
    dispatch((0,_reducers_configReducer__WEBPACK_IMPORTED_MODULE_0__.CLEAR_MENU)());
  };
};
var clearInfoMsg = function clearInfoMsg() {
  return function (dispatch) {
    dispatch((0,_reducers_configReducer__WEBPACK_IMPORTED_MODULE_0__.CLEAR_INFO_MESSAGE)());
  };
};

/***/ }),

/***/ "./assets/react/controllers/redux/reducers/UserReducer.js":
/*!****************************************************************!*\
  !*** ./assets/react/controllers/redux/reducers/UserReducer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTHENTICATED": () => (/* binding */ AUTHENTICATED),
/* harmony export */   "CLEAR_ERRORS": () => (/* binding */ CLEAR_ERRORS),
/* harmony export */   "IS_BUSY": () => (/* binding */ IS_BUSY),
/* harmony export */   "LOAD_USER": () => (/* binding */ LOAD_USER),
/* harmony export */   "SET_ERRORS": () => (/* binding */ SET_ERRORS),
/* harmony export */   "SET_USER": () => (/* binding */ SET_USER),
/* harmony export */   "TOGGLE_SIDEBAR": () => (/* binding */ TOGGLE_SIDEBAR),
/* harmony export */   "UNAUTHENTICATED": () => (/* binding */ UNAUTHENTICATED),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var initialState = {
  authenticated: false,
  access_token: "",
  showSideBar: true,
  loading: false,
  errors: null,
  roles: [],
  credentials: {},
  structure: {}
};
var UserSclice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "user",
  initialState: initialState,
  reducers: {
    AUTHENTICATED: function AUTHENTICATED(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        errors: "",
        access_token: action.payload.token,
        credentials: action.payload.data,
        roles: action.payload.data.role,
        authenticated: true,
        loading: false
      });
    },
    IS_BUSY: function IS_BUSY(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });
    },
    SET_ERRORS: function SET_ERRORS(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        errors: action.payload,
        loading: false
      });
    },
    CLEAR_ERRORS: function CLEAR_ERRORS(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        errors: "",
        loading: false
      });
    },
    UNAUTHENTICATED: function UNAUTHENTICATED(state, action) {
      return _objectSpread(_objectSpread({}, initialState), {}, {
        access_token: ""
      });
    },
    TOGGLE_SIDEBAR: function TOGGLE_SIDEBAR(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        showSideBar: !state.showSideBar
      });
    },
    SET_USER: function SET_USER(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        structure: action.payload
      });
    }
  }
});
var _UserSclice$actions = UserSclice.actions,
  AUTHENTICATED = _UserSclice$actions.AUTHENTICATED,
  LOAD_USER = _UserSclice$actions.LOAD_USER,
  SET_ERRORS = _UserSclice$actions.SET_ERRORS,
  CLEAR_ERRORS = _UserSclice$actions.CLEAR_ERRORS,
  SET_USER = _UserSclice$actions.SET_USER,
  UNAUTHENTICATED = _UserSclice$actions.UNAUTHENTICATED,
  TOGGLE_SIDEBAR = _UserSclice$actions.TOGGLE_SIDEBAR,
  IS_BUSY = _UserSclice$actions.IS_BUSY;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSclice.reducer);

/***/ }),

/***/ "./assets/react/controllers/redux/reducers/configReducer.js":
/*!******************************************************************!*\
  !*** ./assets/react/controllers/redux/reducers/configReducer.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_MENU": () => (/* binding */ ADD_MENU),
/* harmony export */   "CLEAR_INFO_MESSAGE": () => (/* binding */ CLEAR_INFO_MESSAGE),
/* harmony export */   "CLEAR_MENU": () => (/* binding */ CLEAR_MENU),
/* harmony export */   "REMOVE_MENU": () => (/* binding */ REMOVE_MENU),
/* harmony export */   "SET_INFO_MESSAGE": () => (/* binding */ SET_INFO_MESSAGE),
/* harmony export */   "SET_MODE": () => (/* binding */ SET_MODE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var initialConfig = {
  mode: "light",
  infoMessage: "",
  snackOpen: false,
  infoSeverity: "info",
  menuo: []
};
var configSclice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "config",
  initialState: initialConfig,
  reducers: {
    SET_MODE: function SET_MODE(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        mode: action.payload
      });
    },
    SET_INFO_MESSAGE: function SET_INFO_MESSAGE(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        infoMessage: action.payload.message,
        snackOpen: true,
        infoSeverity: action.payload.severity
      });
    },
    CLEAR_INFO_MESSAGE: function CLEAR_INFO_MESSAGE(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        infoMessage: "",
        snackOpen: false,
        infoSeverity: "info"
      });
    },
    REMOVE_MENU: function REMOVE_MENU(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        menuo: _toConsumableArray(state.menuo.filter(function (_, i) {
          return i !== action.payload;
        }))
      });
    },
    ADD_MENU: function ADD_MENU(state, action) {
      var present = state.menuo.some(function (menu) {
        return menu.to == action.payload.to;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        menuo: present ? state.menuo : [].concat(_toConsumableArray(state.menuo), [action.payload])
      });
    },
    CLEAR_MENU: function CLEAR_MENU(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        menuo: []
      });
    }
  }
});
var _configSclice$actions = configSclice.actions,
  SET_MODE = _configSclice$actions.SET_MODE,
  SET_INFO_MESSAGE = _configSclice$actions.SET_INFO_MESSAGE,
  CLEAR_INFO_MESSAGE = _configSclice$actions.CLEAR_INFO_MESSAGE,
  REMOVE_MENU = _configSclice$actions.REMOVE_MENU,
  ADD_MENU = _configSclice$actions.ADD_MENU,
  CLEAR_MENU = _configSclice$actions.CLEAR_MENU;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configSclice.reducer);

/***/ }),

/***/ "./assets/react/controllers/redux/requests/publicAxios.js":
/*!****************************************************************!*\
  !*** ./assets/react/controllers/redux/requests/publicAxios.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/Constants */ "./assets/react/utils/Constants.jsx");


var publicAxios = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
  baseURL: _utils_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publicAxios);

/***/ }),

/***/ "./assets/react/controllers/redux/requests/useApiAxios.js":
/*!****************************************************************!*\
  !*** ./assets/react/controllers/redux/requests/useApiAxios.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _publicAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicAxios */ "./assets/react/controllers/redux/requests/publicAxios.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _reducers_UserReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/UserReducer */ "./assets/react/controllers/redux/reducers/UserReducer.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var useApiAxios = function useApiAxios() {
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var requestIntercept = _publicAxios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.request.use(function (config) {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = "Bearer ".concat(user === null || user === void 0 ? void 0 : user.access_token);
      }
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    var responseIntercept = _publicAxios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use(function (response) {
      return response;
    }, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(error) {
        var _error$response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if ((error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401) {
                dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_3__.UNAUTHENTICATED)());
                navigate("/login", {
                  replace: true
                });
              }
              return _context.abrupt("return", Promise.reject(error));
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    return function () {
      _publicAxios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.request.eject(requestIntercept);
      _publicAxios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.eject(responseIntercept);
    };
  }, [user.authenticated, user.access_token]);
  return _publicAxios__WEBPACK_IMPORTED_MODULE_0__["default"];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useApiAxios);

/***/ }),

/***/ "./assets/react/controllers/redux/services/openApi.js":
/*!************************************************************!*\
  !*** ./assets/react/controllers/redux/services/openApi.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openApi": () => (/* binding */ openApi),
/* harmony export */   "useCreateDemandeMutation": () => (/* binding */ useCreateDemandeMutation),
/* harmony export */   "useDeleteDemandePieceMutation": () => (/* binding */ useDeleteDemandePieceMutation),
/* harmony export */   "useEditDemandeMutation": () => (/* binding */ useEditDemandeMutation),
/* harmony export */   "useEditOrCreateCompteBancaireMutation": () => (/* binding */ useEditOrCreateCompteBancaireMutation),
/* harmony export */   "useEditStructureMutation": () => (/* binding */ useEditStructureMutation),
/* harmony export */   "useGetDemandeCurrentQuery": () => (/* binding */ useGetDemandeCurrentQuery),
/* harmony export */   "useGetDemandeDetailsQuery": () => (/* binding */ useGetDemandeDetailsQuery),
/* harmony export */   "useGetDemandePiecesQuery": () => (/* binding */ useGetDemandePiecesQuery),
/* harmony export */   "useGetListPiecesQuery": () => (/* binding */ useGetListPiecesQuery),
/* harmony export */   "useGetMyCompteBancaireQuery": () => (/* binding */ useGetMyCompteBancaireQuery),
/* harmony export */   "useGetMyDemandesQuery": () => (/* binding */ useGetMyDemandesQuery),
/* harmony export */   "useGetSessionQuery": () => (/* binding */ useGetSessionQuery),
/* harmony export */   "useGetStructureDetailsQuery": () => (/* binding */ useGetStructureDetailsQuery),
/* harmony export */   "useUploadDemandeFileMutation": () => (/* binding */ useUploadDemandeFileMutation),
/* harmony export */   "useUploadRibFileMutation": () => (/* binding */ useUploadRibFileMutation)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/Constants */ "./assets/react/utils/Constants.jsx");
/* harmony import */ var _reducers_UserReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/UserReducer */ "./assets/react/controllers/redux/reducers/UserReducer.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var baseQuery = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.fetchBaseQuery)({
  baseUrl: _utils_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_API_URL,
  prepareHeaders: function prepareHeaders(headers, _ref) {
    var _getState, _getState$auth;
    var getState = _ref.getState,
      endpoint = _ref.endpoint;
    var token = (_getState = getState()) === null || _getState === void 0 ? void 0 : (_getState$auth = _getState.auth) === null || _getState$auth === void 0 ? void 0 : _getState$auth.access_token;
    if (endpoint.startsWith("upload")) {
      headers.set("Accept", "application/json");
    } else {
      headers.set("Content-Type", "application/json");
    }
    if (token) {
      headers.set("Authorization", "Bearer ".concat(token));
    }
    return headers;
  }
});
var baseQueryWithReauth = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args, api, extraOptions) {
    var result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return baseQuery(args, api, extraOptions);
        case 2:
          result = _context.sent;
          if (result.error && result.error.status === 401) {
            // log out the user
            api.dispatch((0,_reducers_UserReducer__WEBPACK_IMPORTED_MODULE_1__.UNAUTHENTICATED)());
          }
          return _context.abrupt("return", result);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function baseQueryWithReauth(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var openApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_3__.createApi)({
  reducerPath: "openApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Compte", "Structure", "User", "Demande", "Piece", "Demande_Piece"],
  endpoints: function endpoints(builder) {
    return {
      getSession: builder.query({
        query: function query(statut) {
          return "/sessions?statut=".concat(statut);
        }
      }),
      getListPieces: builder.query({
        query: function query(statut) {
          return "/pieces?isong=".concat(statut);
        },
        providesTags: function providesTags(result, error, arg) {
          return result ? [].concat(_toConsumableArray(result.map(function (_ref3) {
            var id = _ref3.id;
            return {
              type: "Piece",
              id: id
            };
          })), [{
            type: "Piece",
            id: "LIST"
          }]) : [{
            type: "Piece",
            id: "LIST"
          }];
        }
      }),
      getStructureDetails: builder.query({
        query: function query(id) {
          return "/structures/".concat(id);
        },
        providesTags: function providesTags(result, error, id) {
          return [{
            type: "Structure",
            id: id
          }];
        }
      }),
      getDemandeDetails: builder.query({
        query: function query(id) {
          return "/demandes/".concat(id);
        },
        providesTags: function providesTags(result, error, id) {
          return [{
            type: "Demande",
            id: id
          }];
        }
      }),
      getDemandePieces: builder.query({
        query: function query(id) {
          return "/demandes/".concat(id, "/pieces");
        },
        providesTags: function providesTags(result, error, arg) {
          return result ? [].concat(_toConsumableArray(result.map(function (_ref4) {
            var id = _ref4.id;
            return {
              type: "Demande_Piece",
              id: id
            };
          })), [{
            type: "Demande_Piece",
            id: "LIST"
          }]) : [{
            type: "Demande_Piece",
            id: "LIST"
          }];
        }
      }),
      getDemandeCurrent: builder.query({
        query: function query(data) {
          return "/structures/".concat(data.id, "/sessions/").concat(data.session, "/demandes");
        },
        providesTags: function providesTags(result, error, arg) {
          return [{
            type: "Demande",
            id: result === null || result === void 0 ? void 0 : result.id
          }];
        }
      }),
      getMyCompteBancaire: builder.query({
        query: function query(id) {
          return "/structures/".concat(id, "/comptes");
        },
        providesTags: function providesTags(result, error, arg) {
          return [{
            type: "Compte",
            id: result === null || result === void 0 ? void 0 : result.id
          }];
        }
      }),
      getMyDemandes: builder.query({
        query: function query(id) {
          return "/structures/".concat(id, "/demandes");
        },
        providesTags: function providesTags(result, error, arg) {
          return result ? [].concat(_toConsumableArray(result === null || result === void 0 ? void 0 : result.map(function (_ref5) {
            var id = _ref5.id;
            return {
              type: "Demande",
              id: id
            };
          })), [{
            type: "Demande",
            id: "LIST"
          }]) : [{
            type: "Demande",
            id: "LIST"
          }];
        }
      }),
      createDemande: builder.mutation({
        query: function query(body) {
          return {
            url: "/demandes",
            method: "POST",
            body: body
          };
        },
        invalidatesTags: function invalidatesTags(result, error, arg) {
          return [{
            type: "Demande",
            id: result === null || result === void 0 ? void 0 : result.id
          }, {
            type: "Demande",
            id: "LIST"
          }];
        }
      }),
      editDemande: builder.mutation({
        query: function query(body) {
          return {
            url: "/demandes/".concat(body.id),
            method: "PATCH",
            body: body
          };
        },
        invalidatesTags: function invalidatesTags(result, error, arg) {
          var res = JSON.parse(result);
          console.log(res);
          return [{
            type: "Demande",
            id: arg.id
          }, {
            type: "Structure",
            id: res === null || res === void 0 ? void 0 : res.structure
          }];
        }
      }),
      editStructure: builder.mutation({
        query: function query(body) {
          return {
            url: "/structures/".concat(body.id),
            method: "PATCH",
            body: body
          };
        },
        invalidatesTags: function invalidatesTags(result, error, arg) {
          return [{
            type: "Structure",
            id: arg.id
          }];
        }
      }),
      editOrCreateCompteBancaire: builder.mutation({
        query: function query(body) {
          return {
            url: "/structures/".concat(body.structure, "/comptes"),
            method: "POST",
            body: body
          };
        },
        invalidatesTags: function invalidatesTags(result, error, arg) {
          return [{
            type: "Compte",
            id: arg.structure
          }];
        }
      }),
      uploadRibFile: builder.mutation({
        query: function query(arg) {
          return {
            url: "/structures/".concat(arg.id, "/documents"),
            method: "POST",
            body: arg.data,
            formData: true
          };
        },
        transformResponse: function transformResponse(response, meta, arg) {
          return JSON.parse(response);
        }
      }),
      uploadDemandeFile: builder.mutation({
        query: function query(arg) {
          return {
            url: "/demandes/".concat(arg.id, "/pieces/").concat(arg.piece),
            method: "POST",
            body: arg.data,
            formData: true
          };
        },
        invalidatesTags: function invalidatesTags(result, error, arg) {
          return ["Demande_Piece", {
            type: "Demande",
            id: arg.id
          }];
        },
        transformResponse: function transformResponse(response, meta, arg) {
          return JSON.parse(response);
        }
      }),
      deleteDemandePiece: builder.mutation({
        query: function query(arg) {
          return {
            url: "/demandes/".concat(arg.id, "/pieces/").concat(arg.piece),
            method: "DELETE"
          };
        },
        // Invalidates all queries that subscribe to this TicketProducts `id` only.
        invalidatesTags: function invalidatesTags(result, error, arg) {
          return [{
            type: "Demande_Piece",
            id: arg.dp
          }];
        }
      })
    };
  }
});
var useGetSessionQuery = openApi.useGetSessionQuery,
  useGetListPiecesQuery = openApi.useGetListPiecesQuery,
  useGetMyCompteBancaireQuery = openApi.useGetMyCompteBancaireQuery,
  useGetDemandePiecesQuery = openApi.useGetDemandePiecesQuery,
  useGetDemandeCurrentQuery = openApi.useGetDemandeCurrentQuery,
  useGetStructureDetailsQuery = openApi.useGetStructureDetailsQuery,
  useGetDemandeDetailsQuery = openApi.useGetDemandeDetailsQuery,
  useGetMyDemandesQuery = openApi.useGetMyDemandesQuery,
  useCreateDemandeMutation = openApi.useCreateDemandeMutation,
  useUploadDemandeFileMutation = openApi.useUploadDemandeFileMutation,
  useUploadRibFileMutation = openApi.useUploadRibFileMutation,
  useDeleteDemandePieceMutation = openApi.useDeleteDemandePieceMutation,
  useEditDemandeMutation = openApi.useEditDemandeMutation,
  useEditStructureMutation = openApi.useEditStructureMutation,
  useEditOrCreateCompteBancaireMutation = openApi.useEditOrCreateCompteBancaireMutation;


/***/ }),

/***/ "./assets/react/controllers/redux/store.js":
/*!*************************************************!*\
  !*** ./assets/react/controllers/redux/store.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "persistor": () => (/* binding */ persistor),
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var _reducers_UserReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/UserReducer */ "./assets/react/controllers/redux/reducers/UserReducer.js");
/* harmony import */ var _reducers_configReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/configReducer */ "./assets/react/controllers/redux/reducers/configReducer.js");
/* harmony import */ var _services_openApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/openApi */ "./assets/react/controllers/redux/services/openApi.js");
/* harmony import */ var redux_persist_es_storage_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/es/storage/session */ "./node_modules/redux-persist/es/storage/session.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






var persistConfig = {
  key: "root",
  version: 1,
  storage: redux_persist_es_storage_session__WEBPACK_IMPORTED_MODULE_4__["default"],
  blacklist: [_services_openApi__WEBPACK_IMPORTED_MODULE_3__.openApi.reducerPath]
};
var rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.combineReducers)(_defineProperty({
  auth: _reducers_UserReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  config: _reducers_configReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
}, _services_openApi__WEBPACK_IMPORTED_MODULE_3__.openApi.reducerPath, _services_openApi__WEBPACK_IMPORTED_MODULE_3__.openApi.reducer));
var persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, rootReducer);
var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.configureStore)({
  reducer: persistedReducer,
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [redux_persist__WEBPACK_IMPORTED_MODULE_0__.FLUSH, redux_persist__WEBPACK_IMPORTED_MODULE_0__.REHYDRATE, redux_persist__WEBPACK_IMPORTED_MODULE_0__.PAUSE, redux_persist__WEBPACK_IMPORTED_MODULE_0__.PERSIST, redux_persist__WEBPACK_IMPORTED_MODULE_0__.PURGE, redux_persist__WEBPACK_IMPORTED_MODULE_0__.REGISTER]
      }
    }).concat(_services_openApi__WEBPACK_IMPORTED_MODULE_3__.openApi.middleware);
  }
});
var persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistStore)(store);


/* 
const rootPersistConfig = {
  key: 'root',
  storage,
}

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['isLoggedIn']
}

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  notes: notesReducer
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer); */

/***/ }),

/***/ "./assets/react/utils/Constants.jsx":
/*!******************************************!*\
  !*** ./assets/react/utils/Constants.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CONSTANTS = {
  BASE_API_URL: "http://local.services.minesec.gov.cm/api/v1",
  BASE_URL: "http://local.services.minesec.gov.cm",
  REACT_APP_SITE_KEY: "6LdJWoopAAAAACTj0-C_BtkVIdWLc9nLenEXJII7",
  REACT_APP_SECRET_KEY: "6LdJWoopAAAAAIz_QtksOaDsqLZff3BRaULeFpeX"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONSTANTS);

/***/ }),

/***/ "./assets/react/utils/ErrorPage.jsx":
/*!******************************************!*\
  !*** ./assets/react/utils/ErrorPage.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");


function ErrorPage() {
  var error = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useRouteError)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "error-page",
    className: "container text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col d-flex flex-column justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Oops!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sorry, an unexpected error has occurred."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, error.statusText || error.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "btn btn-link",
    onClick: function onClick() {
      return navigate(-1);
    }
  }, "Go back")))));
}

/***/ }),

/***/ "./assets/react/utils/Globals.js":
/*!***************************************!*\
  !*** ./assets/react/utils/Globals.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysBefore": () => (/* binding */ daysBefore),
/* harmony export */   "getAge": () => (/* binding */ getAge),
/* harmony export */   "getBackgroundColor": () => (/* binding */ getBackgroundColor),
/* harmony export */   "getExtension": () => (/* binding */ getExtension),
/* harmony export */   "getHoverBackgroundColor": () => (/* binding */ getHoverBackgroundColor),
/* harmony export */   "getSelectedBackgroundColor": () => (/* binding */ getSelectedBackgroundColor),
/* harmony export */   "getSelectedHoverBackgroundColor": () => (/* binding */ getSelectedHoverBackgroundColor),
/* harmony export */   "isDateValid": () => (/* binding */ isDateValid)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/intervalToDuration/index.js");


var getBackgroundColor = function getBackgroundColor(color, mode) {
  return mode === "dark" ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.darken)(color, 0.7) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.lighten)(color, 0.7);
};
var getHoverBackgroundColor = function getHoverBackgroundColor(color, mode) {
  return mode === "dark" ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.darken)(color, 0.6) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.lighten)(color, 0.6);
};
var getSelectedBackgroundColor = function getSelectedBackgroundColor(color, mode) {
  return mode === "dark" ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.darken)(color, 0.5) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.lighten)(color, 0.5);
};
var getSelectedHoverBackgroundColor = function getSelectedHoverBackgroundColor(color, mode) {
  return mode === "dark" ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.darken)(color, 0.4) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.lighten)(color, 0.4);
};
var daysBefore = function daysBefore(days) {
  var date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};
var getAge = function getAge(dob) {
  var duration = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])({
    start: dob,
    end: new Date()
  });
  return "".concat(duration.years, " an(s), ").concat(duration.months, " mois, ").concat(duration.days, " jour(s)");
};
var isDateValid = function isDateValid(dateStr) {
  return !isNaN(new Date(dateStr));
};
var getExtension = function getExtension(filename) {
  return filename.split('.').pop();
};

/***/ }),

/***/ "./assets/react/utils/IsAuthenticated.js":
/*!***********************************************!*\
  !*** ./assets/react/utils/IsAuthenticated.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");



var IsAuthenticated = function IsAuthenticated(_ref) {
  var authenticated = _ref.authenticated,
    auth = _ref.auth,
    children = _ref.children;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  return authenticated === auth ? children : auth === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
    to: "/login",
    state: {
      from: location.pathname
    },
    replace: true
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
    to: "/"
  });
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(IsAuthenticated));

/***/ }),

/***/ "./assets/react/utils/IsAuthorized.jsx":
/*!*********************************************!*\
  !*** ./assets/react/utils/IsAuthorized.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");



var IsAuthorized = function IsAuthorized(_ref) {
  var roles = _ref.roles,
    authRole = _ref.authRole,
    children = _ref.children;
  return authRole && roles.some(function (role) {
    return authRole.includes(role);
  }) ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
    to: "/"
  });
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: state.auth.roles
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(IsAuthorized));

/***/ }),

/***/ "./assets/react/utils/Loading.jsx":
/*!****************************************!*\
  !*** ./assets/react/utils/Loading.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");


var Loading = function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "primary"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./assets/react/utils/i18n.js":
/*!************************************!*\
  !*** ./assets/react/utils/i18n.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/src/luxon.js");
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-http-backend */ "./node_modules/i18next-http-backend/esm/index.js");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18next-browser-languagedetector */ "./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");





i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_3__["default"]).use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_4__["default"]) // passes i18n down to react-i18next
.init({
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json"
  },
  ns: ["common", "login"],
  fallbackLng: "fr",
  interpolation: {
    format: function format(value, _format, lng) {
      // legacy usage
      if (value instanceof Date) {
        return luxon__WEBPACK_IMPORTED_MODULE_2__.DateTime.fromJSDate(value).setLocale(lng).toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_2__.DateTime[_format]);
      }
      return value;
    }
  }
});

/***/ }),

/***/ "./assets/react/utils/theme.js":
/*!*************************************!*\
  !*** ./assets/react/utils/theme.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "themeSettings": () => (/* binding */ themeSettings),
/* harmony export */   "tokens": () => (/* binding */ tokens)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// color design tokens export
var tokens = function tokens(mode) {
  return _objectSpread({}, mode === "dark" ? {
    grey: {
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#525252",
      700: "#3d3d3d",
      800: "#292929",
      900: "#141414"
    },
    primary: {
      100: "#d0d1d5",
      200: "#a1a4ab",
      300: "#727681",
      400: "#1F2A40",
      500: "#141b2d",
      600: "#101624",
      700: "#0c101b",
      800: "#080b12",
      900: "#040509"
    },
    greenAccent: {
      100: "#dbf5ee",
      200: "#b7ebde",
      300: "#94e2cd",
      400: "#8ec541",
      500: "#4cceac",
      600: "#3da58a",
      700: "#2e7c67",
      800: "#1e5245",
      900: "#0f2922"
    },
    redAccent: {
      100: "#f8dcdb",
      200: "#f1b9b7",
      300: "#e99592",
      400: "#e2726e",
      500: "#db4f4a",
      600: "#af3f3b",
      700: "#832f2c",
      800: "#58201e",
      900: "#2c100f"
    },
    blueAccent: {
      100: "#e1e2fe",
      200: "#c3c6fd",
      300: "#a4a9fc",
      400: "#868dfb",
      500: "#6870fa",
      600: "#535ac8",
      700: "#3e4396",
      800: "#2a2d64",
      900: "#151632"
    }
  } : {
    grey: {
      100: "#141414",
      200: "#292929",
      300: "#3d3d3d",
      400: "#525252",
      500: "#666666",
      600: "#858585",
      700: "#a3a3a3",
      800: "#c2c2c2",
      900: "#e0e0e0"
    },
    primary: {
      100: "#040509",
      200: "#080b12",
      300: "#0c101b",
      400: "#f2f0f0",
      // manually changed
      500: "#141b2d",
      600: "#1F2A40",
      700: "#727681",
      800: "#a1a4ab",
      900: "#d0d1d5"
    },
    greenAccent: {
      100: "#0f2922",
      200: "#1e5245",
      300: "#2e7c67",
      400: "#3da58a",
      500: "#4cceac",
      600: "#8ec541",
      700: "#94e2cd",
      800: "#b7ebde",
      900: "#dbf5ee"
    },
    redAccent: {
      100: "#2c100f",
      200: "#58201e",
      300: "#832f2c",
      400: "#af3f3b",
      500: "#db4f4a",
      600: "#e2726e",
      700: "#e99592",
      800: "#f1b9b7",
      900: "#f8dcdb"
    },
    blueAccent: {
      100: "#151632",
      200: "#2a2d64",
      300: "#3e4396",
      400: "#535ac8",
      500: "#6870fa",
      600: "#868dfb",
      700: "#a4a9fc",
      800: "#c3c6fd",
      900: "#e1e2fe"
    }
  });
};

// mui theme settings
var themeSettings = function themeSettings(mode) {
  var colors = tokens(mode);
  return {
    palette: _objectSpread({
      mode: mode
    }, mode === "dark" ? {
      primary: {
        main: colors.primary[500]
      },
      secondary: {
        main: colors.greenAccent[500]
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100]
      },
      background: {
        "default": colors.primary[500]
      },
      sidebar: {
        backgroundColor: "#0b2948",
        color: "#8ba1b7 "
      },
      entete: {
        title: colors.redAccent[400],
        subtitle1: colors.blueAccent[300],
        subtitle2: colors.greenAccent[600],
        address: colors.grey[900]
      },
      card: {
        main: "#dc2440"
      },
      welcome: {
        content: "#59d0ff",
        gradient: {
          first: colors.blueAccent[500],
          second: colors.blueAccent[200]
        }
      },
      menu: {
        menuContent: "#082440",
        icon: "#59d0ff",
        hover: {
          backgroundColor: "#00458b",
          color: "#b6c8d9"
        },
        disabled: {
          color: "#3e5e7e"
        }
      }
    } : {
      // palette values for light mode
      primary: {
        main: colors.primary[100]
      },
      secondary: {
        main: colors.greenAccent[500]
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100]
      },
      background: {
        "default": "#fcfcfc"
      },
      sidebar: {
        backgroundColor: "#ffffff",
        color: "#607489"
      },
      welcome: {
        content: "#0098e5",
        gradient: {
          first: colors.blueAccent[500],
          second: colors.blueAccent[600]
        }
      },
      entete: {
        title: colors.redAccent[400],
        subtitle1: colors.blueAccent[300],
        subtitle2: colors.greenAccent[600],
        address: colors.grey[200]
      },
      card: {
        main: "#535353"
      },
      menu: {
        menuContent: "#fbfcfd",
        icon: "#0098e5",
        hover: {
          backgroundColor: "#c5e4ff",
          color: "#44596e"
        },
        disabled: {
          color: "#9fb6cf"
        }
      }
    }),
    typography: {
      allVariants: {
        fontSize: 11,
        textTransform: "none"
      },
      h1: {
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "40px",
        textTransform: "uppercase"
      },
      h2: {
        fontWeight: 700,
        fontSize: "1.2rem",
        textTransform: "capitalize"
      },
      h3: {
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "32px"
      },
      h4: {
        fontSize: 14,
        fontWeight: 600,
        textTransform: "uppercase",
        textAlign: "center"
      },
      h5: {
        fontSize: 14,
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: 500
      },
      h6: {
        fontSize: 12,
        fontWeight: 600,
        textTransform: "uppercase"
      }
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: function root(_ref) {
            var theme = _ref.theme;
            return {
              backgroundColor: theme.palette.menu.menuContent,
              color: theme.palette.mode == "dark" ? theme.palette.grey[100] : theme.palette.grey[900]
            };
          }
        }
      }
    }
  };
};

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_icons-material_AccountBalance_js-node_modules_mui_icons-material_Att-e39238"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFLFNBQVM7TUFDZCxHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFO0lBQ1AsQ0FBQztJQUNEZ0QsV0FBVyxFQUFFO01BQ1gsR0FBRyxFQUFFLFNBQVM7TUFDZCxHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFLFNBQVM7TUFDZCxHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFLFNBQVM7TUFDZCxHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRTtJQUNQLENBQUM7SUFDRG1uQixTQUFTLEVBQUU7TUFDVCxHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFLFNBQVM7TUFDZCxHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFLFNBQVM7TUFDZCxHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFO0lBQ1AsQ0FBQztJQUNEQyxVQUFVLEVBQUU7TUFDVixHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFLFNBQVM7TUFDZCxHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFLFNBQVM7TUFDZCxHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFO0lBQ1A7RUFDRixDQUFDLEdBQ0Q7SUFDRXRuQixJQUFJLEVBQUU7TUFDSixHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFLFNBQVM7TUFDZCxHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FBRyxFQUFFLFNBQVM7TUFDZCxHQUFHLEVBQUUsU0FBUztNQUNkLEdBQUcsRUFBRSxTQUFTO01BQ2QsR0FB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RnBtQixRQUFRLEVBQUUsRUFBRTtRQUNaQyxVQUFVLEVBQUUsR0FBRztRQUNmNkwsYUFBYSxFQUFFLFdBQVc7UUFDMUIyTyxTQUFTLEVBQUU7TUFDYixDQUFDO01BQ0Q0TCxFQUFFLEVBQUU7UUFDRnJtQixRQUFRLEVBQUUsRUFBRTtRQUNaOEwsYUFBYSxFQUFFLFdBQVc7UUFDMUIyTyxTQUFTLEVBQUUsUUFBUTtRQUNuQnhhLFVBQVUsRUFBRTtNQUNkLENBQUM7TUFDRHFtQixFQUFFLEVBQUU7UUFDRnRtQixRQUFRLEVBQUUsRUFBRTtRQUNaQyxVQUFVLEVBQUUsR0FBRztRQUNmNkwsYUFBYSxFQUFFO01BQ2pCO0lBQ0YsQ0FBQztJQUNEeWEsVUFBVSxFQUFFO01BQ1ZDLFFBQVEsRUFBRTtRQUNSQyxjQUFjLEVBQUU7VUFDZDFtQixJQUFJLEVBQUU7WUFBQSxJQUFHNUYsS0FBSyxRQUFMQSxLQUFLO1lBQUEsT0FBUTtjQUNwQlMsZUFBZSxFQUFFVCxLQUFLLENBQUNFLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDc0YsV0FBVztjQUMvQ3BELEtBQUssRUFDSGhELEtBQUssQ0FBQ0UsT0FBTyxDQUFDQyxJQUFJLElBQUksTUFBTSxHQUN4QkgsS0FBSyxDQUFDRSxPQUFPLENBQUNzRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQ3ZCeEQsS0FBSyxDQUFDRSxPQUFPLENBQUNzRCxJQUFJLENBQUMsR0FBRztZQUM5QixDQUFDO1VBQUE7UUFDSDtNQUNGO0lBQ0Y7RUFDRixDQUFDO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7O0FDblJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzLyBzeW5jIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0NvbXBvbmVudHMvQmFkZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9Db21wb25lbnRzL0JyZWFkQ3J1bWJzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy9Db250YWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy9Db3B5cmlnaHQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9Db21wb25lbnRzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0NvbXBvbmVudHMvU2lkZUJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0NvbXBvbmVudHMvVG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy9kZW1hbmRlcy9EZW1hbmRlUGllY2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy9kZW1hbmRlcy9JbXByaW1lRXRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy9zdHJ1Y3R1cmVzL0VudGV0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0NvbXBvbmVudHMvc3RydWN0dXJlcy9TdHJ1Y3R1cmVEZXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy91c2Vycy9yZXNldEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0NvbXBvbmVudHMvdXNlcnMvc2lnbmluRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy91c2Vycy9zaWdudXBGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9FcnJvci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL01haW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9QYWdlcy9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvUGFnZXMvTXlDb21wdGVCYW5jYWlyZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL1BhZ2VzL015RGVtYW5kZXMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9QYWdlcy9OZXdEZW1hbmRlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvUGFnZXMvUGFnZUxheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL1BhZ2VzL1NpZ25Jbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL3JlZHV4L2FjdGlvbnMvVXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL3JlZHV4L2FjdGlvbnMvY29uZmlnQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvcmVkdXgvcmVkdWNlcnMvVXNlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL3JlZHV4L3JlZHVjZXJzL2NvbmZpZ1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL3JlZHV4L3JlcXVlc3RzL3B1YmxpY0F4aW9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9yZWR1eC9yZXF1ZXN0cy91c2VBcGlBeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvcmVkdXgvc2VydmljZXMvb3BlbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L3V0aWxzL0NvbnN0YW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L3V0aWxzL0Vycm9yUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L3V0aWxzL0dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L3V0aWxzL0lzQXV0aGVudGljYXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvdXRpbHMvSXNBdXRob3JpemVkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvdXRpbHMvTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L3V0aWxzL2kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L3V0aWxzL3RoZW1lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQ29tcG9uZW50cy9CYWRnZS5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9Db21wb25lbnRzL0JhZGdlLmpzeFwiLFxuXHRcIi4vQ29tcG9uZW50cy9CcmVhZENydW1icy5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9Db21wb25lbnRzL0JyZWFkQ3J1bWJzLmpzeFwiLFxuXHRcIi4vQ29tcG9uZW50cy9Db250YWN0LmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0NvbXBvbmVudHMvQ29udGFjdC5qc3hcIixcblx0XCIuL0NvbXBvbmVudHMvQ29weXJpZ2h0LmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0NvbXBvbmVudHMvQ29weXJpZ2h0LmpzeFwiLFxuXHRcIi4vQ29tcG9uZW50cy9IZWFkZXIuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy9IZWFkZXIuanN4XCIsXG5cdFwiLi9Db21wb25lbnRzL1NpZGVCYXIuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy9TaWRlQmFyLmpzeFwiLFxuXHRcIi4vQ29tcG9uZW50cy9Ub3BCYXIuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy9Ub3BCYXIuanN4XCIsXG5cdFwiLi9Db21wb25lbnRzL2RlbWFuZGVzL0RlbWFuZGVQaWVjZXMuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy9kZW1hbmRlcy9EZW1hbmRlUGllY2VzLmpzeFwiLFxuXHRcIi4vQ29tcG9uZW50cy9kZW1hbmRlcy9JbXByaW1lRXRzLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0NvbXBvbmVudHMvZGVtYW5kZXMvSW1wcmltZUV0cy5qc3hcIixcblx0XCIuL0NvbXBvbmVudHMvc3RydWN0dXJlcy9FbnRldGUuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy9zdHJ1Y3R1cmVzL0VudGV0ZS5qc3hcIixcblx0XCIuL0NvbXBvbmVudHMvc3RydWN0dXJlcy9TdHJ1Y3R1cmVEZXRhaWxzLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0NvbXBvbmVudHMvc3RydWN0dXJlcy9TdHJ1Y3R1cmVEZXRhaWxzLmpzeFwiLFxuXHRcIi4vQ29tcG9uZW50cy91c2Vycy9yZXNldEZvcm0uanNcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9Db21wb25lbnRzL3VzZXJzL3Jlc2V0Rm9ybS5qc1wiLFxuXHRcIi4vQ29tcG9uZW50cy91c2Vycy9zaWduaW5Gb3JtLmpzXCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ29tcG9uZW50cy91c2Vycy9zaWduaW5Gb3JtLmpzXCIsXG5cdFwiLi9Db21wb25lbnRzL3VzZXJzL3NpZ251cEZvcm0uanNcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9Db21wb25lbnRzL3VzZXJzL3NpZ251cEZvcm0uanNcIixcblx0XCIuL0Vycm9yLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0Vycm9yLmpzeFwiLFxuXHRcIi4vTWFpbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9NYWluLmpzeFwiLFxuXHRcIi4vUGFnZXMvSG9tZS5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9QYWdlcy9Ib21lLmpzeFwiLFxuXHRcIi4vUGFnZXMvTXlDb21wdGVCYW5jYWlyZS5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9QYWdlcy9NeUNvbXB0ZUJhbmNhaXJlLmpzeFwiLFxuXHRcIi4vUGFnZXMvTXlEZW1hbmRlcy5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9QYWdlcy9NeURlbWFuZGVzLmpzeFwiLFxuXHRcIi4vUGFnZXMvTmV3RGVtYW5kZS5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9QYWdlcy9OZXdEZW1hbmRlLmpzeFwiLFxuXHRcIi4vUGFnZXMvUGFnZUxheW91dC5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9QYWdlcy9QYWdlTGF5b3V0LmpzeFwiLFxuXHRcIi4vUGFnZXMvU2lnbkluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL1BhZ2VzL1NpZ25Jbi5qc3hcIixcblx0XCIuL3JlZHV4L2FjdGlvbnMvVXNlckFjdGlvbnMuanNcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9yZWR1eC9hY3Rpb25zL1VzZXJBY3Rpb25zLmpzXCIsXG5cdFwiLi9yZWR1eC9hY3Rpb25zL2NvbmZpZ0FjdGlvbnMuanNcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9yZWR1eC9hY3Rpb25zL2NvbmZpZ0FjdGlvbnMuanNcIixcblx0XCIuL3JlZHV4L3JlZHVjZXJzL1VzZXJSZWR1Y2VyLmpzXCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvcmVkdXgvcmVkdWNlcnMvVXNlclJlZHVjZXIuanNcIixcblx0XCIuL3JlZHV4L3JlZHVjZXJzL2NvbmZpZ1JlZHVjZXIuanNcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9yZWR1eC9yZWR1Y2Vycy9jb25maWdSZWR1Y2VyLmpzXCIsXG5cdFwiLi9yZWR1eC9yZXF1ZXN0cy9wdWJsaWNBeGlvcy5qc1wiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL3JlZHV4L3JlcXVlc3RzL3B1YmxpY0F4aW9zLmpzXCIsXG5cdFwiLi9yZWR1eC9yZXF1ZXN0cy91c2VBcGlBeGlvcy5qc1wiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL3JlZHV4L3JlcXVlc3RzL3VzZUFwaUF4aW9zLmpzXCIsXG5cdFwiLi9yZWR1eC9zZXJ2aWNlcy9vcGVuQXBpLmpzXCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvcmVkdXgvc2VydmljZXMvb3BlbkFwaS5qc1wiLFxuXHRcIi4vcmVkdXgvc3RvcmUuanNcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9yZWR1eC9zdG9yZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiXG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG5cbi8vIGFzc2V0cy9hcHAuanNcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gXCJAc3ltZm9ueS91eC1yZWFjdFwiO1xuXG4vLyBSZWdpc3RlcnMgUmVhY3QgY29udHJvbGxlciBjb21wb25lbnRzIHRvIGFsbG93IGxvYWRpbmcgdGhlbSBmcm9tIFR3aWdcbi8vXG4vLyBSZWFjdCBjb250cm9sbGVyIGNvbXBvbmVudHMgYXJlIGNvbXBvbmVudHMgdGhhdCBhcmUgbWVhbnQgdG8gYmUgcmVuZGVyZWRcbi8vIGZyb20gVHdpZy4gVGhlc2UgY29tcG9uZW50IHRoZW4gcmVseSBvbiBvdGhlciBjb21wb25lbnRzIHRoYXQgd29uJ3QgYmUgY2FsbGVkXG4vLyBkaXJlY3RseSBmcm9tIFR3aWcuXG4vL1xuLy8gQnkgcHV0dGluZyBvbmx5IGNvbnRyb2xsZXIgY29tcG9uZW50cyBpbiBgcmVhY3QvY29udHJvbGxlcnNgLCB5b3UgZW5zdXJlIHRoYXRcbi8vIGludGVybmFsIGNvbXBvbmVudHMgd29uJ3QgYmUgYXV0b21hdGljYWxseSBpbmNsdWRlZCBpbiB5b3VyIEpTIGJ1aWx0IGZpbGUgaWZcbi8vIHRoZXkgYXJlIG5vdCBuZWNlc3NhcnkuXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMoXG4gIHJlcXVpcmUuY29udGV4dChcIi4vcmVhY3QvY29udHJvbGxlcnNcIiwgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pXG4pO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gXCJAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2VcIjtcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKFxuICByZXF1aXJlLmNvbnRleHQoXG4gICAgXCJAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzXCIsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4gIClcbik7XG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFN0eWxlZEJhZGdlID0gc3R5bGVkLmRpdmBcbiAgbWluLXdpZHRoOiAxOHB4O1xuICBtaW4taGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogJHsoeyBzaGFwZSB9KSA9PiAoc2hhcGUgPT09IFwiY2lyY2xlXCIgPyBcIjUwJVwiIDogXCIxNnB4XCIpfTtcbiAgcGFkZGluZzogJHsoeyBzaGFwZSB9KSA9PiAoc2hhcGUgPT09IFwiY2lyY2xlXCIgPyBcIjBcIiA6IFwiMCA2cHhcIil9O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgJHsoeyB2YXJpYW50IH0pID0+IHtcbiAgICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICAgIGNhc2UgXCJpbmZvXCI6XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA0OGFjZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBgO1xuICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNiYjM0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgICAgICAgICAgICAgYDtcbiAgICAgIGNhc2UgXCJkYW5nZXJcIjpcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmIzOTM5O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgICAgICAgICAgICAgYDtcbiAgICAgIGNhc2UgXCJ3YXJuaW5nXCI6XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyNTgwNztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgICAgICAgICAgIGA7XG4gICAgfVxuICB9fVxuYDtcblxuZXhwb3J0IGNvbnN0IEJhZGdlID0gKHtcbiAgY2hpbGRyZW4sXG4gIHZhcmlhbnQgPSBcImluZm9cIixcbiAgc2hhcGUgPSBcInJvdW5kZWRcIixcbiAgLi4ucmVzdFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRCYWRnZSB2YXJpYW50PXt2YXJpYW50fSBzaGFwZT17c2hhcGV9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZEJhZGdlPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvY2F0aW9uLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHRva2VucyB9IGZyb20gXCIuLi8uLi91dGlscy90aGVtZVwiO1xuaW1wb3J0IHsgdXNlVGhlbWUsIENoaXAgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgcmVtb3ZlTWVudUJyZWFkLFxuICBjbGVhck1lbnVCcmVhZCxcbn0gZnJvbSBcIi4vLi4vcmVkdXgvYWN0aW9ucy9jb25maWdBY3Rpb25zXCI7XG5cbmNvbnN0IEJyZWFkQ3J1bWJzID0gKHByb3BzKSA9PiB7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY29sb3JzID0gdG9rZW5zKHRoZW1lLnBhbGV0dGUubW9kZSk7XG4gIGNvbnN0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGUsIGl0ZW0pID0+IHtcbiAgICBwcm9wcy5yZW1vdmVNZW51QnJlYWQoaXRlbSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIlxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMucHJpbWFyeVs0MDBdIH19XG4gICAgICBjbGFzc05hbWU9XCJicmVhZGNydW1iLWNvbnRhaW5lclwiXG4gICAgPlxuICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAge3BhdGhuYW1lICE9IFwiL1wiICYmIChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiXG4gICAgICAgICAgICBrZXk9e1wiSG9tZVN0YXJ0XCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jbGVhck1lbnVCcmVhZCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPntwcm9wcy50KFwiaG9tZVwiKX08L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb3BzLm1lbnVzLm1hcCgobWVudSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAobWVudSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnJlYWRjcnVtYi1pdGVtICR7cGF0aG5hbWUgPT0gbWVudS50byAmJiBcImFjdGl2ZVwifWB9XG4gICAgICAgICAgICAgICAga2V5PXtgYnJlYWRjcnVtYiR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXttZW51LnRvfT5cbiAgICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9wcy50KG1lbnUubGFiZWwpfVxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KGUpID0+IGhhbmRsZURlbGV0ZShlLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtwYXRobmFtZSA9PSBtZW51LnRvID8gXCJzZWNvbmRhcnlcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L29sPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBtZW51czogc3RhdGUuY29uZmlnLm1lbnVvLFxufSk7XG5cbmNvbnN0IG1hcEFjdGlvbnNUb1Byb3BzID0ge1xuICByZW1vdmVNZW51QnJlYWQsXG4gIGNsZWFyTWVudUJyZWFkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcEFjdGlvbnNUb1Byb3BzKShCcmVhZENydW1icyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBMaW5rLCBCb3gsIEdyaWQsIFBhcGVyLCBTdGFjayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgQ2FsbEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FsbFwiO1xuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01haWxcIjtcbmltcG9ydCBTYXZlQWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NhdmVBbHQnO1xuaW1wb3J0IENvcHlyaWdodCBmcm9tIFwiLi9Db3B5cmlnaHRcIjtcbmltcG9ydCBpMThuIGZyb20gXCJpMThuZXh0XCI7XG5cbmNvbnN0IENvbnRhY3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0LCBzaWduaW4sIHNpZ251cCB9ID0gcHJvcHM7XG5cbiAgY29uc29sZS5sb2coaTE4bi5sYW5ndWFnZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBtYjogOCxcbiAgICAgICAgbXg6IDQsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8UGFwZXIgc3g9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5CbG9jazogNCwgcGFkZGluZzogMiB9fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAge3QoXCJjb250YWN0X2NlbGxpbmZvXCIsIHsgbnM6IFwibG9naW5cIiB9KX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgZ2FwPXsyfVxuICAgICAgICAgIG1hcmdpblk9ezN9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2FsbEljb24gLz5cbiAgICAgICAgICA8TGluayBzeD17eyBjb2xvcjogXCIjMjliMDI3XCIgfX0gaHJlZj1cInRlbDo2NzQ5MjExMTFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDY3NCA5MiAxMSAxMSAvIDY3NCA1OCAxNiAwN1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGdhcD17Mn1cbiAgICAgICAgICBtYXJnaW5ZPXszfVxuICAgICAgICA+XG4gICAgICAgICAgPE1haWxJY29uIC8+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHN4PXt7IGNvbG9yOiBcIiMyOWIwMjdcIiB9fVxuICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpzZy5jZWxpbmZvLmNlYTFAbWluZXNlYy5nb3YuY21cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBzZy5jZWxpbmZvLmNlYTFAbWluZXNlYy5nb3YuY21cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBnYXA9ezJ9XG4gICAgICAgICAgbWFyZ2luWT17M31cbiAgICAgICAgPlxuICAgICAgICAgIDxTYXZlQWx0SWNvbiAvPlxuICAgICAgICAgIHtpMThuLmxhbmd1YWdlLnN0YXJ0c1dpdGgoXCJmclwiKSA/IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMjliMDI3XCIgfX1cbiAgICAgICAgICAgIGhyZWY9XCIvdXBsb2Fkcy9HdWlkZSB1dGlsaXNhdGV1ciBzdWJ2ZW50aW9uLnBkZlwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgZG93bmxvYWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICBHdWlkZSB1dGlsaXNhdGV1ciBwb3VyIHVuZSBkZW1hbmRlIGRlIHN1YnZlbnRpb25cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMyOWIwMjdcIiB9fVxuICAgICAgICAgICAgICBocmVmPVwiL3VwbG9hZHMvR3VpZGVsaW5lcyB0byBhcHBseSBzdWJ2ZW50aW9uLnBkZlwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGRvd25sb2FkXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEd1aWRlbGluZXMgdG8gYXBwbHkgZm9yIGZpbmFuY2lhbCBncmFudFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICAgIHtpMThuLmxhbmd1YWdlLnN0YXJ0c1dpdGgoXCJmclwiKSA/IChcbiAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMzE1XCJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1BmUHozQjBwMDU4P3NpPU9JajNnVHY2ZjJqbWtfczNcIlxuICAgICAgICAgICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiXG4gICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyBmdWxsc2NyZWVuXCJcbiAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjMxNVwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC94bC11N0hzQTF4RT9zaT1adnplYzFXSFZPMm92a0hHXCJcbiAgICAgICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxuICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgZnVsbHNjcmVlblwiXG4gICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICApfVxuICAgICAgPC9QYXBlcj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgY29tcG9uZW50PVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICBzeD17eyBjb2xvcjogXCIjM2Q4NTE0XCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2lnbnVwKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0KFwid2FudF9zaWdudXBcIiwgeyBuczogXCJsb2dpblwiIH0pfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgIHN4PXt7IGNvbG9yOiBcIiMzZDg1MTRcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzaWduaW4oKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoXCJ3YW50X3NpZ25pblwiLCB7IG5zOiBcImxvZ2luXCIgfSl9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8Q29weXJpZ2h0IHN4PXt7IG10OiA1IH19IC8+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlua1wiO1xuXG5jb25zdCBDb3B5cmlnaHQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VHlwb2dyYXBoeVxuICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtcIkNvcHlyaWdodCDCqSBcIn1cbiAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIjXCI+XG4gICAgICAgIE1JTkVTRUNcbiAgICAgIDwvTGluaz57XCIgXCJ9XG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAge1wiLlwifVxuICAgIDwvVHlwb2dyYXBoeT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlyaWdodDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJveCwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RoZW1lXCI7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHRpdGxlLCBzdWJ0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY29sb3JzID0gdG9rZW5zKHRoZW1lLnBhbGV0dGUubW9kZSk7XG4gIHJldHVybiAoXG4gICAgPEJveCBtYj1cIjMwcHhcIj5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgIGNvbG9yPXtjb2xvcnMuZ3JleVsxMDBdfVxuICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgIHN4PXt7IG06IFwiMCAwIDVweCAwXCIgfX1cbiAgICAgID5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29sb3I9e2NvbG9ycy5ncmVlbkFjY2VudFs0MDBdfT5cbiAgICAgICAge3N1YnRpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBTaWRlYmFyLFxuICBNZW51LFxuICBNZW51SXRlbSxcbiAgU3ViTWVudSxcbiAgbWVudUNsYXNzZXMsXG59IGZyb20gXCJyZWFjdC1wcm8tc2lkZWJhclwiO1xuaW1wb3J0IHsgQm94LCBJY29uQnV0dG9uLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHRva2VucyB9IGZyb20gXCIuLi8uLi91dGlscy90aGVtZVwiO1xuaW1wb3J0IEZvdW5kYXRpb25JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0ZvdW5kYXRpb25cIjtcbmltcG9ydCBTb3VyY2VJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NvdXJjZVwiO1xuaW1wb3J0IE1lbnVPdXRsaW5lZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudU91dGxpbmVkXCI7XG5pbXBvcnQgQ3JlYXRlTmV3Rm9sZGVySWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DcmVhdGVOZXdGb2xkZXJcIjtcbmltcG9ydCBBY2NvdW50QmFsYW5jZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudEJhbGFuY2VcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IGFkZE1lbnVCcmVhZCB9IGZyb20gXCIuLy4uL3JlZHV4L2FjdGlvbnMvY29uZmlnQWN0aW9uc1wiO1xuaW1wb3J0IENPTlNUQU5UUyBmcm9tIFwiLi4vLi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5cbi8vIGhleCB0byByZ2JhIGNvbnZlcnRlclxuY29uc3QgaGV4VG9SZ2JhID0gKGhleCwgYWxwaGEpID0+IHtcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KTtcblxuICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthbHBoYX0pYDtcbn07XG5cbmNvbnN0IEl0ZW0gPSAoeyB0aXRsZSwgdG8sIGljb24sIHNlbGVjdGVkLCBzZXRTZWxlY3RlZCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVJdGVtXG4gICAgICBjb21wb25lbnQ9ezxMaW5rIHRvPXt0b30gLz59XG4gICAgICBpY29uPXtpY29ufVxuICAgICAgYWN0aXZlPXt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IHRvfVxuICAgICAgb25DbGljaz17KGUpID0+IHNldFNlbGVjdGVkKGUsIHRvLCB0aXRsZSl9XG4gICAgPlxuICAgICAgPFR5cG9ncmFwaHk+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICA8L01lbnVJdGVtPlxuICApO1xufTtcblxuY29uc3QgU2lkZUJhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY29sb3JzID0gdG9rZW5zKHRoZW1lLnBhbGV0dGUubW9kZSk7XG4gIGNvbnN0IFtpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdF0gPSB1c2VTdGF0ZShcIkRhc2hib2FyZFwiKTtcblxuICAvL2NvbnNvbGUubG9nKHByb3BzLmFjY2Vzc190b2tlbik7XG5cbiAgY29uc3Qgc2V0U2VsZWN0ZWQgPSAoaXRlbSwgdG8sIHRpdGxlKSA9PiB7XG4gICAgaWYgKHRvICE9IFwiL1wiKSBwcm9wcy5hZGRNZW51QnJlYWQoeyB0bywgbGFiZWw6IHRpdGxlIH0pO1xuICAgIHNldFNlbGVjdChpdGVtKTtcbiAgfTtcblxuICBjb25zdCBtZW51SXRlbVN0eWxlcyA9IHtcbiAgICByb290OiB7XG4gICAgICBmb250U2l6ZTogXCIxM3B4XCIsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tZW51Lmljb24sXG4gICAgICBbYCYuJHttZW51Q2xhc3Nlcy5kaXNhYmxlZH1gXToge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tZW51LmRpc2FibGVkLmNvbG9yLFxuICAgICAgfSxcbiAgICAgIFtgJi4ke21lbnVDbGFzc2VzLmFjdGl2ZX1gXToge1xuICAgICAgICBjb2xvcjogXCIjYjZjOGQ5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgU3ViTWVudUV4cGFuZEljb246IHtcbiAgICAgIGNvbG9yOiBcIiNiNmI3YjlcIixcbiAgICB9LFxuICAgIHN1Yk1lbnVDb250ZW50OiAoeyBsZXZlbCB9KSA9PiAoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICBsZXZlbCA9PT0gMFxuICAgICAgICAgID8gaGV4VG9SZ2JhKHRoZW1lLnBhbGV0dGUubWVudS5tZW51Q29udGVudCwgIWlzQ29sbGFwc2VkID8gMC40IDogMSlcbiAgICAgICAgICA6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIHdpZHRoOiBcIjMwMHB4XCIsXG4gICAgfSksXG4gICAgYnV0dG9uOiB7XG4gICAgICBbYCYuJHttZW51Q2xhc3Nlcy5kaXNhYmxlZH1gXToge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tZW51LmRpc2FibGVkLmNvbG9yLFxuICAgICAgfSxcbiAgICAgIFtgJjpob3ZlcmBdOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaGV4VG9SZ2JhKHRoZW1lLnBhbGV0dGUubWVudS5ob3Zlci5iYWNrZ3JvdW5kQ29sb3IsIDEpLFxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tZW51LmhvdmVyLmNvbG9yLFxuICAgICAgfSxcbiAgICAgIFtgJi4ke21lbnVDbGFzc2VzLmFjdGl2ZX1gXToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGhleFRvUmdiYShcbiAgICAgICAgICB0aGVtZS5wYWxldHRlLm1lbnUuaG92ZXIuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIDAuN1xuICAgICAgICApLFxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tZW51LmhvdmVyLmNvbG9yLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxhYmVsOiAoeyBvcGVuIH0pID0+ICh7XG4gICAgICBmb250V2VpZ2h0OiBvcGVuID8gNjAwIDogdW5kZWZpbmVkLFxuICAgIH0pLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIGNvbGxhcHNlZD17aXNDb2xsYXBzZWR9XG4gICAgICAgIGJyZWFrUG9pbnQ9XCJtZFwiXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17aGV4VG9SZ2JhKHRoZW1lLnBhbGV0dGUuc2lkZWJhci5iYWNrZ3JvdW5kQ29sb3IsIDEpfVxuICAgICAgICByb290U3R5bGVzPXt7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2lkZWJhci5jb2xvcixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE1lbnUgbWVudUl0ZW1TdHlsZXM9e21lbnVJdGVtU3R5bGVzfT5cbiAgICAgICAgICB7LyogTE9HTyBBTkQgTUVOVSBJQ09OICovfVxuICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNDb2xsYXBzZWQoIWlzQ29sbGFwc2VkKX1cbiAgICAgICAgICAgIGljb249e2lzQ29sbGFwc2VkID8gPE1lbnVPdXRsaW5lZEljb24gLz4gOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwIDIwcHggMFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWlzQ29sbGFwc2VkICYmIChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIG1sPVwiMTVweFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjb2xvcj17Y29sb3JzLmdyZXlbMTAwXX0+XG4gICAgICAgICAgICAgICAgICBNSU5FU0VDXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzQ29sbGFwc2VkKCFpc0NvbGxhcHNlZCl9PlxuICAgICAgICAgICAgICAgICAgPE1lbnVPdXRsaW5lZEljb24gLz5cbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiAoXG4gICAgICAgICAgICA8Qm94IG1iPVwiMjVweFwiPlxuICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZS11c2VyXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtDT05TVEFOVFMuQkFTRV9VUkx9L2ltYWdlcy9sb2dvX21pbmVzZWMuanBnYH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIsIGJvcmRlclJhZGl1czogXCI1MCVcIiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9ycy5ncmV5WzEwMF19XG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICBzeD17eyBtOiBcIjEwcHggMCAwIDBcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy51c2VybmFtZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICB7Qm9vbGVhbihwcm9wcy5zZXNzaW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgICAgdGl0bGU9e3QoXCJtZW51X2RlbWFuZGVcIil9XG4gICAgICAgICAgICAgICAgdG89XCIvZGVtYW5kZVwiXG4gICAgICAgICAgICAgICAgaWNvbj17PENyZWF0ZU5ld0ZvbGRlckljb24gLz59XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICB0aXRsZT17dChcIm1lbnVfc3RydWN0dXJlXCIpfVxuICAgICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgICBpY29uPXs8Rm91bmRhdGlvbkljb24gLz59XG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgIHRpdGxlPXt0KFwibWVudV9kZW1hbmRlc1wiKX1cbiAgICAgICAgICAgICAgdG89XCIvbXlkZW1hbmRlc1wiXG4gICAgICAgICAgICAgIGljb249ezxTb3VyY2VJY29uIC8+fVxuICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICB0aXRsZT17dChcIm1lbnVfY29tcHRlXCIpfVxuICAgICAgICAgICAgICB0bz1cIi9jb21wdGVCYW5jYWlyZVwiXG4gICAgICAgICAgICAgIGljb249ezxBY2NvdW50QmFsYW5jZUljb24gLz59XG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9TaWRlYmFyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VybmFtZTogc3RhdGUuYXV0aC5jcmVkZW50aWFscy5zdHJ1Y3R1cmUubmFtZSxcbiAgcm9sZXM6IHN0YXRlLmF1dGguY3JlZGVudGlhbHMucm9sZSxcbiAgc2Vzc2lvbjogc3RhdGUuYXV0aC5jcmVkZW50aWFscy5zZXNzaW9uLFxuICBhY2Nlc3NfdG9rZW46IHN0YXRlLmF1dGguYWNjZXNzX3Rva2VuLFxuICBtZW51czogc3RhdGUuY29uZmlnLm1lbnVvLFxufSk7XG5cbmNvbnN0IG1hcEFjdGlvbnNUb1Byb3BzID0geyBhZGRNZW51QnJlYWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcEFjdGlvbnNUb1Byb3BzKShTaWRlQmFyKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBJY29uQnV0dG9uLCBUb29sdGlwLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB0b2tlbnMgfSBmcm9tIFwiLi8uLi8uLi91dGlscy90aGVtZVwiO1xuaW1wb3J0IExpZ2h0TW9kZU91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9MaWdodE1vZGVPdXRsaW5lZFwiO1xuaW1wb3J0IERhcmtNb2RlT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0RhcmtNb2RlT3V0bGluZWRcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNPdXRsaW5lZFwiO1xuaW1wb3J0IFRyYW5zbGF0ZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVHJhbnNsYXRlXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTWVudVwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtSWNvblwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRGl2aWRlclwiO1xuaW1wb3J0IHsgbG9nb3V0VXNlciB9IGZyb20gXCIuLy4uL3JlZHV4L2FjdGlvbnMvVXNlckFjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5nc1wiO1xuaW1wb3J0IExvZ291dCBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXRcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGNoYW5nZU1vZGUgfSBmcm9tIFwiLi8uLi9yZWR1eC9hY3Rpb25zL2NvbmZpZ0FjdGlvbnNcIjtcbmltcG9ydCBpMThuIGZyb20gXCJpMThuZXh0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcbmltcG9ydCBNYXJxdWVlIGZyb20gXCJyZWFjdC1mYXN0LW1hcnF1ZWVcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBUb3BiYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNvbG9ycyA9IHRva2Vucyh0aGVtZS5wYWxldHRlLm1vZGUpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgcD17Mn0+XG4gICAgICAgIHsvKiBTRUFSQ0ggQkFSICovfVxuICAgICAgICA8Qm94XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17Y29sb3JzLnByaW1hcnlbNDAwXX1cbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCIzcHhcIlxuICAgICAgICAgIHN4PXt7IG1heFdpZHRoOiBcIjY1MHB4XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNYXJxdWVlPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIHtCb29sZWFuKHByb3BzLnVzZXIuc2Vzc2lvbilcbiAgICAgICAgICAgICAgICA/IHQoXCJhY3RpdmVfc2Vzc2lvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG5zOiBcImNvbW1vblwiLFxuICAgICAgICAgICAgICAgICAgICBhbm5lZTogbmV3IERhdGUocHJvcHMudXNlci5zZXNzaW9uLmRhdGVPcGVuLmRhdGUpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgICAgIGRhdGVPOiBmb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUocHJvcHMudXNlci5zZXNzaW9uLmRhdGVPcGVuLmRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGQgTU1NIHl5eXlcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBkYXRlQzogZm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHByb3BzLnVzZXIuc2Vzc2lvbi5kYXRlQ2xvc2VkLmRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGQgTU1NIHl5eXlcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IHQoXCJzZXNzaW9uX2Fic2VudFwiKX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L01hcnF1ZWU+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHsvKiBJQ09OUyAqL31cbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZU1vZGUodGhlbWUucGFsZXR0ZS5tb2RlKX0+XG4gICAgICAgICAgICB7dGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImRhcmtcIiA/IChcbiAgICAgICAgICAgICAgPERhcmtNb2RlT3V0bGluZWRJY29uIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGlnaHRNb2RlT3V0bGluZWRJY29uIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25zT3V0bGluZWRJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyBcImFjY291bnQtbWVudVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17b3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWNjb3VudCBzZXR0aW5nc1wiPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZS11c2VyXCJcbiAgICAgICAgICAgICAgICBzcmM9e2Ake0NPTlNUQU5UUy5CQVNFX1VSTH0vaW1hZ2VzL2F2YXRhci53ZWJwYH1cbiAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogMzIsIGhlaWdodDogMzIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9wcy51c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShpMThuLmxhbmd1YWdlLnN0YXJ0c1dpdGgoXCJmclwiKSA/IFwiZW5cIiA6IFwiZnJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17dChcImNoYW5nZV9sYW5ndWFnZVwiKX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj57aTE4bi5sYW5ndWFnZS5zdGFydHNXaXRoKFwiZnJcIikgPyBcIiBFTlwiIDogXCIgRlJcIn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgICAgPE1lbnVcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBpZD1cImFjY291bnQtbWVudVwiXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgUGFwZXJQcm9wcz17e1xuICAgICAgICAgIGVsZXZhdGlvbjogMCxcbiAgICAgICAgICBzeDoge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IFwidmlzaWJsZVwiLFxuICAgICAgICAgICAgZmlsdGVyOiBcImRyb3Atc2hhZG93KDBweCAycHggOHB4IHJnYmEoMCwwLDAsMC4zMikpXCIsXG4gICAgICAgICAgICBtdDogMS41LFxuICAgICAgICAgICAgXCImIC5NdWlBdmF0YXItcm9vdFwiOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMixcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMixcbiAgICAgICAgICAgICAgbWw6IC0wLjUsXG4gICAgICAgICAgICAgIG1yOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICByaWdodDogMTQsXG4gICAgICAgICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZylcIixcbiAgICAgICAgICAgICAgekluZGV4OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgaG9yaXpvbnRhbDogXCJyaWdodFwiLCB2ZXJ0aWNhbDogXCJ0b3BcIiB9fVxuICAgICAgICBhbmNob3JPcmlnaW49e3sgaG9yaXpvbnRhbDogXCJyaWdodFwiLCB2ZXJ0aWNhbDogXCJib3R0b21cIiB9fVxuICAgICAgPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgIDxBdmF0YXIgLz4gUHJvZmlsZVxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgIDxBdmF0YXIgLz4gTXkgYWNjb3VudFxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8U2V0dGluZ3MgZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHByb3BzLmxvZ291dFVzZXIoKX0+XG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMb2dvdXQgZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAge3QoXCJsb2dvdXRcIil9XG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICA8L01lbnU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXI6IHN0YXRlLmF1dGguY3JlZGVudGlhbHMsXG59KTtcblxuY29uc3QgbWFwQWN0aW9uc1RvUHJvcHMgPSB7XG4gIGNoYW5nZU1vZGUsXG4gIGxvZ291dFVzZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwQWN0aW9uc1RvUHJvcHMpKFRvcGJhcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7XHJcbiAgQWxlcnQsXHJcbiAgU3RhY2ssXHJcbiAgVHlwb2dyYXBoeSxcclxuICBJY29uQnV0dG9uLFxyXG4gIEF2YXRhcixcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtQXZhdGFyLFxyXG4gIHVzZVRoZW1lLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBMaW5rLFxyXG4gIFBhcGVyLFxyXG4gIEFsZXJ0VGl0bGUsXHJcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICBUYWJsZUNvbnRhaW5lcixcclxuICBUYWJsZSxcclxuICBUYWJsZUhlYWQsXHJcbiAgVGFibGVSb3csXHJcbiAgVGFibGVDZWxsLFxyXG4gIFRhYmxlQm9keSxcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgQXR0YWNoRmlsZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXR0YWNoRmlsZVwiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGVcIjtcclxuaW1wb3J0IFVwbG9hZEZpbGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1VwbG9hZEZpbGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZUdldExpc3RQaWVjZXNRdWVyeSxcclxuICB1c2VHZXREZW1hbmRlUGllY2VzUXVlcnksXHJcbiAgdXNlVXBsb2FkRGVtYW5kZUZpbGVNdXRhdGlvbixcclxuICB1c2VEZWxldGVEZW1hbmRlUGllY2VNdXRhdGlvbixcclxufSBmcm9tIFwiLi8uLi8uLi9yZWR1eC9zZXJ2aWNlcy9vcGVuQXBpXCI7XHJcbmltcG9ydCB7IHNldEluZm9Nc2cgfSBmcm9tIFwiLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NvbmZpZ0FjdGlvbnNcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuLi8uLi8uLi9jb250cm9sbGVycy9FcnJvclwiO1xyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gXCIuLi8uLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCBpMThuIGZyb20gXCJpMThuZXh0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi8uLi91dGlscy9Mb2FkaW5nXCI7XHJcblxyXG5jb25zdCBEZW1hbmRlUGllY2VzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIGNvbnN0IGZpbGVJbnB1dEZpZWxkID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtJZCwgc2V0SWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBbXHJcbiAgICBkZWxldGVEZW1hbmRlUGllY2UsIC8vIFRoaXMgaXMgdGhlIG11dGF0aW9uIHRyaWdnZXJcclxuICAgIHsgaXNMb2FkaW5nOiBpc0RlbGV0aW5nIH0sIC8vIFRoaXMgaXMgdGhlIGRlc3RydWN0dXJlZCBtdXRhdGlvbiByZXN1bHRcclxuICBdID0gdXNlRGVsZXRlRGVtYW5kZVBpZWNlTXV0YXRpb24oKTtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBwaWVjZXMsXHJcbiAgICBpc0ZldGNoaW5nOiBsb2FkaW5nLFxyXG4gICAgZXJyb3IsXHJcbiAgfSA9IHVzZUdldExpc3RQaWVjZXNRdWVyeShcclxuICAgIHByb3BzLnN0cnVjdHVyZS5xdWFsaXR5ICE9IFwiRXRhYmxpc3NlbWVudFwiID8gMSA6IDAsXHJcbiAgICB7XHJcbiAgICAgIHBvbGxpbmdJbnRlcnZhbDogMCxcclxuICAgICAgcmVmZXRjaE9uTW91bnRPckFyZ0NoYW5nZTogdHJ1ZSxcclxuICAgICAgc2tpcDogZmFsc2UsXHJcbiAgICB9XHJcbiAgKTtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBteXBpZWNlcyxcclxuICAgIGlzRmV0Y2hpbmc6IGxvYWRpbmdwLFxyXG4gICAgZXJyb3I6IGVycm9ybSxcclxuICB9ID0gdXNlR2V0RGVtYW5kZVBpZWNlc1F1ZXJ5KHByb3BzLmRlbWFuZGVJZCwge1xyXG4gICAgcG9sbGluZ0ludGVydmFsOiAwLFxyXG4gICAgcmVmZXRjaE9uTW91bnRPckFyZ0NoYW5nZTogdHJ1ZSxcclxuICAgIHNraXA6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtcclxuICAgIHVwbG9hZGZpbGUsIC8vIFRoaXMgaXMgdGhlIG11dGF0aW9uIHRyaWdnZXJcclxuICAgIHsgaXNMb2FkaW5nOiBpc1VwZGF0aW5nIH0sXHJcbiAgXSA9IHVzZVVwbG9hZERlbWFuZGVGaWxlTXV0YXRpb24oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNvbXB1bFBpZWNlID0gbXlwaWVjZXM/LmZpbHRlcigocGllKSA9PiBwaWUucGllY2U/LmNvbXB1bHNvcnkpO1xyXG4gICAgY29uc3QgY29tcHVsc29yeVBpZWNlcyA9IHBpZWNlcz8uZmlsdGVyKChwaWUpID0+IHBpZS5jb21wdWxzb3J5KTtcclxuXHJcbiAgICBwcm9wcy5zZXRWYWxpZGUoY29tcHVsUGllY2U/Lmxlbmd0aCAhPSBjb21wdWxzb3J5UGllY2VzPy5sZW5ndGgpO1xyXG4gIH0sIFtteXBpZWNlcywgcGllY2VzXSk7XHJcblxyXG4gIGNvbnN0IGdldFBpZWNlRmlsZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHBpZWNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBteXBpZWNlcz8uZmluZCgoZmlsZSkgPT4gZmlsZS5waWVjZT8uaWQgPT09IHBpZWNlLmlkKTtcclxuICAgICAgcmV0dXJuIGZpbGUgPyAoXHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGNvbG9yPXt0aGVtZS5wYWxldHRlLm1lbnUuaWNvbn1cclxuICAgICAgICAgIGhyZWY9e2Ake0NPTlNUQU5UUy5CQVNFX1VSTH0vdXBsb2Fkcy8ke2ZpbGUuZmlsZS5maWxlTmFtZX1gfVxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZmlsZS5maWxlLmZpbGVOYW1lfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XHJcbiAgICAgICAgICB7dChcIm1lc3NhZ2UuZmlsZV9ub3RfYXR0YWNoZWRcIil9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIFtteXBpZWNlc11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGlkKSA9PiB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IHQoXCJtZXNzYWdlLmRlbGV0ZV9waWVjZVwiKSxcclxuICAgICAgICBpY29uOiBcInF1ZXN0aW9uXCIsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogdChcImRlbGV0ZVwiKSxcclxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IsXHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgIGRlbGV0ZURlbWFuZGVQaWVjZSh7IGlkOiBwcm9wcy5kZW1hbmRlSWQsIHBpZWNlOiBpZCB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRJbmZvTXNnKHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdChcIm1lc3NhZ2UuZGVsZXRlX3BpZWNlX3N1Y2Nlc3NcIiksXHJcbiAgICAgICAgICAgICAgICAgIHNldmVyaXR5OiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIHByb3BzLnNldEluZm9Nc2coe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgc2V2ZXJpdHk6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbbXlwaWVjZXNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcGlja0ZpbGUgPSAoaWQpID0+IHtcclxuICAgIHNldElkKGlkKTtcclxuICAgIGZpbGVJbnB1dEZpZWxkLmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXdGaWxlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbGlkZUZpbGVOYW1lUGF0dGVybiA9IC9bIGAhQCMkJV4mKigpK1xcLT1bXFxde307JzpcIlxcXFx8LDw+XFwvP35dfFtcXHUwMEMwLVxcdTAwRkZcXHUwMTAwLVxcdTAxN0ZcXHUwMTgwLVxcdTAyNEZdLztcclxuICAgIGNvbnN0IGFsbG93ZWRUeXBlcyA9IFtcclxuICAgICAgXCJpbWFnZS9qcGVnXCIsXHJcbiAgICAgIFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgIFwiaW1hZ2UvanBnXCIsXHJcbiAgICAgIFwiYXBwbGljYXRpb24vcGRmXCIsXHJcbiAgICBdO1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdKSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5maWxlc1swXS5zaXplID4gMjA5NzE1Mikge1xyXG4gICAgICAgIHByb3BzLnNldEluZm9Nc2coe1xyXG4gICAgICAgICAgbWVzc2FnZTogdChcIm1lc3NhZ2UuZmlsZV91cGxvYWRfdG9vYmlnXCIpLFxyXG4gICAgICAgICAgc2V2ZXJpdHk6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFhbGxvd2VkVHlwZXMuaW5jbHVkZXMoZS50YXJnZXQuZmlsZXNbMF0/LnR5cGUpKSB7XHJcbiAgICAgICAgcHJvcHMuc2V0SW5mb01zZyh7XHJcbiAgICAgICAgICBtZXNzYWdlOiB0KFwibWVzc2FnZS5maWxlX3VwbG9hZF93cm9uZ3R5cGVcIiksXHJcbiAgICAgICAgICBzZXZlcml0eTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmFsaWRlRmlsZU5hbWVQYXR0ZXJuLnRlc3QoZS50YXJnZXQuZmlsZXNbMF0ubmFtZSkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlc1swXS5uYW1lKTtcclxuICAgICAgICBwcm9wcy5zZXRJbmZvTXNnKHtcclxuICAgICAgICAgIG1lc3NhZ2U6IHQoXCJtZXNzYWdlLmZpbGVfdXBsb2FkX3dyb25nbmFtZVwiKSxcclxuICAgICAgICAgIHNldmVyaXR5OiBcIndhcm5pbmdcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlTmFtZVwiLCBlLnRhcmdldC5maWxlc1swXS5uYW1lKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwbG9hZGZpbGUoe1xyXG4gICAgICAgIGlkOiBwcm9wcy5kZW1hbmRlSWQsXHJcbiAgICAgICAgcGllY2U6IElkLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlcy5kYXRhPy5zdWNjZXNzKSB7XHJcbiAgICAgICAgcHJvcHMuc2V0SW5mb01zZyh7XHJcbiAgICAgICAgICBtZXNzYWdlOiB0KFwibWVzc2FnZS5maWxlX3VwbG9hZF9zdWNjZXNzXCIpLFxyXG4gICAgICAgICAgc2V2ZXJpdHk6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb3BzLnNldEluZm9Nc2coe1xyXG4gICAgICAgICAgbWVzc2FnZTogcmVzPy5lcnJvcj8uZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgc2V2ZXJpdHk6IFwiZXJyb3JcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChlcnJvciB8fCBlcnJvcm0pIHJldHVybiA8RXJyb3IgLz47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiBcImhpZGRlblwiIH19XHJcbiAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgIHJlZj17ZmlsZUlucHV0RmllbGR9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU5ld0ZpbGV9XHJcbiAgICAgICAgYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9qcGVnLCAucGRmXCJcclxuICAgICAgLz5cclxuICAgICAge215cGllY2VzPy5sZW5ndGggIT0gcGllY2VzPy5sZW5ndGggPyAoXHJcbiAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJmaWxsZWRcIiBzZXZlcml0eT1cImVycm9yXCI+XHJcbiAgICAgICAgICA8QWxlcnRUaXRsZT57dChcIm1lc3NhZ2UuZmlsZV91cGxvYWRfYWxlcnRcIil9PC9BbGVydFRpdGxlPlxyXG4gICAgICAgICAgPEFsZXJ0VGl0bGU+e3QoXCJtZXNzYWdlLmZpbGVfdXBsb2FkX2luY29tcGxldFwiKX08L0FsZXJ0VGl0bGU+XHJcbiAgICAgICAgICA8QWxlcnRUaXRsZT57dChcIm1lc3NhZ2UuZmlsZV91cGxvYWRfY29uZGl0aW9uXCIpfTwvQWxlcnRUaXRsZT5cclxuICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cInN1Y2Nlc3NcIj57dChcIm1lc3NhZ2UuZmlsZV91cGxvYWRfYWxsXCIpfTwvQWxlcnQ+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgPFRhYmxlIHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBhcmlhLWxhYmVsPVwiY2FwdGlvbiB0YWJsZVwiPlxyXG4gICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCIgY29sU3Bhbj17M30+XHJcbiAgICAgICAgICAgICAgICB7dChcImxpc3RfcGllY2VfZXhpZ2VlXCIsIHsgdmFsOiBwaWVjZXM/Lmxlbmd0aCB8fCAwIH0pfVxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICB7cGllY2VzPy5tYXAoKHBpZWNlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17YGluZGV4bGlzdHAke2l9YH0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcGllY2UuY29tcHVsc29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiNmMTAyMzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiMwMDA0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdHRhY2hGaWxlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaTE4bi5sYW5ndWFnZSA9PSBcImVuXCIgPyBwaWVjZS5uYW1lZW4gOiBwaWVjZS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpMThuLmxhbmd1YWdlID09IFwiZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gcGllY2Uuc2lnbmF0YWlyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwaWVjZS5zaWduYXRhaXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e2dldFBpZWNlRmlsZShwaWVjZSl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjb2x1bW5HYXA9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1VwZGF0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJpbmhlcml0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtCb29sZWFuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG15cGllY2VzPy5maW5kKCh2YWwpID0+IHZhbD8ucGllY2UuaWQgPT0gcGllY2UuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBpY2tGaWxlKHBpZWNlLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZEZpbGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3RoZW1lLnBhbGV0dGUuY2FyZC5tYWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIUJvb2xlYW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXlwaWVjZXM/LmZpbmQoKHZhbCkgPT4gdmFsPy5waWVjZS5pZCA9PSBwaWVjZS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQ2xpY2socGllY2UuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICByb2xlczogc3RhdGUuYXV0aC5yb2xlcyxcclxuICBzdHJ1Y3R1cmU6IHN0YXRlLmF1dGguY3JlZGVudGlhbHMuc3RydWN0dXJlLFxyXG4gIHNlc3Npb246IHN0YXRlLmF1dGguY3JlZGVudGlhbHMuc2Vzc2lvbixcclxufSk7XHJcblxyXG5jb25zdCBtYXBBY3Rpb25zVG9Qcm9wcyA9IHtcclxuICBzZXRJbmZvTXNnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcEFjdGlvbnNUb1Byb3BzKShEZW1hbmRlUGllY2VzKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIFN0YWNrLFxuICBzdHlsZWQsXG4gIFR5cG9ncmFwaHksXG4gIFNsaWRlLFxuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nQWN0aW9ucyxcbiAgRGlhbG9nLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgdXNlR2V0U3RydWN0dXJlRGV0YWlsc1F1ZXJ5LFxuICB1c2VHZXREZW1hbmRlUGllY2VzUXVlcnksXG59IGZyb20gXCIuLi8uLi9yZWR1eC9zZXJ2aWNlcy9vcGVuQXBpXCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uLy4uL0Vycm9yXCI7XG5pbXBvcnQgUmVhY3RUb1ByaW50IGZyb20gXCJyZWFjdC10by1wcmludFwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgZ2VuZXJhdGVQREYsIHsgUmVzb2x1dGlvbiwgTWFyZ2luIH0gZnJvbSBcInJlYWN0LXRvLXBkZlwiO1xuaW1wb3J0IEVudGV0ZSBmcm9tIFwiLi4vc3RydWN0dXJlcy9FbnRldGVcIjtcblxuY29uc3QgVHJhbnNpdGlvbiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgcmVmKSB7XG4gIHJldHVybiA8U2xpZGUgZGlyZWN0aW9uPVwidXBcIiByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcbn0pO1xuXG5leHBvcnQgY29uc3QgRmllbGQgPSBzdHlsZWQoVHlwb2dyYXBoeSkoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWluV2lkdGg6IFwiMTIwbW1cIixcbiAgYm9yZGVyQm90dG9tOiBcInNvbGlkIDJweFwiLFxuICBib3JkZXJCb3R0b21Db2xvcjogdGhlbWUucGFsZXR0ZS5jYXJkLm1haW4sXG4gIHBhZGRpbmdCb3R0b206IDQsXG4gIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gIGZvbnRXZWlnaHQ6IDMwMCxcbiAgbGV0dGVyU3BhY2luZzogMC40LFxuICBmb250U2l6ZTogMTIsXG59KSk7XG5cbmNvbnN0IEltcHJpbWVFdHMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBwcmludFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCB7XG4gICAgZGF0YTogc3RydWN0LFxuICAgIGlzRmV0Y2hpbmcsXG4gICAgZXJyb3IsXG4gIH0gPSB1c2VHZXRTdHJ1Y3R1cmVEZXRhaWxzUXVlcnkocHJvcHMuc3RydWN0dXJlLmlkLCB7XG4gICAgcG9sbGluZ0ludGVydmFsOiAwLFxuICAgIHJlZmV0Y2hPbk1vdW50T3JBcmdDaGFuZ2U6IHRydWUsXG4gICAgc2tpcDogZmFsc2UsXG4gIH0pO1xuICBjb25zdCB7XG4gICAgZGF0YTogcGllY2VzLFxuICAgIGlzRmV0Y2hpbmc6IGxvYWRpbmcsXG4gICAgZXJyb3I6IGVycm9yX3BpZWNlcyxcbiAgfSA9IHVzZUdldERlbWFuZGVQaWVjZXNRdWVyeShwcm9wcy5kZW1hbmRlSWQsIHtcbiAgICBwb2xsaW5nSW50ZXJ2YWw6IDAsXG4gICAgcmVmZXRjaE9uTW91bnRPckFyZ0NoYW5nZTogdHJ1ZSxcbiAgICBza2lwOiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgaXNPcmcgPSBwcm9wcy5zdHJ1Y3R1cmUucXVhbGl0eSAhPT0gXCJFdGFibGlzc2VtZW50XCI7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBmaWxlbmFtZTogYERlbWFuZGVfc3VidmVudGlvbl8ke3Byb3BzLmRlbWFuZGVJZH1gLFxuICAgIG1ldGhvZDogXCJzYXZlXCIsXG4gICAgcmVzb2x1dGlvbjogUmVzb2x1dGlvbi5ISUdILFxuICAgIHBhZ2U6IHtcbiAgICAgIG1hcmdpbjogTWFyZ2luLk1FRElVTSxcbiAgICAgIGZvcm1hdDogXCJBNFwiLFxuICAgICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcbiAgICB9LFxuICAgIGNhbnZhczoge1xuICAgICAgbWltZVR5cGU6IFwiaW1hZ2UvanBlZ1wiLFxuICAgICAgcXVhbGl0eVJhdGlvOiAxLFxuICAgIH0sXG4gICAgb3ZlcnJpZGVzOiB7XG4gICAgICBwZGY6IHtcbiAgICAgICAgY29tcHJlc3M6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2FudmFzOiB7XG4gICAgICAgIHVzZUNPUlM6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgb3BlblBERiA9ICgpID0+IHtcbiAgICBnZW5lcmF0ZVBERigoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBkZi13cmFwcGVyXCIpLCBvcHRpb25zKTtcbiAgfTtcblxuICBpZiAoZXJyb3IgfHwgZXJyb3JfcGllY2VzKSByZXR1cm4gPEVycm9yIC8+O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgZnVsbFNjcmVlblxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17VHJhbnNpdGlvbn1cbiAgICAgIG9wZW49e3Byb3BzLm9wZW59XG4gICAgICBvbkNsb3NlPXsoKSA9PiBwcm9wcy5oYW5kbGVPcGVuQ2xvc2UoZmFsc2UpfVxuICAgID5cbiAgICAgIDxEaWFsb2dUaXRsZT57dChcIm1lc3NhZ2UuZGVtYW5kZV91cGRhdGVkX3N1Y2Nlc3NcIil9PC9EaWFsb2dUaXRsZT5cbiAgICAgIDxEaWFsb2dDb250ZW50IHN4PXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBwbGFjZUl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtwcmludFJlZn1cbiAgICAgICAgICBpZD1cInBkZi13cmFwcGVyXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgZ2FwOiA1LFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTkwbW1cIixcbiAgICAgICAgICAgIG1hcmdpbjogXCI2MHB4IGF1dG8gIWltcG9ydGFudFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RW50ZXRlIC8+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgZ2FwPXsxfVxuICAgICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBtYXJnaW5Ub3A9ezN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICBnYXA9ezF9XG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlNUUlVDVFVSRSA6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8RmllbGQ+e3N0cnVjdD8ubmFtZX08L0ZpZWxkPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIHshaXNPcmcgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgIGdhcD17MX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgTnVtw6lybyBkJ2ltbWF0cmljdWxhdGlvbiA6XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8RmllbGQ+e3N0cnVjdD8uY29kZX08L0ZpZWxkPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgZ2FwPXsxfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Ob20gZHUgcmVzcG9uc2FibGUgOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZD57c3RydWN0Py5ub21Gb25kYXRldXJ9PC9GaWVsZD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgIGdhcD17MX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+b3JkcmUgOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZD57c3RydWN0Py5vcmRyZS5uYW1lfTwvRmllbGQ+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICBnYXA9ezF9XG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOlxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkPntzdHJ1Y3Q/LmZvcm1lLm5hbWV9PC9GaWVsZD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgIGdhcD17MX1cbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+csOpZ2lvbiA6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8RmllbGQ+e3N0cnVjdD8uc3ViZGl2aXNpb24uZGl2aXNpb24ucmVnaW9uLm5hbWV9PC9GaWVsZD5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgIGdhcD17MX1cbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+ZMOpcGFydGVtZW50IDo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxGaWVsZD57c3RydWN0Py5zdWJkaXZpc2lvbi5kaXZpc2lvbi5uYW1lfTwvRmllbGQ+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICBnYXA9ezF9XG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgYXJyb25kaXNzZW1lbnQ6XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEZpZWxkPntzdHJ1Y3Q/LnN1YmRpdmlzaW9uLm5hbWV9PC9GaWVsZD5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgIGdhcD17MX1cbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+RW1haWw6IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEZpZWxkIHN4PXt7IHRleHRUcmFuc2Zvcm06XCJub25lXCJ9fT5cbiAgICAgICAgICAgICAgICB7cHJvcHMudXNlcj8uZW1haWx9XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgIGdhcD17MX1cbiAgICAgICAgICAgIG1hcmdpblRvcD17MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5wacOoY2VzIGpvaW50ZXM6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGZvbnRTaXplOiBcIjExcHRcIn19PlxuICAgICAgICAgICAgICB7cGllY2VzPy5tYXAoKHBpZWNlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17YHBpZWNlJHtpfWB9PiB7cGllY2U/LnBpZWNlLm5hbWV9IDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIG1hcmdpblRvcD17MH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgTjxzdXA+bzwvc3VwPiBkZSBkw6lww7R0IGR1IGRvc3NpZXI6IHtwcm9wcy5kZW1hbmRlSWR9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiB0ZXh0VHJhbnNmb3JtPVwibm9uZVwiPlxuICAgICAgICAgICAgICBTaWduYXR1cmUgZHUgcmVxdcOpcmFudFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIG1hcmdpblRvcD17aXNPcmc/IDEwIDogMH0+XG4gICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKCksIFwiZGQgTU1NIHl5eXksIGhoOmlpXCIpfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVPcGVuQ2xvc2UoZmFsc2UpfSB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgICAgICB7dChcInByaW50LmNhbmNlbFwiKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b3BlblBERn0gdmFyaWFudD1cIm91dGxpbmVkXCIgPnt0KFwicHJpbnQucGRmXCIpfTwvQnV0dG9uPlxuICAgICAgICA8UmVhY3RUb1ByaW50XG4gICAgICAgICAgdHJpZ2dlcj17KCkgPT4gPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cIm91dGxpbmVkXCI+e3QoXCJwcmludC5idG5cIil9PC9CdXR0b24+fVxuICAgICAgICAgIGNvbnRlbnQ9eygpID0+IHByaW50UmVmLmN1cnJlbnR9XG4gICAgICAgIC8+XG4gICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXI6IHN0YXRlLmF1dGguY3JlZGVudGlhbHMsXG4gIHN0cnVjdHVyZTogc3RhdGUuYXV0aC5jcmVkZW50aWFscy5zdHJ1Y3R1cmUsXG59KTtcblxuY29uc3QgbWFwQWN0aW9uc1RvUHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcEFjdGlvbnNUb1Byb3BzKShJbXByaW1lRXRzKTtcbiIsImltcG9ydCB7IEJveCwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cblxuY29uc3QgRW50ZXRlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrIGRpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBnYXA9ezJ9IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUsOpcHVibGlxdWUgZHUgY2FtZXJvdW5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0ZXh0VHJhbnNmb3JtPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGFpeC1UcmF2YWlsLVBhdHJpZTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICBNaW5pc3TDqHJlIGRlcyBlbnNlaWduZW1lbnRzIHNlY29uZGFpcmVzPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICoqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICBzZWNyw6l0YXJpYXQgZ8OpbsOpcmFsXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlcHVibGljIG9mIGNhbWVyb29uXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgdGV4dFRyYW5zZm9ybT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBlYWNlLVdvcmstRmF0aGVybGFuZDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICBNaW5pc3RyeSBvZiBzZWNvbmRhcnkgZWR1Y2F0aW9uPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICoqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICBzZWNyZXRhcmlhdCBnZW5lcmFsXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICBEZW1hbmRlIGRlIHN1YnZlbnRpb24gZmluYW5jacOocmUgZGUgbCfDqXRhdCBhdXggb3JnYW5pc2F0aW9ucyBldCBhdXggw6l0YWJsaXNzZW1lbnRzIHNjb2xhaXJlcyBvdSBmb3JtYXRpb25zIHByaXbDqXMgZCdlbnNlaWduZW1lbnQgc2Vjb25kYWlyZSBldCBub3JtYWxcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgIEFubsOpZSBidWRnZXRhaXJlIHtuZXcgRGF0ZShwcm9wcy51c2VyLnNlc3Npb24uZGF0ZU9wZW4uZGF0ZSkuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvU3RhY2s+XG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHVzZXI6IHN0YXRlLmF1dGguY3JlZGVudGlhbHMsXG4gIH0pO1xuICBcbmNvbnN0IG1hcEFjdGlvbnNUb1Byb3BzID0ge307XG4gIFxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcEFjdGlvbnNUb1Byb3BzKShFbnRldGUpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IEJveCwgU3RhY2ssIHN0eWxlZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRJbmZvTXNnIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY29uZmlnQWN0aW9uc1wiO1xuaW1wb3J0IHsgdXNlR2V0U3RydWN0dXJlRGV0YWlsc1F1ZXJ5IH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NlcnZpY2VzL29wZW5BcGlcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vLi4vRXJyb3JcIjtcblxuZXhwb3J0IGNvbnN0IEZpZWxkID0gc3R5bGVkKFR5cG9ncmFwaHkpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGZsZXg6IDEsXG4gIG1pbldpZHRoOiBcIjMwMHB4XCIsXG4gIGJvcmRlckJvdHRvbTogXCJzb2xpZCAycHhcIixcbiAgYm9yZGVyQm90dG9tQ29sb3I6IHRoZW1lLnBhbGV0dGUubWVudS5pY29uLFxuICBwYWRkaW5nQm90dG9tOiA0LFxuICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGxldHRlclNwYWNpbmc6IDAuNCxcbiAgZm9udFNpemU6IDEyLFxufSkpO1xuXG5jb25zdCBTdHJ1Y3R1cmVEZXRhaWxzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3Qge1xuICAgIGRhdGE6IHN0cnVjdCxcbiAgICBpc0ZldGNoaW5nLFxuICAgIGVycm9yLFxuICB9ID0gdXNlR2V0U3RydWN0dXJlRGV0YWlsc1F1ZXJ5KHByb3BzLnN0cnVjdHVyZS5pZCwge1xuICAgIHBvbGxpbmdJbnRlcnZhbDogMCxcbiAgICByZWZldGNoT25Nb3VudE9yQXJnQ2hhbmdlOiB0cnVlLFxuICAgIHNraXA6IGZhbHNlLFxuICB9KTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgLz47XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICBnYXA9ezJ9XG4gICAgPlxuICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgZmxleD17MX0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCI+e3QoXCJzdHJ1Y3R1cmUucmVnaW9uXCIpfSA6PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8RmllbGQ+e3N0cnVjdD8uc3ViZGl2aXNpb24uZGl2aXNpb24ucmVnaW9uLm5hbWV9PC9GaWVsZD5cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBmbGV4PXsxfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIj57dChcInN0cnVjdHVyZS5kaXZpc2lvblwiKX0gOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEZpZWxkPntzdHJ1Y3Q/LnN1YmRpdmlzaW9uLmRpdmlzaW9uLm5hbWV9PC9GaWVsZD5cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBmbGV4PXsxfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIj5cbiAgICAgICAgICB7dChcInN0cnVjdHVyZS5zdWJkaXZpc2lvblwiKX0gOlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxGaWVsZD57c3RydWN0Py5zdWJkaXZpc2lvbi5uYW1lfTwvRmllbGQ+XG4gICAgICA8L1N0YWNrPlxuICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgZmxleD17MX0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCI+e3QoXCJzdHJ1Y3R1cmUuY29kZVwiKX0gOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEZpZWxkPntzdHJ1Y3Q/LmNvZGV9PC9GaWVsZD5cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBmbGV4PXsxfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIj57dChcInN0cnVjdHVyZS5uYW1lXCIpfSA6PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8RmllbGQ+e3N0cnVjdD8ubmFtZX08L0ZpZWxkPlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIGZsZXg9ezF9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPnt0KFwic3RydWN0dXJlLnR5cGVcIil9IDo8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxGaWVsZD57c3RydWN0Py50eXBlU3RydWN0dXJlfTwvRmllbGQ+XG4gICAgICA8L1N0YWNrPlxuICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgZmxleD17MX0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCI+e3QoXCJzdHJ1Y3R1cmUub3JkcmVcIil9IDo8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxGaWVsZD57c3RydWN0Py5vcmRyZS5uYW1lfTwvRmllbGQ+XG4gICAgICA8L1N0YWNrPlxuICAgICAgeyFwcm9wcy5pc09yZyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgZmxleD17MX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPnt0KFwic3RydWN0dXJlLmZvcm1lXCIpfSA6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPEZpZWxkPntzdHJ1Y3Q/LmZvcm1lLm5hbWV9PC9GaWVsZD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIGZsZXg9ezF9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIj57dChcInN0cnVjdHVyZS5zeXN0ZW1cIil9IDo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8RmllbGQ+e3N0cnVjdD8ubGFuZ3VlLmxhYmVsfTwvRmllbGQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBmbGV4PXsxfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgIHt0KFwic3RydWN0dXJlLmFkcmVzc2VcIil9IDpcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxGaWVsZD57c3RydWN0Py5hZHJlc3NlfTwvRmllbGQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHJvbGVzOiBzdGF0ZS5hdXRoLnJvbGVzLFxuICBzdHJ1Y3R1cmU6IHN0YXRlLmF1dGguY3JlZGVudGlhbHMuc3RydWN0dXJlLFxufSk7XG5cbmNvbnN0IG1hcEFjdGlvbnNUb1Byb3BzID0ge1xuICBzZXRJbmZvTXNnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcEFjdGlvbnNUb1Byb3BzKShTdHJ1Y3R1cmVEZXRhaWxzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyByZXNldFVzZXIsIGNsZWFyRXJyb3JzIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvVXNlckFjdGlvbnNcIjtcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSBcIi4uL0NvcHlyaWdodFwiO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHtcbiAgVHlwb2dyYXBoeSxcbiAgQWxlcnQsXG4gIEFsZXJ0VGl0bGUsXG4gIFRleHRGaWVsZCxcbiAgTGluayxcbiAgQm94LFxuICBHcmlkLFxuICBzdHlsZWQsXG4gIEF2YXRhcixcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExvYWRpbmdCdXR0b24gfSBmcm9tIFwiQG11aS9sYWJcIjtcbmltcG9ydCAqIGFzIHl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgTG9ja1BlcnNvblR3b1RvbmUgZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTG9ja1BlcnNvblR3b1RvbmVcIjtcbmltcG9ydCBDT05TVEFOVFMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL0NvbnN0YW50c1wiO1xuXG5cbmV4cG9ydCBjb25zdCBGaWVsZCA9IHN0eWxlZChUZXh0RmllbGQpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgJiBsYWJlbC5NdWktZm9jdXNlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAmIC5NdWlJbnB1dEJhc2Utcm9vdC5NdWktZm9jdXNlZCBmaWVsZHNldCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjliMDI3O1xuICAgIG91dGxpbmUtY29sb3I6ICMyOWIwMjc7XG4gIH1cbiAgJiAuTXVpRm9ybUhlbHBlclRleHQtcm9vdC5NdWktZXJyb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExCdXR0b24gPSBzdHlsZWQoTG9hZGluZ0J1dHRvbilgXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTlkMzg7XG4gIG1hcmdpbi1ibG9jazogMTBweDtcbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjlhMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOWEwMDA7XG4gIH1cbmA7XG5cbmNvbnN0IFJlc2V0Rm9ybSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IGZyb20gPSBsb2NhdGlvbi5zdGF0ZT8uZnJvbSB8fCBcIi9cIjtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCBjaGVja291dFNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgY29kZV9pbW1hdHJpY3VsYXRpb246IHl1cFxuICAgICAgLnN0cmluZygpXG4gICAgICAucmVxdWlyZWQocHJvcHMudChcInJlcXVpcmVkXCIsIHsgbnM6IFwibG9naW5cIiB9KSlcbiAgICAgIC5taW4oNSwgcHJvcHMudChcImVycm9yX2ltbWF0cmljdWxhdGlvbl9sZW5ndGhcIiwgeyBuczogXCJsb2dpblwiIH0pKVxuICAgICAgLnRlc3QoXG4gICAgICAgIFwiY29kZV9pbW1hdHJpY3VsYXRpb24tZXhpc3RzXCIsXG4gICAgICAgIHByb3BzLnQoXCJpbW1hdHJpY3VsYXRpb25fY2hlY2tcIiwgeyBuczogXCJsb2dpblwiIH0pLFxuICAgICAgICBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYCR7Q09OU1RBTlRTLkJBU0VfVVJMfS9hcGkvb3Blbi9pbW1hdHJpY3VsYXRpb25gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29kZV9pbW1hdHJpY3VsYXRpb246IHZhbHVlLCBwdXJwb3NlOiAwIH0pLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyA9PSAyMDA7XG4gICAgICAgIH1cbiAgICAgICksXG4gICAgcGxhaW5QYXNzd29yZDogeXVwXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5yZXF1aXJlZChwcm9wcy50KFwicmVxdWlyZWRcIiwgeyBuczogXCJsb2dpblwiIH0pKVxuICAgICAgLy8gY2hlY2sgbWluaW11bSBjaGFyYWN0ZXJzXG4gICAgICAubWluKDgsIHByb3BzLnQoXCJlcnJvcl9wYXNzX2xlbmd0aFwiLCB7IG5zOiBcImxvZ2luXCIgfSkpXG4gICAgICAvLyBkaWZmZXJlbnQgZXJyb3IgbWVzc2FnZXMgZm9yIGRpZmZlcmVudCByZXF1aXJlbWVudHNcbiAgICAgIC5tYXRjaGVzKFxuICAgICAgICAvWzAtOV0vLFxuICAgICAgICBwcm9wcy50KFwiZXJyb3JfcGFzc3dvcmRcIiwgeyBuczogXCJsb2dpblwiLCB2YWw6IFwiZGlnaXRcIiB9KVxuICAgICAgKVxuICAgICAgLm1hdGNoZXMoXG4gICAgICAgIC9bYS16XS8sXG4gICAgICAgIHByb3BzLnQoXCJlcnJvcl9wYXNzd29yZFwiLCB7IG5zOiBcImxvZ2luXCIsIHZhbDogXCJsb3dlcmNhc2VcIiB9KVxuICAgICAgKVxuICAgICAgLm1hdGNoZXMoXG4gICAgICAgIC9bQS1aXS8sXG4gICAgICAgIHByb3BzLnQoXCJlcnJvcl9wYXNzd29yZFwiLCB7IG5zOiBcImxvZ2luXCIsIHZhbDogXCJ1cHBlcmNhc2VcIiB9KVxuICAgICAgKSxcbiAgICBjb25maXJtX3Bhc3N3b3JkOiB5dXBcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLm9uZU9mKFt5dXAucmVmKFwicGxhaW5QYXNzd29yZFwiKSwgbnVsbF0sIFwiRG9lcyBub3QgbWF0Y2ggd2l0aCBwYXNzd29yZCFcIilcbiAgICAgIC5yZXF1aXJlZChwcm9wcy50KFwicmVxdWlyZWRcIiwgeyBuczogXCJsb2dpblwiIH0pKSxcbiAgfSk7XG5cbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbiAgICBjb2RlX2ltbWF0cmljdWxhdGlvbjogXCJcIixcbiAgICBwbGFpblBhc3N3b3JkOiBcIlwiLFxuICAgIGNvbmZpcm1fcGFzc3dvcmQ6IFwiXCIsXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChkYXRhKSA9PiBwcm9wcy5yZXNldFVzZXIoZGF0YSwgbmF2aWdhdGUsIGZyb20pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgbWI6IDgsXG4gICAgICAgIG14OiA0LFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEF2YXRhciBzeD17eyBtOiAxLCBiZ2NvbG9yOiBcIiMzNTlkMzhcIiB9fT5cbiAgICAgICAgPExvY2tQZXJzb25Ud29Ub25lIC8+XG4gICAgICA8L0F2YXRhcj5cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgIHtwcm9wcy50KFwicmVzZXR0aW5nXCIsIHsgbnM6IFwibG9naW5cIiB9KX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIHtwcm9wcy5lcnJvciAmJiAoXG4gICAgICAgIDxBbGVydFxuICAgICAgICAgIHNldmVyaXR5PVwiZXJyb3JcIlxuICAgICAgICAgIHN4PXt7IHdpZHRoOiBcIjEwMCVcIiwgbXQ6IDMsIG1iOiAyIH19XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMuY2xlYXJFcnJvcnMoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEFsZXJ0VGl0bGU+e3Byb3BzLnQoXCJlcnJvclwiLCB7IG5zOiBcImxvZ2luXCIgfSl9PC9BbGVydFRpdGxlPlxuICAgICAgICAgIDxzdHJvbmc+e3Byb3BzLmVycm9yfTwvc3Ryb25nPlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9XG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2NoZWNrb3V0U2NoZW1hfVxuICAgICAgICB2YWxpZGF0ZU9uQ2hhbmdlPXtmYWxzZX1cbiAgICAgICAgdmFsaWRhdGVPbkJsdXI9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICB7KHtcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgIHRvdWNoZWQsXG4gICAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgIGlzVmFsaWRhdGluZyxcbiAgICAgICAgfSkgPT4gKFxuICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHN4PXt7IG10OiAxIH19PlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBpZD1cInVzZXJjb2RlX2ltbWF0cmljdWxhdGlvbm5hbWVcIlxuICAgICAgICAgICAgICBsYWJlbD17cHJvcHMudChcImNvZGVfaW1tYXRyaWN1bGF0aW9uXCIsIHsgbnM6IFwibG9naW5cIiB9KX1cbiAgICAgICAgICAgICAgbmFtZT1cImNvZGVfaW1tYXRyaWN1bGF0aW9uXCJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb2RlX2ltbWF0cmljdWxhdGlvbn1cbiAgICAgICAgICAgICAgZXJyb3I9e1xuICAgICAgICAgICAgICAgICEhdG91Y2hlZC5jb2RlX2ltbWF0cmljdWxhdGlvbiAmJiAhIWVycm9ycy5jb2RlX2ltbWF0cmljdWxhdGlvblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgIHRvdWNoZWQuY29kZV9pbW1hdHJpY3VsYXRpb24gJiYgZXJyb3JzLmNvZGVfaW1tYXRyaWN1bGF0aW9uXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIG5hbWU9XCJwbGFpblBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLnQoXCJwYXNzd29yZFwiLCB7IG5zOiBcImxvZ2luXCIgfSl9XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGxhaW5QYXNzd29yZFwiXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGxhaW5QYXNzd29yZH1cbiAgICAgICAgICAgICAgZXJyb3I9eyEhdG91Y2hlZC5wbGFpblBhc3N3b3JkICYmICEhZXJyb3JzLnBsYWluUGFzc3dvcmR9XG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e3RvdWNoZWQucGxhaW5QYXNzd29yZCAmJiBlcnJvcnMucGxhaW5QYXNzd29yZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLnQoXCJjb25maXJtX3Bhc3N3b3JkXCIsIHsgbnM6IFwibG9naW5cIiB9KX1cbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgaWQ9XCJjb25maXJtX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb25maXJtX3Bhc3N3b3JkfVxuICAgICAgICAgICAgICBlcnJvcj17ISF0b3VjaGVkLmNvbmZpcm1fcGFzc3dvcmQgJiYgISFlcnJvcnMuY29uZmlybV9wYXNzd29yZH1cbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5jb25maXJtX3Bhc3N3b3JkICYmIGVycm9ycy5jb25maXJtX3Bhc3N3b3JkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMQnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGxvYWRpbmc9e3Byb3BzLmlzTG9hZGluZyB8fCBpc1ZhbGlkYXRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPntwcm9wcy50KFwicmVzZXRcIiwgeyBuczogXCJsb2dpblwiIH0pfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTEJ1dHRvbj5cblxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IGNvbG9yOiBcIiMzZDg1MTRcIiB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oZWxwKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy50KFwid2FudF9oZWxwXCIsIHsgbnM6IFwibG9naW5cIiB9KX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogXCIjM2Q4NTE0XCIgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2lnbmluKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy50KFwid2FudF9zaWduaW5cIiwgeyBuczogXCJsb2dpblwiIH0pfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPENvcHlyaWdodCBzeD17eyBtdDogNSB9fSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGVycm9yOiBzdGF0ZS5hdXRoLmVycm9ycyxcbiAgaXNMb2FkaW5nOiBzdGF0ZS5hdXRoLmxvYWRpbmcsXG59KTtcblxuY29uc3QgbWFwQWN0aW9uc1RvUHJvcHMgPSB7XG4gIHJlc2V0VXNlcixcbiAgY2xlYXJFcnJvcnMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwQWN0aW9uc1RvUHJvcHMpKFJlc2V0Rm9ybSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgbG9naW5Vc2VyLCBjbGVhckVycm9ycyB9IGZyb20gXCIuLy4uLy4uL3JlZHV4L2FjdGlvbnMvVXNlckFjdGlvbnNcIjtcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSBcIi4uL0NvcHlyaWdodFwiO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHtcbiAgVHlwb2dyYXBoeSxcbiAgQWxlcnQsXG4gIEFsZXJ0VGl0bGUsXG4gIFRleHRGaWVsZCxcbiAgTGluayxcbiAgc3R5bGVkLFxuICBCb3gsXG4gIEF2YXRhcixcbiAgU3RhY2ssXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgeyBMb2FkaW5nQnV0dG9uIH0gZnJvbSBcIkBtdWkvbGFiXCI7XG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTG9ja091dGxpbmVkXCI7XG5cbmNvbnN0IGdldENoYXJhY3RlclZhbGlkYXRpb25FcnJvciA9IChzdHIpID0+IHtcbiAgcmV0dXJuIGBZb3VyIHBhc3N3b3JkIG11c3QgaGF2ZSBhdCBsZWFzdCAxICR7c3RyfSBjaGFyYWN0ZXJgO1xufTtcblxuZXhwb3J0IGNvbnN0IEZpZWxkID0gc3R5bGVkKFRleHRGaWVsZClgXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAmIGxhYmVsLk11aS1mb2N1c2VkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gICYgLk11aUlucHV0QmFzZS1yb290Lk11aS1mb2N1c2VkIGZpZWxkc2V0IHtcbiAgICBib3JkZXItY29sb3I6ICMyOWIwMjc7XG4gICAgb3V0bGluZS1jb2xvcjogIzI5YjAyNztcbiAgfVxuICAmIC5NdWlGb3JtSGVscGVyVGV4dC1yb290Lk11aS1lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTEJ1dHRvbiA9IHN0eWxlZChMb2FkaW5nQnV0dG9uKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1OWQzODtcbiAgbWFyZ2luLWJsb2NrOiAxMHB4O1xuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICMyOWEwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5YTAwMDtcbiAgfVxuYDtcblxuY29uc3QgU2lnbmluRm9ybSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IGZyb20gPSBsb2NhdGlvbi5zdGF0ZT8uZnJvbSB8fCBcIi9cIjtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCBjaGVja291dFNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgdXNlcm5hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChwcm9wcy50KFwicmVxdWlyZWRcIiwgeyBuczogXCJsb2dpblwiIH0pKSxcbiAgICBwYXNzd29yZDogeXVwXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5yZXF1aXJlZChwcm9wcy50KFwicmVxdWlyZWRcIiwgeyBuczogXCJsb2dpblwiIH0pKVxuICAgICAgLy8gY2hlY2sgbWluaW11bSBjaGFyYWN0ZXJzXG4gICAgICAubWluKDgsIHByb3BzLnQoXCJlcnJvcl9wYXNzX2xlbmd0aFwiLCB7IG5zOiBcImxvZ2luXCIgfSkpXG4gICAgICAvLyBkaWZmZXJlbnQgZXJyb3IgbWVzc2FnZXMgZm9yIGRpZmZlcmVudCByZXF1aXJlbWVudHNcbiAgICAgIC5tYXRjaGVzKFxuICAgICAgICAvWzAtOV0vLFxuICAgICAgICBwcm9wcy50KFwiZXJyb3JfcGFzc3dvcmRcIiwgeyBuczogXCJsb2dpblwiLCB2YWw6IFwiZGlnaXRcIiB9KVxuICAgICAgKVxuICAgICAgLm1hdGNoZXMoXG4gICAgICAgIC9bYS16XS8sXG4gICAgICAgIHByb3BzLnQoXCJlcnJvcl9wYXNzd29yZFwiLCB7IG5zOiBcImxvZ2luXCIsIHZhbDogXCJsb3dlcmNhc2VcIiB9KVxuICAgICAgKVxuICAgICAgLm1hdGNoZXMoXG4gICAgICAgIC9bQS1aXS8sXG4gICAgICAgIHByb3BzLnQoXCJlcnJvcl9wYXNzd29yZFwiLCB7IG5zOiBcImxvZ2luXCIsIHZhbDogXCJ1cHBlcmNhc2VcIiB9KVxuICAgICAgKSxcbiAgfSk7XG5cbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGRhdGEpID0+IHByb3BzLmxvZ2luVXNlcihkYXRhLCBuYXZpZ2F0ZSwgZnJvbSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBtdDogMCxcbiAgICAgICAgbWI6IDgsXG4gICAgICAgIG14OiAyLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxBdmF0YXIgc3g9e3sgbTogMSwgYmdjb2xvcjogXCIjMzU5ZDM4XCIgfX0+XG4gICAgICAgIDxMb2NrT3V0bGluZWRJY29uIC8+XG4gICAgICA8L0F2YXRhcj5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICB7cHJvcHMudChcImNvbm5lY3Rpb25cIiwgeyBuczogXCJsb2dpblwiIH0pfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAge3Byb3BzLmVycm9yICYmIChcbiAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgc2V2ZXJpdHk9XCJlcnJvclwiXG4gICAgICAgICAgc3g9e3sgd2lkdGg6IFwiMTAwJVwiLCBtdDogMywgbWI6IDIgfX1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5jbGVhckVycm9ycygpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QWxlcnRUaXRsZT57cHJvcHMudChcImVycm9yXCIsIHsgbnM6IFwibG9naW5cIiB9KX08L0FsZXJ0VGl0bGU+XG4gICAgICAgICAgPHN0cm9uZz57cHJvcHMuZXJyb3J9PC9zdHJvbmc+XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAgPEZvcm1pa1xuICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc31cbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17Y2hlY2tvdXRTY2hlbWF9XG4gICAgICA+XG4gICAgICAgIHsoe1xuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgdG91Y2hlZCxcbiAgICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgIH0pID0+IChcbiAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICBsYWJlbD17cHJvcHMudChcInVzZXJuYW1lXCIsIHsgbnM6IFwibG9naW5cIiB9KX1cbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51c2VybmFtZX1cbiAgICAgICAgICAgICAgZXJyb3I9eyEhdG91Y2hlZC51c2VybmFtZSAmJiAhIWVycm9ycy51c2VybmFtZX1cbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC51c2VybmFtZSAmJiBlcnJvcnMudXNlcm5hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBsYWJlbD17cHJvcHMudChcInBhc3N3b3JkXCIsIHsgbnM6IFwibG9naW5cIiB9KX1cbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgIGVycm9yPXshIXRvdWNoZWQucGFzc3dvcmQgJiYgISFlcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e3RvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTdGFjayBmbGV4RGlyZWN0aW9uPVwicm93XCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgY29sb3I6IFwiI2QzMmYyZlwiLCB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBcIiNkMzJmMmZcIiB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHByb3BzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9wcy50KFwid2FudF9yZXNldFwiLCB7IG5zOiBcImxvZ2luXCIgfSl9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8TEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBsb2FkaW5nPXtwcm9wcy5pc0xvYWRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPntwcm9wcy50KFwic2lnbmluXCIsIHsgbnM6IFwibG9naW5cIiB9KX08L3NwYW4+XG4gICAgICAgICAgICA8L0xCdXR0b24+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgc3g9e3sgY29sb3I6IFwiIzNkODUxNFwiIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmhlbHAoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Byb3BzLnQoXCJ3YW50X2hlbHBcIiwgeyBuczogXCJsb2dpblwiIH0pfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IGNvbG9yOiBcIiMzZDg1MTRcIiB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zaWdudXAoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Byb3BzLnQoXCJ3YW50X3NpZ251cFwiLCB7IG5zOiBcImxvZ2luXCIgfSl9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8Q29weXJpZ2h0IHN4PXt7IG10OiA1IH19IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgZXJyb3I6IHN0YXRlLmF1dGguZXJyb3JzLFxuICBpc0xvYWRpbmc6IHN0YXRlLmF1dGgubG9hZGluZyxcbn0pO1xuXG5jb25zdCBtYXBBY3Rpb25zVG9Qcm9wcyA9IHtcbiAgbG9naW5Vc2VyLFxuICBjbGVhckVycm9ycyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBBY3Rpb25zVG9Qcm9wcykoU2lnbmluRm9ybSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJVc2VyLCBjbGVhckVycm9ycyB9IGZyb20gXCIuLy4uLy4uL3JlZHV4L2FjdGlvbnMvVXNlckFjdGlvbnNcIjtcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSBcIi4uL0NvcHlyaWdodFwiO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHtcbiAgVHlwb2dyYXBoeSxcbiAgQWxlcnQsXG4gIEFsZXJ0VGl0bGUsXG4gIFN0YWNrLFxuICBUZXh0RmllbGQsXG4gIExpbmssXG4gIEJveCxcbiAgR3JpZCxcbiAgc3R5bGVkLFxuICBBdmF0YXIsXG4gIGRlYm91bmNlLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTG9hZGluZ0J1dHRvbiB9IGZyb20gXCJAbXVpL2xhYlwiO1xuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCBQZXJzb25BZGRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BlcnNvbkFkZFwiO1xuaW1wb3J0IENPTlNUQU5UUyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5cbmNvbnN0IGdldENoYXJhY3RlclZhbGlkYXRpb25FcnJvciA9IChzdHIpID0+IHtcbiAgcmV0dXJuIGBZb3VyIHBhc3N3b3JkIG11c3QgaGF2ZSBhdCBsZWFzdCAxICR7c3RyfSBjaGFyYWN0ZXJgO1xufTtcblxuZXhwb3J0IGNvbnN0IEZpZWxkID0gc3R5bGVkKFRleHRGaWVsZClgXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAmIGxhYmVsLk11aS1mb2N1c2VkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gICYgLk11aUlucHV0QmFzZS1yb290Lk11aS1mb2N1c2VkIGZpZWxkc2V0IHtcbiAgICBib3JkZXItY29sb3I6ICMyOWIwMjc7XG4gICAgb3V0bGluZS1jb2xvcjogIzI5YjAyNztcbiAgfVxuICAmIC5NdWlGb3JtSGVscGVyVGV4dC1yb290Lk11aS1lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTEJ1dHRvbiA9IHN0eWxlZChMb2FkaW5nQnV0dG9uKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1OWQzODtcbiAgbWFyZ2luLWJsb2NrOiAxMHB4O1xuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICMyOWEwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5YTAwMDtcbiAgfVxuYDtcblxuY29uc3QgU2lnbnVwRm9ybSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IGZyb20gPSBsb2NhdGlvbi5zdGF0ZT8uZnJvbSB8fCBcIi9cIjtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCBjaGVja291dFNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgY29kZV9pbW1hdHJpY3VsYXRpb246IHl1cFxuICAgICAgLnN0cmluZygpXG4gICAgICAucmVxdWlyZWQocHJvcHMudChcInJlcXVpcmVkXCIsIHsgbnM6IFwibG9naW5cIiB9KSlcbiAgICAgIC5taW4oNSwgcHJvcHMudChcImVycm9yX2ltbWF0cmljdWxhdGlvbl9sZW5ndGhcIiwgeyBuczogXCJsb2dpblwiIH0pKVxuICAgICAgLnRlc3QoXG4gICAgICAgIFwiY29kZV9pbW1hdHJpY3VsYXRpb24tZXhpc3RzXCIsXG4gICAgICAgIHByb3BzLnQoXCJpbW1hdHJpY3VsYXRpb25fbmV4aXN0XCIsIHsgbnM6IFwibG9naW5cIiB9KSxcbiAgICAgICAgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGAke0NPTlNUQU5UUy5CQVNFX1VSTH0vYXBpL29wZW4vaW1tYXRyaWN1bGF0aW9uYCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvZGVfaW1tYXRyaWN1bGF0aW9uOiB2YWx1ZSwgcHVycG9zZTogMSB9KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMgPT0gMjAwO1xuICAgICAgICB9XG4gICAgICApLFxuICAgIHVzZXJuYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQocHJvcHMudChcInJlcXVpcmVkXCIsIHsgbnM6IFwibG9naW5cIiB9KSkudGVzdChcbiAgICAgIFwidXNlcm5hbWUtZXhpc3RzXCIsXG4gICAgICBwcm9wcy50KFwidXNlcm5hbWVfZXhpc3RcIiwgeyBuczogXCJsb2dpblwiIH0pLFxuICAgICAgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Q09OU1RBTlRTLkJBU0VfVVJMfS9hcGkvb3Blbi91c2VybmFtZWAsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogdmFsdWUgfSksXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyA9PSAyMDA7XG4gICAgICB9XG4gICAgKSxcbiAgICBwbGFpblBhc3N3b3JkOiB5dXBcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLnJlcXVpcmVkKHByb3BzLnQoXCJyZXF1aXJlZFwiLCB7IG5zOiBcImxvZ2luXCIgfSkpXG4gICAgICAvLyBjaGVjayBtaW5pbXVtIGNoYXJhY3RlcnNcbiAgICAgIC5taW4oOCwgcHJvcHMudChcImVycm9yX3Bhc3NfbGVuZ3RoXCIsIHsgbnM6IFwibG9naW5cIiB9KSlcbiAgICAgIC8vIGRpZmZlcmVudCBlcnJvciBtZXNzYWdlcyBmb3IgZGlmZmVyZW50IHJlcXVpcmVtZW50c1xuICAgICAgLm1hdGNoZXMoXG4gICAgICAgIC9bMC05XS8sXG4gICAgICAgIHByb3BzLnQoXCJlcnJvcl9wYXNzd29yZFwiLCB7IG5zOiBcImxvZ2luXCIsIHZhbDogXCJkaWdpdFwiIH0pXG4gICAgICApXG4gICAgICAubWF0Y2hlcyhcbiAgICAgICAgL1thLXpdLyxcbiAgICAgICAgcHJvcHMudChcImVycm9yX3Bhc3N3b3JkXCIsIHsgbnM6IFwibG9naW5cIiwgdmFsOiBcImxvd2VyY2FzZVwiIH0pXG4gICAgICApXG4gICAgICAubWF0Y2hlcyhcbiAgICAgICAgL1tBLVpdLyxcbiAgICAgICAgcHJvcHMudChcImVycm9yX3Bhc3N3b3JkXCIsIHsgbnM6IFwibG9naW5cIiwgdmFsOiBcInVwcGVyY2FzZVwiIH0pXG4gICAgICApLFxuICAgIGVtYWlsOiB5dXBcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLmVtYWlsKHByb3BzLnQoXCJlcnJvcl9lbWFpbFwiLCB7IG5zOiBcImxvZ2luXCIgfSkpXG4gICAgICAucmVxdWlyZWQocHJvcHMudChcInJlcXVpcmVkXCIsIHsgbnM6IFwibG9naW5cIiB9KSlcbiAgICAgIC50ZXN0KFxuICAgICAgICBcImVtYWlsLWV4aXN0c1wiLFxuICAgICAgICBwcm9wcy50KFwiZW1haWxfZXhpc3RcIiwgeyBuczogXCJsb2dpblwiIH0pLFxuICAgICAgICBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0NPTlNUQU5UUy5CQVNFX1VSTH0vYXBpL29wZW4vZW1haWxgLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOiB2YWx1ZSB9KSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMgPT0gMjAwO1xuICAgICAgICB9XG4gICAgICApLFxuICAgIGNvbmZpcm1fZW1haWw6IHl1cFxuICAgICAgLnN0cmluZygpXG4gICAgICAub25lT2YoW3l1cC5yZWYoXCJlbWFpbFwiKSwgbnVsbF0sIFwiRG9lcyBub3QgbWF0Y2ggd2l0aCBlbWFpbCFcIilcbiAgICAgIC5lbWFpbCgpXG4gICAgICAucmVxdWlyZWQocHJvcHMudChcInJlcXVpcmVkXCIsIHsgbnM6IFwibG9naW5cIiB9KSksXG4gICAgY29uZmlybV9wYXNzd29yZDogeXVwXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5vbmVPZihbeXVwLnJlZihcInBsYWluUGFzc3dvcmRcIiksIG51bGxdLCBcIkRvZXMgbm90IG1hdGNoIHdpdGggcGFzc3dvcmQhXCIpXG4gICAgICAucmVxdWlyZWQocHJvcHMudChcInJlcXVpcmVkXCIsIHsgbnM6IFwibG9naW5cIiB9KSksXG4gIH0pO1xuXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4gICAgY29kZV9pbW1hdHJpY3VsYXRpb246IFwiXCIsXG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGxhaW5QYXNzd29yZDogXCJcIixcbiAgICBjb25maXJtX2VtYWlsOiBcIlwiLFxuICAgIGNvbmZpcm1fcGFzc3dvcmQ6IFwiXCIsXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChkYXRhKSA9PiBwcm9wcy5yZWdpc3RlclVzZXIoZGF0YSwgbmF2aWdhdGUsIGZyb20pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgbWI6IDgsXG4gICAgICAgIG14OiA0LFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEF2YXRhciBzeD17eyBtOiAxLCBiZ2NvbG9yOiBcIiMzNTlkMzhcIiB9fT5cbiAgICAgICAgPFBlcnNvbkFkZEljb24gLz5cbiAgICAgIDwvQXZhdGFyPlxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAge3Byb3BzLnQoXCJjcmVhdGluZ1wiLCB7IG5zOiBcImxvZ2luXCIgfSl9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICB7cHJvcHMuZXJyb3IgJiYgKFxuICAgICAgICA8QWxlcnRcbiAgICAgICAgICBzZXZlcml0eT1cImVycm9yXCJcbiAgICAgICAgICBzeD17eyB3aWR0aDogXCIxMDAlXCIsIG10OiAzLCBtYjogMiB9fVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgIHByb3BzLmNsZWFyRXJyb3JzKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBbGVydFRpdGxlPntwcm9wcy50KFwiZXJyb3JcIiwgeyBuczogXCJsb2dpblwiIH0pfTwvQWxlcnRUaXRsZT5cbiAgICAgICAgICA8c3Ryb25nPntwcm9wcy5lcnJvcn08L3N0cm9uZz5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICl9XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtjaGVja291dFNjaGVtYX1cbiAgICAgICAgdmFsaWRhdGVPbkNoYW5nZT17ZmFsc2V9XG4gICAgICAgIHZhbGlkYXRlT25CbHVyPXtmYWxzZX1cbiAgICAgID5cbiAgICAgICAgeyh7XG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICB0b3VjaGVkLFxuICAgICAgICAgIGhhbmRsZUJsdXIsXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICBpc1ZhbGlkYXRpbmcsXG4gICAgICAgIH0pID0+IChcbiAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBzeD17eyBtdDogMSB9fT5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VyY29kZV9pbW1hdHJpY3VsYXRpb25uYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLnQoXCJjb2RlX2ltbWF0cmljdWxhdGlvblwiLCB7IG5zOiBcImxvZ2luXCIgfSl9XG4gICAgICAgICAgICAgIG5hbWU9XCJjb2RlX2ltbWF0cmljdWxhdGlvblwiXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29kZV9pbW1hdHJpY3VsYXRpb259XG4gICAgICAgICAgICAgIGVycm9yPXtcbiAgICAgICAgICAgICAgICAhIXRvdWNoZWQuY29kZV9pbW1hdHJpY3VsYXRpb24gJiYgISFlcnJvcnMuY29kZV9pbW1hdHJpY3VsYXRpb25cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICB0b3VjaGVkLmNvZGVfaW1tYXRyaWN1bGF0aW9uICYmIGVycm9ycy5jb2RlX2ltbWF0cmljdWxhdGlvblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLnQoXCJ1c2VybmFtZVwiLCB7IG5zOiBcImxvZ2luXCIgfSl9XG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51c2VybmFtZX1cbiAgICAgICAgICAgICAgZXJyb3I9eyEhdG91Y2hlZC51c2VybmFtZSAmJiAhIWVycm9ycy51c2VybmFtZX1cbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC51c2VybmFtZSAmJiBlcnJvcnMudXNlcm5hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLnQoXCJlbWFpbFwiLCB7IG5zOiBcImxvZ2luXCIgfSl9XG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cbiAgICAgICAgICAgICAgZXJyb3I9eyEhdG91Y2hlZC5lbWFpbCAmJiAhIWVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBpZD1cImNvbmZpcm1fZW1haWxcIlxuICAgICAgICAgICAgICBsYWJlbD17cHJvcHMudChcImNvbmZpcm1fZW1haWxcIiwgeyBuczogXCJsb2dpblwiIH0pfVxuICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybV9lbWFpbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb25maXJtX2VtYWlsfVxuICAgICAgICAgICAgICBlcnJvcj17ISF0b3VjaGVkLmNvbmZpcm1fZW1haWwgJiYgISFlcnJvcnMuY29uZmlybV9lbWFpbH1cbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5jb25maXJtX2VtYWlsICYmIGVycm9ycy5jb25maXJtX2VtYWlsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbmFtZT1cInBsYWluUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBsYWJlbD17cHJvcHMudChcInBhc3N3b3JkXCIsIHsgbnM6IFwibG9naW5cIiB9KX1cbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgaWQ9XCJwbGFpblBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wbGFpblBhc3N3b3JkfVxuICAgICAgICAgICAgICBlcnJvcj17ISF0b3VjaGVkLnBsYWluUGFzc3dvcmQgJiYgISFlcnJvcnMucGxhaW5QYXNzd29yZH1cbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5wbGFpblBhc3N3b3JkICYmIGVycm9ycy5wbGFpblBhc3N3b3JkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1fcGFzc3dvcmRcIlxuICAgICAgICAgICAgICBsYWJlbD17cHJvcHMudChcImNvbmZpcm1fcGFzc3dvcmRcIiwgeyBuczogXCJsb2dpblwiIH0pfVxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpZD1cImNvbmZpcm1fcGFzc3dvcmRcIlxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbmZpcm1fcGFzc3dvcmR9XG4gICAgICAgICAgICAgIGVycm9yPXshIXRvdWNoZWQuY29uZmlybV9wYXNzd29yZCAmJiAhIWVycm9ycy5jb25maXJtX3Bhc3N3b3JkfVxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLmNvbmZpcm1fcGFzc3dvcmQgJiYgZXJyb3JzLmNvbmZpcm1fcGFzc3dvcmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPExCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgbG9hZGluZz17cHJvcHMuaXNMb2FkaW5nIHx8IGlzVmFsaWRhdGluZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLnQoXCJzaWdudXBcIiwgeyBuczogXCJsb2dpblwiIH0pfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTEJ1dHRvbj5cblxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IGNvbG9yOiBcIiMzZDg1MTRcIiB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oZWxwKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy50KFwid2FudF9oZWxwXCIsIHsgbnM6IFwibG9naW5cIiB9KX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogXCIjM2Q4NTE0XCIgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2lnbmluKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy50KFwid2FudF9zaWduaW5cIiwgeyBuczogXCJsb2dpblwiIH0pfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPENvcHlyaWdodCBzeD17eyBtdDogNSB9fSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGVycm9yOiBzdGF0ZS5hdXRoLmVycm9ycyxcbiAgaXNMb2FkaW5nOiBzdGF0ZS5hdXRoLmxvYWRpbmcsXG59KTtcblxuY29uc3QgbWFwQWN0aW9uc1RvUHJvcHMgPSB7XG4gIHJlZ2lzdGVyVXNlcixcbiAgY2xlYXJFcnJvcnMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwQWN0aW9uc1RvUHJvcHMpKFNpZ251cEZvcm0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnQsIEFsZXJ0VGl0bGUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBFcnJvciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgc3g9e3sgd2lkdGg6IFwiMTAwJVwiLCBtdDogMywgbWI6IDIgfX0+XG4gICAgICA8QWxlcnRUaXRsZT5FcnJvcjwvQWxlcnRUaXRsZT5cbiAgICAgIDxzdHJvbmc+U29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uPC9zdHJvbmc+XG4gICAgPC9BbGVydD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgbGF6eSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlciwgUm91dGVyUHJvdmlkZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFwiLi8uLi91dGlscy9pMThuXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgcGVyc2lzdG9yLCBzdG9yZSB9IGZyb20gXCIuL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCI7XG5pbXBvcnQgSXNBdXRoZW50aWNhdGVkIGZyb20gXCIuLi91dGlscy9Jc0F1dGhlbnRpY2F0ZWRcIjtcbmltcG9ydCBJc0F1dGhvcml6ZWQgZnJvbSBcIi4uL3V0aWxzL0lzQXV0aG9yaXplZFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8vMzAwLmNzc1wiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvLzQwMC5jc3NcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by81MDAuY3NzXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8vNzAwLmNzc1wiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL3V0aWxzL0xvYWRpbmdcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL1BhZ2VzL0hvbWVcIjtcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIi4uL3V0aWxzL0Vycm9yUGFnZVwiO1xuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSBcIi4vUGFnZXMvUGFnZUxheW91dFwiO1xuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9QYWdlcy9TaWduSW5cIjtcbmltcG9ydCBOZXdEZW1hbmRlIGZyb20gXCIuL1BhZ2VzL05ld0RlbWFuZGVcIjtcbmltcG9ydCBNeUNvbXB0ZUJhbmNhaXJlIGZyb20gXCIuL1BhZ2VzL015Q29tcHRlQmFuY2FpcmVcIjtcbmltcG9ydCBNeURlbWFuZGVzIGZyb20gXCIuL1BhZ2VzL015RGVtYW5kZXNcIjtcblxuY29uc3QgTWFpbiA9ICh7IHBhZ2UgfSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXG4gICAge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICBlbGVtZW50OiAoXG4gICAgICAgIDxJc0F1dGhlbnRpY2F0ZWQgYXV0aD17dHJ1ZX0+XG4gICAgICAgICAgPFBhZ2VMYXlvdXQgLz5cbiAgICAgICAgPC9Jc0F1dGhlbnRpY2F0ZWQ+XG4gICAgICApLFxuICAgICAgZXJyb3JFbGVtZW50OiA8RXJyb3JQYWdlIC8+LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgICAgIGVsZW1lbnQ6IDxIb21lIHRpdGxlPVwiTUlORVNFQy1TVUJWRU5USU9OU1wiICAvPixcbiAgICAgICAgICBoYW5kbGU6IHtcbiAgICAgICAgICAgIGNydW1iOiAoKSA9PiA8TGluayB0bz1cIi9cIj57dChcImhvbWVcIil9PC9MaW5rPixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJkZW1hbmRlXCIsXG4gICAgICAgICAgZWxlbWVudDogPE5ld0RlbWFuZGUgdGl0bGU9XCJBcHBseSBmb3IgdGhpcyBzZXNzaW9uXCIgIC8+LFxuICAgICAgICAgIGhhbmRsZToge1xuICAgICAgICAgICAgY3J1bWI6ICgpID0+IDxMaW5rIHRvPVwiL1wiPnt0KFwiaG9tZVwiKX08L0xpbms+LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sIFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJteWRlbWFuZGVzXCIsXG4gICAgICAgICAgZWxlbWVudDogPE15RGVtYW5kZXMgdGl0bGU9XCJMaXN0IG9mIG15IGFwcGxpY2F0aW9uc1wiICAvPixcbiAgICAgICAgICBoYW5kbGU6IHtcbiAgICAgICAgICAgIGNydW1iOiAoKSA9PiA8TGluayB0bz1cIi9cIj57dChcImhvbWVcIil9PC9MaW5rPixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJjb21wdGVCYW5jYWlyZVwiLFxuICAgICAgICAgIGVsZW1lbnQ6IDxNeUNvbXB0ZUJhbmNhaXJlIHRpdGxlPVwiVXBkYXRlIG15IGJhbmsgYWNjb3VudCBkZXRhaWxzXCIgIC8+LFxuICAgICAgICAgIGhhbmRsZToge1xuICAgICAgICAgICAgY3J1bWI6ICgpID0+IDxMaW5rIHRvPVwiL1wiPnt0KFwiaG9tZVwiKX08L0xpbms+LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgZWxlbWVudDogKFxuICAgICAgICA8SXNBdXRoZW50aWNhdGVkIGF1dGg9e2ZhbHNlfT5cbiAgICAgICAgICA8U2lnbkluIHRpdGxlPVwibGV0J3MgbG9nIGluXCIgLz5cbiAgICAgICAgPC9Jc0F1dGhlbnRpY2F0ZWQ+XG4gICAgICApLFxuICAgICAgaGFuZGxlOiB7XG4gICAgICAgIGNydW1iOiAoKSA9PiA8TGluayB0bz1cIi9sb2dpblwiPnt0KFwibG9naW5cIil9PC9MaW5rPixcbiAgICAgIH0sXG4gICAgfSxcbiAgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9ezxMb2FkaW5nIC8+fT5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtwZXJzaXN0b3J9IGxvYWRpbmc9ezxMb2FkaW5nIC8+fT5cbiAgICAgICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4gICAgICAgIDwvUGVyc2lzdEdhdGU+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvUmVhY3QuU3VzcGVuc2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHsgQm94LCBBbGVydCwgVHlwb2dyYXBoeSwgdXNlVGhlbWUsIExpbmsgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RoZW1lXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgaTE4biBmcm9tIFwiaTE4bmV4dFwiO1xuaW1wb3J0IENPTlNUQU5UUyBmcm9tIFwiLi4vLi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNvbG9ycyA9IHRva2Vucyh0aGVtZS5wYWxldHRlLm1vZGUpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgbWF4V2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIHt0KFwid2VsY29tZV9tZXNzYWdlXCIpfSA8YnIgLz4ge3Byb3BzLnN0cnVjdHVyZS5uYW1lfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAge3Byb3BzLnN0cnVjdHVyZS5pc1RlY2ggJiYgKFxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBteT17OH0gPlxuICAgICAgICAgIHt0KFwid2VsY29tZV9maWxlX3N0YXRfZXN0cF9tZXNzYWdlXCIpfVxuICAgICAgICAgIHtcIiAgXCJ9XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj17YCR7Q09OU1RBTlRTLkJBU0VfVVJMfS91cGxvYWRzLyR7aTE4bi5sYW5ndWFnZSA9PSBcImVuXCIgPyBcIkVuZyBBZG1pbmlzdHJhdGl2ZSBGb3JtIFN1YnYgRVNUUC5wZGZcIiA6IFwiRnIgRmljaGUgQWRtaW5pc3RyYXRpdmUgU3VidiBFU1RQLnBkZlwifWB9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgY29sb3I9e1wiIzFGQTAzMFwifVxuICAgICAgICA+XG4gICAgICAgICAge3QoXCJ3ZWxjb21lX2ZpbGVfc3RhdF9lc3RwXCIpfVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICl9XG4gICAgICA8QWxlcnRcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgc2V2ZXJpdHk9XCJ3YXJuaW5nXCJcbiAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiA2LCBmb250U2l6ZTogMTYgfX1cbiAgICAgID5cbiAgICAgICAge3QoXCJ3ZWxjb21lX2FsZXJ0X2FjY291bnRfbWVzc2FnZVwiKX1cbiAgICAgIDwvQWxlcnQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHJvbGVzOiBzdGF0ZS5hdXRoLnJvbGVzLFxuICBzdHJ1Y3R1cmU6IHN0YXRlLmF1dGguY3JlZGVudGlhbHMuc3RydWN0dXJlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIb21lKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IEZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCAqIGFzIHl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuICB1c2VVcGxvYWRSaWJGaWxlTXV0YXRpb24sXG4gIHVzZUdldE15Q29tcHRlQmFuY2FpcmVRdWVyeSxcbiAgdXNlRWRpdE9yQ3JlYXRlQ29tcHRlQmFuY2FpcmVNdXRhdGlvbixcbn0gZnJvbSBcIi4vLi4vcmVkdXgvc2VydmljZXMvb3BlbkFwaVwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBUZXh0RmllbGQsXG4gIHN0eWxlZCxcbiAgVHlwb2dyYXBoeSxcbiAgU3RhY2ssXG4gIExpbmssXG4gIEljb25CdXR0b24sXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgVXBsb2FkRmlsZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVXBsb2FkRmlsZVwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9FcnJvclwiO1xuaW1wb3J0IHsgc2V0SW5mb01zZyB9IGZyb20gXCIuLy4uL3JlZHV4L2FjdGlvbnMvY29uZmlnQWN0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0RXh0ZW5zaW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0dsb2JhbHNcIjtcbmltcG9ydCBDT05TVEFOVFMgZnJvbSBcIi4uLy4uL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTG9hZGluZ0J1dHRvbiB9IGZyb20gXCJAbXVpL2xhYlwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL3V0aWxzL0xvYWRpbmdcIjtcblxuY29uc3QgRmllbGQgPSBzdHlsZWQoVGV4dEZpZWxkKWBcbiAgbWFyZ2luLWJsb2NrOiA4cHg7XG4gICYgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgTXlDb21wdGVCYW5jYWlyZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IFtpbml0aWFsVmFsdWVzLCBzZXRJbml0aWFsVmFsdWVzXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2NvcHlSaWIsIHNldENvcHlSaWJdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBmaWxlSW5wdXRGaWVsZCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qge1xuICAgIGRhdGE6IGNvbXB0ZSxcbiAgICBpc0ZldGNoaW5nLFxuICAgIGVycm9yLFxuICB9ID0gdXNlR2V0TXlDb21wdGVCYW5jYWlyZVF1ZXJ5KHByb3BzLnN0cnVjdHVyZS5pZCwge1xuICAgIHBvbGxpbmdJbnRlcnZhbDogMCxcbiAgICByZWZldGNoT25Nb3VudE9yQXJnQ2hhbmdlOiB0cnVlLFxuICAgIHNraXA6IGZhbHNlLFxuICB9KTtcbiAgY29uc3QgW1xuICAgIHVwbG9hZFJpYkZpbGUsIC8vIFRoaXMgaXMgdGhlIG11dGF0aW9uIHRyaWdnZXJcbiAgICB7IGlzTG9hZGluZzogaXNVcGxvYWRpbmcgfSwgLy8gVGhpcyBpcyB0aGUgZGVzdHJ1Y3R1cmVkIG11dGF0aW9uIHJlc3VsdFxuICBdID0gdXNlVXBsb2FkUmliRmlsZU11dGF0aW9uKCk7XG5cbiAgY29uc3QgW3VwZGF0ZUNyZWF0ZUNvbXB0ZSwgeyBpc0xvYWRpbmc6IGlzVXBkYXRpbmcgfV0gPVxuICAgIHVzZUVkaXRPckNyZWF0ZUNvbXB0ZUJhbmNhaXJlTXV0YXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LnRpdGxlID0gcHJvcHMudGl0bGU7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0SW5pdGlhbFZhbHVlcyh7XG4gICAgICAgIGlkOiBjb21wdGU/LmlkIHx8IDAsXG4gICAgICAgIG51bWVybzogY29tcHRlPy5udW1lcm8gfHwgXCJcIixcbiAgICAgICAgaW50aXR1bGU6IGNvbXB0ZT8uaW50aXR1bGUgfHwgXCJcIixcbiAgICAgICAgbmFtZUJhbnF1ZTogY29tcHRlPy5uYW1lQmFucXVlIHx8IFwiXCIsXG4gICAgICAgIGNvcHlSSUI6IGNvbXB0ZT8uY29weVJJQj8uaWQgfHwgMCxcbiAgICAgIH0pO1xuICAgICAgaWYoY29tcHRlPy5jb3B5UklCKXtcbiAgICAgICAgc2V0Q29weVJpYihjb21wdGU/LmNvcHlSSUIpO1xuICAgICAgfVxuICB9LCBbY29tcHRlXSk7XG5cbiAgY29uc3QgY2hlY2tvdXRTY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIG51bWVybzogeXVwXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5yZXF1aXJlZCh0KFwiZm9ybS5lcnJvcl9udW1lcm9fcmVxdWlyZWRcIikpXG4gICAgICAubWluKDgsIHQoXCJmb3JtLmVycm9yX251bWVyb19sZW5ndGhcIikpLFxuICAgIGludGl0dWxlOiB5dXBcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLnJlcXVpcmVkKHQoXCJmb3JtLmVycm9yX2ludGl0dWxlX3JlcXVpcmVkXCIpKVxuICAgICAgLm1pbig5LCB0KFwiZm9ybS5lcnJvcl9pbnRpdHVsZV9yZXF1aXJlZFwiKSksXG4gICAgY29weVJJQjogeXVwXG4gICAgICAubnVtYmVyKClcbiAgICAgIC5wb3NpdGl2ZSh0KFwiZm9ybS5lcnJvcl9jb3BpZXJpYl9yZXF1aXJlZFwiKSlcbiAgICAgIC5pbnRlZ2VyKClcbiAgICAgIC5yZXF1aXJlZCh0KFwiZm9ybS5lcnJvcl9jb3BpZXJpYl9yZXF1aXJlZFwiKSksXG4gICAgbmFtZUJhbnF1ZTogeXVwXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5yZXF1aXJlZCh0KFwiZm9ybS5lcnJvcl9uYW1lYmFucXVlX3JlcXVpcmVkXCIpKVxuICAgICAgLm1pbig5LCB0KFwiZm9ybS5lcnJvcl9uYW1lYmFucXVlX2xlbmd0aFwiKSksXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZUNyZWF0ZUNvbXB0ZSh7XG4gICAgICAuLi5kYXRhLFxuICAgICAgc3RydWN0dXJlOiBwcm9wcy5zdHJ1Y3R1cmUuaWQsXG4gICAgfSk7XG4gICAgaWYgKHJlcz8uZGF0YS5zdWNjZXNzKSB7XG4gICAgICBwcm9wcy5zZXRJbmZvTXNnKHtcbiAgICAgICAgbWVzc2FnZTogdChcIm1lc3NhZ2UuY29tcHRlX2NyZWF0ZV91cGRhdGVkX3N1Y2Nlc3NcIiksXG4gICAgICAgIHNldmVyaXR5OiBcInN1Y2Nlc3NcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5zZXRJbmZvTXNnKHtcbiAgICAgICAgbWVzc2FnZTogcmVzPy5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIHNldmVyaXR5OiBcImVycm9yXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV3RmlsZSA9IGFzeW5jIChlLCBzZXRGaWVsZFZhbHVlKSA9PiB7XG4gICAgY29uc3QgYWxsb3dlZFR5cGVzID0gW1xuICAgICAgXCJpbWFnZS9qcGVnXCIsXG4gICAgICBcImltYWdlL3BuZ1wiLFxuICAgICAgXCJpbWFnZS9qcGdcIixcbiAgICAgIFwiYXBwbGljYXRpb24vcGRmXCIsXG4gICAgXTtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgIGlmIChlLnRhcmdldC5maWxlc1swXS5zaXplID4gMjA5NzE1Mikge1xuICAgICAgICBwcm9wcy5zZXRJbmZvTXNnKHtcbiAgICAgICAgICBtZXNzYWdlOiB0KFwibWVzc2FnZS5maWxlX3VwbG9hZF90b29iaWdcIiksXG4gICAgICAgICAgc2V2ZXJpdHk6IFwid2FybmluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFhbGxvd2VkVHlwZXMuaW5jbHVkZXMoZS50YXJnZXQuZmlsZXNbMF0/LnR5cGUpKSB7XG4gICAgICAgIHByb3BzLnNldEluZm9Nc2coe1xuICAgICAgICAgIG1lc3NhZ2U6IHQoXCJtZXNzYWdlLmZpbGVfdXBsb2FkX3dyb25ndHlwZVwiKSxcbiAgICAgICAgICBzZXZlcml0eTogXCJ3YXJuaW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVOYW1lXCIsIGUudGFyZ2V0LmZpbGVzWzBdLm5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB1cGxvYWRSaWJGaWxlKHtcbiAgICAgICAgaWQ6IHByb3BzLnN0cnVjdHVyZS5pZCxcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXMuZGF0YT8uc3VjY2Vzcykge1xuICAgICAgICBwcm9wcy5zZXRJbmZvTXNnKHtcbiAgICAgICAgICBtZXNzYWdlOiB0KFwibWVzc2FnZS5maWxlX3VwbG9hZF9zdWNjZXNzXCIpLFxuICAgICAgICAgIHNldmVyaXR5OiBcInN1Y2Nlc3NcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNldENvcHlSaWIocmVzLmRhdGE/LmRhdGEpO1xuICAgICAgICBzZXRGaWVsZFZhbHVlKFwiY29weVJJQlwiLCByZXMuZGF0YS5kYXRhPy5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5zZXRJbmZvTXNnKHtcbiAgICAgICAgICBtZXNzYWdlOiByZXM/LmVycm9yPy5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgc2V2ZXJpdHk6IFwiZXJyb3JcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlmIChpc0ZldGNoaW5nKSByZXR1cm4gPExvYWRpbmcgLz47XG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yIC8+O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgZW5hYmxlUmVpbml0aWFsaXplXG4gICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cbiAgICAgIGluaXRpYWxWYWx1ZXM9e3sgLi4uaW5pdGlhbFZhbHVlcyB9fVxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17Y2hlY2tvdXRTY2hlbWF9XG4gICAgPlxuICAgICAgeyh7XG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICB0b3VjaGVkLFxuICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgc2V0RmllbGRWYWx1ZSxcbiAgICAgIH0pID0+IChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGNvbXBvbmVudD1cImZvcm1cIlxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIG15OiAxLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIG1hcmdpblRvcD17M30gbWFyZ2luQm90dG9tPXs2fT57dChcImFjY291bnRfZGV0YWlsc1wiKX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lQmFucXVlXCJcbiAgICAgICAgICAgICAgbGFiZWw9e3QoXCJmb3JtLm5hbWViYW5xdWVcIil9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBuYW1lPVwibmFtZUJhbnF1ZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cbiAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWVCYW5xdWV9XG4gICAgICAgICAgICAgIGVycm9yPXshIXRvdWNoZWQubmFtZUJhbnF1ZSAmJiAhIWVycm9ycy5uYW1lQmFucXVlfVxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLm5hbWVCYW5xdWUgJiYgZXJyb3JzLm5hbWVCYW5xdWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwibnVtZXJvXCJcbiAgICAgICAgICAgICAgbGFiZWw9e3QoXCJmb3JtLm51bWVyb1wiKX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIG5hbWU9XCJudW1lcm9cIlxuICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19XG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5udW1lcm99XG4gICAgICAgICAgICAgIGVycm9yPXshIXRvdWNoZWQubnVtZXJvICYmICEhZXJyb3JzLm51bWVyb31cbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5udW1lcm8gJiYgZXJyb3JzLm51bWVyb31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJpbnRpdHVsZVwiXG4gICAgICAgICAgICAgIGxhYmVsPXt0KFwiZm9ybS5pbnRpdHVsZVwiKX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIG5hbWU9XCJpbnRpdHVsZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cbiAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmludGl0dWxlfVxuICAgICAgICAgICAgICBlcnJvcj17ISF0b3VjaGVkLmludGl0dWxlICYmICEhZXJyb3JzLmludGl0dWxlfVxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLmludGl0dWxlICYmIGVycm9ycy5pbnRpdHVsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIG1hcmdpblk9ezF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt2YWx1ZXMuY29weVJJQiA/IChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj17YCR7Q09OU1RBTlRTLkJBU0VfVVJMfS91cGxvYWRzLyR7Y29weVJpYi5maWxlTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXt0b3VjaGVkLmNvcHlSSUIgJiYgXCIjRkYwMDAwXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvcHlSaWIuZmlsZU5hbWV9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXt0b3VjaGVkLmNvcHlSSUIgJiYgXCJyZWRcIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dChcImZvcm0uZmlsZV9ub3RfYXR0YWNoZWRcIil9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiBcImhpZGRlblwiIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIHJlZj17ZmlsZUlucHV0RmllbGR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVOZXdGaWxlKGUsIHNldEZpZWxkVmFsdWUpfVxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZywgLnBkZlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtpc1VwbG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInVwbG9hZFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWxlSW5wdXRGaWVsZC5jdXJyZW50LmNsaWNrKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFVwbG9hZEZpbGVJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDxMb2FkaW5nQnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGxvYWRpbmc9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPnt0KFwiZm9ybS5zdWJtaXRfY29tcHRlXCIpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTG9hZGluZ0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICByb2xlczogc3RhdGUuYXV0aC5yb2xlcyxcbiAgc3RydWN0dXJlOiBzdGF0ZS5hdXRoLmNyZWRlbnRpYWxzLnN0cnVjdHVyZSxcbiAgc2Vzc2lvbjogc3RhdGUuYXV0aC5jcmVkZW50aWFscy5zZXNzaW9uLFxufSk7XG5cbmNvbnN0IG1hcEFjdGlvbnNUb1Byb3BzID0ge1xuICBzZXRJbmZvTXNnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcEFjdGlvbnNUb1Byb3BzKShNeUNvbXB0ZUJhbmNhaXJlKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNldEluZm9Nc2cgfSBmcm9tIFwiLi8uLi9yZWR1eC9hY3Rpb25zL2NvbmZpZ0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlR2V0TXlEZW1hbmRlc1F1ZXJ5IH0gZnJvbSBcIi4vLi4vcmVkdXgvc2VydmljZXMvb3BlbkFwaVwiO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbXVpL21hdGVyaWFsL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGFibGVCb2R5XCI7XHJcbmltcG9ydCBUYWJsZUNlbGwsIHsgdGFibGVDZWxsQ2xhc3NlcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL1RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGFibGVDb250YWluZXJcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UYWJsZUhlYWRcIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbXVpL21hdGVyaWFsL1RhYmxlUm93XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vdXRpbHMvTG9hZGluZ1wiO1xyXG5cclxuY29uc3QgU3R5bGVkVGFibGVDZWxsID0gc3R5bGVkKFRhYmxlQ2VsbCkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYuJHt0YWJsZUNlbGxDbGFzc2VzLmhlYWR9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIHdyaXRpbmdNb2RlOiBcInNpZGV3YXlzLWxyXCIsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gIH0sXHJcbiAgW2AmLiR7dGFibGVDZWxsQ2xhc3Nlcy5ib2R5fWBdOiB7XHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU3R5bGVkVGFibGVSb3cgPSBzdHlsZWQoVGFibGVSb3cpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgXCImOm50aC1vZi10eXBlKG9kZClcIjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcclxuICB9LFxyXG4gIC8vIGhpZGUgbGFzdCBib3JkZXJcclxuICBcIiY6bGFzdC1jaGlsZCB0ZCwgJjpsYXN0LWNoaWxkIHRoXCI6IHtcclxuICAgIGJvcmRlcjogMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBNeURlbWFuZGVzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIGNvbnN0IHtcclxuICAgIGRhdGEsXHJcbiAgICBpc0ZldGNoaW5nLFxyXG4gICAgZXJyb3IsXHJcbiAgfSA9IHVzZUdldE15RGVtYW5kZXNRdWVyeShcclxuICAgIHByb3BzLnN0cnVjdHVyZS5pZCxcclxuICAgIHtcclxuICAgICAgcG9sbGluZ0ludGVydmFsOiAwLFxyXG4gICAgICByZWZldGNoT25Nb3VudE9yQXJnQ2hhbmdlOiB0cnVlLFxyXG4gICAgICBza2lwOiBmYWxzZSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQudGl0bGUgPSBwcm9wcy50aXRsZTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEsIGVycm9yKTtcclxuXHJcbiAgcmV0dXJuIGlzRmV0Y2hpbmcgPyAoXHJcbiAgICA8TG9hZGluZyAvPlxyXG4gICkgOiAoXHJcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0gc3g9e3sgcDogXCIycHggNnB4XCIgfX0+XHJcbiAgICAgIDxUYWJsZSBzeD17eyBtaW5XaWR0aDogNzAwIH19IHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJzZWFyY2ggdGFibGVcIj5cclxuICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPnt0KFwidGFibGUucmVmZXJlbmNlXCIpfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICB7dChcInRhYmxlLmRhdGVEZW1hbmRlXCIpfVxyXG4gICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAge3Byb3BzLnN0cnVjdHVyZS5xdWFsaXR5ID09IFwiRXRhYmxpc3NlbWVudFwiICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0KFwidGFibGUucHRFZmZlY3RpZnNcIil9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dChcInRhYmxlLmFzc3VyYW5jZUVsZXZlUHRcIil9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dChcInRhYmxlLlF1b3RlRmVuYXNjb1B0XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAge3QoXCJ0YWJsZS5jb3Rpc2F0aW9uU2VkdWNQdFwiKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0KFwidGFibGUucG9zaXRpb25HZW9QdFwiKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0KFwidGFibGUuYXBzQ25wc1B0XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAge3QoXCJ0YWJsZS5yZXZlcnNlUmV0ZW51RmlzY1B0XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAge3QoXCJ0YWJsZS5wZXJjZW50RXhhbWVuUHRcIil9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dChcInRhYmxlLnBlcnNvbm5lbHNQdFwiKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0KFwidGFibGUucGVybWFWYWNhdGFpcmVQdFwiKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0KFwidGFibGUuY29uZm9ybWl0ZVB0XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAge3QoXCJ0YWJsZS5lcXVpcGVtZW50c1B0XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAge3QoXCJ0YWJsZS5tZXN1cmVzQmFyaWVyZXNQdFwiKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0KFwidGFibGUuY2xlYW5TY2hvb2xQdFwiKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0KFwidGFibGUuZGlnaXRhbGlzYXRpb25QdFwiKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0KFwidGFibGUuc2NvcmVcIil9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3QoXCJ0YWJsZS5zdGF0dXNcIil9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgIHt0KFwidGFibGUubW9udGFudFwiKX1cclxuICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgIHt0KFwidGFibGUub2JzZXJ2YXRpb25cIil9XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAge2RhdGE/Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93LnNlc3Npb259XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93LmRhdGVfZGVtYW5kZX1cclxuICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICB7cHJvcHMuc3RydWN0dXJlLnF1YWxpdHkgPT0gXCJFdGFibGlzc2VtZW50XCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jvdy5lZmZlY3RpZl9lbGV2ZXN9XHJcbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cm93LmFzc3VyYW5jZV9lbGV2ZXN9XHJcbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cm93LnF1b3RlX3BhcnRfZmVuYXNjb31cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3cuY290aXNhdGlvbl9zZWR1Y31cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3cucG9zaXRpb25fZ2VvZ3JhcGhpcXVlfVxyXG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jvdy5hcHNfY25wc31cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3cucmV2ZXJzZV9yZXRlbnVfZmlzY2FsZX1cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3cucG91cmNlbnRhZ2VfZXhhbWVufVxyXG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jvdy5wZXJzb25uZWxzfVxyXG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jvdy5yYXRpb25fcGVybWFuZW50X3ZhY2F0YWlyZX1cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3cuY29uZm9ybWl0ZX1cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3cuZXF1aXBlbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cm93Lm1lc3VyZXNfYmFyaWVyZXN9XHJcbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cm93LmNsZWFuX3NjaG9vbH1cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb3cuZGlnaXRhbGlzYXRpb259XHJcbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LnNjb3JlfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LnN0YXR1dH08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93Lm1vbnRhbnR9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5vYnNlcnZhdGlvbn08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9TdHlsZWRUYWJsZVJvdz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHJvbGVzOiBzdGF0ZS5hdXRoLnJvbGVzLFxyXG4gIHN0cnVjdHVyZTogc3RhdGUuYXV0aC5jcmVkZW50aWFscy5zdHJ1Y3R1cmUsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwQWN0aW9uc1RvUHJvcHMgPSB7XHJcbiAgc2V0SW5mb01zZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBBY3Rpb25zVG9Qcm9wcykoTXlEZW1hbmRlcyk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIFRleHRGaWVsZCxcbiAgdXNlVGhlbWUsXG4gIHN0eWxlZCxcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgU3dpdGNoLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUhlbHBlclRleHQsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTG9hZGluZ0J1dHRvbiB9IGZyb20gXCJAbXVpL2xhYlwiO1xuaW1wb3J0IHtcbiAgdXNlR2V0RGVtYW5kZUN1cnJlbnRRdWVyeSxcbiAgdXNlRWRpdERlbWFuZGVNdXRhdGlvbixcbn0gZnJvbSBcIi4vLi4vcmVkdXgvc2VydmljZXMvb3BlbkFwaVwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9FcnJvclwiO1xuaW1wb3J0IFN0cnVjdHVyZURldGFpbHMgZnJvbSBcIi4uL0NvbXBvbmVudHMvc3RydWN0dXJlcy9TdHJ1Y3R1cmVEZXRhaWxzXCI7XG5pbXBvcnQgeyBzZXRJbmZvTXNnIH0gZnJvbSBcIi4vLi4vcmVkdXgvYWN0aW9ucy9jb25maWdBY3Rpb25zXCI7XG5pbXBvcnQgRGVtYW5kZVBpZWNlcyBmcm9tIFwiLi4vQ29tcG9uZW50cy9kZW1hbmRlcy9EZW1hbmRlUGllY2VzXCI7XG5pbXBvcnQgSW1wcmltZUV0cyBmcm9tIFwiLi4vQ29tcG9uZW50cy9kZW1hbmRlcy9JbXByaW1lRXRzXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vdXRpbHMvTG9hZGluZ1wiO1xuXG5jb25zdCBHcmlkID0gc3R5bGVkKFwiZGl2XCIpKFxuICAoeyB0aGVtZSB9KSA9PiBgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XG4gIGdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgXCJwaWVjZSAgIHBpZWNlXCJcbiAgICBcImRlbWFuZGUgc3RydWN0dXJlXCI7XG4gICR7dGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpfXtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwic3RydWN0dXJlXCIgXG4gICAgXCJwaWVjZVwiO1xuICAgIFwiZGVtYW5kZVwiXG4gIH1cbmBcbik7XG5cbmV4cG9ydCBjb25zdCBGaWVsZCA9IHN0eWxlZChUZXh0RmllbGQpYFxuICAmIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbmA7XG5cbmNvbnN0IERlbWFuZGVDb250YWluZXIgPSBzdHlsZWQoXCJkaXZcIikoYFxuICBncmlkLWFyZWE6IGRlbWFuZGU7XG5gKTtcblxuY29uc3QgU3RydWN0dXJlQ29udGFpbmVyID0gc3R5bGVkKFwiZGl2XCIpKGBcbiAgZ3JpZC1hcmVhOiBzdHJ1Y3R1cmU7XG5gKTtcblxuY29uc3QgUGllY2VDb250YWluZXIgPSBzdHlsZWQoXCJkaXZcIikoYFxuICBncmlkLWFyZWE6IHBpZWNlO1xuYCk7XG5cbmNvbnN0IE5ld0RlbWFuZGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBbaW5pdGlhbFZhbHVlcywgc2V0SW5pdGlhbFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgbm9tYnJlRWxldmU6IDAsXG4gICAgbm9tYnJlUGVyc29ubmVsRW5zZWlnbmFudDogMCxcbiAgICBub21icmVQZXJzb25uZWxQZXJtYW5lbnQ6IDAsXG4gICAgcGVyc29ubmVsX2F1dG9yaXNlOiBmYWxzZSxcbiAgICBwZXJzb25uZWxfY29udHJhY3Q6IGZhbHNlLFxuICAgIHBlcmNlbnRFeGFtZW46IDAsXG4gICAgbm9tRm9uZGF0ZXVyOiBcIlwiLFxuICAgIGNvbnRhY3RGb25kYXRldXI6IFwiXCIsXG4gICAgY29udGFjdHM6IFwiXCIsXG4gICAgaXNPcmcsXG4gIH0pO1xuICBjb25zdCBbdmFsaWRlLCBzZXRWYWxpZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzT3JnID0gcHJvcHMuc3RydWN0dXJlLnF1YWxpdHkgIT09IFwiRXRhYmxpc3NlbWVudFwiO1xuICBjb25zdCBbb3BlbkZvcm1QcmludCwgc2V0T3BlbkZvcm1QcmludF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiBkZW1hbmRlLFxuICAgIGlzRmV0Y2hpbmcsXG4gICAgZXJyb3IsXG4gIH0gPSB1c2VHZXREZW1hbmRlQ3VycmVudFF1ZXJ5KFxuICAgIHsgaWQ6IHByb3BzLnN0cnVjdHVyZS5pZCwgc2Vzc2lvbjogcHJvcHMuc2Vzc2lvbi5pZCB9LFxuICAgIHtcbiAgICAgIHBvbGxpbmdJbnRlcnZhbDogMCxcbiAgICAgIHJlZmV0Y2hPbk1vdW50T3JBcmdDaGFuZ2U6IHRydWUsXG4gICAgICBza2lwOiBmYWxzZSxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgW3VwZGF0ZURlbWFuZGUsIHsgaXNMb2FkaW5nOiBpc1VwZGF0aW5nIH1dID0gdXNlRWRpdERlbWFuZGVNdXRhdGlvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSBwcm9wcy50aXRsZTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRlbWFuZGUpIHtcbiAgICAgIHNldEluaXRpYWxWYWx1ZXMoe1xuICAgICAgICBub21icmVFbGV2ZTogZGVtYW5kZT8ubm9tYnJlRWxldmUgfHwgMCxcbiAgICAgICAgbm9tYnJlUGVyc29ubmVsRW5zZWlnbmFudDogZGVtYW5kZT8ubm9tYnJlUGVyc29ubmVsRW5zZWlnbmFudCB8fCAwLFxuICAgICAgICBub21icmVQZXJzb25uZWxQZXJtYW5lbnQ6IGRlbWFuZGU/Lm5vbWJyZVBlcnNvbm5lbFBlcm1hbmVudCB8fCAwLFxuICAgICAgICBwZXJzb25uZWxfYXV0b3Jpc2U6IGRlbWFuZGU/LnBlcnNvbm5lbF9hdXRvcmlzZSB8fCBmYWxzZSxcbiAgICAgICAgcGVyc29ubmVsX2NvbnRyYWN0OiBkZW1hbmRlPy5wZXJzb25uZWxfY29udHJhY3QgfHwgZmFsc2UsXG4gICAgICAgIHBlcmNlbnRFeGFtZW46IGRlbWFuZGU/LnBlcmNlbnRFeGFtZW4gfHwgMCxcbiAgICAgICAgbm9tRm9uZGF0ZXVyOiBkZW1hbmRlPy5zdHJ1Y3R1cmU/Lm5vbUZvbmRhdGV1ciB8fCBcIlwiLFxuICAgICAgICBjb250YWN0Rm9uZGF0ZXVyOiBkZW1hbmRlPy5zdHJ1Y3R1cmU/LmNvbnRhY3RGb25kYXRldXIgfHwgXCJcIixcbiAgICAgICAgY29udGFjdHM6IGRlbWFuZGU/LnN0cnVjdHVyZT8uY29udGFjdHMgfHwgXCJcIixcbiAgICAgICAgaXNPcmcsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtkZW1hbmRlLCBpc09yZ10pO1xuXG4gIGNvbnN0IGNoZWNrb3V0U2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKFxuICAgIHtcbiAgICAgIG5vbUZvbmRhdGV1cjogeXVwXG4gICAgICAgIC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQodChcImZvcm0uZXJyb3JfbmFtZWZfcmVxdWlyZWRcIikpXG4gICAgICAgIC5taW4oNCwgdChcImZvcm0uZXJyb3JfbmFtZWZfbGVuZ3RoXCIpKSxcbiAgICAgIGNvbnRhY3RGb25kYXRldXI6IHl1cFxuICAgICAgICAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKHQoXCJmb3JtLmVycm9yX2NvbnRhY3RmX3JlcXVpcmVkXCIpKVxuICAgICAgICAubWluKDksIHQoXCJmb3JtLmVycm9yX2NvbnRhY3RzX2xlbmd0aFwiKSksXG4gICAgICBpc09yZzogeXVwLmJvb2xlYW4oKS5ub3RSZXF1aXJlZCgpLFxuICAgICAgcGVyc29ubmVsX2F1dG9yaXNlOiB5dXAuYm9vbGVhbigpLndoZW4oXCJpc09yZ1wiLCAoW2lzT3JnXSwgc2NoZW1hKSA9PiB7XG4gICAgICAgIHJldHVybiBpc09yZ1xuICAgICAgICAgID8gc2NoZW1hLm5vdFJlcXVpcmVkKClcbiAgICAgICAgICA6IHNjaGVtYS5yZXF1aXJlZCh0KFwiZm9ybS5lcnJvcl9wZXJzb25uZWxfYXV0b3Jpc2VfcmVxdWlyZWRcIikpO1xuICAgICAgfSksXG4gICAgICBwZXJzb25uZWxfY29udHJhY3Q6IHl1cC5ib29sZWFuKCkud2hlbihcImlzT3JnXCIsIChbaXNPcmddLCBzY2hlbWEpID0+IHtcbiAgICAgICAgcmV0dXJuIGlzT3JnXG4gICAgICAgICAgPyBzY2hlbWEubm90UmVxdWlyZWQoKVxuICAgICAgICAgIDogc2NoZW1hLnJlcXVpcmVkKHQoXCJmb3JtLmVycm9yX3BlcnNvbm5lbF9jb250cmFjdF9yZXF1aXJlZFwiKSk7XG4gICAgICB9KSxcbiAgICAgIGNvbnRhY3RzOiB5dXBcbiAgICAgICAgLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZCh0KFwiZm9ybS5lcnJvcl9jb250YWN0c19yZXF1aXJlZFwiKSlcbiAgICAgICAgLm1pbig5LCB0KFwiZm9ybS5lcnJvcl9jb250YWN0c19sZW5ndGhcIikpLFxuICAgICAgcGVyY2VudEV4YW1lbjogeXVwLm51bWJlcigpLndoZW4oXCJpc09yZ1wiLCAoW2lzT3JnXSwgc2NoZW1hKSA9PiB7XG4gICAgICAgIHJldHVybiBpc09yZ1xuICAgICAgICAgID8gc2NoZW1hLm5vdFJlcXVpcmVkKClcbiAgICAgICAgICA6IHNjaGVtYVxuICAgICAgICAgICAgICAucG9zaXRpdmUodChcImZvcm0uZXJyb3Jfbm9tYnJlX3Bvc2l0aWZcIikpXG4gICAgICAgICAgICAgIC5yZXF1aXJlZCh0KFwiZm9ybS5lcnJvcl9wZXJjZW50RXhhbWVuX3JlcXVpcmVkXCIpKVxuICAgICAgICAgICAgICAubWluKDAsIHQoXCJmb3JtLmVycm9yX25vbWJyZV9taW5cIiwgeyB2YWw6IDAgfSkpXG4gICAgICAgICAgICAgIC5tYXgoMTAwLCB0KFwiZm9ybS5lcnJvcl9ub21icmVfbWF4XCIsIHsgdmFsOiAxMDAgfSkpO1xuICAgICAgfSksXG4gICAgICBub21icmVQZXJzb25uZWxFbnNlaWduYW50OiB5dXBcbiAgICAgICAgLm51bWJlcigpXG4gICAgICAgIC53aGVuKFwiaXNPcmdcIiwgKFtpc09yZ10sIHNjaGVtYSkgPT4ge1xuICAgICAgICAgIHJldHVybiBpc09yZ1xuICAgICAgICAgICAgPyBzY2hlbWEubm90UmVxdWlyZWQoKVxuICAgICAgICAgICAgOiBzY2hlbWFcbiAgICAgICAgICAgICAgICAucG9zaXRpdmUodChcImZvcm0uZXJyb3Jfbm9tYnJlX3Bvc2l0aWZcIikpXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKHQoXCJmb3JtLmVycm9yX25vbWJyZVBlcnNvbm5lbEVuc2VpZ25hbnRfcmVxdWlyZWRcIikpO1xuICAgICAgICB9KSxcbiAgICAgIG5vbWJyZUVsZXZlOiB5dXAubnVtYmVyKCkud2hlbihcImlzT3JnXCIsIChbaXNPcmddLCBzY2hlbWEpID0+IHtcbiAgICAgICAgcmV0dXJuIGlzT3JnXG4gICAgICAgICAgPyBzY2hlbWEubm90UmVxdWlyZWQoKVxuICAgICAgICAgIDogc2NoZW1hXG4gICAgICAgICAgICAgIC5wb3NpdGl2ZSh0KFwiZm9ybS5lcnJvcl9ub21icmVfcG9zaXRpZlwiKSlcbiAgICAgICAgICAgICAgLnJlcXVpcmVkKHQoXCJmb3JtLmVycm9yX25vbWJyZUVsZXZlX3JlcXVpcmVkXCIpKTtcbiAgICAgIH0pLFxuICAgICAgbm9tYnJlUGVyc29ubmVsUGVybWFuZW50OiB5dXBcbiAgICAgICAgLm51bWJlcigpXG4gICAgICAgIC5wb3NpdGl2ZSh0KFwiZm9ybS5lcnJvcl9ub21icmVQZXJzb25uZWxQZXJtYW5lbnRfcmVxdWlyZWRcIikpXG4gICAgICAgIC53aGVuKFxuICAgICAgICAgIFwibm9tYnJlUGVyc29ubmVsRW5zZWlnbmFudFwiLFxuICAgICAgICAgIChbbm9tYnJlUGVyc29ubmVsRW5zZWlnbmFudF0sIHNjaGVtYSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5vbWJyZVBlcnNvbm5lbEVuc2VpZ25hbnRcbiAgICAgICAgICAgICAgPyBzY2hlbWEubWF4KFxuICAgICAgICAgICAgICAgICAgbm9tYnJlUGVyc29ubmVsRW5zZWlnbmFudCxcbiAgICAgICAgICAgICAgICAgIHQoXCJmb3JtLmVycm9yX25vbWJyZV9tYXhcIiwgeyB2YWw6IG5vbWJyZVBlcnNvbm5lbEVuc2VpZ25hbnQgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogc2NoZW1hXG4gICAgICAgICAgICAgICAgICAubWluKDAsIHQoXCJmb3JtLmVycm9yX25vbWJyZV9taW5cIiwgeyB2YWw6IDAgfSkpXG4gICAgICAgICAgICAgICAgICAubm90UmVxdWlyZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICksXG4gICAgfSxcbiAgICBbXG4gICAgICBbXCJub21icmVQZXJzb25uZWxQZXJtYW5lbnRcIiwgXCJub21icmVQZXJzb25uZWxFbnNlaWduYW50XCJdLFxuICAgICAgW1wibm9tYnJlRWxldmVcIiwgXCJpc09yZ1wiXSxcbiAgICAgIFtcIm5vbWJyZVBlcnNvbm5lbEVuc2VpZ25hbnRcIiwgXCJpc09yZ1wiXSxcbiAgICAgIFtcInBlcmNlbnRFeGFtZW5cIiwgXCJpc09yZ1wiXSxcbiAgICAgIFtcInBlcnNvbm5lbF9hdXRvcmlzZVwiLCBcImlzT3JnXCJdLFxuICAgICAgW1wicGVyc29ubmVsX2NvbnRyYWN0XCIsIFwiaXNPcmdcIl0sXG4gICAgXVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZURlbWFuZGUoeyAuLi5kYXRhLCBpZDogZGVtYW5kZT8uaWQgfSk7XG4gICAgY29uc3QganJlcyA9IEpTT04ucGFyc2UocmVzPy5kYXRhKTtcbiAgICBpZiAoanJlcz8uc3VjY2Vzcykge1xuICAgICAgcHJvcHMuc2V0SW5mb01zZyh7XG4gICAgICAgIG1lc3NhZ2U6IHQoXCJtZXNzYWdlLmRlbWFuZGVfdXBkYXRlZF9zdWNjZXNzXCIpLFxuICAgICAgICBzZXZlcml0eTogXCJzdWNjZXNzXCIsXG4gICAgICB9KTtcbiAgICAgIHNldE9wZW5Gb3JtUHJpbnQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLnNldEluZm9Nc2coe1xuICAgICAgICBtZXNzYWdlOiBqcmVzPy5tZXNzYWdlLFxuICAgICAgICBzZXZlcml0eTogXCJlcnJvclwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvciAvPjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R3JpZD5cbiAgICAgICAgPERlbWFuZGVDb250YWluZXI+XG4gICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgLi4uaW5pdGlhbFZhbHVlcyB9fVxuICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17Y2hlY2tvdXRTY2hlbWF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyh7XG4gICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgICAgICB0b3VjaGVkLFxuICAgICAgICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZSxcbiAgICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImZvcm1cIlxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIG15OiAxLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2lzRmV0Y2hpbmcgPyAoXG4gICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICAgIHshaXNPcmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2s6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPnt0KFwiZGVtYW5kZS5ncm91cFwiKX08L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVFbGV2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoXCJmb3JtLm5vbWJyZUVsZXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVFbGV2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBtaW46IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5vbWJyZUVsZXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhdG91Y2hlZC5ub21icmVFbGV2ZSAmJiAhIWVycm9ycy5ub21icmVFbGV2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQubm9tYnJlRWxldmUgJiYgZXJyb3JzLm5vbWJyZUVsZXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlcmNlbnRFeGFtZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0KFwiZm9ybS5wZXJjZW50RXhhbWVuXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50RXhhbWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IG1pbjogMCwgbWF4OiAxMDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBlcmNlbnRFeGFtZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISF0b3VjaGVkLnBlcmNlbnRFeGFtZW4gJiYgISFlcnJvcnMucGVyY2VudEV4YW1lblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQucGVyY2VudEV4YW1lbiAmJiBlcnJvcnMucGVyY2VudEV4YW1lblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBteTogMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVBlcnNvbm5lbEVuc2VpZ25hbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0KFwiZm9ybS5ub21icmVQZXJzb25uZWxFbnNlaWduYW50XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVQZXJzb25uZWxFbnNlaWduYW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgbWluOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubm9tYnJlUGVyc29ubmVsRW5zZWlnbmFudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXRvdWNoZWQubm9tYnJlUGVyc29ubmVsRW5zZWlnbmFudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFlcnJvcnMubm9tYnJlUGVyc29ubmVsRW5zZWlnbmFudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQubm9tYnJlUGVyc29ubmVsRW5zZWlnbmFudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm5vbWJyZVBlcnNvbm5lbEVuc2VpZ25hbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbXk6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVQZXJzb25uZWxQZXJtYW5lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0KFwiZm9ybS5ub21icmVQZXJzb25uZWxQZXJtYW5lbnRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVBlcnNvbm5lbFBlcm1hbmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IG1pbjogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5vbWJyZVBlcnNvbm5lbFBlcm1hbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXRvdWNoZWQubm9tYnJlUGVyc29ubmVsUGVybWFuZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWVycm9ycy5ub21icmVQZXJzb25uZWxQZXJtYW5lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLm5vbWJyZVBlcnNvbm5lbFBlcm1hbmVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm5vbWJyZVBlcnNvbm5lbFBlcm1hbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBteTogMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWVzLnBlcnNvbm5lbF9hdXRvcmlzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc29ubmVsX2F1dG9yaXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0KFwiZm9ybS5wZXJzb25uZWxfYXV0b3Jpc2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC5wZXJzb25uZWxfYXV0b3Jpc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnBlcnNvbm5lbF9hdXRvcmlzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWVzLnBlcnNvbm5lbF9jb250cmFjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc29ubmVsX2NvbnRyYWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0KFwiZm9ybS5wZXJzb25uZWxfY29udHJhY3RcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC5wZXJzb25uZWxfY29udHJhY3QgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnBlcnNvbm5lbF9jb250cmFjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBzdHlsZT17eyBwYWRkaW5nOiAxNSwgYm9yZGVyV2lkdGg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPnt0KFwic3RydWN0dXJlLmdyb3VwXCIpfTwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dChcImZvcm0uY29udGFjdHNcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb250YWN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyEhdG91Y2hlZC5jb250YWN0cyAmJiAhIWVycm9ycy5jb250YWN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5jb250YWN0cyAmJiBlcnJvcnMuY29udGFjdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tRm9uZGF0ZXVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoXCJmb3JtLm5vbUZvbmRhdGV1clwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21Gb25kYXRldXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5ub21Gb25kYXRldXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXRvdWNoZWQubm9tRm9uZGF0ZXVyICYmICEhZXJyb3JzLm5vbUZvbmRhdGV1clxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQubm9tRm9uZGF0ZXVyICYmIGVycm9ycy5ub21Gb25kYXRldXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBteTogMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RGb25kYXRldXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dChcImZvcm0uY29udGFjdEZvbmRhdGV1clwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0Rm9uZGF0ZXVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29udGFjdEZvbmRhdGV1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhdG91Y2hlZC5jb250YWN0Rm9uZGF0ZXVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISFlcnJvcnMuY29udGFjdEZvbmRhdGV1clxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQuY29udGFjdEZvbmRhdGV1ciAmJiBlcnJvcnMuY29udGFjdEZvbmRhdGV1clxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG15OiAxIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAxNSwgbWFyZ2luQmxvY2s6IDEwLCBib3JkZXJXaWR0aDogMSB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+e3QoXCJjb250YWN0Lmdyb3VwXCIpfTwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIExlIFPDqWNyZXRhcmlhdCBUZWNobmlxdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUZWw6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjY3NzM3ODQ1NVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDY3NyAzNyA4NCA1NSAvIDY5NCAyOSA4MSAzMSAvIDY3NyA2ODYgNDc0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpkZXNnLnNkc2dlcGVzZy5zc3ViQG1pbmVzZWMuZ292LmNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzZy5zZHNnZXBlc2cuc3N1YkBtaW5lc2VjLmdvdi5jbVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyBtdDogMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGEgQ2VsbHVsZSBJbmZvcm1hdGlxdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUZWw6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjY3NDkyMTExMVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDY3NCA5MiAxMSAxMSAvIDY3NCA1OCAxNiAwN1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWw6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86c2cuY2VsaW5mby5jZWExQG1pbmVzZWMuZ292LmNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2cuY2VsaW5mby5jZWExQG1pbmVzZWMuZ292LmNtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3ZhbGlkZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KFwiZm9ybS5zdWJtaXRcIil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xvYWRpbmdCdXR0b24+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgIDwvRGVtYW5kZUNvbnRhaW5lcj5cbiAgICAgICAgPFN0cnVjdHVyZUNvbnRhaW5lcj5cbiAgICAgICAgICA8U3RydWN0dXJlRGV0YWlscyBpc09yZz17aXNPcmd9IC8+XG4gICAgICAgIDwvU3RydWN0dXJlQ29udGFpbmVyPlxuICAgICAgICA8UGllY2VDb250YWluZXI+XG4gICAgICAgICAge0Jvb2xlYW4oZGVtYW5kZSkgJiYgKFxuICAgICAgICAgICAgPERlbWFuZGVQaWVjZXMgZGVtYW5kZUlkPXtkZW1hbmRlPy5pZH0gc2V0VmFsaWRlPXtzZXRWYWxpZGV9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QaWVjZUNvbnRhaW5lcj5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxJbXByaW1lRXRzXG4gICAgICAgIGRlbWFuZGVJZD17ZGVtYW5kZT8uaWR9XG4gICAgICAgIG9wZW49e29wZW5Gb3JtUHJpbnR9XG4gICAgICAgIGhhbmRsZU9wZW5DbG9zZT17c2V0T3BlbkZvcm1QcmludH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHJvbGVzOiBzdGF0ZS5hdXRoLnJvbGVzLFxuICBzdHJ1Y3R1cmU6IHN0YXRlLmF1dGguY3JlZGVudGlhbHMuc3RydWN0dXJlLFxuICBzZXNzaW9uOiBzdGF0ZS5hdXRoLmNyZWRlbnRpYWxzLnNlc3Npb24sXG59KTtcblxuY29uc3QgbWFwQWN0aW9uc1RvUHJvcHMgPSB7XG4gIHNldEluZm9Nc2csXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwQWN0aW9uc1RvUHJvcHMpKE5ld0RlbWFuZGUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ3NzQmFzZWxpbmUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi4vQ29tcG9uZW50cy9Ub3BCYXJcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9Db21wb25lbnRzL1NpZGVCYXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyB0aGVtZVNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RoZW1lXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcbmltcG9ydCBTbmFja2JhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9TbmFja2JhclwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IHsgdG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RoZW1lXCI7XG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gXCIuLi9Db21wb25lbnRzL0NvcHlyaWdodFwiO1xuaW1wb3J0IHsgc2V0SW5mb01zZywgY2xlYXJJbmZvTXNnIH0gZnJvbSBcIi4vLi4vcmVkdXgvYWN0aW9ucy9jb25maWdBY3Rpb25zXCI7XG5pbXBvcnQgTXVpQWxlcnQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQWxlcnRcIjtcbmltcG9ydCBCcmVhZENydW1icyBmcm9tIFwiLi4vQ29tcG9uZW50cy9CcmVhZENydW1ic1wiO1xuXG5jb25zdCBBbGVydCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQWxlcnQocHJvcHMsIHJlZikge1xuICByZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gcmVmPXtyZWZ9IHZhcmlhbnQ9XCJmaWxsZWRcIiB7Li4ucHJvcHN9IC8+O1xufSk7XG5cbmNvbnN0IFBhZ2VMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBbaXNTaWRlYmFyLCBzZXRJc1NpZGViYXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IGNvbG9ycyA9IHRva2Vucyhwcm9wcy5tb2RlKTtcblxuICBjb25zdCB0aGVtZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY3JlYXRlVGhlbWUodGhlbWVTZXR0aW5ncyhwcm9wcy5tb2RlKSksXG4gICAgW3Byb3BzLm1vZGVdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgPFNpZGVCYXIgaXNTaWRlYmFyPXtpc1NpZGViYXJ9IC8+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VG9wQmFyIHNldElzU2lkZWJhcj17c2V0SXNTaWRlYmFyfSAvPlxuICAgICAgICAgICAgPENvbnRhaW5lciBzeD17eyBtdDogNCwgbWI6IDQsIG14OiA0LCBtYXhXaWR0aDogXCIxMDBkdndcIiB9fT5cbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICAgIDxCcmVhZENydW1icyB0PXt0fSAvPlxuICAgICAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8Q29weXJpZ2h0IHN4PXt7IHB0OiA0IH19IC8+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxTbmFja2JhclxuICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICAgICAgb3Blbj17cHJvcHMuc25hY2tPcGVufVxuICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtwcm9wcy5jbGVhckluZm9Nc2d9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3Byb3BzLmNsZWFySW5mb01zZ31cbiAgICAgICAgICAgICAgICBzZXZlcml0eT17cHJvcHMuaW5mb1NldmVyaXR5fVxuICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Byb3BzLm1lc3NhZ2VJbmZvfVxuICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgPC9TbmFja2Jhcj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIG1vZGU6IHN0YXRlLmNvbmZpZy5tb2RlLFxuICBtZXNzYWdlSW5mbzogc3RhdGUuY29uZmlnLmluZm9NZXNzYWdlLFxuICBzbmFja09wZW46IHN0YXRlLmNvbmZpZy5zbmFja09wZW4sXG4gIGluZm9TZXZlcml0eTogc3RhdGUuY29uZmlnLmluZm9TZXZlcml0eSxcbn0pO1xuXG5jb25zdCBtYXBBY3Rpb25zVG9Qcm9wcyA9IHtcbiAgc2V0SW5mb01zZyxcbiAgY2xlYXJJbmZvTXNnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcEFjdGlvbnNUb1Byb3BzKShQYWdlTGF5b3V0KTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQge1xuICBUb29sdGlwLFxuICBTdGFjayxcbiAgQm94LFxuICBJY29uQnV0dG9uLFxuICBQYXBlcixcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCBTaWduaW5Gb3JtIGZyb20gXCIuLi9Db21wb25lbnRzL3VzZXJzL3NpZ25pbkZvcm1cIjtcbmltcG9ydCBTaWdudXBGb3JtIGZyb20gXCIuLi9Db21wb25lbnRzL3VzZXJzL3NpZ251cEZvcm1cIjtcbmltcG9ydCBpMThuIGZyb20gXCJpMThuZXh0XCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vQ29tcG9uZW50cy9Db250YWN0XCI7XG5pbXBvcnQgUmVzZXRGb3JtIGZyb20gXCIuLi9Db21wb25lbnRzL3VzZXJzL3Jlc2V0Rm9ybVwiO1xuXG5jb25zdCBTaWduSW4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBbc2lnbkluLCBzZXRTaWduSW5dID0gUmVhY3QudXNlU3RhdGUoMSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHByb3BzLnRpdGxlO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVyQ29tcG9uZW50ID0gKHQpID0+IHtcbiAgICBzd2l0Y2ggKHNpZ25Jbikge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gPFNpZ25pbkZvcm0gdD17dH0gcmVzZXQ9eygpID0+IHNldFNpZ25JbigyKX0gaGVscD17KCkgPT4gc2V0U2lnbkluKDMpfSBzaWdudXA9eygpID0+IHNldFNpZ25JbigwKX0gLz47XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiA8UmVzZXRGb3JtIHQ9e3R9IHNpZ25pbj17KCkgPT4gc2V0U2lnbkluKDEpfSBoZWxwPXsoKSA9PiBzZXRTaWduSW4oMyl9IC8+O1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gPENvbnRhY3QgdD17dH0gc2lnbmluPXsoKSA9PiBzZXRTaWduSW4oMSl9IHNpZ251cD17KCkgPT4gc2V0U2lnbkluKDApfSAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8U2lnbnVwRm9ybSB0PXt0fSBzaWduaW49eygpID0+IHNldFNpZ25JbigxKX0gaGVscD17KCkgPT4gc2V0U2lnbkluKDMpfSAvPjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIHN4PXt7IGhlaWdodDogXCIxMDB2aFwiIH19PlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8R3JpZFxuICAgICAgICBpdGVtXG4gICAgICAgIHhzPXsxMn1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC4vaW1hZ2VzL21pbmVzZWMuanBnKVwiLFxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgbWF4V2lkdGg6IDcwMCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmM1wiLFxuICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigxNXB4KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgICAgICByaWdodDogNSxcbiAgICAgICAgICAgICAgY29sb3I6IFwibWVkaXVtc3ByaW5nZ3JlZW5cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGkxOG4ubGFuZ3VhZ2Uuc3RhcnRzV2l0aChcImZyXCIpID8gXCJlblwiIDogXCJmclwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXt0KFwiY2hhbmdlX2xhbmd1YWdlXCIpfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2kxOG4ubGFuZ3VhZ2Uuc3RhcnRzV2l0aChcImZyXCIpID8gXCIgRU5cIiA6IFwiIEZSXCJ9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8aDVcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbklubGluZTogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIG1hcmdpbkJsb2NrU3RhcnQ6IFwiMnJlbVwiLFxuICAgICAgICAgICAgICBtYXJnaW5CbG9ja0VuZDogXCIxcmVtXCIsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS42cmVtXCIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoXCJ3ZWxjb21lX3RpdGxlXCIsIHsgbnM6IFwibG9naW5cIiB9KX1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIHtyZW5kZXJDb21wb25lbnQodCl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcbiIsImltcG9ydCB7XG4gIEFVVEhFTlRJQ0FURUQsXG4gIFNFVF9FUlJPUlMsXG4gIENMRUFSX0VSUk9SUyxcbiAgVU5BVVRIRU5USUNBVEVELFxuICBJU19CVVNZLFxuICBTRVRfVVNFUixcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL1VzZXJSZWR1Y2VyXCI7XG5pbXBvcnQgeyBDTEVBUl9NRU5VIH0gZnJvbSBcIi4uL3JlZHVjZXJzL2NvbmZpZ1JlZHVjZXJcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IENPTlNUQU5UUyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5cbmNvbnN0IHB1YmxpY0F4aW9zID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogQ09OU1RBTlRTLkJBU0VfVVJMLFxuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9ICh1c2VyRGF0YSwgbmF2aWdhdGUsIGZyb20pID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChJU19CVVNZKCkpO1xuICBwdWJsaWNBeGlvc1xuICAgIC5wb3N0KFwiL2FwaS9sb2dpbl9jaGVja1wiLCB1c2VyRGF0YSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLmRhdGEudG9rZW4pIHtcbiAgICAgICAgbmF2aWdhdGUoZnJvbSk7XG4gICAgICAgIGRpc3BhdGNoKEFVVEhFTlRJQ0FURUQocmVzLmRhdGEpKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBkaXNwYXRjaChTRVRfRVJST1JTKGVyci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSkpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9ICh1c2VyRGF0YSwgbmF2aWdhdGUpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChJU19CVVNZKCkpO1xuICBwdWJsaWNBeGlvc1xuICAgIC5wb3N0KFwiL2FwaS9yZWdpc3RlclwiLCB1c2VyRGF0YSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIGxvZ2luVXNlcihcbiAgICAgICAgICAgIHsgdXNlcm5hbWU6IHVzZXJEYXRhLnVzZXJuYW1lLCBwYXNzd29yZDogdXNlckRhdGEucGxhaW5QYXNzd29yZCB9LFxuICAgICAgICAgICAgbmF2aWdhdGUsXG4gICAgICAgICAgICBcIi9cIlxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKFNFVF9FUlJPUlMocmVzLmRhdGEubWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBkaXNwYXRjaChTRVRfRVJST1JTKGVyci5tZXNzYWdlKSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXRVc2VyID0gKHVzZXJEYXRhLCBuYXZpZ2F0ZSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKElTX0JVU1koKSk7XG4gIHB1YmxpY0F4aW9zXG4gICAgLnBvc3QoXCIvYXBpL3Jlc2V0XCIsIHVzZXJEYXRhKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgbG9naW5Vc2VyKFxuICAgICAgICAgICAgeyB1c2VybmFtZTogdXNlckRhdGEuY29kZV9pbW1hdHJpY3VsYXRpb24sIHBhc3N3b3JkOiB1c2VyRGF0YS5wbGFpblBhc3N3b3JkIH0sXG4gICAgICAgICAgICBuYXZpZ2F0ZSxcbiAgICAgICAgICAgIFwiL1wiXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goU0VUX0VSUk9SUyhyZXMuZGF0YS5tZXNzYWdlKSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIGRpc3BhdGNoKFNFVF9FUlJPUlMoZXJyLnJlc3BvbnNlPy5kYXRhKSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9IChuYXZpZ2F0ZSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKENMRUFSX01FTlUoKSk7XG4gIGRpc3BhdGNoKFVOQVVUSEVOVElDQVRFRCgpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRFcnJvcnMgPSAoZXJyb3JzKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goU0VUX0VSUk9SUyhlcnJvcnMpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRNZSA9IChtZW1icmUpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChTRVRfVVNFUihtZW1icmUpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyRGF0YSA9IChhY2Nlc3NfdG9rZW4sIGF1dGhlbnRpY2F0ZWQpID0+IChkaXNwYXRjaCkgPT4ge1xuICBwdWJsaWNBeGlvc1xuICAgIC5nZXQoXCIvYXBpL3N0cnVjdHVyZS9tZVwiLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgZGlzcGF0Y2goU0VUX1VTRVIocmVzLmRhdGEpKTtcbiAgICAgIGRpc3BhdGNoKEFVVEhFTlRJQ0FURUQoYXV0aGVudGljYXRlZCkpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGRpc3BhdGNoKFNFVF9FUlJPUlMoZXJyLm1lc3NhZ2UpKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhckVycm9ycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChDTEVBUl9FUlJPUlMoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGluZyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChJU19CVVNZKCkpO1xufTtcbiIsImltcG9ydCB7XG4gIFNFVF9NT0RFLFxuICBTRVRfSU5GT19NRVNTQUdFLFxuICBDTEVBUl9JTkZPX01FU1NBR0UsXG4gIEFERF9NRU5VLFxuICBSRU1PVkVfTUVOVSxcbiAgQ0xFQVJfTUVOVSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL2NvbmZpZ1JlZHVjZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZU1vZGUgPSAobW9kZSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKFNFVF9NT0RFKG1vZGUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SW5mb01zZyA9IChtZXNzYWdlKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goU0VUX0lORk9fTUVTU0FHRShtZXNzYWdlKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkTWVudUJyZWFkID0gKG1lbnUpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChBRERfTUVOVShtZW51KSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlTWVudUJyZWFkID0gKGl0ZW0pID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChSRU1PVkVfTUVOVShpdGVtKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJNZW51QnJlYWQgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goQ0xFQVJfTUVOVSgpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhckluZm9Nc2cgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goQ0xFQVJfSU5GT19NRVNTQUdFKCkpO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgYWNjZXNzX3Rva2VuOiBcIlwiLFxuICBzaG93U2lkZUJhcjogdHJ1ZSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yczogbnVsbCxcbiAgcm9sZXM6IFtdLFxuICBjcmVkZW50aWFsczoge30sXG4gIHN0cnVjdHVyZToge30sXG59O1xuXG5jb25zdCBVc2VyU2NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInVzZXJcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIEFVVEhFTlRJQ0FURUQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3JzOiBcIlwiLFxuICAgICAgICBhY2Nlc3NfdG9rZW46IGFjdGlvbi5wYXlsb2FkLnRva2VuLFxuICAgICAgICBjcmVkZW50aWFsczogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgcm9sZXM6IGFjdGlvbi5wYXlsb2FkLmRhdGEucm9sZSxcbiAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIH0sXG4gICAgSVNfQlVTWTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICB9LFxuICAgIFNFVF9FUlJPUlM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIH0sXG4gICAgQ0xFQVJfRVJST1JTOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yczogXCJcIixcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIH0sXG4gICAgVU5BVVRIRU5USUNBVEVEOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uaW5pdGlhbFN0YXRlLCBhY2Nlc3NfdG9rZW46IFwiXCIgfTtcbiAgICB9LFxuICAgIFRPR0dMRV9TSURFQkFSOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3dTaWRlQmFyOiAhc3RhdGUuc2hvd1NpZGVCYXIsXG4gICAgICB9O1xuICAgIH0sXG4gICAgU0VUX1VTRVI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RydWN0dXJlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3Qge1xuICBBVVRIRU5USUNBVEVELFxuICBMT0FEX1VTRVIsXG4gIFNFVF9FUlJPUlMsXG4gIENMRUFSX0VSUk9SUyxcbiAgU0VUX1VTRVIsXG4gIFVOQVVUSEVOVElDQVRFRCxcbiAgVE9HR0xFX1NJREVCQVIsXG4gIElTX0JVU1ksXG59ID0gVXNlclNjbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyU2NsaWNlLnJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxDb25maWcgPSB7XG4gIG1vZGU6IFwibGlnaHRcIixcbiAgaW5mb01lc3NhZ2U6IFwiXCIsXG4gIHNuYWNrT3BlbjogZmFsc2UsXG4gIGluZm9TZXZlcml0eTogXCJpbmZvXCIsXG4gIG1lbnVvOiBbXSxcbn07XG5cbmNvbnN0IGNvbmZpZ1NjbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJjb25maWdcIixcbiAgaW5pdGlhbFN0YXRlOiBpbml0aWFsQ29uZmlnLFxuICByZWR1Y2Vyczoge1xuICAgIFNFVF9NT0RFOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1vZGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9LFxuICAgIFNFVF9JTkZPX01FU1NBR0U6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5mb01lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2UsXG4gICAgICAgIHNuYWNrT3BlbjogdHJ1ZSxcbiAgICAgICAgaW5mb1NldmVyaXR5OiBhY3Rpb24ucGF5bG9hZC5zZXZlcml0eSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBDTEVBUl9JTkZPX01FU1NBR0U6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5mb01lc3NhZ2U6IFwiXCIsXG4gICAgICAgIHNuYWNrT3BlbjogZmFsc2UsXG4gICAgICAgIGluZm9TZXZlcml0eTogXCJpbmZvXCIsXG4gICAgICB9O1xuICAgIH0sXG4gICAgUkVNT1ZFX01FTlU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVudW86IFsuLi5zdGF0ZS5tZW51by5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGFjdGlvbi5wYXlsb2FkKV0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgQUREX01FTlU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwcmVzZW50ID0gc3RhdGUubWVudW8uc29tZSgobWVudSkgPT4gbWVudS50byA9PSBhY3Rpb24ucGF5bG9hZC50byk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVudW86IHByZXNlbnQgPyBzdGF0ZS5tZW51byA6IFsuLi5zdGF0ZS5tZW51bywgYWN0aW9uLnBheWxvYWRdLFxuICAgICAgfTtcbiAgICB9LFxuICAgIENMRUFSX01FTlU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVudW86IFtdLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIFNFVF9NT0RFLFxuICBTRVRfSU5GT19NRVNTQUdFLFxuICBDTEVBUl9JTkZPX01FU1NBR0UsXG4gIFJFTU9WRV9NRU5VLFxuICBBRERfTUVOVSxcbiAgQ0xFQVJfTUVOVSxcbn0gPSBjb25maWdTY2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnU2NsaWNlLnJlZHVjZXI7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gXCIuLi8uLi8uLi91dGlscy9Db25zdGFudHNcIjtcblxuY29uc3QgcHVibGljQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBDT05TVEFOVFMuQkFTRV9BUElfVVJMLFxuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcHVibGljQXhpb3M7XG4iLCJpbXBvcnQgcHVibGljQXhpb3MgZnJvbSBcIi4vcHVibGljQXhpb3NcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBVTkFVVEhFTlRJQ0FURUQgfSBmcm9tIFwiLi4vcmVkdWNlcnMvVXNlclJlZHVjZXJcIjtcblxuY29uc3QgdXNlQXBpQXhpb3MgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0SW50ZXJjZXB0ID0gcHVibGljQXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAgICAgKGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoIWNvbmZpZy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSkge1xuICAgICAgICAgIGNvbmZpZy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt1c2VyPy5hY2Nlc3NfdG9rZW59YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgKTtcbiAgICBjb25zdCByZXNwb25zZUludGVyY2VwdCA9IHB1YmxpY0F4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgICAocmVzcG9uc2UpID0+IHJlc3BvbnNlLFxuICAgICAgYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcj8ucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2goVU5BVVRIRU5USUNBVEVEKCkpO1xuICAgICAgICAgIG5hdmlnYXRlKFwiL2xvZ2luXCIsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHB1YmxpY0F4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LmVqZWN0KHJlcXVlc3RJbnRlcmNlcHQpO1xuICAgICAgcHVibGljQXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmVqZWN0KHJlc3BvbnNlSW50ZXJjZXB0KTtcbiAgICB9O1xuICB9LCBbdXNlci5hdXRoZW50aWNhdGVkLCB1c2VyLmFjY2Vzc190b2tlbl0pO1xuXG4gIHJldHVybiBwdWJsaWNBeGlvcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFwaUF4aW9zO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gXCIuLi8uLi8uLi91dGlscy9Db25zdGFudHNcIjtcbmltcG9ydCB7IFVOQVVUSEVOVElDQVRFRCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9Vc2VyUmVkdWNlclwiO1xuXG5jb25zdCBiYXNlUXVlcnkgPSBmZXRjaEJhc2VRdWVyeSh7XG4gIGJhc2VVcmw6IENPTlNUQU5UUy5CQVNFX0FQSV9VUkwsXG4gIHByZXBhcmVIZWFkZXJzOiAoaGVhZGVycywgeyBnZXRTdGF0ZSwgZW5kcG9pbnQgfSkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gZ2V0U3RhdGUoKT8uYXV0aD8uYWNjZXNzX3Rva2VuO1xuICAgIGlmIChlbmRwb2ludC5zdGFydHNXaXRoKFwidXBsb2FkXCIpKSB7XG4gICAgICBoZWFkZXJzLnNldChcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICB9XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke3Rva2VufWApO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfSxcbn0pO1xuXG5jb25zdCBiYXNlUXVlcnlXaXRoUmVhdXRoID0gYXN5bmMgKGFyZ3MsIGFwaSwgZXh0cmFPcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQgPSBhd2FpdCBiYXNlUXVlcnkoYXJncywgYXBpLCBleHRyYU9wdGlvbnMpO1xuICBpZiAocmVzdWx0LmVycm9yICYmIHJlc3VsdC5lcnJvci5zdGF0dXMgPT09IDQwMSkge1xuICAgIC8vIGxvZyBvdXQgdGhlIHVzZXJcbiAgICBhcGkuZGlzcGF0Y2goVU5BVVRIRU5USUNBVEVEKCkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3Qgb3BlbkFwaSA9IGNyZWF0ZUFwaSh7XG4gIHJlZHVjZXJQYXRoOiBcIm9wZW5BcGlcIixcbiAgYmFzZVF1ZXJ5OiBiYXNlUXVlcnlXaXRoUmVhdXRoLFxuICB0YWdUeXBlczogW1xuICAgIFwiQ29tcHRlXCIsXG4gICAgXCJTdHJ1Y3R1cmVcIixcbiAgICBcIlVzZXJcIixcbiAgICBcIkRlbWFuZGVcIixcbiAgICBcIlBpZWNlXCIsXG4gICAgXCJEZW1hbmRlX1BpZWNlXCJcbiAgXSxcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICBnZXRTZXNzaW9uOiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiAoc3RhdHV0KSA9PiBgL3Nlc3Npb25zP3N0YXR1dD0ke3N0YXR1dH1gLFxuICAgIH0pLFxuICAgIGdldExpc3RQaWVjZXM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChzdGF0dXQpID0+IGAvcGllY2VzP2lzb25nPSR7c3RhdHV0fWAsXG4gICAgICBwcm92aWRlc1RhZ3M6IChyZXN1bHQsIGVycm9yLCBhcmcpID0+XG4gICAgICAgIHJlc3VsdFxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAuLi5yZXN1bHQubWFwKCh7IGlkIH0pID0+ICh7IHR5cGU6IFwiUGllY2VcIiwgaWQgfSkpLFxuICAgICAgICAgICAgICB7IHR5cGU6IFwiUGllY2VcIiwgaWQ6IFwiTElTVFwiIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBbeyB0eXBlOiBcIlBpZWNlXCIsIGlkOiBcIkxJU1RcIiB9XSxcbiAgICB9KSxcbiAgICBnZXRTdHJ1Y3R1cmVEZXRhaWxzOiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiAoaWQpID0+IGAvc3RydWN0dXJlcy8ke2lkfWAsXG4gICAgICBwcm92aWRlc1RhZ3M6IChyZXN1bHQsIGVycm9yLCBpZCkgPT4gW3sgdHlwZTogXCJTdHJ1Y3R1cmVcIiwgaWQgfV0sXG4gICAgfSksXG4gICAgZ2V0RGVtYW5kZURldGFpbHM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChpZCkgPT4gYC9kZW1hbmRlcy8ke2lkfWAsXG4gICAgICBwcm92aWRlc1RhZ3M6IChyZXN1bHQsIGVycm9yLCBpZCkgPT4gW3sgdHlwZTogXCJEZW1hbmRlXCIsIGlkIH1dLFxuICAgIH0pLFxuICAgIGdldERlbWFuZGVQaWVjZXM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChpZCkgPT4gYC9kZW1hbmRlcy8ke2lkfS9waWVjZXNgLFxuICAgICAgcHJvdmlkZXNUYWdzOiAocmVzdWx0LCBlcnJvciwgYXJnKSA9PlxuICAgICAgICByZXN1bHRcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgLi4ucmVzdWx0Lm1hcCgoeyBpZCB9KSA9PiAoeyB0eXBlOiBcIkRlbWFuZGVfUGllY2VcIiwgaWQgfSkpLFxuICAgICAgICAgICAgICB7IHR5cGU6IFwiRGVtYW5kZV9QaWVjZVwiLCBpZDogXCJMSVNUXCIgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IFt7IHR5cGU6IFwiRGVtYW5kZV9QaWVjZVwiLCBpZDogXCJMSVNUXCIgfV0sXG4gICAgfSksXG4gICAgZ2V0RGVtYW5kZUN1cnJlbnQ6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChkYXRhKSA9PiBgL3N0cnVjdHVyZXMvJHtkYXRhLmlkfS9zZXNzaW9ucy8ke2RhdGEuc2Vzc2lvbn0vZGVtYW5kZXNgLFxuICAgICAgcHJvdmlkZXNUYWdzOiAocmVzdWx0LCBlcnJvciwgYXJnKSA9PiBbeyB0eXBlOiBcIkRlbWFuZGVcIiwgaWQ6IHJlc3VsdD8uaWQgfV0sXG4gICAgfSksXG4gICAgZ2V0TXlDb21wdGVCYW5jYWlyZTogYnVpbGRlci5xdWVyeSh7XG4gICAgICBxdWVyeTogKGlkKSA9PiBgL3N0cnVjdHVyZXMvJHtpZH0vY29tcHRlc2AsXG4gICAgICBwcm92aWRlc1RhZ3M6IChyZXN1bHQsIGVycm9yLCBhcmcpID0+IFt7IHR5cGU6IFwiQ29tcHRlXCIsIGlkOiByZXN1bHQ/LmlkIH1dLFxuICAgIH0pLFxuICAgIGdldE15RGVtYW5kZXM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChpZCkgPT4gYC9zdHJ1Y3R1cmVzLyR7aWR9L2RlbWFuZGVzYCxcbiAgICAgIHByb3ZpZGVzVGFnczogKHJlc3VsdCwgZXJyb3IsIGFyZykgPT5cbiAgICAgICAgcmVzdWx0XG4gICAgICAgICAgPyBbXG4gICAgICAgICAgICAgIC4uLnJlc3VsdD8ubWFwKCh7IGlkIH0pID0+ICh7IHR5cGU6IFwiRGVtYW5kZVwiLCBpZCB9KSksXG4gICAgICAgICAgICAgIHsgdHlwZTogXCJEZW1hbmRlXCIsIGlkOiBcIkxJU1RcIiB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIDogW3sgdHlwZTogXCJEZW1hbmRlXCIsIGlkOiBcIkxJU1RcIiB9XSxcbiAgICB9KSxcbiAgICBjcmVhdGVEZW1hbmRlOiBidWlsZGVyLm11dGF0aW9uKHtcbiAgICAgIHF1ZXJ5OiAoYm9keSkgPT4gKHtcbiAgICAgICAgdXJsOiBgL2RlbWFuZGVzYCxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keSxcbiAgICAgIH0pLFxuICAgICAgaW52YWxpZGF0ZXNUYWdzOiAocmVzdWx0LCBlcnJvciwgYXJnKSA9PiBbXG4gICAgICAgIHsgdHlwZTogXCJEZW1hbmRlXCIsIGlkOiByZXN1bHQ/LmlkIH0sXG4gICAgICAgIHsgdHlwZTogXCJEZW1hbmRlXCIsIGlkOiBcIkxJU1RcIiB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgICBlZGl0RGVtYW5kZTogYnVpbGRlci5tdXRhdGlvbih7XG4gICAgICBxdWVyeTogKGJvZHkpID0+ICh7XG4gICAgICAgIHVybDogYC9kZW1hbmRlcy8ke2JvZHkuaWR9YCxcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgIGJvZHlcbiAgICAgIH0pLFxuICAgICAgaW52YWxpZGF0ZXNUYWdzOiAocmVzdWx0LCBlcnJvciwgYXJnKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IEpTT04ucGFyc2UocmVzdWx0KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBcIkRlbWFuZGVcIiwgaWQ6IGFyZy5pZCB9LFxuICAgICAgICB7IHR5cGU6IFwiU3RydWN0dXJlXCIsIGlkOiByZXM/LnN0cnVjdHVyZSB9LFxuICAgICAgXTtcbiAgICB9LFxuICAgIH0pLFxuICAgIGVkaXRTdHJ1Y3R1cmU6IGJ1aWxkZXIubXV0YXRpb24oe1xuICAgICAgcXVlcnk6IChib2R5KSA9PiAoe1xuICAgICAgICB1cmw6IGAvc3RydWN0dXJlcy8ke2JvZHkuaWR9YCxcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgIGJvZHlcbiAgICAgIH0pLFxuICAgICAgaW52YWxpZGF0ZXNUYWdzOiAocmVzdWx0LCBlcnJvciwgYXJnKSA9PiBbXG4gICAgICAgIHsgdHlwZTogXCJTdHJ1Y3R1cmVcIiwgaWQ6IGFyZy5pZCB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgICBlZGl0T3JDcmVhdGVDb21wdGVCYW5jYWlyZTogYnVpbGRlci5tdXRhdGlvbih7XG4gICAgICBxdWVyeTogKGJvZHkpID0+ICh7XG4gICAgICAgIHVybDogYC9zdHJ1Y3R1cmVzLyR7Ym9keS5zdHJ1Y3R1cmV9L2NvbXB0ZXNgLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5XG4gICAgICB9KSxcbiAgICAgIGludmFsaWRhdGVzVGFnczogKHJlc3VsdCwgZXJyb3IsIGFyZykgPT4gW1xuICAgICAgICB7IHR5cGU6IFwiQ29tcHRlXCIsIGlkOiBhcmcuc3RydWN0dXJlIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICAgIHVwbG9hZFJpYkZpbGU6IGJ1aWxkZXIubXV0YXRpb24oe1xuICAgICAgcXVlcnk6IChhcmcpID0+ICh7XG4gICAgICAgIHVybDogYC9zdHJ1Y3R1cmVzLyR7YXJnLmlkfS9kb2N1bWVudHNgLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBhcmcuZGF0YSxcbiAgICAgICAgZm9ybURhdGE6IHRydWUsXG4gICAgICB9KSxcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2UsIG1ldGEsIGFyZykgPT4gSlNPTi5wYXJzZShyZXNwb25zZSksXG4gICAgfSksXG4gICAgdXBsb2FkRGVtYW5kZUZpbGU6IGJ1aWxkZXIubXV0YXRpb24oe1xuICAgICAgcXVlcnk6IChhcmcpID0+ICh7XG4gICAgICAgIHVybDogYC9kZW1hbmRlcy8ke2FyZy5pZH0vcGllY2VzLyR7YXJnLnBpZWNlfWAsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGFyZy5kYXRhLFxuICAgICAgICBmb3JtRGF0YTogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICAgaW52YWxpZGF0ZXNUYWdzOiAocmVzdWx0LCBlcnJvciwgYXJnKSA9PiBbXG4gICAgICAgIFwiRGVtYW5kZV9QaWVjZVwiLFxuICAgICAgICB7IHR5cGU6IFwiRGVtYW5kZVwiLCBpZDogYXJnLmlkIH0sXG4gICAgICBdLFxuICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXNwb25zZSwgbWV0YSwgYXJnKSA9PiBKU09OLnBhcnNlKHJlc3BvbnNlKSxcbiAgICB9KSxcbiAgICBkZWxldGVEZW1hbmRlUGllY2U6IGJ1aWxkZXIubXV0YXRpb24oe1xuICAgICAgcXVlcnkoYXJnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXJsOiBgL2RlbWFuZGVzLyR7YXJnLmlkfS9waWVjZXMvJHthcmcucGllY2V9YCxcbiAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgLy8gSW52YWxpZGF0ZXMgYWxsIHF1ZXJpZXMgdGhhdCBzdWJzY3JpYmUgdG8gdGhpcyBUaWNrZXRQcm9kdWN0cyBgaWRgIG9ubHkuXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IChyZXN1bHQsIGVycm9yLCBhcmcpID0+IFt7IHR5cGU6IFwiRGVtYW5kZV9QaWVjZVwiLCBpZDphcmcuZHAgfV0sXG4gICAgfSksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHVzZUdldFNlc3Npb25RdWVyeSxcbiAgdXNlR2V0TGlzdFBpZWNlc1F1ZXJ5LFxuICB1c2VHZXRNeUNvbXB0ZUJhbmNhaXJlUXVlcnksXG4gIHVzZUdldERlbWFuZGVQaWVjZXNRdWVyeSxcbiAgdXNlR2V0RGVtYW5kZUN1cnJlbnRRdWVyeSxcbiAgdXNlR2V0U3RydWN0dXJlRGV0YWlsc1F1ZXJ5LFxuICB1c2VHZXREZW1hbmRlRGV0YWlsc1F1ZXJ5LFxuICB1c2VHZXRNeURlbWFuZGVzUXVlcnksXG4gIHVzZUNyZWF0ZURlbWFuZGVNdXRhdGlvbixcbiAgdXNlVXBsb2FkRGVtYW5kZUZpbGVNdXRhdGlvbixcbiAgdXNlVXBsb2FkUmliRmlsZU11dGF0aW9uLFxuICB1c2VEZWxldGVEZW1hbmRlUGllY2VNdXRhdGlvbixcbiAgdXNlRWRpdERlbWFuZGVNdXRhdGlvbixcbiAgdXNlRWRpdFN0cnVjdHVyZU11dGF0aW9uLFxuICB1c2VFZGl0T3JDcmVhdGVDb21wdGVCYW5jYWlyZU11dGF0aW9uLFxufSA9IG9wZW5BcGk7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7XG4gIHBlcnNpc3RSZWR1Y2VyLFxuICBGTFVTSCxcbiAgUkVIWURSQVRFLFxuICBQQVVTRSxcbiAgUEVSU0lTVCxcbiAgUFVSR0UsXG4gIFJFR0lTVEVSLFxuICBwZXJzaXN0U3RvcmUsXG59IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XG5pbXBvcnQgVXNlclJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvVXNlclJlZHVjZXJcIjtcbmltcG9ydCBjb25maWdSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzL2NvbmZpZ1JlZHVjZXJcIjtcbmltcG9ydCB7IG9wZW5BcGkgfSBmcm9tIFwiLi9zZXJ2aWNlcy9vcGVuQXBpXCI7XG5pbXBvcnQgc2Vzc2lvblN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvZXMvc3RvcmFnZS9zZXNzaW9uXCI7XG5cbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG4gIGtleTogXCJyb290XCIsXG4gIHZlcnNpb246IDEsXG4gIHN0b3JhZ2U6IHNlc3Npb25TdG9yYWdlLFxuICBibGFja2xpc3Q6IFtvcGVuQXBpLnJlZHVjZXJQYXRoXSxcbn07XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aDogVXNlclJlZHVjZXIsXG4gIGNvbmZpZzogY29uZmlnUmVkdWNlcixcbiAgW29wZW5BcGkucmVkdWNlclBhdGhdOiBvcGVuQXBpLnJlZHVjZXIsXG59KTtcblxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKTtcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XG4gICAgICBzZXJpYWxpemFibGVDaGVjazoge1xuICAgICAgICBpZ25vcmVkQWN0aW9uczogW0ZMVVNILCBSRUhZRFJBVEUsIFBBVVNFLCBQRVJTSVNULCBQVVJHRSwgUkVHSVNURVJdLFxuICAgICAgfSxcbiAgICB9KS5jb25jYXQob3BlbkFwaS5taWRkbGV3YXJlKSxcbn0pO1xuXG5jb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xuXG5leHBvcnQgeyBzdG9yZSwgcGVyc2lzdG9yIH07XG5cbi8qIFxuY29uc3Qgcm9vdFBlcnNpc3RDb25maWcgPSB7XG4gIGtleTogJ3Jvb3QnLFxuICBzdG9yYWdlLFxufVxuXG5jb25zdCB1c2VyUGVyc2lzdENvbmZpZyA9IHtcbiAga2V5OiAndXNlcicsXG4gIHN0b3JhZ2UsXG4gIGJsYWNrbGlzdDogWydpc0xvZ2dlZEluJ11cbn1cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB1c2VyOiBwZXJzaXN0UmVkdWNlcih1c2VyUGVyc2lzdENvbmZpZywgdXNlclJlZHVjZXIpLFxuICBub3Rlczogbm90ZXNSZWR1Y2VyXG59KVxuXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocm9vdFBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKTsgKi9cbiIsImNvbnN0IENPTlNUQU5UUyA9IHtcbiAgQkFTRV9BUElfVVJMOiBcImh0dHA6Ly9sb2NhbC5zZXJ2aWNlcy5taW5lc2VjLmdvdi5jbS9hcGkvdjFcIixcbiAgQkFTRV9VUkw6IFwiaHR0cDovL2xvY2FsLnNlcnZpY2VzLm1pbmVzZWMuZ292LmNtXCIsXG4gIFJFQUNUX0FQUF9TSVRFX0tFWTogXCI2TGRKV29vcEFBQUFBQ1RqMC1DX0J0a1ZJZFdMYzluTGVuRVhKSUk3XCIsXG4gIFJFQUNUX0FQUF9TRUNSRVRfS0VZOiBcIjZMZEpXb29wQUFBQUFJel9RdGtzT2FEc3FMWmZmM0JSYVVMZUZwZVhcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ09OU1RBTlRTOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlRXJyb3IsIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JQYWdlKCkge1xuICBjb25zdCBlcnJvciA9IHVzZVJvdXRlRXJyb3IoKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImVycm9yLXBhZ2VcIiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGgxPk9vcHMhPC9oMT5cbiAgICAgICAgICA8cD5Tb3JyeSwgYW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQuPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGk+e2Vycm9yLnN0YXR1c1RleHQgfHwgZXJyb3IubWVzc2FnZX08L2k+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgtMSl9PlxuICAgICAgICAgICAgICBHbyBiYWNrXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgZGFya2VuLCBsaWdodGVuIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBpbnRlcnZhbFRvRHVyYXRpb24gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGNvbnN0IGdldEJhY2tncm91bmRDb2xvciA9IChjb2xvciwgbW9kZSkgPT5cbiAgbW9kZSA9PT0gXCJkYXJrXCIgPyBkYXJrZW4oY29sb3IsIDAuNykgOiBsaWdodGVuKGNvbG9yLCAwLjcpO1xuXG5leHBvcnQgY29uc3QgZ2V0SG92ZXJCYWNrZ3JvdW5kQ29sb3IgPSAoY29sb3IsIG1vZGUpID0+XG4gIG1vZGUgPT09IFwiZGFya1wiID8gZGFya2VuKGNvbG9yLCAwLjYpIDogbGlnaHRlbihjb2xvciwgMC42KTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkQmFja2dyb3VuZENvbG9yID0gKGNvbG9yLCBtb2RlKSA9PlxuICBtb2RlID09PSBcImRhcmtcIiA/IGRhcmtlbihjb2xvciwgMC41KSA6IGxpZ2h0ZW4oY29sb3IsIDAuNSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZEhvdmVyQmFja2dyb3VuZENvbG9yID0gKGNvbG9yLCBtb2RlKSA9PlxuICBtb2RlID09PSBcImRhcmtcIiA/IGRhcmtlbihjb2xvciwgMC40KSA6IGxpZ2h0ZW4oY29sb3IsIDAuNCk7XG5cbmV4cG9ydCBjb25zdCBkYXlzQmVmb3JlID0gKGRheXMpID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRheXMpO1xuICByZXR1cm4gZGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBZ2UgPSAoZG9iKSA9PiB7XG4gIGxldCBkdXJhdGlvbiA9IGludGVydmFsVG9EdXJhdGlvbih7XG4gICAgc3RhcnQ6IGRvYixcbiAgICBlbmQ6IG5ldyBEYXRlKCksXG4gIH0pO1xuXG4gIHJldHVybiBgJHtkdXJhdGlvbi55ZWFyc30gYW4ocyksICR7ZHVyYXRpb24ubW9udGhzfSBtb2lzLCAke2R1cmF0aW9uLmRheXN9IGpvdXIocylgO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzRGF0ZVZhbGlkID0gKGRhdGVTdHIpID0+ICFpc05hTihuZXcgRGF0ZShkYXRlU3RyKSk7XG5cbmV4cG9ydCBjb25zdCBnZXRFeHRlbnNpb24gPSAoZmlsZW5hbWUpID0+IGZpbGVuYW1lLnNwbGl0KCcuJykucG9wKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBOYXZpZ2F0ZSwgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBJc0F1dGhlbnRpY2F0ZWQgPSAoeyBhdXRoZW50aWNhdGVkLCBhdXRoLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICByZXR1cm4gYXV0aGVudGljYXRlZCA9PT0gYXV0aCA/IChcbiAgICBjaGlsZHJlblxuICApIDogYXV0aCA9PT0gdHJ1ZSA/IChcbiAgICA8TmF2aWdhdGUgdG89XCIvbG9naW5cIiBzdGF0ZT17eyBmcm9tOiBsb2NhdGlvbi5wYXRobmFtZSB9fSByZXBsYWNlIC8+XG4gICkgOiAoXG4gICAgPE5hdmlnYXRlIHRvPVwiL1wiIC8+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGF1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGguYXV0aGVudGljYXRlZCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSXNBdXRoZW50aWNhdGVkKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IE5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgSXNBdXRob3JpemVkID0gKHsgcm9sZXMsIGF1dGhSb2xlLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiBhdXRoUm9sZSAmJiByb2xlcy5zb21lKChyb2xlKSA9PiBhdXRoUm9sZS5pbmNsdWRlcyhyb2xlKSkgPyAoXG4gICAgY2hpbGRyZW5cbiAgKSA6IChcbiAgICA8TmF2aWdhdGUgdG89XCIvXCIgLz5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgcm9sZXM6IHN0YXRlLmF1dGgucm9sZXMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKElzQXV0aG9yaXplZCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInByaW1hcnlcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiIsImltcG9ydCBpMThuIGZyb20gXCJpMThuZXh0XCI7XG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5pbXBvcnQgQmFja2VuZCBmcm9tIFwiaTE4bmV4dC1odHRwLWJhY2tlbmRcIjtcbmltcG9ydCBMYW5ndWFnZURldGVjdG9yIGZyb20gXCJpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3RvclwiO1xuXG5pMThuXG4gIC51c2UoQmFja2VuZClcbiAgLnVzZShpbml0UmVhY3RJMThuZXh0KVxuICAudXNlKExhbmd1YWdlRGV0ZWN0b3IpIC8vIHBhc3NlcyBpMThuIGRvd24gdG8gcmVhY3QtaTE4bmV4dFxuICAuaW5pdCh7XG4gICAgYmFja2VuZDoge1xuICAgICAgbG9hZFBhdGg6IFwiL2xvY2FsZXMve3tsbmd9fS97e25zfX0uanNvblwiLFxuICAgIH0sXG4gICAgbnM6IFtcbiAgICAgIFwiY29tbW9uXCIsXG4gICAgICBcImxvZ2luXCIsXG4gICAgXSxcbiAgICBmYWxsYmFja0xuZzogXCJmclwiLFxuICAgIGludGVycG9sYXRpb246IHtcbiAgICAgIGZvcm1hdDogKHZhbHVlLCBmb3JtYXQsIGxuZykgPT4ge1xuICAgICAgICAvLyBsZWdhY3kgdXNhZ2VcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIHJldHVybiBEYXRlVGltZS5mcm9tSlNEYXRlKHZhbHVlKVxuICAgICAgICAgICAgLnNldExvY2FsZShsbmcpXG4gICAgICAgICAgICAudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWVbZm9ybWF0XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiIsIi8vIGNvbG9yIGRlc2lnbiB0b2tlbnMgZXhwb3J0XG5leHBvcnQgY29uc3QgdG9rZW5zID0gKG1vZGUpID0+ICh7XG4gIC4uLihtb2RlID09PSBcImRhcmtcIlxuICAgID8ge1xuICAgICAgICBncmV5OiB7XG4gICAgICAgICAgMTAwOiBcIiNlMGUwZTBcIixcbiAgICAgICAgICAyMDA6IFwiI2MyYzJjMlwiLFxuICAgICAgICAgIDMwMDogXCIjYTNhM2EzXCIsXG4gICAgICAgICAgNDAwOiBcIiM4NTg1ODVcIixcbiAgICAgICAgICA1MDA6IFwiIzY2NjY2NlwiLFxuICAgICAgICAgIDYwMDogXCIjNTI1MjUyXCIsXG4gICAgICAgICAgNzAwOiBcIiMzZDNkM2RcIixcbiAgICAgICAgICA4MDA6IFwiIzI5MjkyOVwiLFxuICAgICAgICAgIDkwMDogXCIjMTQxNDE0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAxMDA6IFwiI2QwZDFkNVwiLFxuICAgICAgICAgIDIwMDogXCIjYTFhNGFiXCIsXG4gICAgICAgICAgMzAwOiBcIiM3Mjc2ODFcIixcbiAgICAgICAgICA0MDA6IFwiIzFGMkE0MFwiLFxuICAgICAgICAgIDUwMDogXCIjMTQxYjJkXCIsXG4gICAgICAgICAgNjAwOiBcIiMxMDE2MjRcIixcbiAgICAgICAgICA3MDA6IFwiIzBjMTAxYlwiLFxuICAgICAgICAgIDgwMDogXCIjMDgwYjEyXCIsXG4gICAgICAgICAgOTAwOiBcIiMwNDA1MDlcIixcbiAgICAgICAgfSxcbiAgICAgICAgZ3JlZW5BY2NlbnQ6IHtcbiAgICAgICAgICAxMDA6IFwiI2RiZjVlZVwiLFxuICAgICAgICAgIDIwMDogXCIjYjdlYmRlXCIsXG4gICAgICAgICAgMzAwOiBcIiM5NGUyY2RcIixcbiAgICAgICAgICA0MDA6IFwiIzhlYzU0MVwiLFxuICAgICAgICAgIDUwMDogXCIjNGNjZWFjXCIsXG4gICAgICAgICAgNjAwOiBcIiMzZGE1OGFcIixcbiAgICAgICAgICA3MDA6IFwiIzJlN2M2N1wiLFxuICAgICAgICAgIDgwMDogXCIjMWU1MjQ1XCIsXG4gICAgICAgICAgOTAwOiBcIiMwZjI5MjJcIixcbiAgICAgICAgfSxcbiAgICAgICAgcmVkQWNjZW50OiB7XG4gICAgICAgICAgMTAwOiBcIiNmOGRjZGJcIixcbiAgICAgICAgICAyMDA6IFwiI2YxYjliN1wiLFxuICAgICAgICAgIDMwMDogXCIjZTk5NTkyXCIsXG4gICAgICAgICAgNDAwOiBcIiNlMjcyNmVcIixcbiAgICAgICAgICA1MDA6IFwiI2RiNGY0YVwiLFxuICAgICAgICAgIDYwMDogXCIjYWYzZjNiXCIsXG4gICAgICAgICAgNzAwOiBcIiM4MzJmMmNcIixcbiAgICAgICAgICA4MDA6IFwiIzU4MjAxZVwiLFxuICAgICAgICAgIDkwMDogXCIjMmMxMDBmXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJsdWVBY2NlbnQ6IHtcbiAgICAgICAgICAxMDA6IFwiI2UxZTJmZVwiLFxuICAgICAgICAgIDIwMDogXCIjYzNjNmZkXCIsXG4gICAgICAgICAgMzAwOiBcIiNhNGE5ZmNcIixcbiAgICAgICAgICA0MDA6IFwiIzg2OGRmYlwiLFxuICAgICAgICAgIDUwMDogXCIjNjg3MGZhXCIsXG4gICAgICAgICAgNjAwOiBcIiM1MzVhYzhcIixcbiAgICAgICAgICA3MDA6IFwiIzNlNDM5NlwiLFxuICAgICAgICAgIDgwMDogXCIjMmEyZDY0XCIsXG4gICAgICAgICAgOTAwOiBcIiMxNTE2MzJcIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgZ3JleToge1xuICAgICAgICAgIDEwMDogXCIjMTQxNDE0XCIsXG4gICAgICAgICAgMjAwOiBcIiMyOTI5MjlcIixcbiAgICAgICAgICAzMDA6IFwiIzNkM2QzZFwiLFxuICAgICAgICAgIDQwMDogXCIjNTI1MjUyXCIsXG4gICAgICAgICAgNTAwOiBcIiM2NjY2NjZcIixcbiAgICAgICAgICA2MDA6IFwiIzg1ODU4NVwiLFxuICAgICAgICAgIDcwMDogXCIjYTNhM2EzXCIsXG4gICAgICAgICAgODAwOiBcIiNjMmMyYzJcIixcbiAgICAgICAgICA5MDA6IFwiI2UwZTBlMFwiLFxuICAgICAgICB9LFxuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgMTAwOiBcIiMwNDA1MDlcIixcbiAgICAgICAgICAyMDA6IFwiIzA4MGIxMlwiLFxuICAgICAgICAgIDMwMDogXCIjMGMxMDFiXCIsXG4gICAgICAgICAgNDAwOiBcIiNmMmYwZjBcIiwgLy8gbWFudWFsbHkgY2hhbmdlZFxuICAgICAgICAgIDUwMDogXCIjMTQxYjJkXCIsXG4gICAgICAgICAgNjAwOiBcIiMxRjJBNDBcIixcbiAgICAgICAgICA3MDA6IFwiIzcyNzY4MVwiLFxuICAgICAgICAgIDgwMDogXCIjYTFhNGFiXCIsXG4gICAgICAgICAgOTAwOiBcIiNkMGQxZDVcIixcbiAgICAgICAgfSxcbiAgICAgICAgZ3JlZW5BY2NlbnQ6IHtcbiAgICAgICAgICAxMDA6IFwiIzBmMjkyMlwiLFxuICAgICAgICAgIDIwMDogXCIjMWU1MjQ1XCIsXG4gICAgICAgICAgMzAwOiBcIiMyZTdjNjdcIixcbiAgICAgICAgICA0MDA6IFwiIzNkYTU4YVwiLFxuICAgICAgICAgIDUwMDogXCIjNGNjZWFjXCIsXG4gICAgICAgICAgNjAwOiBcIiM4ZWM1NDFcIixcbiAgICAgICAgICA3MDA6IFwiIzk0ZTJjZFwiLFxuICAgICAgICAgIDgwMDogXCIjYjdlYmRlXCIsXG4gICAgICAgICAgOTAwOiBcIiNkYmY1ZWVcIixcbiAgICAgICAgfSxcbiAgICAgICAgcmVkQWNjZW50OiB7XG4gICAgICAgICAgMTAwOiBcIiMyYzEwMGZcIixcbiAgICAgICAgICAyMDA6IFwiIzU4MjAxZVwiLFxuICAgICAgICAgIDMwMDogXCIjODMyZjJjXCIsXG4gICAgICAgICAgNDAwOiBcIiNhZjNmM2JcIixcbiAgICAgICAgICA1MDA6IFwiI2RiNGY0YVwiLFxuICAgICAgICAgIDYwMDogXCIjZTI3MjZlXCIsXG4gICAgICAgICAgNzAwOiBcIiNlOTk1OTJcIixcbiAgICAgICAgICA4MDA6IFwiI2YxYjliN1wiLFxuICAgICAgICAgIDkwMDogXCIjZjhkY2RiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJsdWVBY2NlbnQ6IHtcbiAgICAgICAgICAxMDA6IFwiIzE1MTYzMlwiLFxuICAgICAgICAgIDIwMDogXCIjMmEyZDY0XCIsXG4gICAgICAgICAgMzAwOiBcIiMzZTQzOTZcIixcbiAgICAgICAgICA0MDA6IFwiIzUzNWFjOFwiLFxuICAgICAgICAgIDUwMDogXCIjNjg3MGZhXCIsXG4gICAgICAgICAgNjAwOiBcIiM4NjhkZmJcIixcbiAgICAgICAgICA3MDA6IFwiI2E0YTlmY1wiLFxuICAgICAgICAgIDgwMDogXCIjYzNjNmZkXCIsXG4gICAgICAgICAgOTAwOiBcIiNlMWUyZmVcIixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxufSk7XG5cbi8vIG11aSB0aGVtZSBzZXR0aW5nc1xuZXhwb3J0IGNvbnN0IHRoZW1lU2V0dGluZ3MgPSAobW9kZSkgPT4ge1xuICBjb25zdCBjb2xvcnMgPSB0b2tlbnMobW9kZSk7XG4gIHJldHVybiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgbW9kZTogbW9kZSxcbiAgICAgIC4uLihtb2RlID09PSBcImRhcmtcIlxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgICAgbWFpbjogY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgICAgbWFpbjogY29sb3JzLmdyZWVuQWNjZW50WzUwMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV1dHJhbDoge1xuICAgICAgICAgICAgICBkYXJrOiBjb2xvcnMuZ3JleVs3MDBdLFxuICAgICAgICAgICAgICBtYWluOiBjb2xvcnMuZ3JleVs1MDBdLFxuICAgICAgICAgICAgICBsaWdodDogY29sb3JzLmdyZXlbMTAwXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2lkZWJhcjoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzBiMjk0OFwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjOGJhMWI3IFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudGV0ZToge1xuICAgICAgICAgICAgICB0aXRsZTogY29sb3JzLnJlZEFjY2VudFs0MDBdLFxuICAgICAgICAgICAgICBzdWJ0aXRsZTE6IGNvbG9ycy5ibHVlQWNjZW50WzMwMF0sXG4gICAgICAgICAgICAgIHN1YnRpdGxlMjogY29sb3JzLmdyZWVuQWNjZW50WzYwMF0sXG4gICAgICAgICAgICAgIGFkZHJlc3M6IGNvbG9ycy5ncmV5WzkwMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgICBtYWluOiBcIiNkYzI0NDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3ZWxjb21lOiB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIzU5ZDBmZlwiLFxuICAgICAgICAgICAgICBncmFkaWVudDoge1xuICAgICAgICAgICAgICAgIGZpcnN0OiBjb2xvcnMuYmx1ZUFjY2VudFs1MDBdLFxuICAgICAgICAgICAgICAgIHNlY29uZDogY29sb3JzLmJsdWVBY2NlbnRbMjAwXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZW51OiB7XG4gICAgICAgICAgICAgIG1lbnVDb250ZW50OiBcIiMwODI0NDBcIixcbiAgICAgICAgICAgICAgaWNvbjogXCIjNTlkMGZmXCIsXG4gICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDQ1OGJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjYjZjOGQ5XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzNlNWU3ZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgLy8gcGFsZXR0ZSB2YWx1ZXMgZm9yIGxpZ2h0IG1vZGVcbiAgICAgICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgICAgbWFpbjogY29sb3JzLnByaW1hcnlbMTAwXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgICAgbWFpbjogY29sb3JzLmdyZWVuQWNjZW50WzUwMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV1dHJhbDoge1xuICAgICAgICAgICAgICBkYXJrOiBjb2xvcnMuZ3JleVs3MDBdLFxuICAgICAgICAgICAgICBtYWluOiBjb2xvcnMuZ3JleVs1MDBdLFxuICAgICAgICAgICAgICBsaWdodDogY29sb3JzLmdyZXlbMTAwXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFwiI2ZjZmNmY1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpZGViYXI6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzYwNzQ4OVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdlbGNvbWU6IHtcbiAgICAgICAgICAgICAgY29udGVudDogXCIjMDA5OGU1XCIsXG4gICAgICAgICAgICAgIGdyYWRpZW50OiB7XG4gICAgICAgICAgICAgICAgZmlyc3Q6IGNvbG9ycy5ibHVlQWNjZW50WzUwMF0sXG4gICAgICAgICAgICAgICAgc2Vjb25kOiBjb2xvcnMuYmx1ZUFjY2VudFs2MDBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudGV0ZToge1xuICAgICAgICAgICAgICB0aXRsZTogY29sb3JzLnJlZEFjY2VudFs0MDBdLFxuICAgICAgICAgICAgICBzdWJ0aXRsZTE6IGNvbG9ycy5ibHVlQWNjZW50WzMwMF0sXG4gICAgICAgICAgICAgIHN1YnRpdGxlMjogY29sb3JzLmdyZWVuQWNjZW50WzYwMF0sXG4gICAgICAgICAgICAgIGFkZHJlc3M6IGNvbG9ycy5ncmV5WzIwMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgICBtYWluOiBcIiM1MzUzNTNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZW51OiB7XG4gICAgICAgICAgICAgIG1lbnVDb250ZW50OiBcIiNmYmZjZmRcIixcbiAgICAgICAgICAgICAgaWNvbjogXCIjMDA5OGU1XCIsXG4gICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNjNWU0ZmZcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjNDQ1OTZlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzlmYjZjZlwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICB9LFxuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgIGFsbFZhcmlhbnRzOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMSxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICB9LFxuICAgICAgaDE6IHtcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBmb250U2l6ZTogXCIzMnB4XCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgICAgfSxcbiAgICAgIGgyOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgICAgfSxcbiAgICAgIGgzOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgZm9udFNpemU6IFwiMjRweFwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjMycHhcIixcbiAgICAgIH0sXG4gICAgICBoNDoge1xuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgfSxcbiAgICAgIGg1OiB7XG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICB9LFxuICAgICAgaDY6IHtcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgTXVpUGFwZXI6IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICByb290OiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLm1lbnUubWVudUNvbnRlbnQsXG4gICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09IFwiZGFya1wiXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJzdHlsZWQiLCJSZWFjdCIsIlN0eWxlZEJhZGdlIiwiZGl2Iiwic2hhcGUiLCJ2YXJpYW50IiwiQmFkZ2UiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VMb2NhdGlvbiIsIkxpbmsiLCJ0b2tlbnMiLCJ1c2VUaGVtZSIsIkNoaXAiLCJjb25uZWN0IiwicmVtb3ZlTWVudUJyZWFkIiwiY2xlYXJNZW51QnJlYWQiLCJCcmVhZENydW1icyIsInByb3BzIiwibG9jYXRpb24iLCJ0aGVtZSIsImNvbG9ycyIsInBhbGV0dGUiLCJtb2RlIiwicGF0aG5hbWUiLCJoYW5kbGVEZWxldGUiLCJlIiwiaXRlbSIsInByZXZlbnREZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwicHJpbWFyeSIsInQiLCJtZW51cyIsIm1hcCIsIm1lbnUiLCJpbmRleCIsInRvIiwibGFiZWwiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbmZpZyIsIm1lbnVvIiwibWFwQWN0aW9uc1RvUHJvcHMiLCJUeXBvZ3JhcGh5IiwiQm94IiwiR3JpZCIsIlBhcGVyIiwiU3RhY2siLCJDYWxsSWNvbiIsIk1haWxJY29uIiwiU2F2ZUFsdEljb24iLCJDb3B5cmlnaHQiLCJpMThuIiwiQ29udGFjdCIsInNpZ25pbiIsInNpZ251cCIsImNvbnNvbGUiLCJsb2ciLCJsYW5ndWFnZSIsIm1iIiwibXgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJ3aWR0aCIsIm1hcmdpbkJsb2NrIiwicGFkZGluZyIsIm5zIiwiY29sb3IiLCJzdGFydHNXaXRoIiwibXQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJIZWFkZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwiZ3JleSIsIm0iLCJncmVlbkFjY2VudCIsInVzZVN0YXRlIiwiU2lkZWJhciIsIk1lbnUiLCJNZW51SXRlbSIsIlN1Yk1lbnUiLCJtZW51Q2xhc3NlcyIsIkljb25CdXR0b24iLCJGb3VuZGF0aW9uSWNvbiIsIlNvdXJjZUljb24iLCJNZW51T3V0bGluZWRJY29uIiwiQ3JlYXRlTmV3Rm9sZGVySWNvbiIsIkFjY291bnRCYWxhbmNlSWNvbiIsInVzZVRyYW5zbGF0aW9uIiwiYWRkTWVudUJyZWFkIiwiQ09OU1RBTlRTIiwiaGV4VG9SZ2JhIiwiaGV4IiwiYWxwaGEiLCJyIiwicGFyc2VJbnQiLCJzbGljZSIsImciLCJiIiwiSXRlbSIsImljb24iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwid2luZG93IiwiU2lkZUJhciIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJzZXRTZWxlY3QiLCJtZW51SXRlbVN0eWxlcyIsInJvb3QiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJkaXNhYmxlZCIsImFjdGl2ZSIsIlN1Yk1lbnVFeHBhbmRJY29uIiwic3ViTWVudUNvbnRlbnQiLCJsZXZlbCIsIm1lbnVDb250ZW50IiwiYnV0dG9uIiwiaG92ZXIiLCJvcGVuIiwidW5kZWZpbmVkIiwiaGVpZ2h0Iiwic2lkZWJhciIsIm1hcmdpbiIsIkJBU0VfVVJMIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwidXNlcm5hbWUiLCJCb29sZWFuIiwic2Vzc2lvbiIsImF1dGgiLCJjcmVkZW50aWFscyIsInN0cnVjdHVyZSIsIm5hbWUiLCJyb2xlcyIsInJvbGUiLCJhY2Nlc3NfdG9rZW4iLCJUb29sdGlwIiwiTGlnaHRNb2RlT3V0bGluZWRJY29uIiwiRGFya01vZGVPdXRsaW5lZEljb24iLCJOb3RpZmljYXRpb25zT3V0bGluZWRJY29uIiwiVHJhbnNsYXRlSWNvbiIsIkF2YXRhciIsIkxpc3RJdGVtSWNvbiIsIkRpdmlkZXIiLCJsb2dvdXRVc2VyIiwiU2V0dGluZ3MiLCJMb2dvdXQiLCJjaGFuZ2VNb2RlIiwiTWFycXVlZSIsImZvcm1hdCIsIlRvcGJhciIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwibWF4V2lkdGgiLCJ1c2VyIiwiYW5uZWUiLCJkYXRlT3BlbiIsImRhdGUiLCJkYXRlTyIsImRhdGVDIiwiZGF0ZUNsb3NlZCIsImNoYW5nZUxhbmd1YWdlIiwiZWxldmF0aW9uIiwic3giLCJvdmVyZmxvdyIsImZpbHRlciIsIm1sIiwibXIiLCJjb250ZW50IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJnY29sb3IiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkFsZXJ0IiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1BdmF0YXIiLCJMaXN0SXRlbVRleHQiLCJBbGVydFRpdGxlIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGUiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsIlRhYmxlQm9keSIsIkF0dGFjaEZpbGVJY29uIiwiRGVsZXRlSWNvbiIsIlVwbG9hZEZpbGVJY29uIiwidXNlR2V0TGlzdFBpZWNlc1F1ZXJ5IiwidXNlR2V0RGVtYW5kZVBpZWNlc1F1ZXJ5IiwidXNlVXBsb2FkRGVtYW5kZUZpbGVNdXRhdGlvbiIsInVzZURlbGV0ZURlbWFuZGVQaWVjZU11dGF0aW9uIiwic2V0SW5mb01zZyIsIkVycm9yIiwiU3dhbCIsIkxvYWRpbmciLCJEZW1hbmRlUGllY2VzIiwiZmlsZUlucHV0RmllbGQiLCJJZCIsInNldElkIiwiZGVsZXRlRGVtYW5kZVBpZWNlIiwiaXNEZWxldGluZyIsImlzTG9hZGluZyIsInF1YWxpdHkiLCJwb2xsaW5nSW50ZXJ2YWwiLCJyZWZldGNoT25Nb3VudE9yQXJnQ2hhbmdlIiwic2tpcCIsInBpZWNlcyIsImRhdGEiLCJsb2FkaW5nIiwiaXNGZXRjaGluZyIsImVycm9yIiwiZGVtYW5kZUlkIiwibXlwaWVjZXMiLCJsb2FkaW5ncCIsImVycm9ybSIsInVwbG9hZGZpbGUiLCJpc1VwZGF0aW5nIiwiY29tcHVsUGllY2UiLCJwaWUiLCJwaWVjZSIsImNvbXB1bHNvcnkiLCJjb21wdWxzb3J5UGllY2VzIiwic2V0VmFsaWRlIiwibGVuZ3RoIiwiZ2V0UGllY2VGaWxlIiwiZmlsZSIsImZpbmQiLCJpZCIsImZpbGVOYW1lIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJmaXJlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY29uZmlybUJ1dHRvbkNvbG9yIiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwicmVzIiwibWVzc2FnZSIsInNldmVyaXR5IiwicmVzcG9uc2UiLCJwaWNrRmlsZSIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZU5ld0ZpbGUiLCJ2YWxpZGVGaWxlTmFtZVBhdHRlcm4iLCJhbGxvd2VkVHlwZXMiLCJ0YXJnZXQiLCJmaWxlcyIsInNpemUiLCJpbmNsdWRlcyIsInR5cGUiLCJ0ZXN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInN1Y2Nlc3MiLCJ2aXNpYmlsaXR5IiwidmFsIiwiaSIsIm5hbWVlbiIsInNpZ25hdGFpcmVlbiIsInNpZ25hdGFpcmUiLCJjYXJkIiwibWFpbiIsIkJ1dHRvbiIsIlNsaWRlIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nQWN0aW9ucyIsIkRpYWxvZyIsInVzZUdldFN0cnVjdHVyZURldGFpbHNRdWVyeSIsIlJlYWN0VG9QcmludCIsImdlbmVyYXRlUERGIiwiUmVzb2x1dGlvbiIsIk1hcmdpbiIsIkVudGV0ZSIsIlRyYW5zaXRpb24iLCJmb3J3YXJkUmVmIiwicmVmIiwiRmllbGQiLCJtaW5XaWR0aCIsImJvcmRlckJvdHRvbSIsImJvcmRlckJvdHRvbUNvbG9yIiwicGFkZGluZ0JvdHRvbSIsInRleHRUcmFuc2Zvcm0iLCJsZXR0ZXJTcGFjaW5nIiwiSW1wcmltZUV0cyIsInByaW50UmVmIiwic3RydWN0IiwiZXJyb3JfcGllY2VzIiwiaXNPcmciLCJvcHRpb25zIiwiZmlsZW5hbWUiLCJtZXRob2QiLCJyZXNvbHV0aW9uIiwiSElHSCIsInBhZ2UiLCJNRURJVU0iLCJvcmllbnRhdGlvbiIsImNhbnZhcyIsIm1pbWVUeXBlIiwicXVhbGl0eVJhdGlvIiwib3ZlcnJpZGVzIiwicGRmIiwiY29tcHJlc3MiLCJ1c2VDT1JTIiwib3BlblBERiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoYW5kbGVPcGVuQ2xvc2UiLCJwbGFjZUl0ZW1zIiwiZ2FwIiwiZmxleCIsImNvZGUiLCJub21Gb25kYXRldXIiLCJvcmRyZSIsImZvcm1lIiwic3ViZGl2aXNpb24iLCJkaXZpc2lvbiIsInJlZ2lvbiIsImVtYWlsIiwiU3RydWN0dXJlRGV0YWlscyIsInR5cGVTdHJ1Y3R1cmUiLCJsYW5ndWUiLCJhZHJlc3NlIiwidXNlTmF2aWdhdGUiLCJyZXNldFVzZXIiLCJjbGVhckVycm9ycyIsIkZvcm1payIsIlRleHRGaWVsZCIsIkxvYWRpbmdCdXR0b24iLCJ5dXAiLCJMb2NrUGVyc29uVHdvVG9uZSIsIkxCdXR0b24iLCJSZXNldEZvcm0iLCJmcm9tIiwibmF2aWdhdGUiLCJjaGVja291dFNjaGVtYSIsIm9iamVjdCIsImNvZGVfaW1tYXRyaWN1bGF0aW9uIiwic3RyaW5nIiwicmVxdWlyZWQiLCJtaW4iLCJ2YWx1ZSIsImZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVycG9zZSIsInN0YXR1cyIsInBsYWluUGFzc3dvcmQiLCJtYXRjaGVzIiwiY29uZmlybV9wYXNzd29yZCIsIm9uZU9mIiwiaW5pdGlhbFZhbHVlcyIsImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaGFuZGxlQmx1ciIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsImlzVmFsaWRhdGluZyIsImhlbHAiLCJsb2dpblVzZXIiLCJMb2NrT3V0bGluZWRJY29uIiwiZ2V0Q2hhcmFjdGVyVmFsaWRhdGlvbkVycm9yIiwic3RyIiwiU2lnbmluRm9ybSIsInBhc3N3b3JkIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0RGVjb3JhdGlvbkNvbG9yIiwicmVzZXQiLCJyZWdpc3RlclVzZXIiLCJkZWJvdW5jZSIsIlBlcnNvbkFkZEljb24iLCJTaWdudXBGb3JtIiwiY29uZmlybV9lbWFpbCIsImxhenkiLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJQcm92aWRlciIsInBlcnNpc3RvciIsInN0b3JlIiwiUGVyc2lzdEdhdGUiLCJJc0F1dGhlbnRpY2F0ZWQiLCJJc0F1dGhvcml6ZWQiLCJIb21lIiwiRXJyb3JQYWdlIiwiUGFnZUxheW91dCIsIlNpZ25JbiIsIk5ld0RlbWFuZGUiLCJNeUNvbXB0ZUJhbmNhaXJlIiwiTXlEZW1hbmRlcyIsIk1haW4iLCJyb3V0ZXIiLCJwYXRoIiwiZXJyb3JFbGVtZW50IiwiaGFuZGxlIiwiY3J1bWIiLCJmbGV4R3JvdyIsImlzVGVjaCIsIm1hcmdpblRvcCIsInVzZVVwbG9hZFJpYkZpbGVNdXRhdGlvbiIsInVzZUdldE15Q29tcHRlQmFuY2FpcmVRdWVyeSIsInVzZUVkaXRPckNyZWF0ZUNvbXB0ZUJhbmNhaXJlTXV0YXRpb24iLCJnZXRFeHRlbnNpb24iLCJzZXRJbml0aWFsVmFsdWVzIiwiY29weVJpYiIsInNldENvcHlSaWIiLCJjb21wdGUiLCJ1cGxvYWRSaWJGaWxlIiwiaXNVcGxvYWRpbmciLCJ1cGRhdGVDcmVhdGVDb21wdGUiLCJudW1lcm8iLCJpbnRpdHVsZSIsIm5hbWVCYW5xdWUiLCJjb3B5UklCIiwibnVtYmVyIiwicG9zaXRpdmUiLCJpbnRlZ2VyIiwic2V0RmllbGRWYWx1ZSIsIm15Iiwic2hyaW5rIiwidXNlR2V0TXlEZW1hbmRlc1F1ZXJ5IiwidGFibGVDZWxsQ2xhc3NlcyIsIlN0eWxlZFRhYmxlQ2VsbCIsImhlYWQiLCJzZWNvbmRhcnkiLCJjb21tb24iLCJ3aGl0ZSIsIndyaXRpbmdNb2RlIiwiU3R5bGVkVGFibGVSb3ciLCJhY3Rpb24iLCJib3JkZXIiLCJwIiwicm93IiwiZGF0ZV9kZW1hbmRlIiwiZWZmZWN0aWZfZWxldmVzIiwiYXNzdXJhbmNlX2VsZXZlcyIsInF1b3RlX3BhcnRfZmVuYXNjbyIsImNvdGlzYXRpb25fc2VkdWMiLCJwb3NpdGlvbl9nZW9ncmFwaGlxdWUiLCJhcHNfY25wcyIsInJldmVyc2VfcmV0ZW51X2Zpc2NhbGUiLCJwb3VyY2VudGFnZV9leGFtZW4iLCJwZXJzb25uZWxzIiwicmF0aW9uX3Blcm1hbmVudF92YWNhdGFpcmUiLCJjb25mb3JtaXRlIiwiZXF1aXBlbWVudHMiLCJtZXN1cmVzX2JhcmllcmVzIiwiY2xlYW5fc2Nob29sIiwiZGlnaXRhbGlzYXRpb24iLCJzY29yZSIsInN0YXR1dCIsIm1vbnRhbnQiLCJvYnNlcnZhdGlvbiIsIkZvcm1Db250cm9sTGFiZWwiLCJTd2l0Y2giLCJGb3JtQ29udHJvbCIsIkZvcm1IZWxwZXJUZXh0IiwidXNlR2V0RGVtYW5kZUN1cnJlbnRRdWVyeSIsInVzZUVkaXREZW1hbmRlTXV0YXRpb24iLCJicmVha3BvaW50cyIsImRvd24iLCJEZW1hbmRlQ29udGFpbmVyIiwiU3RydWN0dXJlQ29udGFpbmVyIiwiUGllY2VDb250YWluZXIiLCJub21icmVFbGV2ZSIsIm5vbWJyZVBlcnNvbm5lbEVuc2VpZ25hbnQiLCJub21icmVQZXJzb25uZWxQZXJtYW5lbnQiLCJwZXJzb25uZWxfYXV0b3Jpc2UiLCJwZXJzb25uZWxfY29udHJhY3QiLCJwZXJjZW50RXhhbWVuIiwiY29udGFjdEZvbmRhdGV1ciIsImNvbnRhY3RzIiwidmFsaWRlIiwib3BlbkZvcm1QcmludCIsInNldE9wZW5Gb3JtUHJpbnQiLCJkZW1hbmRlIiwidXBkYXRlRGVtYW5kZSIsIm5vdFJlcXVpcmVkIiwid2hlbiIsInNjaGVtYSIsIm1heCIsImpyZXMiLCJwYXJzZSIsImJvcmRlcldpZHRoIiwiY2hlY2tlZCIsInVzZU1lbW8iLCJPdXRsZXQiLCJDc3NCYXNlbGluZSIsIlRoZW1lUHJvdmlkZXIiLCJUb3BCYXIiLCJjcmVhdGVUaGVtZSIsInRoZW1lU2V0dGluZ3MiLCJDb250YWluZXIiLCJTbmFja2JhciIsImNsZWFySW5mb01zZyIsIk11aUFsZXJ0IiwiaXNTaWRlYmFyIiwic2V0SXNTaWRlYmFyIiwicHQiLCJzbmFja09wZW4iLCJpbmZvU2V2ZXJpdHkiLCJtZXNzYWdlSW5mbyIsImluZm9NZXNzYWdlIiwic2lnbkluIiwic2V0U2lnbkluIiwicmVuZGVyQ29tcG9uZW50IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2Ryb3BGaWx0ZXIiLCJtYXJnaW5JbmxpbmUiLCJtYXJnaW5CbG9ja1N0YXJ0IiwibWFyZ2luQmxvY2tFbmQiLCJ0ZXh0QWxpZ24iLCJBVVRIRU5USUNBVEVEIiwiU0VUX0VSUk9SUyIsIkNMRUFSX0VSUk9SUyIsIlVOQVVUSEVOVElDQVRFRCIsIklTX0JVU1kiLCJTRVRfVVNFUiIsIkNMRUFSX01FTlUiLCJheGlvcyIsInB1YmxpY0F4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInVzZXJEYXRhIiwiZGlzcGF0Y2giLCJwb3N0IiwidG9rZW4iLCJlcnIiLCJzZXRFcnJvcnMiLCJzZXRNZSIsIm1lbWJyZSIsImdldFVzZXJEYXRhIiwiYXV0aGVudGljYXRlZCIsImdldCIsIkF1dGhvcml6YXRpb24iLCJTRVRfTU9ERSIsIlNFVF9JTkZPX01FU1NBR0UiLCJDTEVBUl9JTkZPX01FU1NBR0UiLCJBRERfTUVOVSIsIlJFTU9WRV9NRU5VIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJzaG93U2lkZUJhciIsIlVzZXJTY2xpY2UiLCJyZWR1Y2VycyIsInBheWxvYWQiLCJUT0dHTEVfU0lERUJBUiIsImFjdGlvbnMiLCJMT0FEX1VTRVIiLCJyZWR1Y2VyIiwiaW5pdGlhbENvbmZpZyIsImNvbmZpZ1NjbGljZSIsIl8iLCJwcmVzZW50Iiwic29tZSIsIkJBU0VfQVBJX1VSTCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJ1c2VBcGlBeGlvcyIsInJlcXVlc3RJbnRlcmNlcHQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlSW50ZXJjZXB0IiwicmVwbGFjZSIsImVqZWN0IiwiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwicHJlcGFyZUhlYWRlcnMiLCJnZXRTdGF0ZSIsImVuZHBvaW50Iiwic2V0IiwiYmFzZVF1ZXJ5V2l0aFJlYXV0aCIsImFyZ3MiLCJhcGkiLCJleHRyYU9wdGlvbnMiLCJvcGVuQXBpIiwicmVkdWNlclBhdGgiLCJ0YWdUeXBlcyIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRTZXNzaW9uIiwicXVlcnkiLCJnZXRMaXN0UGllY2VzIiwicHJvdmlkZXNUYWdzIiwiYXJnIiwiZ2V0U3RydWN0dXJlRGV0YWlscyIsImdldERlbWFuZGVEZXRhaWxzIiwiZ2V0RGVtYW5kZVBpZWNlcyIsImdldERlbWFuZGVDdXJyZW50IiwiZ2V0TXlDb21wdGVCYW5jYWlyZSIsImdldE15RGVtYW5kZXMiLCJjcmVhdGVEZW1hbmRlIiwibXV0YXRpb24iLCJ1cmwiLCJpbnZhbGlkYXRlc1RhZ3MiLCJlZGl0RGVtYW5kZSIsImVkaXRTdHJ1Y3R1cmUiLCJlZGl0T3JDcmVhdGVDb21wdGVCYW5jYWlyZSIsInRyYW5zZm9ybVJlc3BvbnNlIiwibWV0YSIsInVwbG9hZERlbWFuZGVGaWxlIiwiZHAiLCJ1c2VHZXRTZXNzaW9uUXVlcnkiLCJ1c2VHZXREZW1hbmRlRGV0YWlsc1F1ZXJ5IiwidXNlQ3JlYXRlRGVtYW5kZU11dGF0aW9uIiwidXNlRWRpdFN0cnVjdHVyZU11dGF0aW9uIiwiY29tYmluZVJlZHVjZXJzIiwiY29uZmlndXJlU3RvcmUiLCJwZXJzaXN0UmVkdWNlciIsIkZMVVNIIiwiUkVIWURSQVRFIiwiUEFVU0UiLCJQRVJTSVNUIiwiUFVSR0UiLCJSRUdJU1RFUiIsInBlcnNpc3RTdG9yZSIsIlVzZXJSZWR1Y2VyIiwiY29uZmlnUmVkdWNlciIsInNlc3Npb25TdG9yYWdlIiwicGVyc2lzdENvbmZpZyIsImtleSIsInZlcnNpb24iLCJzdG9yYWdlIiwiYmxhY2tsaXN0Iiwicm9vdFJlZHVjZXIiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJpZ25vcmVkQWN0aW9ucyIsImNvbmNhdCIsIlJFQUNUX0FQUF9TSVRFX0tFWSIsIlJFQUNUX0FQUF9TRUNSRVRfS0VZIiwidXNlUm91dGVFcnJvciIsInN0YXR1c1RleHQiLCJkYXJrZW4iLCJsaWdodGVuIiwiaW50ZXJ2YWxUb0R1cmF0aW9uIiwiZ2V0QmFja2dyb3VuZENvbG9yIiwiZ2V0SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJnZXRTZWxlY3RlZEJhY2tncm91bmRDb2xvciIsImdldFNlbGVjdGVkSG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJkYXlzQmVmb3JlIiwiZGF5cyIsInNldERhdGUiLCJnZXREYXRlIiwiZ2V0QWdlIiwiZG9iIiwiZHVyYXRpb24iLCJzdGFydCIsImVuZCIsInllYXJzIiwibW9udGhzIiwiaXNEYXRlVmFsaWQiLCJkYXRlU3RyIiwiaXNOYU4iLCJzcGxpdCIsInBvcCIsIk5hdmlnYXRlIiwiYXV0aFJvbGUiLCJpbml0UmVhY3RJMThuZXh0IiwiRGF0ZVRpbWUiLCJCYWNrZW5kIiwiTGFuZ3VhZ2VEZXRlY3RvciIsImluaXQiLCJiYWNrZW5kIiwibG9hZFBhdGgiLCJmYWxsYmFja0xuZyIsImludGVycG9sYXRpb24iLCJsbmciLCJmcm9tSlNEYXRlIiwic2V0TG9jYWxlIiwidG9Mb2NhbGVTdHJpbmciLCJyZWRBY2NlbnQiLCJibHVlQWNjZW50IiwibmV1dHJhbCIsImRhcmsiLCJsaWdodCIsImJhY2tncm91bmQiLCJlbnRldGUiLCJzdWJ0aXRsZTEiLCJzdWJ0aXRsZTIiLCJhZGRyZXNzIiwid2VsY29tZSIsImdyYWRpZW50IiwiZmlyc3QiLCJzZWNvbmQiLCJ0eXBvZ3JhcGh5IiwiYWxsVmFyaWFudHMiLCJoMSIsImxpbmVIZWlnaHQiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiY29tcG9uZW50cyIsIk11aVBhcGVyIiwic3R5bGVPdmVycmlkZXMiXSwic291cmNlUm9vdCI6IiJ9