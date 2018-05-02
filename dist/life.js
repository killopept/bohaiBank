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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(18)
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
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\Bank\\src\\life.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7745befa"
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

/***/ 16:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#f0f0f0"
  },
  "title": {
    "height": "100",
    "backgroundColor": "#ffffff",
    "marginBottom": "2",
    "paddingTop": "14",
    "paddingRight": "30",
    "paddingBottom": "14",
    "paddingLeft": "30",
    "flexDirection": "row"
  },
  "title_bar": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "backgroundColor": "#ffffff",
    "justifyContent": "flex-start",
    "paddingTop": "34",
    "paddingRight": "25",
    "paddingBottom": "30",
    "paddingLeft": "25",
    "marginBottom": "20"
  },
  "sumBar": {
    "width": "175",
    "height": "130",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "barName": {
    "fontSize": "26",
    "marginTop": "14",
    "textAlign": "center"
  },
  "banner": {
    "width": "750",
    "height": "238",
    "backgroundColor": "#ffffff"
  },
  "image": {
    "width": "750",
    "height": "209"
  },
  "slider": {
    "marginTop": "14",
    "width": "750",
    "height": "209"
  },
  "frame": {
    "width": "750",
    "height": "209",
    "position": "relative"
  },
  "first_list": {
    "marginTop": "19",
    "paddingLeft": "30",
    "paddingRight": "30",
    "backgroundColor": "#ffffff"
  },
  "second_list": {
    "marginTop": "19",
    "paddingLeft": "30",
    "paddingRight": "30",
    "backgroundColor": "#ffffff",
    "marginBottom": "19"
  },
  "first_row": {
    "height": "80",
    "paddingTop": "24",
    "paddingRight": 0,
    "paddingBottom": "20",
    "paddingLeft": 0,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff",
    "alignItems": "center"
  },
  "colum_list": {
    "paddingTop": "10",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "one_line": {
    "lines": 1,
    "fontSize": "24",
    "color": "#666666",
    "width": "200",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});//
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
animated:'true'},function(event){modal.toast({message:'callback: '+event});});}}};

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["container"],
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["title_bar"]
  }, [_c('div', {
    staticClass: ["sumBar"],
    on: {
      "click": _vm.jumpToLogin
    }
  }, [_c('image', {
    staticStyle: {
      width: "39px",
      height: "50px"
    },
    attrs: {
      "src": _vm.pic1
    }
  }), _c('text', {
    staticClass: ["barName"]
  }, [_vm._v("生活缴费")])]), _c('div', {
    staticClass: ["sumBar"]
  }, [_c('image', {
    staticStyle: {
      width: "50px",
      height: "50px"
    },
    attrs: {
      "src": _vm.pic2
    }
  }), _c('text', {
    staticClass: ["barName"]
  }, [_vm._v("话费流量")])]), _c('div', {
    staticClass: ["sumBar"]
  }, [_c('image', {
    staticStyle: {
      width: "48px",
      height: "50px"
    },
    attrs: {
      "src": _vm.pic3
    }
  }), _c('text', {
    staticClass: ["barName"]
  }, [_vm._v("商场")])]), _c('div', {
    staticClass: ["sumBar"]
  }, [_c('image', {
    staticStyle: {
      width: "41px",
      height: "49px"
    },
    attrs: {
      "src": _vm.pic4
    }
  }), _c('text', {
    staticClass: ["barName"]
  }, [_vm._v("权益")])]), _c('div', {
    staticClass: ["sumBar"]
  }, [_c('image', {
    staticStyle: {
      width: "50px",
      height: "49px"
    },
    attrs: {
      "src": _vm.pic5
    }
  }), _c('text', {
    staticClass: ["barName"]
  }, [_vm._v("看电影")])]), _c('div', {
    staticClass: ["sumBar"]
  }, [_c('image', {
    staticStyle: {
      width: "51px",
      height: "49px"
    },
    attrs: {
      "src": _vm.pic6
    }
  }), _c('text', {
    staticClass: ["barName"]
  }, [_vm._v("旅游")])]), _c('div', {
    staticClass: ["sumBar"]
  }, [_c('image', {
    staticStyle: {
      width: "50px",
      height: "49px"
    },
    attrs: {
      "src": _vm.pic7
    }
  }), _c('text', {
    staticClass: ["barName"]
  }, [_vm._v("限时特惠")])]), _c('div', {
    staticClass: ["sumBar"]
  }, [_c('image', {
    staticStyle: {
      width: "50px",
      height: "50px"
    },
    attrs: {
      "src": _vm.pic8
    }
  }), _c('text', {
    staticClass: ["barName"]
  }, [_vm._v("全部")])])]), _c('div', {
    staticClass: ["banner"]
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, _vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }))]), _c('div', {
    staticClass: ["first_list"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["colum_list"]
  }, [_c('div', {
    staticStyle: {
      width: "200px"
    }
  }, [_c('image', {
    staticStyle: {
      width: "51px",
      height: "133px",
      marginLeft: "58px"
    },
    attrs: {
      "src": _vm.pro_img1
    }
  }), _c('text', {
    staticClass: ["one_line"]
  }, [_vm._v("蜂花 本草精华洗...")]), _vm._m(1)]), _c('div', {
    staticStyle: {
      width: "200px"
    }
  }, [_c('image', {
    staticStyle: {
      width: "155px",
      height: "134px"
    },
    attrs: {
      "src": _vm.pro_img2
    }
  }), _c('text', {
    staticClass: ["one_line"]
  }, [_vm._v("道吉草水晶香蕉...")]), _vm._m(2)]), _c('div', {
    staticStyle: {
      width: "200px"
    }
  }, [_c('image', {
    staticStyle: {
      width: "51px",
      height: "133px",
      marginLeft: "65px"
    },
    attrs: {
      "src": _vm.pro_img3
    }
  }), _c('text', {
    staticClass: ["one_line"]
  }, [_vm._v("飞利浦美肤滋养...")]), _vm._m(3)])])]), _c('div', {
    staticClass: ["second_list"]
  }, [_vm._m(4), _c('div', {
    staticStyle: {
      height: "258px"
    }
  }, [_c('image', {
    staticStyle: {
      width: "691px",
      height: "234px"
    },
    attrs: {
      "src": _vm.move_img
    }
  })]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: "40px"
    }
  }, [_c('div', {
    staticStyle: {
      width: "250px"
    }
  }, [_c('text', {
    staticStyle: {
      textAlign: "center",
      fontSize: "28px"
    }
  }, [_vm._v("海量影院覆盖")]), _c('text', {
    staticStyle: {
      fontSize: "26px",
      color: "#676767",
      textAlign: "center"
    }
  }, [_vm._v("在线订座，优惠购券")]), _c('image', {
    staticStyle: {
      width: "125px",
      height: "126px",
      marginLeft: "56px",
      marginTop: "10px"
    },
    attrs: {
      "src": _vm.move_img2
    }
  })]), _c('div', {
    staticStyle: {
      width: "230px"
    }
  }, [_c('text', {
    staticStyle: {
      textAlign: "center",
      fontSize: "28px"
    }
  }, [_vm._v("理财看电影")]), _c('text', {
    staticStyle: {
      fontSize: "26px",
      color: "#676767",
      textAlign: "center"
    }
  }, [_vm._v("送2张电影票")]), _c('image', {
    staticStyle: {
      width: "125px",
      height: "126px",
      marginLeft: "50px",
      marginTop: "10px"
    },
    attrs: {
      "src": _vm.move_img3
    }
  })]), _c('div', {
    staticStyle: {
      width: "230px"
    }
  }, [_c('text', {
    staticStyle: {
      textAlign: "center",
      fontSize: "28px"
    }
  }, [_vm._v("新金融季")]), _c('text', {
    staticStyle: {
      fontSize: "26px",
      color: "#676767",
      textAlign: "center"
    }
  }, [_vm._v("投资开户看电影")]), _c('image', {
    staticStyle: {
      width: "125px",
      height: "126px",
      marginLeft: "56px",
      marginTop: "10px"
    },
    attrs: {
      "src": _vm.move_img4
    }
  })])])]), _c('div', {
    staticClass: ["second_list"]
  }, [_vm._m(5), _c('div', {
    staticStyle: {
      height: "258px"
    }
  }, [_c('image', {
    staticStyle: {
      width: "691px",
      height: "234px"
    },
    attrs: {
      "src": _vm.play_img
    }
  })]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: "40px"
    }
  }, [_c('div', {
    staticStyle: {
      width: "250px"
    }
  }, [_c('text', {
    staticStyle: {
      textAlign: "center",
      fontSize: "28px"
    }
  }, [_vm._v("超低折扣")]), _c('text', {
    staticStyle: {
      fontSize: "26px",
      color: "#676767",
      textAlign: "center"
    }
  }, [_vm._v("让爱变得其乐无穷")]), _c('image', {
    staticStyle: {
      width: "125px",
      height: "126px",
      marginLeft: "56px",
      marginTop: "10px"
    },
    attrs: {
      "src": _vm.play_img2
    }
  })]), _c('div', {
    staticStyle: {
      width: "230px"
    }
  }, [_c('text', {
    staticStyle: {
      textAlign: "center",
      fontSize: "28px"
    }
  }, [_vm._v("不忘初心")]), _c('text', {
    staticStyle: {
      fontSize: "26px",
      color: "#676767",
      textAlign: "center"
    }
  }, [_vm._v("新马泰豪华游")]), _c('image', {
    staticStyle: {
      width: "125px",
      height: "126px",
      marginLeft: "50px",
      marginTop: "10px"
    },
    attrs: {
      "src": _vm.play_img3
    }
  })]), _c('div', {
    staticStyle: {
      width: "230px"
    }
  }, [_c('text', {
    staticStyle: {
      textAlign: "center",
      fontSize: "28px"
    }
  }, [_vm._v("时光旅行")]), _c('text', {
    staticStyle: {
      fontSize: "26px",
      color: "#676767",
      textAlign: "center"
    }
  }, [_vm._v("遇见最美海岸")]), _c('image', {
    staticStyle: {
      width: "125px",
      height: "126px",
      marginLeft: "56px",
      marginTop: "10px"
    },
    attrs: {
      "src": _vm.play_img4
    }
  })])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["first_row"]
  }, [_c('text', {
    staticStyle: {
      fontSize: "32px"
    }
  }, [_vm._v("产品推荐")]), _c('text', {
    staticStyle: {
      fontSize: "26px",
      color: "#676767"
    }
  }, [_vm._v("更多")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      textAlign: "center",
      marginLeft: "30px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "22px",
      paddingTop: "8px",
      color: "#bf0000"
    }
  }, [_vm._v("￥")]), _c('text', {
    staticStyle: {
      fontSize: "34px",
      color: "#bf0000"
    }
  }, [_vm._v("29.9")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      textAlign: "center",
      marginLeft: "30px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "22px",
      paddingTop: "8px",
      color: "#bf0000"
    }
  }, [_vm._v("￥")]), _c('text', {
    staticStyle: {
      fontSize: "34px",
      color: "#bf0000"
    }
  }, [_vm._v("10.9")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      textAlign: "center",
      marginLeft: "30px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "22px",
      paddingTop: "8px",
      color: "#bf0000"
    }
  }, [_vm._v("￥")]), _c('text', {
    staticStyle: {
      fontSize: "34px",
      color: "#bf0000"
    }
  }, [_vm._v("399")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["first_row"]
  }, [_c('text', {
    staticStyle: {
      fontSize: "32px"
    }
  }, [_vm._v("电影票活动")]), _c('text', {
    staticStyle: {
      fontSize: "26px",
      color: "#676767"
    }
  }, [_vm._v("更多")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["first_row"]
  }, [_c('text', {
    staticStyle: {
      fontSize: "32px"
    }
  }, [_vm._v("旅游产品")]), _c('text', {
    staticStyle: {
      fontSize: "26px",
      color: "#676767"
    }
  }, [_vm._v("更多")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });