exports.ids = [66];
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

/***/ })

};;
//# sourceMappingURL=testimonial-about-testimonial.js.map