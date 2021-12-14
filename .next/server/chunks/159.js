exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 8771:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(9297));

var _loadable = _interopRequireDefault(__webpack_require__(2307));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (false) {}

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ 7353:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletAdapterNetwork = exports.BaseWalletAdapter = exports.EventEmitter = void 0;

const eventemitter3_1 = __importDefault(__webpack_require__(9553));

exports.EventEmitter = eventemitter3_1.default;

class BaseWalletAdapter extends eventemitter3_1.default {}

exports.BaseWalletAdapter = BaseWalletAdapter;
var WalletAdapterNetwork;

(function (WalletAdapterNetwork) {
  WalletAdapterNetwork["Mainnet"] = "mainnet-beta";
  WalletAdapterNetwork["Testnet"] = "testnet";
  WalletAdapterNetwork["Devnet"] = "devnet";
})(WalletAdapterNetwork = exports.WalletAdapterNetwork || (exports.WalletAdapterNetwork = {}));

/***/ }),

/***/ 3735:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletWindowClosedError = exports.WalletWindowBlockedError = exports.WalletSignTransactionError = exports.WalletSignMessageError = exports.WalletSendTransactionError = exports.WalletNotConnectedError = exports.WalletKeypairError = exports.WalletPublicKeyError = exports.WalletAccountError = exports.WalletDisconnectionError = exports.WalletDisconnectedError = exports.WalletConnectionError = exports.WalletNotReadyError = exports.WalletNotInstalledError = exports.WalletNotFoundError = exports.WalletError = void 0;

class WalletError extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message, error) {
    super(message);
    this.error = error;
  }

}

exports.WalletError = WalletError;

class WalletNotFoundError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotFoundError';
  }

}

exports.WalletNotFoundError = WalletNotFoundError;

class WalletNotInstalledError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotInstalledError';
  }

}

exports.WalletNotInstalledError = WalletNotInstalledError;

class WalletNotReadyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotReadyError';
  }

}

exports.WalletNotReadyError = WalletNotReadyError;

class WalletConnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletConnectionError';
  }

}

exports.WalletConnectionError = WalletConnectionError;

class WalletDisconnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectedError';
  }

}

exports.WalletDisconnectedError = WalletDisconnectedError;

class WalletDisconnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectionError';
  }

}

exports.WalletDisconnectionError = WalletDisconnectionError;

class WalletAccountError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletAccountError';
  }

}

exports.WalletAccountError = WalletAccountError;

class WalletPublicKeyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletPublicKeyError';
  }

}

exports.WalletPublicKeyError = WalletPublicKeyError;

class WalletKeypairError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletKeypairError';
  }

}

exports.WalletKeypairError = WalletKeypairError;

class WalletNotConnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotConnectedError';
  }

}

exports.WalletNotConnectedError = WalletNotConnectedError;

class WalletSendTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSendTransactionError';
  }

}

exports.WalletSendTransactionError = WalletSendTransactionError;

class WalletSignMessageError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignMessageError';
  }

}

exports.WalletSignMessageError = WalletSignMessageError;

class WalletSignTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignTransactionError';
  }

}

exports.WalletSignTransactionError = WalletSignTransactionError;

class WalletWindowBlockedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowBlockedError';
  }

}

exports.WalletWindowBlockedError = WalletWindowBlockedError;

class WalletWindowClosedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowClosedError';
  }

}

exports.WalletWindowClosedError = WalletWindowClosedError;

/***/ }),

/***/ 5938:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(7353), exports);

__exportStar(__webpack_require__(3735), exports);

__exportStar(__webpack_require__(3708), exports);

__exportStar(__webpack_require__(8344), exports);

/***/ }),

/***/ 3708:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.pollUntilReady = exports.poll = void 0;

function poll(callback, interval, count) {
  if (count > 0) {
    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
      const done = yield callback();
      if (!done) poll(callback, interval, count - 1);
    }), interval);
  }
}

exports.poll = poll;

function pollUntilReady(adapter, pollInterval, pollCount) {
  poll(() => {
    const {
      ready
    } = adapter;

    if (ready) {
      if (!adapter.emit('ready')) {
        console.warn(`${adapter.constructor.name} is ready but no listener was registered`);
      }
    }

    return ready;
  }, pollInterval, pollCount);
}

