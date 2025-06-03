exports.ids = [60];
exports.modules = {

/***/ 388:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/team/Author.vue?vue&type=template&id=17dffee8




var Authorvue_type_template_id_17dffee8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row pt-5 pb-5"
  }, _vm._l(_vm.authors, function (author, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      attrs: {
        "lg": "6",
        "md": "6",
        "sm": "12",
        "cols": "12"
      }
    }, [_c('div', {
      staticClass: "single-service service__style__author"
    }, [_c('div', {
      staticClass: "service",
      style: _vm.getPointerStyle(author),
      on: {
        "click": function ($event) {
          _vm.clickAuthor(author, _vm.$i18n.t('urls.profile') + '/' + author.lawyerId + '/' + _vm.createUrlComplement(author.lawyers));
        }
      }
    }, [_c(VRow["a" /* default */], {
      staticClass: "row-flex"
    }, [_c(VCol["a" /* default */], {
      staticClass: "pl-0",
      attrs: {
        "lg": "3",
        "md": "3",
        "sm": "3",
        "cols": "3"
      }
    }, [_c('div', {
      staticClass: "thumbnail-inner"
    }, [_c(VImg["a" /* default */], {
      staticClass: "thumbnail",
      attrs: {
        "src": author.lawyers.lawyerImage
      }
    }), _vm._v(" "), _c(VImg["a" /* default */], {
      staticClass: "bg-blr-image",
      attrs: {
        "src": author.lawyers.lawyerImage
      }
    })], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
      staticClass: "col-text",
      attrs: {
        "lg": "9",
        "md": "9",
        "sm": "9",
        "cols": "9"
      }
    }, [_c('div', {
      staticClass: "content"
    }, [_c('h3', {
      staticClass: "heading-title",
      domProps: {
        "innerHTML": _vm._s(author.lawyers.firtsName + ' ' + author.lawyers.lastName)
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "mb-0",
      domProps: {
        "innerHTML": _vm._s(author.lawyers.offices.countries.abbreviation + ' | ' + (_vm.language === 'es' ? author.lawyers.lawyerCategories.lawyerCategoryName : author.lawyers.lawyerCategories.lawyerCategoryNameEn))
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "d-flex"
    }, [_c('i', {
      staticClass: "mdi mdi-phone-outline"
    }), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(author.lawyers.telephone) + "\n                  ")])]), _vm._v(" "), _c('div', {
      staticClass: "d-flex"
    }, [_c('i', {
      staticClass: "mdi mdi-email-outline"
    }), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(author.lawyers.email) + "\n                  ")])])])])], 1)], 1)])]);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/team/Author.vue?vue&type=template&id=17dffee8

// EXTERNAL MODULE: external "feather-icons"
var external_feather_icons_ = __webpack_require__(98);
var external_feather_icons_default = /*#__PURE__*/__webpack_require__.n(external_feather_icons_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/team/Author.vue?vue&type=script&lang=js


/* harmony default export */ var Authorvue_type_script_lang_js = ({
  props: ['authors'],
  data() {
    return {};
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
    iconSvg(icon) {
      return external_feather_icons_default.a.icons[icon].toSvg();
    },
    createUrlComplement(item) {
      const textoEnMinusculas = (item.firtsName + ' ' + item.lastName).toLowerCase();
      const textoConGuiones = textoEnMinusculas.replace(/\s+/g, '-');
      return textoConGuiones;
    },
    clickAuthor(author, url) {
      if (author.lawyers.isParalegal === false) window.open(url, '_blank');
    },
    getPointerStyle(author) {
      // eslint-disable-next-line no-var
      var style = '';
      if (author.lawyers.isParalegal === false) style = 'cursor: pointer;';
      return style;
    }
  }
});
// CONCATENATED MODULE: ./components/team/Author.vue?vue&type=script&lang=js
 /* harmony default export */ var team_Authorvue_type_script_lang_js = (Authorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/team/Author.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  team_Authorvue_type_script_lang_js,
  Authorvue_type_template_id_17dffee8_render,
  staticRenderFns,
  false,
  null,
  null,
  "3061f6d8"
  
)

/* harmony default export */ var Author = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=team-author.js.map