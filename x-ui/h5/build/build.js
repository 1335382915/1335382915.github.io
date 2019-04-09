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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var evalAllowed = false;
try {
  eval('evalAllowed = true');
} catch (e) {
  // eval not allowed due to CSP
}

// RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods
var platformSupported = !!Object.setPrototypeOf && evalAllowed;

if (true) {
  if (false) {
    // we are not in prod mode, but RHL could not be activated
    console.warn('React-Hot-Loaded is not supported in this environment');
  }
  module.exports = __webpack_require__(14);
} else {
  module.exports = require('./dist/react-hot-loader.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(10);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(18)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(21)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(24);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseFont = parseInt(document.documentElement.style.fontSize);

var _default = {
    window: {
        width: document.body.clientWidth,
        height: document.body.clientHeight
        //screenHeight: Dimensions.get('window').height
    },
    theme: {
        mainColor: '#ff4f4f',
        minorColor: '#333333',
        lineColor: '#eeeeee'
    },
    px2rem: function px2rem(pxv) {
        return parseInt(pxv) / 75 + 'rem';
    },
    rem2px: function rem2px(remv) {
        return parseFloat(remv) * 75 + 'px';
    },
    getDpr: function getDpr() {
        var dpr = window.devicePixelRatio;
        var isIPhone = window.navigator.appVersion.match(/iphone/gi);
        if (dpr > 3) dpr = 3;
        if (!isIPhone) dpr = 1;
        return dpr;
    },
    getFontSize: function getFontSize(fspx) {
        var dpr = this.getDpr();
        return fspx * dpr + 'px';
    },

    style: {
        flexbox: function flexbox() {
            return _defineProperty({
                display: 'flex'
            }, 'display', '-webkit-flex');
        }
    },
    icon64: {
        back: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA2ElEQVRYR93XYQrDIAwF4OaGucHak82ewNwwQ1hhDEef5qmw/ipU+j5jiVa2xZcszt/+D6Cqu4h4zvlEqkutgKomEXmUYHc/zCzdIWiAz/DpgEr4aWb73ezL83AFIuFhQDQ8BGCEdwNY4V0AZngzgB3eBBgRDgNGhUOAd29/Xk3F3eEmQ2lEFUAyswN5OTIG6oSVJaAhIECZySgEDBiFaAKMQDQD2IguABPRDWAhQgAGIgyIIiiAH4i5p+JvxPRj+dX3y95R7pF/Amg3RDaUyBjaN9CLWA54AYnZySGc5hn7AAAAAElFTkSuQmCC',
        right: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPElEQVRYR+3W4W3CQAwFYHuCztANGKHdwJmgMEHbCWCEdILCBHkj0A3KBozQTvDQSYkUohDuYgv+cP8iJXpfbJ/uVO689M758gBkV8DMtqr6RrIG8BnVumxAVVXsQkluAawiENkAM6tV9b2HgIisAPx5INmAFNK1oYf4FZFXD6II0CI2qrqOQhQDWsRSVb8jELMAE4gKwLFkJmYDLiDSQKaZSLORtVyAHqIWkaf0TLII4Qa0iIWq7ucgQgAeRBjgAuII4HlqGKIBZ9tTRA5N0yxuAjCzYfg/yZdrOyKkAiPhhzb86jnhBnjCU2tcAG+4CxARPhtgZmcnYpr23J4Pd0RxC4Z3Ak94cQVGwn9I2k0uJCNXsh2AZdaRN/FSdgsGl9KQ8KIWdINH8gvAh/fPu++zKxAV6N4F0ZBHBU6sr84hNDPE8wAAAABJRU5ErkJggg==',
        backWhite: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA0klEQVRYR93XUQqDMBAE0J2Ttp6setItWyxISeskO2ug+RPEeSYyibDJA5Pz7f8A7n43MwewMbMrnQF3X83stgcvAOL655ABPsIj9DpAI3wDEEtxOtIzkAkPXQqQDU8BFOHDAFX4EEAZ3g1Qh3cBKsJpQFU4Bdi7/XFoFLpkTluI6YEGYAWwMA9n7qGKqLEEMgQFiDepQtCAKkQXoALRDVAjhgBKxDBAhUgBFIg0IIuQAL4grjuUvit36rH8gHidhpl/Amo3ZDaUzD2yb2AUMR3wBNGcgSHOnzBkAAAAAElFTkSuQmCC',
        arrowDown: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA40lEQVRYR+3VYQ3CMBAF4HcOkDAHCwoAB1cFIAUpONhJQMIs4AAUlDRhpAnbej2a7M/1b5e+ry9tR9h40Mb5cIA34A14Az8NMPMVwAFAEJFnq4eKmW8AehHZ52v+AEII9wSIMY4ATi0QKZyIzgAewzB0qwBm3hFRQvQtEFn4K8Z4FJG0se+YPYStEKXwpFi8Bf8iNOGrgDRpRWjDiwALoiZcBahB1IarARqEJbwKsIawhlcDFhAjEV0AzN7z0ktq+hnlt+MTYAo3NTDtKEN0cy9caefTvKkB7eKa7xzgDXgD3sAbFmzGIQusUd8AAAAASUVORK5CYII=',
        arrowUp: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1UlEQVRYR+3VwQ2DMAwF0O8Nukm7QcsGyaTxBmWEsgkbpHLVSCikgJ1KXJwLB4T+4wsbwsmHTs6HA7wBb8DcQAjhAuAJYAYQmVmu6mMClHAiuklizvkFYLAg1IAqfPq+8tWKUAHq8JzzQwBENAIwIQ4DWuGlcrlnRRwCbIWXr86K2AUcCe9BbAI04VbET4Al3IJoAnrCtYgV4B/hGsQKEGOUmb4DmGTOLdttuY+r6RiZeVjebwFkrcp67Q5vNDGnlD7Lq5zdMVT/XZQPOMAb8Aa8AW/gDQQawyGmIwcTAAAAAElFTkSuQmCC'
    }
};
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(baseFont, 'baseFont', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/common/util.d.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/common/util.d.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var errorInfo = function errorInfo(propName, componentName, info) {
    return 'Invalid prop `' + propName + '` supplied to `' + componentName + '`, ' + info;
};

var _default = {
    customMinValueTypes: function customMinValueTypes(props, propName, componentName) {
        if (typeof props[propName] !== 'number') {
            return new Error(errorInfo(propName, componentName, 'it must be number'));
        }
        if (props[propName] > props['maxValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be less than maxValue'));
        }
    },
    customMaxValueTypes: function customMaxValueTypes(props, propName, componentName) {
        if (typeof props[propName] !== 'number') {
            return new Error(errorInfo(propName, componentName, 'it must be number'));
        }
        if (props[propName] < props['minValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be greater than minValue'));
        }
    },
    customValueTypes: function customValueTypes(props, propName, componentName) {
        if (typeof props[propName] !== 'undefined') {
            if (typeof props[propName] !== 'number') {
                return new Error(errorInfo(propName, componentName, 'it must be number'));
            }
        }
        if (props[propName] < props['minValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be greater than minValue'));
        } else if (props[propName] > props['maxValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be less than maxValue'));
        }
    },
    customPageNumTypes: function customPageNumTypes(props, propName, componentName) {
        if (props[propName] != null) {
            if (typeof props[propName] !== 'number') {
                return new Error(errorInfo(propName, componentName, 'it must be number'));
            } else {
                if (props[propName] < 1) {
                    return new Error(errorInfo(propName, componentName, 'it must be greater than or equal to 1'));
                } else if (props[propName] > props['pageTotal']) {
                    return new Error(errorInfo(propName, componentName, 'it must be less than or equal to pageTotal'));
                }
            }
        }
    },
    customPageTotalTypes: function customPageTotalTypes(props, propName, componentName) {
        if (typeof props[propName] != 'number') {
            return new Error(errorInfo(propName, componentName, 'it must be number'));
        } else if (props[propName] < 1) {
            return new Error(errorInfo(propName, componentName, 'it must be greater than or equal to 1'));
        }
    },
    customProgressTypes: function customProgressTypes(props, propName, componentName) {
        if (typeof props[propName] !== 'number') {
            return new Error(errorInfo(propName, componentName, 'it must be number'));
        }
        if (props[propName] < props['minValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be greater than minValue'));
        } else if (props[propName] > props['maxValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be less than maxValue'));
        }
    }
};
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(errorInfo, 'errorInfo', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/common/error.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/common/error.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(16);
} else {
  module.exports = __webpack_require__(17);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BUTTON_TYPE = exports.BUTTON_SIZE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BUTTON_SIZE = exports.BUTTON_SIZE = {
    BIG: 'big',
    MIDDLE: 'middle',
    SMALL: 'small'
};

var BUTTON_TYPE = exports.BUTTON_TYPE = {
    FILL: 'fill',
    GHOST: 'ghost'
    /**
     * inline: 是否是行内按钮
     * buttonColor: 按钮背景色
     * buttonStyle: 自定义按钮样式
     * size: 按钮大小
     * type: 按钮类型
     * textStyle: 文本样式
     * disabled: 是否禁用
     * icon: 按钮小图标
     * onPress: 触摸函数
     */
};
var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button(props) {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var marginLeft = 0;
            var isGhost = this.props.type == BUTTON_TYPE.GHOST;
            var color = isGhost ? this.props.buttonColor : 'white';
            var buttonColor = isGhost ? 'transparent' : this.props.buttonColor;
            var buttonClass = this.props.inline ? 'x-button-inline x-button-' + this.props.size.toLowerCase() : 'x-button-block';
            if (this.props.inline && this.props.icon) {
                switch (this.props.size) {
                    case BUTTON_SIZE.SMALL:
                        marginLeft = 5;
                        break;
                    case BUTTON_SIZE.MIDDLE:
                        marginLeft = 10;
                        break;
                    case BUTTON_SIZE.BIG:
                        marginLeft = 15;
                        break;
                    default:
                        break;
                }
            }
            return _react2.default.createElement(
                'div',
                {
                    className: 'x-button-container ' + buttonClass + (this.props.disabled ? ' x-button-disabled' : ''),
                    style: _extends({
                        backgroundColor: buttonColor,
                        borderColor: this.props.buttonColor
                    }, this.props.buttonStyle),
                    onClick: function onClick() {
                        return !_this2.props.disabled ? _this2.props.onPress() : {};
                    }
                },
                _react2.default.createElement(
                    'div',
                    { className: 'x-button-content' },
                    this.props.icon ? this.props.icon : null,
                    _react2.default.createElement(
                        'span',
                        { style: _extends({ color: color }, this.props.textStyle, { marginLeft: _util2.default.px2rem(marginLeft) }) },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return Button;
}(_react.Component);

Button.defaultProps = {
    inline: false,
    buttonColor: '#ff4f4f',
    buttonStyle: {},
    size: BUTTON_SIZE.MIDDLE,
    type: BUTTON_TYPE.FILL,
    textStyle: {},
    disabled: false,
    icon: null,
    onPress: function onPress() {}
};
Button.propTypes = {
    inline: _propTypes2.default.bool,
    buttonColor: _propTypes2.default.string,
    buttonStyle: _propTypes2.default.object,
    size: _propTypes2.default.string,
    type: _propTypes2.default.string,
    textStyle: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    icon: _propTypes2.default.element,
    onPress: _propTypes2.default.func
};
var _default = Button;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(BUTTON_SIZE, 'BUTTON_SIZE', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/button/index.js');
    reactHotLoader.register(BUTTON_TYPE, 'BUTTON_TYPE', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/button/index.js');
    reactHotLoader.register(Button, 'Button', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/button/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/button/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * listStyle: list样式
 * title: 列表标题
 * titleStyle: 自定义标题样式
 * rightContent: list右侧内容
 * rightIcon: 右侧icon
 * showRightIcon: 是否显示右侧icon
 *  leftContent: list左侧内容
 *  leftContentFlex: 左侧内容的垂直布局（flex-start、center、flex-end、stretch、baseline）
 *  rightContentFlex: 右侧内容的垂直布局（flex-start、center、flex-end、stretch、baseline）
 *  onPress: list点击时的回调
 *  showLine: 是否显示底部分割线
 *  lineMargin: 底部分割线的margin 基于html font-size
 */

var List = function (_Component) {
    _inherits(List, _Component);

    function List(props) {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'x-list-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'x-list-content', onClick: function onClick() {
                            return _this2.props.onPress();
                        }, style: this.props.listStyle },
                    _react2.default.createElement(
                        'div',
                        { className: 'x-list-row-flex x-list-align-' + this.props.leftContentFlex },
                        this.props.leftContent,
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'p',
                                { className: 'x-list-title', style: this.props.titleStyle },
                                this.props.title
                            ),
                            this.props.children
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'x-list-row-flex x-list-align-' + this.props.rightContentFlex },
                        this.props.rightContent,
                        this.props.showRightIcon ? this.props.rightIcon : null
                    )
                ),
                this.props.showLine ? _react2.default.createElement('hr', { style: { margin: '0 ' + _util2.default.px2rem(this.props.lineMargin) } }) : null
            );
        }
    }]);

    return List;
}(_react.Component);

List.defaultProps = {
    listStyle: {},
    title: '',
    titleStyle: {},
    rightContent: null,
    rightIcon: _react2.default.createElement('img', { className: 'x-list-icon', src: _util2.default.icon64.right }),
    showRightIcon: true,
    leftContent: null,
    leftContentFlex: 'center',
    rightContentFlex: 'center',
    onPress: function onPress() {},
    showLine: false,
    lineMargin: 30
};
List.propTypes = {
    listStyle: _propTypes2.default.object,
    title: _propTypes2.default.string,
    titleStyle: _propTypes2.default.object,
    rightContent: _propTypes2.default.element,
    rightIcon: _propTypes2.default.element,
    showRightIcon: _propTypes2.default.bool,
    leftContent: _propTypes2.default.element,
    leftContentFlex: _propTypes2.default.string,
    rightContentFlex: _propTypes2.default.string,
    onPress: _propTypes2.default.func,
    showLine: _propTypes2.default.bool,
    lineMargin: _propTypes2.default.number
};
var _default = List;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(List, 'List', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/list/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/list/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _counter = __webpack_require__(15);

var _counter2 = _interopRequireDefault(_counter);

var _actionSheet = __webpack_require__(25);

var _actionSheet2 = _interopRequireDefault(_actionSheet);

var _badge = __webpack_require__(28);

var _badge2 = _interopRequireDefault(_badge);

var _button = __webpack_require__(11);

var _button2 = _interopRequireDefault(_button);

var _card = __webpack_require__(33);

var _card2 = _interopRequireDefault(_card);

var _carousel = __webpack_require__(36);

var _carousel2 = _interopRequireDefault(_carousel);

var _checkbox = __webpack_require__(39);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _collapse = __webpack_require__(42);

var _collapse2 = _interopRequireDefault(_collapse);

var _drawerLayout = __webpack_require__(47);

var _drawerLayout2 = _interopRequireDefault(_drawerLayout);

var _flex = __webpack_require__(50);

var _flex2 = _interopRequireDefault(_flex);

var _header = __webpack_require__(53);

var _header2 = _interopRequireDefault(_header);

var _icon = __webpack_require__(56);

var _icon2 = _interopRequireDefault(_icon);

var _list = __webpack_require__(12);

var _list2 = _interopRequireDefault(_list);

var _pagination = __webpack_require__(60);

var _pagination2 = _interopRequireDefault(_pagination);

var _radio = __webpack_require__(63);

var _radio2 = _interopRequireDefault(_radio);

var _search = __webpack_require__(66);

var _search2 = _interopRequireDefault(_search);

var _slider = __webpack_require__(69);

var _slider2 = _interopRequireDefault(_slider);

var _switch = __webpack_require__(72);

var _switch2 = _interopRequireDefault(_switch);

var _tabBar = __webpack_require__(75);

var _tabBar2 = _interopRequireDefault(_tabBar);

var _toast = __webpack_require__(80);

var _toast2 = _interopRequireDefault(_toast);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(83);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.xui = {
    Counter: _counter2.default,
    ActionSheet: _actionSheet2.default,
    Badge: _badge2.default,
    Button: _button2.default,
    BUTTON_SIZE: _button.BUTTON_SIZE,
    BUTTON_TYPE: _button.BUTTON_TYPE,
    Card: _card2.default,
    Carousel: _carousel2.default,
    Checkbox: _checkbox2.default,
    Collapse: _collapse2.default,
    DrawerLayout: _drawerLayout2.default,
    DRAWER_POSITION: _drawerLayout.DRAWER_POSITION,
    Flex: _flex2.default,
    Header: _header2.default,
    Icon: _icon2.default,
    List: _list2.default,
    Pagination: _pagination2.default,
    Radio: _radio2.default,
    Search: _search2.default,
    Slider: _slider2.default,
    Switch: _switch2.default,
    TabBar: _tabBar2.default,
    Toast: _toast2.default

    // import React from 'react' 
    // import ReactDOM from 'react-dom'
};
var Application = function (_React$Component) {
    _inherits(Application, _React$Component);

    function Application(props) {
        _classCallCheck(this, Application);

        return _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this, props));
    }

    _createClass(Application, [{
        key: 'render',
        value: function render() {
            var imgArr = ['../image/1.jpeg', '../image/2.jpeg', '../image/3.jpeg'];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _carousel2.default,
                    {
                        width: '100vw',
                        height: '30vh',
                        autoPlay: false,
                        index: 2,
                        onIndexChanged: function onIndexChanged(index) {
                            return console.log(index);
                        }
                    },
                    imgArr && imgArr.map(function (url, index) {
                        return _react2.default.createElement('img', { key: index, src: url });
                    })
                ),
                _react2.default.createElement(
                    _collapse2.default,
                    {
                        accordion: true,
                        onChange: function onChange(activeKey) {
                            return activeKey && alert(activeKey);
                        },
                        style: { marginBottom: '0.4rem' },
                        activeKey: 'panel2'
                    },
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题1', panelKey: 'panel1' },
                        _react2.default.createElement(
                            'p',
                            { className: 'panel-margin' },
                            '\u8FD9\u662F\u4E00\u4E2A\u542B\u6709\u56DE\u8C03\u51FD\u6570\u7684\u624B\u98CE\u7434\u6A21\u5F0F\u7684\u9762\u677F\u5B50\u7EC4\u4EF6'
                        )
                    ),
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题2', panelKey: 'panel2' },
                        _react2.default.createElement(
                            'p',
                            { className: 'panel-margin' },
                            '\u8FD9\u662F\u4E00\u4E2A\u542B\u6709\u56DE\u8C03\u51FD\u6570\u7684\u624B\u98CE\u7434\u6A21\u5F0F\u7684\u9762\u677F\u5B50\u7EC4\u4EF6'
                        )
                    ),
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题3', panelKey: 'panel3' },
                        _react2.default.createElement(
                            'p',
                            { className: 'panel-margin' },
                            '\u8FD9\u662F\u4E00\u4E2A\u542B\u6709\u56DE\u8C03\u51FD\u6570\u7684\u624B\u98CE\u7434\u6A21\u5F0F\u7684\u9762\u677F\u5B50\u7EC4\u4EF6'
                        )
                    )
                )
            );
        }
    }]);

    return Application;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Application, null), document.getElementById('app'));
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Application, 'Application', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(2)),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},AppContainer=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,e.apply(this,arguments))}return inherits(t,e),t.prototype.render=function(){return React.Children.only(this.props.children)},t}(React.Component),hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,t){return e===t},setConfig=function(){},cold=function(e){return e},configureComponent=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold,exports.configureComponent=configureComponent;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _error = __webpack_require__(9);

var _error2 = _interopRequireDefault(_error);

__webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_VALUE = 99;
var MIN_VALUE = 0;
var STEP_NUM = 1;

/**
 * defaultValue: 计数器默认值
 * value: 计数器的值
 * maxValue: 最大值
 * minValue: 最小值
 * stepNum: 跨度值
 * borderColor: 边框颜色
 * btnColor: 按钮颜色
 * onChange: value发生改变时的回调
 * disabled: 是否禁用
 */

var Counter = function (_Component) {
    _inherits(Counter, _Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.defaultValue = !isNaN(_this.props.defaultValue) ? _this.props.defaultValue : 0;
        _this.state = {
            value: !isNaN(_this.props.value) ? _this.props.value : _this.defaultValue
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.defaultValue < this.props.minValue) {
                this.setState({
                    value: this.props.minValue
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value != this.props.value) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(val) {
            var value = Number(val);
            //NaN处理
            if (isNaN(value)) value = this.state.value;
            //不能出现负数
            if (value < MIN_VALUE) value = MIN_VALUE;
            if (value < this.props.minValue) value = this.props.minValue;
            if (value > this.props.maxValue) value = this.props.maxValue;
            this.setState({
                value: value
            });
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            this.props.onChange && this.props.onChange(this.state.value);
        }
    }, {
        key: 'valueChanged',
        value: function valueChanged(type) {
            if (this.props.disabled) return;
            var _props = this.props,
                minValue = _props.minValue,
                maxValue = _props.maxValue,
                stepNum = _props.stepNum,
                onChange = _props.onChange;

            var newValue = this.state.value;
            if (type == 'minus') {
                newValue = newValue - stepNum <= minValue ? minValue : newValue - stepNum;
            } else {
                newValue = newValue + stepNum >= maxValue ? maxValue : newValue + stepNum;
            }
            newValue = Number(newValue);
            //不能出现负数
            if (newValue < MIN_VALUE) newValue = MIN_VALUE;
            if (!isNaN(this.props.value)) {
                onChange && onChange(newValue);
            } else {
                this.setState({
                    value: newValue
                }, function () {
                    onChange && onChange(newValue);
                });
            }
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                minValue = _props2.minValue,
                maxValue = _props2.maxValue,
                disabled = _props2.disabled,
                btnColor = _props2.btnColor,
                borderColor = _props2.borderColor;

            var reachedMin = this.state.value === minValue;
            var reachedMax = this.state.value === maxValue;
            var leftDisabledColor = reachedMin || disabled ? '#d5d3d3' : '#333333';
            var rightDisabledColor = reachedMax || disabled ? '#d5d3d3' : '#333333';
            var btnStyle = {
                borderColor: borderColor,
                backgroundColor: btnColor
            };
            return _react2.default.createElement(
                'div',
                { className: 'x-counter-container', style: { borderColor: borderColor } },
                _react2.default.createElement(
                    'button',
                    { className: 'x-counter-left', onClick: function onClick() {
                            return _this2.valueChanged('minus');
                        }, style: _extends({ color: leftDisabledColor }, btnStyle) },
                    '-'
                ),
                disabled ? _react2.default.createElement(
                    'div',
                    { className: 'x-counter-disabled-box' },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.value
                    )
                ) : _react2.default.createElement('input', {
                    className: 'x-counter-input-box',
                    type: 'tel',
                    value: this.state.value,
                    onChange: function onChange(e) {
                        return _this2.onChange(e.target.value);
                    },
                    onBlur: function onBlur() {
                        return _this2.onBlur();
                    }
                }),
                _react2.default.createElement(
                    'button',
                    { className: 'x-counter-right', onClick: function onClick() {
                            return _this2.valueChanged('add');
                        }, style: _extends({ color: rightDisabledColor }, btnStyle) },
                    '+'
                )
            );
        }
    }]);

    return Counter;
}(_react.Component);

Counter.defaultProps = {
    maxValue: MAX_VALUE,
    minValue: MIN_VALUE,
    stepNum: STEP_NUM,
    btnColor: '#eeeeee',
    borderColor: '#d5d3d3',
    onChange: function onChange() {},
    disabled: false
};
Counter.propTypes = {
    defaultValue: _error2.default.customValueTypes,
    value: _error2.default.customValueTypes,
    maxValue: _error2.default.customMaxValueTypes,
    minValue: _error2.default.customMinValueTypes,
    stepNum: _propTypes2.default.number,
    btnColor: _propTypes2.default.string,
    borderColor: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    disabled: _propTypes2.default.bool
};
var _default = Counter;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Counter, 'Counter', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/counter/index.js');
    reactHotLoader.register(MAX_VALUE, 'MAX_VALUE', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/counter/index.js');
    reactHotLoader.register(MIN_VALUE, 'MIN_VALUE', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/counter/index.js');
    reactHotLoader.register(STEP_NUM, 'STEP_NUM', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/counter/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/counter/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.4
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.8.4
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(10);
var assign = __webpack_require__(19);

var ReactPropTypesSecret = __webpack_require__(8);
var checkPropTypes = __webpack_require__(20);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(8);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(8);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(23);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-counter-container .x-counter-disabled-box, .x-counter-container .x-counter-input-box {\n  background-color: white;\n  text-align: center;\n  width: 100%;\n  display: inline-block;\n  border: 0px;\n  -webkit-border-radius: 0.13333rem;\n  border-radius: 0.13333rem; }\n\n.x-counter-container {\n  border: 1px solid;\n  display: inline-block;\n  height: 0.8rem;\n  position: relative;\n  width: 2.93333rem;\n  box-sizing: content-box;\n  -webkit-border-radius: 0.13333rem;\n  border-radius: 0.13333rem; }\n  .x-counter-container button {\n    width: 0.93333rem;\n    height: 0.8rem;\n    line-height: 0.8rem;\n    text-align: center;\n    border: 0px;\n    font-size: 16px;\n    display: inline-block;\n    position: absolute;\n    border-style: solid; }\n    [data-dpr=\"2\"] .x-counter-container button {\n      font-size: 32px; }\n    [data-dpr=\"3\"] .x-counter-container button {\n      font-size: 48px; }\n  .x-counter-container .x-counter-left {\n    left: 0;\n    border-right-width: 1px;\n    -webkit-border-top-left-radius: 0.10667rem;\n    border-top-left-radius: 0.10667rem;\n    -webkit-border-bottom-left-radius: 0.10667rem;\n    border-bottom-left-radius: 0.10667rem; }\n  .x-counter-container .x-counter-right {\n    right: 0;\n    border-left-width: 1px;\n    -webkit-border-top-right-radius: 0.10667rem;\n    border-top-right-radius: 0.10667rem;\n    -webkit-border-bottom-right-radius: 0.10667rem;\n    border-bottom-right-radius: 0.10667rem; }\n  .x-counter-container .x-counter-disabled-box {\n    line-height: 0.8rem; }\n  .x-counter-container .x-counter-input-box {\n    height: 100%; }\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITEM_HEIGHT = 120;
var LINE_HEIGHT = 2;
var TITLE_HEIGHT = 80;
var CANCEL_MARGIN = 20;
var animateTime = 0.2;

/**
 * title: 标题
 * options: 每个按钮的标题，也可以是自定义组件 ['button1', <Text>button2</Text>]
 * showCancelButton: 是否显示取消按钮
 * cancelButtonTitle: “取消”按钮的标题
 * cancelButtonColor: “取消”按钮的颜色
 * backdropPressToClose: 点击遮罩层时是否关闭ActionSheet
 * onPress: ActionSheet点击事件，会返回每个options的索引
 */

var ActionSheet = function (_Component) {
    _inherits(ActionSheet, _Component);

    function ActionSheet(props) {
        _classCallCheck(this, ActionSheet);

        var _this = _possibleConstructorReturn(this, (ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call(this, props));

        _this.translateY = _this.calculateHeight(props);
        _this.state = {
            isShow: false,
            opacity: 0,
            sheetAnim: _this.translateY
        };
        _this.timer = null;
        return _this;
    }

    _createClass(ActionSheet, [{
        key: 'calculateHeight',
        value: function calculateHeight(props) {
            var optionsLength = props.options.length;
            if (props.showCancelButton) {
                optionsLength++;
            }
            var height = optionsLength * ITEM_HEIGHT;
            height += (optionsLength - 1) * LINE_HEIGHT;
            if (this.props.showCancelButton) {
                height += CANCEL_MARGIN;
                height -= LINE_HEIGHT;
            }
            if (this.props.title) {
                height += TITLE_HEIGHT;
            }
            return _util2.default.px2rem(height);
        }
    }, {
        key: 'show',
        value: function show() {
            var _this2 = this;

            this.setState(function (prevState) {
                return {
                    isShow: true
                };
            });
            this.timer = setTimeout(function () {
                return _this2.setState({ opacity: 0.5, sheetAnim: 0 });
            }, 0);
        }
    }, {
        key: 'close',
        value: function close(callback) {
            var _this3 = this;

            this.timer && clearTimeout(this.timer);
            this.setState(function (prevState) {
                return {
                    opacity: 0,
                    sheetAnim: _this3.translateY
                };
            });
            this.timer = setTimeout(function () {
                _this3.setState({
                    isShow: false
                });
                callback && callback();
            }, animateTime * 1000);
        }
    }, {
        key: 'renderButton',
        value: function renderButton() {
            var _this4 = this;

            var _options = this.props.options;
            var options = this.props.showCancelButton ? _options.concat(this.props.cancelButtonTitle) : _options;
            if (this.props.title) {
                options.splice(0, 0, this.props.title);
            }
            return options.map(function (item, index) {
                var lineView = null;
                if (_this4.props.showCancelButton) {
                    lineView = options.length > 1 && index != options.length - 2 && index != options.length - 1 ? _react2.default.createElement('hr', null) : null;
                } else {
                    lineView = index != options.length - 1 ? _react2.default.createElement('hr', null) : null;
                }
                var isCancel = _this4.props.showCancelButton && index == options.length - 1;
                var isTitle = _this4.props.title && index == 0;
                var marginTop = isCancel ? CANCEL_MARGIN : 0;
                var height = isTitle ? _util2.default.px2rem(TITLE_HEIGHT) : _util2.default.px2rem(ITEM_HEIGHT);
                var fontClass = isTitle ? 'x-ah-title-text' : 'x-ah-item-text';
                var fontWeight = isCancel ? 'bold' : 'normal';
                var color = isCancel ? _this4.props.cancelButtonColor : _util2.default.theme.minorColor;
                color = isTitle ? '#939393' : color;
                var _index = _this4.props.title ? index - 1 : index;
                var _onPress = function _onPress() {};
                //点击的是title
                if (_this4.props.title && index == 0) {}
                //点击的是cancel
                else if (isCancel) {
                        _onPress = function _onPress() {
                            return _this4.close();
                        };
                    } else {
                        _onPress = function _onPress() {
                            return _this4.props.onPress(_index);
                        };
                    }
                return _react2.default.createElement(
                    'div',
                    { key: index },
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'x-ah-item',
                            style: { marginTop: marginTop, height: height },
                            onClick: _onPress
                        },
                        _react2.default.createElement(
                            'span',
                            { className: '' + fontClass, style: { fontWeight: fontWeight, color: color } },
                            item
                        )
                    ),
                    lineView
                );
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.translateY = this.calculateHeight(nextProps);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var maskStyle = {
                WebkitTransition: 'all ' + animateTime + 's',
                transition: 'all ' + animateTime + 's',
                backgroundColor: 'rgba(0, 0, 0, ' + this.state.opacity + ')'
            };
            var optionsStyle = {
                WebkitTransition: 'all ' + animateTime + 's',
                transition: 'all ' + animateTime + 's',
                bottom: '-' + this.state.sheetAnim
            };
            var externalClass = this.state.isShow ? 'x-show' : 'x-hide';
            return _react2.default.createElement(
                'div',
                {
                    className: 'x-ah-mask ' + externalClass,
                    style: maskStyle,
                    onClick: this.props.backdropPressToClose ? function () {
                        return _this5.close();
                    } : function () {}
                },
                _react2.default.createElement(
                    'div',
                    { className: 'x-ah-bd ' + externalClass, style: optionsStyle },
                    this.renderButton()
                )
            );
        }
    }]);

    return ActionSheet;
}(_react.Component);

ActionSheet.defaultProps = {
    title: '',
    options: [],
    showCancelButton: true,
    cancelButtonTitle: '取消',
    cancelButtonColor: '#108EE9',
    backdropPressToClose: false,
    onPress: function onPress() {}
};
ActionSheet.propTypes = {
    title: _propTypes2.default.string,
    options: _propTypes2.default.array,
    showCancelButton: _propTypes2.default.bool,
    cancelButtonTitle: _propTypes2.default.string,
    cancelButtonColor: _propTypes2.default.string,
    backdropPressToClose: _propTypes2.default.bool,
    onPress: _propTypes2.default.func
};
var _default = ActionSheet;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(ActionSheet, 'ActionSheet', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/actionSheet/index.js');
    reactHotLoader.register(ITEM_HEIGHT, 'ITEM_HEIGHT', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/actionSheet/index.js');
    reactHotLoader.register(LINE_HEIGHT, 'LINE_HEIGHT', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/actionSheet/index.js');
    reactHotLoader.register(TITLE_HEIGHT, 'TITLE_HEIGHT', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/actionSheet/index.js');
    reactHotLoader.register(CANCEL_MARGIN, 'CANCEL_MARGIN', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/actionSheet/index.js');
    reactHotLoader.register(animateTime, 'animateTime', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/actionSheet/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/actionSheet/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(27);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-ah-bd hr {\n  background-color: #eeeeee;\n  height: 1px;\n  border: none;\n  margin: 0; }\n\n.x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-ah-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 99; }\n\n.x-ah-item {\n  background-color: white;\n  display: flex;\n  display: -webkit-flex;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.x-ah-item-text, .x-ah-title-text {\n  color: #333333; }\n\n.x-ah-item-text {\n  font-size: 18px; }\n  [data-dpr=\"2\"] .x-ah-item-text {\n    font-size: 36px; }\n  [data-dpr=\"3\"] .x-ah-item-text {\n    font-size: 54px; }\n\n.x-ah-title-text {\n  font-size: 15px; }\n  [data-dpr=\"2\"] .x-ah-title-text {\n    font-size: 30px; }\n  [data-dpr=\"3\"] .x-ah-title-text {\n    font-size: 45px; }\n\n.x-ah-bd {\n  position: absolute;\n  background-color: #e8e8e8;\n  width: 100%; }\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_COUNT = 99;

/**
 * num: 角标数字
 * defaultBackColor: 角标背景色
 * fontColor: 角标数字颜色
 * text: 自定义角标内容
 * style: 自定义徽标样式
 */

var Badge = function (_Component) {
    _inherits(Badge, _Component);

    function Badge(props) {
        _classCallCheck(this, Badge);

        var _this = _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).call(this, props));

        _this.state = {};
        return _this;
    }
    //规定每个属性的变量类型


    _createClass(Badge, [{
        key: 'render',
        value: function render() {
            //一旦数字超过最大数字，超出部分用加号代替
            var actualNum = this.props.num > MAX_COUNT ? MAX_COUNT + '+' : this.props.num.toString();
            var numLength = this.props.num > MAX_COUNT ? (MAX_COUNT + '').length + 1 : this.props.num.toString().length;
            var rightPosition = -7;
            var offset = rightPosition - (numLength - 1) * 4;
            if (numLength === 3) offset -= 4; // add after
            var badgeNumStyle = {
                backgroundColor: this.props.defaultBackColor,
                right: _util2.default.px2rem(offset * 2)
                //如果指定了显示角标的组件，则将角标上浮在该组件的右上方，角标显示的位置由角标内容的长度自动调节
            };if (this.props.children) {
                return _react2.default.createElement(
                    'div',
                    { className: 'x-badge-container', style: this.props.style },
                    this.props.children,
                    _react2.default.createElement(
                        'div',
                        { className: 'x-badge-basic x-badge-num', style: badgeNumStyle },
                        _react2.default.createElement(
                            'span',
                            { style: { color: this.props.fontColor } },
                            actualNum
                        )
                    )
                );
            }
            //如果没有指定显示角标的组件，则只显示角标
            else {
                    return _react2.default.createElement(
                        'div',
                        { className: 'x-badge-basic', style: _extends({ backgroundColor: this.props.defaultBackColor }, this.props.style) },
                        _react2.default.createElement(
                            'span',
                            { style: { color: this.props.fontColor } },
                            this.props.text || actualNum
                        )
                    );
                }
        }
    }]);

    return Badge;
}(_react.Component);

Badge.defaultProps = {
    num: 0,
    defaultBackColor: '#ff4f4f',
    fontColor: 'white',
    text: '',
    style: {} };
Badge.propTypes = {
    num: _propTypes2.default.number,
    defaultBackColor: _propTypes2.default.string,
    fontColor: _propTypes2.default.string,
    text: _propTypes2.default.string,
    style: _propTypes2.default.object
};
var _default = Badge;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Badge, 'Badge', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/badge/index.js');
    reactHotLoader.register(MAX_COUNT, 'MAX_COUNT', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/badge/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/badge/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(30);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-badge-container {\n  position: relative;\n  display: inline-block; }\n\n.x-badge-basic {\n  padding: 0.02667rem 0.13333rem;\n  -webkit-border-radius: 0.4rem;\n  border-radius: 0.4rem;\n  display: inline-block; }\n  .x-badge-basic span {\n    font-size: 10px; }\n    [data-dpr=\"2\"] .x-badge-basic span {\n      font-size: 20px; }\n    [data-dpr=\"3\"] .x-badge-basic span {\n      font-size: 30px; }\n\n.x-badge-num {\n  position: absolute;\n  top: -0.21333rem; }\n", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(32);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-button-container {\n  -webkit-border-radius: 0.08rem;\n  border-radius: 0.08rem;\n  padding: 0.32rem 0;\n  text-align: center;\n  border: 1px solid;\n  box-sizing: border-box; }\n  .x-button-container span {\n    font-size: 18px; }\n    [data-dpr=\"2\"] .x-button-container span {\n      font-size: 36px; }\n    [data-dpr=\"3\"] .x-button-container span {\n      font-size: 54px; }\n  .x-button-container .x-button-content i {\n    margin-right: 0.01333rem; }\n\n.x-button-block {\n  min-height: 1rem; }\n\n.x-button-inline {\n  display: inline-block; }\n\n.x-button-small {\n  padding: 0.10667rem;\n  min-width: 0.10667rem; }\n  .x-button-small span {\n    font-size: 14px; }\n    [data-dpr=\"2\"] .x-button-small span {\n      font-size: 28px; }\n    [data-dpr=\"3\"] .x-button-small span {\n      font-size: 42px; }\n\n.x-button-middle {\n  padding: 0.21333rem;\n  min-width: 1.86667rem; }\n  .x-button-middle span {\n    font-size: 16px; }\n    [data-dpr=\"2\"] .x-button-middle span {\n      font-size: 32px; }\n    [data-dpr=\"3\"] .x-button-middle span {\n      font-size: 48px; }\n\n.x-button-big {\n  padding: 0.32rem;\n  min-width: 2.66667rem; }\n  .x-button-big span {\n    font-size: 20px; }\n    [data-dpr=\"2\"] .x-button-big span {\n      font-size: 40px; }\n    [data-dpr=\"3\"] .x-button-big span {\n      font-size: 60px; }\n\n.x-button-disabled {\n  opacity: 0.6; }\n", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
**最基本的卡片组件，仅仅定义了Card、Card.Header、Card.Body、Card.Footer的基本布局。
**可以通过定义属性来修改它们
**Card.Body定义了图片的样式以保证图片是铺满整个宽度的
**/

var Card = function (_Component) {
    _inherits(Card, _Component);

    function Card(props) {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-card', style: this.props.cardStyle },
                this.props.children
            );
        }
    }]);

    return Card;
}(_react.Component);

Card.defaultProps = {
    cardStyle: {}
};
Card.propTypes = {
    cardStyle: _propTypes2.default.object
};

var Header = function (_Component2) {
    _inherits(Header, _Component2);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-card-header', style: this.props.headerStyle },
                this.props.children
            );
        }
    }]);

    return Header;
}(_react.Component);

Header.defaultProps = {
    headerStyle: {}
};
Header.propTypes = {
    headerStyle: _propTypes2.default.object
};

var Body = function (_Component3) {
    _inherits(Body, _Component3);

    function Body(props) {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));
    }

    _createClass(Body, [{
        key: 'wrapBody',
        value: function wrapBody() {
            return _react2.default.Children.map(this.props.children, function (item, index) {
                if (item.type == 'img') {
                    return _react2.default.createElement(
                        'div',
                        { className: 'x-card-wrap-container' },
                        _react2.default.cloneElement(item, {
                            key: index,
                            style: item.props.style
                        })
                    );
                }
                return _react2.default.cloneElement(item, {
                    key: index,
                    style: item.props.style
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-card-body', style: this.props.bodyStyle },
                this.wrapBody()
            );
        }
    }]);

    return Body;
}(_react.Component);

Body.defaultProps = {
    bodyStyle: {}
};
Body.propTypes = {
    bodyStyle: _propTypes2.default.object
};

var Footer = function (_Component4) {
    _inherits(Footer, _Component4);

    function Footer(props) {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-card-footer', style: this.props.footerStyle },
                this.props.children
            );
        }
    }]);

    return Footer;
}(_react.Component);

Footer.defaultProps = {
    footerStyle: {}
};
Footer.propTypes = {
    footerStyle: _propTypes2.default.object
};


Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

var _default = Card;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Card, 'Card', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/card/index.js');
    reactHotLoader.register(Header, 'Header', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/card/index.js');
    reactHotLoader.register(Body, 'Body', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/card/index.js');
    reactHotLoader.register(Footer, 'Footer', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/card/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/card/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(35);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-card, .x-card-header, .x-card-footer {\n  border: 1px solid #eeeeee; }\n\n.x-card {\n  background-color: white; }\n\n.x-card-header {\n  padding: 0.4rem;\n  display: flex;\n  display: -webkit-flex;\n  border-width: 0 0 1px 0; }\n\n.x-card-body {\n  padding: 0.4rem; }\n\n.x-card-footer {\n  padding: 0.4rem;\n  display: flex;\n  display: -webkit-flex;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  border-width: 1px 0 0 0; }\n\n.x-card-wrap-container {\n  margin: -0.4rem -0.4rem 0 -0.4rem;\n  background-color: white; }\n  .x-card-wrap-container img {\n    width: 100%;\n    height: auto; }\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * index: 当前索引值
 * width：轮播图宽度（required）
 * height：轮播图高度（required）
 * autoPlay：是否自动播放
 * autoPlayTimeout：自动播放时每张图片的切换时间
 * showDot：是否展示圆点
 * dotColor：圆点的颜色
 * activeDotColor：激活圆点的颜色
 * dotWidth：圆点的宽度
 * onIndexChanged：索引值发生改变时的回掉
 */

var Carousel = function (_Component) {
    _inherits(Carousel, _Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        var _this$props = _this.props,
            index = _this$props.index,
            children = _this$props.children;

        _this.childNum = _this.props.children.length;
        var currentIndex = _this.props.index + 1 >= _this.childNum ? _this.childNum : _this.props.index + 1;
        _this.state = {
            currentIndex: currentIndex,
            offsetX: -currentIndex * 100,
            needAnimate: true
        };
        _this.previousX = 0;
        _this._offsetX = 0;
        _this.moveX = 0;
        _this.previousIndex = 0;
        _this.touchStartHandler = _this.touchStartHandler.bind(_this);
        _this.touchMoveHandler = _this.touchMoveHandler.bind(_this);
        _this.touchEndHandler = _this.touchEndHandler.bind(_this);
        _this.resetImgListPosition = _this.resetImgListPosition.bind(_this);
        _this._onVisibleChange = _this._onVisibleChange.bind(_this);
        _this.transitionend = '';
        return _this;
    }
    //兼容性处理


    _createClass(Carousel, [{
        key: "transitionEvent",
        value: function transitionEvent() {
            var transitions = {
                'transition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd'
            };
            for (var t in transitions) {
                if (this.carousel.style[t] !== undefined) {
                    return transitions[t];
                }
            }
        }
        //运行轮播图，启动定时器

    }, {
        key: "runCarousel",
        value: function runCarousel() {
            var _this2 = this;

            return setInterval(function () {
                var currentIndex = _this2.state.currentIndex + 1;
                _this2.autoMoveCarousel(currentIndex, true);
            }, this.props.autoPlayTimeout + 200);
        }
        //如果轮播到了第一张图片，立即将其轮播到最后一张图片
        //如果轮播到了最后一张图片，立即将其轮播到第一张图片

    }, {
        key: "resetImgListPosition",
        value: function resetImgListPosition() {
            var currentIndex = this.state.currentIndex;
            switch (this.state.currentIndex) {
                case this.childNum + 1:
                    currentIndex = 1;
                    this.autoMoveCarousel(currentIndex, false);
                    break;
                case 0:
                    currentIndex = this.childNum;
                    this.autoMoveCarousel(currentIndex, false);
                    break;
                default:
                    break;
            }
            if (this.props.onIndexChanged && currentIndex != this.previousIndex) {
                this.props.onIndexChanged(currentIndex - 1);
            }
        }
    }, {
        key: "getCarouselWidth",
        value: function getCarouselWidth() {
            return window.getComputedStyle(document.querySelector('.x-carousel-container')).width;
        }
        //移动端触摸，停止定时器，记录之前的索引值、当前的偏移量previousX、当前轮播图偏移量_offestX

    }, {
        key: "touchStartHandler",
        value: function touchStartHandler(e) {
            clearInterval(this.interval);
            this.interval = null;
            this.previousX = e.targetTouches[0].pageX;
            this._offsetX = this.state.offsetX;
            this.previousIndex = this.state.currentIndex;
            this.carousel.addEventListener('touchmove', this.touchMoveHandler);
            this.transitionend && this.carousel.removeEventListener(this.transitionend, this.resetImgListPosition);
        }
        //记录最新的偏移量nowX，图片随用户手势的移动而移动

    }, {
        key: "touchMoveHandler",
        value: function touchMoveHandler(e) {
            var nowX = e.targetTouches[0].pageX;
            this.moveX = nowX - this.previousX;

            this.setState({
                offsetX: this._offsetX + this.moveX / parseInt(this.getCarouselWidth()) * 100,
                needAnimate: false
            });
        }
        //判断用户移动的距离，如果过短则返回之前的图片，否则，切换到下一张图片

    }, {
        key: "touchEndHandler",
        value: function touchEndHandler(e) {
            var currentIndex = void 0;
            if (Math.abs(this.moveX) >= parseInt(this.getCarouselWidth()) / 5) {
                switch (true) {
                    case this.moveX > 0:
                        currentIndex = this.state.currentIndex - 1;
                        break;
                    case this.moveX < 0:
                        currentIndex = this.state.currentIndex + 1;
                        break;
                    default:
                        currentIndex = this.state.currentIndex;
                        break;
                }
            } else {
                currentIndex = this.state.currentIndex;
            }
            this.carousel.removeEventListener('touchmove', this.touchMoveHandler);
            this.transitionend && this.carousel.addEventListener(this.transitionend, this.resetImgListPosition);
            this.autoMoveCarousel(currentIndex, true);
            this.previousX = 0;
            this._offsetX = 0;
            this.moveX = 0;
            this.interval = this.props.autoPlay ? this.runCarousel() : null;
        }
        //当页面激活状态发生改变时触发，如果当前页面不处于激活态则停用定时器防止布局混乱

    }, {
        key: "_onVisibleChange",
        value: function _onVisibleChange() {
            if (document.hidden) {
                clearInterval(this.interval);
                this.interval = null;
            } else {
                if (!this.interval) {
                    this.interval = this.childNum > 1 && this.props.autoPlay ? this.runCarousel() : null;
                }
            }
        }
        //切换图片

    }, {
        key: "autoMoveCarousel",
        value: function autoMoveCarousel(currentIndex, needAnimate) {
            this.setState({
                offsetX: -currentIndex * 100,
                currentIndex: currentIndex,
                needAnimate: needAnimate
            });
        }
        //渲染轮播图

    }, {
        key: "_renderCarousel",
        value: function _renderCarousel(imgList, enableDrag) {
            var _this3 = this;

            var imgViewList = [];
            var dotList = [];
            _react2.default.Children.map(this.props.children, function (img, index) {
                if (index == 0) _this3._endImgView = img;
                if (index == _this3.childNum - 1) _this3._startImgView = img;
                imgViewList.push(_this3._renderImg(img, index, enableDrag));
                var dotWidth = _this3.props.dotWidth;
                var marginRight = index == _this3.childNum - 1 ? 0 : dotWidth;
                var backgroundColor = _this3.state.currentIndex - 1 == index ? _this3.props.activeDotColor : _this3.props.dotColor;
                var dotListStyle = {
                    marginRight: _util2.default.px2rem(marginRight),
                    backgroundColor: backgroundColor,
                    width: _util2.default.px2rem(dotWidth),
                    height: _util2.default.px2rem(dotWidth),
                    borderRadius: _util2.default.px2rem(dotWidth)
                };
                dotList.push(_react2.default.createElement("div", { key: index, className: 'x-carousel-dot', style: dotListStyle }));
            });
            imgViewList.splice(0, 0, this._renderImg(this._startImgView, -1, enableDrag));
            imgViewList.push(this._renderImg(this._endImgView, this.childNum, enableDrag));
            return {
                imgViewList: imgViewList,
                dotList: dotList
            };
        }
        //渲染图片

    }, {
        key: "_renderImg",
        value: function _renderImg(imgView, key, enableDrag) {
            var touchStartHandler = enableDrag ? this.touchStartHandler : null;
            var touchEndHandler = enableDrag ? this.touchEndHandler : null;
            return _react2.default.createElement(
                "div",
                {
                    key: key,
                    className: "x-carousel-list",
                    style: { width: 100 / (this.childNum + 2) + "%" },
                    onTouchStart: touchStartHandler,
                    onTouchEnd: touchEndHandler
                },
                imgView
            );
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.index != this.props.index && nextProps.index != this.state.currentIndex - 1) {
                this.autoMoveCarousel(nextProps.index + 1, true);
            }
            if (nextProps.autoPlay != this.props.autoPlay) {
                if (nextProps.autoPlay == false) {
                    clearInterval(this.interval);
                    this.interval = null;
                } else {
                    this.interval = this.childNum > 1 ? this.runCarousel() : null;
                }
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var carousel = this.carousel;
            var transitionend = this.transitionEvent();
            transitionend && carousel.addEventListener(transitionend, this.resetImgListPosition);
            document.addEventListener('visibilitychange', this._onVisibleChange);
            this.interval = this.childNum > 1 && this.props.autoPlay ? this.runCarousel() : null;
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var enableDrag = this.childNum > 1 ? true : false;

            var _renderCarousel2 = this._renderCarousel(this.props.children, enableDrag),
                imgViewList = _renderCarousel2.imgViewList,
                dotList = _renderCarousel2.dotList;

            var animateTime = this.state.needAnimate ? 0.2 : 0;
            var containerStyle = {
                width: this.props.width,
                height: this.props.height
            };
            var dotContainerStyle = {
                bottom: _util2.default.px2rem(this.props.dotWidth)
            };
            var translateValue = "translate(" + this.state.offsetX / (this.childNum + 2) + "%,0px)";
            var mainStyle = {
                width: this.childNum + 2 + "00%",
                WebkitTransform: translateValue,
                transform: translateValue,
                WebkitTransition: "WebkitTransform " + animateTime + "s",
                transition: "transform " + animateTime + "s"
            };
            return _react2.default.createElement(
                "div",
                { className: "x-carousel-container", style: containerStyle },
                _react2.default.createElement(
                    "div",
                    {
                        ref: function ref(carousel) {
                            return _this4.carousel = carousel;
                        },
                        className: "x-carousel-main",
                        style: mainStyle
                    },
                    imgViewList
                ),
                this.props.showDot ? _react2.default.createElement(
                    "div",
                    { className: "x-carousel-dot-container", style: dotContainerStyle },
                    " ",
                    dotList,
                    " "
                ) : null
            );
        }
    }]);

    return Carousel;
}(_react.Component);

Carousel.defaultProps = {
    index: 0,
    autoPlay: true,
    autoPlayTimeout: 3000,
    showDot: true,
    dotColor: '#666666',
    activeDotColor: '#68b1ed',
    dotWidth: 20,
    onIndexChanged: function onIndexChanged() {}
};
Carousel.propTypes = {
    index: _propTypes2.default.number,
    width: _propTypes2.default.any.isRequired,
    height: _propTypes2.default.any.isRequired,
    autoPlay: _propTypes2.default.bool,
    autoPlayTimeout: _propTypes2.default.number,
    showDot: _propTypes2.default.bool,
    dotColor: _propTypes2.default.string,
    activeDotColor: _propTypes2.default.string,
    dotWidth: _propTypes2.default.number,
    onIndexChanged: _propTypes2.default.func
};
var _default = Carousel;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Carousel, "Carousel", "/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/carousel/index.js");
    reactHotLoader.register(_default, "default", "/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/carousel/index.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(38);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-carousel-container {\n  overflow: hidden;\n  position: relative; }\n  .x-carousel-container .x-carousel-main {\n    height: 100%; }\n  .x-carousel-container .x-carousel-dot-container {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translatex(-50%);\n    transform: translatex(-50%); }\n    .x-carousel-container .x-carousel-dot-container .x-carousel-dot {\n      float: left; }\n  .x-carousel-container .x-carousel-list {\n    float: left;\n    overflow: hidden;\n    height: 100%; }\n", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //封装多选框组件


/**
 * defaultValue: 默认value
 * value: value（受控）
 * onChange: 多选框勾选值发生改变时的回调，将会返回新的勾选值
 * disabled: 是否禁用
 * groupStyle: 自定义group容器样式
 */

var Group = function (_Component) {
    _inherits(Group, _Component);

    function Group(props) {
        _classCallCheck(this, Group);

        var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));

        _this.state = {
            valueList: null
        };
        return _this;
    }

    _createClass(Group, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var valueList = null;
            if (this.props.value) {
                valueList = this.props.value;
            } else if (this.props.defaultValue) {
                valueList = this.props.defaultValue;
            }
            this.setState({
                valueList: valueList
            });
        }
    }, {
        key: 'changeValue',
        value: function changeValue(value, checked) {
            var _this2 = this;

            var _valueList = this.state.valueList == null ? [] : JSON.parse(JSON.stringify(this.state.valueList));
            //已选并且已选列表中没有该项
            if (checked && _valueList.indexOf(value) < 0) {
                _valueList.push(value);
            } else if (!checked && _valueList.indexOf(value) >= 0) {
                _valueList.splice(_valueList.indexOf(value), 1);
            }
            this.setState({
                valueList: _valueList
            }, function () {
                _this2.props.onChange(_this2.state.valueList);
            });
        }
    }, {
        key: 'renderCheckboxGroup',
        value: function renderCheckboxGroup() {
            var _this3 = this;

            var disabled = this.props.disabled == null ? false : this.props.disabled;
            return _react2.default.Children.map(this.props.children, function (item, index) {
                var extendProps = {
                    disabled: disabled,
                    groupLimit: true,
                    onClick: function onClick(value, checked) {
                        return _this3.changeValue(value, checked);
                    }
                    //用户指定了value,checkbox变成了受控组件
                };if (_this3.props.value != null) {
                    var checked = _this3.props.value.indexOf(item.props.value) >= 0;
                    extendProps.checked = checked;
                }
                //其他任何条件下check都是非受控的
                else if (_this3.props.defaultValue != null) {
                        var _checked = _this3.state.valueList == null ? _this3.props.defaultValue.indexOf(item.props.value) >= 0 : _this3.state.valueList.indexOf(item.props.value) >= 0;
                        extendProps.checked = _checked;
                    } else {
                        if (_this3.state.valueList != null) {
                            var _checked2 = _this3.state.valueList.indexOf(item.props.value) >= 0;
                            extendProps.checked = _checked2;
                        } else {
                            extendProps.checked = false;
                        }
                    }
                return _react2.default.cloneElement(item, extendProps);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.props.groupStyle },
                this.renderCheckboxGroup()
            );
        }
    }]);

    return Group;
}(_react.Component);

/**
 * id: checkbox id，必填项
 * value: checkbox value
 * checked: 是否勾选（受控）
 * checkboxStyle: 自定义样式
 * textStyle: 自定义文本样式
 * disabled: 是否禁用
 * onChange: 每次点击时的回调，返回勾选状态（bool）
*/

Group.defaultProps = {
    groupStyle: {},
    disabled: false,
    onChange: function onChange() {}
};
Group.propTypes = {
    groupStyle: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};

var Checkbox = function (_Component2) {
    _inherits(Checkbox, _Component2);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        var _this4 = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

        _this4.state = {
            checked: false
        };
        return _this4;
    }

    _createClass(Checkbox, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.groupLimit || this.props.checked != null) {
                this.setState({
                    checked: this.props.checked
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.checked != this.props.checked) {
                if (nextProps.groupLimit || nextProps.checked != null) {
                    this.setState({
                        checked: nextProps.checked
                    });
                }
            }
        }
    }, {
        key: 'changeCheckbox',
        value: function changeCheckbox() {
            var _this5 = this;

            if (this.props.groupLimit || this.props.groupLimit != null) {
                this.props.onClick(this.props.value, !this.state.checked);
            } else {
                if (this.props.checked == null) {
                    this.setState({
                        checked: !this.state.checked
                    }, function () {
                        _this5.props.onChange(_this5.state.checked);
                    });
                } else this.props.onChange(!this.state.checked);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var disabledStyle = this.props.disabled ? { color: '#CCCCCC' } : {};
            var checkClass = this.state.checked ? 'x-checkbox-checked' : '';
            var disabledClass = this.props.disabled ? ' x-checkbox-disabled' : '';
            return _react2.default.createElement(
                'div',
                { className: 'x-checkbox-container' + disabledClass, style: this.props.checkboxStyle },
                _react2.default.createElement('input', {
                    type: 'checkbox',
                    id: this.props.id,
                    value: this.props.value,
                    checked: this.state.checked,
                    disabled: this.props.disabled,
                    onChange: function onChange() {
                        return _this6.changeCheckbox();
                    }
                }),
                _react2.default.createElement(
                    'label',
                    {
                        htmlFor: this.props.id,
                        className: checkClass
                    },
                    this.props.children && this.props.children.length ? _react2.default.createElement(
                        'span',
                        { style: _extends({}, this.props.textStyle, disabledStyle) },
                        this.props.children
                    ) : null
                )
            );
        }
    }]);

    return Checkbox;
}(_react.Component);

Checkbox.defaultProps = {
    checkboxStyle: {},
    textStyle: {},
    disabled: false,
    onChange: function onChange() {}
};
Checkbox.propTypes = {
    id: _propTypes2.default.string.isRequired,
    checked: _propTypes2.default.bool,
    checkboxStyle: _propTypes2.default.object,
    textStyle: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};


Checkbox.Group = Group;
var _default = Checkbox;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Group, 'Group', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/checkbox/index.js');
    reactHotLoader.register(Checkbox, 'Checkbox', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/checkbox/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/checkbox/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(41);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-checkbox-container {\n  position: relative;\n  min-height: 0.53333rem;\n  margin: 0.05333rem 0; }\n  .x-checkbox-container input {\n    position: absolute;\n    top: 0.26667rem;\n    left: 0.26667rem;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    z-index: 0;\n    opacity: 0; }\n  .x-checkbox-container label {\n    position: relative;\n    padding-left: 0.66667rem;\n    line-height: 0.53333rem; }\n    .x-checkbox-container label:before {\n      content: '';\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      transform: translateY(-50%);\n      width: 0.53333rem;\n      height: 0.53333rem;\n      -webkit-border-radius: 0.53333rem;\n      border-radius: 0.53333rem;\n      margin-left: -0.66667rem;\n      background-color: white;\n      border: 1px solid #aaa;\n      box-sizing: border-box;\n      z-index: 1; }\n  .x-checkbox-container .x-checkbox-checked:before {\n    border-color: #ff4f4f;\n    background-color: #ff4f4f;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABKElEQVRYR+2V4TEEQRCFvxeBC0EGyOBEgAgQgggIQQaIABGQAUKQARE81VWjaotZ27d3t/vD9J+pmpqd9+3rnm4xc2hmfRpAc6A58D8csL0A7oGFpINu75nEAdsPwBHwLml3UgDbt8Ap8AksJb1OBjAkHiBbS0FGfGsAtq+Ay2L1oaTnvqG3cQdsnwE3RfBcUtRAb/wCKBW7A5xI+lhlXK8qXk2B7ajSPSDWsC8FMUa8DyCaRuQsDWF7CTwVty4kXWedq9ZA6VwpCNv7RTzA7yRFDaSjtwgzEOuKDz7DvyA2IT4IEAdqEDFUgJeyPko6Tnv+42CqD1Qg4prI/Vvp76mXUoNMAVSciK21xVMp6FJ3nIjtmGyj//z73rQDY3M89F0DaA7M7sAXMpl/Ia8A/tgAAAAASUVORK5CYII=\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 0.4rem 0.4rem; }\n\n.x-checkbox-disabled input {\n  opacity: 0; }\n\n.x-checkbox-disabled label:before {\n  opacity: 0.7; }\n\n.x-checkbox-container label span {\n  font-size: 15px; }\n  [data-dpr=\"2\"] .x-checkbox-container label span {\n    font-size: 30px; }\n  [data-dpr=\"3\"] .x-checkbox-container label span {\n    font-size: 45px; }\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(12);

var _list2 = _interopRequireDefault(_list);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * activityKey: 当前激活项
 * onChange: 任意一个折叠面板的折叠状态发生改变时的回调，返回当前激活项（string or JSON.stringify(stringArray)）
 * accordion: 是否开启手风琴模式
 * style: 自定义样式
 */

var Collapse = function (_Component) {
    _inherits(Collapse, _Component);

    function Collapse(props) {
        _classCallCheck(this, Collapse);

        var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

        _this.state = {
            activeKey: _this.props.activeKey
        };
        _this.panelKeyList = [];
        _this.activeKeyList = [];
        return _this;
    }

    _createClass(Collapse, [{
        key: 'changeOpenState',
        value: function changeOpenState(index, notAccordion, isOpen) {
            var _this2 = this;

            if (!notAccordion) {
                var activeKey = null;
                if (this.state.activeKey != this.panelKeyList[index]) {
                    activeKey = this.panelKeyList[index];
                }
                this.setState({
                    activeKey: activeKey
                }, function () {
                    _this2.props.onChange && _this2.props.onChange(_this2.state.activeKey);
                });
            } else {
                var point = this.activeKeyList.indexOf(this.panelKeyList[index]);
                if (isOpen) {
                    if (point < 0) {
                        this.activeKeyList.push(this.panelKeyList[index]);
                    }
                } else {
                    if (point >= 0) {
                        this.activeKeyList.splice(point, 1);
                    }
                }
                this.props.onChange && this.props.onChange(JSON.stringify(this.activeKeyList));
            }
        }
    }, {
        key: 'renderPanel',
        value: function renderPanel() {
            var _this3 = this;

            var panelList = [];
            _react2.default.Children.map(this.props.children, function (item, index) {
                var isOpen = false;
                if (_this3.state.activeKey == item.props.panelKey) {
                    isOpen = true;
                }
                var panel = _react2.default.cloneElement(item, {
                    key: index,
                    index: index,
                    isOpen: isOpen,
                    accordion: _this3.props.accordion,
                    showLine: index != _this3.props.children.length - 1 || isOpen == true || !_this3.props.accordion,
                    changeOpenState: _this3.changeOpenState.bind(_this3)
                });
                panelList.push(panel);
                _this3.panelKeyList[index] = item.props.panelKey;
            });
            return panelList;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-collapse-container', style: this.props.style },
                this.renderPanel()
            );
        }
    }]);

    return Collapse;
}(_react.Component);

/**
 * key: id
 * title: 标题
 */

Collapse.defaultProps = {
    activityKey: '',
    onChange: function onChange() {},
    accordion: false,
    style: {}
};
Collapse.propTypes = {
    activeKey: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    onChange: _propTypes2.default.func,
    accordion: _propTypes2.default.bool,
    style: _propTypes2.default.object
};

var Panel = function (_Component2) {
    _inherits(Panel, _Component2);

    function Panel(props) {
        _classCallCheck(this, Panel);

        var _this4 = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

        _this4.state = {
            isOpen: _this4.props.isOpen
        };
        return _this4;
    }

    _createClass(Panel, [{
        key: 'changeOpenState',
        value: function changeOpenState(isOpen) {
            var _this5 = this;

            this.setState({
                isOpen: isOpen
            }, function () {
                _this5.props.changeOpenState(_this5.props.index, true, isOpen);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var isOpen = this.props.accordion ? this.props.isOpen : this.state.isOpen;
            var changeOpenState = this.props.accordion ? this.props.changeOpenState : this.changeOpenState.bind(this);
            var changeOpenStateParams = this.props.accordion ? this.props.index : !this.state.isOpen;
            var extendStyle = isOpen ? { minHeight: _util2.default.px2rem(91) } : { height: _util2.default.px2rem(91) };
            var source = isOpen ? _util2.default.icon64.arrowUp : _util2.default.icon64.arrowDown;
            return _react2.default.createElement(
                'div',
                { className: 'x-collapse-panel', style: extendStyle },
                _react2.default.createElement('hr', null),
                _react2.default.createElement(_list2.default, {
                    title: this.props.title,
                    rightIcon: _react2.default.createElement('img', { className: 'x-collapse-icon', src: source }),
                    onPress: function onPress() {
                        return changeOpenState(changeOpenStateParams);
                    },
                    showLine: this.props.showLine
                }),
                this.props.children
            );
        }
    }]);

    return Panel;
}(_react.Component);

Panel.defaultProps = {
    key: '',
    title: ''
};
Panel.propTypes = {
    key: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    title: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};


Collapse.Panel = Panel;

var _default = Collapse;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Collapse, 'Collapse', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/collapse/index.js');
    reactHotLoader.register(Panel, 'Panel', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/collapse/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/collapse/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(44);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-list-container hr {\n  background-color: #eeeeee;\n  height: 1px;\n  border: none;\n  margin: 0; }\n\n.x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-list-align-flex-start {\n  -webkit-align-self: flex-start;\n  align-self: flex-start; }\n\n.x-list-align-center {\n  -webkit-align-self: center;\n  align-self: center; }\n\n.x-list-align-flex-end {\n  -webkit-align-self: flex-end;\n  align-self: flex-end; }\n\n.x-list-align-stretch {\n  -webkit-align-self: stretch;\n  align-self: stretch; }\n\n.x-list-align-baseline {\n  -webkit-align-self: baseline;\n  align-self: baseline; }\n\n.x-list-container .x-list-content {\n  min-height: 1.2rem;\n  display: flex;\n  display: -webkit-flex;\n  -webkit-flex: 1;\n  flex: 1;\n  padding: 0.26667rem 0.4rem;\n  background-color: white;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  -webkit-align-items: center;\n  align-items: center;\n  box-sizing: border-box; }\n\n.x-list-container .x-list-icon {\n  width: 0.4rem;\n  height: 0.4rem; }\n\n.x-list-container .x-list-row-flex {\n  display: flex;\n  display: -webkit-flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.x-list-title {\n  color: #333333;\n  margin: 0 !important;\n  font-size: 16px; }\n  [data-dpr=\"2\"] .x-list-title {\n    font-size: 32px; }\n  [data-dpr=\"3\"] .x-list-title {\n    font-size: 48px; }\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(46);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-collapse-panel hr {\n  background-color: #eeeeee;\n  height: 1px;\n  border: none;\n  margin: 0; }\n\n.x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-collapse-container {\n  border-bottom: 1px solid #eeeeee;\n  background-color: white; }\n  .x-collapse-container .x-collapse-icon {\n    width: 0.42667rem;\n    height: 0.42667rem; }\n\n.x-collapse-panel {\n  overflow: hidden; }\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DRAWER_POSITION = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DRAWER_POSITION = exports.DRAWER_POSITION = {
    LEFT: 'left',
    RIGHT: 'right'
};

var DrawerLayout = function (_Component) {
    _inherits(DrawerLayout, _Component);

    function DrawerLayout(props) {
        _classCallCheck(this, DrawerLayout);

        var _this = _possibleConstructorReturn(this, (DrawerLayout.__proto__ || Object.getPrototypeOf(DrawerLayout)).call(this, props));

        _this.state = {
            openValue: 0,
            drawerHasShown: false
        };
        return _this;
    }

    _createClass(DrawerLayout, [{
        key: 'openDrawer',
        value: function openDrawer() {
            this.setState({
                drawerHasShown: true
            });
            this.props.onDrawerOpen && this.props.onDrawerOpen();
        }
    }, {
        key: 'closeDrawer',
        value: function closeDrawer() {
            this.setState({
                drawerHasShown: false
            });
            this.props.onDrawerClose && this.props.onDrawerClose();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'x-drawer-container' + (this.state.drawerHasShown ? ' x-drawer-active' : '') },
                _react2.default.createElement('div', { className: 'x-drawer-mask', onClick: function onClick() {
                        return _this2.closeDrawer();
                    } }),
                _react2.default.createElement(
                    'div',
                    { className: 'x-drawer-view x-drawer-view-' + (this.props.drawerPosition === DRAWER_POSITION.LEFT ? 'left' : 'right') },
                    this.props.renderNavigationView()
                )
            );
        }
    }]);

    return DrawerLayout;
}(_react.Component);

DrawerLayout.defaultProps = {
    renderNavigationView: function renderNavigationView() {},
    drawerPosition: DRAWER_POSITION.LEFT,
    onDrawerOpen: function onDrawerOpen() {},
    onDrawerClose: function onDrawerClose() {}
};
DrawerLayout.propTypes = {
    renderNavigationView: _propTypes2.default.func,
    drawerPosition: _propTypes2.default.string,
    onDrawerOpen: _propTypes2.default.func,
    onDrawerClose: _propTypes2.default.func
};
var _default = DrawerLayout;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(DRAWER_POSITION, 'DRAWER_POSITION', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/drawerLayout/index.js');
    reactHotLoader.register(DrawerLayout, 'DrawerLayout', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/drawerLayout/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/drawerLayout/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(49);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-drawer-container {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  pointer-events: none; }\n  .x-drawer-container .x-drawer-mask {\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    transition: opacity 0.3s;\n    position: absolute;\n    opacity: 0;\n    background-color: rgba(0, 0, 0, 0.5); }\n\n.x-drawer-view {\n  width: 5.33333rem;\n  background-color: white;\n  height: 100vh;\n  overflow: auto;\n  position: absolute;\n  transition: transform 0.3s;\n  -webkit-transition: -webkit-transform 0.3s; }\n\n.x-drawer-view-left {\n  -webkit-transform: translateX(-5.33333rem);\n  transform: translateX(-5.33333rem); }\n\n.x-drawer-view-right {\n  right: 0;\n  -webkit-transform: translateX(5.33333rem);\n  transform: translateX(5.33333rem); }\n\n.x-drawer-active {\n  pointer-events: auto; }\n  .x-drawer-active .x-drawer-view-left, .x-drawer-active .x-drawer-view-right {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  .x-drawer-active .x-drawer-mask {\n    opacity: 1; }\n", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * justify --> justifyContent
 * align --> alignItems: 比rn版本多了stretch和baseline
 * wrap --> flexWrap
 * flexStyle --> 自定义flex容器样式
 */

var Flex = function (_Component) {
    _inherits(Flex, _Component);

    function Flex(props) {
        _classCallCheck(this, Flex);

        return _possibleConstructorReturn(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).call(this, props));
    }

    _createClass(Flex, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                justify = _props.justify,
                align = _props.align,
                wrap = _props.wrap,
                flexStyle = _props.flexStyle,
                children = _props.children;

            return _react2.default.createElement(
                'div',
                { className: 'x-flex-container x-flex-justify-' + justify + ' x-flex-align-' + align + ' x-flex-' + wrap, style: flexStyle },
                children
            );
        }
    }]);

    return Flex;
}(_react.Component);

/**
 * flex: 占用比例
 * flexItemStyle: 自定义flexItem样式
 */

Flex.defaultProps = {
    justify: 'flex-start',
    align: 'flex-start',
    wrap: 'wrap',
    flexStyle: {}
};
Flex.propTypes = {
    justify: _propTypes2.default.string,
    align: _propTypes2.default.string,
    wrap: _propTypes2.default.string,
    flexStyle: _propTypes2.default.object
};

var Item = function (_Component2) {
    _inherits(Item, _Component2);

    function Item(props) {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                flex = _props2.flex,
                flexItemStyle = _props2.flexItemStyle,
                children = _props2.children;

            var _flexItemStyle = {
                flex: flex,
                WebkitFlex: flex
            };
            return _react2.default.createElement(
                'div',
                { style: _extends({}, _flexItemStyle, flexItemStyle) },
                children
            );
        }
    }]);

    return Item;
}(_react.Component);