exports.pollUntilReady = pollUntilReady;

/***/ }),

/***/ 8344:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BaseMessageSignerWalletAdapter = exports.BaseSignerWalletAdapter = void 0;

const adapter_1 = __webpack_require__(7353);

const errors_1 = __webpack_require__(3735);

class BaseSignerWalletAdapter extends adapter_1.BaseWalletAdapter {
  sendTransaction(transaction, connection, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        try {
          transaction.feePayer || (transaction.feePayer = this.publicKey || undefined);
          transaction.recentBlockhash || (transaction.recentBlockhash = (yield connection.getRecentBlockhash('finalized')).blockhash);

          const {
            signers
          } = options,
                sendOptions = __rest(options, ["signers"]);

          (signers === null || signers === void 0 ? void 0 : signers.length) && transaction.partialSign(...signers);
          transaction = yield this.signTransaction(transaction);
          const rawTransaction = transaction.serialize();
          return yield connection.sendRawTransaction(rawTransaction, sendOptions);
        } catch (error) {
          if (error instanceof errors_1.WalletError) throw error;
          throw new errors_1.WalletSendTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.BaseSignerWalletAdapter = BaseSignerWalletAdapter;

class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {}

exports.BaseMessageSignerWalletAdapter = BaseMessageSignerWalletAdapter;

/***/ }),

/***/ 3863:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Button = void 0;

const react_1 = __importDefault(__webpack_require__(9297));

const Button = props => {
  const justifyContent = props.endIcon || props.startIcon ? 'space-between' : 'center';
  return react_1.default.createElement("button", {
    className: `wallet-adapter-button ${props.className || ''}`,
    disabled: props.disabled,
    onClick: props.onClick,
    style: Object.assign({
      justifyContent
    }, props.style),
    tabIndex: props.tabIndex || 0
  }, props.startIcon && react_1.default.createElement("i", {
    className: "wallet-adapter-button-start-icon"
  }, props.startIcon), props.children, props.endIcon && react_1.default.createElement("i", {
    className: "wallet-adapter-button-end-icon"
  }, props.endIcon));
};

exports.Button = Button;

/***/ }),

/***/ 5921:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Collapse = void 0;

const react_1 = __importStar(__webpack_require__(9297));

const Collapse = ({
  id,
  children,
  expanded = false
}) => {
  const ref = (0, react_1.useRef)(null);
  const instant = (0, react_1.useRef)(true);
  const transition = 'height 250ms ease-out';

  const openCollapse = () => {
    const node = ref.current;
    if (!node) return;
    requestAnimationFrame(() => {
      node.style.height = node.scrollHeight + 'px';
    });
  };

  const closeCollapse = () => {
    const node = ref.current;
    if (!node) return;
    requestAnimationFrame(() => {
      node.style.height = node.offsetHeight + 'px';
      node.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        node.style.height = '0';
      });
    });
  };

  (0, react_1.useLayoutEffect)(() => {
    if (expanded) {
      openCollapse();
    } else {
      closeCollapse();
    }
  }, [expanded]);
  (0, react_1.useLayoutEffect)(() => {
    const node = ref.current;
    if (!node) return;

    function handleComplete() {
      if (!node) return;
      node.style.overflow = expanded ? 'initial' : 'hidden';

      if (expanded) {
        node.style.height = 'auto';
      }
    }

    function handleTransitionEnd(event) {
      if (node && event.target === node && event.propertyName === 'height') {
        handleComplete();
      }
    }

    if (instant.current) {
      handleComplete();
      instant.current = false;
    }

    node.addEventListener('transitionend', handleTransitionEnd);
    return () => node.removeEventListener('transitionend', handleTransitionEnd);
  }, [expanded]);
  return react_1.default.createElement("div", {
    children: children,
    className: "wallet-adapter-collapse",
    id: id,
    ref: ref,
    role: "region",
    style: {
      height: 0,
      transition: instant.current ? undefined : transition
    }
  });
};

exports.Collapse = Collapse;

/***/ }),

/***/ 2958:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletConnectButton = void 0;

const wallet_adapter_react_1 = __webpack_require__(6624);

const react_1 = __importStar(__webpack_require__(9297));

const Button_1 = __webpack_require__(3863);

const WalletIcon_1 = __webpack_require__(3022);

