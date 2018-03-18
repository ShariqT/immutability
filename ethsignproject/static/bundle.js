webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactRouterDom = __webpack_require__(159);

	var _App1Container = __webpack_require__(206);

	var _App1Container2 = _interopRequireDefault(_App1Container);

	var _reactWeb = __webpack_require__(922);

	var _Intro = __webpack_require__(912);

	var _Intro2 = _interopRequireDefault(_Intro);

	var _App2Container = __webpack_require__(923);

	var _App2Container2 = _interopRequireDefault(_App2Container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App1 = function (_React$Component) {
	    _inherits(App1, _React$Component);

	    function App1(props) {
	        _classCallCheck(this, App1);

	        var _this = _possibleConstructorReturn(this, (App1.__proto__ || Object.getPrototypeOf(App1)).call(this, props));

	        console.log(props);
	        return _this;
	    }

	    _createClass(App1, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(_App1Container2.default, null);
	        }
	    }]);

	    return App1;
	}(_react2.default.Component);

	console.log("homepage");
	(0, _reactDom.render)(_react2.default.createElement(
	    _reactWeb.Web3Provider,
	    { web3UnavailableScreen: function web3UnavailableScreen() {
	            return _react2.default.createElement(_Intro2.default, null);
	        } },
	    _react2.default.createElement(
	        _reactRouterDom.BrowserRouter,
	        null,
	        _react2.default.createElement(
	            "div",
	            null,
	            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _App1Container2.default }),
	            _react2.default.createElement(_reactRouterDom.Route, { path: "/r/:id", component: _App2Container2.default })
	        )
	    )
	), document.getElementById('App1'));

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.withRouter = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

	var _BrowserRouter2 = __webpack_require__(160);

	var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

	var _HashRouter2 = __webpack_require__(181);

	var _HashRouter3 = _interopRequireDefault(_HashRouter2);

	var _Link2 = __webpack_require__(183);

	var _Link3 = _interopRequireDefault(_Link2);

	var _MemoryRouter2 = __webpack_require__(184);

	var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

	var _NavLink2 = __webpack_require__(187);

	var _NavLink3 = _interopRequireDefault(_NavLink2);

	var _Prompt2 = __webpack_require__(193);

	var _Prompt3 = _interopRequireDefault(_Prompt2);

	var _Redirect2 = __webpack_require__(195);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(188);

	var _Route3 = _interopRequireDefault(_Route2);

	var _Router2 = __webpack_require__(179);

	var _Router3 = _interopRequireDefault(_Router2);

	var _StaticRouter2 = __webpack_require__(198);

	var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

	var _Switch2 = __webpack_require__(200);

	var _Switch3 = _interopRequireDefault(_Switch2);

	var _matchPath2 = __webpack_require__(202);

	var _matchPath3 = _interopRequireDefault(_matchPath2);

	var _withRouter2 = __webpack_require__(203);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BrowserRouter = _BrowserRouter3.default;
	exports.HashRouter = _HashRouter3.default;
	exports.Link = _Link3.default;
	exports.MemoryRouter = _MemoryRouter3.default;
	exports.NavLink = _NavLink3.default;
	exports.Prompt = _Prompt3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	exports.Router = _Router3.default;
	exports.StaticRouter = _StaticRouter3.default;
	exports.Switch = _Switch3.default;
	exports.matchPath = _matchPath3.default;
	exports.withRouter = _withRouter3.default;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createBrowserHistory = __webpack_require__(171);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _Router = __webpack_require__(179);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that uses HTML5 history.
	 */
	var BrowserRouter = function (_React$Component) {
	  _inherits(BrowserRouter, _React$Component);

	  function BrowserRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, BrowserRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createBrowserHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
	  };

	  BrowserRouter.prototype.render = function render() {
	    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
	  };

	  return BrowserRouter;
	}(_react2.default.Component);

	BrowserRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  forceRefresh: _propTypes2.default.bool,
	  getUserConfirmation: _propTypes2.default.func,
	  keyLength: _propTypes2.default.number,
	  children: _propTypes2.default.node
	};
	exports.default = BrowserRouter;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(172);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(173);

	var _PathUtils = __webpack_require__(176);

	var _createTransitionManager = __webpack_require__(177);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _DOMUtils = __webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var getHistoryState = function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    return {};
	  }
	};

	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

	  var globalHistory = window.history;
	  var canUseHistory = (0, _DOMUtils.supportsHistory)();
	  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

	  var _props$forceRefresh = props.forceRefresh,
	      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
	      _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

	  var getDOMLocation = function getDOMLocation(historyState) {
	    var _ref = historyState || {},
	        key = _ref.key,
	        state = _ref.state;

	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;


	    var path = pathname + search + hash;

	    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

	    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

	    return (0, _LocationUtils.createLocation)(path, state, key);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var handlePopState = function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

	    handlePop(getDOMLocation(event.state));
	  };

	  var handleHashChange = function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  };

	  var forceNextPop = false;

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.

	    var toIndex = allKeys.indexOf(toLocation.key);

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allKeys.indexOf(fromLocation.key);

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key];

	  // Public interface

	  var createHref = function createHref(location) {
	    return basename + (0, _PathUtils.createPath)(location);
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;


	      if (canUseHistory) {
	        globalHistory.pushState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.href = href;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	          nextKeys.push(location.key);
	          allKeys = nextKeys;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

	        window.location.href = href;
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;


	      if (canUseHistory) {
	        globalHistory.replaceState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.replace(href);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);

	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

	        window.location.replace(href);
	      }
	    });
	  };

	  var go = function go(n) {
	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createBrowserHistory;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.createLocation = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _resolvePathname = __webpack_require__(174);

	var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

	var _valueEqual = __webpack_require__(175);

	var _valueEqual2 = _interopRequireDefault(_valueEqual);

	var _PathUtils = __webpack_require__(176);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
	  var location = void 0;
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = (0, _PathUtils.parsePath)(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);

	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }

	  if (key) location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }

	  return location;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
	};

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	}

	// About 1.5x faster than the two-arg version of Array#splice()
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }

	  list.pop();
	}

	// This implementation is based heavily on node's url.parse
	function resolvePathname(to) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  var toParts = to && to.split('/') || [];
	  var fromParts = from && from.split('/') || [];

	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;

	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }

	  if (!fromParts.length) return '/';

	  var hasTrailingSlash = void 0;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }

	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];

	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }

	  if (!mustEndAbs) for (; up--; up) {
	    fromParts.unshift('..');
	  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

	  var result = fromParts.join('/');

	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

	  return result;
	}

	exports.default = resolvePathname;
	module.exports = exports['default'];

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function valueEqual(a, b) {
	  if (a === b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return valueEqual(item, b[index]);
	    });
	  }

	  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (aType !== bType) return false;

	  if (aType === 'object') {
	    var aValue = a.valueOf();
	    var bValue = b.valueOf();

	    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);

	    if (aKeys.length !== bKeys.length) return false;

	    return aKeys.every(function (key) {
	      return valueEqual(a[key], b[key]);
	    });
	  }

	  return false;
	}

	exports.default = valueEqual;
	module.exports = exports['default'];

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	};

	var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
	  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
	};

	var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
	  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
	};

	var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;


	  var path = pathname || '/';

	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

	  return path;
	};

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createTransitionManager = function createTransitionManager() {
	  var prompt = null;

	  var setPrompt = function setPrompt(nextPrompt) {
	    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

	    prompt = nextPrompt;

	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  };

	  var listeners = [];

	  var appendListener = function appendListener(fn) {
	    var isActive = true;

	    var listener = function listener() {
	      if (isActive) fn.apply(undefined, arguments);
	    };

	    listeners.push(listener);

	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var notifyListeners = function notifyListeners() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    listeners.forEach(function (listener) {
	      return listener.apply(undefined, args);
	    });
	  };

	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	};

	exports.default = createTransitionManager;

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */
	var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	};

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Router = __webpack_require__(180);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Router2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(172);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for putting history on context.
	 */
	var Router = function (_React$Component) {
	  _inherits(Router, _React$Component);

	  function Router() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Router);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props.history.location.pathname)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Router.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends({}, this.context.router, {
	        history: this.props.history,
	        route: {
	          location: this.props.history.location,
	          match: this.state.match
	        }
	      })
	    };
	  };

	  Router.prototype.computeMatch = function computeMatch(pathname) {
	    return {
	      path: '/',
	      url: '/',
	      params: {},
	      isExact: pathname === '/'
	    };
	  };

	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;

	    var _props = this.props,
	        children = _props.children,
	        history = _props.history;


	    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, 'A <Router> may have only one child element');

	    // Do this here so we can setState when a <Redirect> changes the
	    // location in componentWillMount. This happens e.g. when doing
	    // server rendering using a <StaticRouter>.
	    this.unlisten = history.listen(function () {
	      _this2.setState({
	        match: _this2.computeMatch(history.location.pathname)
	      });
	    });
	  };

	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    (0, _warning2.default)(this.props.history === nextProps.history, 'You cannot change <Router history>');
	  };

	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unlisten();
	  };

	  Router.prototype.render = function render() {
	    var children = this.props.children;

	    return children ? _react2.default.Children.only(children) : null;
	  };

	  return Router;
	}(_react2.default.Component);

	Router.propTypes = {
	  history: _propTypes2.default.object.isRequired,
	  children: _propTypes2.default.node
	};
	Router.contextTypes = {
	  router: _propTypes2.default.object
	};
	Router.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = Router;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createHashHistory = __webpack_require__(182);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _Router = __webpack_require__(179);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that uses window.location.hash.
	 */
	var HashRouter = function (_React$Component) {
	  _inherits(HashRouter, _React$Component);

	  function HashRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, HashRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createHashHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  HashRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
	  };

	  HashRouter.prototype.render = function render() {
	    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
	  };

	  return HashRouter;
	}(_react2.default.Component);

	HashRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  getUserConfirmation: _propTypes2.default.func,
	  hashType: _propTypes2.default.oneOf(['hashbang', 'noslash', 'slash']),
	  children: _propTypes2.default.node
	};
	exports.default = HashRouter;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(172);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(173);

	var _PathUtils = __webpack_require__(176);

	var _createTransitionManager = __webpack_require__(177);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _DOMUtils = __webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substr(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: _PathUtils.stripLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  },
	  slash: {
	    encodePath: _PathUtils.addLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  }
	};

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var createHashHistory = function createHashHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

	  var globalHistory = window.history;
	  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$hashType = props.hashType,
	      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

	  var _HashPathCoders$hashT = HashPathCoders[hashType],
	      encodePath = _HashPathCoders$hashT.encodePath,
	      decodePath = _HashPathCoders$hashT.decodePath;


	  var getDOMLocation = function getDOMLocation() {
	    var path = decodePath(getHashPath());

	    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

	    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

	    return (0, _LocationUtils.createLocation)(path);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var forceNextPop = false;
	  var ignorePath = null;

	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = encodePath(path);

	    if (path !== encodedPath) {
	      // Ensure we always have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var location = getDOMLocation();
	      var prevLocation = history.location;

	      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

	      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

	      ignorePath = null;

	      handlePop(location);
	    }
	  };

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of paths we've seen in sessionStorage.
	    // Instead, we just default to 0 for paths we don't know.

	    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  // Ensure the hash is encoded properly before doing anything else.
	  var path = getHashPath();
	  var encodedPath = encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  var initialLocation = getDOMLocation();
	  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

	  // Public interface

	  var createHref = function createHref(location) {
	    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a PUSH, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        pushHashPath(encodedPath);

	        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
	        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	        nextPaths.push(path);
	        allPaths = nextPaths;

	        setState({ action: action, location: location });
	      } else {
	        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

	        setState();
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        replaceHashPath(encodedPath);
	      }

	      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

	      if (prevIndex !== -1) allPaths[prevIndex] = path;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createHashHistory;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _invariant = __webpack_require__(172);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isModifiedEvent = function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	};

	/**
	 * The public API for rendering a history-aware <a>.
	 */

	var Link = function (_React$Component) {
	  _inherits(Link, _React$Component);

	  function Link() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Link);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
	      if (_this.props.onClick) _this.props.onClick(event);

	      if (!event.defaultPrevented && // onClick prevented default
	      event.button === 0 && // ignore right clicks
	      !_this.props.target && // let browser handle "target=_blank" etc.
	      !isModifiedEvent(event) // ignore clicks with modifier keys
	      ) {
	          event.preventDefault();

	          var history = _this.context.router.history;
	          var _this$props = _this.props,
	              replace = _this$props.replace,
	              to = _this$props.to;


	          if (replace) {
	            history.replace(to);
	          } else {
	            history.push(to);
	          }
	        }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Link.prototype.render = function render() {
	    var _props = this.props,
	        replace = _props.replace,
	        to = _props.to,
	        innerRef = _props.innerRef,
	        props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

	    (0, _invariant2.default)(this.context.router, 'You should not use <Link> outside a <Router>');

	    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
	  };

	  return Link;
	}(_react2.default.Component);

	Link.propTypes = {
	  onClick: _propTypes2.default.func,
	  target: _propTypes2.default.string,
	  replace: _propTypes2.default.bool,
	  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
	  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
	};
	Link.defaultProps = {
	  replace: false
	};
	Link.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      push: _propTypes2.default.func.isRequired,
	      replace: _propTypes2.default.func.isRequired,
	      createHref: _propTypes2.default.func.isRequired
	    }).isRequired
	  }).isRequired
	};
	exports.default = Link;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _MemoryRouter = __webpack_require__(185);

	var _MemoryRouter2 = _interopRequireDefault(_MemoryRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _MemoryRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createMemoryHistory = __webpack_require__(186);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _Router = __webpack_require__(180);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that stores location in memory.
	 */
	var MemoryRouter = function (_React$Component) {
	  _inherits(MemoryRouter, _React$Component);

	  function MemoryRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, MemoryRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createMemoryHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<MemoryRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { MemoryRouter as Router }`.');
	  };

	  MemoryRouter.prototype.render = function render() {
	    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
	  };

	  return MemoryRouter;
	}(_react2.default.Component);

	MemoryRouter.propTypes = {
	  initialEntries: _propTypes2.default.array,
	  initialIndex: _propTypes2.default.number,
	  getUserConfirmation: _propTypes2.default.func,
	  keyLength: _propTypes2.default.number,
	  children: _propTypes2.default.node
	};
	exports.default = MemoryRouter;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	var _PathUtils = __webpack_require__(176);

	var _LocationUtils = __webpack_require__(173);

	var _createTransitionManager = __webpack_require__(177);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var clamp = function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	};

	/**
	 * Creates a history object that stores locations in memory.
	 */
	var createMemoryHistory = function createMemoryHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var getUserConfirmation = props.getUserConfirmation,
	      _props$initialEntries = props.initialEntries,
	      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
	      _props$initialIndex = props.initialIndex,
	      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = history.entries.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
	  });

	  // Public interface

	  var createHref = _PathUtils.createPath;

	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;

	      var nextEntries = history.entries.slice(0);
	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }

	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      history.entries[history.index] = location;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

	    var action = 'POP';
	    var location = history.entries[nextIndex];

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var canGo = function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  };

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return transitionManager.setPrompt(prompt);
	  };

	  var listen = function listen(listener) {
	    return transitionManager.appendListener(listener);
	  };

	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createMemoryHistory;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Route = __webpack_require__(188);

	var _Route2 = _interopRequireDefault(_Route);

	var _Link = __webpack_require__(183);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */
	var NavLink = function NavLink(_ref) {
	  var to = _ref.to,
	      exact = _ref.exact,
	      strict = _ref.strict,
	      location = _ref.location,
	      activeClassName = _ref.activeClassName,
	      className = _ref.className,
	      activeStyle = _ref.activeStyle,
	      style = _ref.style,
	      getIsActive = _ref.isActive,
	      ariaCurrent = _ref.ariaCurrent,
	      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

	  return _react2.default.createElement(_Route2.default, {
	    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
	    exact: exact,
	    strict: strict,
	    location: location,
	    children: function children(_ref2) {
	      var location = _ref2.location,
	          match = _ref2.match;

	      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

	      return _react2.default.createElement(_Link2.default, _extends({
	        to: to,
	        className: isActive ? [className, activeClassName].filter(function (i) {
	          return i;
	        }).join(' ') : className,
	        style: isActive ? _extends({}, style, activeStyle) : style,
	        'aria-current': isActive && ariaCurrent
	      }, rest));
	    }
	  });
	};

	NavLink.propTypes = {
	  to: _Link2.default.propTypes.to,
	  exact: _propTypes2.default.bool,
	  strict: _propTypes2.default.bool,
	  location: _propTypes2.default.object,
	  activeClassName: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	  activeStyle: _propTypes2.default.object,
	  style: _propTypes2.default.object,
	  isActive: _propTypes2.default.func,
	  ariaCurrent: _propTypes2.default.oneOf(['page', 'step', 'location', 'true'])
	};

	NavLink.defaultProps = {
	  activeClassName: 'active',
	  ariaCurrent: 'true'
	};

	exports.default = NavLink;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Route = __webpack_require__(189);

	var _Route2 = _interopRequireDefault(_Route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Route2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(172);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _matchPath = __webpack_require__(190);

	var _matchPath2 = _interopRequireDefault(_matchPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isEmptyChildren = function isEmptyChildren(children) {
	  return _react2.default.Children.count(children) === 0;
	};

	/**
	 * The public API for matching a single path and rendering.
	 */

	var Route = function (_React$Component) {
	  _inherits(Route, _React$Component);

	  function Route() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Route);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props, _this.context.router)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Route.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends({}, this.context.router, {
	        route: {
	          location: this.props.location || this.context.router.route.location,
	          match: this.state.match
	        }
	      })
	    };
	  };

	  Route.prototype.computeMatch = function computeMatch(_ref, router) {
	    var computedMatch = _ref.computedMatch,
	        location = _ref.location,
	        path = _ref.path,
	        strict = _ref.strict,
	        exact = _ref.exact,
	        sensitive = _ref.sensitive;

	    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

	    (0, _invariant2.default)(router, 'You should not use <Route> or withRouter() outside a <Router>');

	    var route = router.route;

	    var pathname = (location || route.location).pathname;

	    return path ? (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
	  };

	  Route.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

	    (0, _warning2.default)(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

	    (0, _warning2.default)(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
	  };

	  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
	    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

	    this.setState({
	      match: this.computeMatch(nextProps, nextContext.router)
	    });
	  };

	  Route.prototype.render = function render() {
	    var match = this.state.match;
	    var _props = this.props,
	        children = _props.children,
	        component = _props.component,
	        render = _props.render;
	    var _context$router = this.context.router,
	        history = _context$router.history,
	        route = _context$router.route,
	        staticContext = _context$router.staticContext;

	    var location = this.props.location || route.location;
	    var props = { match: match, location: location, history: history, staticContext: staticContext };

	    return component ? // component prop gets first priority, only called if there's a match
	    match ? _react2.default.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
	    match ? render(props) : null : children ? // children come last, always called
	    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? _react2.default.Children.only(children) : null : null;
	  };

	  return Route;
	}(_react2.default.Component);

	Route.propTypes = {
	  computedMatch: _propTypes2.default.object, // private, from <Switch>
	  path: _propTypes2.default.string,
	  exact: _propTypes2.default.bool,
	  strict: _propTypes2.default.bool,
	  sensitive: _propTypes2.default.bool,
	  component: _propTypes2.default.func,
	  render: _propTypes2.default.func,
	  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
	  location: _propTypes2.default.object
	};
	Route.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.object.isRequired,
	    route: _propTypes2.default.object.isRequired,
	    staticContext: _propTypes2.default.object
	  })
	};
	Route.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = Route;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _pathToRegexp = __webpack_require__(191);

	var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var patternCache = {};
	var cacheLimit = 10000;
	var cacheCount = 0;

	var compilePath = function compilePath(pattern, options) {
	  var cacheKey = '' + options.end + options.strict + options.sensitive;
	  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

	  if (cache[pattern]) return cache[pattern];

	  var keys = [];
	  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
	  var compiledPattern = { re: re, keys: keys };

	  if (cacheCount < cacheLimit) {
	    cache[pattern] = compiledPattern;
	    cacheCount++;
	  }

	  return compiledPattern;
	};

	/**
	 * Public API for matching a URL pathname to a path pattern.
	 */
	var matchPath = function matchPath(pathname) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (typeof options === 'string') options = { path: options };

	  var _options = options,
	      _options$path = _options.path,
	      path = _options$path === undefined ? '/' : _options$path,
	      _options$exact = _options.exact,
	      exact = _options$exact === undefined ? false : _options$exact,
	      _options$strict = _options.strict,
	      strict = _options$strict === undefined ? false : _options$strict,
	      _options$sensitive = _options.sensitive,
	      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

	  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
	      re = _compilePath.re,
	      keys = _compilePath.keys;

	  var match = re.exec(pathname);

	  if (!match) return null;

	  var url = match[0],
	      values = match.slice(1);

	  var isExact = pathname === url;

	  if (exact && !isExact) return null;

	  return {
	    path: path, // the path pattern used to match
	    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
	    isExact: isExact, // whether or not we matched exactly
	    params: keys.reduce(function (memo, key, index) {
	      memo[key.name] = values[index];
	      return memo;
	    }, {})
	  };
	};

	exports.default = matchPath;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(192)

	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      keys.push(token)

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}


/***/ }),

/***/ 192:
/***/ (function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Prompt = __webpack_require__(194);

	var _Prompt2 = _interopRequireDefault(_Prompt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Prompt2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _invariant = __webpack_require__(172);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for prompting the user before navigating away
	 * from a screen with a component.
	 */
	var Prompt = function (_React$Component) {
	  _inherits(Prompt, _React$Component);

	  function Prompt() {
	    _classCallCheck(this, Prompt);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Prompt.prototype.enable = function enable(message) {
	    if (this.unblock) this.unblock();

	    this.unblock = this.context.router.history.block(message);
	  };

	  Prompt.prototype.disable = function disable() {
	    if (this.unblock) {
	      this.unblock();
	      this.unblock = null;
	    }
	  };

	  Prompt.prototype.componentWillMount = function componentWillMount() {
	    (0, _invariant2.default)(this.context.router, 'You should not use <Prompt> outside a <Router>');

	    if (this.props.when) this.enable(this.props.message);
	  };

	  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.when) {
	      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
	    } else {
	      this.disable();
	    }
	  };

	  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.disable();
	  };

	  Prompt.prototype.render = function render() {
	    return null;
	  };

	  return Prompt;
	}(_react2.default.Component);

	Prompt.propTypes = {
	  when: _propTypes2.default.bool,
	  message: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired
	};
	Prompt.defaultProps = {
	  when: true
	};
	Prompt.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      block: _propTypes2.default.func.isRequired
	    }).isRequired
	  }).isRequired
	};
	exports.default = Prompt;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Redirect = __webpack_require__(196);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Redirect2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(172);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _history = __webpack_require__(197);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for updating the location programmatically
	 * with a component.
	 */
	var Redirect = function (_React$Component) {
	  _inherits(Redirect, _React$Component);

	  function Redirect() {
	    _classCallCheck(this, Redirect);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Redirect.prototype.isStatic = function isStatic() {
	    return this.context.router && this.context.router.staticContext;
	  };

	  Redirect.prototype.componentWillMount = function componentWillMount() {
	    (0, _invariant2.default)(this.context.router, 'You should not use <Redirect> outside a <Router>');

	    if (this.isStatic()) this.perform();
	  };

	  Redirect.prototype.componentDidMount = function componentDidMount() {
	    if (!this.isStatic()) this.perform();
	  };

	  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var prevTo = (0, _history.createLocation)(prevProps.to);
	    var nextTo = (0, _history.createLocation)(this.props.to);

	    if ((0, _history.locationsAreEqual)(prevTo, nextTo)) {
	      (0, _warning2.default)(false, 'You tried to redirect to the same route you\'re currently on: ' + ('"' + nextTo.pathname + nextTo.search + '"'));
	      return;
	    }

	    this.perform();
	  };

	  Redirect.prototype.perform = function perform() {
	    var history = this.context.router.history;
	    var _props = this.props,
	        push = _props.push,
	        to = _props.to;


	    if (push) {
	      history.push(to);
	    } else {
	      history.replace(to);
	    }
	  };

	  Redirect.prototype.render = function render() {
	    return null;
	  };

	  return Redirect;
	}(_react2.default.Component);

	Redirect.propTypes = {
	  push: _propTypes2.default.bool,
	  from: _propTypes2.default.string,
	  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};
	Redirect.defaultProps = {
	  push: false
	};
	Redirect.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      push: _propTypes2.default.func.isRequired,
	      replace: _propTypes2.default.func.isRequired
	    }).isRequired,
	    staticContext: _propTypes2.default.object
	  }).isRequired
	};
	exports.default = Redirect;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

	var _LocationUtils = __webpack_require__(173);

	Object.defineProperty(exports, 'createLocation', {
	  enumerable: true,
	  get: function get() {
	    return _LocationUtils.createLocation;
	  }
	});
	Object.defineProperty(exports, 'locationsAreEqual', {
	  enumerable: true,
	  get: function get() {
	    return _LocationUtils.locationsAreEqual;
	  }
	});

	var _PathUtils = __webpack_require__(176);

	Object.defineProperty(exports, 'parsePath', {
	  enumerable: true,
	  get: function get() {
	    return _PathUtils.parsePath;
	  }
	});
	Object.defineProperty(exports, 'createPath', {
	  enumerable: true,
	  get: function get() {
	    return _PathUtils.createPath;
	  }
	});

	var _createBrowserHistory2 = __webpack_require__(171);

	var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

	var _createHashHistory2 = __webpack_require__(182);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	var _createMemoryHistory2 = __webpack_require__(186);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.createBrowserHistory = _createBrowserHistory3.default;
	exports.createHashHistory = _createHashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _StaticRouter = __webpack_require__(199);

	var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(172);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _PathUtils = __webpack_require__(176);

	var _Router = __webpack_require__(180);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var normalizeLocation = function normalizeLocation(object) {
	  var _object$pathname = object.pathname,
	      pathname = _object$pathname === undefined ? '/' : _object$pathname,
	      _object$search = object.search,
	      search = _object$search === undefined ? '' : _object$search,
	      _object$hash = object.hash,
	      hash = _object$hash === undefined ? '' : _object$hash;


	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var addBasename = function addBasename(basename, location) {
	  if (!basename) return location;

	  return _extends({}, location, {
	    pathname: (0, _PathUtils.addLeadingSlash)(basename) + location.pathname
	  });
	};

	var stripBasename = function stripBasename(basename, location) {
	  if (!basename) return location;

	  var base = (0, _PathUtils.addLeadingSlash)(basename);

	  if (location.pathname.indexOf(base) !== 0) return location;

	  return _extends({}, location, {
	    pathname: location.pathname.substr(base.length)
	  });
	};

	var createLocation = function createLocation(location) {
	  return typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : normalizeLocation(location);
	};

	var createURL = function createURL(location) {
	  return typeof location === 'string' ? location : (0, _PathUtils.createPath)(location);
	};

	var staticHandler = function staticHandler(methodName) {
	  return function () {
	    (0, _invariant2.default)(false, 'You cannot %s with <StaticRouter>', methodName);
	  };
	};

	var noop = function noop() {};

	/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */

	var StaticRouter = function (_React$Component) {
	  _inherits(StaticRouter, _React$Component);

	  function StaticRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, StaticRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
	      return (0, _PathUtils.addLeadingSlash)(_this.props.basename + createURL(path));
	    }, _this.handlePush = function (location) {
	      var _this$props = _this.props,
	          basename = _this$props.basename,
	          context = _this$props.context;

	      context.action = 'PUSH';
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleReplace = function (location) {
	      var _this$props2 = _this.props,
	          basename = _this$props2.basename,
	          context = _this$props2.context;

	      context.action = 'REPLACE';
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleListen = function () {
	      return noop;
	    }, _this.handleBlock = function () {
	      return noop;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  StaticRouter.prototype.getChildContext = function getChildContext() {
	    return {
	      router: {
	        staticContext: this.props.context
	      }
	    };
	  };

	  StaticRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { StaticRouter as Router }`.');
	  };

	  StaticRouter.prototype.render = function render() {
	    var _props = this.props,
	        basename = _props.basename,
	        context = _props.context,
	        location = _props.location,
	        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

	    var history = {
	      createHref: this.createHref,
	      action: 'POP',
	      location: stripBasename(basename, createLocation(location)),
	      push: this.handlePush,
	      replace: this.handleReplace,
	      go: staticHandler('go'),
	      goBack: staticHandler('goBack'),
	      goForward: staticHandler('goForward'),
	      listen: this.handleListen,
	      block: this.handleBlock
	    };

	    return _react2.default.createElement(_Router2.default, _extends({}, props, { history: history }));
	  };

	  return StaticRouter;
	}(_react2.default.Component);

	StaticRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  context: _propTypes2.default.object.isRequired,
	  location: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
	};
	StaticRouter.defaultProps = {
	  basename: '',
	  location: '/'
	};
	StaticRouter.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = StaticRouter;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Switch = __webpack_require__(201);

	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switch2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _warning = __webpack_require__(161);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(172);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _matchPath = __webpack_require__(190);

	var _matchPath2 = _interopRequireDefault(_matchPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for rendering the first <Route> that matches.
	 */
	var Switch = function (_React$Component) {
	  _inherits(Switch, _React$Component);

	  function Switch() {
	    _classCallCheck(this, Switch);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Switch.prototype.componentWillMount = function componentWillMount() {
	    (0, _invariant2.default)(this.context.router, 'You should not use <Switch> outside a <Router>');
	  };

	  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	  };

	  Switch.prototype.render = function render() {
	    var route = this.context.router.route;
	    var children = this.props.children;

	    var location = this.props.location || route.location;

	    var match = void 0,
	        child = void 0;
	    _react2.default.Children.forEach(children, function (element) {
	      if (!_react2.default.isValidElement(element)) return;

	      var _element$props = element.props,
	          pathProp = _element$props.path,
	          exact = _element$props.exact,
	          strict = _element$props.strict,
	          sensitive = _element$props.sensitive,
	          from = _element$props.from;

	      var path = pathProp || from;

	      if (match == null) {
	        child = element;
	        match = path ? (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
	      }
	    });

	    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
	  };

	  return Switch;
	}(_react2.default.Component);

	Switch.contextTypes = {
	  router: _propTypes2.default.shape({
	    route: _propTypes2.default.object.isRequired
	  }).isRequired
	};
	Switch.propTypes = {
	  children: _propTypes2.default.node,
	  location: _propTypes2.default.object
	};
	exports.default = Switch;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _matchPath = __webpack_require__(190);

	var _matchPath2 = _interopRequireDefault(_matchPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _matchPath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _withRouter = __webpack_require__(204);

	var _withRouter2 = _interopRequireDefault(_withRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _withRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _hoistNonReactStatics = __webpack_require__(205);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _Route = __webpack_require__(189);

	var _Route2 = _interopRequireDefault(_Route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A public higher-order component to access the imperative API
	 */
	var withRouter = function withRouter(Component) {
	  var C = function C(props) {
	    var wrappedComponentRef = props.wrappedComponentRef,
	        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

	    return _react2.default.createElement(_Route2.default, { render: function render(routeComponentProps) {
	        return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
	      } });
	  };

	  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
	  C.WrappedComponent = Component;
	  C.propTypes = {
	    wrappedComponentRef: _propTypes2.default.func
	  };

	  return (0, _hoistNonReactStatics2.default)(C, Component);
	};

	exports.default = withRouter;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.hoistNonReactStatics = factory());
	}(this, (function () {
	    'use strict';
	    
	    var REACT_STATICS = {
	        childContextTypes: true,
	        contextTypes: true,
	        defaultProps: true,
	        displayName: true,
	        getDefaultProps: true,
	        getDerivedStateFromProps: true,
	        mixins: true,
	        propTypes: true,
	        type: true
	    };
	    
	    var KNOWN_STATICS = {
	        name: true,
	        length: true,
	        prototype: true,
	        caller: true,
	        callee: true,
	        arguments: true,
	        arity: true
	    };
	    
	    var defineProperty = Object.defineProperty;
	    var getOwnPropertyNames = Object.getOwnPropertyNames;
	    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	    var getPrototypeOf = Object.getPrototypeOf;
	    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	    
	    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	            
	            if (objectPrototype) {
	                var inheritedComponent = getPrototypeOf(sourceComponent);
	                if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	                }
	            }
	            
	            var keys = getOwnPropertyNames(sourceComponent);
	            
	            if (getOwnPropertySymbols) {
	                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	            }
	            
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                    try { // Avoid failures from read-only properties
	                        defineProperty(targetComponent, key, descriptor);
	                    } catch (e) {}
	                }
	            }
	            
	            return targetComponent;
	        }
	        
	        return targetComponent;
	    };
	})));


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AccountInfoSegment = __webpack_require__(207);

	var _AccountInfoSegment2 = _interopRequireDefault(_AccountInfoSegment);

	var _Intro = __webpack_require__(912);

	var _Intro2 = _interopRequireDefault(_Intro);

	var _semanticUiReact = __webpack_require__(209);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App1Container = function (_React$Component) {
	    _inherits(App1Container, _React$Component);

	    function App1Container(props) {
	        _classCallCheck(this, App1Container);

	        var _this = _possibleConstructorReturn(this, (App1Container.__proto__ || Object.getPrototypeOf(App1Container)).call(this, props));

	        console.log(props);
	        _this.path = "";

	        return _this;
	    }

	    _createClass(App1Container, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                _semanticUiReact.Container,
	                { fluid: true },
	                _react2.default.createElement(_Intro2.default, { dynamic: "true" }),
	                _react2.default.createElement(_AccountInfoSegment2.default, null)
	            );
	        }
	    }]);

	    return App1Container;
	}(_react2.default.Component);

	exports.default = App1Container;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SignForm = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/SignForm\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _SignForm2 = _interopRequireDefault(_SignForm);

	var _semanticUiReact = __webpack_require__(209);

	var _propTypes = __webpack_require__(162);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccountInfoSegment = function (_React$Component) {
	    _inherits(AccountInfoSegment, _React$Component);

	    function AccountInfoSegment(props, context) {
	        _classCallCheck(this, AccountInfoSegment);

	        var _this = _possibleConstructorReturn(this, (AccountInfoSegment.__proto__ || Object.getPrototypeOf(AccountInfoSegment)).call(this, props));

	        _this.web3Context = context.web3;
	        _this.state = {
	            accounts: []
	        };
	        for (var i = 0; i < _this.web3Context.accounts.length; i++) {
	            _this.state.accounts.push({ key: _this.web3Context.accounts[i], value: _this.web3Context.accounts[i], text: _this.web3Context.accounts[i] });
	        }

	        console.log(_this.state.accounts);
	        return _this;
	    }

	    _createClass(AccountInfoSegment, [{
	        key: "showAccounts",
	        value: function showAccounts() {
	            return this.state.accounts.map(function (acct) {
	                console.log(acct.text);
	                return _react2.default.createElement(
	                    "strong",
	                    { key: acct.key },
	                    acct.text
	                );
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var accts = this.showAccounts();
	            console.log(accts);
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_semanticUiReact.Divider, null),
	                _react2.default.createElement(
	                    _semanticUiReact.Grid,
	                    { columns: 2 },
	                    _react2.default.createElement(
	                        _semanticUiReact.Grid.Column,
	                        null,
	                        _react2.default.createElement(
	                            _semanticUiReact.Segment,
	                            { basic: true },
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "Now that you have your account, you can interact with the Ethereum blockchain."
	                            ),
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "Think of the blockchain as a global database that anyone can put information information and anyone can pull information out of. Now, you may ask, \"why would I want to have a database that anyone can write to?\""
	                            ),
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "Well, that sort of database is great when you have parties that don't trust each other. Let's say we have ",
	                                _react2.default.createElement(
	                                    "em",
	                                    null,
	                                    "Acme Inc"
	                                ),
	                                ", who wants to do sell gizmos to ",
	                                _react2.default.createElement(
	                                    "em",
	                                    null,
	                                    "Foobar Industries"
	                                ),
	                                ". And let's say we have a third party, ",
	                                _react2.default.createElement(
	                                    "em",
	                                    null,
	                                    "the City of Los Angeles"
	                                ),
	                                ", who is in charge of oversight of the deal."
	                            ),
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "Because anyone can view entries on the blockchain, ",
	                                _react2.default.createElement(
	                                    "em",
	                                    null,
	                                    "the City of Los Angeles"
	                                ),
	                                ", can view the transaction between the two busineses. This means that ",
	                                _react2.default.createElement(
	                                    "em",
	                                    null,
	                                    "Acme Inc"
	                                ),
	                                " can do their due diligence by inspecting the transaction that was made with",
	                                _react2.default.createElement(
	                                    "em",
	                                    null,
	                                    "Foobar Industries"
	                                ),
	                                ". Since there is no way to alter the information after it has been added to the blockchain, one can track an assest -- like a gizmo -- back through all of it owners. This makes it easy to reconile conflicts since the blockchain acts as a",
	                                _react2.default.createElement(
	                                    "em",
	                                    null,
	                                    "single source of truth"
	                                ),
	                                ". "
	                            ),
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "The other benefit of the blockchain is that it is distributed. This means that it doesn't just reside on the",
	                                _react2.default.createElement(
	                                    "em",
	                                    null,
	                                    "Acme Inc"
	                                ),
	                                " computers or the ",
	                                _react2.default.createElement(
	                                    "em",
	                                    null,
	                                    "Foobar Industries"
	                                ),
	                                " computers. It's spread out over many computers all over the world and untamperable."
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _semanticUiReact.Segment,
	                            { basic: true },
	                            _react2.default.createElement(_SignForm2.default, null)
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _semanticUiReact.Grid.Column,
	                        null,
	                        _react2.default.createElement(
	                            _semanticUiReact.Segment,
	                            { basic: true },
	                            _react2.default.createElement(
	                                _semanticUiReact.Message,
	                                { info: true },
	                                _react2.default.createElement(
	                                    _semanticUiReact.Message.Header,
	                                    null,
	                                    "Account Info:"
	                                ),
	                                accts
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return AccountInfoSegment;
	}(_react2.default.Component);

	exports.default = AccountInfoSegment;


	AccountInfoSegment.contextTypes = {
	    web3: _propTypes2.default.object
	};

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _semanticUiReact = __webpack_require__(209);

	var _BlockchainViz = __webpack_require__(913);

	var _BlockchainViz2 = _interopRequireDefault(_BlockchainViz);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Intro = function (_React$Component) {
	    _inherits(Intro, _React$Component);

	    function Intro(props, context) {
	        _classCallCheck(this, Intro);

	        var _this = _possibleConstructorReturn(this, (Intro.__proto__ || Object.getPrototypeOf(Intro)).call(this, props));

	        _this.state = {
	            dynamic: props.dynamic
	        };
	        return _this;
	    }

	    _createClass(Intro, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_BlockchainViz2.default, { dynamic: this.state.dynamic }),
	                _react2.default.createElement(
	                    _semanticUiReact.Segment,
	                    { basic: true },
	                    _react2.default.createElement(
	                        _semanticUiReact.Header,
	                        { as: 'h1' },
	                        'A primer on blockchain technology'
	                    )
	                ),
	                _react2.default.createElement(
	                    _semanticUiReact.Grid,
	                    { verticalAlign: 'top' },
	                    _react2.default.createElement(
	                        _semanticUiReact.Grid.Row,
	                        { columns: 2 },
	                        _react2.default.createElement(
	                            _semanticUiReact.Grid.Column,
	                            null,
	                            _react2.default.createElement(
	                                _semanticUiReact.Segment,
	                                { basic: true },
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    'There has been alot of talk about blockchain technology and how it can change different industries. This site aims to be a primer to understanding blockchain technology and how the Ethereum platform fits into the overall picture.'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    'To get started, you should first create an account on the blockchain. An is your entry point on the blockchain. This is how other applications will interact with you and you will make transactions on the blockchain.'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    'You can create an account on the blockchain by ',
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: 'https://metamask.io/', target: '_blank' },
	                                        'downloading the MetaMask browser plugin.'
	                                    ),
	                                    ' Simply follow the directions on their download page and refresh this page. You should see your account information below if you have done this correct'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _semanticUiReact.Grid.Column,
	                            null,
	                            _react2.default.createElement(
	                                _semanticUiReact.Segment,
	                                { basic: true },
	                                _react2.default.createElement(
	                                    _semanticUiReact.Message,
	                                    { color: 'teal' },
	                                    _react2.default.createElement(
	                                        _semanticUiReact.Message.Header,
	                                        null,
	                                        'Key Terms'
	                                    ),
	                                    _react2.default.createElement(
	                                        'p',
	                                        null,
	                                        _react2.default.createElement(
	                                            'strong',
	                                            null,
	                                            'Account'
	                                        ),
	                                        _react2.default.createElement('br', null),
	                                        'Each user of the blockchain has an account. This how they are identified uniquely on the blockchain. Creating an account will create a private key that is stored on your computer. This key unlocks your account and lets you sign transactions. If you lose it, effectively this means that anyone can impersonate you on the blockchain and make transactions on your behalf. It is VERY IMPORTAT that you keep your private key safe.'
	                                    ),
	                                    _react2.default.createElement(
	                                        'p',
	                                        null,
	                                        _react2.default.createElement(
	                                            'strong',
	                                            null,
	                                            'Blockchain'
	                                        ),
	                                        _react2.default.createElement('br', null),
	                                        'A distributed database that is cryptographically secure and that acts as source of truth in a system.'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Intro;
	}(_react2.default.Component);

	exports.default = Intro;

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ModalResponse = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/ModalResponse\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _ModalResponse2 = _interopRequireDefault(_ModalResponse);

	var _djangoChannels = __webpack_require__(915);

	var _base64Url = __webpack_require__(917);

	var _base64Url2 = _interopRequireDefault(_base64Url);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BlockChainViz = function (_React$Component) {
	    _inherits(BlockChainViz, _React$Component);

	    function BlockChainViz(props, context) {
	        _classCallCheck(this, BlockChainViz);

	        var _this = _possibleConstructorReturn(this, (BlockChainViz.__proto__ || Object.getPrototypeOf(BlockChainViz)).call(this, props));

	        _this.pJS = null;
	        _this.state = {
	            modal: {
	                open: false,
	                message: ""
	            },
	            dynamic: props.dynamic,
	            socketState: 0,
	            availableTransactions: [],
	            lastTransaction: null
	        };

	        if (props.dynamic) {
	            _this.bridge = new _djangoChannels.WebSocketBridge();
	            _this.bridge.connect("/filter/");
	        }
	        return _this;
	    }

	    _createClass(BlockChainViz, [{
	        key: "showModal",
	        value: function showModal() {
	            console.log(this.state);
	            if (this.state.availableTransactions == undefined || this.state.availableTransactions.length === 0) {
	                this.setState({
	                    modal: {
	                        open: true,
	                        message: "Awaiting new information to be processed on the blockchain..."
	                    } });
	                return;
	            }
	            this.path = window.location.origin + "/r";

	            var rndIdx = Math.floor(Math.random() * Math.floor(this.state.availableTransactions.length));
	            this.path = this.state.availableTransactions[rndIdx];
	            console.log(this.path);
	            var self = this;
	            this.setState({
	                modal: {
	                    open: true,
	                    title: "Latest Transaction from the Ethereum Test Network",
	                    message: _react2.default.createElement(
	                        "div",
	                        null,
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            _react2.default.createElement(
	                                "strong",
	                                null,
	                                "To:"
	                            ),
	                            " ",
	                            self.path.to
	                        ),
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            _react2.default.createElement(
	                                "strong",
	                                null,
	                                "From:"
	                            ),
	                            self.path.from,
	                            " "
	                        ),
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            _react2.default.createElement(
	                                "strong",
	                                null,
	                                "Value:"
	                            ),
	                            web3.fromWei(self.path.value, 'ether'),
	                            " Ether"
	                        ),
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            _react2.default.createElement(
	                                "strong",
	                                null,
	                                "Data:"
	                            ),
	                            self.path.data
	                        )
	                    )
	                } });
	        }
	    }, {
	        key: "sendWSMessage",
	        value: function sendWSMessage(data) {
	            if (this.state.socketState === 1) {
	                console.log("sending data to server");
	                console.log(data);
	                this.bridge.send(data);
	            } else {
	                var that = this;
	                // optional: implement backoff for interval here
	                setTimeout(function () {
	                    that.sendWSMessage(data);
	                }, 200);
	            }
	        }
	    }, {
	        key: "handleModalState",
	        value: function handleModalState(state) {
	            this.setState({
	                modal: {
	                    open: state
	                }
	            });
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            var self = this;
	            if (this.state.dynamic) {
	                this.bridge.socket.addEventListener("open", function () {
	                    console.log("opened a socket connection");
	                    self.setState({
	                        socketState: WebSocket.OPEN
	                    });
	                });

	                this.bridge.socket.addEventListener("close", function () {
	                    console.log("closed a socket connection");
	                    self.setState({
	                        socketState: WebSocket.CLOSED
	                    });
	                });
	                this.bridge.socket.addEventListener("message", function (msg) {
	                    console.log(JSON.parse(msg.data));
	                    var blockInfo = JSON.parse(msg.data);
	                    if (blockInfo.error) {
	                        //we don't have any blocks right now, so send out another request
	                        _this2.sendWSMessage({ "check": true });
	                    } else {
	                        console.log(blockInfo);
	                        _this2.setState({
	                            availableTransactions: blockInfo.transactions,
	                            lastTransaction: blockInfo.time
	                        });
	                    }
	                });

	                //set a timer to periodically send a message back to the server to check
	                //for new blocks
	                setInterval(function () {
	                    self.sendWSMessage({ "check": true });
	                }, 20000);
	            }
	            //-----
	            this.pJS = window.particlesJS("block", {
	                particles: {
	                    number: {
	                        value: 20
	                    },
	                    shape: {
	                        type: "polygon",
	                        stroke: {
	                            width: 3,
	                            color: "#000000"
	                        },
	                        polygon: {
	                            nb_sides: 4
	                        }
	                    },
	                    size: {
	                        value: 30,
	                        random: false
	                    },
	                    line_linked: {
	                        enable: true,
	                        distance: 800
	                    },
	                    move: {
	                        attract: {
	                            enable: false
	                        },
	                        bounce: false,
	                        speed: 5,
	                        straight: false,
	                        random: true,
	                        out_mode: "out"
	                    },
	                    interactivity: {
	                        events: {
	                            onclick: {
	                                enable: true,
	                                mode: "push"
	                            },
	                            modes: {
	                                push: {
	                                    particles_nb: 1
	                                }
	                            }
	                        }
	                    }
	                }
	            });

	            window.particlesJS.setOnClickHandler(function (e) {
	                if (self.state.dynamic) {
	                    self.showModal();
	                }
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_ModalResponse2.default, { type: "Success", title: this.state.modal.title, open: this.state.modal.open, message: this.state.modal.message, handleFormState: this.handleModalState.bind(this) }),
	                _react2.default.createElement("div", { className: "graph", id: "block" })
	            );
	        }
	    }]);

	    return BlockChainViz;
	}(_react2.default.Component);

	exports.default = BlockChainViz;

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WebSocketBridge = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reconnectingWebsocket = __webpack_require__(916);

	var _reconnectingWebsocket2 = _interopRequireDefault(_reconnectingWebsocket);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Bridge between Channels and plain javascript.
	 *
	 * @example
	 * const webSocketBridge = new WebSocketBridge();
	 * webSocketBridge.connect();
	 * webSocketBridge.listen(function(action, stream) {
	 *   console.log(action, stream);
	 * });
	 */
	var WebSocketBridge = function () {
	  function WebSocketBridge(options) {
	    _classCallCheck(this, WebSocketBridge);

	    /**
	     * The underlaying `ReconnectingWebSocket` instance.
	     * 
	     * @type {ReconnectingWebSocket}
	     */
	    this.socket = null;
	    this.streams = {};
	    this.default_cb = null;
	    this.options = _extends({}, options);
	  }

	  /**
	   * Connect to the websocket server
	   *
	   * @param      {String}  [url]     The url of the websocket. Defaults to
	   * `window.location.host`
	   * @param      {String[]|String}  [protocols] Optional string or array of protocols.
	   * @param      {Object} options Object of options for [`reconnecting-websocket`](https://github.com/joewalnes/reconnecting-websocket#options-1).
	   * @example
	   * const webSocketBridge = new WebSocketBridge();
	   * webSocketBridge.connect();
	   */


	  _createClass(WebSocketBridge, [{
	    key: 'connect',
	    value: function connect(url, protocols, options) {
	      var _url = void 0;
	      // Use wss:// if running on https://
	      var scheme = window.location.protocol === 'https:' ? 'wss' : 'ws';
	      var base_url = scheme + '://' + window.location.host;
	      if (url === undefined) {
	        _url = base_url;
	      } else {
	        // Support relative URLs
	        if (url[0] == '/') {
	          _url = '' + base_url + url;
	        } else {
	          _url = url;
	        }
	      }
	      this.socket = new _reconnectingWebsocket2.default(_url, protocols, options);
	    }

	    /**
	     * Starts listening for messages on the websocket, demultiplexing if necessary.
	     *
	     * @param      {Function}  [cb]         Callback to be execute when a message
	     * arrives. The callback will receive `action` and `stream` parameters
	     *
	     * @example
	     * const webSocketBridge = new WebSocketBridge();
	     * webSocketBridge.connect();
	     * webSocketBridge.listen(function(action, stream) {
	     *   console.log(action, stream);
	     * });
	     */

	  }, {
	    key: 'listen',
	    value: function listen(cb) {
	      var _this = this;

	      this.default_cb = cb;
	      this.socket.onmessage = function (event) {
	        var msg = JSON.parse(event.data);
	        var action = void 0;
	        var stream = void 0;

	        if (msg.stream !== undefined) {
	          action = msg.payload;
	          stream = msg.stream;
	          var stream_cb = _this.streams[stream];
	          stream_cb ? stream_cb(action, stream) : null;
	        } else {
	          action = msg;
	          stream = null;
	          _this.default_cb ? _this.default_cb(action, stream) : null;
	        }
	      };
	    }

	    /**
	     * Adds a 'stream handler' callback. Messages coming from the specified stream
	     * will call the specified callback.
	     *
	     * @param      {String}    stream  The stream name
	     * @param      {Function}  cb      Callback to be execute when a message
	     * arrives. The callback will receive `action` and `stream` parameters.
	      * @example
	     * const webSocketBridge = new WebSocketBridge();
	     * webSocketBridge.connect();
	     * webSocketBridge.listen();
	     * webSocketBridge.demultiplex('mystream', function(action, stream) {
	     *   console.log(action, stream);
	     * });
	     * webSocketBridge.demultiplex('myotherstream', function(action, stream) {
	     *   console.info(action, stream);
	     * });
	     */

	  }, {
	    key: 'demultiplex',
	    value: function demultiplex(stream, cb) {
	      this.streams[stream] = cb;
	    }

	    /**
	     * Sends a message to the reply channel.
	     *
	     * @param      {Object}  msg     The message
	     *
	     * @example
	     * webSocketBridge.send({prop1: 'value1', prop2: 'value1'});
	     */

	  }, {
	    key: 'send',
	    value: function send(msg) {
	      this.socket.send(JSON.stringify(msg));
	    }

	    /**
	     * Returns an object to send messages to a specific stream
	     *
	     * @param      {String}  stream  The stream name
	     * @return     {Object}  convenience object to send messages to `stream`.
	     * @example
	     * webSocketBridge.stream('mystream').send({prop1: 'value1', prop2: 'value1'})
	     */

	  }, {
	    key: 'stream',
	    value: function stream(_stream) {
	      var _this2 = this;

	      return {
	        send: function send(action) {
	          var msg = {
	            stream: _stream,
	            payload: action
	          };
	          _this2.socket.send(JSON.stringify(msg));
	        }
	      };
	    }
	  }]);

	  return WebSocketBridge;
	}();

	exports.WebSocketBridge = WebSocketBridge;

/***/ }),

/***/ 916:
/***/ (function(module, exports) {

	"use strict";
	;
	;
	;
	var isWebSocket = function (constructor) {
	    return constructor && constructor.CLOSING === 2;
	};
	var isGlobalWebSocket = function () {
	    return typeof WebSocket !== 'undefined' && isWebSocket(WebSocket);
	};
	var getDefaultOptions = function () { return ({
	    constructor: isGlobalWebSocket() ? WebSocket : null,
	    maxReconnectionDelay: 10000,
	    minReconnectionDelay: 1500,
	    reconnectionDelayGrowFactor: 1.3,
	    connectionTimeout: 4000,
	    maxRetries: Infinity,
	    debug: false,
	}); };
	var bypassProperty = function (src, dst, name) {
	    Object.defineProperty(dst, name, {
	        get: function () { return src[name]; },
	        set: function (value) { src[name] = value; },
	        enumerable: true,
	        configurable: true,
	    });
	};
	var initReconnectionDelay = function (config) {
	    return (config.minReconnectionDelay + Math.random() * config.minReconnectionDelay);
	};
	var updateReconnectionDelay = function (config, previousDelay) {
	    var newDelay = previousDelay * config.reconnectionDelayGrowFactor;
	    return (newDelay > config.maxReconnectionDelay)
	        ? config.maxReconnectionDelay
	        : newDelay;
	};
	var LEVEL_0_EVENTS = ['onopen', 'onclose', 'onmessage', 'onerror'];
	var reassignEventListeners = function (ws, oldWs, listeners) {
	    Object.keys(listeners).forEach(function (type) {
	        listeners[type].forEach(function (_a) {
	            var listener = _a[0], options = _a[1];
	            ws.addEventListener(type, listener, options);
	        });
	    });
	    if (oldWs) {
	        LEVEL_0_EVENTS.forEach(function (name) {
	            ws[name] = oldWs[name];
	        });
	    }
	};
	var ReconnectingWebsocket = function (url, protocols, options) {
	    var _this = this;
	    if (options === void 0) { options = {}; }
	    var ws;
	    var connectingTimeout;
	    var reconnectDelay = 0;
	    var retriesCount = 0;
	    var shouldRetry = true;
	    var savedOnClose = null;
	    var listeners = {};
	    // require new to construct
	    if (!(this instanceof ReconnectingWebsocket)) {
	        throw new TypeError("Failed to construct 'ReconnectingWebSocket': Please use the 'new' operator");
	    }
	    // Set config. Not using `Object.assign` because of IE11
	    var config = getDefaultOptions();
	    Object.keys(config)
	        .filter(function (key) { return options.hasOwnProperty(key); })
	        .forEach(function (key) { return config[key] = options[key]; });
	    if (!isWebSocket(config.constructor)) {
	        throw new TypeError('Invalid WebSocket constructor. Set `options.constructor`');
	    }
	    var log = config.debug ? function () {
	        var params = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            params[_i] = arguments[_i];
	        }
	        return console.log.apply(console, ['RWS:'].concat(params));
	    } : function () { };
	    /**
	     * Not using dispatchEvent, otherwise we must use a DOM Event object
	     * Deferred because we want to handle the close event before this
	     */
	    var emitError = function (code, msg) { return setTimeout(function () {
	        var err = new Error(msg);
	        err.code = code;
	        if (Array.isArray(listeners.error)) {
	            listeners.error.forEach(function (_a) {
	                var fn = _a[0];
	                return fn(err);
	            });
	        }
	        if (ws.onerror) {
	            ws.onerror(err);
	        }
	    }, 0); };
	    var handleClose = function () {
	        log('handleClose', { shouldRetry: shouldRetry });
	        retriesCount++;
	        log('retries count:', retriesCount);
	        if (retriesCount > config.maxRetries) {
	            emitError('EHOSTDOWN', 'Too many failed connection attempts');
	            return;
	        }
	        if (!reconnectDelay) {
	            reconnectDelay = initReconnectionDelay(config);
	        }
	        else {
	            reconnectDelay = updateReconnectionDelay(config, reconnectDelay);
	        }
	        log('handleClose - reconnectDelay:', reconnectDelay);
	        if (shouldRetry) {
	            setTimeout(connect, reconnectDelay);
	        }
	    };
	    var connect = function () {
	        if (!shouldRetry) {
	            return;
	        }
	        log('connect');
	        var oldWs = ws;
	        var wsUrl = (typeof url === 'function') ? url() : url;
	        ws = new config.constructor(wsUrl, protocols);
	        connectingTimeout = setTimeout(function () {
	            log('timeout');
	            ws.close();
	            emitError('ETIMEDOUT', 'Connection timeout');
	        }, config.connectionTimeout);
	        log('bypass properties');
	        for (var key in ws) {
	            // @todo move to constant
	            if (['addEventListener', 'removeEventListener', 'close', 'send'].indexOf(key) < 0) {
	                bypassProperty(ws, _this, key);
	            }
	        }
	        ws.addEventListener('open', function () {
	            clearTimeout(connectingTimeout);
	            log('open');
	            reconnectDelay = initReconnectionDelay(config);
	            log('reconnectDelay:', reconnectDelay);
	            retriesCount = 0;
	        });
	        ws.addEventListener('close', handleClose);
	        reassignEventListeners(ws, oldWs, listeners);
	        // because when closing with fastClose=true, it is saved and set to null to avoid double calls
	        ws.onclose = ws.onclose || savedOnClose;
	        savedOnClose = null;
	    };
	    log('init');
	    connect();
	    this.close = function (code, reason, _a) {
	        if (code === void 0) { code = 1000; }
	        if (reason === void 0) { reason = ''; }
	        var _b = _a === void 0 ? {} : _a, _c = _b.keepClosed, keepClosed = _c === void 0 ? false : _c, _d = _b.fastClose, fastClose = _d === void 0 ? true : _d, _e = _b.delay, delay = _e === void 0 ? 0 : _e;
	        log('close - params:', { reason: reason, keepClosed: keepClosed, fastClose: fastClose, delay: delay, retriesCount: retriesCount, maxRetries: config.maxRetries });
	        shouldRetry = !keepClosed && retriesCount <= config.maxRetries;
	        if (delay) {
	            reconnectDelay = delay;
	        }
	        ws.close(code, reason);
	        if (fastClose) {
	            var fakeCloseEvent_1 = {
	                code: code,
	                reason: reason,
	                wasClean: true,
	            };
	            // execute close listeners soon with a fake closeEvent
	            // and remove them from the WS instance so they
	            // don't get fired on the real close.
	            handleClose();
	            ws.removeEventListener('close', handleClose);
	            // run and remove level2
	            if (Array.isArray(listeners.close)) {
	                listeners.close.forEach(function (_a) {
	                    var listener = _a[0], options = _a[1];
	                    listener(fakeCloseEvent_1);
	                    ws.removeEventListener('close', listener, options);
	                });
	            }
	            // run and remove level0
	            if (ws.onclose) {
	                savedOnClose = ws.onclose;
	                ws.onclose(fakeCloseEvent_1);
	                ws.onclose = null;
	            }
	        }
	    };
	    this.send = function (data) {
	        ws.send(data);
	    };
	    this.addEventListener = function (type, listener, options) {
	        if (Array.isArray(listeners[type])) {
	            if (!listeners[type].some(function (_a) {
	                var l = _a[0];
	                return l === listener;
	            })) {
	                listeners[type].push([listener, options]);
	            }
	        }
	        else {
	            listeners[type] = [[listener, options]];
	        }
	        ws.addEventListener(type, listener, options);
	    };
	    this.removeEventListener = function (type, listener, options) {
	        if (Array.isArray(listeners[type])) {
	            listeners[type] = listeners[type].filter(function (_a) {
	                var l = _a[0];
	                return l !== listener;
	            });
	        }
	        ws.removeEventListener(type, listener, options);
	    };
	};
	module.exports = ReconnectingWebsocket;


/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict'

	module.exports = {
	  unescape,
	  escape,
	  encode,
	  decode
	}

	function unescape (str) {
	  return (str + '==='.slice((str.length + 3) % 4))
	    .replace(/-/g, '+')
	    .replace(/_/g, '/')
	}

	function escape (str) {
	  return str.replace(/\+/g, '-')
	    .replace(/\//g, '_')
	    .replace(/=/g, '')
	}

	function encode (str, encoding) {
	  return escape(Buffer.from(str, encoding || 'utf8').toString('base64'))
	}

	function decode (str, encoding) {
	  return Buffer.from(unescape(str), 'base64').toString(encoding || 'utf8')
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(918).Buffer))

/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(919)
	var ieee754 = __webpack_require__(920)
	var isArray = __webpack_require__(921)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 919:
/***/ (function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return (b64.length * 3 / 4) - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr((len * 3 / 4) - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0; i < l; i += 4) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ }),

/***/ 920:
/***/ (function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ }),

/***/ 921:
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, {
	/******/ 				configurable: false,
	/******/ 				enumerable: true,
	/******/ 				get: getter
	/******/ 			});
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 2);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports) {

	module.exports = __webpack_require__(1);

	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	var React = __webpack_require__(0);
	var IconNoWeb3 = __webpack_require__(7);
	var stylesheet = __webpack_require__(8);

	function ErrorTemplate(props) {
	  return React.createElement(
	    'div',
	    { className: 'Web3Provider-container' },
	    React.createElement('style', { dangerouslySetInnerHTML: { __html: stylesheet }
	    }),
	    React.createElement(
	      'div',
	      { className: 'Web3Provider-wrapper' },
	      React.createElement(
	        'div',
	        { className: 'Web3Provider-image' },
	        React.createElement(IconNoWeb3, null)
	      ),
	      React.createElement('h1', {
	        className: 'Web3Provider-title',
	        dangerouslySetInnerHTML: { __html: props.title }
	      }),
	      React.createElement('p', {
	        className: 'Web3Provider-message',
	        dangerouslySetInnerHTML: { __html: props.message }
	      })
	    )
	  );
	}

	module.exports = ErrorTemplate;

	/***/ }),
	/* 2 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	var Web3Provider = __webpack_require__(3);
	var ErrorTemplate = __webpack_require__(1);

	module.exports.Web3Provider = Web3Provider;
	module.exports.ErrorTemplate = ErrorTemplate;

	module.exports = {
	  Web3Provider: Web3Provider,
	  ErrorTemplate: ErrorTemplate
	};

	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(0);
	var PropTypes = __webpack_require__(4);
	var isEmpty = __webpack_require__(5);
	var AccountUnavailable = __webpack_require__(6);
	var Web3Unavailable = __webpack_require__(9);

	var ONE_SECOND = 1000;
	var ONE_MINUTE = ONE_SECOND * 60;
	var propTypes = {
	  web3UnavailableScreen: PropTypes.any,
	  accountUnavailableScreen: PropTypes.any,
	  onChangeAccount: PropTypes.func
	};
	var defaultProps = {
	  passive: false,
	  web3UnavailableScreen: Web3Unavailable,
	  accountUnavailableScreen: AccountUnavailable
	};
	var childContextTypes = {
	  web3: PropTypes.shape({
	    accounts: PropTypes.array,
	    selectedAccount: PropTypes.string,
	    network: PropTypes.string,
	    networkId: PropTypes.string
	  })
	};

	var Web3Provider = function (_React$Component) {
	  _inherits(Web3Provider, _React$Component);

	  function Web3Provider(props, context) {
	    _classCallCheck(this, Web3Provider);

	    var _this = _possibleConstructorReturn(this, (Web3Provider.__proto__ || Object.getPrototypeOf(Web3Provider)).call(this, props, context));

	    var accounts = _this.getAccounts();

	    _this.state = {
	      accounts: accounts,
	      networkId: null,
	      networkError: null
	    };
	    _this.interval = null;
	    _this.networkInterval = null;
	    _this.fetchAccounts = _this.fetchAccounts.bind(_this);
	    _this.fetchNetwork = _this.fetchNetwork.bind(_this);

	    if (accounts) {
	      _this.handleAccounts(accounts, true);
	    }
	    return _this;
	  }

	  _createClass(Web3Provider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        web3: {
	          accounts: this.state.accounts,
	          selectedAccount: this.state.accounts && this.state.accounts[0],
	          network: getNetwork(this.state.networkId),
	          networkId: this.state.networkId
	        }
	      };
	    }

	    /**
	     * Start polling accounts, & network. We poll indefinitely so that we can
	     * react to the user changing accounts or netowrks.
	     */

	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.fetchAccounts();
	      this.fetchNetwork();
	      this.initPoll();
	      this.initNetworkPoll();
	    }

	    /**
	     * Init web3/account polling, and prevent duplicate interval.
	     * @return {void}
	     */

	  }, {
	    key: 'initPoll',
	    value: function initPoll() {
	      if (!this.interval) {
	        this.interval = setInterval(this.fetchAccounts, ONE_SECOND);
	      }
	    }

	    /**
	     * Init network polling, and prevent duplicate intervals.
	     * @return {void}
	     */

	  }, {
	    key: 'initNetworkPoll',
	    value: function initNetworkPoll() {
	      if (!this.networkInterval) {
	        this.networkInterval = setInterval(this.fetchNetwork, ONE_MINUTE);
	      }
	    }

	    /**
	     * Update state regarding the availability of web3 and an ETH account.
	     * @return {void}
	     */

	  }, {
	    key: 'fetchAccounts',
	    value: function fetchAccounts() {
	      var _this2 = this;

	      var _window = window,
	          web3 = _window.web3;

	      var ethAccounts = this.getAccounts();

	      if (isEmpty(ethAccounts)) {
	        web3 && web3.eth && web3.eth.getAccounts(function (err, accounts) {
	          if (err) {
	            _this2.setState({
	              accountsError: err
	            });
	          } else {
	            _this2.handleAccounts(accounts);
	          }
	        });
	      } else {
	        this.handleAccounts(ethAccounts);
	      }
	    }
	  }, {
	    key: 'handleAccounts',
	    value: function handleAccounts(accounts) {
	      var isConstructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var onChangeAccount = this.props.onChangeAccount;
	      var store = this.context.store;

	      var next = accounts[0];
	      var curr = this.state.accounts[0];
	      next = next && next.toLowerCase();
	      curr = curr && curr.toLowerCase();
	      var didChange = curr && next && curr !== next;

	      if (isEmpty(this.state.accounts) && !isEmpty(accounts)) {
	        this.setState({
	          accountsError: null,
	          accounts: accounts
	        });
	      }

	      if (didChange && !isConstructor) {
	        this.setState({
	          accountsError: null,
	          accounts: accounts
	        });
	      }

	      // If provided, execute callback
	      if (didChange && typeof onChangeAccount === 'function') {
	        onChangeAccount(next);
	      }

	      // If available, dispatch redux action
	      if (store && typeof store.dispatch === 'function') {
	        var didDefine = !curr && next;

	        if (didDefine || isConstructor && next) {
	          store.dispatch({
	            type: 'web3/RECEIVE_ACCOUNT',
	            address: next
	          });
	        } else if (didChange) {
	          store.dispatch({
	            type: 'web3/CHANGE_ACCOUNT',
	            address: next
	          });
	        }
	      }
	    }

	    /**
	     * Get the network and update state accordingly.
	     * @return {void}
	     */

	  }, {
	    key: 'fetchNetwork',
	    value: function fetchNetwork() {
	      var _this3 = this;

	      var _window2 = window,
	          web3 = _window2.web3;


	      web3 && web3.version && web3.version.getNetwork(function (err, netId) {
	        if (err) {
	          _this3.setState({
	            networkError: err
	          });
	        } else {
	          if (netId != _this3.state.networkId) {
	            _this3.setState({
	              networkError: null,
	              networkId: netId
	            });
	          }
	        }
	      });
	    }

	    /**
	     * Get the account. We wrap in try/catch because reading `web3.eth.accounrs`
	     * will throw if no account is selected.
	     * @return {String}
	     */

	  }, {
	    key: 'getAccounts',
	    value: function getAccounts() {
	      try {
	        var _window3 = window,
	            web3 = _window3.web3;
	        // throws if no account selected

	        var accounts = web3.eth.accounts;

	        return accounts;
	      } catch (e) {
	        return [];
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _window4 = window,
	          web3 = _window4.web3;
	      var _props = this.props,
	          passive = _props.passive,
	          Web3UnavailableComponent = _props.web3UnavailableScreen,
	          AccountUnavailableComponent = _props.accountUnavailableScreen;


	      if (passive) {
	        return this.props.children;
	      }

	      if (!web3) {
	        return React.createElement(Web3UnavailableComponent, null);
	      }

	      if (isEmpty(this.state.accounts)) {
	        return React.createElement(AccountUnavailableComponent, null);
	      }

	      return this.props.children;
	    }
	  }]);

	  return Web3Provider;
	}(React.Component);

	Web3Provider.contextTypes = {
	  store: PropTypes.object
	};


	Web3Provider.propTypes = propTypes;
	Web3Provider.defaultProps = defaultProps;
	Web3Provider.childContextTypes = childContextTypes;

	module.exports = Web3Provider;

	/* =============================================================================
	=    Deps
	============================================================================= */
	function getNetwork(networkId) {
	  switch (networkId) {
	    case '1':
	      return 'MAINNET';
	    case '2':
	      return 'MORDEN';
	    case '3':
	      return 'ROPSTEN';
	    default:
	      return 'UNKNOWN';
	  }
	}

	/***/ }),
	/* 4 */
	/***/ (function(module, exports) {

	module.exports = __webpack_require__(162);

	/***/ }),
	/* 5 */
	/***/ (function(module, exports) {

	module.exports = __webpack_require__(454);

	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	var React = __webpack_require__(0);
	var ErrorTemplate = __webpack_require__(1);

	var AccountUnavailable = ErrorTemplate.bind(null, {
	  title: 'No ETH Account Available',
	  message: '\nIt seems that you don&apos;t have an ETH account selected. If using\nMetaMask, please make sure that your wallet is unlocked and that\nyou have at least one account in your accounts list.'
	});

	module.exports = AccountUnavailable;

	/***/ }),
	/* 7 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function IconNoWeb3(props) {
	  return _react2.default.createElement(
	    "svg",
	    { width: "100%", height: "100%", viewBox: "0 0 332 417", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
	    _react2.default.createElement(
	      "defs",
	      null,
	      _react2.default.createElement("path", { d: "M198.610685,43.1017808 C107.24977,43.1017808 33.1017808,117.24977 33.1017808,208.610685 C33.1017808,299.971599 107.24977,374.119588 198.610685,374.119588 C289.971599,374.119588 364.119588,299.971599 364.119588,208.610685 C364.119588,117.24977 289.971599,43.1017808 198.610685,43.1017808 L198.610685,43.1017808 Z M198.610685,341.017808 C125.455749,341.017808 66.2035615,281.76562 66.2035615,208.610685 C66.2035615,177.991537 76.6306225,149.855024 94.1745663,127.511322 L279.710047,313.046803 C257.366345,330.590747 229.229832,341.017808 198.610685,341.017808 L198.610685,341.017808 Z M303.046803,289.710047 L117.511322,104.174566 C139.855024,86.6306225 167.991537,76.2035615 198.610685,76.2035615 C271.76562,76.2035615 331.017808,135.455749 331.017808,208.610685 C331.017808,239.229832 320.590747,267.366345 303.046803,289.710047 L303.046803,289.710047 Z", id: "path-1" })
	    ),
	    _react2.default.createElement(
	      "g",
	      { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
	      _react2.default.createElement(
	        "g",
	        { id: "Group", transform: "translate(-33.000000, 0.000000)" },
	        _react2.default.createElement(
	          "g",
	          { id: "Ethereum_logo_2014", opacity: "0.208899457", transform: "translate(71.000000, 0.000000)", fillRule: "nonzero" },
	          _react2.default.createElement("polygon", { id: "Shape", fill: "#343434", points: "127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32" }),
	          _react2.default.createElement("polygon", { id: "Shape", fill: "#8C8C8C", points: "127.962 0 0 212.32 127.962 287.959 127.962 154.158" }),
	          _react2.default.createElement("polygon", { id: "Shape", fill: "#3C3C3B", points: "127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866" }),
	          _react2.default.createElement("polygon", { id: "Shape", fill: "#8C8C8C", points: "127.962 416.9052 127.962 312.1852 0 236.5852" }),
	          _react2.default.createElement("polygon", { id: "Shape", fill: "#141414", points: "127.9611 287.9577 255.9211 212.3207 127.9611 154.1587" }),
	          _react2.default.createElement("polygon", { id: "Shape", fill: "#393939", points: "0.0009 212.3208 127.9609 287.9578 127.9609 154.1588" })
	        ),
	        _react2.default.createElement("g", { id: "ic_do_not_disturb", transform: "translate(0.000000, 10.000000)" }),
	        _react2.default.createElement("polygon", { id: "Bounds", points: "0 10 397.221369 10 397.221369 407.221369 0 407.221369" }),
	        _react2.default.createElement(
	          "g",
	          { id: "Icon" },
	          _react2.default.createElement("use", { fill: "#FFE1DE", fillRule: "evenodd", xlinkHref: "#path-1" }),
	          _react2.default.createElement("path", { stroke: "#FFFFFF", strokeWidth: "6", d: "M198.610685,46.1017808 C288.314745,46.1017808 361.119588,118.906624 361.119588,208.610685 C361.119588,298.314745 288.314745,371.119588 198.610685,371.119588 C108.906624,371.119588 36.1017808,298.314745 36.1017808,208.610685 C36.1017808,118.906624 108.906624,46.1017808 198.610685,46.1017808 Z M198.610685,344.017808 C123.798895,344.017808 63.2035615,283.422474 63.2035615,208.610685 C63.2035615,178.077442 73.3736714,149.145233 91.8150049,125.658629 L93.9040007,122.998115 L284.223254,313.317368 L281.56274,315.406364 C258.076136,333.847698 229.143927,344.017808 198.610685,344.017808 Z M303.317368,294.223254 L112.998115,103.904001 L115.658629,101.815005 C139.145233,83.3736714 168.077442,73.2035615 198.610685,73.2035615 C273.422474,73.2035615 334.017808,133.798895 334.017808,208.610685 C334.017808,239.143927 323.847698,268.076136 305.406364,291.56274 L303.317368,294.223254 Z" })
	        )
	      )
	    )
	  );
	}

	module.exports = IconNoWeb3;

	/***/ }),
	/* 8 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	module.exports = "\n.Web3Provider-container {\n  font-family: Helvetica, Arial;\n  color: hsl(0,0%,50%);\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background: hsl(0, 0%, 95%);\n  background: -webkit-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: -moz-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: -o-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n}\n.Web3Provider-wrapper {\n  width: 400px;\n  border: 1px solid hsl(207, 90%, 54%);\n  border-radius: 20px;\n  text-align: center;\n  padding: 50px 40px;\n  margin: 80px auto;\n}\n.Web3Provider-image {\n  max-height: 175px;\n}\n.Web3Provider-title {\n  margin-top: 50px;\n  color: hsl(0,0%,25%);\n}\n.Web3Provider-message {\n  line-height: 27px;\n  font-size: 18px;\n  color: hsl(0,0%,50%);\n}\n";

	/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	var React = __webpack_require__(0);
	var ErrorTemplate = __webpack_require__(1);

	var Web3Unavailable = ErrorTemplate.bind(null, {
	  title: 'Web3 Not Found',
	  message: '\nIt seems that you are using a browser without Web3 capabilities. Please\nmake sure that you are using a web3-capable browser like mist or parity.\nIf you are using MetaMask or Parity extension, make sure that it is\nenabled.\n'
	});

	module.exports = Web3Unavailable;

	/***/ })
	/******/ ]);
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDQ5ZWY4MDY5M2NmODkyYWZjNDQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3JUZW1wbGF0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9XZWIzUHJvdmlkZXIuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFbXB0eVwiIiwid2VicGFjazovLy8uL3NyYy9BY2NvdW50VW5hdmFpbGFibGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9JY29uTm9XZWIzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViM1VuYXZhaWxhYmxlLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJY29uTm9XZWIzIiwic3R5bGVzaGVldCIsIkVycm9yVGVtcGxhdGUiLCJwcm9wcyIsIl9faHRtbCIsInRpdGxlIiwibWVzc2FnZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJXZWIzUHJvdmlkZXIiLCJQcm9wVHlwZXMiLCJpc0VtcHR5IiwiQWNjb3VudFVuYXZhaWxhYmxlIiwiV2ViM1VuYXZhaWxhYmxlIiwiT05FX1NFQ09ORCIsIk9ORV9NSU5VVEUiLCJwcm9wVHlwZXMiLCJ3ZWIzVW5hdmFpbGFibGVTY3JlZW4iLCJhbnkiLCJhY2NvdW50VW5hdmFpbGFibGVTY3JlZW4iLCJvbkNoYW5nZUFjY291bnQiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwicGFzc2l2ZSIsImNoaWxkQ29udGV4dFR5cGVzIiwid2ViMyIsInNoYXBlIiwiYWNjb3VudHMiLCJhcnJheSIsInNlbGVjdGVkQWNjb3VudCIsInN0cmluZyIsIm5ldHdvcmsiLCJuZXR3b3JrSWQiLCJjb250ZXh0IiwiZ2V0QWNjb3VudHMiLCJzdGF0ZSIsIm5ldHdvcmtFcnJvciIsImludGVydmFsIiwibmV0d29ya0ludGVydmFsIiwiZmV0Y2hBY2NvdW50cyIsImJpbmQiLCJmZXRjaE5ldHdvcmsiLCJoYW5kbGVBY2NvdW50cyIsImdldE5ldHdvcmsiLCJpbml0UG9sbCIsImluaXROZXR3b3JrUG9sbCIsInNldEludGVydmFsIiwid2luZG93IiwiZXRoQWNjb3VudHMiLCJldGgiLCJlcnIiLCJzZXRTdGF0ZSIsImFjY291bnRzRXJyb3IiLCJpc0NvbnN0cnVjdG9yIiwic3RvcmUiLCJuZXh0IiwiY3VyciIsInRvTG93ZXJDYXNlIiwiZGlkQ2hhbmdlIiwiZGlzcGF0Y2giLCJkaWREZWZpbmUiLCJ0eXBlIiwiYWRkcmVzcyIsInZlcnNpb24iLCJuZXRJZCIsImUiLCJXZWIzVW5hdmFpbGFibGVDb21wb25lbnQiLCJBY2NvdW50VW5hdmFpbGFibGVDb21wb25lbnQiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxrQzs7Ozs7Ozs7O0FDQUEsSUFBTUEsUUFBUSxtQkFBQUMsQ0FBUSxDQUFSLENBQWQ7QUFDQSxJQUFNQyxhQUFhLG1CQUFBRCxDQUFRLENBQVIsQ0FBbkI7QUFDQSxJQUFNRSxhQUFhLG1CQUFBRixDQUFRLENBQVIsQ0FBbkI7O0FBRUEsU0FBU0csYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0UsbUNBQU8seUJBQXlCLEVBQUVDLFFBQVFILFVBQVY7QUFBaEMsTUFERjtBQUdFO0FBQUE7QUFBQSxRQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0UsNEJBQUMsVUFBRDtBQURGLE9BREY7QUFJRTtBQUNFLG1CQUFVLG9CQURaO0FBRUUsaUNBQXlCLEVBQUVHLFFBQVFELE1BQU1FLEtBQWhCO0FBRjNCLFFBSkY7QUFRRTtBQUNFLG1CQUFVLHNCQURaO0FBRUUsaUNBQXlCLEVBQUVELFFBQVFELE1BQU1HLE9BQWhCO0FBRjNCO0FBUkY7QUFIRixHQURGO0FBbUJEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCTixhQUFqQixDOzs7Ozs7Ozs7QUMxQkEsSUFBTU8sZUFBZSxtQkFBQVYsQ0FBUSxDQUFSLENBQXJCO0FBQ0EsSUFBTUcsZ0JBQWdCLG1CQUFBSCxDQUFRLENBQVIsQ0FBdEI7O0FBRUFRLE9BQU9DLE9BQVAsQ0FBZUMsWUFBZixHQUE4QkEsWUFBOUI7QUFDQUYsT0FBT0MsT0FBUCxDQUFlTixhQUFmLEdBQStCQSxhQUEvQjs7QUFFQUssT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyw0QkFEZTtBQUVmUDtBQUZlLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsSUFBTUosUUFBUSxtQkFBQUMsQ0FBUSxDQUFSLENBQWQ7QUFDQSxJQUFNVyxZQUFZLG1CQUFBWCxDQUFRLENBQVIsQ0FBbEI7QUFDQSxJQUFNWSxVQUFVLG1CQUFBWixDQUFRLENBQVIsQ0FBaEI7QUFDQSxJQUFNYSxxQkFBcUIsbUJBQUFiLENBQVEsQ0FBUixDQUEzQjtBQUNBLElBQU1jLGtCQUFrQixtQkFBQWQsQ0FBUSxDQUFSLENBQXhCOztBQUVBLElBQU1lLGFBQWEsSUFBbkI7QUFDQSxJQUFNQyxhQUFhRCxhQUFhLEVBQWhDO0FBQ0EsSUFBTUUsWUFBWTtBQUNoQkMseUJBQXVCUCxVQUFVUSxHQURqQjtBQUVoQkMsNEJBQTBCVCxVQUFVUSxHQUZwQjtBQUdoQkUsbUJBQWlCVixVQUFVVztBQUhYLENBQWxCO0FBS0EsSUFBTUMsZUFBZTtBQUNuQkMsV0FBUyxLQURVO0FBRW5CTix5QkFBdUJKLGVBRko7QUFHbkJNLDRCQUEwQlA7QUFIUCxDQUFyQjtBQUtBLElBQU1ZLG9CQUFvQjtBQUN4QkMsUUFBTWYsVUFBVWdCLEtBQVYsQ0FBZ0I7QUFDcEJDLGNBQVVqQixVQUFVa0IsS0FEQTtBQUVwQkMscUJBQWlCbkIsVUFBVW9CLE1BRlA7QUFHcEJDLGFBQVNyQixVQUFVb0IsTUFIQztBQUlwQkUsZUFBV3RCLFVBQVVvQjtBQUpELEdBQWhCO0FBRGtCLENBQTFCOztJQVNNckIsWTs7O0FBTUosd0JBQVlOLEtBQVosRUFBbUI4QixPQUFuQixFQUE0QjtBQUFBOztBQUFBLDRIQUNwQjlCLEtBRG9CLEVBQ2I4QixPQURhOztBQUUxQixRQUFNTixXQUFXLE1BQUtPLFdBQUwsRUFBakI7O0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hSLHdCQURXO0FBRVhLLGlCQUFXLElBRkE7QUFHWEksb0JBQWM7QUFISCxLQUFiO0FBS0EsVUFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFVBQUtDLGVBQUwsR0FBdUIsSUFBdkI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjs7QUFFQSxRQUFJYixRQUFKLEVBQWM7QUFDWixZQUFLZSxjQUFMLENBQW9CZixRQUFwQixFQUE4QixJQUE5QjtBQUNEO0FBaEJ5QjtBQWlCM0I7Ozs7c0NBRWlCO0FBQ2hCLGFBQU87QUFDTEYsY0FBTTtBQUNKRSxvQkFBVSxLQUFLUSxLQUFMLENBQVdSLFFBRGpCO0FBRUpFLDJCQUFpQixLQUFLTSxLQUFMLENBQVdSLFFBQVgsSUFBdUIsS0FBS1EsS0FBTCxDQUFXUixRQUFYLENBQW9CLENBQXBCLENBRnBDO0FBR0pJLG1CQUFTWSxXQUFXLEtBQUtSLEtBQUwsQ0FBV0gsU0FBdEIsQ0FITDtBQUlKQSxxQkFBVyxLQUFLRyxLQUFMLENBQVdIO0FBSmxCO0FBREQsT0FBUDtBQVFEOztBQUVEOzs7Ozs7O3dDQUlvQjtBQUNsQixXQUFLTyxhQUFMO0FBQ0EsV0FBS0UsWUFBTDtBQUNBLFdBQUtHLFFBQUw7QUFDQSxXQUFLQyxlQUFMO0FBQ0Q7O0FBRUQ7Ozs7Ozs7K0JBSVc7QUFDVCxVQUFJLENBQUMsS0FBS1IsUUFBVixFQUFvQjtBQUNsQixhQUFLQSxRQUFMLEdBQWdCUyxZQUFZLEtBQUtQLGFBQWpCLEVBQWdDekIsVUFBaEMsQ0FBaEI7QUFDRDtBQUNGOztBQUVEOzs7Ozs7O3NDQUlrQjtBQUNoQixVQUFJLENBQUMsS0FBS3dCLGVBQVYsRUFBMkI7QUFDekIsYUFBS0EsZUFBTCxHQUF1QlEsWUFBWSxLQUFLTCxZQUFqQixFQUErQjFCLFVBQS9CLENBQXZCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7OztvQ0FJZ0I7QUFBQTs7QUFBQSxvQkFDR2dDLE1BREg7QUFBQSxVQUNOdEIsSUFETSxXQUNOQSxJQURNOztBQUVkLFVBQU11QixjQUFjLEtBQUtkLFdBQUwsRUFBcEI7O0FBRUEsVUFBSXZCLFFBQVFxQyxXQUFSLENBQUosRUFBMEI7QUFDeEJ2QixnQkFBUUEsS0FBS3dCLEdBQWIsSUFBb0J4QixLQUFLd0IsR0FBTCxDQUFTZixXQUFULENBQXFCLFVBQUNnQixHQUFELEVBQU12QixRQUFOLEVBQW1CO0FBQzFELGNBQUl1QixHQUFKLEVBQVM7QUFDUCxtQkFBS0MsUUFBTCxDQUFjO0FBQ1pDLDZCQUFlRjtBQURILGFBQWQ7QUFHRCxXQUpELE1BSU87QUFDTCxtQkFBS1IsY0FBTCxDQUFvQmYsUUFBcEI7QUFDRDtBQUNGLFNBUm1CLENBQXBCO0FBU0QsT0FWRCxNQVVPO0FBQ0wsYUFBS2UsY0FBTCxDQUFvQk0sV0FBcEI7QUFDRDtBQUNGOzs7bUNBRWNyQixRLEVBQWlDO0FBQUEsVUFBdkIwQixhQUF1Qix1RUFBUCxLQUFPO0FBQUEsVUFDdENqQyxlQURzQyxHQUNsQixLQUFLakIsS0FEYSxDQUN0Q2lCLGVBRHNDO0FBQUEsVUFFdENrQyxLQUZzQyxHQUU1QixLQUFLckIsT0FGdUIsQ0FFdENxQixLQUZzQzs7QUFHOUMsVUFBSUMsT0FBTzVCLFNBQVMsQ0FBVCxDQUFYO0FBQ0EsVUFBSTZCLE9BQU8sS0FBS3JCLEtBQUwsQ0FBV1IsUUFBWCxDQUFvQixDQUFwQixDQUFYO0FBQ0E0QixhQUFPQSxRQUFRQSxLQUFLRSxXQUFMLEVBQWY7QUFDQUQsYUFBT0EsUUFBUUEsS0FBS0MsV0FBTCxFQUFmO0FBQ0EsVUFBTUMsWUFBWUYsUUFBUUQsSUFBUixJQUFpQkMsU0FBU0QsSUFBNUM7O0FBRUEsVUFBSTVDLFFBQVEsS0FBS3dCLEtBQUwsQ0FBV1IsUUFBbkIsS0FBZ0MsQ0FBQ2hCLFFBQVFnQixRQUFSLENBQXJDLEVBQXdEO0FBQ3RELGFBQUt3QixRQUFMLENBQWM7QUFDWkMseUJBQWUsSUFESDtBQUVaekIsb0JBQVVBO0FBRkUsU0FBZDtBQUlEOztBQUVELFVBQUkrQixhQUFhLENBQUNMLGFBQWxCLEVBQWlDO0FBQy9CLGFBQUtGLFFBQUwsQ0FBYztBQUNaQyx5QkFBZSxJQURIO0FBRVp6QjtBQUZZLFNBQWQ7QUFJRDs7QUFFRDtBQUNBLFVBQUkrQixhQUFhLE9BQU90QyxlQUFQLEtBQTJCLFVBQTVDLEVBQXdEO0FBQ3REQSx3QkFBZ0JtQyxJQUFoQjtBQUNEOztBQUVEO0FBQ0EsVUFBSUQsU0FBUyxPQUFPQSxNQUFNSyxRQUFiLEtBQTBCLFVBQXZDLEVBQW1EO0FBQ2pELFlBQU1DLFlBQVksQ0FBQ0osSUFBRCxJQUFTRCxJQUEzQjs7QUFFQSxZQUFJSyxhQUFjUCxpQkFBaUJFLElBQW5DLEVBQTBDO0FBQ3hDRCxnQkFBTUssUUFBTixDQUFlO0FBQ2JFLGtCQUFNLHNCQURPO0FBRWJDLHFCQUFTUDtBQUZJLFdBQWY7QUFJRCxTQUxELE1BS08sSUFBSUcsU0FBSixFQUFlO0FBQ3BCSixnQkFBTUssUUFBTixDQUFlO0FBQ2JFLGtCQUFNLHFCQURPO0FBRWJDLHFCQUFTUDtBQUZJLFdBQWY7QUFJRDtBQUNGO0FBQ0Y7O0FBRUQ7Ozs7Ozs7bUNBSWU7QUFBQTs7QUFBQSxxQkFDSVIsTUFESjtBQUFBLFVBQ0x0QixJQURLLFlBQ0xBLElBREs7OztBQUdiQSxjQUFRQSxLQUFLc0MsT0FBYixJQUF3QnRDLEtBQUtzQyxPQUFMLENBQWFwQixVQUFiLENBQXdCLFVBQUNPLEdBQUQsRUFBTWMsS0FBTixFQUFnQjtBQUM5RCxZQUFJZCxHQUFKLEVBQVM7QUFDUCxpQkFBS0MsUUFBTCxDQUFjO0FBQ1pmLDBCQUFjYztBQURGLFdBQWQ7QUFHRCxTQUpELE1BSU87QUFDTCxjQUFJYyxTQUFTLE9BQUs3QixLQUFMLENBQVdILFNBQXhCLEVBQW1DO0FBQ2pDLG1CQUFLbUIsUUFBTCxDQUFjO0FBQ1pmLDRCQUFjLElBREY7QUFFWkoseUJBQVdnQztBQUZDLGFBQWQ7QUFJRDtBQUNGO0FBQ0YsT0FidUIsQ0FBeEI7QUFjRDs7QUFFRDs7Ozs7Ozs7a0NBS2M7QUFDWixVQUFJO0FBQUEsdUJBQ2VqQixNQURmO0FBQUEsWUFDTXRCLElBRE4sWUFDTUEsSUFETjtBQUVGOztBQUNBLFlBQU1FLFdBQVdGLEtBQUt3QixHQUFMLENBQVN0QixRQUExQjs7QUFFQSxlQUFPQSxRQUFQO0FBQ0QsT0FORCxDQU1FLE9BQU9zQyxDQUFQLEVBQVU7QUFDVixlQUFPLEVBQVA7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQSxxQkFDVWxCLE1BRFY7QUFBQSxVQUNDdEIsSUFERCxZQUNDQSxJQUREO0FBQUEsbUJBTUgsS0FBS3RCLEtBTkY7QUFBQSxVQUdMb0IsT0FISyxVQUdMQSxPQUhLO0FBQUEsVUFJa0IyQyx3QkFKbEIsVUFJTGpELHFCQUpLO0FBQUEsVUFLcUJrRCwyQkFMckIsVUFLTGhELHdCQUxLOzs7QUFRUCxVQUFJSSxPQUFKLEVBQWE7QUFDWCxlQUFPLEtBQUtwQixLQUFMLENBQVdpRSxRQUFsQjtBQUNEOztBQUVELFVBQUksQ0FBQzNDLElBQUwsRUFBVztBQUNULGVBQU8sb0JBQUMsd0JBQUQsT0FBUDtBQUNEOztBQUVELFVBQUlkLFFBQVEsS0FBS3dCLEtBQUwsQ0FBV1IsUUFBbkIsQ0FBSixFQUFrQztBQUNoQyxlQUFPLG9CQUFDLDJCQUFELE9BQVA7QUFDRDs7QUFFRCxhQUFPLEtBQUt4QixLQUFMLENBQVdpRSxRQUFsQjtBQUNEOzs7O0VBck13QnRFLE1BQU11RSxTOztBQUEzQjVELFksQ0FFRzZELFksR0FBZTtBQUNwQmhCLFNBQU81QyxVQUFVNkQ7QUFERyxDOzs7QUFzTXhCOUQsYUFBYU8sU0FBYixHQUF5QkEsU0FBekI7QUFDQVAsYUFBYWEsWUFBYixHQUE0QkEsWUFBNUI7QUFDQWIsYUFBYWUsaUJBQWIsR0FBaUNBLGlCQUFqQzs7QUFFQWpCLE9BQU9DLE9BQVAsR0FBaUJDLFlBQWpCOztBQUVBOzs7QUFHQSxTQUFTa0MsVUFBVCxDQUFvQlgsU0FBcEIsRUFBK0I7QUFDN0IsVUFBUUEsU0FBUjtBQUNFLFNBQUssR0FBTDtBQUNFLGFBQU8sU0FBUDtBQUNGLFNBQUssR0FBTDtBQUNFLGFBQU8sUUFBUDtBQUNGLFNBQUssR0FBTDtBQUNFLGFBQU8sU0FBUDtBQUNGO0FBQ0UsYUFBTyxTQUFQO0FBUko7QUFVRCxDOzs7Ozs7QUN2UEQsdUM7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7QUNBQSxJQUFNbEMsUUFBUSxtQkFBQUMsQ0FBUSxDQUFSLENBQWQ7QUFDQSxJQUFNRyxnQkFBZ0IsbUJBQUFILENBQVEsQ0FBUixDQUF0Qjs7QUFFQSxJQUFNYSxxQkFBcUJWLGNBQWNzQyxJQUFkLENBQW1CLElBQW5CLEVBQXlCO0FBQ2xEbkMsU0FBTywwQkFEMkM7QUFFbERDO0FBRmtELENBQXpCLENBQTNCOztBQVFBQyxPQUFPQyxPQUFQLEdBQWlCSSxrQkFBakIsQzs7Ozs7Ozs7O0FDWEE7Ozs7OztBQUVBLFNBQVNaLFVBQVQsQ0FBb0JHLEtBQXBCLEVBQTJCO0FBQ3pCLFNBRUU7QUFBQTtBQUFBLE1BQUssT0FBTSxNQUFYLEVBQWtCLFFBQU8sTUFBekIsRUFBZ0MsU0FBUSxhQUF4QyxFQUFzRCxTQUFRLEtBQTlELEVBQW9FLE9BQU0sNEJBQTFFLEVBQXVHLFlBQVcsOEJBQWxIO0FBQ0E7QUFBQTtBQUFBO0FBQ0UsOENBQU0sR0FBRSx1MUJBQVIsRUFBZzJCLElBQUcsUUFBbjJCO0FBREYsS0FEQTtBQUlBO0FBQUE7QUFBQSxRQUFHLElBQUcsUUFBTixFQUFlLFFBQU8sTUFBdEIsRUFBNkIsYUFBWSxHQUF6QyxFQUE2QyxNQUFLLE1BQWxELEVBQXlELFVBQVMsU0FBbEU7QUFDRTtBQUFBO0FBQUEsVUFBRyxJQUFHLE9BQU4sRUFBYyxXQUFVLGlDQUF4QjtBQUNFO0FBQUE7QUFBQSxZQUFHLElBQUcsb0JBQU4sRUFBMkIsU0FBUSxhQUFuQyxFQUFpRCxXQUFVLGdDQUEzRCxFQUE0RixVQUFTLFNBQXJHO0FBQ0UscURBQVMsSUFBRyxPQUFaLEVBQW9CLE1BQUssU0FBekIsRUFBbUMsUUFBTywyRUFBMUMsR0FERjtBQUVFLHFEQUFTLElBQUcsT0FBWixFQUFvQixNQUFLLFNBQXpCLEVBQW1DLFFBQU8sb0RBQTFDLEdBRkY7QUFHRSxxREFBUyxJQUFHLE9BQVosRUFBb0IsTUFBSyxTQUF6QixFQUFtQyxRQUFPLDJGQUExQyxHQUhGO0FBSUUscURBQVMsSUFBRyxPQUFaLEVBQW9CLE1BQUssU0FBekIsRUFBbUMsUUFBTyw4Q0FBMUMsR0FKRjtBQUtFLHFEQUFTLElBQUcsT0FBWixFQUFvQixNQUFLLFNBQXpCLEVBQW1DLFFBQU8sdURBQTFDLEdBTEY7QUFNRSxxREFBUyxJQUFHLE9BQVosRUFBb0IsTUFBSyxTQUF6QixFQUFtQyxRQUFPLHFEQUExQztBQU5GLFNBREY7QUFTRSw2Q0FBRyxJQUFHLG1CQUFOLEVBQTBCLFdBQVUsZ0NBQXBDLEdBVEY7QUFVRSxtREFBUyxJQUFHLFFBQVosRUFBcUIsUUFBTyx1REFBNUIsR0FWRjtBQVdFO0FBQUE7QUFBQSxZQUFHLElBQUcsTUFBTjtBQUNFLGlEQUFLLE1BQUssU0FBVixFQUFvQixVQUFTLFNBQTdCLEVBQXVDLFdBQVUsU0FBakQsR0FERjtBQUVFLGtEQUFNLFFBQU8sU0FBYixFQUF1QixhQUFZLEdBQW5DLEVBQXVDLEdBQUUsazNCQUF6QztBQUZGO0FBWEY7QUFERjtBQUpBLEdBRkY7QUEwQkQ7O0FBRURJLE9BQU9DLE9BQVAsR0FBaUJSLFVBQWpCLEM7Ozs7Ozs7OztBQy9CQU8sT0FBT0MsT0FBUCxxM0I7Ozs7Ozs7OztBQ0FBLElBQU1WLFFBQVEsbUJBQUFDLENBQVEsQ0FBUixDQUFkO0FBQ0EsSUFBTUcsZ0JBQWdCLG1CQUFBSCxDQUFRLENBQVIsQ0FBdEI7O0FBRUEsSUFBTWMsa0JBQWtCWCxjQUFjc0MsSUFBZCxDQUFtQixJQUFuQixFQUF5QjtBQUMvQ25DLFNBQU8sZ0JBRHdDO0FBRS9DQztBQUYrQyxDQUF6QixDQUF4Qjs7QUFVQUMsT0FBT0MsT0FBUCxHQUFpQkssZUFBakIsQyIsImZpbGUiOiIuL2Rpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NDllZjgwNjkzY2Y4OTJhZmM0NCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBJY29uTm9XZWIzID0gcmVxdWlyZSgnLi9JY29uTm9XZWIzJyk7XG5jb25zdCBzdHlsZXNoZWV0ID0gcmVxdWlyZSgnLi9zdHlsZXNoZWV0Jyk7XG5cbmZ1bmN0aW9uIEVycm9yVGVtcGxhdGUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1jb250YWluZXJcIj5cbiAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2ViM1Byb3ZpZGVyLWltYWdlXCI+XG4gICAgICAgICAgPEljb25Ob1dlYjMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMVxuICAgICAgICAgIGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci10aXRsZVwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy50aXRsZSB9fVxuICAgICAgICAvPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1tZXNzYWdlXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLm1lc3NhZ2UgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JUZW1wbGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvclRlbXBsYXRlLmpzeCIsImNvbnN0IFdlYjNQcm92aWRlciA9IHJlcXVpcmUoJy4vV2ViM1Byb3ZpZGVyJyk7XG5jb25zdCBFcnJvclRlbXBsYXRlID0gcmVxdWlyZSgnLi9FcnJvclRlbXBsYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzLldlYjNQcm92aWRlciA9IFdlYjNQcm92aWRlcjtcbm1vZHVsZS5leHBvcnRzLkVycm9yVGVtcGxhdGUgPSBFcnJvclRlbXBsYXRlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgV2ViM1Byb3ZpZGVyLFxuICBFcnJvclRlbXBsYXRlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuY29uc3QgaXNFbXB0eSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0VtcHR5Jyk7XG5jb25zdCBBY2NvdW50VW5hdmFpbGFibGUgPSByZXF1aXJlKCcuL0FjY291bnRVbmF2YWlsYWJsZScpO1xuY29uc3QgV2ViM1VuYXZhaWxhYmxlID0gcmVxdWlyZSgnLi9XZWIzVW5hdmFpbGFibGUnKTtcblxuY29uc3QgT05FX1NFQ09ORCA9IDEwMDA7XG5jb25zdCBPTkVfTUlOVVRFID0gT05FX1NFQ09ORCAqIDYwO1xuY29uc3QgcHJvcFR5cGVzID0ge1xuICB3ZWIzVW5hdmFpbGFibGVTY3JlZW46IFByb3BUeXBlcy5hbnksXG4gIGFjY291bnRVbmF2YWlsYWJsZVNjcmVlbjogUHJvcFR5cGVzLmFueSxcbiAgb25DaGFuZ2VBY2NvdW50OiBQcm9wVHlwZXMuZnVuY1xufTtcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgcGFzc2l2ZTogZmFsc2UsXG4gIHdlYjNVbmF2YWlsYWJsZVNjcmVlbjogV2ViM1VuYXZhaWxhYmxlLFxuICBhY2NvdW50VW5hdmFpbGFibGVTY3JlZW46IEFjY291bnRVbmF2YWlsYWJsZVxufTtcbmNvbnN0IGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB3ZWIzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFjY291bnRzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VsZWN0ZWRBY2NvdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5ldHdvcms6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmV0d29ya0lkOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pXG59O1xuXG5jbGFzcyBXZWIzUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgc3RvcmU6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICBjb25zdCBhY2NvdW50cyA9IHRoaXMuZ2V0QWNjb3VudHMoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY2NvdW50cyxcbiAgICAgIG5ldHdvcmtJZDogbnVsbCxcbiAgICAgIG5ldHdvcmtFcnJvcjogbnVsbFxuICAgIH07XG4gICAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5uZXR3b3JrSW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMuZmV0Y2hBY2NvdW50cyA9IHRoaXMuZmV0Y2hBY2NvdW50cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmV0Y2hOZXR3b3JrID0gdGhpcy5mZXRjaE5ldHdvcmsuYmluZCh0aGlzKTtcblxuICAgIGlmIChhY2NvdW50cykge1xuICAgICAgdGhpcy5oYW5kbGVBY2NvdW50cyhhY2NvdW50cywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3ZWIzOiB7XG4gICAgICAgIGFjY291bnRzOiB0aGlzLnN0YXRlLmFjY291bnRzLFxuICAgICAgICBzZWxlY3RlZEFjY291bnQ6IHRoaXMuc3RhdGUuYWNjb3VudHMgJiYgdGhpcy5zdGF0ZS5hY2NvdW50c1swXSxcbiAgICAgICAgbmV0d29yazogZ2V0TmV0d29yayh0aGlzLnN0YXRlLm5ldHdvcmtJZCksXG4gICAgICAgIG5ldHdvcmtJZDogdGhpcy5zdGF0ZS5uZXR3b3JrSWRcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHBvbGxpbmcgYWNjb3VudHMsICYgbmV0d29yay4gV2UgcG9sbCBpbmRlZmluaXRlbHkgc28gdGhhdCB3ZSBjYW5cbiAgICogcmVhY3QgdG8gdGhlIHVzZXIgY2hhbmdpbmcgYWNjb3VudHMgb3IgbmV0b3dya3MuXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoQWNjb3VudHMoKTtcbiAgICB0aGlzLmZldGNoTmV0d29yaygpO1xuICAgIHRoaXMuaW5pdFBvbGwoKTtcbiAgICB0aGlzLmluaXROZXR3b3JrUG9sbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgd2ViMy9hY2NvdW50IHBvbGxpbmcsIGFuZCBwcmV2ZW50IGR1cGxpY2F0ZSBpbnRlcnZhbC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGluaXRQb2xsKCkge1xuICAgIGlmICghdGhpcy5pbnRlcnZhbCkge1xuICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZmV0Y2hBY2NvdW50cywgT05FX1NFQ09ORCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgbmV0d29yayBwb2xsaW5nLCBhbmQgcHJldmVudCBkdXBsaWNhdGUgaW50ZXJ2YWxzLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgaW5pdE5ldHdvcmtQb2xsKCkge1xuICAgIGlmICghdGhpcy5uZXR3b3JrSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMubmV0d29ya0ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5mZXRjaE5ldHdvcmssIE9ORV9NSU5VVEUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc3RhdGUgcmVnYXJkaW5nIHRoZSBhdmFpbGFiaWxpdHkgb2Ygd2ViMyBhbmQgYW4gRVRIIGFjY291bnQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBmZXRjaEFjY291bnRzKCkge1xuICAgIGNvbnN0IHsgd2ViMyB9ID0gd2luZG93O1xuICAgIGNvbnN0IGV0aEFjY291bnRzID0gdGhpcy5nZXRBY2NvdW50cygpO1xuXG4gICAgaWYgKGlzRW1wdHkoZXRoQWNjb3VudHMpKSB7XG4gICAgICB3ZWIzICYmIHdlYjMuZXRoICYmIHdlYjMuZXRoLmdldEFjY291bnRzKChlcnIsIGFjY291bnRzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjY291bnRzRXJyb3I6IGVyclxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVBY2NvdW50cyhldGhBY2NvdW50cyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMsIGlzQ29uc3RydWN0b3IgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2VBY2NvdW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICBsZXQgbmV4dCA9IGFjY291bnRzWzBdO1xuICAgIGxldCBjdXJyID0gdGhpcy5zdGF0ZS5hY2NvdW50c1swXTtcbiAgICBuZXh0ID0gbmV4dCAmJiBuZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgY3VyciA9IGN1cnIgJiYgY3Vyci50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGRpZENoYW5nZSA9IGN1cnIgJiYgbmV4dCAmJiAoY3VyciAhPT0gbmV4dCk7XG5cbiAgICBpZiAoaXNFbXB0eSh0aGlzLnN0YXRlLmFjY291bnRzKSAmJiAhaXNFbXB0eShhY2NvdW50cykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY2NvdW50c0Vycm9yOiBudWxsLFxuICAgICAgICBhY2NvdW50czogYWNjb3VudHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChkaWRDaGFuZ2UgJiYgIWlzQ29uc3RydWN0b3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY2NvdW50c0Vycm9yOiBudWxsLFxuICAgICAgICBhY2NvdW50c1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSWYgcHJvdmlkZWQsIGV4ZWN1dGUgY2FsbGJhY2tcbiAgICBpZiAoZGlkQ2hhbmdlICYmIHR5cGVvZiBvbkNoYW5nZUFjY291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uQ2hhbmdlQWNjb3VudChuZXh0KTtcbiAgICB9XG5cbiAgICAvLyBJZiBhdmFpbGFibGUsIGRpc3BhdGNoIHJlZHV4IGFjdGlvblxuICAgIGlmIChzdG9yZSAmJiB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGRpZERlZmluZSA9ICFjdXJyICYmIG5leHQ7XG5cbiAgICAgIGlmIChkaWREZWZpbmUgfHwgKGlzQ29uc3RydWN0b3IgJiYgbmV4dCkpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICd3ZWIzL1JFQ0VJVkVfQUNDT1VOVCcsXG4gICAgICAgICAgYWRkcmVzczogbmV4dFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZGlkQ2hhbmdlKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnd2ViMy9DSEFOR0VfQUNDT1VOVCcsXG4gICAgICAgICAgYWRkcmVzczogbmV4dFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5ldHdvcmsgYW5kIHVwZGF0ZSBzdGF0ZSBhY2NvcmRpbmdseS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZldGNoTmV0d29yaygpIHtcbiAgICBjb25zdCB7IHdlYjMgfSA9IHdpbmRvdztcblxuICAgIHdlYjMgJiYgd2ViMy52ZXJzaW9uICYmIHdlYjMudmVyc2lvbi5nZXROZXR3b3JrKChlcnIsIG5ldElkKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG5ldHdvcmtFcnJvcjogZXJyXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5ldElkICE9IHRoaXMuc3RhdGUubmV0d29ya0lkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXR3b3JrRXJyb3I6IG51bGwsXG4gICAgICAgICAgICBuZXR3b3JrSWQ6IG5ldElkXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYWNjb3VudC4gV2Ugd3JhcCBpbiB0cnkvY2F0Y2ggYmVjYXVzZSByZWFkaW5nIGB3ZWIzLmV0aC5hY2NvdW5yc2BcbiAgICogd2lsbCB0aHJvdyBpZiBubyBhY2NvdW50IGlzIHNlbGVjdGVkLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBnZXRBY2NvdW50cygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyB3ZWIzIH0gPSB3aW5kb3c7XG4gICAgICAvLyB0aHJvd3MgaWYgbm8gYWNjb3VudCBzZWxlY3RlZFxuICAgICAgY29uc3QgYWNjb3VudHMgPSB3ZWIzLmV0aC5hY2NvdW50cztcblxuICAgICAgcmV0dXJuIGFjY291bnRzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3ZWIzIH0gPSB3aW5kb3c7XG4gICAgY29uc3Qge1xuICAgICAgcGFzc2l2ZSxcbiAgICAgIHdlYjNVbmF2YWlsYWJsZVNjcmVlbjogV2ViM1VuYXZhaWxhYmxlQ29tcG9uZW50LFxuICAgICAgYWNjb3VudFVuYXZhaWxhYmxlU2NyZWVuOiBBY2NvdW50VW5hdmFpbGFibGVDb21wb25lbnRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYXNzaXZlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG5cbiAgICBpZiAoIXdlYjMpIHtcbiAgICAgIHJldHVybiA8V2ViM1VuYXZhaWxhYmxlQ29tcG9uZW50IC8+O1xuICAgIH1cblxuICAgIGlmIChpc0VtcHR5KHRoaXMuc3RhdGUuYWNjb3VudHMpKSB7XG4gICAgICByZXR1cm4gPEFjY291bnRVbmF2YWlsYWJsZUNvbXBvbmVudCAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5XZWIzUHJvdmlkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuV2ViM1Byb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbldlYjNQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IGNoaWxkQ29udGV4dFR5cGVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYjNQcm92aWRlcjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj0gICAgRGVwc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmZ1bmN0aW9uIGdldE5ldHdvcmsobmV0d29ya0lkKSB7XG4gIHN3aXRjaCAobmV0d29ya0lkKSB7XG4gICAgY2FzZSAnMSc6XG4gICAgICByZXR1cm4gJ01BSU5ORVQnO1xuICAgIGNhc2UgJzInOlxuICAgICAgcmV0dXJuICdNT1JERU4nO1xuICAgIGNhc2UgJzMnOlxuICAgICAgcmV0dXJuICdST1BTVEVOJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICdVTktOT1dOJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1dlYjNQcm92aWRlci5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9pc0VtcHR5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBFcnJvclRlbXBsYXRlID0gcmVxdWlyZSgnLi9FcnJvclRlbXBsYXRlJyk7XG5cbmNvbnN0IEFjY291bnRVbmF2YWlsYWJsZSA9IEVycm9yVGVtcGxhdGUuYmluZChudWxsLCB7XG4gIHRpdGxlOiAnTm8gRVRIIEFjY291bnQgQXZhaWxhYmxlJyxcbiAgbWVzc2FnZTogYFxuSXQgc2VlbXMgdGhhdCB5b3UgZG9uJmFwb3M7dCBoYXZlIGFuIEVUSCBhY2NvdW50IHNlbGVjdGVkLiBJZiB1c2luZ1xuTWV0YU1hc2ssIHBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3VyIHdhbGxldCBpcyB1bmxvY2tlZCBhbmQgdGhhdFxueW91IGhhdmUgYXQgbGVhc3Qgb25lIGFjY291bnQgaW4geW91ciBhY2NvdW50cyBsaXN0LmBcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjY291bnRVbmF2YWlsYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY2NvdW50VW5hdmFpbGFibGUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSWNvbk5vV2ViMyhwcm9wcykge1xuICByZXR1cm4gKFxuXG4gICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAzMzIgNDE3XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgIDxkZWZzPlxuICAgICAgPHBhdGggZD1cIk0xOTguNjEwNjg1LDQzLjEwMTc4MDggQzEwNy4yNDk3Nyw0My4xMDE3ODA4IDMzLjEwMTc4MDgsMTE3LjI0OTc3IDMzLjEwMTc4MDgsMjA4LjYxMDY4NSBDMzMuMTAxNzgwOCwyOTkuOTcxNTk5IDEwNy4yNDk3NywzNzQuMTE5NTg4IDE5OC42MTA2ODUsMzc0LjExOTU4OCBDMjg5Ljk3MTU5OSwzNzQuMTE5NTg4IDM2NC4xMTk1ODgsMjk5Ljk3MTU5OSAzNjQuMTE5NTg4LDIwOC42MTA2ODUgQzM2NC4xMTk1ODgsMTE3LjI0OTc3IDI4OS45NzE1OTksNDMuMTAxNzgwOCAxOTguNjEwNjg1LDQzLjEwMTc4MDggTDE5OC42MTA2ODUsNDMuMTAxNzgwOCBaIE0xOTguNjEwNjg1LDM0MS4wMTc4MDggQzEyNS40NTU3NDksMzQxLjAxNzgwOCA2Ni4yMDM1NjE1LDI4MS43NjU2MiA2Ni4yMDM1NjE1LDIwOC42MTA2ODUgQzY2LjIwMzU2MTUsMTc3Ljk5MTUzNyA3Ni42MzA2MjI1LDE0OS44NTUwMjQgOTQuMTc0NTY2MywxMjcuNTExMzIyIEwyNzkuNzEwMDQ3LDMxMy4wNDY4MDMgQzI1Ny4zNjYzNDUsMzMwLjU5MDc0NyAyMjkuMjI5ODMyLDM0MS4wMTc4MDggMTk4LjYxMDY4NSwzNDEuMDE3ODA4IEwxOTguNjEwNjg1LDM0MS4wMTc4MDggWiBNMzAzLjA0NjgwMywyODkuNzEwMDQ3IEwxMTcuNTExMzIyLDEwNC4xNzQ1NjYgQzEzOS44NTUwMjQsODYuNjMwNjIyNSAxNjcuOTkxNTM3LDc2LjIwMzU2MTUgMTk4LjYxMDY4NSw3Ni4yMDM1NjE1IEMyNzEuNzY1NjIsNzYuMjAzNTYxNSAzMzEuMDE3ODA4LDEzNS40NTU3NDkgMzMxLjAxNzgwOCwyMDguNjEwNjg1IEMzMzEuMDE3ODA4LDIzOS4yMjk4MzIgMzIwLjU5MDc0NywyNjcuMzY2MzQ1IDMwMy4wNDY4MDMsMjg5LjcxMDA0NyBMMzAzLjA0NjgwMywyODkuNzEwMDQ3IFpcIiBpZD1cInBhdGgtMVwiPjwvcGF0aD5cbiAgICA8L2RlZnM+XG4gICAgPGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgIDxnIGlkPVwiR3JvdXBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMzLjAwMDAwMCwgMC4wMDAwMDApXCI+XG4gICAgICAgIDxnIGlkPVwiRXRoZXJldW1fbG9nb18yMDE0XCIgb3BhY2l0eT1cIjAuMjA4ODk5NDU3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcxLjAwMDAwMCwgMC4wMDAwMDApXCIgZmlsbFJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjMzQzNDM0XCIgcG9pbnRzPVwiMTI3Ljk2MTEgMCAxMjUuMTY2MSA5LjUgMTI1LjE2NjEgMjg1LjE2OCAxMjcuOTYxMSAyODcuOTU4IDI1NS45MjMxIDIxMi4zMlwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiM4QzhDOENcIiBwb2ludHM9XCIxMjcuOTYyIDAgMCAyMTIuMzIgMTI3Ljk2MiAyODcuOTU5IDEyNy45NjIgMTU0LjE1OFwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiMzQzNDM0JcIiBwb2ludHM9XCIxMjcuOTYxMSAzMTIuMTg2NiAxMjYuMzg2MSAzMTQuMTA2NiAxMjYuMzg2MSA0MTIuMzA1NiAxMjcuOTYxMSA0MTYuOTA2NiAyNTUuOTk5MSAyMzYuNTg2NlwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiM4QzhDOENcIiBwb2ludHM9XCIxMjcuOTYyIDQxNi45MDUyIDEyNy45NjIgMzEyLjE4NTIgMCAyMzYuNTg1MlwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiMxNDE0MTRcIiBwb2ludHM9XCIxMjcuOTYxMSAyODcuOTU3NyAyNTUuOTIxMSAyMTIuMzIwNyAxMjcuOTYxMSAxNTQuMTU4N1wiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiMzOTM5MzlcIiBwb2ludHM9XCIwLjAwMDkgMjEyLjMyMDggMTI3Ljk2MDkgMjg3Ljk1NzggMTI3Ljk2MDkgMTU0LjE1ODhcIj48L3BvbHlnb24+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgaWQ9XCJpY19kb19ub3RfZGlzdHVyYlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCwgMTAuMDAwMDAwKVwiPjwvZz5cbiAgICAgICAgPHBvbHlnb24gaWQ9XCJCb3VuZHNcIiBwb2ludHM9XCIwIDEwIDM5Ny4yMjEzNjkgMTAgMzk3LjIyMTM2OSA0MDcuMjIxMzY5IDAgNDA3LjIyMTM2OVwiPjwvcG9seWdvbj5cbiAgICAgICAgPGcgaWQ9XCJJY29uXCI+XG4gICAgICAgICAgPHVzZSBmaWxsPVwiI0ZGRTFERVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIHhsaW5rSHJlZj1cIiNwYXRoLTFcIj48L3VzZT5cbiAgICAgICAgICA8cGF0aCBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlV2lkdGg9XCI2XCIgZD1cIk0xOTguNjEwNjg1LDQ2LjEwMTc4MDggQzI4OC4zMTQ3NDUsNDYuMTAxNzgwOCAzNjEuMTE5NTg4LDExOC45MDY2MjQgMzYxLjExOTU4OCwyMDguNjEwNjg1IEMzNjEuMTE5NTg4LDI5OC4zMTQ3NDUgMjg4LjMxNDc0NSwzNzEuMTE5NTg4IDE5OC42MTA2ODUsMzcxLjExOTU4OCBDMTA4LjkwNjYyNCwzNzEuMTE5NTg4IDM2LjEwMTc4MDgsMjk4LjMxNDc0NSAzNi4xMDE3ODA4LDIwOC42MTA2ODUgQzM2LjEwMTc4MDgsMTE4LjkwNjYyNCAxMDguOTA2NjI0LDQ2LjEwMTc4MDggMTk4LjYxMDY4NSw0Ni4xMDE3ODA4IFogTTE5OC42MTA2ODUsMzQ0LjAxNzgwOCBDMTIzLjc5ODg5NSwzNDQuMDE3ODA4IDYzLjIwMzU2MTUsMjgzLjQyMjQ3NCA2My4yMDM1NjE1LDIwOC42MTA2ODUgQzYzLjIwMzU2MTUsMTc4LjA3NzQ0MiA3My4zNzM2NzE0LDE0OS4xNDUyMzMgOTEuODE1MDA0OSwxMjUuNjU4NjI5IEw5My45MDQwMDA3LDEyMi45OTgxMTUgTDI4NC4yMjMyNTQsMzEzLjMxNzM2OCBMMjgxLjU2Mjc0LDMxNS40MDYzNjQgQzI1OC4wNzYxMzYsMzMzLjg0NzY5OCAyMjkuMTQzOTI3LDM0NC4wMTc4MDggMTk4LjYxMDY4NSwzNDQuMDE3ODA4IFogTTMwMy4zMTczNjgsMjk0LjIyMzI1NCBMMTEyLjk5ODExNSwxMDMuOTA0MDAxIEwxMTUuNjU4NjI5LDEwMS44MTUwMDUgQzEzOS4xNDUyMzMsODMuMzczNjcxNCAxNjguMDc3NDQyLDczLjIwMzU2MTUgMTk4LjYxMDY4NSw3My4yMDM1NjE1IEMyNzMuNDIyNDc0LDczLjIwMzU2MTUgMzM0LjAxNzgwOCwxMzMuNzk4ODk1IDMzNC4wMTc4MDgsMjA4LjYxMDY4NSBDMzM0LjAxNzgwOCwyMzkuMTQzOTI3IDMyMy44NDc2OTgsMjY4LjA3NjEzNiAzMDUuNDA2MzY0LDI5MS41NjI3NCBMMzAzLjMxNzM2OCwyOTQuMjIzMjU0IFpcIj48L3BhdGg+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEljb25Ob1dlYjM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSWNvbk5vV2ViMy5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IGBcbi5XZWIzUHJvdmlkZXItY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWw7XG4gIGNvbG9yOiBoc2woMCwwJSw1MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA5NSUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChoc2woMCwgMCUsIDEwMCUpLCBoc2woMCwgMCUsIDk1JSkpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChoc2woMCwgMCUsIDEwMCUpLCBoc2woMCwgMCUsIDk1JSkpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoaHNsKDAsIDAlLCAxMDAlKSwgaHNsKDAsIDAlLCA5NSUpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgwLCAwJSwgMTAwJSksIGhzbCgwLCAwJSwgOTUlKSk7XG59XG4uV2ViM1Byb3ZpZGVyLXdyYXBwZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMDcsIDkwJSwgNTQlKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDQwcHg7XG4gIG1hcmdpbjogODBweCBhdXRvO1xufVxuLldlYjNQcm92aWRlci1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDE3NXB4O1xufVxuLldlYjNQcm92aWRlci10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGNvbG9yOiBoc2woMCwwJSwyNSUpO1xufVxuLldlYjNQcm92aWRlci1tZXNzYWdlIHtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGhzbCgwLDAlLDUwJSk7XG59XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlc2hlZXQuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBFcnJvclRlbXBsYXRlID0gcmVxdWlyZSgnLi9FcnJvclRlbXBsYXRlJyk7XG5cbmNvbnN0IFdlYjNVbmF2YWlsYWJsZSA9IEVycm9yVGVtcGxhdGUuYmluZChudWxsLCB7XG4gIHRpdGxlOiAnV2ViMyBOb3QgRm91bmQnLFxuICBtZXNzYWdlOiBgXG5JdCBzZWVtcyB0aGF0IHlvdSBhcmUgdXNpbmcgYSBicm93c2VyIHdpdGhvdXQgV2ViMyBjYXBhYmlsaXRpZXMuIFBsZWFzZVxubWFrZSBzdXJlIHRoYXQgeW91IGFyZSB1c2luZyBhIHdlYjMtY2FwYWJsZSBicm93c2VyIGxpa2UgbWlzdCBvciBwYXJpdHkuXG5JZiB5b3UgYXJlIHVzaW5nIE1ldGFNYXNrIG9yIFBhcml0eSBleHRlbnNpb24sIG1ha2Ugc3VyZSB0aGF0IGl0IGlzXG5lbmFibGVkLlxuYFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViM1VuYXZhaWxhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1dlYjNVbmF2YWlsYWJsZS5qc3giXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _semanticUiReact = __webpack_require__(209);

	var _BlockchainViz = __webpack_require__(913);

	var _BlockchainViz2 = _interopRequireDefault(_BlockchainViz);

	var _ModalResponse = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/ModalResponse\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _ModalResponse2 = _interopRequireDefault(_ModalResponse);

	var _axios = __webpack_require__(924);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App2Container = function (_React$Component) {
	    _inherits(App2Container, _React$Component);

	    function App2Container(props, context) {
	        _classCallCheck(this, App2Container);

	        var _this = _possibleConstructorReturn(this, (App2Container.__proto__ || Object.getPrototypeOf(App2Container)).call(this, props));

	        console.log(props);
	        _this.state = {
	            tx: null,
	            acct: null,
	            message: null,
	            id: _this.props.match.params.id,
	            isLoading: true,
	            modal: {
	                open: false,
	                message: null,
	                title: null
	            }
	        };

	        var self = _this;
	        _axios2.default.get("/resolve/" + _this.state.id).then(function (res) {
	            console.log(res);
	            var response = res.data;
	            console.log(response);
	            self.setState({
	                tx: response.record.tx,
	                acct: response.record.acct,
	                message: response.message,
	                isLoading: false
	            }, function () {});
	        }).catch(function (err) {
	            console.log(err);
	        });
	        return _this;
	    }

	    _createClass(App2Container, [{
	        key: 'handleModalState',
	        value: function handleModalState(state) {
	            this.setState({
	                modal: {
	                    open: state
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                _semanticUiReact.Container,
	                { fluid: true },
	                _react2.default.createElement(_ModalResponse2.default, { type: 'Success', title: this.state.modal.title, open: this.state.modal.open, message: this.state.modal.message, handleFormState: this.handleModalState.bind(this) }),
	                _react2.default.createElement(_BlockchainViz2.default, { dynamic: 'true' }),
	                _react2.default.createElement(
	                    _semanticUiReact.Segment,
	                    { basic: true },
	                    _react2.default.createElement(
	                        _semanticUiReact.Message,
	                        { color: 'teal' },
	                        _react2.default.createElement(
	                            _semanticUiReact.Message.Header,
	                            null,
	                            _react2.default.createElement(
	                                'a',
	                                { href: 'https://ropsten.etherscan.io/tx/' + this.state.tx },
	                                'Find out more information on Etherscan'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _semanticUiReact.Grid,
	                    { columns: 2 },
	                    _react2.default.createElement(
	                        _semanticUiReact.Grid.Column,
	                        null,
	                        !this.state.isLoading && _react2.default.createElement(
	                            _semanticUiReact.Segment,
	                            { basic: true },
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Transaction:'
	                                ),
	                                ' ',
	                                this.state.tx
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Message:'
	                                ),
	                                ' ',
	                                this.state.message,
	                                ' '
	                            )
	                        ),
	                        this.state.isLoading && _react2.default.createElement(
	                            _semanticUiReact.Segment,
	                            { basic: true },
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Searching blockchain...'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _semanticUiReact.Grid.Column,
	                        null,
	                        _react2.default.createElement(
	                            _semanticUiReact.Segment,
	                            { basic: true },
	                            _react2.default.createElement(
	                                _semanticUiReact.Message,
	                                { color: 'teal' },
	                                _react2.default.createElement(
	                                    _semanticUiReact.Message.Header,
	                                    null,
	                                    'Key Terms'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    _react2.default.createElement(
	                                        'strong',
	                                        null,
	                                        'Transaction'
	                                    ),
	                                    _react2.default.createElement('br', null),
	                                    'Think of this as the receipt for your transaction. With this, you can query the blockchain and find all of the information about this transaction. The best part is that anyone else can also do the same. This is why the blockchain is a great tool for people or industries that have to track and reconcile a variety of different inputs that come from disaperate sources.'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    _react2.default.createElement(
	                                        'strong',
	                                        null,
	                                        'Gas'
	                                    ),
	                                    _react2.default.createElement('br', null),
	                                    'This is the how a transaction is powered through the Ethereum blockchain. Each operation on the Ethereum network has a computational cost, which is measured in "gas". If you send too little "gas" with your Ethereum transaction, it will not be saved onto the blockchain and the "gas" that was sent with the original transaction will be given to the miner (individuals or groups who use their computer cycles to verify transactions).'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return App2Container;
	}(_react2.default.Component);

	exports.default = App2Container;

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(925);

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(926);
	var bind = __webpack_require__(927);
	var Axios = __webpack_require__(929);
	var defaults = __webpack_require__(930);

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance(defaults);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(947);
	axios.CancelToken = __webpack_require__(948);
	axios.isCancel = __webpack_require__(944);

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(949);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(927);
	var isBuffer = __webpack_require__(928);

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ }),

/***/ 927:
/***/ (function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),

/***/ 928:
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */

	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}

	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(930);
	var utils = __webpack_require__(926);
	var InterceptorManager = __webpack_require__(941);
	var dispatchRequest = __webpack_require__(942);

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	  config.method = config.method.toLowerCase();

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	module.exports = Axios;


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(926);
	var normalizeHeaderName = __webpack_require__(931);

	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(932);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(932);
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	module.exports = defaults;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(926);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(926);
	var settle = __webpack_require__(933);
	var buildURL = __webpack_require__(936);
	var parseHeaders = __webpack_require__(937);
	var isURLSameOrigin = __webpack_require__(938);
	var createError = __webpack_require__(934);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(939);

	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;

	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(940);

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(934);

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(935);

	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),

/***/ 935:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};


/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(926);

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }

	      if (!utils.isArray(val)) {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};


/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(926);

	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });

	  return parsed;
	};


/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(926);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;

	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),

/***/ 939:
/***/ (function(module, exports) {

	'use strict';

	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';

	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}

	module.exports = btoa;


/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(926);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));

	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }

	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }

	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }

	        if (secure === true) {
	          cookie.push('secure');
	        }

	        document.cookie = cookie.join('; ');
	      },

	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },

	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(926);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;


/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(926);
	var transformData = __webpack_require__(943);
	var isCancel = __webpack_require__(944);
	var defaults = __webpack_require__(930);
	var isAbsoluteURL = __webpack_require__(945);
	var combineURLs = __webpack_require__(946);

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};


/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(926);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};


/***/ }),

/***/ 944:
/***/ (function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),

/***/ 945:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),

/***/ 946:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),

/***/ 947:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	module.exports = Cancel;


/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(947);

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	module.exports = CancelToken;


/***/ }),

/***/ 949:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ })

});