Item.defaultProps = {
    flex: 1,
    flexItemStyle: {}
};
Item.propTypes = {
    flex: _propTypes2.default.number,
    flexItemStyle: _propTypes2.default.object
};


Flex.Item = Item;
var _default = Flex;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Flex, 'Flex', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/flex/index.js');
    reactHotLoader.register(Item, 'Item', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/flex/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/flex/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(52);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-flex-justify-flex-start {\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start; }\n\n.x-flex-justify-center {\n  -webkit-justify-content: center;\n  justify-content: center; }\n\n.x-flex-justify-flex-end {\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end; }\n\n.x-flex-justify-space-between {\n  -webkit-justify-content: space-between;\n  justify-content: space-between; }\n\n.x-flex-justify-space-around {\n  -webkit-justify-content: space-around;\n  justify-content: space-around; }\n\n.x-flex-align-flex-start {\n  -webkit-align-items: flex-start;\n  align-items: flex-start; }\n\n.x-flex-align-center {\n  -webkit-align-items: center;\n  align-items: center; }\n\n.x-flex-align-flex-end {\n  -webkit-align-items: flex-end;\n  align-items: flex-end; }\n\n.x-flex-align-stretch {\n  -webkit-align-items: stretch;\n  align-items: stretch; }\n\n.x-flex-align-baseline {\n  -webkit-align-items: baseline;\n  align-items: baseline; }\n\n.x-flex-wrap {\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.x-flex-nowrap {\n  -webkit-flex-wrap: nowrap;\n  flex-wrap: nowrap; }\n\n.x-flex-container {\n  display: flex;\n  display: -webkit-flex; }\n", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * containerStyle: 自定义容器样式
 * title: 标题
 * titleStyle: 标题样式
 * leftBtn: 自定义左侧按钮
 * rightBtn: 自定义右侧按钮
 */

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var leftContain = this.props.leftBtn ? this.props.leftBtn : null;
            var rightContain = this.props.rightBtn ? this.props.rightBtn : null;
            var leftBtn = _react2.default.createElement(
                'div',
                { className: 'x-header-button' },
                leftContain
            );
            var rightBtn = _react2.default.createElement(
                'div',
                { className: 'x-header-button x-header-button-right' },
                rightContain
            );
            return _react2.default.createElement(
                'div',
                { className: 'x-header-container', style: this.props.containerStyle },
                leftBtn,
                _react2.default.createElement(
                    'span',
                    { className: 'x-header-title-text', style: this.props.titleStyle },
                    this.props.title
                ),
                rightBtn
            );
        }
    }]);

    return Header;
}(_react.Component);

Header.defaultProps = {
    containerStyle: {},
    title: '',
    titleStyle: {},
    leftBtn: null,
    rightBtn: null
};
Header.propTypes = {
    containerStyle: _propTypes2.default.object,
    title: _propTypes2.default.string,
    titleStyle: _propTypes2.default.object,
    leftBtn: _propTypes2.default.element,
    rightBtn: _propTypes2.default.element
};
var _default = Header;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Header, 'Header', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/header/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/header/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(55);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-header-container {\n  -webkit-display: flex;\n  display: flex;\n  height: 1.33333rem;\n  background-color: #ff4f4f;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  -webkit-align-items: center;\n  align-items: center;\n  padding: 0 0.4rem;\n  box-shadow: 0 1px 6px #ccc; }\n\n.x-header-title-text {\n  color: white;\n  font-size: 18px; }\n  [data-dpr=\"2\"] .x-header-title-text {\n    font-size: 36px; }\n  [data-dpr=\"3\"] .x-header-title-text {\n    font-size: 54px; }\n\n.x-header-button {\n  display: flex;\n  display: -webkit-flex;\n  -webkit-align-items: center;\n  align-items: center;\n  width: 1.06667rem;\n  height: 1.06667rem; }\n\n.x-header-button-right {\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end; }\n", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconMap = __webpack_require__(57);

var _iconMap2 = _interopRequireDefault(_iconMap);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * name: icon名字，参考iconMap.json
 * size: icon大小
 * color: icon颜色
 * iconStyle: 自定义icon样式
 */

var Icon = function (_Component) {
    _inherits(Icon, _Component);

    function Icon(props) {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.name,
                size = _props.size,
                color = _props.color,
                iconStyle = _props.iconStyle;

            var _iconStyle = _extends({
                fontSize: _util2.default.getFontSize(size),
                color: color
            }, iconStyle);
            var iconCode = _iconMap2.default[name];
            if (!iconCode) iconCode = _iconMap2.default['ios-add'];
            return _react2.default.createElement(
                'i',
                { className: 'x-icon', style: _iconStyle },
                String.fromCharCode(iconCode)
            );
        }
    }]);

    return Icon;
}(_react.Component);