const WalletConnectButton = _a => {
  var {
    children,
    disabled,
    onClick
  } = _a,
      props = __rest(_a, ["children", "disabled", "onClick"]);

  const {
    wallet,
    connect,
    connecting,
    connected
  } = (0, wallet_adapter_react_1.useWallet)();
  const handleClick = (0, react_1.useCallback)(event => {
    if (onClick) onClick(event); // eslint-disable-next-line @typescript-eslint/no-empty-function

    if (!event.defaultPrevented) connect().catch(() => {});
  }, [onClick, connect]);
  const content = (0, react_1.useMemo)(() => {
    if (children) return children;
    if (connecting) return 'Connecting ...';
    if (connected) return 'Connected';
    if (wallet) return 'Connect';
    return 'Connect Wallet';
  }, [children, connecting, connected, wallet]);
  return react_1.default.createElement(Button_1.Button, Object.assign({
    className: "wallet-adapter-button-trigger",
    disabled: disabled || !wallet || connecting || connected,
    startIcon: wallet ? react_1.default.createElement(WalletIcon_1.WalletIcon, {
      wallet: wallet
    }) : undefined,
    onClick: handleClick
  }, props), content);
};

exports.WalletConnectButton = WalletConnectButton;

/***/ }),

/***/ 4531:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletDisconnectButton = void 0;

const wallet_adapter_react_1 = __webpack_require__(6624);

const react_1 = __importStar(__webpack_require__(9297));

const Button_1 = __webpack_require__(3863);

const WalletIcon_1 = __webpack_require__(3022);

const WalletDisconnectButton = _a => {
  var {
    children,
    disabled,
    onClick
  } = _a,
      props = __rest(_a, ["children", "disabled", "onClick"]);

  const {
    wallet,
    disconnect,
    disconnecting
  } = (0, wallet_adapter_react_1.useWallet)();
  const handleClick = (0, react_1.useCallback)(event => {
    if (onClick) onClick(event); // eslint-disable-next-line @typescript-eslint/no-empty-function

    if (!event.defaultPrevented) disconnect().catch(() => {});
  }, [onClick, disconnect]);
  const content = (0, react_1.useMemo)(() => {
    if (children) return children;
    if (disconnecting) return 'Disconnecting ...';
    if (wallet) return 'Disconnect';
    return 'Disconnect Wallet';
  }, [children, disconnecting, wallet]);
  return react_1.default.createElement(Button_1.Button, Object.assign({
    className: "wallet-adapter-button-trigger",
    disabled: disabled || !wallet,
    startIcon: wallet ? react_1.default.createElement(WalletIcon_1.WalletIcon, {
      wallet: wallet
    }) : undefined,
    onClick: handleClick
  }, props), content);
};

exports.WalletDisconnectButton = WalletDisconnectButton;

/***/ }),

/***/ 3022:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletIcon = void 0;

const react_1 = __importDefault(__webpack_require__(9297));

const WalletIcon = _a => {
  var {
    wallet
  } = _a,
      props = __rest(_a, ["wallet"]);

  return wallet && react_1.default.createElement("img", Object.assign({
    src: wallet.icon,
    alt: `${wallet.name} icon`
  }, props));
};

exports.WalletIcon = WalletIcon;

/***/ }),

/***/ 2959:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletListItem = void 0;

const react_1 = __importDefault(__webpack_require__(9297));

const Button_1 = __webpack_require__(3863);

const WalletIcon_1 = __webpack_require__(3022);

const WalletListItem = ({
  handleClick,
  tabIndex,
  wallet
}) => {
  return react_1.default.createElement("li", null, react_1.default.createElement(Button_1.Button, {
    onClick: handleClick,
    endIcon: react_1.default.createElement(WalletIcon_1.WalletIcon, {
      wallet: wallet
    }),
    tabIndex: tabIndex
  }, wallet.name));
};

exports.WalletListItem = WalletListItem;

/***/ }),

/***/ 3360:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletModal = void 0;

const wallet_adapter_react_1 = __webpack_require__(6624);

const react_1 = __importStar(__webpack_require__(9297));

const react_dom_1 = __webpack_require__(2268);

const Button_1 = __webpack_require__(3863);

const Collapse_1 = __webpack_require__(5921);

const useWalletModal_1 = __webpack_require__(770);

