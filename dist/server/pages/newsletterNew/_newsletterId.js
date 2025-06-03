exports.ids = [8,25,42];
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

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/Blog.vue?vue&type=template&id=3bab7bc9



var Blogvue_type_template_id_3bab7bc9_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], [_vm._l(_vm.blogContent, function (item, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      attrs: {
        "lg": "4",
        "md": "4",
        "sm": "4",
        "cols": "12"
      }
    }, [_c('div', {
      staticClass: "blog blog-style--1"
    }, [_c('div', {
      staticClass: "thumbnail"
    }, [_c('router-link', {
      attrs: {
        "to": _vm.$i18n.t('urls.newDetail') + '/' + item.articleId + '/' + _vm.newsType + '/' + _vm.createUrlComplement(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      }
    }, [_c('img', {
      staticClass: "w-100",
      attrs: {
        "src": item.articleImage,
        "alt": "Blog Images"
      }
    })])], 1), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('p', {
      staticClass: "blogtype",
      domProps: {
        "innerHTML": _vm._s((_vm.language === 'es' ? item.countries.countryName : item.countries.countryName) + ' | ' + (_vm.language === 'es' ? item.practiceAreas.shortPracticeAreaName : item.practiceAreas.shortPracticeAreaNameEn))
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "blogtype-date",
      domProps: {
        "innerHTML": _vm._s(_vm.getMonthName(item.publicationDate) + ' ' + _vm.getFullYear(item.publicationDate))
      }
    }), _vm._v(" "), _c('h4', {
      staticClass: "heading-title"
    }, [_c('router-link', {
      attrs: {
        "to": _vm.$i18n.t('urls.newDetail') + '/' + item.articleId + '/' + _vm.newsType + '/' + _vm.createUrlComplement(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      },
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "blog-btn"
    }, [_c('router-link', {
      staticClass: "rn-btn white--text",
      attrs: {
        "to": _vm.$i18n.t('urls.newDetail') + '/' + item.articleId + '/' + _vm.newsType + '/' + _vm.createUrlComplement(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      }
    }, [_vm._v("\n            " + _vm._s(_vm.$t('common.btnReadMore')) + "\n            ")])], 1)])])]);
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "lg": "12",
      "md": "12",
      "sm": "12",
      "cols": "12",
      "hidden": !_vm.url
    }
  }, [_c('div', {
    staticClass: "text-center mt-8"
  }, [_c('a', {
    staticClass: "rn-button-style--2 btn_border btn-size-md px-8",
    attrs: {
      "href": _vm.url
    }
  }, [_vm._v(" \n        " + _vm._s(_vm.$t('common.btnReadAll')) + "\n      ")])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/blog/Blog.vue?vue&type=template&id=3bab7bc9

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/Blog.vue?vue&type=script&lang=js

/* harmony default export */ var Blogvue_type_script_lang_js = ({
  props: ['blogContent', 'url', 'newsType'],
  created() {},
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
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
// CONCATENATED MODULE: ./components/blog/Blog.vue?vue&type=script&lang=js
 /* harmony default export */ var blog_Blogvue_type_script_lang_js = (Blogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/blog/Blog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_Blogvue_type_script_lang_js,
  Blogvue_type_template_id_3bab7bc9_render,
  staticRenderFns,
  false,
  null,
  null,
  "2a3fb074"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

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

/***/ 430:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/news/NewsletterNew.vue?vue&type=template&id=6c8d338d




var NewsletterNewvue_type_template_id_6c8d338d_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], {
    staticClass: "pa-0"
  }, [_c(VRow["a" /* default */], _vm._l(_vm.blogContent, function (item, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      attrs: {
        "lg": "4",
        "md": "4",
        "sm": "6",
        "cols": "12"
      }
    }, [_c('div', {
      staticClass: "blog blog-style--1"
    }, [_c('div', {
      staticClass: "thumbnail"
    }, [_c('router-link', {
      attrs: {
        "to": _vm.$i18n.t('urls.newDetail') + '/' + item.articleId + '/3/' + _vm.createUrlComplement(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      }
    }, [_c('img', {
      staticClass: "w-100",
      attrs: {
        "src": item.articleImage,
        "alt": "Blog Images"
      }
    })])], 1), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('p', {
      staticClass: "blogtype",
      domProps: {
        "innerHTML": _vm._s((_vm.language === 'es' ? item.countries.countryName : item.countries.countryName) + ' | ' + (_vm.language === 'es' ? item.practiceAreas.shortPracticeAreaName : item.practiceAreas.shortPracticeAreaNameEn))
      }
    }), _vm._v(" "), _c('h4', {
      staticClass: "heading-title"
    }, [_c('router-link', {
      attrs: {
        "to": _vm.$i18n.t('urls.newDetail') + '/' + item.articleId + '/3/' + _vm.createUrlComplement(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      },
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "blog-btn"
    }, [_c('router-link', {
      staticClass: "rn-btn white--text",
      attrs: {
        "to": _vm.$i18n.t('urls.newDetail') + '/' + item.articleId + '/3/' + _vm.createUrlComplement(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.$t('common.btnReadMore')) + "\n                    ")])], 1)])])]);
  }), 1), _vm._v(" "), _c('div', {
    staticClass: "rn-blog-area rn-section-gapTop bg_color--1"
  }, [_c(VContainer["a" /* default */], {
    staticClass: "pa-0"
  }, [_c(VRow["a" /* default */], {
    staticClass: "mb--20",
    attrs: {
      "align": "end"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "lg": "12",
      "md": "12",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-title text-center"
  }, [_c('h2', {
    staticClass: "heading-title"
  }, [_vm._v(_vm._s(_vm.$t('newsroom.newsletter.titleFirmNews')))])])])], 1), _vm._v(" "), _c('RecentlyNews', {
    staticClass: "pb-10",
    attrs: {
      "blog-content": _vm.news,
      "news-type": 3
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/news/NewsletterNew.vue?vue&type=template&id=6c8d338d

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./components/blog/Blog.vue + 4 modules
var Blog = __webpack_require__(355);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/news/NewsletterNew.vue?vue&type=script&lang=js


/* harmony default export */ var NewsletterNewvue_type_script_lang_js = ({
  components: {
    RecentlyNews: Blog["default"]
  },
  props: ['newsletterId'],
  data() {
    return {
      blogContent: [],
      news: []
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
    async initialize() {
      await this.listMainNews();
      await this.listNews();
    },
    async listMainNews() {
      const me = this;
      await this.$axios.get('api/Articles/GetArticlesMainNewsletterFE/' + this.newsletterId).then(response => {
        me.blogContent = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    async listNews() {
      const me = this;
      await this.$axios.get('api/Articles/GetArticlesPerNewsletterFE/' + this.newsletterId).then(response => {
        me.news = response.data;
      }).catch(error => {
        console.log(error);
      });
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
// CONCATENATED MODULE: ./components/news/NewsletterNew.vue?vue&type=script&lang=js
 /* harmony default export */ var news_NewsletterNewvue_type_script_lang_js = (NewsletterNewvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/news/NewsletterNew.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_NewsletterNewvue_type_script_lang_js,
  NewsletterNewvue_type_template_id_6c8d338d_render,
  staticRenderFns,
  false,
  null,
  null,
  "4b73d5b8"
  
)

/* harmony default export */ var NewsletterNew = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js + 2 modules
var VBreadcrumbs = __webpack_require__(358);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(309);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newsletterNew/_newsletterId.vue?vue&type=template&id=5fd2e9da



var _newsletterIdvue_type_template_id_5fd2e9da_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"pt-5\">", "</div>", [_c(VContainer["a" /* default */], [_c(VBreadcrumbs["a" /* default */], {
    attrs: {
      "items": _vm.links
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"rn-blog-area rn-section-gapTop bg_color--1 pt-0\">", "</div>", [_c(VContainer["a" /* default */], [_c('News', {
    attrs: {
      "newsletter-id": _vm.newsletterId
    }
  })], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/newsletterNew/_newsletterId.vue?vue&type=template&id=5fd2e9da

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./components/news/NewsletterNew.vue + 4 modules
var NewsletterNew = __webpack_require__(430);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newsletterNew/_newsletterId.vue?vue&type=script&lang=js


/* harmony default export */ var _newsletterIdvue_type_script_lang_js = ({
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
      title: this.$i18n.t('titles.newsroom')
    };
  },
  // props: ['newsletterId'],
  components: {
    News: NewsletterNew["default"]
  },
  // eslint-disable-next-line require-await
  async asyncData({
    params
  }) {
    const newsletterId = params.newsletterId;
    return {
      newsletterId
    };
  },
  data() {
    return {
      links: [],
      paginatorHidden: true,
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
      }
    };
  },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler(newLocale) {
        this.links = [{
          text: this.$t('breadcrumbs.newsletter.tab1'),
          disabled: false,
          href: this.$i18n.t('urls.newsroomMain')
        }, {
          text: this.$t('breadcrumbs.newsletter.tab2'),
          disabled: false,
          href: this.$i18n.t('urls.newsroomNewsletter')
        }, {
          text: this.$t('breadcrumbs.newsletter.tab3'),
          disabled: true
        }];
      }
    }
  },
  created() {
    this.setChargedPage(false);
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  async mounted() {},
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setLayout', 'setChargedPage']),
    async initialize() {
      await this.list();
      this.setChargedPage(true);
    },
    // eslint-disable-next-line require-await
    async list() {
      const me = this;
      this.$axios.get('api/PageInformations/GetPageInformationsByCodeFE/12').then(response => {
        me.dataPage = response.data[0];
        // General information
        me.layout.titleEs = me.dataPage.pageInformationTitle;
        me.layout.titleEn = me.dataPage.pageInformationTitleEn;
        me.layout.descriptionEs = me.dataPage.information;
        me.layout.descriptionEn = me.dataPage.informationEn;
        me.layout.image = me.dataPage.imageBanner;
        me.setLayout(me.layout);
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/newsletterNew/_newsletterId.vue?vue&type=script&lang=js
 /* harmony default export */ var newsletterNew_newsletterIdvue_type_script_lang_js = (_newsletterIdvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/newsletterNew/_newsletterId.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(317)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  newsletterNew_newsletterIdvue_type_script_lang_js,
  _newsletterIdvue_type_template_id_5fd2e9da_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "03c4ad66"
  
)

/* harmony default export */ var _newsletterId = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_newsletterId.js.map