Icon.defaultProps = {
    name: 'ios-add',
    size: 30,
    color: '#666666',
    iconStyle: {}
};
Icon.propTypes = {
    name: _propTypes2.default.string,
    size: _propTypes2.default.number,
    color: _propTypes2.default.string,
    iconStyle: _propTypes2.default.object
};
var _default = Icon;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Icon, 'Icon', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/icon/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/icon/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {"ios-add":61698,"ios-add-circle":61697,"ios-add-circle-outline":61696,"ios-add-outline":61698,"ios-alarm":62408,"ios-alarm-outline":62407,"ios-albums":62410,"ios-albums-outline":62409,"ios-alert":61700,"ios-alert-outline":61699,"ios-american-football":61702,"ios-american-football-outline":61701,"ios-analytics":62414,"ios-analytics-outline":62413,"ios-aperture":61704,"ios-aperture-outline":61703,"ios-apps":61706,"ios-apps-outline":61705,"ios-appstore":61708,"ios-appstore-outline":61707,"ios-archive":61710,"ios-archive-outline":61709,"ios-arrow-back":62415,"ios-arrow-back-outline":62415,"ios-arrow-down":62416,"ios-arrow-down-outline":62416,"ios-arrow-dropdown":61712,"ios-arrow-dropdown-circle":61711,"ios-arrow-dropdown-circle-outline":61711,"ios-arrow-dropdown-outline":61712,"ios-arrow-dropleft":61714,"ios-arrow-dropleft-circle":61713,"ios-arrow-dropleft-circle-outline":61713,"ios-arrow-dropleft-outline":61714,"ios-arrow-dropright":61716,"ios-arrow-dropright-circle":61715,"ios-arrow-dropright-circle-outline":61715,"ios-arrow-dropright-outline":61716,"ios-arrow-dropup":61718,"ios-arrow-dropup-circle":61717,"ios-arrow-dropup-circle-outline":61717,"ios-arrow-dropup-outline":61718,"ios-arrow-forward":62417,"ios-arrow-forward-outline":62417,"ios-arrow-round-back":61719,"ios-arrow-round-back-outline":61719,"ios-arrow-round-down":61720,"ios-arrow-round-down-outline":61720,"ios-arrow-round-forward":61721,"ios-arrow-round-forward-outline":61721,"ios-arrow-round-up":61722,"ios-arrow-round-up-outline":61722,"ios-arrow-up":62424,"ios-arrow-up-outline":62424,"ios-at":62426,"ios-at-outline":62425,"ios-attach":61723,"ios-attach-outline":61723,"ios-backspace":61725,"ios-backspace-outline":61724,"ios-barcode":62428,"ios-barcode-outline":62427,"ios-baseball":62430,"ios-baseball-outline":62429,"ios-basket":61727,"ios-basket-outline":61726,"ios-basketball":62432,"ios-basketball-outline":62431,"ios-battery-charging":61728,"ios-battery-charging-outline":61728,"ios-battery-dead":61729,"ios-battery-dead-outline":61729,"ios-battery-full":61730,"ios-battery-full-outline":61730,"ios-beaker":61732,"ios-beaker-outline":61731,"ios-beer":61734,"ios-beer-outline":61733,"ios-bicycle":61735,"ios-bicycle-outline":61735,"ios-bluetooth":61736,"ios-bluetooth-outline":61736,"ios-boat":61738,"ios-boat-outline":61737,"ios-body":62436,"ios-body-outline":62435,"ios-bonfire":61740,"ios-bonfire-outline":61739,"ios-book":62440,"ios-book-outline":62439,"ios-bookmark":61742,"ios-bookmark-outline":61741,"ios-bookmarks":62442,"ios-bookmarks-outline":62441,"ios-bowtie":61744,"ios-bowtie-outline":61743,"ios-briefcase":62446,"ios-briefcase-outline":62445,"ios-browsers":62448,"ios-browsers-outline":62447,"ios-brush":61746,"ios-brush-outline":61745,"ios-bug":61748,"ios-bug-outline":61747,"ios-build":61750,"ios-build-outline":61749,"ios-bulb":61752,"ios-bulb-outline":61751,"ios-bus":61754,"ios-bus-outline":61753,"ios-cafe":61756,"ios-cafe-outline":61755,"ios-calculator":62450,"ios-calculator-outline":62449,"ios-calendar":62452,"ios-calendar-outline":62451,"ios-call":61758,"ios-call-outline":61757,"ios-camera":62454,"ios-camera-outline":62453,"ios-car":61760,"ios-car-outline":61759,"ios-card":61762,"ios-card-outline":61761,"ios-cart":62456,"ios-cart-outline":62455,"ios-cash":61764,"ios-cash-outline":61763,"ios-chatboxes":62458,"ios-chatboxes-outline":62457,"ios-chatbubbles":61766,"ios-chatbubbles-outline":61765,"ios-checkbox":61768,"ios-checkbox-outline":61767,"ios-checkmark":62463,"ios-checkmark-circle":61770,"ios-checkmark-circle-outline":61769,"ios-checkmark-outline":62463,"ios-clipboard":61772,"ios-clipboard-outline":61771,"ios-clock":62467,"ios-clock-outline":62466,"ios-close":62470,"ios-close-circle":61774,"ios-close-circle-outline":61773,"ios-close-outline":62470,"ios-closed-captioning":61776,"ios-closed-captioning-outline":61775,"ios-cloud":62476,"ios-cloud-circle":61778,"ios-cloud-circle-outline":61777,"ios-cloud-done":61780,"ios-cloud-done-outline":61779,"ios-cloud-download":62472,"ios-cloud-download-outline":62471,"ios-cloud-outline":62473,"ios-cloud-upload":62475,"ios-cloud-upload-outline":62474,"ios-cloudy":62480,"ios-cloudy-night":62478,"ios-cloudy-night-outline":62477,"ios-cloudy-outline":62479,"ios-code":61783,"ios-code-download":61781,"ios-code-download-outline":61781,"ios-code-outline":61783,"ios-code-working":61782,"ios-code-working-outline":61782,"ios-cog":62482,"ios-cog-outline":62481,"ios-color-fill":61785,"ios-color-fill-outline":61784,"ios-color-filter":62484,"ios-color-filter-outline":62483,"ios-color-palette":61787,"ios-color-palette-outline":61786,"ios-color-wand":62486,"ios-color-wand-outline":62485,"ios-compass":61789,"ios-compass-outline":61788,"ios-construct":61791,"ios-construct-outline":61790,"ios-contact":62490,"ios-contact-outline":62489,"ios-contacts":61793,"ios-contacts-outline":61792,"ios-contract":61794,"ios-contract-outline":61794,"ios-contrast":61795,"ios-contrast-outline":61795,"ios-copy":62492,"ios-copy-outline":62491,"ios-create":61797,"ios-create-outline":61796,"ios-crop":62494,"ios-crop-outline":61798,"ios-cube":61800,"ios-cube-outline":61799,"ios-cut":61802,"ios-cut-outline":61801,"ios-desktop":61804,"ios-desktop-outline":61803,"ios-disc":61806,"ios-disc-outline":61805,"ios-document":61808,"ios-document-outline":61807,"ios-done-all":61809,"ios-done-all-outline":61809,"ios-download":62496,"ios-download-outline":62495,"ios-easel":61811,"ios-easel-outline":61810,"ios-egg":61813,"ios-egg-outline":61812,"ios-exit":61815,"ios-exit-outline":61814,"ios-expand":61816,"ios-expand-outline":61816,"ios-eye":62501,"ios-eye-off":61818,"ios-eye-off-outline":61817,"ios-eye-outline":62500,"ios-fastforward":62503,"ios-fastforward-outline":62502,"ios-female":61819,"ios-female-outline":61819,"ios-filing":62505,"ios-filing-outline":62504,"ios-film":62507,"ios-film-outline":62506,"ios-finger-print":61820,"ios-finger-print-outline":61820,"ios-flag":62509,"ios-flag-outline":62508,"ios-flame":62511,"ios-flame-outline":62510,"ios-flash":61822,"ios-flash-outline":61821,"ios-flask":62513,"ios-flask-outline":62512,"ios-flower":62515,"ios-flower-outline":62514,"ios-folder":62517,"ios-folder-open":61824,"ios-folder-open-outline":61823,"ios-folder-outline":62516,"ios-football":62519,"ios-football-outline":62518,"ios-funnel":61826,"ios-funnel-outline":61825,"ios-game-controller-a":62521,"ios-game-controller-a-outline":62520,"ios-game-controller-b":62523,"ios-game-controller-b-outline":62522,"ios-git-branch":61827,"ios-git-branch-outline":61827,"ios-git-commit":61828,"ios-git-commit-outline":61828,"ios-git-compare":61829,"ios-git-compare-outline":61829,"ios-git-merge":61830,"ios-git-merge-outline":61830,"ios-git-network":61831,"ios-git-network-outline":61831,"ios-git-pull-request":61832,"ios-git-pull-request-outline":61832,"ios-glasses":62527,"ios-glasses-outline":62526,"ios-globe":61834,"ios-globe-outline":61833,"ios-grid":61836,"ios-grid-outline":61835,"ios-hammer":61838,"ios-hammer-outline":61837,"ios-hand":61840,"ios-hand-outline":61839,"ios-happy":61842,"ios-happy-outline":61841,"ios-headset":61844,"ios-headset-outline":61843,"ios-heart":62531,"ios-heart-outline":62530,"ios-help":62534,"ios-help-buoy":61846,"ios-help-buoy-outline":61845,"ios-help-circle":61848,"ios-help-circle-outline":61847,"ios-help-outline":62534,"ios-home":62536,"ios-home-outline":62535,"ios-ice-cream":61850,"ios-ice-cream-outline":61849,"ios-image":61852,"ios-image-outline":61851,"ios-images":61854,"ios-images-outline":61853,"ios-infinite":62538,"ios-infinite-outline":62537,"ios-information":62541,"ios-information-circle":61856,"ios-information-circle-outline":61855,"ios-information-outline":62541,"ios-ionic":61857,"ios-ionic-outline":62542,"ios-ionitron":61859,"ios-ionitron-outline":61858,"ios-jet":61861,"ios-jet-outline":61860,"ios-key":61863,"ios-key-outline":61862,"ios-keypad":62544,"ios-keypad-outline":62543,"ios-laptop":61864,"ios-laptop-outline":61864,"ios-leaf":61866,"ios-leaf-outline":61865,"ios-link":61994,"ios-link-outline":61898,"ios-list":62548,"ios-list-box":61868,"ios-list-box-outline":61867,"ios-list-outline":62548,"ios-locate":61870,"ios-locate-outline":61869,"ios-lock":61872,"ios-lock-outline":61871,"ios-log-in":61873,"ios-log-in-outline":61873,"ios-log-out":61874,"ios-log-out-outline":61874,"ios-magnet":61876,"ios-magnet-outline":61875,"ios-mail":61880,"ios-mail-open":61878,"ios-mail-open-outline":61877,"ios-mail-outline":61879,"ios-male":61881,"ios-male-outline":61881,"ios-man":61883,"ios-man-outline":61882,"ios-map":61885,"ios-map-outline":61884,"ios-medal":61887,"ios-medal-outline":61886,"ios-medical":62556,"ios-medical-outline":62555,"ios-medkit":62558,"ios-medkit-outline":62557,"ios-megaphone":61889,"ios-megaphone-outline":61888,"ios-menu":61891,"ios-menu-outline":61890,"ios-mic":62561,"ios-mic-off":62559,"ios-mic-off-outline":61892,"ios-mic-outline":62560,"ios-microphone":61894,"ios-microphone-outline":61893,"ios-moon":62568,"ios-moon-outline":62567,"ios-more":61896,"ios-more-outline":61895,"ios-move":61899,"ios-move-outline":61899,"ios-musical-note":62571,"ios-musical-note-outline":61900,"ios-musical-notes":62572,"ios-musical-notes-outline":61901,"ios-navigate":62574,"ios-navigate-outline":62573,"ios-no-smoking":61903,"ios-no-smoking-outline":61902,"ios-notifications":61907,"ios-notifications-off":61905,"ios-notifications-off-outline":61904,"ios-notifications-outline":61906,"ios-nuclear":61909,"ios-nuclear-outline":61908,"ios-nutrition":62576,"ios-nutrition-outline":62575,"ios-open":61911,"ios-open-outline":61910,"ios-options":61913,"ios-options-outline":61912,"ios-outlet":61915,"ios-outlet-outline":61914,"ios-paper":62578,"ios-paper-outline":62577,"ios-paper-plane":61917,"ios-paper-plane-outline":61916,"ios-partly-sunny":61919,"ios-partly-sunny-outline":61918,"ios-pause":62584,"ios-pause-outline":62583,"ios-paw":62586,"ios-paw-outline":62585,"ios-people":62588,"ios-people-outline":62587,"ios-person":62590,"ios-person-add":61921,"ios-person-add-outline":61920,"ios-person-outline":62589,"ios-phone-landscape":61922,"ios-phone-landscape-outline":61922,"ios-phone-portrait":61923,"ios-phone-portrait-outline":61923,"ios-photos":62594,"ios-photos-outline":62593,"ios-pie":62596,"ios-pie-outline":62595,"ios-pin":61925,"ios-pin-outline":61924,"ios-pint":62598,"ios-pint-outline":62597,"ios-pizza":61927,"ios-pizza-outline":61926,"ios-plane":61929,"ios-plane-outline":61928,"ios-planet":61931,"ios-planet-outline":61930,"ios-play":62600,"ios-play-outline":62599,"ios-podium":61933,"ios-podium-outline":61932,"ios-power":61935,"ios-power-outline":61934,"ios-pricetag":62605,"ios-pricetag-outline":62604,"ios-pricetags":62607,"ios-pricetags-outline":62606,"ios-print":61937,"ios-print-outline":61936,"ios-pulse":62611,"ios-pulse-outline":61938,"ios-qr-scanner":61939,"ios-qr-scanner-outline":61939,"ios-quote":61941,"ios-quote-outline":61940,"ios-radio":61945,"ios-radio-button-off":61942,"ios-radio-button-off-outline":61942,"ios-radio-button-on":61943,"ios-radio-button-on-outline":61943,"ios-radio-outline":61944,"ios-rainy":62613,"ios-rainy-outline":62612,"ios-recording":62615,"ios-recording-outline":62614,"ios-redo":62617,"ios-redo-outline":62616,"ios-refresh":62620,"ios-refresh-circle":61990,"ios-refresh-circle-outline":61988,"ios-refresh-outline":62620,"ios-remove":61948,"ios-remove-circle":61947,"ios-remove-circle-outline":61946,"ios-remove-outline":61948,"ios-reorder":61949,"ios-reorder-outline":61949,"ios-repeat":61950,"ios-repeat-outline":61950,"ios-resize":61951,"ios-resize-outline":61951,"ios-restaurant":61953,"ios-restaurant-outline":61952,"ios-return-left":61954,"ios-return-left-outline":61954,"ios-return-right":61955,"ios-return-right-outline":61955,"ios-reverse-camera":62623,"ios-reverse-camera-outline":62622,"ios-rewind":62625,"ios-rewind-outline":62624,"ios-ribbon":61957,"ios-ribbon-outline":61956,"ios-rose":62627,"ios-rose-outline":62626,"ios-sad":61959,"ios-sad-outline":61958,"ios-school":61961,"ios-school-outline":61960,"ios-search":62629,"ios-search-outline":61962,"ios-send":61964,"ios-send-outline":61963,"ios-settings":62631,"ios-settings-outline":61965,"ios-share":61969,"ios-share-alt":61967,"ios-share-alt-outline":61966,"ios-share-outline":61968,"ios-shirt":61971,"ios-shirt-outline":61970,"ios-shuffle":62633,"ios-shuffle-outline":62633,"ios-skip-backward":61973,"ios-skip-backward-outline":61972,"ios-skip-forward":61975,"ios-skip-forward-outline":61974,"ios-snow":61976,"ios-snow-outline":61996,"ios-speedometer":62640,"ios-speedometer-outline":62639,"ios-square":61978,"ios-square-outline":61977,"ios-star":62643,"ios-star-half":62641,"ios-star-half-outline":62641,"ios-star-outline":62642,"ios-stats":61980,"ios-stats-outline":61979,"ios-stopwatch":62645,"ios-stopwatch-outline":62644,"ios-subway":61982,"ios-subway-outline":61981,"ios-sunny":62647,"ios-sunny-outline":62646,"ios-swap":61983,"ios-swap-outline":61983,"ios-switch":61985,"ios-switch-outline":61984,"ios-sync":61986,"ios-sync-outline":61986,"ios-tablet-landscape":61987,"ios-tablet-landscape-outline":61987,"ios-tablet-portrait":62030,"ios-tablet-portrait-outline":62030,"ios-tennisball":62651,"ios-tennisball-outline":62650,"ios-text":62032,"ios-text-outline":62031,"ios-thermometer":62034,"ios-thermometer-outline":62033,"ios-thumbs-down":62036,"ios-thumbs-down-outline":62035,"ios-thumbs-up":62038,"ios-thumbs-up-outline":62037,"ios-thunderstorm":62653,"ios-thunderstorm-outline":62652,"ios-time":62655,"ios-time-outline":62654,"ios-timer":62657,"ios-timer-outline":62656,"ios-train":62040,"ios-train-outline":62039,"ios-transgender":62041,"ios-transgender-outline":62041,"ios-trash":62661,"ios-trash-outline":62660,"ios-trending-down":62042,"ios-trending-down-outline":62042,"ios-trending-up":62043,"ios-trending-up-outline":62043,"ios-trophy":62045,"ios-trophy-outline":62044,"ios-umbrella":62047,"ios-umbrella-outline":62046,"ios-undo":62663,"ios-undo-outline":62662,"ios-unlock":62049,"ios-unlock-outline":62048,"ios-videocam":62669,"ios-videocam-outline":62668,"ios-volume-down":62050,"ios-volume-down-outline":62050,"ios-volume-mute":62051,"ios-volume-mute-outline":62051,"ios-volume-off":62052,"ios-volume-off-outline":62052,"ios-volume-up":62053,"ios-volume-up-outline":62053,"ios-walk":62054,"ios-walk-outline":62054,"ios-warning":62056,"ios-warning-outline":62055,"ios-watch":62057,"ios-watch-outline":62057,"ios-water":62059,"ios-water-outline":62058,"ios-wifi":62061,"ios-wifi-outline":62060,"ios-wine":62063,"ios-wine-outline":62062,"ios-woman":62065,"ios-woman-outline":62064,"logo-android":61989,"logo-angular":61991,"logo-apple":61993,"logo-bitcoin":61995,"logo-buffer":61997,"logo-chrome":61999,"logo-codepen":62000,"logo-css3":62001,"logo-designernews":62002,"logo-dribbble":62003,"logo-dropbox":62004,"logo-euro":62005,"logo-facebook":62006,"logo-foursquare":62007,"logo-freebsd-devil":62008,"logo-github":62009,"logo-google":62010,"logo-googleplus":62011,"logo-hackernews":62012,"logo-html5":62013,"logo-instagram":62014,"logo-javascript":62015,"logo-linkedin":62016,"logo-markdown":62017,"logo-nodejs":62018,"logo-octocat":62019,"logo-pinterest":62020,"logo-playstation":62021,"logo-python":62022,"logo-reddit":62023,"logo-rss":62024,"logo-sass":62025,"logo-skype":62026,"logo-snapchat":62027,"logo-steam":62028,"logo-tumblr":62029,"logo-tux":62126,"logo-twitch":62127,"logo-twitter":62128,"logo-usd":62129,"logo-vimeo":62148,"logo-whatsapp":62149,"logo-windows":62255,"logo-wordpress":62256,"logo-xbox":62284,"logo-yahoo":62285,"logo-yen":62286,"logo-youtube":62287,"md-add":62067,"md-add-circle":62066,"md-alarm":62068,"md-albums":62069,"md-alert":62070,"md-american-football":62071,"md-analytics":62072,"md-aperture":62073,"md-apps":62074,"md-appstore":62075,"md-archive":62076,"md-arrow-back":62077,"md-arrow-down":62078,"md-arrow-dropdown":62080,"md-arrow-dropdown-circle":62079,"md-arrow-dropleft":62082,"md-arrow-dropleft-circle":62081,"md-arrow-dropright":62084,"md-arrow-dropright-circle":62083,"md-arrow-dropup":62086,"md-arrow-dropup-circle":62085,"md-arrow-forward":62087,"md-arrow-round-back":62088,"md-arrow-round-down":62089,"md-arrow-round-forward":62090,"md-arrow-round-up":62091,"md-arrow-up":62092,"md-at":62093,"md-attach":62094,"md-backspace":62095,"md-barcode":62096,"md-baseball":62097,"md-basket":62098,"md-basketball":62099,"md-battery-charging":62100,"md-battery-dead":62101,"md-battery-full":62102,"md-beaker":62103,"md-beer":62104,"md-bicycle":62105,"md-bluetooth":62106,"md-boat":62107,"md-body":62108,"md-bonfire":62109,"md-book":62110,"md-bookmark":62111,"md-bookmarks":62112,"md-bowtie":62113,"md-briefcase":62114,"md-browsers":62115,"md-brush":62116,"md-bug":62117,"md-build":62118,"md-bulb":62119,"md-bus":62120,"md-cafe":62121,"md-calculator":62122,"md-calendar":62123,"md-call":62124,"md-camera":62125,"md-car":62130,"md-card":62131,"md-cart":62132,"md-cash":62133,"md-chatboxes":62134,"md-chatbubbles":62135,"md-checkbox":62137,"md-checkbox-outline":62136,"md-checkmark":62140,"md-checkmark-circle":62139,"md-checkmark-circle-outline":62138,"md-clipboard":62141,"md-clock":62142,"md-close":62144,"md-close-circle":62143,"md-closed-captioning":62145,"md-cloud":62153,"md-cloud-circle":62146,"md-cloud-done":62147,"md-cloud-download":62150,"md-cloud-outline":62151,"md-cloud-upload":62152,"md-cloudy":62155,"md-cloudy-night":62154,"md-code":62158,"md-code-download":62156,"md-code-working":62157,"md-cog":62159,"md-color-fill":62160,"md-color-filter":62161,"md-color-palette":62162,"md-color-wand":62163,"md-compass":62164,"md-construct":62165,"md-contact":62166,"md-contacts":62167,"md-contract":62168,"md-contrast":62169,"md-copy":62170,"md-create":62171,"md-crop":62172,"md-cube":62173,"md-cut":62174,"md-desktop":62175,"md-disc":62176,"md-document":62177,"md-done-all":62178,"md-download":62179,"md-easel":62180,"md-egg":62181,"md-exit":62182,"md-expand":62183,"md-eye":62185,"md-eye-off":62184,"md-fastforward":62186,"md-female":62187,"md-filing":62188,"md-film":62189,"md-finger-print":62190,"md-flag":62191,"md-flame":62192,"md-flash":62193,"md-flask":62194,"md-flower":62195,"md-folder":62197,"md-folder-open":62196,"md-football":62198,"md-funnel":62199,"md-game-controller-a":62200,"md-game-controller-b":62201,"md-git-branch":62202,"md-git-commit":62203,"md-git-compare":62204,"md-git-merge":62205,"md-git-network":62206,"md-git-pull-request":62207,"md-glasses":62208,"md-globe":62209,"md-grid":62210,"md-hammer":62211,"md-hand":62212,"md-happy":62213,"md-headset":62214,"md-heart":62216,"md-heart-outline":62215,"md-help":62219,"md-help-buoy":62217,"md-help-circle":62218,"md-home":62220,"md-ice-cream":62221,"md-image":62222,"md-images":62223,"md-infinite":62224,"md-information":62226,"md-information-circle":62225,"md-ionic":62227,"md-ionitron":62228,"md-jet":62229,"md-key":62230,"md-keypad":62231,"md-laptop":62232,"md-leaf":62233,"md-link":61998,"md-list":62235,"md-list-box":62234,"md-locate":62236,"md-lock":62237,"md-log-in":62238,"md-log-out":62239,"md-magnet":62240,"md-mail":62242,"md-mail-open":62241,"md-male":62243,"md-man":62244,"md-map":62245,"md-medal":62246,"md-medical":62247,"md-medkit":62248,"md-megaphone":62249,"md-menu":62250,"md-mic":62252,"md-mic-off":62251,"md-microphone":62253,"md-moon":62254,"md-more":61897,"md-move":62257,"md-musical-note":62258,"md-musical-notes":62259,"md-navigate":62260,"md-no-smoking":62261,"md-notifications":62264,"md-notifications-off":62262,"md-notifications-outline":62263,"md-nuclear":62265,"md-nutrition":62266,"md-open":62267,"md-options":62268,"md-outlet":62269,"md-paper":62271,"md-paper-plane":62270,"md-partly-sunny":62272,"md-pause":62273,"md-paw":62274,"md-people":62275,"md-person":62277,"md-person-add":62276,"md-phone-landscape":62278,"md-phone-portrait":62279,"md-photos":62280,"md-pie":62281,"md-pin":62282,"md-pint":62283,"md-pizza":62292,"md-plane":62293,"md-planet":62294,"md-play":62295,"md-podium":62296,"md-power":62297,"md-pricetag":62298,"md-pricetags":62299,"md-print":62300,"md-pulse":62301,"md-qr-scanner":62302,"md-quote":62303,"md-radio":62306,"md-radio-button-off":62304,"md-radio-button-on":62305,"md-rainy":62307,"md-recording":62308,"md-redo":62309,"md-refresh":62310,"md-refresh-circle":61992,"md-remove":62312,"md-remove-circle":62311,"md-reorder":62313,"md-repeat":62314,"md-resize":62315,"md-restaurant":62316,"md-return-left":62317,"md-return-right":62318,"md-reverse-camera":62319,"md-rewind":62320,"md-ribbon":62321,"md-rose":62322,"md-sad":62323,"md-school":62324,"md-search":62325,"md-send":62326,"md-settings":62327,"md-share":62329,"md-share-alt":62328,"md-shirt":62330,"md-shuffle":62331,"md-skip-backward":62332,"md-skip-forward":62333,"md-snow":62334,"md-speedometer":62335,"md-square":62337,"md-square-outline":62336,"md-star":62340,"md-star-half":62338,"md-star-outline":62339,"md-stats":62341,"md-stopwatch":62342,"md-subway":62343,"md-sunny":62344,"md-swap":62345,"md-switch":62346,"md-sync":62347,"md-tablet-landscape":62348,"md-tablet-portrait":62349,"md-tennisball":62350,"md-text":62351,"md-thermometer":62352,"md-thumbs-down":62353,"md-thumbs-up":62354,"md-thunderstorm":62355,"md-time":62356,"md-timer":62357,"md-train":62358,"md-transgender":62359,"md-trash":62360,"md-trending-down":62361,"md-trending-up":62362,"md-trophy":62363,"md-umbrella":62364,"md-undo":62365,"md-unlock":62366,"md-videocam":62367,"md-volume-down":62368,"md-volume-mute":62369,"md-volume-off":62370,"md-volume-up":62371,"md-walk":62372,"md-warning":62373,"md-watch":62374,"md-water":62375,"md-wifi":62376,"md-wine":62377,"md-woman":62378}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(59);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-icon {\n  font-family: 'Ionicons'; }\n", ""]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(11);

var _button2 = _interopRequireDefault(_button);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _error = __webpack_require__(9);

var _error2 = _interopRequireDefault(_error);

__webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * defaultPageNum --> 默认页码数
 * pageNum --> 页码数
 * pageTotal --> 总页数
 * previous --> 上一页按钮文字
 * next --> 下一页按钮文字
 * hidePage --> 隐藏数字
 * hideButton --> 隐藏按钮
 * disabled --> 禁用分页按钮
 * onChange --> 页码改变时的回调
 * activePageColor --> 当前页码的颜色
 * pageColor --> 数字的颜色(/pageTotal)
 * previousBtnStyle --> 上一页按钮样式
 * nextBtnStyle --> 下一页按钮样式
 * previousTextStyle --> 上一页文字样式
 * nextTextStyle --> 下一页文字样式
 */

var Pagination = function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

        _this.state = {
            currentPage: 1
        };
        return _this;
    }
    // defaultPageNum/pageNum必须大于等于1且小于等于pageTotal
    // pageTotal必须大于等于1


    _createClass(Pagination, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.pageNum != null) {
                this.setState({
                    currentPage: this.props.pageNum
                });
            } else if (this.props.defaultPageNum != null) {
                this.setState({
                    currentPage: this.props.defaultPageNum
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.pageNum != this.props.pageNum) {
                this.setState({
                    currentPage: nextProps.pageNum
                });
            }
        }
    }, {
        key: 'addPageNum',
        value: function addPageNum() {
            var _this2 = this;

            var prevPage = this.state.currentPage;
            var nextPage = prevPage;
            if (prevPage < this.props.pageTotal) {
                nextPage += 1;
            }
            if (this.props.pageNum == null) {
                this.setState({
                    currentPage: nextPage
                }, function () {
                    _this2.props.onChange && _this2.props.onChange(_this2.state.currentPage);
                });
            } else {
                this.props.onChange && this.props.onChange(nextPage);
            }
        }
    }, {
        key: 'subtractPageNum',
        value: function subtractPageNum() {
            var _this3 = this;

            var prevPage = this.state.currentPage;
            var nextPage = prevPage;
            if (prevPage > 1) {
                nextPage -= 1;
            }
            if (this.props.pageNum == null) {
                this.setState({
                    currentPage: nextPage
                }, function () {
                    _this3.props.onChange && _this3.props.onChange(_this3.state.currentPage);
                });
            } else {
                this.props.onChange && this.props.onChange(nextPage);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var btnStyle = {
                borderColor: _util2.default.theme.lineColor,
                borderWidth: 1,
                backgroundColor: 'white'
            };
            var justifyContent = this.props.hideButton ? 'center' : 'between';
            var previousDisabled = this.props.disabled || (this.state.currentPage > 1 ? false : true);
            var nextDisabled = this.props.disabled || (this.state.currentPage < this.props.pageTotal ? false : true);
            return _react2.default.createElement(
                'div',
                { className: 'x-pagination-container x-pagination-justify-' + justifyContent },
                !this.props.hideButton ? _react2.default.createElement(
                    _button2.default,
                    {
                        buttonStyle: _extends({}, btnStyle, this.props.previousBtnStyle),
                        textStyle: _extends({ color: _util2.default.theme.minorColor }, this.props.previousTextStyle),
                        inline: true,
                        disabled: previousDisabled,
                        onPress: function onPress() {
                            return _this4.subtractPageNum();
                        }
                    },
                    this.props.previous
                ) : null,
                !this.props.hidePage ? _react2.default.createElement(
                    'span',
                    { className: 'x-pagination-text', style: { color: this.props.pageColor } },
                    _react2.default.createElement(
                        'span',
                        { style: { color: this.props.activePageColor } },
                        this.state.currentPage
                    ),
                    '/',
                    this.props.pageTotal
                ) : null,
                !this.props.hideButton ? _react2.default.createElement(
                    _button2.default,
                    {
                        buttonStyle: _extends({}, btnStyle, this.props.nextBtnStyle),
                        textStyle: _extends({ color: _util2.default.theme.minorColor }, this.props.nextTextStyle),
                        inline: true,
                        disabled: nextDisabled,
                        onPress: function onPress() {
                            return _this4.addPageNum();
                        }
                    },
                    this.props.next
                ) : null
            );
        }
    }]);

    return Pagination;
}(_react.Component);

