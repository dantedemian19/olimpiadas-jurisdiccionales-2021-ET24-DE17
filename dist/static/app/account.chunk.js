(self["webpackChunkprueba"] = self["webpackChunkprueba"] || []).push([["account"],{

/***/ "./src/main/webapp/app/modules/account/index.tsx":
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/modules/account/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/error/error-boundary-route */ "./src/main/webapp/app/shared/error/error-boundary-route.tsx");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings */ "./src/main/webapp/app/modules/account/settings/settings.tsx");
/* harmony import */ var _password_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password/password */ "./src/main/webapp/app/modules/account/password/password.tsx");




const Routes = ({ match }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { path: `${match.url}/settings`, component: _settings_settings__WEBPACK_IMPORTED_MODULE_2__.default }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__.default, { path: `${match.url}/password`, component: _password_password__WEBPACK_IMPORTED_MODULE_3__.default })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\dante\\Documents\\GitHub\\olimpiadas-jurisdiccionales-ET24-DE17\\src\\main\\webapp\\app\\modules\\account\\index.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "C:\\Users\\dante\\Documents\\GitHub\\olimpiadas-jurisdiccionales-ET24-DE17\\src\\main\\webapp\\app\\modules\\account\\index.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/password/password.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/password/password.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPage": () => (/* binding */ PasswordPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/layout/password/password-strength-bar */ "./src/main/webapp/app/shared/layout/password/password-strength-bar.tsx");
/* harmony import */ var _password_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.reducer */ "./src/main/webapp/app/modules/account/password/password.reducer.ts");








