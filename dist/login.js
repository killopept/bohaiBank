// { "framework": "Vue"} 

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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(22)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\Bank\\src\\login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1fd7f6db"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = {
  "close": {
    "marginLeft": "60",
    "marginTop": "100"
  },
  "close-icon": {
    "width": "40",
    "height": "40"
  },
  "header": {
    "paddingLeft": "295",
    "paddingTop": "20"
  },
  "login-head": {
    "width": "160",
    "height": "160",
    "marginBottom": "60"
  },
  "ban": {
    "marginTop": 0,
    "marginRight": "60",
    "marginBottom": 0,
    "marginLeft": "60",
    "borderBottomWidth": "1"
  },
  "ban2": {
    "marginTop": 0,
    "marginRight": "60",
    "marginBottom": 0,
    "marginLeft": "60",
    "height": "100",
    "borderBottomWidth": "1",
    "paddingTop": "8",
    "paddingRight": 0,
    "paddingBottom": "8",
    "paddingLeft": 0,
    "flexDirection": "row"
  },
  "ling": {
    "width": "500"
  },
  "ling1": {
    "height": "100"
  },
  "test": {
    "marginTop": "60",
    "marginRight": "60",
    "marginBottom": "60",
    "marginLeft": "60",
    "paddingTop": "35",
    "paddingRight": 0,
    "paddingBottom": "35",
    "paddingLeft": 0,
    "backgroundColor": "#D8D8D8",
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "30"
  },
  "active": {
    "backgroundColor": "#668fff",
    "marginTop": "60",
    "marginRight": "60",
    "marginBottom": "60",
    "marginLeft": "60",
    "paddingTop": "35",
    "paddingRight": 0,
    "paddingBottom": "35",
    "paddingLeft": 0,
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "30"
  },
  "delIcon": {
    "width": "40",
    "height": "40",
    "marginTop": "28",
    "marginLeft": "50"
  }
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
exports.default = {
  data: function data() {
    return {
      isShow: true,
      isOk: false,
      wordContent: '',
      textContent: '',
      deletePassWord: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAAxZJREFUWAnVmT1v2zAQhiPBS+EsXlzAgKf4Y8nWH5K2qNGxe9BO7RwnndOt6N6xcNEgPySbB391MuCgXrzY6GJYfV+BJ0iqKYkSIycEiKNo3t2j45dIO0c503Q6Pdntdmee572AiUYo0+JCsuM4d67r3rbb7d/8wTQ5Jgqz2awOqPfIr6B3aqKLtkOA3iB/bbVay6y6mQCXy+XxarX6iGh9guHjrMY17daI6nWtVvtSr9fXmjZBdSrgZDJ5DbBvyM8DLQsFQP5BPu90Or+SzLm6HwHkjMfjPuRP23D0SZu0rXxoA7X3h/l8/myz2XyHnZ7uBSzXD6rV6rtms/k3bve/COKtnJLhyNSjT/pOBcSYu6BCvGEJzz3lO+IqQqwmBMdcpD6i8YAPmDQe8pvwxAlA1FIyA5zV2Wr6PpzdWIJasgQFY1CtcweF48swQGSRF/MjyB1iu91yKyq6CIvdonJdqVROuOP4EQTcBxM4dMMVc1YK0/Zk4ZZK+xXl5KWSqYLOut3uJRtikWWX9JOUTNuLLbXfX7j8KkGl6cbv2yFoUiTDcOLYQJ6SzQXpmYGSHzFE7lJ0dJBxOOqkRVtsiiSbCyV+zxklOkqCtAFHILJxDPJj0zgpyCMZj5Qck0xSx3KeyFFPpYYzGo1otSM1pjIerbB+QTiamnCZyRVBAYl3t9RbgKOpBgE9MfoIpUfA+yJgui7WzW5DX/cE5AksV4rDsVuZxZgFyEVuwH1wHI/xMVkQcuHC0Z28cVapgxN9W5BkwzHVvRXDWWQanNiwAUk2V534h2LYRKYtJXFIE9toOySb/zUD0hvse5k+GJRT3xfLaU5N24s9MrH8ND5Y+eWKsXUt9IeWZJH7m6dzaOIpCuTnyAfb+uibDHKiY09yoQ6SOo9mPmsEivYKV+EzMc0GXSw+MOt4afQDz2XfLgyw67yN92Akgj4xwsyLHJQHAl2C9C+P4nA+j845I6nuSvos69oVqVdA7NbP++ASAcWxuq852AVmpsg86itgiSSluiLhLQQP+pm2Ruqp9HCX6OIhLMv6G+IfQWH0alyJygUAAAAASUVORK5CYII=',
      closeIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAAS9JREFUWAnt1d0NgjAUBWCrY7AGA7CZuJm+MwdrYA8pSdMU7m+MD5eEAAFOPw9Cb7dYooFoIBqIBsgGxnGcsZIXMi+Q5D2oTIRt2/bM103DMKR1Xd/UPVfnpXn3q7D2HKCWJitcG316TDaIxtBcTphKiqrJFpdSei3LMpfM0w0JxJ1WpBaHsVlAC9KCEwE1SCtODJQgPXAqIAfphcNYeDvVSw+CsPLd3HO5b+sZwgREaIusB7LikMV+i+uB6/3OJ2g/7YFDkGgmqWG/2jc3ePGIVTNO+8NNwBaHx5rXTx5kKgOZkWpgD4e5tfOfNCFVwDPc8Xg8kWIghfNGioBcnCeSDZTivJAsoBbngSSBVpwVKZpJrNMXPkPIONBuW7SI1SvQO8/LFTnRQDQQDfxjA1+9sSj3m1pVzQAAAABJRU5ErkJggg==',
      loginHead: 'data:image/png;base64,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'
    };
  },

  methods: {
    setPassWord: function setPassWord() {
      this.isShow = false;
      this.isOk = true;
    },
    delWord: function delWord() {
      this.wordContent = '';
      this.isShow = true;
      this.isOk = false;
    },
    jumpToLogin: function jumpToLogin() {
      var _this = this;

      stream.fetch({
        method: 'GET',
        url: 'http://192.168.43.64:8080/ifp-demo-new/lginAction.do?loginName=' + this.textContent + '&loginPassword=' + this.wordContent,
        type: 'json'
      }, function (response) {
        if (response.data.body.result === '1') {
          if (response.data.body.role === '老师') {
            var urlFonut = _this.$getConfig().bundleUrl.split('/').slice(0, -1).join('/');
            navigator.push({
              url: urlFonut + '/roleOne.js',
              animated: "true"
            }, function (event) {
              modal.toast({ message: 'success' });
            });
          } else if (response.data.body.role === '学生') {
            var urltwo = _this.$getConfig().bundleUrl.split('/').slice(0, -1).join('/');
            navigator.push({
              url: urltwo + '/roleTwo.js',
              animated: "true"
            }, function (event) {
              modal.toast({ message: 'success' });
            });
          }
        } else {
          modal.toast({ message: 'error' });
        }
      });
    }
  }
};

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["close"]
  }, [_c('image', {
    staticClass: ["close-icon"],
    attrs: {
      "src": _vm.closeIcon
    }
  })]), _c('div', {
    staticClass: ["header"]
  }, [_c('image', {
    staticClass: ["login-head"],
    attrs: {
      "src": _vm.loginHead
    }
  })]), _c('div', {
    staticClass: ["ban"]
  }, [_c('input', {
    staticClass: ["ling1"],
    attrs: {
      "type": "text",
      "placeholder": "账号",
      "value": (_vm.textContent)
    },
    on: {
      "input": function($event) {
        _vm.textContent = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["ban2"]
  }, [_c('input', {
    staticClass: ["ling"],
    attrs: {
      "type": "password",
      "placeholder": "密码",
      "value": (_vm.wordContent)
    },
    on: {
      "input": [function($event) {
        _vm.wordContent = $event.target.attr.value
      }, _vm.setPassWord]
    }
  }), _c('image', {
    staticClass: ["delIcon"],
    attrs: {
      "src": _vm.deletePassWord
    },
    on: {
      "click": _vm.delWord
    }
  })]), (_vm.isShow) ? _c('text', {
    staticClass: ["test"]
  }, [_vm._v("登录")]) : _c('text', {
    staticClass: ["active"],
    on: {
      "click": _vm.jumpToLogin
    }
  }, [_vm._v("登录")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });