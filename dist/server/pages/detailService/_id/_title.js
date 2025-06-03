exports.ids = [4,57,65];
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

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(383);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("5292b064", content, true)

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{bottom:0;height:15px}.ps__rail-x,.ps__rail-y{display:none;opacity:0;position:absolute;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear}.ps__rail-y{right:0;width:15px}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{background-color:transparent;display:block}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{bottom:2px;height:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{right:2px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}.ps-container{position:relative}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js + 2 modules
var VListItemAvatar = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var VList = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/team/ServiceTeam.vue?vue&type=template&id=46e95c40







var ServiceTeamvue_type_template_id_46e95c40_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    staticClass: "lawyer-contact"
  }, [_c('h3', [_vm._v(_vm._s(_vm.$t('detailsSolutions.contact')))]), _vm._v(" "), _c('vue-custom-scrollbar', {
    staticClass: "scroll-contacts",
    attrs: {
      "settings": _vm.settings
    }
  }, _vm._l(_vm.items, function (item) {
    return _c(VListItem["a" /* default */], {
      key: item.lawyerId,
      staticClass: "contact-container",
      attrs: {
        "three-line": ""
      }
    }, [_c('router-link', {
      attrs: {
        "to": _vm.$i18n.t('urls.profile') + '/' + item.lawyerId + '/' + _vm.createUrlComplement(item)
      }
    }, [_c(VListItemAvatar["a" /* default */], [_c('img', {
      attrs: {
        "src": item.lawyerImage
      }
    })])], 1), _vm._v(" "), _c('router-link', {
      attrs: {
        "to": _vm.$i18n.t('urls.profile') + '/' + item.lawyerId + '/' + _vm.createUrlComplement(item)
      }
    }, [_c(VList["a" /* VListItemContent */], {
      staticClass: "contact-content"
    }, [_c(VList["c" /* VListItemTitle */], {
      staticClass: "contact-title",
      domProps: {
        "innerHTML": _vm._s(item.firtsName + ' ' + item.lastName)
      }
    }), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], {
      staticClass: "contact-subtitle",
      domProps: {
        "innerHTML": _vm._s(item.offices.countries.abbreviation + ' | ' + (_vm.language === 'es' ? item.lawyerCategories.lawyerCategoryName : item.lawyerCategories.lawyerCategoryNameEn))
      }
    }), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], {
      staticClass: "contact-subtitle"
    }, [_vm._v(_vm._s(item.email))])], 1)], 1)], 1);
  }), 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/team/ServiceTeam.vue?vue&type=template&id=46e95c40

// EXTERNAL MODULE: external "vue-custom-scrollbar"
var external_vue_custom_scrollbar_ = __webpack_require__(299);
var external_vue_custom_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_vue_custom_scrollbar_);

// EXTERNAL MODULE: ./node_modules/vue-custom-scrollbar/dist/vueScrollbar.css
var vueScrollbar = __webpack_require__(382);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/team/ServiceTeam.vue?vue&type=script&lang=js



