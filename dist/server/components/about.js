exports.ids = [20];
exports.modules = {

/***/ 412:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/About.vue?vue&type=template&id=58fc092a




var Aboutvue_type_template_id_58fc092a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], [_c(VRow["a" /* default */], {
    staticClass: "row--35",
    attrs: {
      "align": "center"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "lg": "5",
      "md": "5",
      "sm": "5",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "thumbnail"
  }, [_vm._t("thum-img")], 2)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "lg": "7",
      "md": "7",
      "sm": "7",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "about-inner inner"
  }, [_c('div', {
    staticClass: "section-title"
  }, [_c('h2', {
    staticClass: "heading-title",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.data.titleEs : _vm.data.titleEn)
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "description",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.data.descriptionEs : _vm.data.descriptionEn)
    }
  })]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mt--30 mt_sm--10"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "lg": "6",
      "md": "6",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "button-group mt--30 mt_sm--0"
  }, [_vm._t("more")], 2)])], 1)], 1)])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/about/About.vue?vue&type=template&id=58fc092a

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/About.vue?vue&type=script&lang=js

/* harmony default export */ var Aboutvue_type_script_lang_js = ({
  props: ['data'],
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  }
});
// CONCATENATED MODULE: ./components/about/About.vue?vue&type=script&lang=js
 /* harmony default export */ var about_Aboutvue_type_script_lang_js = (Aboutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/about/About.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_Aboutvue_type_script_lang_js,
  Aboutvue_type_template_id_58fc092a_render,
  staticRenderFns,
  false,
  null,
  null,
  "ac85ae30"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map