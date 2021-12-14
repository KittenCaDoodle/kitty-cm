"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 8918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9553);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5681);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2815);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_2__);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};





var Wallet = function (_super) {
  __extends(Wallet, _super);

  function Wallet(provider, _network) {
    var _this = _super.call(this) || this;

    _this._network = _network;
    _this._publicKey = null;
    _this._popup = null;
    _this._handlerAdded = false;
    _this._nextRequestId = 1;
    _this._autoApprove = false;
    _this._responsePromises = new Map();

    _this.handleMessage = function (e) {
      var _a;

      if (_this._injectedProvider && e.source === window || e.origin === ((_a = _this._providerUrl) === null || _a === void 0 ? void 0 : _a.origin) && e.source === _this._popup) {
        if (e.data.method === 'connected') {
          var newPublicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(e.data.params.publicKey);

          if (!_this._publicKey || !_this._publicKey.equals(newPublicKey)) {
            if (_this._publicKey && !_this._publicKey.equals(newPublicKey)) {
              _this.handleDisconnect();
            }

            _this._publicKey = newPublicKey;
            _this._autoApprove = !!e.data.params.autoApprove;

            _this.emit('connect', _this._publicKey);
          }
        } else if (e.data.method === 'disconnected') {
          _this.handleDisconnect();
        } else if (e.data.result || e.data.error) {
          var promises = _this._responsePromises.get(e.data.id);

          if (promises) {
            var _b = __read(promises, 2),
                resolve = _b[0],
                reject = _b[1];

            if (e.data.result) {
              resolve(e.data.result);
            } else {
              reject(new Error(e.data.error));
            }
          }
        }
      }
    };

    _this._beforeUnload = function () {
      void _this.disconnect();
    };

    if (isInjectedProvider(provider)) {
      _this._injectedProvider = provider;
    } else if (isString(provider)) {
      _this._providerUrl = new URL(provider);
      _this._providerUrl.hash = new URLSearchParams({
        origin: window.location.origin,
        network: _this._network
      }).toString();
    } else {
      throw new Error('provider parameter must be an injected provider or a URL string.');
    }

    return _this;
  }

  Wallet.prototype.handleConnect = function () {
    var _this = this;

    var _a;

    if (!this._handlerAdded) {
      this._handlerAdded = true;
      window.addEventListener('message', this.handleMessage);
      window.addEventListener('beforeunload', this._beforeUnload);
    }

    if (this._injectedProvider) {
      return new Promise(function (resolve) {
        void _this.sendRequest('connect', {});
        resolve();
      });
    } else {
      window.name = 'parent';
      this._popup = window.open((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.toString(), '_blank', 'location,resizable,width=460,height=675');
      return new Promise(function (resolve) {
        _this.once('connect', resolve);
      });
    }
  };

  Wallet.prototype.handleDisconnect = function () {
    var _this = this;

    if (this._handlerAdded) {
      this._handlerAdded = false;
      window.removeEventListener('message', this.handleMessage);
      window.removeEventListener('beforeunload', this._beforeUnload);
    }

    if (this._publicKey) {
      this._publicKey = null;
      this.emit('disconnect');
    }

    this._responsePromises.forEach(function (_a, id) {
      var _b = __read(_a, 2),
          reject = _b[1];

      _this._responsePromises.delete(id);

      reject(new Error('Wallet disconnected'));
    });
  };

  Wallet.prototype.sendRequest = function (method, params) {
    return __awaiter(this, void 0, void 0, function () {
      var requestId;

      var _this = this;

      return __generator(this, function (_a) {
        if (method !== 'connect' && !this.connected) {
          throw new Error('Wallet not connected');
        }

        requestId = this._nextRequestId;
        ++this._nextRequestId;
        return [2
        /*return*/
        , new Promise(function (resolve, reject) {
          var _a, _b, _c, _d;

          _this._responsePromises.set(requestId, [resolve, reject]);

          if (_this._injectedProvider) {
            _this._injectedProvider.postMessage({
              jsonrpc: '2.0',
              id: requestId,
              method: method,
              params: __assign({
                network: _this._network
              }, params)
            });
          } else {
            (_a = _this._popup) === null || _a === void 0 ? void 0 : _a.postMessage({
              jsonrpc: '2.0',
              id: requestId,
              method: method,
              params: params
            }, (_c = (_b = _this._providerUrl) === null || _b === void 0 ? void 0 : _b.origin) !== null && _c !== void 0 ? _c : '');

            if (!_this.autoApprove) {
              (_d = _this._popup) === null || _d === void 0 ? void 0 : _d.focus();
            }
          }
        })];
      });
    });
  };

  Object.defineProperty(Wallet.prototype, "publicKey", {
    get: function () {
      return this._publicKey;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Wallet.prototype, "connected", {
    get: function () {
      return this._publicKey !== null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Wallet.prototype, "autoApprove", {
    get: function () {
      return this._autoApprove;
    },
    enumerable: false,
    configurable: true
  });

  Wallet.prototype.connect = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (this._popup) {
              this._popup.close();
            }

            return [4
            /*yield*/
            , this.handleConnect()];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Wallet.prototype.disconnect = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this._injectedProvider) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.sendRequest('disconnect', {})];

          case 1:
            _a.sent();

            _a.label = 2;

          case 2:
            if (this._popup) {
              this._popup.close();
            }

            this.handleDisconnect();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Wallet.prototype.sign = function (data, display) {
    return __awaiter(this, void 0, void 0, function () {
      var response, signature, publicKey;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(data instanceof Uint8Array)) {
              throw new Error('Data must be an instance of Uint8Array');
            }

            return [4
            /*yield*/
            , this.sendRequest('sign', {
              data: data,
              display: display
            })];

          case 1:
            response = _a.sent();
            signature = bs58__WEBPACK_IMPORTED_MODULE_2___default().decode(response.signature);
            publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(response.publicKey);
            return [2
            /*return*/
            , {
              signature: signature,
              publicKey: publicKey
            }];
        }
      });
    });
  };

  Wallet.prototype.signTransaction = function (transaction) {
    return __awaiter(this, void 0, void 0, function () {
      var response, signature, publicKey;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.sendRequest('signTransaction', {
              message: bs58__WEBPACK_IMPORTED_MODULE_2___default().encode(transaction.serializeMessage())
            })];

          case 1:
            response = _a.sent();
            signature = bs58__WEBPACK_IMPORTED_MODULE_2___default().decode(response.signature);
            publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(response.publicKey);
            transaction.addSignature(publicKey, signature);
            return [2
            /*return*/
            , transaction];
        }
      });
    });
  };

  Wallet.prototype.signAllTransactions = function (transactions) {
    return __awaiter(this, void 0, void 0, function () {
      var response, signatures, publicKey;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.sendRequest('signAllTransactions', {
              messages: transactions.map(function (tx) {
                return bs58__WEBPACK_IMPORTED_MODULE_2___default().encode(tx.serializeMessage());
              })
            })];

          case 1:
            response = _a.sent();
            signatures = response.signatures.map(function (s) {
              return bs58__WEBPACK_IMPORTED_MODULE_2___default().decode(s);
            });
            publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(response.publicKey);
            transactions = transactions.map(function (tx, idx) {
              tx.addSignature(publicKey, signatures[idx]);
              return tx;
            });
            return [2
            /*return*/
            , transactions];
        }
      });
    });
  };

  return Wallet;
}((eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wallet);

function isString(a) {
  return typeof a === 'string';
}

function isInjectedProvider(a) {
  return isObject(a) && 'postMessage' in a && typeof a.postMessage === 'function';
}

function isObject(a) {
  return typeof a === 'object' && a !== null;
}

/***/ }),

/***/ 9120:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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
exports.BitpieWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

const web3_js_1 = __webpack_require__(5681);

class BitpieWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._wallet;
  }

  get autoApprove() {
    return false;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        let account;

        try {
          account = yield wallet.getAccount();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(account);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._wallet) {
        this._wallet = null;
        this._publicKey = null;
        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signTransaction(transaction);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signAllTransactions(transactions);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.BitpieWalletAdapter = BitpieWalletAdapter;

/***/ }),

/***/ 4323:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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

__exportStar(__webpack_require__(9120), exports);

/***/ }),

/***/ 9289:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Coin98WalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

const web3_js_1 = __webpack_require__(5681);

const bs58_1 = __importDefault(__webpack_require__(2815));

class Coin98WalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected());
  }

  get autoApprove() {
    return false;
  }

  connect() {
    var _a;

    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && (0);
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        if (!wallet.isCoin98) throw new wallet_adapter_base_1.WalletNotInstalledError();
        let account;

        try {
          [account] = yield wallet.connect();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(account);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._wallet) {
        this._wallet.disconnect();

        this._wallet = null;
        this._publicKey = null;
        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          const response = yield wallet.request({
            method: 'sol_sign',
            params: [transaction]
          });
          const publicKey = new web3_js_1.PublicKey(response.publicKey);
          const signature = bs58_1.default.decode(response.signature);
          transaction.addSignature(publicKey, signature);
          return transaction;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield Promise.all(transactions.map(transaction => this.signTransaction(transaction)));
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.Coin98WalletAdapter = Coin98WalletAdapter;

/***/ }),