const WalletListItem_1 = __webpack_require__(2959);

const WalletModal = ({
  className = '',
  logo,
  featuredWallets = 2,
  container = 'body'
}) => {
  const ref = (0, react_1.useRef)(null);
  const {
    wallets,
    select
  } = (0, wallet_adapter_react_1.useWallet)();
  const {
    setVisible
  } = (0, useWalletModal_1.useWalletModal)();
  const [expanded, setExpanded] = (0, react_1.useState)(false);
  const [fadeIn, setFadeIn] = (0, react_1.useState)(false);
  const [portal, setPortal] = (0, react_1.useState)(null);
  const [featured, more] = (0, react_1.useMemo)(() => [wallets.slice(0, featuredWallets), wallets.slice(featuredWallets)], [wallets, featuredWallets]);
  const hideModal = (0, react_1.useCallback)(() => {
    setFadeIn(false);
    setTimeout(() => setVisible(false), 150);
  }, [setFadeIn, setVisible]);
  const handleClose = (0, react_1.useCallback)(event => {
    event.preventDefault();
    hideModal();
  }, [hideModal]);
  const handleWalletClick = (0, react_1.useCallback)((event, walletName) => {
    select(walletName);
    handleClose(event);
  }, [select, handleClose]);
  const handleCollapseClick = (0, react_1.useCallback)(() => setExpanded(!expanded), [setExpanded, expanded]);
  const handleTabKey = (0, react_1.useCallback)(event => {
    const node = ref.current;
    if (!node) return; // here we query all focusable elements

    const focusableElements = node.querySelectorAll('button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      // if going backward by pressing tab and firstElement is active, shift focus to last focusable element
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      // if going forward by pressing tab and lastElement is active, shift focus to first focusable element
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }, [ref]);
  (0, react_1.useLayoutEffect)(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        hideModal();
      } else if (event.key === 'Tab') {
        handleTabKey(event);
      }
    }; // Get original overflow


    const {
      overflow
    } = window.getComputedStyle(document.body); // Hack to enable fade in animation after mount

    setTimeout(() => setFadeIn(true), 0); // Prevent scrolling on mount

    document.body.style.overflow = 'hidden'; // Listen for keydown events

    window.addEventListener('keydown', handleKeyDown, false);
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [hideModal, handleTabKey]);
  (0, react_1.useLayoutEffect)(() => setPortal(document.querySelector(container)), [setPortal, container]);
  return portal && (0, react_dom_1.createPortal)(react_1.default.createElement("div", {
    "aria-labelledby": "wallet-adapter-modal-title",
    "aria-modal": "true",
    className: `wallet-adapter-modal ${fadeIn && 'wallet-adapter-modal-fade-in'} ${className}`,
    ref: ref,
    role: "dialog"
  }, react_1.default.createElement("div", {
    className: "wallet-adapter-modal-container"
  }, react_1.default.createElement("div", {
    className: `wallet-adapter-modal-wrapper ${!logo && 'wallet-adapter-modal-wrapper-no-logo'}`
  }, logo && react_1.default.createElement("div", {
    className: "wallet-adapter-modal-logo-wrapper"
  }, typeof logo === 'string' ? react_1.default.createElement("img", {
    alt: "logo",
    className: "wallet-adapter-modal-logo",
    src: logo
  }) : logo), react_1.default.createElement("h1", {
    className: "wallet-adapter-modal-title",
    id: "wallet-adapter-modal-title"
  }, "Connect Wallet"), react_1.default.createElement("button", {
    onClick: handleClose,
    className: "wallet-adapter-modal-button-close"
  }, react_1.default.createElement("svg", {
    width: "14",
    height: "14"
  }, react_1.default.createElement("path", {
    d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"
  }))), react_1.default.createElement("ul", {
    className: "wallet-adapter-modal-list"
  }, featured.map(wallet => react_1.default.createElement(WalletListItem_1.WalletListItem, {
    key: wallet.name,
    handleClick: event => handleWalletClick(event, wallet.name),
    wallet: wallet
  }))), more.length && react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(Collapse_1.Collapse, {
    expanded: expanded,
    id: "wallet-adapter-modal-collapse"
  }, react_1.default.createElement("ul", {
    className: "wallet-adapter-modal-list"
  }, more.map(wallet => react_1.default.createElement(WalletListItem_1.WalletListItem, {
    key: wallet.name,
    handleClick: event => handleWalletClick(event, wallet.name),
    tabIndex: expanded ? 0 : -1,
    wallet: wallet
  })))), react_1.default.createElement(Button_1.Button, {
    "aria-controls": "wallet-adapter-modal-collapse",
    "aria-expanded": expanded,
    className: `wallet-adapter-modal-collapse-button ${expanded && 'wallet-adapter-modal-collapse-button-active'}`,
    endIcon: react_1.default.createElement("svg", {
      width: "11",
      height: "6",
      xmlns: "http://www.w3.org/2000/svg"
    }, react_1.default.createElement("path", {
      d: "m5.938 5.73 4.28-4.126a.915.915 0 0 0 0-1.322 1 1 0 0 0-1.371 0L5.253 3.736 1.659.272a1 1 0 0 0-1.371 0A.93.93 0 0 0 0 .932c0 .246.1.48.288.662l4.28 4.125a.99.99 0 0 0 1.37.01z"
    })),
    onClick: handleCollapseClick
  }, expanded ? 'Less' : 'More', " options")))), react_1.default.createElement("div", {
    className: "wallet-adapter-modal-overlay",
    onMouseDown: handleClose
  })), portal);
};

