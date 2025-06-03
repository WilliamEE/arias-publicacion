exports.ids = [18,21,46];
exports.modules = {

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(318);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("d4fee01e", content, true, context)
};

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_index_css_vue_type_style_index_0_prod_lang_css_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(316);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_index_css_vue_type_style_index_0_prod_lang_css_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_index_css_vue_type_style_index_0_prod_lang_css_external__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_index_css_vue_type_style_index_0_prod_lang_css_external__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_index_css_vue_type_style_index_0_prod_lang_css_external__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".svg-map{height:auto;width:100%;stroke:#666;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.svg-map__location{fill:#a1d99b;cursor:pointer}.svg-map__location:focus,.svg-map__location:hover{fill:#b8e2b3;outline:0}.svg-map__location[aria-checked=true]{fill:#f4bc44}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(309);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/AboutGenericLeft.vue?vue&type=template&id=90e4c5e2




var AboutGenericLeftvue_type_template_id_90e4c5e2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], [_c(VRow["a" /* default */], {
    staticClass: "row--35",
    attrs: {
      "align": "center"
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "hidden-sm-and-down",
    attrs: {
      "lg": "6",
      "md": "6",
      "cols": "12",
      "hidden": _vm.dataInfo.firstParagraphEs === ''
    }
  }, [_c('div', {
    staticClass: "thumbnail"
  }, [_c('img', {
    staticClass: "w-100",
    attrs: {
      "src": _vm.dataInfo.src,
      "alt": "About Images"
    }
  })])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "hidden-sm-and-down",
    attrs: {
      "lg": "6",
      "md": "6",
      "cols": "12",
      "hidden": _vm.dataInfo.firstParagraphEs === ''
    }
  }, [_c('div', {
    staticClass: "about-inner about-section"
  }, [_c('div', {
    staticClass: "section-title"
  }, [_c('h2', {
    staticClass: "heading-title",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.dataInfo.titleEs : _vm.dataInfo.titleEn)
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "description",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.dataInfo.firstParagraphEs : _vm.dataInfo.firstParagraphEn)
    }
  })])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "hidden-md-and-up mobile-paragraph",
    attrs: {
      "lg": "6",
      "md": "6",
      "cols": "12",
      "hidden": _vm.dataInfo.firstParagraphEs === ''
    }
  }, [_c('div', {
    staticClass: "about-inner about-section"
  }, [_c('div', {
    staticClass: "section-title"
  }, [_c('h2', {
    staticClass: "heading-title",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.dataInfo.titleEs : _vm.dataInfo.titleEn)
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "description",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.dataInfo.firstParagraphEs : _vm.dataInfo.firstParagraphEn)
    }
  })])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "hidden-md-and-up",
    attrs: {
      "lg": "6",
      "md": "6",
      "cols": "12",
      "hidden": _vm.dataInfo.firstParagraphEs === ''
    }
  }, [_c('div', {
    staticClass: "thumbnail"
  }, [_c('img', {
    staticClass: "w-100",
    attrs: {
      "src": _vm.dataInfo.src,
      "alt": "About Images"
    }
  })])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "lg": "12",
      "md": "12",
      "cols": "12",
      "hidden": _vm.dataInfo.secondParagraphEs === ''
    }
  }, [_c('div', {
    staticClass: "about-inner about-section paragraph",
    class: _vm.dataInfo.firstParagraph === '' ? 'mt--0' : ''
  }, [_c('div', {
    staticClass: "section-title"
  }, [_c('p', {
    staticClass: "description",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.dataInfo.secondParagraphEs : _vm.dataInfo.secondParagraphEn)
    }
  })])])])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/about/AboutGenericLeft.vue?vue&type=template&id=90e4c5e2

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/AboutGenericLeft.vue?vue&type=script&lang=js

/* harmony default export */ var AboutGenericLeftvue_type_script_lang_js = ({
  props: ['dataInfo'],
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  }
});
// CONCATENATED MODULE: ./components/about/AboutGenericLeft.vue?vue&type=script&lang=js
 /* harmony default export */ var about_AboutGenericLeftvue_type_script_lang_js = (AboutGenericLeftvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/about/AboutGenericLeft.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_AboutGenericLeftvue_type_script_lang_js,
  AboutGenericLeftvue_type_template_id_90e4c5e2_render,
  staticRenderFns,
  false,
  null,
  null,
  "0ab9cda6"
  
)