/***/ 2084:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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

__exportStar(__webpack_require__(9289), exports);

/***/ }),

/***/ 7477:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LedgerWalletAdapter = void 0;

const hw_transport_webhid_1 = __importDefault(__webpack_require__(6631));

const wallet_adapter_base_1 = __webpack_require__(5938);

const util_1 = __webpack_require__(6964);

class LedgerWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const transport = this._transport;

      if (transport) {
        transport.off('disconnect', this._disconnected);
        this._transport = null;
        this._publicKey = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._derivationPath = config.derivationPath || (0, util_1.getDerivationPath)(0, 0);
    this._connecting = false;
    this._transport = null;
    this._publicKey = null;
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._transport;
  }

  get autoApprove() {
    return false;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        let transport;

        try {
          transport = yield hw_transport_webhid_1.default.create();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = yield (0, util_1.getPublicKey)(transport, this._derivationPath);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        transport.on('disconnect', this._disconnected);
        this._transport = transport;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const transport = this._transport;

      if (transport) {
        transport.off('disconnect', this._disconnected);
        this._transport = null;
        this._publicKey = null;

        try {
          yield transport.close();
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }

        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const transport = this._transport;
        const publicKey = this._publicKey;
        if (!transport || !publicKey) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          const signature = yield (0, util_1.signTransaction)(transport, transaction, this._derivationPath);
          transaction.addSignature(publicKey, signature);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        return transaction;
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const transport = this._transport;
        const publicKey = this._publicKey;
        if (!transport || !publicKey) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          const derivationPath = this._derivationPath;

          for (const transaction of transactions) {
            const signature = yield (0, util_1.signTransaction)(transport, transaction, derivationPath);
            transaction.addSignature(publicKey, signature);
          }
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        return transactions;
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.LedgerWalletAdapter = LedgerWalletAdapter;

/***/ }),

/***/ 8987:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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
exports.getDerivationPath = void 0;

__exportStar(__webpack_require__(7477), exports);

var util_1 = __webpack_require__(6964);

Object.defineProperty(exports, "getDerivationPath", ({
  enumerable: true,
  get: function () {
    return util_1.getDerivationPath;
  }
}));

/***/ }),

/***/ 6964:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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
exports.signTransaction = exports.getPublicKey = exports.getDerivationPath = void 0;

const hw_transport_1 = __webpack_require__(1492);

const web3_js_1 = __webpack_require__(5681);

function getDerivationPath(account, change) {
  const length = account !== undefined ? change === undefined ? 3 : 4 : 2;
  const derivationPath = Buffer.alloc(1 + length * 4);
  let offset = derivationPath.writeUInt8(length, 0);
  offset = derivationPath.writeUInt32BE(harden(44), offset); // Using BIP44

  offset = derivationPath.writeUInt32BE(harden(501), offset); // Solana's BIP44 path

  if (account !== undefined) {
    offset = derivationPath.writeUInt32BE(harden(account), offset);

    if (change !== undefined) {
      derivationPath.writeUInt32BE(harden(change), offset);
    }
  }

  return derivationPath;
}

exports.getDerivationPath = getDerivationPath;
const BIP32_HARDENED_BIT = 1 << 31 >>> 0;

function harden(n) {
  return (n | BIP32_HARDENED_BIT) >>> 0;
}

const INS_GET_PUBKEY = 0x05;
const INS_SIGN_MESSAGE = 0x06;
const P1_NON_CONFIRM = 0x00;
const P1_CONFIRM = 0x01;
const P2_EXTEND = 0x01;
const P2_MORE = 0x02;
const MAX_PAYLOAD = 255;
const LEDGER_CLA = 0xe0;

function getPublicKey(transport, derivationPath) {
  return __awaiter(this, void 0, void 0, function* () {
    const bytes = yield send(transport, INS_GET_PUBKEY, P1_NON_CONFIRM, derivationPath);
    return new web3_js_1.PublicKey(bytes);
  });
}

exports.getPublicKey = getPublicKey;