exports.WalletModal = WalletModal;

/***/ }),

/***/ 133:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletModalButton = void 0;

const react_1 = __importStar(__webpack_require__(9297));

const Button_1 = __webpack_require__(3863);

const useWalletModal_1 = __webpack_require__(770);

const WalletModalButton = _a => {
  var {
    children = 'Select Wallet',
    onClick
  } = _a,
      props = __rest(_a, ["children", "onClick"]);

  const {
    visible,
    setVisible
  } = (0, useWalletModal_1.useWalletModal)();
  const handleClick = (0, react_1.useCallback)(event => {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) setVisible(!visible);
  }, [onClick, setVisible, visible]);
  return react_1.default.createElement(Button_1.Button, Object.assign({
    className: "wallet-adapter-button-trigger",
    onClick: handleClick
  }, props), children);
};

exports.WalletModalButton = WalletModalButton;

/***/ }),

/***/ 1230:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletModalProvider = void 0;

const react_1 = __importStar(__webpack_require__(9297));

__webpack_require__(6715);

const useWalletModal_1 = __webpack_require__(770);

const WalletModal_1 = __webpack_require__(3360);

const WalletModalProvider = _a => {
  var {
    children
  } = _a,
      props = __rest(_a, ["children"]);

  const [visible, setVisible] = (0, react_1.useState)(false);
  return react_1.default.createElement(useWalletModal_1.WalletModalContext.Provider, {
    value: {
      visible,
      setVisible
    }
  }, children, visible && react_1.default.createElement(WalletModal_1.WalletModal, Object.assign({}, props)));
};

exports.WalletModalProvider = WalletModalProvider;

/***/ }),

/***/ 1146:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletMultiButton = void 0;

const wallet_adapter_react_1 = __webpack_require__(6624);

const react_1 = __importStar(__webpack_require__(9297));

const Button_1 = __webpack_require__(3863);

const useWalletModal_1 = __webpack_require__(770);

const WalletConnectButton_1 = __webpack_require__(2958);

const WalletIcon_1 = __webpack_require__(3022);

const WalletModalButton_1 = __webpack_require__(133);

