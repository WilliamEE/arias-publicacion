exports.ids = [46];
exports.modules = {

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/portfolio/PortfolioBrands.vue?vue&type=template&id=fc117b26




var PortfolioBrandsvue_type_template_id_fc117b26_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-sustainability"
  }, [_c(VRow["a" /* default */], {
    staticClass: "plr-row-mobile"
  }, _vm._l(_vm.portfolioContent, function (item, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      staticClass: "plr_mobile",
      attrs: {
        "lg": "2",
        "md": "2",
        "sm": "3",
        "xs": "6",
        "cols": "6"
      }
    }, [_c('div', {
      staticClass: "portfolio-sustainability"
    }, [_c('div', {
      staticClass: "thumbnail-inner"
    }, [_c(VImg["a" /* default */], {
      staticClass: "thumbnail",
      attrs: {
        "src": item.sustainabilityImage
      }
    }), _vm._v(" "), _c(VImg["a" /* default */], {
      staticClass: "bg-blr-image",
      attrs: {
        "src": item.sustainabilityImage
      }
    })], 1)])]);
  }), 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/portfolio/PortfolioBrands.vue?vue&type=template&id=fc117b26

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/portfolio/PortfolioBrands.vue?vue&type=script&lang=js
/* harmony default export */ var PortfolioBrandsvue_type_script_lang_js = ({
  data() {
    return {
      portfolioContent: []
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.list();
    },
    list() {
      const me = this;
      this.$axios.get('api/Sustainabilities/GetSustainabilitiesFE').then(response => {
        me.portfolioContent = response.data;
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/portfolio/PortfolioBrands.vue?vue&type=script&lang=js
 /* harmony default export */ var portfolio_PortfolioBrandsvue_type_script_lang_js = (PortfolioBrandsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/portfolio/PortfolioBrands.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  portfolio_PortfolioBrandsvue_type_script_lang_js,
  PortfolioBrandsvue_type_template_id_fc117b26_render,
  staticRenderFns,
  false,
  null,
  null,
  "b938deec"
  
)

/* harmony default export */ var PortfolioBrands = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=portfolio-brands.js.map