function signTransaction(transport, transaction, derivationPath) {
  return __awaiter(this, void 0, void 0, function* () {
    const paths = Buffer.alloc(1);
    paths.writeUInt8(1, 0);
    const message = transaction.serializeMessage();
    const data = Buffer.concat([paths, derivationPath, message]);
    return yield send(transport, INS_SIGN_MESSAGE, P1_CONFIRM, data);
  });
}

exports.signTransaction = signTransaction;

function send(transport, instruction, p1, data) {
  return __awaiter(this, void 0, void 0, function* () {
    let p2 = 0;
    let offset = 0;

    if (data.length > MAX_PAYLOAD) {
      while (data.length - offset > MAX_PAYLOAD) {
        const buffer = data.slice(offset, offset + MAX_PAYLOAD);
        const response = yield transport.send(LEDGER_CLA, instruction, p1, p2 | P2_MORE, buffer); // @ts-ignore

        if (response.length !== 2) throw new hw_transport_1.TransportStatusError(hw_transport_1.StatusCodes.INCORRECT_DATA);
        p2 |= P2_EXTEND;
        offset += MAX_PAYLOAD;
      }
    }

    const buffer = data.slice(offset);
    const response = yield transport.send(LEDGER_CLA, instruction, p1, p2, buffer);
    return response.slice(0, response.length - 2);
  });
}

/***/ }),

/***/ 9809:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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
exports.MathWalletWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

const web3_js_1 = __webpack_require__(5681);

class MathWalletWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._messaged = event => {
      const data = event.data;

      if (data && data.origin === 'mathwallet_internal' && data.type === 'lockStatusChanged' && !data.payload) {
        this._disconnected();
      }
    };

    this._disconnected = () => {
      if (this._wallet) {
        window.removeEventListener('message', this._messaged);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._wallet;
  }

  get autoApprove() {
    return false;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        if (!wallet.isMathWallet) throw new wallet_adapter_base_1.WalletNotInstalledError(); // @TODO: handle if popup is blocked

        let account;

        try {
          account = yield wallet.getAccount();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(account);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        window.addEventListener('message', this._messaged);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._wallet) {
        window.removeEventListener('message', this._messaged);
        this._wallet = null;
        this._publicKey = null;
        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signTransaction(transaction);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signAllTransactions(transactions);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.MathWalletWalletAdapter = MathWalletWalletAdapter;

/***/ }),

/***/ 9632:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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

__exportStar(__webpack_require__(9809), exports);

/***/ }),

/***/ 4173:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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
exports.PhantomWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

const web3_js_1 = __webpack_require__(5681);

class PhantomWalletAdapter extends wallet_adapter_base_1.BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
  }

  get autoApprove() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.autoApprove);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        if (!wallet.isPhantom) throw new wallet_adapter_base_1.WalletNotInstalledError();

        if (!wallet.isConnected) {
          // HACK: Phantom doesn't reject or emit an event if the popup is closed
          const disconnect = wallet._handleDisconnect;

          try {
            yield new Promise((resolve, reject) => {
              const connect = () => {
                wallet.off('connect', connect);
                resolve();
              };

              wallet._handleDisconnect = (...args) => {
                wallet.off('connect', connect);
                reject(new wallet_adapter_base_1.WalletWindowClosedError());
                return disconnect.apply(wallet, args);
              };

              wallet.on('connect', connect);
              wallet.connect().catch(reason => {
                wallet.off('connect', connect);
                reject(reason);
              });
            });
          } catch (error) {
            throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
          } finally {
            wallet._handleDisconnect = disconnect;
          }
        }

        let bytes;

        try {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          bytes = wallet.publicKey.toBytes();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(bytes);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }

        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signTransaction(transaction);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signAllTransactions(transactions);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          const {
            signature
          } = yield wallet.signMessage(message);
          return Uint8Array.from(signature);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.PhantomWalletAdapter = PhantomWalletAdapter;

/***/ }),

/***/ 7516:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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

__exportStar(__webpack_require__(4173), exports);

/***/ }),

/***/ 3201:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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
exports.SolflareWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

const web3_js_1 = __webpack_require__(5681);

class SolflareWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
  }

  get autoApprove() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.autoApprove);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        if (!wallet.isSolflare) throw new wallet_adapter_base_1.WalletNotInstalledError();

        if (!wallet.isConnected) {
          try {
            yield wallet.connect();
          } catch (error) {
            throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
          }
        }

        let bytes;

        try {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          bytes = wallet.publicKey.toBytes();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(bytes);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }

        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signTransaction(transaction);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signAllTransactions(transactions);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.SolflareWalletAdapter = SolflareWalletAdapter;

