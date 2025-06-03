exports.ids = [64];
exports.modules = {

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/team/RecognitionProfile.vue?vue&type=template&id=761690f0



var RecognitionProfilevue_type_template_id_761690f0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "slick-space-gutter--15"
  }, [_c('client-only', [_c('slick', {
    staticClass: "rn-slick-activation slick-dotted rn-slick-dot pb--25",
    attrs: {
      "options": _vm.slickOptions
    }
  }, _vm._l(_vm.recognitions, function (item, i) {
    return _c('div', {
      key: i,
      staticClass: "blog blog-style--1"
    }, [_c('div', {
      staticClass: "thumbnail"
    }, [_c('img', {
      staticClass: "w-100",
      attrs: {
        "src": item.recognitionImage,
        "alt": "Blog Images"
      }
    })])]);
  }), 0)], 1)], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/team/RecognitionProfile.vue?vue&type=template&id=761690f0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/team/RecognitionProfile.vue?vue&type=script&lang=js
// import VueSlickCarousel from "vue-slick-carousel";
/* harmony default export */ var RecognitionProfilevue_type_script_lang_js = ({
  props: ['recognitions'],
  components: {
    // VueSlickCarousel,
  },
  data() {
    return {
      // for all works
      slickOptions: {
        dots: true,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }]
      }
      // slickOptions: {
      //   arows: false,
      //   slidesToShow: 3
      // }
    };
  }
});
// CONCATENATED MODULE: ./components/team/RecognitionProfile.vue?vue&type=script&lang=js
 /* harmony default export */ var team_RecognitionProfilevue_type_script_lang_js = (RecognitionProfilevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/team/RecognitionProfile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  team_RecognitionProfilevue_type_script_lang_js,
  RecognitionProfilevue_type_template_id_761690f0_render,
  staticRenderFns,
  false,
  null,
  null,
  "5512cbfb"
  
)

/* harmony default export */ var RecognitionProfile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=team-recognition-profile.js.map