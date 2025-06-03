exports.ids = [61,64];
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

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/team/ContentProfile.vue?vue&type=template&id=308bbd22



var ContentProfilevue_type_template_id_308bbd22_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    staticClass: "mt--0"
  }, [_c(VCol["a" /* default */], {
    staticClass: "col-profile-content",
    attrs: {
      "lg": "3",
      "md": "3",
      "sm": "3",
      "cols": "12"
    }
  }, [_vm.practicesAreas.length > 0 ? _c('div', [_c('h3', {
    staticClass: "heading-title mb-0"
  }, [_vm._v(_vm._s(_vm.$t('detailTeam.solutions')))]), _vm._v(" "), _vm._l(_vm.practicesAreas, function (item) {
    return _c('div', {
      staticClass: "button-group mt--10"
    }, [_c('a', {
      staticClass: "btn-transparent rn-btn-dark p-area",
      attrs: {
        "href": _vm.$i18n.t('urls.practiceAreaDetail') + '/' + item.practiceAreaId + '/' + _vm.createUrlComplement(_vm.language === 'es' ? item.practiceAreaName : item.practiceAreaNameEn)
      }
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.practiceAreaName : item.practiceAreaNameEn)
      }
    })])]);
  })], 2) : _vm._e(), _vm._v(" "), _vm.lawyer.lawyerLanguages.length > 0 ? _c('div', [_c('h3', {
    staticClass: "heading-title pt-10"
  }, [_vm._v(_vm._s(_vm.$t('detailTeam.languages')))]), _vm._v(" "), _c('ul', {
    staticClass: "list-style--1"
  }, _vm._l(_vm.lawyer.lawyerLanguages, function (languageItem) {
    return _c('li', [_c('i', {
      domProps: {
        "innerHTML": _vm._s(_vm.iconSvg(_vm.icon))
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "description",
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? languageItem.languages.languageName : languageItem.languages.languageNameEn)
      }
    })]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "col-profile-content",
    attrs: {
      "lg": "9",
      "md": "9",
      "sm": "9",
      "cols": "12"
    }
  }, [_c('h3', {
    staticClass: "heading-title pt-0"
  }, [_vm._v(_vm._s(_vm.$t('detailTeam.experience')))]), _vm._v(" "), _vm.lawyer.lawyerExperiences.length > 0 ? _c('div', _vm._l(_vm.lawyer.lawyerExperiences, function (item) {
    return _c('p', {
      staticClass: "description",
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.information : item.informationEn)
      }
    });
  }), 0) : _vm._e(), _vm._v(" "), _vm.lawyer.lawyerAcademicInfos.length > 0 ? _c('div', [_c('h3', {
    staticClass: "heading-title pt-5"
  }, [_vm._v(_vm._s(_vm.$t('detailTeam.education')))]), _vm._v(" "), _c('ul', {
    staticClass: "list-style--1"
  }, _vm._l(_vm.lawyer.lawyerAcademicInfos, function (item) {
    return _c('li', [_c('i', {
      domProps: {
        "innerHTML": _vm._s(_vm.iconSvg(_vm.icon2))
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "description",
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.information : item.informationEn)
      }
    })]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.lawyer.lawyerMemberships.length > 0 ? _c('div', [_c('h3', {
    staticClass: "heading-title pt-0"
  }, [_vm._v(_vm._s(_vm.$t('detailTeam.memberships')))]), _vm._v(" "), _c('ul', {
    staticClass: "list-style--1"
  }, _vm._l(_vm.lawyer.lawyerMemberships, function (item) {
    return _c('li', [_c('i', {
      domProps: {
        "innerHTML": _vm._s(_vm.iconSvg(_vm.icon2))
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "description",
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.information : item.informationEn)
      }
    })]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.lawyer.lawyerRecognitions.length > 0 ? _c('div', [_c('h3', {
    staticClass: "heading-title pt-0"
  }, [_vm._v(_vm._s(_vm.$t('detailTeam.recognitions')))]), _vm._v(" "), _c('ul', {
    staticClass: "list-style--1"
  }, _vm._l(_vm.lawyer.lawyerRecognitions, function (item) {
    return _c('li', [_c('i', {
      domProps: {
        "innerHTML": _vm._s(_vm.iconSvg(_vm.icon2))
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "description",
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.information : item.informationEn)
      }
    })]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.lawyer.lawyerRecognitionImages.length > 0 ? _c('div', [_c('RecognitionProfile', {
    attrs: {
      "recognitions": _vm.lawyer.lawyerRecognitionImages
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.lawyer.lawyerClientFeedbacks.length > 0 ? _c('div', [_c('h3', {
    staticClass: "heading-title pt-0"
  }, [_vm._v(_vm._s(_vm.$t('detailTeam.feedback')))]), _vm._v(" "), _c('ul', {
    staticClass: "list-style--1"
  }, _vm._l(_vm.lawyer.lawyerClientFeedbacks, function (item) {
    return _c('li', [_c('i', {
      domProps: {
        "innerHTML": _vm._s(_vm.iconSvg(_vm.icon2))
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "description",
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.information : item.informationEn)
      }
    })]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.lawyer.lawyerCommunities.length > 0 ? _c('div', [_c('h3', {
    staticClass: "heading-title pt-0"
  }, [_vm._v(_vm._s(_vm.$t('detailTeam.rol')))]), _vm._v(" "), _c('ul', {
    staticClass: "list-style--1"
  }, _vm._l(_vm.lawyer.lawyerCommunities, function (item) {
    return _c('li', [_c('i', {
      domProps: {
        "innerHTML": _vm._s(_vm.iconSvg(_vm.icon2))
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "description",
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.information : item.informationEn)
      }
    })]);
  }), 0)]) : _vm._e()])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/team/ContentProfile.vue?vue&type=template&id=308bbd22

// EXTERNAL MODULE: external "feather-icons"
var external_feather_icons_ = __webpack_require__(98);
var external_feather_icons_default = /*#__PURE__*/__webpack_require__.n(external_feather_icons_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./components/team/RecognitionProfile.vue + 4 modules
var RecognitionProfile = __webpack_require__(386);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/team/ContentProfile.vue?vue&type=script&lang=js



/* harmony default export */ var ContentProfilevue_type_script_lang_js = ({
  components: {
    RecognitionProfile: RecognitionProfile["default"]
  },
  props: ['lawyer'],
  data() {
    return {
      icon: "check",
      icon2: "chevron-right",
      lawyerRecognitionImages: [],
      practicesAreas: []
    };
  },
  watch: {
    language(val) {
      this.orderData(val);
    }
  },
  mounted() {
    if (this.lawyer) {
      this.listRecognitionImages();
      this.createPracticesAreas();
    }
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
    iconSvg(icon) {
      return external_feather_icons_default.a.icons[icon].toSvg();
    },
    listRecognitionImages() {
      const me = this;
      this.$axios.get('api/LawyerRecognitionImages/GetLawyerRecognitionImagesByLawyerIdFE/' + this.lawyer.lawyerId).then(response => {
        me.lawyerRecognitionImages = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    createPracticesAreas() {
      this.lawyer.lawyerPracticeAreas.forEach(practiceArea => {
        this.practicesAreas.push(practiceArea.practiceAreas);
      });
      this.orderData(this.language);
    },
    orderData(lang) {
      if (lang === 'es') {
        this.practicesAreas.sort((x, y) => x.practiceAreaName.localeCompare(y.practiceAreaName));
      } else {
        this.practicesAreas.sort((x, y) => x.practiceAreaNameEn.localeCompare(y.practiceAreaNameEn));
      }
    },
    createUrlComplement(item) {
      const textoEnMinusculas = item.toLowerCase();
      let textoConGuiones = textoEnMinusculas.replace(/\s+/g, '-');
      textoConGuiones = textoConGuiones.replace(/[^a-zA-Z0-9-]/g, '');
      textoConGuiones = textoConGuiones.replace(/^[^a-zA-Z]+/, '');
      return textoConGuiones;
    }
  }
});
// CONCATENATED MODULE: ./components/team/ContentProfile.vue?vue&type=script&lang=js
 /* harmony default export */ var team_ContentProfilevue_type_script_lang_js = (ContentProfilevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/team/ContentProfile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  team_ContentProfilevue_type_script_lang_js,
  ContentProfilevue_type_template_id_308bbd22_render,
  staticRenderFns,
  false,
  null,
  null,
  "39f3ca79"
  
)

/* harmony default export */ var ContentProfile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=team-content-profile.js.map