/***/ }),

/***/ 632:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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

__exportStar(__webpack_require__(3201), exports);

/***/ }),

/***/ 141:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SolletWalletAdapter = void 0;

const sol_wallet_adapter_1 = __importDefault(__webpack_require__(8918));

const wallet_adapter_base_1 = __webpack_require__(5938);

class SolletWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._provider = config.provider || 'https://www.sollet.io';
    this._network = config.network || wallet_adapter_base_1.WalletAdapterNetwork.Mainnet;
    this._connecting = false;
    this._wallet = null;
  }

  get publicKey() {
    var _a;

    return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
  }

  get ready() {
    // @FIXME
    return false;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.connected);
  }

  get autoApprove() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.autoApprove);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        let wallet;
        let interval;

        try {
          wallet = new sol_wallet_adapter_1.default(this._provider, this._network); // HACK: sol-wallet-adapter doesn't reject or emit an event if the popup is closed or blocked

          yield new Promise((resolve, reject) => {
            wallet.connect().then(resolve, reject);

            if (typeof this._provider === 'string') {
              let count = 0;
              interval = setInterval(() => {
                const popup = wallet._popup;

                if (popup) {
                  if (popup.closed) reject(new wallet_adapter_base_1.WalletWindowClosedError());
                } else {
                  if (count > 50) reject(new wallet_adapter_base_1.WalletWindowBlockedError());
                }

                count++;
              }, 100);
            }
          });
        } catch (error) {
          throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
        } finally {
          if (interval) clearInterval(interval);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }

        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signTransaction(transaction);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signAllTransactions(transactions);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.SolletWalletAdapter = SolletWalletAdapter;

/***/ }),

/***/ 2232:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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

__exportStar(__webpack_require__(141), exports);

/***/ }),

/***/ 5344:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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
exports.SolongWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(5938);

const web3_js_1 = __webpack_require__(5681);

class SolongWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.currentAccount);
  }

  get autoApprove() {
    return false;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        let account;

        try {
          account = yield wallet.selectAccount();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(account);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._wallet) {
        this._wallet = null;
        this._publicKey = null;
        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield wallet.signTransaction(transaction);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return yield Promise.all(transactions.map(transaction => wallet.signTransaction(transaction)));
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.SolongWalletAdapter = SolongWalletAdapter;

/***/ }),

/***/ 1884:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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

__exportStar(__webpack_require__(5344), exports);

/***/ }),

/***/ 2969:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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

__exportStar(__webpack_require__(6419), exports);

/***/ }),

/***/ 6419:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTorusWallet = exports.getSolongWallet = exports.getSolletWallet = exports.getSolflareWebWallet = exports.getSolflareWallet = exports.getSlopeWallet = exports.getPhantomWallet = exports.getMathWallet = exports.getLedgerWallet = exports.getCoin98Wallet = exports.getBloctoWallet = exports.getBitpieWallet = exports.ICONS_URL = exports.WalletName = void 0;

const wallet_adapter_bitpie_1 = __webpack_require__(4323);

const wallet_adapter_coin98_1 = __webpack_require__(2084);

const wallet_adapter_ledger_1 = __webpack_require__(8987);

const wallet_adapter_mathwallet_1 = __webpack_require__(9632);

const wallet_adapter_phantom_1 = __webpack_require__(7516);

const wallet_adapter_slope_1 = __webpack_require__(5148);

const wallet_adapter_solflare_1 = __webpack_require__(632);

const wallet_adapter_sollet_1 = __webpack_require__(2232);

const wallet_adapter_solong_1 = __webpack_require__(1884);

const wallet_adapter_torus_1 = __webpack_require__(2983);

const wallet_adapter_blocto_1 = __webpack_require__(1936);

var WalletName;

(function (WalletName) {
  WalletName["Bitpie"] = "Bitpie";
  WalletName["Blocto"] = "Blocto";
  WalletName["Coin98"] = "Coin98";
  WalletName["Ledger"] = "Ledger";
  WalletName["MathWallet"] = "MathWallet";
  WalletName["Phantom"] = "Phantom";
  WalletName["Slope"] = "Slope";
  WalletName["Solflare"] = "Solflare";
  WalletName["SolflareWeb"] = "Solflare (Web)";
  WalletName["Sollet"] = "Sollet";
  WalletName["Solong"] = "Solong";
  WalletName["Torus"] = "Torus";
})(WalletName = exports.WalletName || (exports.WalletName = {}));

