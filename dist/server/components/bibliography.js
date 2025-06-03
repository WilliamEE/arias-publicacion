exports.ids = [24];
exports.modules = {

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/bibliography/Bibliography.vue?vue&type=template&id=7c03a6a5



var Bibliographyvue_type_template_id_7c03a6a5_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row container-bibliography pt-5 pb-10"
  }, _vm._l(_vm.bibliographies, function (bibliography, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      staticClass: "col-bibliography",
      attrs: {
        "lg": "12",
        "md": "12",
        "sm": "12",
        "cols": "12"
      }
    }, [_c('div', [_c('div', {
      staticClass: "d-flex"
    }, [_c(VIcon["a" /* default */], {
      staticClass: "mdi mdi-chevron-right"
    }), _vm._v(" "), _c('p', {
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? bibliography.referenceDescription : bibliography.referenceDescriptionEn)
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "single-b"
    }, [_c('a', {
      staticClass: "overflow-ellipsis"
    }, [_vm._v(" " + _vm._s(bibliography.referenceUrl) + " ")])])])]);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/bibliography/Bibliography.vue?vue&type=template&id=7c03a6a5

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/bibliography/Bibliography.vue?vue&type=script&lang=js

/* harmony default export */ var Bibliographyvue_type_script_lang_js = ({
  props: ['bibliographies'],
  components: {},
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./components/bibliography/Bibliography.vue?vue&type=script&lang=js
 /* harmony default export */ var bibliography_Bibliographyvue_type_script_lang_js = (Bibliographyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/bibliography/Bibliography.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bibliography_Bibliographyvue_type_script_lang_js,
  Bibliographyvue_type_template_id_7c03a6a5_render,
  staticRenderFns,
  false,
  null,
  null,
  "bb653c74"
  
)

/* harmony default export */ var Bibliography = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=bibliography.js.map