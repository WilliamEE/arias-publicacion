exports.ids = [16,53,54,55,56];
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

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0);
// Styles

 // Components


 // Mixins






 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "a"])('chipGroup'), Object(_mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__[/* factory */ "b"])('inputValue')).extend({
  name: 'v-chip',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    activeClass: {
      type: String,
      default() {
        if (!this.chipGroup) return '';
        return this.chipGroup.activeClass;
      }
    },
    close: Boolean,
    closeIcon: {
      type: String,
      default: '$delete'
    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    disabled: Boolean,
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: '$complete'
    },
    label: Boolean,
    link: Boolean,
    outlined: Boolean,
    pill: Boolean,
    tag: {
      type: String,
      default: 'span'
    },
    textColor: String,
    value: null
  },
  data: () => ({
    proxyClass: 'v-chip--active'
  }),
  computed: {
    classes() {
      return {
        'v-chip': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.classes.call(this),
        'v-chip--clickable': this.isClickable,
        'v-chip--disabled': this.disabled,
        'v-chip--draggable': this.draggable,
        'v-chip--label': this.label,
        'v-chip--link': this.isLink,
        'v-chip--no-color': !this.color,
        'v-chip--outlined': this.outlined,
        'v-chip--pill': this.pill,
        'v-chip--removable': this.hasClose,
        ...this.themeClasses,
        ...this.sizeableClasses,
        ...this.groupClasses
      };
    },
    hasClose() {
      return Boolean(this.close);
    },
    isClickable() {
      return Boolean(_mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.isClickable.call(this) || this.chipGroup);
    }
  },
  created() {
    const breakingProps = [['outline', 'outlined'], ['selected', 'input-value'], ['value', 'active'], ['@input', '@active.sync']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(_util_console__WEBPACK_IMPORTED_MODULE_10__[/* breaking */ "a"])(original, replacement, this);
    });
  },
  methods: {
    click(e) {
      this.$emit('click', e);
      this.chipGroup && this.toggle();
    },
    genFilter() {
      const children = [];
      if (this.isActive) {
        children.push(this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          staticClass: 'v-chip__filter',
          props: {
            left: true
          }
        }, this.filterIcon));
      }
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__[/* VExpandXTransition */ "b"], children);
    },
    genClose() {
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        staticClass: 'v-chip__close',
        props: {
          right: true,
          size: 18
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: e => {
            e.stopPropagation();
            e.preventDefault();
            this.$emit('click:close');
            this.$emit('update:active', false);
          }
        }
      }, this.closeIcon);
    },
    genContent() {
      return this.$createElement('span', {
        staticClass: 'v-chip__content'
      }, [this.filter && this.genFilter(), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_11__[/* getSlot */ "o"])(this), this.hasClose && this.genClose()]);
    }
  },
  render(h) {
    const children = [this.genContent()];
    let {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = {
      ...data.attrs,
      draggable: this.draggable ? 'true' : undefined,
      tabindex: this.chipGroup && !this.disabled ? 0 : data.attrs.tabindex
    };
    data.directives.push({
      name: 'show',
      value: this.active
    });
    data = this.setBackgroundColor(this.color, data);
    const color = this.textColor || this.outlined && this.color;
    return h(tag, this.setTextColor(color, data), children);
  }
}));

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("59b49814", content, true)

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-style:solid;border-width:thin}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searcher/LawyersSearch.vue?vue&type=template&id=b5bd5bc0



