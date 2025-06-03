exports.ids = [65];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=team-service-team.js.map