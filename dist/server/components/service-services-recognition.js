exports.ids = [59];
exports.modules = {

/***/ 422:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/service/ServicesRecognition.vue?vue&type=template&id=0123f978




var ServicesRecognitionvue_type_template_id_0123f978_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row container-memberships"
  }, _vm._l(_vm.serviceContent, function (service, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      staticClass: "mt--20",
      attrs: {
        "lg": "6",
        "md": "6",
        "sm": "12",
        "cols": "12"
      }
    }, [_c('div', {
      staticClass: "single-service service__style__membership bg-color-gray"
    }, [_c('div', {
      staticClass: "service"
    }, [_c(VRow["a" /* default */], {
      staticClass: "row-flex"
    }, [_c(VCol["a" /* default */], {
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
        "src": service.rankingImage
      }
    }), _vm._v(" "), _c(VImg["a" /* default */], {
      staticClass: "bg-blr-image",
      attrs: {
        "src": service.rankingImage
      }
    })], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
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
        "innerHTML": _vm._s(_vm.language === 'es' ? service.rankingName : service.rankingNameEn)
      }
    }), _vm._v(" "), _c('p', {
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? service.rankingDescription : service.rankingDescriptionEn)
      }
    })])])], 1)], 1)])]);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/service/ServicesRecognition.vue?vue&type=template&id=0123f978

// EXTERNAL MODULE: external "feather-icons"
var external_feather_icons_ = __webpack_require__(98);
var external_feather_icons_default = /*#__PURE__*/__webpack_require__.n(external_feather_icons_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/service/ServicesRecognition.vue?vue&type=script&lang=js


/* harmony default export */ var ServicesRecognitionvue_type_script_lang_js = ({
  data() {
    return {
      serviceContent: []
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
      this.$axios.get('api/Rankings/GetRankingsFE').then(response => {
        me.serviceContent = response.data;
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/service/ServicesRecognition.vue?vue&type=script&lang=js
 /* harmony default export */ var service_ServicesRecognitionvue_type_script_lang_js = (ServicesRecognitionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/service/ServicesRecognition.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  service_ServicesRecognitionvue_type_script_lang_js,
  ServicesRecognitionvue_type_template_id_0123f978_render,
  staticRenderFns,
  false,
  null,
  null,
  "b1f3b588"
  
)

/* harmony default export */ var ServicesRecognition = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=service-services-recognition.js.map