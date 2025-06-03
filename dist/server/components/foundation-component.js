exports.ids = [34];
exports.modules = {

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/foundation/FoundationComponent.vue?vue&type=template&id=2396cca5


var FoundationComponentvue_type_template_id_2396cca5_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row mt_dec--30"
  }, [_c(VCol["a" /* default */], {
    staticClass: "mt--30 mt_sm--5 mt_md--5 mt-4",
    attrs: {
      "lg": "4",
      "md": "4",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "single-service service__style__foundation text-center"
  }, [_c('div', {
    staticClass: "service"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h3', {
    staticClass: "heading-title"
  }, [_vm._v(_vm._s(_vm.$t('aboutUs.titlePurpose')))]), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.serviceContent.purposeESP : _vm.serviceContent.purposeENG)
    }
  })])])])]), _vm._ssrNode(" "), _c(VCol["a" /* default */], {
    staticClass: "mt--30 mt_sm--5 mt_md--5 mt-4",
    attrs: {
      "lg": "4",
      "md": "4",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "single-service service__style__foundation text-center"
  }, [_c('div', {
    staticClass: "service"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h3', {
    staticClass: "heading-title"
  }, [_vm._v(_vm._s(_vm.$t('aboutUs.titleMission')))]), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.serviceContent.misionESP : _vm.serviceContent.misionENG)
    }
  })])])])]), _vm._ssrNode(" "), _c(VCol["a" /* default */], {
    staticClass: "mt--30 mt_sm--5 mt_md--5 mt-4",
    attrs: {
      "lg": "4",
      "md": "4",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "single-service service__style__foundation text-center"
  }, [_c('div', {
    staticClass: "service"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h3', {
    staticClass: "heading-title"
  }, [_vm._v(_vm._s(_vm.$t('aboutUs.titleVision')))]), _vm._v(" "), _c('p', {
    staticClass: "description",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.serviceContent.visionESP : _vm.serviceContent.visionENG)
    }
  })])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/foundation/FoundationComponent.vue?vue&type=template&id=2396cca5

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: external "feather-icons"
var external_feather_icons_ = __webpack_require__(98);
var external_feather_icons_default = /*#__PURE__*/__webpack_require__.n(external_feather_icons_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/foundation/FoundationComponent.vue?vue&type=script&lang=js


/* harmony default export */ var FoundationComponentvue_type_script_lang_js = ({
  data() {
    return {
      serviceContent: {}
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
    iconSvg(icon) {
      return external_feather_icons_default.a.icons[icon].toSvg();
    },
    initialize() {
      this.list();
    },
    list() {
      const me = this;
      this.$axios.get('api/GeneralValues/GetGeneralValuesFE').then(response => {
        me.serviceContent = response.data;
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/foundation/FoundationComponent.vue?vue&type=script&lang=js
 /* harmony default export */ var foundation_FoundationComponentvue_type_script_lang_js = (FoundationComponentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/foundation/FoundationComponent.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  foundation_FoundationComponentvue_type_script_lang_js,
  FoundationComponentvue_type_template_id_2396cca5_render,
  staticRenderFns,
  false,
  null,
  null,
  "5cd0dea7"
  
)

/* harmony default export */ var FoundationComponent = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=foundation-component.js.map