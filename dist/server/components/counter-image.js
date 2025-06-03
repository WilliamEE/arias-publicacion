exports.ids = [29];
exports.modules = {

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/counter/CounterImage.vue?vue&type=template&id=ef9c24c4



var CounterImagevue_type_template_id_ef9c24c4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], _vm._l(_vm.data, function (counter, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      attrs: {
        "lg": "4",
        "md": "4",
        "sm": "4",
        "cols": "12"
      }
    }, [_c('div', {
      staticClass: "rn-counterup counterup_style--1"
    }, [_c('h5', {
      class: counter.plusIcon === false ? 'counter' : 'counter plus-counter'
    }, [_c('div', {
      directives: [{
        name: "observe-visibility",
        rawName: "v-observe-visibility",
        value: _vm.onChange,
        expression: "onChange"
      }]
    }, [_c('countTo', {
      attrs: {
        "end-val": _vm.status ? counter.quantity : 0,
        "autoplay": _vm.countUp,
        "duration": 3000
      }
    })], 1)]), _vm._v(" "), _c('p', {
      staticClass: "description",
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? counter.descriptionESP : counter.descriptionENG)
      }
    })])]);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/counter/CounterImage.vue?vue&type=template&id=ef9c24c4

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(301);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/counter/CounterImage.vue?vue&type=script&lang=js
// import { VisibilitySensor } from "vue-visibility-sensor";


/* harmony default export */ var CounterImagevue_type_script_lang_js = ({
  props: ['data'],
  components: {
    countTo: external_vue_count_to_default.a
  },
  data() {
    return {
      countUp: true,
      status: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
    onChange(isVisible) {
      if (isVisible) {
        this.status = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/counter/CounterImage.vue?vue&type=script&lang=js
 /* harmony default export */ var counter_CounterImagevue_type_script_lang_js = (CounterImagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/counter/CounterImage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  counter_CounterImagevue_type_script_lang_js,
  CounterImagevue_type_template_id_ef9c24c4_render,
  staticRenderFns,
  false,
  null,
  null,
  "4906d725"
  
)

/* harmony default export */ var CounterImage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=counter-image.js.map