/* harmony default export */ var ServiceTeamvue_type_script_lang_js = ({
  components: {
    vueCustomScrollbar: external_vue_custom_scrollbar_default.a
  },
  props: ['practiceAreaId'],
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  data() {
    return {
      items: [],
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      }
    };
  },
  methods: {
    initialize() {
      this.list();
    },
    list() {
      const me = this;
      this.$axios.get('api/Lawyers/GetLawyersByPracticeAreaFE/' + this.practiceAreaId).then(response => {
        me.items = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    createUrlComplement(item) {
      const textoEnMinusculas = (item.firtsName + ' ' + item.lastName).toLowerCase();
      const textoConGuiones = textoEnMinusculas.replace(/\s+/g, '-');
      return textoConGuiones;
    }
  }
});
// CONCATENATED MODULE: ./components/team/ServiceTeam.vue?vue&type=script&lang=js
 /* harmony default export */ var team_ServiceTeamvue_type_script_lang_js = (ServiceTeamvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/team/ServiceTeam.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  team_ServiceTeamvue_type_script_lang_js,
  ServiceTeamvue_type_template_id_46e95c40_render,
  staticRenderFns,
  false,
  null,
  null,
  "25c444f9"
  
)

/* harmony default export */ var ServiceTeam = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js + 2 modules
var VBreadcrumbs = __webpack_require__(358);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(309);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/service/DetailService.vue?vue&type=template&id=b74c0c34






var DetailServicevue_type_template_id_b74c0c34_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], {
    staticClass: "detail-service-info pr-0 mt-0 pt-0"
  }, [_c(VRow["a" /* default */], {
    staticClass: "row--35",
    attrs: {
      "align": "start"
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "detail-service-col",
    attrs: {
      "lg": "8",
      "md": "7",
      "sm": "6",
      "cols": "12"
    }
  }, [_c(VBreadcrumbs["a" /* default */], {
    staticClass: "pt-5",
    attrs: {
      "items": _vm.links
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "about-inner about-section history"
  }, [_c('div', {
    staticClass: "section-title"
  }, [_c('p', {
    staticClass: "description",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.data.firstParagraphEs : _vm.data.firstParagraphEn)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row container-list pt-0 pb-5"
  }, _vm._l(_vm.data.list1, function (element, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      attrs: {
        "lg": "12",
        "md": "12",
        "sm": "12",
        "cols": "12"
      }
    }, [_c('div', [_c('div', {
      staticClass: "d-flex pb-1"
    }, [_c(VIcon["a" /* default */], {
      staticClass: "mdi mdi-check"
    }), _vm._v(" "), _c('p', {
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? element.pageListDescription : element.pageListDescriptionEn)
      }
    })], 1)])]);
  }), 1), _vm._v(" "), _c('p', {
    staticClass: "description",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.data.secondParagraphEs : _vm.data.secondParagraphEn)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row container-list pt-0 pb-5"
  }, _vm._l(_vm.data.list2, function (element, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      attrs: {
        "lg": "12",
        "md": "12",
        "sm": "12",
        "cols": "12"
      }
    }, [_c('div', [_c('div', {
      staticClass: "d-flex pb-1"
    }, [_c(VIcon["a" /* default */], {
      staticClass: "mdi mdi-check"
    }), _vm._v(" "), _c('p', {
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? element.pageListDescription : element.pageListDescriptionEn)
      }
    })], 1)])]);
  }), 1)])])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "contacts-col",
    attrs: {
      "lg": "4",
      "md": "5",
      "sm": "6",
      "cols": "12"
    }
  }, [_c('ServiceTeam', {
    attrs: {
      "practice-area-id": _vm.practiceAreaId
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/service/DetailService.vue?vue&type=template&id=b74c0c34

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./components/team/ServiceTeam.vue + 4 modules
var ServiceTeam = __webpack_require__(387);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/service/DetailService.vue?vue&type=script&lang=js


/* harmony default export */ var DetailServicevue_type_script_lang_js = ({
  components: {
    ServiceTeam: ServiceTeam["default"]
  },
  props: ['data', 'practiceAreaId'],
  data() {
    return {
      links: []
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language', 'pageCharge'])
  },
  watch: {
    language(val) {
      if (this.pageCharge && this.data) {
        const title = val === "es" ? this.data.titleEs : this.data.titleEn;
        this.$router.push(this.$i18n.t('urls.practiceAreaDetail') + `/${this.practiceAreaId}/${this.createUrlComplement(title)}`);
      }
    },
    // language(val){
    //   if(this.pageCharge)
    //   {
    //     const title = (val === "es" ? this.data.titleEs : this.data.titleEn)
    //     this.$router.push(this.$i18n.t('urls.practiceAreaDetail')+`/${this.practiceAreaId}/${this.createUrlComplement(title)}`);
    //   }
    // },
    '$i18n.locale': {
      immediate: true,
      handler(newLocale) {
        this.links = [{
          text: this.$t('breadcrumbs.detailSolutions.tab1'),
          disabled: false,
          href: this.$i18n.t('urls.practiceAreas')
        }, {
          text: this.$t('breadcrumbs.detailSolutions.tab2'),
          disabled: true
        }];
      }
    }
  },
  methods: {
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
// CONCATENATED MODULE: ./components/service/DetailService.vue?vue&type=script&lang=js
 /* harmony default export */ var service_DetailServicevue_type_script_lang_js = (DetailServicevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/service/DetailService.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  service_DetailServicevue_type_script_lang_js,
  DetailServicevue_type_template_id_b74c0c34_render,
  staticRenderFns,
  false,
  null,
  null,
  "1332c6b2"
  
)

/* harmony default export */ var DetailService = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/detailService/_id/_title.vue?vue&type=template&id=5b7c08e3
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"about-area rn-section-gap-foundation bg_color--1 pt-0\">", "</div>", [_c('DetailService', {
    attrs: {
      "data": _vm.aboutData,
      "practice-area-id": _vm.practiceAreaId
    }
  })], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/detailService/_id/_title.vue?vue&type=template&id=5b7c08e3

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./components/service/DetailService.vue + 4 modules
var DetailService = __webpack_require__(437);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/detailService/_id/_title.vue?vue&type=script&lang=js


/* harmony default export */ var _titlevue_type_script_lang_js = ({
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
      title: this.$i18n.t('titles.practiceAreas')
    };
  },
  // eslint-disable-next-line require-await
  async asyncData({
    params
  }) {
    const practiceAreaId = params.practiceAreaId;
    return {
      practiceAreaId
    };
  },
  components: {
    DetailService: DetailService["default"]
  },
  // props: ['practiceAreaId'],
  data() {
    return {
      items: [{
        src: "https://www.youtube.com/watch?v=ZOoVOfieAF8"
      }],
      index: null,
      aboutData: {
        titleEs: '',
        titleEn: '',
        firstParagraphEs: '',
        firstParagraphEn: '',
        list1: [],
        secondParagraphEs: '',
        secondParagraphEn: '',
        list2: []
      },
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
    initialize() {
      this.list();
    },
    list() {
      const me = this;
      this.$axios.get('api/PracticeAreas/GetPracticeAreasFE/' + this.practiceAreaId).then(response => {
        me.dataPage = response.data;
        // General information
        me.layout.titleEs = me.dataPage.practiceAreaName;
        me.layout.titleEn = me.dataPage.practiceAreaNameEn;
        me.layout.descriptionEs = me.dataPage.pageInformations.information;
        me.layout.descriptionEn = me.dataPage.pageInformations.informationEn;
        me.layout.image = me.dataPage.pageInformations.imageBanner;
        me.setLayout(me.layout);

        // About Us first paragraph
        me.aboutData.titleEs = me.dataPage.practiceAreaName;
        me.aboutData.titleEn = me.dataPage.practiceAreaNameEn;
        me.aboutData.firstParagraphEs = me.dataPage.pageInformations.pageParagraphs[0].secondParagraph;
        me.aboutData.firstParagraphEn = me.dataPage.pageInformations.pageParagraphs[0].secondParagraphEn;
        me.aboutData.secondParagraphEs = me.dataPage.pageInformations.pageParagraphs[1].secondParagraph;
        me.aboutData.secondParagraphEn = me.dataPage.pageInformations.pageParagraphs[1].secondParagraphEn;
        me.aboutData.list1 = me.dataPage.pageInformations.pageLists.filter(function (lista) {
          return lista.position === 1;
        });
        me.aboutData.list2 = me.dataPage.pageInformations.pageLists.filter(function (lista) {
          return lista.position === 2;
        });
        me.setChargedPage(true);
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/detailService/_id/_title.vue?vue&type=script&lang=js
 /* harmony default export */ var _id_titlevue_type_script_lang_js = (_titlevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/detailService/_id/_title.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(317)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_titlevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a030a54a"
  
)

/* harmony default export */ var _title = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_title.js.map