const WalletMultiButton = _a => {
  var {
    children
  } = _a,
      props = __rest(_a, ["children"]);

  const {
    publicKey,
    wallet,
    disconnect
  } = (0, wallet_adapter_react_1.useWallet)();
  const {
    setVisible
  } = (0, useWalletModal_1.useWalletModal)();
  const [copied, setCopied] = (0, react_1.useState)(false);
  const [active, setActive] = (0, react_1.useState)(false);
  const ref = (0, react_1.useRef)(null);
  const base58 = (0, react_1.useMemo)(() => publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), [publicKey]);
  const content = (0, react_1.useMemo)(() => {
    if (children) return children;
    if (!wallet || !base58) return null;
    return base58.slice(0, 4) + '..' + base58.slice(-4);
  }, [children, wallet, base58]);
  const copyAddress = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (base58) {
      yield navigator.clipboard.writeText(base58);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }), [base58]);
  const openDropdown = (0, react_1.useCallback)(() => setActive(true), [setActive]);
  const closeDropdown = (0, react_1.useCallback)(() => setActive(false), [setActive]);
  const openModal = (0, react_1.useCallback)(() => {
    setVisible(true);
    closeDropdown();
  }, [setVisible, closeDropdown]);
  (0, react_1.useEffect)(() => {
    const listener = event => {
      const node = ref.current; // Do nothing if clicking dropdown or its descendants

      if (!node || node.contains(event.target)) return;
      closeDropdown();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, closeDropdown]);
  if (!wallet) return react_1.default.createElement(WalletModalButton_1.WalletModalButton, Object.assign({}, props));
  if (!base58) return react_1.default.createElement(WalletConnectButton_1.WalletConnectButton, Object.assign({}, props));
  return react_1.default.createElement("div", {
    className: "wallet-adapter-dropdown"
  }, react_1.default.createElement(Button_1.Button, Object.assign({
    "aria-expanded": active,
    className: "wallet-adapter-button-trigger",
    style: Object.assign({
      pointerEvents: active ? 'none' : 'auto'
    }, props.style),
    onClick: openDropdown,
    startIcon: react_1.default.createElement(WalletIcon_1.WalletIcon, {
      wallet: wallet
    })
  }, props), content), react_1.default.createElement("ul", {
    "aria-label": "dropdown-list",
    className: `wallet-adapter-dropdown-list ${active && 'wallet-adapter-dropdown-list-active'}`,
    ref: ref,
    role: "menu"
  }, react_1.default.createElement("li", {
    onClick: copyAddress,
    className: "wallet-adapter-dropdown-list-item",
    role: "menuitem"
  }, copied ? 'Copied' : 'Copy address'), react_1.default.createElement("li", {
    onClick: openModal,
    className: "wallet-adapter-dropdown-list-item",
    role: "menuitem"
  }, "Connect a different wallet"), react_1.default.createElement("li", {
    onClick: disconnect,
    className: "wallet-adapter-dropdown-list-item",
    role: "menuitem"
  }, "Disconnect")));
};

exports.WalletMultiButton = WalletMultiButton;

/***/ }),

/***/ 5154:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(770), exports);

__exportStar(__webpack_require__(2958), exports);

__exportStar(__webpack_require__(3360), exports);

__exportStar(__webpack_require__(133), exports);

__exportStar(__webpack_require__(1230), exports);

__exportStar(__webpack_require__(4531), exports);

__exportStar(__webpack_require__(3022), exports);

__exportStar(__webpack_require__(1146), exports);

/***/ }),

/***/ 770:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useWalletModal = exports.WalletModalContext = void 0;

const react_1 = __webpack_require__(9297);

exports.WalletModalContext = (0, react_1.createContext)({});

function useWalletModal() {
  return (0, react_1.useContext)(exports.WalletModalContext);
}

exports.useWalletModal = useWalletModal;

/***/ }),

/***/ 9042:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ConnectionProvider = void 0;

const web3_js_1 = __webpack_require__(5681);

const react_1 = __importStar(__webpack_require__(9297));

const useConnection_1 = __webpack_require__(7861);

const ConnectionProvider = ({
  children,
  endpoint,
  config = {
    commitment: 'confirmed'
  }
}) => {
  const connection = (0, react_1.useMemo)(() => new web3_js_1.Connection(endpoint, config), [endpoint, config]);
  return react_1.default.createElement(useConnection_1.ConnectionContext.Provider, {
    value: {
      connection
    }
  }, children);
};

exports.ConnectionProvider = ConnectionProvider;

/***/ }),

/***/ 9027:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletProvider = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

const react_1 = __importStar(__webpack_require__(9297));

const errors_1 = __webpack_require__(5321);

const useLocalStorage_1 = __webpack_require__(7244);

const useWallet_1 = __webpack_require__(67);

const initialState = {
  wallet: null,
  adapter: null,
  ready: false,
  publicKey: null,
  connected: false,
  autoApprove: false
};

const WalletProvider = ({
  children,
  wallets,
  autoConnect = false,
  onError = error => console.error(error),
  localStorageKey = 'walletName'
}) => {
  const [name, setName] = (0, useLocalStorage_1.useLocalStorage)(localStorageKey, null);
  const [{
    wallet,
    adapter,
    ready,
    publicKey,
    connected,
    autoApprove
  }, setState] = (0, react_1.useState)(initialState);
  const [connecting, setConnecting] = (0, react_1.useState)(false);
  const [disconnecting, setDisconnecting] = (0, react_1.useState)(false); // Map of wallet names to wallets

  const walletsByName = (0, react_1.useMemo)(() => wallets.reduce((walletsByName, wallet) => {
    walletsByName[wallet.name] = wallet;
    return walletsByName;
  }, {}), [wallets]); // When the selected wallet changes, initialize the state

  (0, react_1.useEffect)(() => {
    const wallet = name && walletsByName[name];
    const adapter = wallet && wallet.adapter();

    if (adapter) {
      const {
        ready,
        publicKey,
        connected,
        autoApprove
      } = adapter;
      setState({
        wallet,
        adapter,
        connected,
        publicKey,
        ready,
        autoApprove
      });
    } else {
      setState(initialState);
    }
  }, [name, walletsByName, setState]); // If autoConnect is enabled, try to connect when the adapter changes and is ready

  (0, react_1.useEffect)(() => {
    if (autoConnect && adapter && ready && !connecting && !connected) {
      (function () {
        return __awaiter(this, void 0, void 0, function* () {
          setConnecting(true);

          try {
            yield adapter.connect();
          } catch (error) {
            // Clear the selected wallet
            setName(null); // Don't throw error, but onError will still be called
          } finally {
            setConnecting(false);
          }
        });
      })();
    }
  }, [autoConnect, adapter, ready, connecting, connected, setConnecting, setName]); // Reset the state

  const reset = (0, react_1.useCallback)(() => {
    setConnecting(false);
    setDisconnecting(false);
    setState(initialState);
  }, [setConnecting, setDisconnecting, setState]); // Select a wallet by name

  const select = (0, react_1.useCallback)(newName => __awaiter(void 0, void 0, void 0, function* () {
    if (name === newName) return;
    if (adapter) yield adapter.disconnect();
    setName(newName);
  }), [name, adapter, setName]); // Handle the adapter's ready event

  const onReady = (0, react_1.useCallback)(() => setState(state => Object.assign(Object.assign({}, state), {
    ready: true
  })), [setState]); // Handle the adapter's connect event

  const onConnect = (0, react_1.useCallback)(() => {
    if (!adapter) return;
    const {
      connected,
      publicKey,
      ready,
      autoApprove
    } = adapter;
    setState(state => Object.assign(Object.assign({}, state), {
      connected,
      publicKey,
      ready,
      autoApprove
    }));
  }, [adapter, setState]); // Handle the adapter's disconnect event

  const onDisconnect = (0, react_1.useCallback)(() => reset(), [reset]); // Connect the adapter to the wallet

  const connect = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (connecting || disconnecting || connected) return;

    if (!wallet || !adapter) {
      const error = new errors_1.WalletNotSelectedError();
      onError(error);
      throw error;
    }

    if (!ready) {
      setName(null);

      if (false) {}

      const error = new wallet_adapter_base_1.WalletNotReadyError();
      onError(error);
      throw error;
    }

    setConnecting(true);

    try {
      yield adapter.connect();
    } catch (error) {
      setName(null);
      throw error;
    } finally {
      setConnecting(false);
    }
  }), [connecting, disconnecting, connected, wallet, adapter, onError, ready, setName, setConnecting]); // Disconnect the adapter from the wallet

  const disconnect = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (disconnecting) return;
    if (!adapter) return setName(null);
    setDisconnecting(true);

    try {
      yield adapter.disconnect();
    } finally {
      setName(null);
      setDisconnecting(false);
    }
  }), [disconnecting, adapter, setName, setDisconnecting]); // Send a transaction using the provided connection

  const sendTransaction = (0, react_1.useCallback)((transaction, connection, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!adapter) {
      const error = new errors_1.WalletNotSelectedError();
      onError(error);
      throw error;
    }

    if (!connected) {
      const error = new wallet_adapter_base_1.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.sendTransaction(transaction, connection, options);
  }), [adapter, onError, connected]); // Sign a transaction if the wallet supports it

  const signTransaction = (0, react_1.useMemo)(() => adapter && 'signTransaction' in adapter ? transaction => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new wallet_adapter_base_1.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signTransaction(transaction);
  }) : undefined, [adapter, onError, connected]); // Sign multiple transactions if the wallet supports it

  const signAllTransactions = (0, react_1.useMemo)(() => adapter && 'signAllTransactions' in adapter ? transactions => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new wallet_adapter_base_1.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signAllTransactions(transactions);
  }) : undefined, [adapter, onError, connected]); // Sign an arbitrary message if the wallet supports it

  const signMessage = (0, react_1.useMemo)(() => adapter && 'signMessage' in adapter ? message => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new wallet_adapter_base_1.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signMessage(message);
  }) : undefined, [adapter, onError, connected]); // Setup and teardown event listeners when the adapter changes

  (0, react_1.useEffect)(() => {
    if (adapter) {
      adapter.on('ready', onReady);
      adapter.on('connect', onConnect);
      adapter.on('disconnect', onDisconnect);
      adapter.on('error', onError);
      return () => {
        adapter.off('ready', onReady);
        adapter.off('connect', onConnect);
        adapter.off('disconnect', onDisconnect);
        adapter.off('error', onError);
      };
    }
  }, [adapter, onReady, onConnect, onDisconnect, onError]);
  return react_1.default.createElement(useWallet_1.WalletContext.Provider, {
    value: {
      wallets,
      autoConnect,
      select,
      wallet,
      adapter,
      publicKey,
      ready,
      connecting,
      disconnecting,
      connected,
      autoApprove,
      connect,
      disconnect,
      sendTransaction,
      signTransaction,
      signAllTransactions,
      signMessage
    }
  }, children);
};

