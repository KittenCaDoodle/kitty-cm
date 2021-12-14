"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(7631);
;// CONCATENATED MODULE: ./styles/preset-base.ts
const basePreset = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6"
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    a: {
      color: "primary"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    }
  }
};
/* harmony default export */ const preset_base = (basePreset);
;// CONCATENATED MODULE: ./styles/theme.ts
var _base$styles;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const theme = _objectSpread(_objectSpread({}, preset_base), {}, {
  colors: {
    background: "#ffc5c4",
    text: "#473E30",
    primary: "#141221",
    heading: "#473E30",
    background2: "#ffc5c4",
    background3: "#ffc5c4"
  },
  sizes: {
    container: "1080px"
  },
  config: {
    useLocalStorage: true
  },
  buttons: {
    primary: {
      color: "background",
      backgroundColor: "primary",
      border: "1px solid transparent",
      transition: "all .3s linear",
      "&:not(:disabled):hover": {
        bg: "background",
        color: "primary",
        borderColor: "primary",
        cursor: "pointer"
      },
      "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.3
      }
    },
    secondary: {
      border: '3px solid #362F24',
      borderRadius: '10px',
      background: 'linear-gradient(183.33deg, rgba(255, 255, 255, 0) 5.05%, #FFC51F 5.04%)',
      "&:hover": {
        background: '#FFC51F'
      },
      "span, a": {
        fontFamily: 'Burbank Big Wide',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        color: '#1F1B15',
        textDecoration: 'none'
      }
    }
  },
  lineHeights: {
    body: 1.45
  },
  text: {
    normal: {
      fontFamily: 'Burbank Small',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '26px',
      lineHeight: '30px',
      color: ' #473E30'
    },
    road_map_days: {
      transform: 'rotate(-90deg)',
      transformOrigin: 'right, top',
      msTransform: 'rotate(-90deg)',
      msTransformOrigin: 'right, top',
      webkitTransform: 'rotate(-90deg)',
      webkitTransformOrigin: 'right, top',
      position: 'absolute',
      fontFamily: 'Burbank Big Regular',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '42px',
      lineHeight: '42px',
      textAlign: 'center',
      letterSpacing: '0.1em',
      color: '#362F24'
    },
    road_map_normal: {
      fontFamily: 'Burbank Small',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '26px',
      lineHeight: '30px',
      color: '#473E30',
      "@media screen and (max-width: 1080px)": {
        fontSize: '22px'
      }
    },
    road_map_bold: {
      fontFamily: 'Burbank Small Black',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '26px',
      lineHeight: '30px',
      color: '#473E30',
      "@media screen and (max-width: 1080px)": {
        fontSize: '22px'
      }
    },
    heading: {
      color: "heading",
      lineHeight: "body",
      fontSize: "2.2rem"
    },
    heading2: {
      color: "heading",
      lineHeight: "body",
      fontSize: "1.9rem"
    },
    heading3: {
      color: "heading",
      lineHeight: "body",
      fontSize: "1.7rem"
    },
    base: {
      color: "text",
      lineHeight: "body",
      fontSize: "1.4rem"
    },
    small: {
      color: "text",
      lineHeight: "body",
      fontSize: "1.2rem"
    }
  },
  styles: _objectSpread(_objectSpread({}, preset_base.styles), {}, {
    root: _objectSpread(_objectSpread({}, (_base$styles = preset_base.styles) === null || _base$styles === void 0 ? void 0 : _base$styles.root), {}, {
      fontSize: "62.5%",
      body: {
        /** Default text styles */
        fontSize: "1.4rem",
        lineHeight: 1.45,
        color: "text"
      },
      img: {
        maxWidth: "100%",
        height: "auto"
      },
      p: {
        margin: 0
      }
    }),
    spinnerSmall: {
      size: "1.2rem!important"
    }
  })
});

/* harmony default export */ const styles_theme = (theme);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.ThemeProvider, {
    theme: styles_theme,
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7631:
/***/ ((module) => {

module.exports = require("theme-ui");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3494));
module.exports = __webpack_exports__;

})();