Pagination.defaultProps = {
    pageTotal: 1,
    previous: '上一页',
    next: '下一页',
    hidePage: false,
    hideButton: false,
    disabled: false,
    activePageColor: _util2.default.theme.mainColor,
    pageColor: _util2.default.theme.minorColor,
    previousBtnStyle: {},
    nextBtnStyle: {},
    previousTextStyle: {},
    nextTextStyle: {},
    onChange: function onChange() {} };
Pagination.propTypes = {
    defaultPageNum: _error2.default.customPageNumTypes,
    pageNum: _error2.default.customPageNumTypes,
    pageTotal: _error2.default.customPageTotalTypes,
    previous: _propTypes2.default.string,
    next: _propTypes2.default.string,
    hidePage: _propTypes2.default.bool,
    hideButton: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    activePageColor: _propTypes2.default.string,
    pageColor: _propTypes2.default.string,
    previousBtnStyle: _propTypes2.default.object,
    nextBtnStyle: _propTypes2.default.object,
    previousTextStyle: _propTypes2.default.object,
    nextTextStyle: _propTypes2.default.object,
    onChange: _propTypes2.default.func
};
var _default = Pagination;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Pagination, 'Pagination', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/pagination/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/pagination/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(62);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-pagination-container {\n  display: flex;\n  display: -webkit-flex;\n  -webkit-align-items: center;\n  align-items: center;\n  padding: 0.26667rem 0; }\n  .x-pagination-container .x-pagination-text {\n    font-size: 18px; }\n    [data-dpr=\"2\"] .x-pagination-container .x-pagination-text {\n      font-size: 36px; }\n    [data-dpr=\"3\"] .x-pagination-container .x-pagination-text {\n      font-size: 54px; }\n\n.x-pagination-justify-center {\n  -webkit-justify-content: center;\n  justify-content: center; }\n\n.x-pagination-justify-between {\n  -webkit-justify-content: space-between;\n  justify-content: space-between; }\n", ""]);

// exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * defaultValue: 默认值
 * value: value --> 受控
 * onChange: group value更改时的回调，返回当前value
 * disabled: 是否禁用
 * groupStyle: 自定义group容器样式
 */

var Group = function (_Component) {
    _inherits(Group, _Component);

    function Group(props) {
        _classCallCheck(this, Group);

        var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));

        _this.state = {
            currentValue: null
        };
        return _this;
    }

    _createClass(Group, [{
        key: 'changeValue',
        value: function changeValue(value) {
            if (this.props.value != null) {} else {
                this.setState({
                    currentValue: value
                });
            }
            this.props.onChange(value);
        }
    }, {
        key: 'renderRadioGroup',
        value: function renderRadioGroup() {
            var _this2 = this;

            var disabled = this.props.disabled == null ? false : this.props.disabled;
            return _react2.default.Children.map(this.props.children, function (item, index) {
                var extendProps = {
                    disabled: disabled,
                    groupLimit: true,
                    onClick: function onClick(value) {
                        return _this2.changeValue(value);
                    }
                    //用户指定了value,radio变成了受控组件
                };if (_this2.props.value != null) {
                    var checked = _this2.props.value == item.props.value;
                    extendProps.checked = checked;
                }
                //其他任何条件下radio都是非受控的
                else if (_this2.props.defaultValue != null) {
                        var _checked = _this2.state.currentValue == null ? _this2.props.defaultValue == item.props.value : _this2.state.currentValue == item.props.value;
                        extendProps.checked = _checked;
                    } else {
                        if (_this2.state.currentValue != null) {
                            var _checked2 = _this2.state.currentValue == item.props.value;
                            extendProps.checked = _checked2;
                        } else {
                            extendProps.checked = false;
                        }
                    }
                return _react2.default.cloneElement(item, extendProps);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.props.groupStyle },
                this.renderRadioGroup()
            );
        }
    }]);

    return Group;
}(_react.Component);
/**
 * id: radio id
 * value: radio value
 * checked: 勾选状态（受控）
 * radioStyle: 自定义radio样式
 * textStyle: 自定义文本样式
 * disabled: 是否禁用
*/


Group.defaultProps = {
    groupStyle: {},
    disabled: false,
    onChange: function onChange() {}
};
Group.propTypes = {
    groupStyle: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};

var Radio = function (_Component2) {
    _inherits(Radio, _Component2);

    function Radio(props) {
        _classCallCheck(this, Radio);

        var _this3 = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

        _this3.state = {
            checked: false
        };
        return _this3;
    }

    _createClass(Radio, [{
        key: 'changeRadio',
        value: function changeRadio() {
            if (this.props.groupLimit || this.props.groupLimit != null) {
                this.props.onClick(this.props.value);
            } else {
                this.setState({
                    checked: true
                });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.groupLimit || this.props.checked != null) {
                this.setState({
                    checked: this.props.checked
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.checked != this.props.checked) {
                if (nextProps.groupLimit || nextProps.checked != null) {
                    this.setState({
                        checked: nextProps.checked
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var disabledStyle = this.props.disabled ? { color: '#CCCCCC' } : {};
            var radioClass = this.state.checked ? 'x-radio-checked' : '';
            var disabledClass = this.props.disabled ? ' x-radio-disabled' : '';
            return _react2.default.createElement(
                'div',
                { className: 'x-radio-container' + disabledClass, style: this.props.radioStyle },
                _react2.default.createElement('input', {
                    type: 'radio',
                    id: this.props.id,
                    value: this.props.value,
                    checked: this.state.checked,
                    disabled: this.props.disabled,
                    onChange: function onChange() {
                        return _this4.changeRadio();
                    }
                }),
                _react2.default.createElement(
                    'label',
                    {
                        htmlFor: this.props.id,
                        className: radioClass
                    },
                    this.props.children && this.props.children.length ? _react2.default.createElement(
                        'span',
                        { style: _extends({}, this.props.textStyle, disabledStyle) },
                        this.props.children
                    ) : null
                )
            );
        }
    }]);

    return Radio;
}(_react.Component);

Radio.defaultProps = {
    disabled: false,
    radioStyle: {},
    textStyle: {}
};
Radio.propTypes = {
    id: _propTypes2.default.string.isRequired,
    checked: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    radioStyle: _propTypes2.default.object,
    textStyle: _propTypes2.default.object
};


Radio.Group = Group;
var _default = Radio;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Group, 'Group', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/radio/index.js');
    reactHotLoader.register(Radio, 'Radio', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/radio/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/radio/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(65);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-radio-container {\n  position: relative;\n  min-height: 0.53333rem;\n  margin: 0.05333rem 0; }\n  .x-radio-container input {\n    position: absolute;\n    top: 0.26667rem;\n    left: 0.26667rem;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    z-index: 0;\n    opacity: 0; }\n  .x-radio-container label {\n    position: relative;\n    padding-left: 0.66667rem;\n    line-height: 0.53333rem; }\n    .x-radio-container label:before {\n      content: '';\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      transform: translateY(-50%);\n      width: 0.53333rem;\n      height: 0.53333rem;\n      -webkit-border-radius: 0.53333rem;\n      border-radius: 0.53333rem;\n      margin-left: -0.66667rem;\n      background-color: white;\n      border: 1px solid #aaa;\n      box-sizing: border-box;\n      z-index: 1; }\n  .x-radio-container .x-radio-checked:before {\n    border-color: #ff4f4f;\n    padding: 0.10667rem;\n    background-color: #ff4f4f;\n    background-clip: content-box;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 0.4rem 0.4rem; }\n\n.x-radio-disabled input {\n  opacity: 0; }\n\n.x-radio-disabled label:before {\n  opacity: 0.7; }\n\n.x-radio-container label span {\n  font-size: 15px; }\n  [data-dpr=\"2\"] .x-radio-container label span {\n    font-size: 30px; }\n  [data-dpr=\"3\"] .x-radio-container label span {\n    font-size: 45px; }\n", ""]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * defaultValue: 默认值
 * value: value（受控）
 * placeholder
 * cancelText: “取消”按钮的文本
 * onChange: 相当于input的onChange
 * onSubmit
 * onFocus
 * onBlur
 * onCancel: 点击“取消”时的回调
 * showModal: 是否启动modal模式
 * showCancelButton: 是否显示“取消”按钮
 * disabled: 是否禁用
 * modalComponent: 如果开启了modal模式，使用该属性定义Modal组件内的子元素
 */

var Search = function (_Component) {
    _inherits(Search, _Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            modalVisible: false,
            width: 0
        };

        _this.inputBoxText = _this.props.value || _this.props.defaultValue || _this.props.placeholder;
        return _this;
    }

    _createClass(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'runAnimation',
        value: function runAnimation(widthEnd, callback) {
            this.setState({
                width: widthEnd
            }, function () {
                callback && callback();
            });
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            !this.props.showCancelButton && this.runAnimation(_util2.default.px2rem(60));
            this.props.onFocus();
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            !this.props.showCancelButton && this.runAnimation(0);
            this.props.onBlur();
        }
    }, {
        key: 'onCancel',
        value: function onCancel() {
            !this.props.showCancelButton && this.runAnimation(0);
            this.props.onCancel();
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.search.focus();
            !this.props.showCancelButton && !this.props.showModal && this.runAnimation(_util2.default.px2rem(60));
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.search.blur();
            !this.props.showCancelButton && !this.props.showModal && this.runAnimation(0);
        }
    }, {
        key: 'onKeyDown',
        value: function onKeyDown(keyCode) {
            keyCode === 13 && this.props.onSubmit();
        }
    }, {
        key: 'changeModalVisible',
        value: function changeModalVisible(visible) {
            var _this2 = this;

            this.setState({
                modalVisible: visible
            }, function () {
                visible && _this2.search.focus();
            });
        }
    }, {
        key: 'renderCancelBtn',
        value: function renderCancelBtn(needAnimate, isInModal) {
            var style = needAnimate ? {
                width: this.state.width
            } : null;
            var callback = !isInModal ? this.onCancel.bind(this) : this.cancelModal.bind(this);
            return _react2.default.createElement(
                'a',
                { className: 'x-search-cancel x-search-input', style: style, href: 'javascript:;', onClick: callback },
                this.props.cancelText
            );
        }
    }, {
        key: 'cancelModal',
        value: function cancelModal() {
            this.inputBoxText = this.search.value || this.props.placeholder;
            this.props.onCancel();
            this.search.blur();
            this.props.showModal && this.changeModalVisible(false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return !this.props.showModal ? _react2.default.createElement(
                'div',
                { className: 'x-search-container', style: this.props.showCancelButton ? null : { paddingRight: _util2.default.px2rem(parseFloat(_util2.default.rem2px(this.state.width)) / 3) } },
                _react2.default.createElement('input', {
                    className: 'x-search-input',
                    placeholder: this.props.placeholder,
                    defaultValue: this.props.defaultValue,
                    value: this.props.value,
                    ref: function ref(input) {
                        return _this3.search = input;
                    },
                    onFocus: function onFocus() {
                        return _this3.onFocus();
                    },
                    onBlur: function onBlur() {
                        return _this3.onBlur();
                    },
                    onChange: function onChange(e) {
                        return _this3.props.onChange(e.target.value);
                    },
                    onKeyDown: function onKeyDown(e) {
                        return _this3.onKeyDown(e.keyCode);
                    },
                    disabled: this.props.disabled
                }),
                this.props.showCancelButton ? this.renderCancelBtn(false, false) : this.renderCancelBtn(true, false)
            ) : _react2.default.createElement(
                'div',
                { className: 'x-search-container x-search-table' },
                _react2.default.createElement(
                    'a',
                    { className: 'x-search-input x-search-box', href: 'javascript:;', onClick: function onClick() {
                            _this3.changeModalVisible(true);
                        } },
                    this.inputBoxText
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'x-search-mask ' + (this.state.modalVisible ? 'x-show' : 'x-hide') },
                    _react2.default.createElement(
                        'div',
                        { className: 'x-search-container', style: { backgroundColor: 'white' } },
                        _react2.default.createElement('input', {
                            className: 'x-search-input',
                            style: { backgroundColor: '#EFEFF4' },
                            placeholder: this.props.placeholder,
                            defaultValue: this.props.defaultValue,
                            value: this.props.value,
                            ref: function ref(input) {
                                return _this3.search = input;
                            },
                            onFocus: function onFocus() {
                                return _this3.onFocus();
                            },
                            onBlur: function onBlur() {
                                return _this3.onBlur();
                            },
                            onChange: function onChange(e) {
                                return _this3.props.onChange(e.target.value);
                            },
                            onKeyDown: function onKeyDown(e) {
                                return _this3.onKeyDown(e.keyCode);
                            },
                            disabled: this.props.disabled
                        }),
                        this.renderCancelBtn(false, true)
                    ),
                    _react2.default.createElement('hr', null),
                    this.props.modalComponent
                )
            );
        }
    }]);

    return Search;
}(_react.Component);

Search.defaultProps = {
    defaultValue: '',
    placeholder: '搜索',
    cancelText: '取消',
    onChange: function onChange() {},
    onSubmit: function onSubmit() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onCancel: function onCancel() {},
    showModal: false,
    showCancelButton: false,
    disabled: false,
    modalComponent: null
};
Search.propTypes = {
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    placeholder: _propTypes2.default.string,
    cancelText: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onSubmit: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onCancel: _propTypes2.default.func,
    showModal: _propTypes2.default.bool,
    showCancelButton: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    modalComponent: _propTypes2.default.element
};
var _default = Search;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Search, 'Search', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/search/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/search/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(68);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-search-container hr {\n  background-color: #eeeeee;\n  height: 1px;\n  border: none;\n  margin: 0; }\n\n.x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-search-container .x-search-cancel, .x-search-container .x-search-box {\n  text-decoration: none; }\n  .x-search-container .x-search-cancel:hover, .x-search-container .x-search-box:hover {\n    text-decoration: none; }\n\n.x-search-container input, .x-search-container .x-search-box {\n  -webkit-flex: 1;\n  flex: 1;\n  border-width: 0;\n  outline: none;\n  -webkit-border-radius: 0.13333rem;\n  border-radius: 0.13333rem;\n  padding: 0 0.13333rem;\n  background-color: white; }\n  .x-search-container input::-webkit-input-placeholder, .x-search-container .x-search-box::-webkit-input-placeholder {\n    color: #939393; }\n\n.x-search-container {\n  background-color: #EFEFF4;\n  height: 1.28rem;\n  padding: 0.26667rem;\n  max-width: 100vw;\n  display: flex;\n  display: -webkit-flex; }\n  .x-search-container .x-search-cancel {\n    display: inline-block;\n    width: 0.8rem;\n    line-height: 0.8rem;\n    text-align: center;\n    margin-left: 0.26667rem;\n    overflow: hidden;\n    white-space: nowrap;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n    color: #333333; }\n  .x-search-container .x-search-box {\n    display: table-cell;\n    vertical-align: middle;\n    color: #939393; }\n\n.x-search-container, .x-search-container input {\n  box-sizing: border-box; }\n\n.x-search-input {\n  font-size: 15px; }\n  [data-dpr=\"2\"] .x-search-input {\n    font-size: 30px; }\n  [data-dpr=\"3\"] .x-search-input {\n    font-size: 45px; }\n\n.x-search-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: white; }\n\n.x-search-table {\n  display: table;\n  width: 100%; }\n", ""]);

// exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _error = __webpack_require__(9);

var _error2 = _interopRequireDefault(_error);

__webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CIRCLE_WIDTH = 44;
var MIN_VALUE = 0;
var MAX_VALUE = 100;

/**
 * width: 滑块宽度(px，slider会自动转化成rem)
 * progress: 当前value值
 * minValue: 滑块最小值
 * maxValue: 滑块最大值
 * barColor: 轨道颜色
 * ballColor: 圆形按钮颜色
 * crossColor: 已经过的轨道的颜色
 * disabled: 是否禁用
 * onChange: value发生改变时的回调
 */

var Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        var originalPercent = (_this.props.progress - _this.props.minValue) / _this.props.maxValue;
        var initialProgress = originalPercent * (_this.props.width - CIRCLE_WIDTH);
        _this.state = {
            progress: initialProgress
        };
        _this.startX = 0;
        _this.endX = 0;
        _this.currentProgress = initialProgress;
        return _this;
    }

    _createClass(Slider, [{
        key: 'touchValueTransform',
        value: function touchValueTransform(touchValue) {
            return touchValue; //* 2// / utils.getDpr();
        }
    }, {
        key: 'p2v',
        value: function p2v(p, minv, maxv, w) {
            var percentValue = p / w;
            var returnValue = percentValue * (maxv - minv) + minv;
            return Number(returnValue.toFixed(0));
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            var _props = this.props,
                width = _props.width,
                minValue = _props.minValue,
                maxValue = _props.maxValue,
                disabled = _props.disabled;

            return this.p2v(this.state.progress, minValue, maxValue, width - CIRCLE_WIDTH);
        }
    }, {
        key: 'touchStart',
        value: function touchStart(e) {
            if (!this.props.disabled) {
                var touch = e.targetTouches[0];
                this.startX = this.touchValueTransform(touch.pageX);
            }
        }
    }, {
        key: 'touchMove',
        value: function touchMove(e) {
            var _this2 = this;

            if (!this.props.disabled) {
                var touch = e.targetTouches[0];

                this.endX = this.touchValueTransform(touch.pageX);
                var moveX = this.endX - this.startX;
                console.log(moveX);
                console.log('-----------');
                var _props2 = this.props,
                    width = _props2.width,
                    minValue = _props2.minValue,
                    maxValue = _props2.maxValue,
                    onChange = _props2.onChange;

                var endLength = width - CIRCLE_WIDTH;
                var progress = (moveX + this.currentProgress) * _util2.default.getDpr();
                if (progress < 0) {
                    progress = 0;
                }
                if (progress > endLength) {
                    progress = endLength;
                }
                console.log(progress);
                this.setState({
                    progress: progress
                }, function () {
                    onChange && onChange(_this2.p2v(_this2.state.progress, minValue, maxValue, endLength));
                });
            }
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd(e) {
            if (!this.props.disabled) {
                this.currentProgress = this.state.progress;
                this.startX = this.endX;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var disabledBallColor = this.props.disabled ? '#b4b4b4' : this.props.ballColor;
            var disabledCrossColor = this.props.disabled ? '#b4b4b4' : this.props.crossColor;
            var circleStyle = {
                transform: 'translateX(' + _util2.default.px2rem(this.state.progress) + ')',
                WebkitTransform: 'translateX(' + _util2.default.px2rem(this.state.progress) + ')',
                backgroundColor: disabledBallColor
            };
            return _react2.default.createElement(
                'div',
                { className: 'x-slider-container', style: { width: _util2.default.px2rem(this.props.width) } },
                _react2.default.createElement('div', {
                    className: 'x-slider-bar',
                    style: { width: _util2.default.px2rem(this.props.width - CIRCLE_WIDTH), backgroundColor: this.props.barColor }
                }),
                _react2.default.createElement('div', {
                    onTouchStart: function onTouchStart(e) {
                        return _this3.touchStart(e);
                    },
                    onTouchMove: function onTouchMove(e) {
                        return _this3.touchMove(e);
                    },
                    onTouchEnd: function onTouchEnd(e) {
                        return _this3.touchEnd(e);
                    },
                    className: 'x-slider-circle',
                    style: circleStyle
                }),
                _react2.default.createElement('div', { className: 'x-slider-crossOverView', style: { width: _util2.default.px2rem(this.state.progress), backgroundColor: disabledCrossColor } })
            );
        }
    }]);

    return Slider;
}(_react.Component);

Slider.defaultProps = {
    width: 300,
    progress: MIN_VALUE,
    minValue: MIN_VALUE,
    maxValue: MAX_VALUE,
    barColor: '#d5d3d3',
    ballColor: '#108EE9',
    crossColor: '#108EE9',
    disabled: false,
    onChange: function onChange() {}
};
Slider.propTypes = {
    width: _propTypes2.default.number,
    progress: _error2.default.customProgressTypes,
    minValue: _error2.default.customMinValueTypes,
    maxValue: _error2.default.customMaxValueTypes,
    barColor: _propTypes2.default.string,
    ballColor: _propTypes2.default.string,
    crossColor: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};
var _default = Slider;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Slider, 'Slider', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/slider/index.js');
    reactHotLoader.register(CIRCLE_WIDTH, 'CIRCLE_WIDTH', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/slider/index.js');
    reactHotLoader.register(MIN_VALUE, 'MIN_VALUE', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/slider/index.js');
    reactHotLoader.register(MAX_VALUE, 'MAX_VALUE', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/slider/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/slider/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(71);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-slider-container {\n  height: 0.58667rem;\n  position: relative;\n  display: flex;\n  display: -webkit-flex;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-align-items: center;\n  align-items: center; }\n  .x-slider-container .x-slider-circle {\n    width: 0.58667rem;\n    height: 0.58667rem;\n    -webkit-border-radius: 0.58667rem;\n    border-radius: 0.58667rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2; }\n  .x-slider-container .x-slider-crossOverView {\n    height: 0.05333rem;\n    position: absolute;\n    top: 0.26667rem;\n    left: 0.29333rem;\n    z-index: 1; }\n  .x-slider-container .x-slider-bar {\n    height: 0.05333rem;\n    width: 0rem; }\n", ""]);

// exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * value: 开关值（true or false）
 * onValueChange: value发生改变时的回调
 * onTintColor: 开关打开时背景色
 * tintColor: 开关关闭时背景色
 * thumbTintColor: 圆形按钮背景色
 * onTintBorderColor: 开关打开时边框颜色
 * tintBorderColor: 开关关闭时边框颜色
 * thumbBorderColor: 圆形按钮边框颜色
 * disabled：是否禁用
 */
var Switch = function (_Component) {
    _inherits(Switch, _Component);

    function Switch(props) {
        _classCallCheck(this, Switch);

        //40
        var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

        var initValue = _this.props.value ? 45 - window.devicePixelRatio : 0;
        _this.state = {
            translateX: initValue
        };
        return _this;
    }

    _createClass(Switch, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value != this.props.value) {
                var toValue = nextProps.value ? 45 - window.devicePixelRatio : 0;
                this.setState({
                    translateX: toValue
                });
            }
        }
    }, {
        key: 'changeValue',
        value: function changeValue() {
            var _props = this.props,
                onValueChange = _props.onValueChange,
                disabled = _props.disabled,
                value = _props.value;

            onValueChange && !disabled && onValueChange(!value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                onTintColor = _props2.onTintColor,
                tintColor = _props2.tintColor,
                thumbTintColor = _props2.thumbTintColor,
                thumbBorderColor = _props2.thumbBorderColor,
                tintBorderColor = _props2.tintBorderColor,
                onTintBorderColor = _props2.onTintBorderColor;

            var backgroundColor = this.state.translateX === 0 ? tintColor : onTintColor;
            var _tintBorderColor = this.state.translateX === 0 ? tintBorderColor : onTintBorderColor;
            var circleStyle = {
                transform: 'translateX(' + _util2.default.px2rem(this.state.translateX) + ')',
                WebkitTransform: 'translateX(' + _util2.default.px2rem(this.state.translateX) + ')',
                backgroundColor: thumbTintColor,
                borderColor: thumbBorderColor
            };
            return _react2.default.createElement(
                'div',
                { className: 'x-switch-container', onClick: function onClick() {
                        return _this2.changeValue();
                    }, style: { backgroundColor: backgroundColor, borderColor: _tintBorderColor } },
                _react2.default.createElement('div', { className: 'x-switch-circle', style: circleStyle })
            );
        }
    }]);

    return Switch;
}(_react.Component);

Switch.defaultProps = {
    value: false,
    onValueChange: function onValueChange() {},
    onTintColor: '#00b247',
    tintColor: 'white',
    thumbTintColor: 'white',
    onTintBorderColor: '#eeeeee',
    tintBorderColor: '#eeeeee',
    thumbBorderColor: '#eeeeee',
    disabled: false
};
Switch.propTypes = {
    value: _propTypes2.default.bool,
    onValueChange: _propTypes2.default.func,
    onTintColor: _propTypes2.default.string,
    tintColor: _propTypes2.default.string,
    thumbTintColor: _propTypes2.default.string,
    onTintBorderColor: _propTypes2.default.string,
    tintBorderColor: _propTypes2.default.string,
    thumbBorderColor: _propTypes2.default.string,
    disabled: _propTypes2.default.bool
};
var _default = Switch;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Switch, 'Switch', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/switch/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/switch/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(74);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-switch-container, .x-switch-container .x-switch-circle {\n  border-width: 1px;\n  border-style: solid; }\n\n.x-switch-container {\n  width: 1.33333rem;\n  -webkit-border-radius: 0.8rem;\n  border-radius: 0.8rem;\n  transition: background-color 0.2s, border-color 0.2s;\n  -webkit-transition: background-color 0.2s, border-color 0.2s; }\n  .x-switch-container .x-switch-circle {\n    width: 0.72rem;\n    height: 0.72rem;\n    border-radius: 0.72rem;\n    transition: transform 0.2s, background-color 0.2s, border-color 0.2s;\n    -webkit-transition: -webkit-transform 0.2s, background-color 0.2s, border-color 0.2s; }\n", ""]);

// exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(76);

var _tabBarItem = __webpack_require__(78);

var _tabBarItem2 = _interopRequireDefault(_tabBarItem);

var _tabBarComponent = __webpack_require__(79);

var _tabBarComponent2 = _interopRequireDefault(_tabBarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * tabBarStyle: 自定义tabBar容器样式
 * tabBarShadowStyle: 自定义tabBar最上方的分割线的样式
 * items: tabbarItems
 * components: tabbarComponents
 * selectedTab: name
 */
var TabBar = function (_Component) {
    _inherits(TabBar, _Component);

    function TabBar(props) {
        _classCallCheck(this, TabBar);

        var _this = _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).call(this, props));

        _this.sceneKeys = [];
        _this.sceneList = [];
        return _this;
    }

    _createClass(TabBar, [{
        key: 'renderScenes',
        value: function renderScenes() {
            var _this2 = this;

            this.props.components.map(function (item, index) {
                if (item.props.name === _this2.props.selectedTab) {
                    //已选中，且已经加载过了
                    if (_this2.sceneKeys.indexOf(item.props.name) >= 0) {
                        _this2.sceneList[index] = _react2.default.cloneElement(_this2.sceneList[index], {
                            key: index,
                            externalClass: 'x-tabbar-component x-tabbar-component-active'
                        });
                    } else {
                        _this2.sceneKeys.push(item.props.name);
                        _this2.sceneList[index] = _react2.default.cloneElement(item, {
                            key: index,
                            externalClass: 'x-tabbar-component x-tabbar-component-active'
                        });
                    }
                } else {
                    //未选中，但加载了
                    if (_this2.sceneKeys.indexOf(item.props.name) >= 0) {
                        _this2.sceneList[index] = _react2.default.cloneElement(_this2.sceneList[index], {
                            key: index,
                            externalClass: 'x-tabbar-component'
                        });
                    }
                }
            });
            //当默认激活项不是第一个时，index0位置为empty（[empty, Comonent1]），导致reactdom无法正确渲染
            //过滤掉空项
            return this.sceneList.filter(function (item) {
                return item;
            });
        }
    }, {
        key: 'renderTabs',
        value: function renderTabs() {
            var _this3 = this;

            return this.props.items.map(function (item) {
                return _react2.default.cloneElement(item, {
                    selected: _this3.props.selectedTab === item.props.name
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-tabbar-container' },
                this.renderScenes(),
                _react2.default.createElement(
                    'div',
                    { className: 'x-tabbar-panel-ctn' },
                    _react2.default.createElement('hr', { style: this.props.tabBarShadowStyle }),
                    _react2.default.createElement(
                        'div',
                        { className: 'x-tabbar-panel', style: this.props.tabBarStyle },
                        this.renderTabs()
                    )
                )
            );
        }
    }]);

    return TabBar;
}(_react.Component);

TabBar.defaultProps = {
    tabBarStyle: {},
    tabBarShadowStyle: {},
    items: [],
    components: [],
    selectedTab: ''
};
TabBar.propTypes = {
    tabBarStyle: _propTypes2.default.object,
    tabBarShadowStyle: _propTypes2.default.object,
    items: _propTypes2.default.array,
    components: _propTypes2.default.array,
    selectedTab: ''
};


TabBar.Item = _tabBarItem2.default;
TabBar.Component = _tabBarComponent2.default;

var _default = TabBar;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(TabBar, 'TabBar', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/tabBar/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/tabBar/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(77);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-tabbar-panel-ctn hr {\n  background-color: #eeeeee;\n  height: 1px;\n  border: none;\n  margin: 0; }\n\n.x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-tabbar-container {\n  height: 100vh;\n  display: flex;\n  display: -webkit-flex;\n  -webkit-flex-direction: column;\n  flex-direction: column; }\n\n.x-tabbar-panel-ctn {\n  width: 100%;\n  position: absolute;\n  bottom: 0; }\n  .x-tabbar-panel-ctn .x-tabbar-panel {\n    display: flex;\n    display: -webkit-flex;\n    height: 1.30667rem;\n    background-color: #f8f8f8; }\n\n.x-tabbar-item {\n  display: flex;\n  display: -webkit-flex;\n  -webkit-flex: 1;\n  flex: 1;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  color: #333333;\n  font-size: 12px;\n  text-decoration: none; }\n  [data-dpr=\"2\"] .x-tabbar-item {\n    font-size: 24px; }\n  [data-dpr=\"3\"] .x-tabbar-item {\n    font-size: 36px; }\n  .x-tabbar-item:hover {\n    text-decoration: none; }\n\n.x-tabbar-item-active {\n  color: #ff4f4f; }\n\n.x-tabbar-component {\n  display: none; }\n\n.x-tabbar-component-active {\n  display: flex;\n  display: -webkit-flex;\n  -webkit-flex: 1;\n  flex: 1; }\n", ""]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * selectedTitleStyle: 自定义选中时的文本样式
 * title: 标题
 * titleStyle: 自定义默认（未选中）时的文本样式
 * name: 指定一个key
 * tabStyle: 自定义每个tabBar.Item的容器样式
 * icon: 未选中时的图标
 * selectedIcon: 选中时的图标
 * changeTab: 切换时触发，返回选中状态的item的name（key）
 */

var TabBarItem = function (_Component) {
    _inherits(TabBarItem, _Component);

    //selected from TabBar
    function TabBarItem(props) {
        _classCallCheck(this, TabBarItem);

        return _possibleConstructorReturn(this, (TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).call(this, props));
    }

    _createClass(TabBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                selected = _props.selected,
                selectedTitleStyle = _props.selectedTitleStyle,
                titleStyle = _props.titleStyle,
                tabStyle = _props.tabStyle,
                name = _props.name,
                selectedIcon = _props.selectedIcon,
                icon = _props.icon,
                title = _props.title,
                changeTab = _props.changeTab;

            var textStyle = selected ? selectedTitleStyle : titleStyle;
            return _react2.default.createElement(
                'a',
                {
                    className: 'x-tabbar-item' + (selected ? ' x-tabbar-item-active' : ''),
                    href: 'javascript:;',
                    style: [textStyle, tabStyle],
                    onClick: function onClick() {
                        return changeTab(name);
                    }
                },
                selected ? selectedIcon : icon,
                _react2.default.createElement(
                    'span',
                    null,
                    title
                )
            );
        }
    }]);

    return TabBarItem;
}(_react.Component);

TabBarItem.defaultProps = {
    //selected: false,
    selectedTitleStyle: {},
    title: '',
    titleStyle: {},
    name: '',
    tabStyle: {},
    icon: null,
    selectedIcon: null,
    changeTab: function changeTab() {}
};
TabBarItem.propTypes = {
    //selected: PropTypes.bool,
    selectedTitleStyle: _propTypes2.default.object,
    title: _propTypes2.default.string,
    titleStyle: _propTypes2.default.object,
    name: _propTypes2.default.string,
    tabStyle: _propTypes2.default.object,
    icon: _propTypes2.default.element,
    selectedIcon: _propTypes2.default.element,
    changeTab: _propTypes2.default.func
};
var _default = TabBarItem;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(TabBarItem, 'TabBarItem', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/tabBar/tabBarItem.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/tabBar/tabBarItem.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _default = function _default(_ref) {
    var externalClass = _ref.externalClass,
        children = _ref.children;

    return React.createElement(
        "div",
        { className: externalClass },
        children
    );
};

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, "default", "/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/tabBar/tabBarComponent.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * content -->toast显示的内容
 * duration -->持续时间
 * mask -->是否使用遮罩层，默认为true，使用遮罩层的话在toast显示期间无法对屏幕进行任何操作
**/

var defaultConfig = {
    duration: 3000,
    mask: true,
    content: ''
};

var Toast = function (_Component) {
    _inherits(Toast, _Component);

    function Toast(props) {
        _classCallCheck(this, Toast);

        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

        _this.state = _extends({
            opacity: 0,
            renderView: false
        }, defaultConfig);
        _this.timer = null;
        return _this;
    }

    _createClass(Toast, [{
        key: 'timerPromise',
        value: function timerPromise(time) {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.timer = setTimeout(function () {
                    resolve(true);
                }, time);
            });
        }
    }, {
        key: 'statePromise',
        value: function statePromise(obj) {
            var _this3 = this;

            return new Promise(function (resolve) {
                _this3.setState(function (prevState) {
                    return obj;
                });
                resolve(true);
            });
        }
    }, {
        key: 'show',
        value: function show(config) {
            var _this4 = this;

            var content = config.content,
                duration = config.duration,
                mask = config.mask;

            duration = duration ? duration : defaultConfig.duration;
            if (mask == undefined) {
                mask = defaultConfig.mask;
            }
            this.setState(function (prevState) {
                return {
                    renderView: true,
                    content: content,
                    duration: duration,
                    mask: mask
                };
            });
            this.timer && clearTimeout(this.timer);
            this.statePromise({
                renderView: true,
                content: content,
                duration: duration,
                mask: mask }).then(function () {
                return _this4.timerPromise(0);
            }) //等待视图更新完毕后再opacity: 1
            .then(function () {
                return _this4.statePromise({ opacity: 1 });
            }).then(function () {
                return _this4.timerPromise(duration);
            }).then(function () {
                return _this4.statePromise({ opacity: 0 });
            }).then(function () {
                return _this4.timerPromise(200);
            }).then(function () {
                return _this4.statePromise({ renderView: false });
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.anim) {
                this.anim.stop();
                this.anim = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var toastStyle = {
                WebkitTransition: 'opacity 0.2s',
                transition: 'opacity 0.2s',
                opacity: this.state.opacity
            };
            return this.state.renderView ? _react2.default.createElement(
                'div',
                { className: 'x-toast-mask ' + (this.state.mask ? 'x-toast-point-auto' : 'x-toast-point-none'), style: toastStyle },
                _react2.default.createElement(
                    'div',
                    { className: 'x-toast-box' },
                    _react2.default.createElement(
                        'p',
                        { className: 'x-toast-text' },
                        this.state.content
                    )
                )
            ) : null;
        }
    }]);

    return Toast;
}(_react.Component);

var _default = Toast;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Toast, 'Toast', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/toast/index.js');
    reactHotLoader.register(defaultConfig, 'defaultConfig', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/toast/index.js');
    reactHotLoader.register(_default, 'default', '/Users/qinchuan/workspace/1335382915.github.io/x-ui/h5/component/toast/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(82);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".x-show {\n  display: block; }\n\n.x-hide {\n  display: none; }\n\n.list-second-text, .list-third-text {\n  margin: 0 !important; }\n\n.x-toast-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  display: -webkit-flex;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-align-items: center;\n  align-items: center; }\n  .x-toast-mask .x-toast-box {\n    min-width: 2.66667rem;\n    padding: 0.24rem 0.4rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    -webkit-border-radius: 0.08rem;\n    border-radius: 0.08rem;\n    text-align: center; }\n\n.x-toast-text {\n  color: white;\n  font-size: 17px; }\n  [data-dpr=\"2\"] .x-toast-text {\n    font-size: 34px; }\n  [data-dpr=\"3\"] .x-toast-text {\n    font-size: 51px; }\n\n.x-toast-point-none {\n  pointer-events: none; }\n\n.x-toast-point-auto {\n  pointer-events: auto; }\n", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map