/* harmony default export */ var AboutGenericLeft = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(309);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sustainability.vue?vue&type=template&id=26c40543


var sustainabilityvue_type_template_id_26c40543_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"about-area rn-section-gap-foundation bg_color--1\">", "</div>", [_c('AboutGenericLeft', {
    attrs: {
      "data-info": _vm.aboutData
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"rn-portfolio-area rn-section-gap-foundation bg_color--5 mb--40 pt-4\">", "</div>", [_c(VContainer["a" /* default */], [_c('PortfolioBrands')], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/sustainability.vue?vue&type=template&id=26c40543

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./components/portfolio/PortfolioBrands.vue + 4 modules
var PortfolioBrands = __webpack_require__(415);

// EXTERNAL MODULE: ./components/about/AboutGenericLeft.vue + 4 modules
var AboutGenericLeft = __webpack_require__(353);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sustainability.vue?vue&type=script&lang=js



/* harmony default export */ var sustainabilityvue_type_script_lang_js = ({
  head() {
    return {
      htmlAttrs: {
        lang: this.$route.params.language
      },
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.$route.params.language === 'es' ? this.layout.titleEs + ' ' + this.layout.descriptionEs : this.layout.titleEn + ' ' + this.layout.descriptionEn
      }],
      title: this.$i18n.t('titles.sustainability')
    };
  },
  components: {
    PortfolioBrands: PortfolioBrands["default"],
    AboutGenericLeft: AboutGenericLeft["default"]
  },
  data() {
    return {
      items: [{
        src: "https://www.youtube.com/watch?v=ZOoVOfieAF8"
      }],
      index: null,
      layout: {
        type: 2,
        titleEs: '',
        titleEn: '',
        descriptionEs: '',
        descriptionEn: '',
        image: ''
      },
      aboutData: {
        titleEs: '',
        titleEn: '',
        src: '',
        firstParagraphEs: '',
        firstParagraphEn: '',
        secondParagraphEs: '',
        secondParagraphEn: ''
      }
    };
  },
  async mounted() {},
  created() {
    this.setChargedPage(false);
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language', 'pageCharge'])
  },
  watch: {
    language(val) {
      if (this.pageCharge) {
        this.$router.push(this.$i18n.t('urls.sustainability'));
      }
    }
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setLayout', 'setChargedPage']),
    initialize() {
      this.list();
    },
    list() {
      const me = this;
      this.$axios.get('api/PageInformations/GetPageInformationsByCodeFE/6').then(response => {
        me.dataPage = response.data[0];
        // General information
        me.layout.titleEs = me.dataPage.pageInformationTitle;
        me.layout.titleEn = me.dataPage.pageInformationTitleEn;
        me.layout.descriptionEs = me.dataPage.information;
        me.layout.descriptionEn = me.dataPage.informationEn;
        me.layout.image = me.dataPage.imageBanner;
        me.setLayout(me.layout);

        // About Us first paragraph
        me.aboutData.titleEs = me.dataPage.pageParagraphs[0].pageParagraphTitle;
        me.aboutData.titleEn = me.dataPage.pageParagraphs[0].pageParagraphTitleEn;
        me.aboutData.firstParagraphEs = me.dataPage.pageParagraphs[0].firstParagraph;
        me.aboutData.firstParagraphEn = me.dataPage.pageParagraphs[0].firstParagraphEn;
        me.aboutData.secondParagraphEs = me.dataPage.pageParagraphs[0].secondParagraph;
        me.aboutData.secondParagraphEn = me.dataPage.pageParagraphs[0].secondParagraphEn;
        me.aboutData.src = me.dataPage.pageParagraphs[0].pageParagraphImage;
        me.setChargedPage(true);
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/sustainability.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_sustainabilityvue_type_script_lang_js = (sustainabilityvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/sustainability.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(317)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sustainabilityvue_type_script_lang_js,
  sustainabilityvue_type_template_id_26c40543_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c4cda4e2"
  
)

/* harmony default export */ var sustainability = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AboutGenericLeft: __webpack_require__(353).default,PortfolioBrands: __webpack_require__(415).default})


/***/ })

};;
//# sourceMappingURL=sustainability.js.map