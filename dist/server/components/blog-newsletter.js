exports.ids = [26];
exports.modules = {

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/BlogNewsletter.vue?vue&type=template&id=44115d4f



var BlogNewslettervue_type_template_id_44115d4f_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], [_vm._l(_vm.blogContent, function (item, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      attrs: {
        "lg": "3",
        "md": "3",
        "sm": "3",
        "cols": "12"
      }
    }, [_c('div', {
      staticClass: "blog blog-style--2"
    }, [_c('div', {
      staticClass: "thumbnail"
    }, [_c('router-link', {
      attrs: {
        "to": _vm.$i18n.t('urls.newsletterNew') + '/' + item.newsletterId
      }
    }, [_c('img', {
      staticClass: "w-100",
      attrs: {
        "src": _vm.language === 'es' ? item.newsletterImage : item.newsletterImageEn,
        "alt": "Blog Images"
      }
    })])], 1)])]);
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "lg": "12",
      "md": "12",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "text-center mt-8"
  }, [_c('a', {
    staticClass: "rn-button-style--2 btn_border btn-size-md px-8",
    attrs: {
      "href": _vm.url
    }
  }, [_vm._v(_vm._s(_vm.$t('common.btnReadAll')))])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/blog/BlogNewsletter.vue?vue&type=template&id=44115d4f

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/BlogNewsletter.vue?vue&type=script&lang=js

/* harmony default export */ var BlogNewslettervue_type_script_lang_js = ({
  props: ['blogContent', 'url'],
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  }
});
// CONCATENATED MODULE: ./components/blog/BlogNewsletter.vue?vue&type=script&lang=js
 /* harmony default export */ var blog_BlogNewslettervue_type_script_lang_js = (BlogNewslettervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/blog/BlogNewsletter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogNewslettervue_type_script_lang_js,
  BlogNewslettervue_type_template_id_44115d4f_render,
  staticRenderFns,
  false,
  null,
  null,
  "92145ac2"
  
)

/* harmony default export */ var BlogNewsletter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-newsletter.js.map