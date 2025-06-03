exports.ids = [0,21,22,34,66];
exports.modules = {

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardActions; });
/* unused harmony export VCardSubtitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(292);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),

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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(291);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/testimonial/AboutTestimonial.vue?vue&type=template&id=12a69dae





var AboutTestimonialvue_type_template_id_12a69dae_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "rn-testimonial-content-about"
  }, [_c(VCard["a" /* default */], {
    staticClass: "v-card",
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["b" /* VCardText */], [_c('div', {
    staticClass: "inner"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.content.description : _vm.content.descriptionEn)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "author-info",
    attrs: {
      "hidden": !_vm.content.author
    }
  }, [_c('h6', [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.content.author : _vm.content.authorEn)
    }
  })])])])], 1)], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/testimonial/AboutTestimonial.vue?vue&type=template&id=12a69dae

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/testimonial/AboutTestimonial.vue?vue&type=script&lang=js

/* harmony default export */ var AboutTestimonialvue_type_script_lang_js = ({
  props: ['content'],
  data() {
    return {
      tab: null
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  }
});
// CONCATENATED MODULE: ./components/testimonial/AboutTestimonial.vue?vue&type=script&lang=js
 /* harmony default export */ var testimonial_AboutTestimonialvue_type_script_lang_js = (AboutTestimonialvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/testimonial/AboutTestimonial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  testimonial_AboutTestimonialvue_type_script_lang_js,
  AboutTestimonialvue_type_template_id_12a69dae_render,
  staticRenderFns,
  false,
  null,
  null,
  "05d94af5"
  
)

/* harmony default export */ var AboutTestimonial = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/foundation/FoundationComponent.vue?vue&type=template&id=2396cca5


var FoundationComponentvue_type_template_id_2396cca5_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row mt_dec--30"
  }, [_c(VCol["a" /* default */], {
    staticClass: "mt--30 mt_sm--5 mt_md--5 mt-4",
    attrs: {
      "lg": "4",
      "md": "4",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "single-service service__style__foundation text-center"
  }, [_c('div', {
    staticClass: "service"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h3', {
    staticClass: "heading-title"
  }, [_vm._v(_vm._s(_vm.$t('aboutUs.titlePurpose')))]), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.serviceContent.purposeESP : _vm.serviceContent.purposeENG)
    }
  })])])])]), _vm._ssrNode(" "), _c(VCol["a" /* default */], {
    staticClass: "mt--30 mt_sm--5 mt_md--5 mt-4",
    attrs: {
      "lg": "4",
      "md": "4",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "single-service service__style__foundation text-center"
  }, [_c('div', {
    staticClass: "service"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h3', {
    staticClass: "heading-title"
  }, [_vm._v(_vm._s(_vm.$t('aboutUs.titleMission')))]), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.serviceContent.misionESP : _vm.serviceContent.misionENG)
    }
  })])])])]), _vm._ssrNode(" "), _c(VCol["a" /* default */], {
    staticClass: "mt--30 mt_sm--5 mt_md--5 mt-4",
    attrs: {
      "lg": "4",
      "md": "4",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "single-service service__style__foundation text-center"
  }, [_c('div', {
    staticClass: "service"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h3', {
    staticClass: "heading-title"
  }, [_vm._v(_vm._s(_vm.$t('aboutUs.titleVision')))]), _vm._v(" "), _c('p', {
    staticClass: "description",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.serviceContent.visionESP : _vm.serviceContent.visionENG)
    }
  })])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/foundation/FoundationComponent.vue?vue&type=template&id=2396cca5

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: external "feather-icons"
var external_feather_icons_ = __webpack_require__(98);
var external_feather_icons_default = /*#__PURE__*/__webpack_require__.n(external_feather_icons_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/foundation/FoundationComponent.vue?vue&type=script&lang=js


/* harmony default export */ var FoundationComponentvue_type_script_lang_js = ({
  data() {
    return {
      serviceContent: {}
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
    iconSvg(icon) {
      return external_feather_icons_default.a.icons[icon].toSvg();
    },
    initialize() {
      this.list();
    },
    list() {
      const me = this;
      this.$axios.get('api/GeneralValues/GetGeneralValuesFE').then(response => {
        me.serviceContent = response.data;
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/foundation/FoundationComponent.vue?vue&type=script&lang=js
 /* harmony default export */ var foundation_FoundationComponentvue_type_script_lang_js = (FoundationComponentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/foundation/FoundationComponent.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  foundation_FoundationComponentvue_type_script_lang_js,
  FoundationComponentvue_type_template_id_2396cca5_render,
  staticRenderFns,
  false,
  null,
  null,
  "5cd0dea7"
  
)

/* harmony default export */ var FoundationComponent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 420:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/AboutGenericRight.vue?vue&type=template&id=583bbc62




var AboutGenericRightvue_type_template_id_583bbc62_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], [_c(VRow["a" /* default */], {
    staticClass: "row--35",
    attrs: {
      "align": "center"
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "mobile-paragraph",
    attrs: {
      "lg": "6",
      "md": "6",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "about-inner about-section history"
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
    attrs: {
      "lg": "6",
      "md": "6",
      "cols": "12"
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
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "about-inner about-section paragraph"
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

// CONCATENATED MODULE: ./components/about/AboutGenericRight.vue?vue&type=template&id=583bbc62

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/AboutGenericRight.vue?vue&type=script&lang=js

/* harmony default export */ var AboutGenericRightvue_type_script_lang_js = ({
  props: ['dataInfo'],
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  }
});
// CONCATENATED MODULE: ./components/about/AboutGenericRight.vue?vue&type=script&lang=js
 /* harmony default export */ var about_AboutGenericRightvue_type_script_lang_js = (AboutGenericRightvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/about/AboutGenericRight.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_AboutGenericRightvue_type_script_lang_js,
  AboutGenericRightvue_type_template_id_583bbc62_render,
  staticRenderFns,
  false,
  null,
  null,
  "ec75fde6"
  
)

/* harmony default export */ var AboutGenericRight = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(309);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us.vue?vue&type=template&id=9fc4ab8a


var about_usvue_type_template_id_9fc4ab8a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"rn-service-area rn-section-gap-foundation bg_color--1\">", "</div>", [_c(VContainer["a" /* default */], [_c('FoundationComponent')], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"about-area rn-section-gap-foundation bg_color--1\">", "</div>", [_c('AboutFounder', {
    attrs: {
      "data-info": _vm.aboutData
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"rn-testimonial-area rn-section-gap-foundation bg_color--8 mt-8\">", "</div>", [_c(VContainer["a" /* default */], [_c('AboutTestimonial', {
    attrs: {
      "content": _vm.content
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"about-area rn-section-gap-foundation bg_color--1\">", "</div>", [_c('AboutHistory', {
    attrs: {
      "data-info": _vm.aboutDataRight
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about-us.vue?vue&type=template&id=9fc4ab8a

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./components/about/AboutGenericLeft.vue + 4 modules
var AboutGenericLeft = __webpack_require__(353);

// EXTERNAL MODULE: ./components/about/AboutGenericRight.vue + 4 modules
var AboutGenericRight = __webpack_require__(420);

// EXTERNAL MODULE: ./components/foundation/FoundationComponent.vue + 4 modules
var FoundationComponent = __webpack_require__(409);

// EXTERNAL MODULE: ./components/testimonial/AboutTestimonial.vue + 4 modules
var AboutTestimonial = __webpack_require__(357);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us.vue?vue&type=script&lang=js





/* harmony default export */ var about_usvue_type_script_lang_js = ({
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
      title: this.$i18n.t('titles.aboutUs')
    };
  },
  components: {
    AboutFounder: AboutGenericLeft["default"],
    AboutHistory: AboutGenericRight["default"],
    FoundationComponent: FoundationComponent["default"],
    AboutTestimonial: AboutTestimonial["default"]
  },
  data() {
    return {
      items: [{
        src: "https://www.youtube.com/watch?v=ZOoVOfieAF8"
      }],
      index: null,
      aboutData: {
        titleEs: '',
        titleEn: '',
        src: '',
        firstParagraphEs: '',
        firstParagraphEn: '',
        secondParagraphEs: '',
        secondParagraphEn: ''
      },
      aboutDataRight: {
        titleEs: '',
        titleEn: '',
        src: '',
        firstParagraphEs: '',
        firstParagraphEn: '',
        secondParagraphEs: '',
        secondParagraphEn: ''
      },
      layout: {
        type: 2,
        titleEs: '',
        titleEn: '',
        descriptionEs: '',
        descriptionEn: '',
        image: ''
      },
      content: {
        author: "",
        authorEn: "",
        description: "",
        descriptionEn: ""
      },
      dataPage: []
    };
  },
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
        this.$router.push(this.$i18n.t('urls.aboutUs'));
      }
    }
  },
  async mounted() {},
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setLayout', 'setChargedPage']),
    initialize() {
      this.list();
    },
    list() {
      const me = this;
      this.$axios.get('api/PageInformations/GetPageInformationsByCodeFE/2').then(response => {
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

        // About Us second paragraph
        me.aboutDataRight.titleEs = me.dataPage.pageParagraphs[1].pageParagraphTitle;
        me.aboutDataRight.titleEn = me.dataPage.pageParagraphs[1].pageParagraphTitleEn;
        me.aboutDataRight.firstParagraphEs = me.dataPage.pageParagraphs[1].firstParagraph;
        me.aboutDataRight.firstParagraphEn = me.dataPage.pageParagraphs[1].firstParagraphEn;
        me.aboutDataRight.secondParagraphEs = me.dataPage.pageParagraphs[1].secondParagraph;
        me.aboutDataRight.secondParagraphEn = me.dataPage.pageParagraphs[1].secondParagraphEn;
        me.aboutDataRight.src = me.dataPage.pageParagraphs[1].pageParagraphImage;

        // About Phrase
        me.content.author = me.dataPage.pagePhrases[0].author;
        me.content.authorEn = me.dataPage.pagePhrases[0].authorEn;
        me.content.description = me.dataPage.pagePhrases[0].information;
        me.content.descriptionEn = me.dataPage.pagePhrases[0].informationEn;
        me.setChargedPage(true);
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/about-us.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_about_usvue_type_script_lang_js = (about_usvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/about-us.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(317)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_about_usvue_type_script_lang_js,
  about_usvue_type_template_id_9fc4ab8a_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "08d02d46"
  
)

/* harmony default export */ var about_us = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FoundationComponent: __webpack_require__(409).default})


/***/ })

};;
//# sourceMappingURL=about-us.js.map