exports.ICONS_URL = 'https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons';

const getBitpieWallet = config => ({
  name: WalletName.Bitpie,
  url: 'https://bitpiecn.com',
  icon: `${exports.ICONS_URL}/bitpie.svg`,
  adapter: () => new wallet_adapter_bitpie_1.BitpieWalletAdapter(config)
});

exports.getBitpieWallet = getBitpieWallet;

const getBloctoWallet = config => ({
  name: WalletName.Blocto,
  url: 'https://wallet.blocto.app',
  icon: `${exports.ICONS_URL}/blocto.svg`,
  adapter: () => new wallet_adapter_blocto_1.BloctoWalletAdapter(config)
});

exports.getBloctoWallet = getBloctoWallet;

const getCoin98Wallet = config => ({
  name: WalletName.Coin98,
  url: 'https://coin98.com',
  icon: `${exports.ICONS_URL}/coin98.svg`,
  adapter: () => new wallet_adapter_coin98_1.Coin98WalletAdapter(config)
});

exports.getCoin98Wallet = getCoin98Wallet;

const getLedgerWallet = config => ({
  name: WalletName.Ledger,
  url: 'https://www.ledger.com',
  icon: `${exports.ICONS_URL}/ledger.svg`,
  adapter: () => new wallet_adapter_ledger_1.LedgerWalletAdapter(config)
});

exports.getLedgerWallet = getLedgerWallet;

const getMathWallet = config => ({
  name: WalletName.MathWallet,
  url: 'https://mathwallet.org',
  icon: `${exports.ICONS_URL}/mathwallet.svg`,
  adapter: () => new wallet_adapter_mathwallet_1.MathWalletWalletAdapter(config)
});

exports.getMathWallet = getMathWallet;

const getPhantomWallet = config => ({
  name: WalletName.Phantom,
  url: 'https://www.phantom.app',
  icon: `${exports.ICONS_URL}/phantom.svg`,
  adapter: () => new wallet_adapter_phantom_1.PhantomWalletAdapter(config)
});

exports.getPhantomWallet = getPhantomWallet;

const getSlopeWallet = config => ({
  name: WalletName.Slope,
  url: 'https://www.slope.finance/#/wallet',
  icon: `${exports.ICONS_URL}/slope.svg`,
  adapter: () => new wallet_adapter_slope_1.SlopeWalletAdapter(config)
});

exports.getSlopeWallet = getSlopeWallet;

const getSolflareWallet = config => ({
  name: WalletName.Solflare,
  url: 'https://solflare.com',
  icon: `${exports.ICONS_URL}/solflare.svg`,
  adapter: () => new wallet_adapter_solflare_1.SolflareWalletAdapter(config)
});

exports.getSolflareWallet = getSolflareWallet;

const getSolflareWebWallet = config => ({
  name: WalletName.SolflareWeb,
  url: 'https://solflare.com',
  icon: `${exports.ICONS_URL}/solflare.svg`,
  adapter: () => new wallet_adapter_sollet_1.SolletWalletAdapter(Object.assign(Object.assign({}, config), {
    provider: (config === null || config === void 0 ? void 0 : config.provider) || 'https://solflare.com/access-wallet'
  }))
});

exports.getSolflareWebWallet = getSolflareWebWallet;

const getSolletWallet = config => ({
  name: WalletName.Sollet,
  url: 'https://www.sollet.io',
  icon: `${exports.ICONS_URL}/sollet.svg`,
  adapter: () => new wallet_adapter_sollet_1.SolletWalletAdapter(config)
});

exports.getSolletWallet = getSolletWallet;

const getSolongWallet = config => ({
  name: WalletName.Solong,
  url: 'https://solongwallet.com',
  icon: `${exports.ICONS_URL}/solong.png`,
  adapter: () => new wallet_adapter_solong_1.SolongWalletAdapter(config)
});

exports.getSolongWallet = getSolongWallet;

const getTorusWallet = config => ({
  name: WalletName.Torus,
  url: 'https://tor.us',
  icon: `${exports.ICONS_URL}/torus.svg`,
  adapter: () => new wallet_adapter_torus_1.TorusWalletAdapter(config)
});

exports.getTorusWallet = getTorusWallet;

/***/ })

};
;