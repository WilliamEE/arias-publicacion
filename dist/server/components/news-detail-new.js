exports.ids = [39,24,60,66];
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

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(332);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("29751484", content, true)

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.sass
var VBreadcrumbs = __webpack_require__(331);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/routable/index.js
var routable = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsItem.js



/* @vue/component */

/* harmony default export */ var VBreadcrumbsItem = (Object(mixins["a" /* default */])(routable["a" /* default */]).extend({
  name: 'v-breadcrumbs-item',
  props: {
    // In a breadcrumb, the currently
    // active item should be dimmed
    activeClass: {
      type: String,
      default: 'v-breadcrumbs__item--disabled'
    },
    ripple: {
      type: [Boolean, Object],
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'v-breadcrumbs__item': true,
        [this.activeClass]: this.disabled
      };
    }
  },
  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    return h('li', [h(tag, {
      ...data,
      attrs: {
        ...data.attrs,
        'aria-current': this.isActive && this.isLink ? 'page' : undefined
      }
    }, Object(helpers["o" /* getSlot */])(this))]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsDivider.js

/* harmony default export */ var VBreadcrumbsDivider = (Object(helpers["i" /* createSimpleFunctional */])('v-breadcrumbs__divider', 'li'));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js
// Styles
 // Components


 // Mixins

 // Utils



/* harmony default export */ var VBreadcrumbs_VBreadcrumbs = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-breadcrumbs',
  props: {
    divider: {
      type: String,
      default: '/'
    },
    items: {
      type: Array,
      default: () => []
    },
    large: Boolean
  },
  computed: {
    classes() {
      return {
        'v-breadcrumbs--large': this.large,
        ...this.themeClasses
      };
    }
  },
  methods: {
    genDivider() {
      return this.$createElement(VBreadcrumbsDivider, this.$slots.divider ? this.$slots.divider : this.divider);
    },
    genItems() {
      const items = [];
      const hasSlot = !!this.$scopedSlots.item;
      const keys = [];
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        keys.push(item.text);
        if (hasSlot) items.push(this.$scopedSlots.item({
          item
        }));else items.push(this.$createElement(VBreadcrumbsItem, {
          key: keys.join('.'),
          props: item
        }, [item.text]));
        if (i < this.items.length - 1) items.push(this.genDivider());
      }
      return items;
    }
  },
  render(h) {
    const children = Object(helpers["o" /* getSlot */])(this) || this.genItems();
    return h('ul', {
      staticClass: 'v-breadcrumbs',
      class: this.classes
    }, children);
  }
}));

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js + 2 modules
var VBreadcrumbs = __webpack_require__(358);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(309);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/news/DetailNew.vue?vue&type=template&id=5d496fe6