const PasswordPage = (props) => {
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        props.reset();
        props.getSession();
        return () => {
            props.reset();
        };
    }, []);
    const handleValidSubmit = (event, values) => {
        props.savePassword(values.currentPassword, values.newPassword);
    };
    const updatePassword = event => setPassword(event.target.value);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { md: "8" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { id: "password-title" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "password.title", interpolate: { username: props.account.login } },
                        "Password for ",
                        props.account.login)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__.AvForm, { id: "password-form", onValidSubmit: handleValidSubmit },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__.AvField, { name: "currentPassword", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.form.currentpassword.label'), placeholder: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.form.currentpassword.placeholder'), type: "password", validate: {
                            required: { value: true, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.validate.newpassword.required') },
                        }, "data-cy": "currentPassword" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__.AvField, { name: "newPassword", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.form.newpassword.label'), placeholder: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.form.newpassword.placeholder'), type: "password", validate: {
                            required: { value: true, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.validate.newpassword.required') },
                            minLength: { value: 4, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.validate.newpassword.minlength') },
                            maxLength: { value: 50, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.validate.newpassword.maxlength') },
                        }, onChange: updatePassword, "data-cy": "newPassword" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_5__.default, { password: password }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__.AvField, { name: "confirmPassword", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.form.confirmpassword.label'), placeholder: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.form.confirmpassword.placeholder'), type: "password", validate: {
                            required: {
                                value: true,
                                errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.validate.confirmpassword.required'),
                            },
                            minLength: {
                                value: 4,
                                errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.validate.confirmpassword.minlength'),
                            },
                            maxLength: {
                                value: 50,
                                errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.validate.confirmpassword.maxlength'),
                            },
                            match: {
                                value: 'newPassword',
                                errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.error.dontmatch'),
                            },
                        }, "data-cy": "confirmPassword" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, { color: "success", type: "submit", "data-cy": "submit" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "password.form.button" }, "Save")))))));
};
const mapStateToProps = ({ authentication }) => ({
    account: authentication.account,
    isAuthenticated: authentication.isAuthenticated,
});
const mapDispatchToProps = { getSession: app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__.getSession, savePassword: _password_reducer__WEBPACK_IMPORTED_MODULE_6__.savePassword, reset: _password_reducer__WEBPACK_IMPORTED_MODULE_6__.reset };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(PasswordPage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\dante\\Documents\\GitHub\\olimpiadas-jurisdiccionales-ET24-DE17\\src\\main\\webapp\\app\\modules\\account\\password\\password.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "C:\\Users\\dante\\Documents\\GitHub\\olimpiadas-jurisdiccionales-ET24-DE17\\src\\main\\webapp\\app\\modules\\account\\password\\password.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/settings/settings.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/settings/settings.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var app_config_translation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/translation */ "./src/main/webapp/app/config/translation.ts");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.reducer */ "./src/main/webapp/app/modules/account/settings/settings.reducer.ts");








const SettingsPage = (props) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        props.getSession();
        return () => {
            props.reset();
        };
    }, []);
    const handleValidSubmit = (event, values) => {
        const account = Object.assign(Object.assign({}, props.account), values);
        props.saveAccountSettings(account);
        event.persist();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { md: "8" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { id: "settings-title" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.Translate, { contentKey: "settings.title", interpolate: { username: props.account.login } },
                        "User settings for ",
                        props.account.login)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__.AvForm, { id: "settings-form", onValidSubmit: handleValidSubmit },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__.AvField, { className: "form-control", name: "firstName", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('settings.form.firstname'), id: "firstName", placeholder: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('settings.form.firstname.placeholder'), validate: {
                            required: { value: true, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('settings.messages.validate.firstname.required') },
                            minLength: { value: 1, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('settings.messages.validate.firstname.minlength') },
                            maxLength: { value: 50, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('settings.messages.validate.firstname.maxlength') },
                        }, value: props.account.firstName, "data-cy": "firstname" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__.AvField, { className: "form-control", name: "lastName", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('settings.form.lastname'), id: "lastName", placeholder: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('settings.form.lastname.placeholder'), validate: {
                            required: { value: true, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('settings.messages.validate.lastname.required') },
                            minLength: { value: 1, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('settings.messages.validate.lastname.minlength') },
                            maxLength: { value: 50, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('settings.messages.validate.lastname.maxlength') },
                        }, value: props.account.lastName, "data-cy": "lastname" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__.AvField, { name: "email", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('global.form.email.label'), placeholder: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('global.form.email.placeholder'), type: "email", validate: {
                            required: { value: true, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('global.messages.validate.email.required') },
                            minLength: { value: 5, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('global.messages.validate.email.minlength') },
                            maxLength: { value: 254, errorMessage: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('global.messages.validate.email.maxlength') },
                        }, value: props.account.email, "data-cy": "email" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__.AvField, { type: "select", id: "langKey", name: "langKey", className: "form-control", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.translate)('settings.form.language'), value: props.account.langKey, "data-cy": "langKey" }, app_config_translation__WEBPACK_IMPORTED_MODULE_4__.locales.map(locale => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: locale, key: locale }, app_config_translation__WEBPACK_IMPORTED_MODULE_4__.languages[locale].name)))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, { color: "primary", type: "submit", "data-cy": "submit" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_2__.Translate, { contentKey: "settings.form.button" }, "Save")))))));
};
const mapStateToProps = ({ authentication }) => ({
    account: authentication.account,
    isAuthenticated: authentication.isAuthenticated,
});
const mapDispatchToProps = { getSession: app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_5__.getSession, saveAccountSettings: _settings_reducer__WEBPACK_IMPORTED_MODULE_6__.saveAccountSettings, reset: _settings_reducer__WEBPACK_IMPORTED_MODULE_6__.reset };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(SettingsPage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\dante\\Documents\\GitHub\\olimpiadas-jurisdiccionales-ET24-DE17\\src\\main\\webapp\\app\\modules\\account\\settings\\settings.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "C:\\Users\\dante\\Documents\\GitHub\\olimpiadas-jurisdiccionales-ET24-DE17\\src\\main\\webapp\\app\\modules\\account\\settings\\settings.tsx"); } }(); 

/***/ })

}]);
//# sourceMappingURL=account.chunk.js.map