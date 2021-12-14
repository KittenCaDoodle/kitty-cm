"use strict";
exports.id = 628;
exports.ids = [628];
exports.modules = {

/***/ 7628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6624);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2969);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5154);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1237);
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/** @jsxImportSource theme-ui */




/**
 * Component that contains the whole minting process
 * It is necessary to be separate, since it depends on the global window variable
 * Then the rest of the page can be rendered on server
 */



const WalletProviderSection = ({
  children
}) => {
  const network = process.env.NEXT_PUBLIC_CONNECTION_NETWORK;
  const endpoint = process.env.NEXT_PUBLIC_CONNECTION_NETWORK == "devnet" ? process.env.NEXT_PUBLIC_SOLANA_RPC_HOST_DEVNET : process.env.NEXT_PUBLIC_SOLANA_RPC_HOST_MAINNET_BETA; // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application

  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [(0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getPhantomWallet)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getSolflareWallet)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getTorusWallet)({
    options: {
      clientId: "Get a client ID @ https://developer.tor.us"
    }
  }), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getLedgerWallet)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getSolletWallet)({
    network
  })], [network]);
  return theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.ConnectionProvider, {
    endpoint: endpoint,
    children: theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.WalletProvider, {
      wallets: wallets,
      autoConnect: true,
      children: theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletModalProvider, {
        logo: "/images/logo.png",
        children: children
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletProviderSection);

/***/ })

};
;