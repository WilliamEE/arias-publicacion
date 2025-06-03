exports.ids = [22];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=about-generic-right.js.map