var DetailNewvue_type_template_id_5d496fe6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.componentCharged ? _c('div', {
    staticClass: "pt-5"
  }, [_c(VContainer["a" /* default */], [_c(VBreadcrumbs["a" /* default */], {
    attrs: {
      "items": _vm.links
    }
  })], 1), _vm._ssrNode(" "), _c(VContainer["a" /* default */], {
    staticClass: "pt-5"
  }, [_c('div', {
    staticClass: "news-inner about-section"
  }, [_c('div', {
    staticClass: "section-title-news"
  }, [_c('h1', {
    staticClass: "heading-title",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.dataInfo.articleTitle : _vm.dataInfo.articleTitleEn)
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "date-title",
    domProps: {
      "innerHTML": _vm._s(_vm.getMonthName(_vm.dataInfo.publicationDate) + ' ' + _vm.getFullYear(_vm.dataInfo.publicationDate) + ' | ' + (_vm.language === 'es' ? _vm.dataInfo.countries.countryName : _vm.dataInfo.countries.countryNameEn))
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "hidden": !_vm.dataInfo.voiceNote
    }
  }, [_c('vuetify-audio', {
    staticClass: "heading-audio",
    attrs: {
      "file": _vm.language === 'es' ? _vm.dataInfo.voiceNote : _vm.dataInfo.voiceNoteEn,
      "color": "primary",
      "flat": true
    }
  })], 1)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrAttr("hidden", _vm.phrase.description === '') + " class=\"rn-testimonial-area rn-section-gap-foundation bg_color--8 mt-5 mb-10\">", "</div>", [_c(VContainer["a" /* default */], [_c('AboutTestimonial', {
    attrs: {
      "content": _vm.phrase
    }
  })], 1)], 1), _vm._ssrNode(" "), _c(VContainer["a" /* default */], {
    staticClass: "pb-5"
  }, [_c('div', {
    staticClass: "news-inner content-new"
  }, [_c('div', {
    staticClass: "section-title-news"
  }, [_c('div', {
    staticClass: "description",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.dataInfo.content : _vm.dataInfo.contentEn)
    }
  })])])]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrAttr("hidden", _vm.authors.length === 0) + " class=\"author-area bg_color--1\">", "</div>", [_c(VContainer["a" /* default */], [_c('h3', {
    staticClass: "heading-title mb-0"
  }, [_vm._v(" " + _vm._s(_vm.$t('newsroom.detailNew.authors')) + ":")]), _vm._v(" "), _c('Author', {
    attrs: {
      "authors": _vm.authors
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrAttr("hidden", _vm.bibliographies.length === 0) + " class=\"author-area bg_color--1\">", "</div>", [_c(VContainer["a" /* default */], [_c('h3', {
    staticClass: "heading-title mb-0"
  }, [_vm._v(" " + _vm._s(_vm.$t('newsroom.detailNew.bibliography')) + ":")]), _vm._v(" "), _c('Bibliography', {
    attrs: {
      "bibliographies": _vm.bibliographies
    }
  })], 1)], 1)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/news/DetailNew.vue?vue&type=template&id=5d496fe6

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./components/testimonial/AboutTestimonial.vue + 4 modules
var AboutTestimonial = __webpack_require__(357);

// EXTERNAL MODULE: ./components/team/Author.vue + 4 modules
var Author = __webpack_require__(388);

// EXTERNAL MODULE: ./components/bibliography/Bibliography.vue + 4 modules
var Bibliography = __webpack_require__(370);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/news/DetailNew.vue?vue&type=script&lang=js




/* harmony default export */ var DetailNewvue_type_script_lang_js = ({
  head() {
    return {
      htmlAttrs: {
        lang: this.$route.params.language
      },
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.$route.params.language === 'es' ? this.dataInfo.articleTitle + ' ' + this.getMonthName(this.dataInfo.publicationDate) + ' ' + this.getFullYear(this.dataInfo.publicationDate) : this.dataInfo.articleTitleEn + ' ' + +this.getMonthName(this.dataInfo.publicationDate) + ' ' + this.getFullYear(this.dataInfo.publicationDate)
      }],
      title: this.$i18n.t('titles.newsroom')
    };
  },
  components: {
    VuetifyAudio: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 314, 7)),
    AboutTestimonial: AboutTestimonial["default"],
    Author: Author["default"],
    Bibliography: Bibliography["default"]
  },
  props: ['code', 'links', 'newsType'],
  data() {
    return {
      componentCharged: false,
      items: [{
        src: "https://www.youtube.com/watch?v=ZOoVOfieAF8"
      }],
      index: null,
      layout: {
        type: 2,
        title: 'News',
        description: 'Descripcion',
        image: 'bg_image_team_banner'
      },
      dataInfo: {},
      phrase: {
        description: '',
        descriptionEn: '',
        author: '',
        authorEn: ''
      },
      authors: [],
      bibliographies: []
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language', 'pageCharge'])
  },
  watch: {
    language(val) {
      if (this.pageCharge) {
        const title = val === "es" ? this.dataInfo.articleTitle : this.dataInfo.articleTitleEn;
        this.$router.push(this.$i18n.t('urls.newDetail') + `/${this.code}/${this.newsType}/${this.createUrlComplement(title)}`);
      }
    }
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setLayout', 'setChargedPage']),
    async initialize() {
      await this.list();
    },
    async list() {
      const me = this;
      await this.$axios.get('api/Articles/GetArticlesFE/' + this.code).then(response => {
        me.dataInfo = response.data;
        me.phrase = {
          description: me.dataInfo.phrase,
          descriptionEn: me.dataInfo.phraseEn,
          author: me.dataInfo.phraseAuthor,
          authorEn: me.dataInfo.phraseAuthorEn
        };
        me.authors = me.dataInfo.articleAuthors;
        me.bibliographies = me.dataInfo.articleBibliographics;
        console.log(me.dataInfo);
        me.componentCharged = true;
        // General information
      }).catch(error => {
        console.log(error);
      });
    },
    getMonthName(date) {
      const fecha = new Date(date);
      const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      const mesesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const mes = fecha.getMonth(); // Retorna el número del mes (0-11)
      const nombreMes = this.language === 'es' ? meses[mes] : mesesEn[mes];
      return nombreMes;
    },
    getFullYear(date) {
      const fecha = new Date(date);
      const year = fecha.getFullYear();
      return year;
    },
    createUrlComplement(item) {
      const textoEnMinusculas = item.toLowerCase();
      const vocalesConTilde = 'áéíóúÁÉÍÓÚ';
      const vocalesSinTilde = 'aeiouAEIOU';
      const textoNormalizado = textoEnMinusculas.normalize('NFD');
      const textoSinTildes = textoNormalizado.replace(new RegExp(`[${vocalesConTilde}]`, 'g'), match => vocalesSinTilde[vocalesConTilde.indexOf(match)]);
      let textoConGuiones = textoSinTildes.replace(/\s+/g, '-');
      textoConGuiones = textoConGuiones.replace(/[^a-zA-Z0-9-]/g, '');
      textoConGuiones = textoConGuiones.replace(/^[^a-zA-Z]+/, '');
      const ultimoCaracter = textoConGuiones.charAt(textoConGuiones.length - 1);
      const esSimbolo = !ultimoCaracter.match(/[a-zA-Z0-9]/);
      if (esSimbolo) {
        textoConGuiones = textoConGuiones.slice(0, -1);
      }
      return textoConGuiones;
    }
  }
});
// CONCATENATED MODULE: ./components/news/DetailNew.vue?vue&type=script&lang=js
 /* harmony default export */ var news_DetailNewvue_type_script_lang_js = (DetailNewvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/news/DetailNew.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_DetailNewvue_type_script_lang_js,
  DetailNewvue_type_template_id_5d496fe6_render,
  staticRenderFns,
  false,
  null,
  null,
  "2105fde8"
  
)

/* harmony default export */ var DetailNew = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Bibliography: __webpack_require__(370).default})


/***/ })

};;
//# sourceMappingURL=news-detail-new.js.map