exports.WalletProvider = WalletProvider;

/***/ }),

/***/ 5321:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletNotSelectedError = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

class WalletNotSelectedError extends wallet_adapter_base_1.WalletError {}

exports.WalletNotSelectedError = WalletNotSelectedError;

/***/ }),

/***/ 6624:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(4288), exports);

__exportStar(__webpack_require__(9042), exports);

__exportStar(__webpack_require__(5321), exports);

__exportStar(__webpack_require__(7861), exports);

__exportStar(__webpack_require__(7244), exports);

__exportStar(__webpack_require__(67), exports);

__exportStar(__webpack_require__(9027), exports);

/***/ }),

/***/ 4288:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAnchorWallet = void 0;

const react_1 = __webpack_require__(9297);

const useWallet_1 = __webpack_require__(67);

function useAnchorWallet() {
  const {
    publicKey,
    signTransaction,
    signAllTransactions
  } = (0, useWallet_1.useWallet)();
  return (0, react_1.useMemo)(() => publicKey && signTransaction && signAllTransactions ? {
    publicKey,
    signTransaction,
    signAllTransactions
  } : undefined, [publicKey, signTransaction, signAllTransactions]);
}

exports.useAnchorWallet = useAnchorWallet;

/***/ }),

/***/ 7861:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useConnection = exports.ConnectionContext = void 0;

const react_1 = __webpack_require__(9297);

exports.ConnectionContext = (0, react_1.createContext)({});

function useConnection() {
  return (0, react_1.useContext)(exports.ConnectionContext);
}

exports.useConnection = useConnection;

/***/ }),

/***/ 7244:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useLocalStorage = void 0;

const react_1 = __webpack_require__(9297);

function useLocalStorage(key, defaultState) {
  const [value, setValue] = (0, react_1.useState)(() => {
    if (typeof localStorage === 'undefined') return defaultState;
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return defaultState;
  });
  const setLocalStorage = (0, react_1.useCallback)(newValue => {
    if (newValue === value) return;
    setValue(newValue);

    if (newValue === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  }, [value, setValue, key]);
  return [value, setLocalStorage];
}

exports.useLocalStorage = useLocalStorage;

/***/ }),

/***/ 67:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useWallet = exports.WalletContext = void 0;

const react_1 = __webpack_require__(9297);

exports.WalletContext = (0, react_1.createContext)({});

function useWallet() {
  return (0, react_1.useContext)(exports.WalletContext);
}

exports.useWallet = useWallet;

/***/ }),

/***/ 6715:
/***/ (() => {



/***/ }),

/***/ 5152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8771)


/***/ })

};
;