var LawyersSearchvue_type_template_id_b5bd5bc0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    staticClass: "mt--00"
  }, _vm._l(_vm.items, function (team) {
    return _c(VCol["a" /* default */], {
      key: team.id,
      attrs: {
        "lg": "6",
        "md": "6",
        "sm": "6",
        "cols": "6"
      }
    }, [_c('div', {
      staticClass: "search-component"
    }, [_c('div', {
      staticClass: "inner"
    }, [_c('div', {
      staticClass: "content"
    }, [_c('h4', {
      staticClass: "title-search",
      staticStyle: {
        "cursor": "pointer"
      },
      domProps: {
        "innerHTML": _vm._s(team.firtsName + ' ' + team.lastName)
      },
      on: {
        "click": function ($event) {
          _vm.clickProfile(_vm.$i18n.t('urls.profile') + '/' + team.lawyerId + '/' + _vm.createUrlComplement(team));
        }
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "designation",
      domProps: {
        "innerHTML": _vm._s(team.abbreviation + ' | ' + (_vm.language === 'es' ? team.lawyerCategoryName : team.lawyerCategoryNameEn))
      }
    })])])])]);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/searcher/LawyersSearch.vue?vue&type=template&id=b5bd5bc0

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searcher/LawyersSearch.vue?vue&type=script&lang=js

/* harmony default export */ var LawyersSearchvue_type_script_lang_js = ({
  props: ['items'],
  data() {
    return {
      // items: [],
      validator: false
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setLawyers']),
    initialize() {
      // this.items = []
      // this.list()
    },
    list() {
      const me = this;
      this.$axios.get("odata/lawyersOdata?$select=lawyerId,firtsName,lastName&$count=true" + "&$expand=offices($select=officeId;$expand=countries($select=abbreviation))" + "&$expand=lawyerCategories($select=lawyerCategoryName,lawyerCategoryNameEn)" + "&$filter=contains(firtsName, '" + this.textToSearch + "') or " + "contains(lastName, '" + this.textToSearch + "') or " + "lawyerExperiences/any(e: " + "contains(e/information, '" + this.textToSearch + "') or " + "contains(e/informationEn, '" + this.textToSearch + "')) or " + "lawyerAcademicInfos/any(e: " + "contains(e/information, '" + this.textToSearch + "') or " + "contains(e/informationEn, '" + this.textToSearch + "')) or " + "lawyerMemberships/any(e: " + "contains(e/information, '" + this.textToSearch + "') or " + "contains(e/informationEn, '" + this.textToSearch + "')) or " + "lawyerRecognitions/any(e: " + "contains(e/information, '" + this.textToSearch + "') or " + "contains(e/informationEn, '" + this.textToSearch + "')) or " + "lawyerClientFeedbacks/any(e: " + "contains(e/information, '" + this.textToSearch + "') or " + "contains(e/informationEn, '" + this.textToSearch + "')) or " + "lawyerCommunities/any(e: " + "contains(e/information, '" + this.textToSearch + "') or " + "contains(e/informationEn, '" + this.textToSearch + "')) or " + "lawyerPracticeAreas/any(e: " + "contains(e/PracticeAreas/practiceAreaName, '" + this.textToSearch + "') or " + "contains(e/PracticeAreas/practiceAreaNameEn, '" + this.textToSearch + "') or " + "contains(e/PracticeAreas/shortPracticeAreaName, '" + this.textToSearch + "') or " + "contains(e/PracticeAreas/shortPracticeAreaNameEn, '" + this.textToSearch + "'))").then(response => {
        // me.items = response.data.value
        me.setLawyers(response.data['@odata.count']);
      }).catch(error => {
        console.log(error);
      });
    },
    createUrlComplement(item) {
      const textoEnMinusculas = (item.firtsName + ' ' + item.lastName).toLowerCase();
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
    },
    clickProfile(url) {
      window.open(url, '_blank');
    }
  }
});
// CONCATENATED MODULE: ./components/searcher/LawyersSearch.vue?vue&type=script&lang=js
 /* harmony default export */ var searcher_LawyersSearchvue_type_script_lang_js = (LawyersSearchvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/searcher/LawyersSearch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  searcher_LawyersSearchvue_type_script_lang_js,
  LawyersSearchvue_type_template_id_b5bd5bc0_render,
  staticRenderFns,
  false,
  null,
  null,
  "56203e76"
  
)

/* harmony default export */ var LawyersSearch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searcher/NewsSearch.vue?vue&type=template&id=1a9bfdc2



var NewsSearchvue_type_template_id_1a9bfdc2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    staticClass: "mt--00"
  }, _vm._l(_vm.items, function (item) {
    return _c(VCol["a" /* default */], {
      key: item.id,
      attrs: {
        "lg": "12",
        "md": "12",
        "sm": "12",
        "cols": "12"
      }
    }, [_c('div', {
      staticClass: "search-component"
    }, [_c('div', {
      staticClass: "inner"
    }, [_c('div', {
      staticClass: "content"
    }, [_c('h4', {
      staticClass: "title-search",
      staticStyle: {
        "cursor": "pointer"
      },
      domProps: {
        "innerHTML": _vm._s(_vm.createText(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn))
      },
      on: {
        "click": function ($event) {
          _vm.clickNew(_vm.$i18n.t('urls.newDetail') + '/' + item.articleId + '/' + item.newsType + '/' + _vm.createUrlComplement(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn));
        }
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "designation",
      domProps: {
        "innerHTML": _vm._s((_vm.language === 'es' ? item.countryName : item.countryName) + ' | ' + _vm.getMonthName(item.publicationDate) + ' ' + _vm.getFullYear(item.publicationDate))
      }
    })])])])]);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/searcher/NewsSearch.vue?vue&type=template&id=1a9bfdc2

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searcher/NewsSearch.vue?vue&type=script&lang=js

/* harmony default export */ var NewsSearchvue_type_script_lang_js = ({
  props: ['items'],
  data() {
    return {
      // items: [],
      validator: false
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setNews']),
    initialize() {
      // this.items = []
      // this.list()
    },
    list() {
      const me = this;
      this.$axios.get('odata/articlesOdata?$select=articleId,articleTitle,articleTitleEn,NewsType,PublicationDate&$count=true&$expand=countries($select=countryName)' + "&$filter=contains(articleTitleEn, '" + this.textToSearch + "') or " + "contains(articleTitle, '" + this.textToSearch + "') or " + "contains(content, '" + this.textToSearch + "') or " + "contains(contentEn, '" + this.textToSearch + "') or " + "contains(countries/countryName, '" + this.textToSearch + "') or " + "contains(countries/countryNameEn, '" + this.textToSearch + "') or " + "contains(articleCategories/categoryName, '" + this.textToSearch + "') or " + "contains(articleCategories/categoryNameEn, '" + this.textToSearch + "') or " + "articleAuthors/any(e: " + "contains(e/lawyers/firtsName, '" + this.textToSearch + "') or " + "contains(e/lawyers/lastName, '" + this.textToSearch + "')) or " + "contains(practiceAreas/practiceAreaName, '" + this.textToSearch + "') or " + "contains(practiceAreas/practiceAreaNameEn, '" + this.textToSearch + "') or " + "contains(practiceAreas/shortPracticeAreaName, '" + this.textToSearch + "') or " + "contains(practiceAreas/shortPracticeAreaNameEn, '" + this.textToSearch + "')").then(response => {
        // me.items = response.data.value
        // me.items = response.data
        me.setNews(response.data.length);
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
    },
    createText(item) {
      const textoEnMinusculas = item.toLowerCase();
      const words = textoEnMinusculas.split(' ');
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      return words.join(' ');
    },
    clickNew(url) {
      window.open(url, '_blank');
    }
  }
});
// CONCATENATED MODULE: ./components/searcher/NewsSearch.vue?vue&type=script&lang=js
 /* harmony default export */ var searcher_NewsSearchvue_type_script_lang_js = (NewsSearchvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/searcher/NewsSearch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  searcher_NewsSearchvue_type_script_lang_js,
  NewsSearchvue_type_template_id_1a9bfdc2_render,
  staticRenderFns,
  false,
  null,
  null,
  "c7052228"
  
)

/* harmony default export */ var NewsSearch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searcher/PracticeAreasSearch.vue?vue&type=template&id=b1a8c6e0



var PracticeAreasSearchvue_type_template_id_b1a8c6e0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    staticClass: "mt--00"
  }, _vm._l(_vm.items, function (item) {
    return _c(VCol["a" /* default */], {
      key: item.id,
      attrs: {
        "lg": "12",
        "md": "12",
        "sm": "12",
        "cols": "12"
      }
    }, [_c('div', {
      staticClass: "search-component"
    }, [_c('div', {
      staticClass: "inner"
    }, [_c('div', {
      staticClass: "content"
    }, [_c('h4', {
      staticClass: "title-search",
      staticStyle: {
        "cursor": "pointer"
      },
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.practiceAreaName : item.practiceAreaNameEn)
      },
      on: {
        "click": function ($event) {
          _vm.clickProfile(_vm.$i18n.t('urls.practiceAreaDetail') + '/' + item.practiceAreaId + '/' + _vm.createUrlComplement(_vm.language === 'es' ? item.practiceAreaName : item.practiceAreaNameEn));
        }
      }
    })])])])]);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/searcher/PracticeAreasSearch.vue?vue&type=template&id=b1a8c6e0

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searcher/PracticeAreasSearch.vue?vue&type=script&lang=js

/* harmony default export */ var PracticeAreasSearchvue_type_script_lang_js = ({
  props: ['items'],
  data() {
    return {
      // items: [],
      validator: false
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setPracticeAreas']),
    initialize() {
      // this.items = []
      // this.list()
    },
    list() {
      const me = this;
      this.$axios.get('odata/PracticeAreasOdata?$select=practiceAreaId,practiceAreaName,practiceAreaNameEn&$count=true' + "&$filter=contains(PracticeAreaName, '" + this.textToSearch + "') or " + "contains(PracticeAreaNameEn, '" + this.textToSearch + "') or " + "contains(ShortPracticeAreaName, '" + this.textToSearch + "') or " + "contains(ShortPracticeAreaNameEn, '" + this.textToSearch + "') or " + "pageInformations/pageParagraphs/any(e: " + "contains(e/pageParagraphTitle, '" + this.textToSearch + "') or " + "contains(e/pageParagraphTitleEn, '" + this.textToSearch + "') or " + "contains(e/firstParagraph, '" + this.textToSearch + "') or " + "contains(e/firstParagraphEn, '" + this.textToSearch + "') or " + "contains(e/secondParagraph, '" + this.textToSearch + "') or " + "contains(e/secondParagraphEn, '" + this.textToSearch + "')) or " + "pageInformations/PageLists/any(e: " + "contains(e/pageListDescription, '" + this.textToSearch + "') or " + "contains(e/pageListDescriptionEn, '" + this.textToSearch + "'))").then(response => {
        // me.items = response.data.value
        me.setPracticeAreas(response.data['@odata.count']);
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
    },
    clickProfile(url) {
      window.open(url, '_blank');
    }
  }
});
// CONCATENATED MODULE: ./components/searcher/PracticeAreasSearch.vue?vue&type=script&lang=js
 /* harmony default export */ var searcher_PracticeAreasSearchvue_type_script_lang_js = (PracticeAreasSearchvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/searcher/PracticeAreasSearch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  searcher_PracticeAreasSearchvue_type_script_lang_js,
  PracticeAreasSearchvue_type_template_id_b1a8c6e0_render,
  staticRenderFns,
  false,
  null,
  null,
  "7f74575c"
  
)

/* harmony default export */ var PracticeAreasSearch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searcher/SectionsSearch.vue?vue&type=template&id=56b8413e



var SectionsSearchvue_type_template_id_56b8413e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    staticClass: "mt--00"
  }, _vm._l(_vm.items, function (item) {
    return _c(VCol["a" /* default */], {
      key: item.id,
      attrs: {
        "lg": "12",
        "md": "12",
        "sm": "12",
        "cols": "12"
      }
    }, [_c('div', {
      staticClass: "search-component"
    }, [_c('div', {
      staticClass: "inner"
    }, [_c('div', {
      staticClass: "content"
    }, [_c('h4', {
      staticClass: "title-search",
      staticStyle: {
        "cursor": "pointer"
      },
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.pageName : item.pageNameEn)
      },
      on: {
        "click": function ($event) {
          _vm.clickProfile(_vm.$i18n.t('urls.page' + item.code));
        }
      }
    })])])])]);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/searcher/SectionsSearch.vue?vue&type=template&id=56b8413e

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searcher/SectionsSearch.vue?vue&type=script&lang=js

/* harmony default export */ var SectionsSearchvue_type_script_lang_js = ({
  props: ['items'],
  data() {
    return {
      // items: [],
      validator: false
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setSections']),
    initialize() {
      // this.items = []
      // this.list()
    },
    list() {
      const me = this;
      this.$axios.get('odata/pagesOdata?$select=code,pageName,pageNameEn&$count=true' + "&$filter=contains(pageName, '" + this.textToSearch + "') or " + "contains(pageNameEn, '" + this.textToSearch + "') or " + "pageInformations/pageParagraphs/any(e: " + "contains(e/pageParagraphTitle, '" + this.textToSearch + "') or " + "contains(e/pageParagraphTitleEn, '" + this.textToSearch + "') or " + "contains(e/firstParagraph, '" + this.textToSearch + "') or " + "contains(e/firstParagraphEn, '" + this.textToSearch + "') or " + "contains(e/secondParagraph, '" + this.textToSearch + "') or " + "contains(e/secondParagraphEn, '" + this.textToSearch + "')) or " + "pageInformations/PageLists/any(e: " + "contains(e/pageListDescription, '" + this.textToSearch + "') or " + "contains(e/pageListDescriptionEn, '" + this.textToSearch + "'))").then(response => {
        // me.items = response.data.value
        me.setSections(response.data['@odata.count']);
      }).catch(error => {
        console.log(error);
      });
    },
    createUrlComplement(item) {
      const textoEnMinusculas = (item.firtsName + ' ' + item.lastName).toLowerCase();
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
    },
    clickProfile(url) {
      window.open(url, '_blank');
    }
  }
});
// CONCATENATED MODULE: ./components/searcher/SectionsSearch.vue?vue&type=script&lang=js
 /* harmony default export */ var searcher_SectionsSearchvue_type_script_lang_js = (SectionsSearchvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/searcher/SectionsSearch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  searcher_SectionsSearchvue_type_script_lang_js,
  SectionsSearchvue_type_template_id_56b8413e_render,
  staticRenderFns,
  false,
  null,
  null,
  "33e3a807"
  
)

/* harmony default export */ var SectionsSearch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(321);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(309);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/searcher/_textToSearch.vue?vue&type=template&id=2b42f1ba



var _textToSearchvue_type_template_id_2b42f1ba_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mt--20 mb--20"
  }, [_vm._ssrNode("<div" + _vm._ssrAttr("hidden", _vm.lawyers.length === 0) + " class=\"author-area bg_color--1 mb--20\">", "</div>", [_c(VContainer["a" /* default */], [_c('h3', {
    staticClass: "heading-title mb-4"
  }, [_vm._v(" " + _vm._s(_vm.$t('searcher.lawyers')))]), _vm._v(" "), _c('LawyersSearch', {
    attrs: {
      "items": _vm.lawyers
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrAttr("hidden", _vm.practiceAreas.length === 0) + " class=\"author-area bg_color--1 mb--20\">", "</div>", [_c(VContainer["a" /* default */], [_c('h3', {
    staticClass: "heading-title mb-4"
  }, [_vm._v(" " + _vm._s(_vm.$t('searcher.practiceAreas')))]), _vm._v(" "), _c('PracticesAreasSearch', {
    attrs: {
      "items": _vm.practiceAreas
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrAttr("hidden", _vm.news.length === 0) + " class=\"author-area bg_color--1 mb--20\">", "</div>", [_c(VContainer["a" /* default */], [_c('h3', {
    staticClass: "heading-title mb-4"
  }, [_vm._v(" " + _vm._s(_vm.$t('searcher.news')))]), _vm._v(" "), _c('NewsSearch', {
    attrs: {
      "items": _vm.news
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrAttr("hidden", _vm.sections.length === 0) + " class=\"author-area bg_color--1 mb--20\">", "</div>", [_c(VContainer["a" /* default */], [_c('h3', {
    staticClass: "heading-title mb-4"
  }, [_vm._v(" " + _vm._s(_vm.$t('searcher.sections')))]), _vm._v(" "), _c('SectionsSearch', {
    attrs: {
      "items": _vm.sections
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm.lawyers.length === 0 && _vm.news.length === 0 && _vm.practiceAreas.length === 0 && _vm.sections.length === 0 ? _c(VContainer["a" /* default */], {
    staticClass: "max-width text-center py-16"
  }, [_c(VChip["a" /* default */], {
    staticClass: "ma-2 my-16"
  }, [_vm._v("\n                " + _vm._s(_vm.$t('common.chipNoData')) + "\n        ")])], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/searcher/_textToSearch.vue?vue&type=template&id=2b42f1ba

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./components/searcher/LawyersSearch.vue + 4 modules
var LawyersSearch = __webpack_require__(433);

// EXTERNAL MODULE: ./components/searcher/NewsSearch.vue + 4 modules
var NewsSearch = __webpack_require__(434);

// EXTERNAL MODULE: ./components/searcher/PracticeAreasSearch.vue + 4 modules
var PracticeAreasSearch = __webpack_require__(435);

// EXTERNAL MODULE: ./components/searcher/SectionsSearch.vue + 4 modules
var SectionsSearch = __webpack_require__(436);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/searcher/_textToSearch.vue?vue&type=script&lang=js





/* harmony default export */ var _textToSearchvue_type_script_lang_js = ({
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
      title: this.$i18n.t('titles.awards')
    };
  },
  components: {
    LawyersSearch: LawyersSearch["default"],
    NewsSearch: NewsSearch["default"],
    PracticesAreasSearch: PracticeAreasSearch["default"],
    SectionsSearch: SectionsSearch["default"]
  },
  // props:['textToSearch'],
  // eslint-disable-next-line require-await
  async asyncData({
    params
  }) {
    const textToSearch = params.textToSearch;
    return {
      textToSearch
    };
  },
  data() {
    return {
      items: [{
        src: "https://www.youtube.com/watch?v=ZOoVOfieAF8"
      }],
      index: null,
      lawyers: [],
      news: [],
      practiceAreas: [],
      sections: [],
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
    ...Object(external_vuex_["mapState"])(['language', 'pageCharge'])
  },
  watch: {
    language(val) {
      if (this.pageCharge) {
        this.$router.push(this.$i18n.t('urls.searcher') + '/' + this.textToSearch);
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
      this.$axios.get('api/PageInformations/GetPageInformationsByCodeFE/14').then(response => {
        me.dataPage = response.data[0];
        // General information
        me.layout.titleEs = me.dataPage.pageInformationTitle;
        me.layout.titleEn = me.dataPage.pageInformationTitleEn;
        me.layout.descriptionEs = me.dataPage.information;
        me.layout.descriptionEn = me.dataPage.informationEn;
        me.layout.image = me.dataPage.imageBanner;
        console.log(me.dataPage.imageBanner);
        me.setLayout(me.layout);
      }).catch(error => {
        console.log(error);
      });
      this.$axios.get('api/Finder/GetFinderController?textToSearch=' + this.cleanText(this.textToSearch)).then(response => {
        me.sections = response.data[0];
        me.practiceAreas = response.data[1];
        me.lawyers = response.data[2];
        me.news = response.data[3];
        me.setChargedPage(true);
      }).catch(error => {
        console.log(error);
      });
    },
    cleanText(item) {
      const vocalesConTilde = 'áéíóúÁÉÍÓÚ';
      const vocalesSinTilde = 'aeiouAEIOU';
      const textoSinTildes = item.replace(new RegExp(`[${vocalesConTilde}]`, 'g'), match => vocalesSinTilde[vocalesConTilde.indexOf(match)]);
      return textoSinTildes;
    }
  }
});
// CONCATENATED MODULE: ./pages/searcher/_textToSearch.vue?vue&type=script&lang=js
 /* harmony default export */ var searcher_textToSearchvue_type_script_lang_js = (_textToSearchvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/searcher/_textToSearch.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(317)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  searcher_textToSearchvue_type_script_lang_js,
  _textToSearchvue_type_template_id_2b42f1ba_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "82561b60"
  
)

/* harmony default export */ var _textToSearch = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_textToSearch.js.map