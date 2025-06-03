exports.ids = [49];
exports.modules = {

/***/ 423:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/portfolio/PorfolioServices.vue?vue&type=template&id=78277aa9




var PorfolioServicesvue_type_template_id_78277aa9_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-services"
  }, [_c(VRow["a" /* default */], _vm._l(_vm.practicesAreas, function (item, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      staticClass: "plr_mobile",
      attrs: {
        "lg": "3",
        "md": "3",
        "sm": "4",
        "cols": "12"
      }
    }, [_c('router-link', {
      attrs: {
        "to": _vm.$i18n.t('urls.practiceAreaDetail') + '/' + item.practiceAreaId + '/' + _vm.createUrlComplement(_vm.language === 'es' ? item.practiceAreaName : item.practiceAreaNameEn)
      }
    }, [_c('div', {
      staticClass: "portfolio-services"
    }, [_c('div', {
      staticClass: "thumbnail-inner"
    }, [_c(VImg["a" /* default */], {
      staticClass: "thumbnail",
      attrs: {
        "src": item.practiceAreaImage,
        "loading": "lazy"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('div', {
      staticClass: "inner"
    }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
      staticClass: "inner_col",
      attrs: {
        "sm": "12",
        "cols": "12",
        "align-self": "end"
      }
    }, [_c('h4', {
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.practiceAreaName : item.practiceAreaNameEn)
      }
    })])], 1)], 1)])])])], 1);
  }), 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/portfolio/PorfolioServices.vue?vue&type=template&id=78277aa9

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/portfolio/PorfolioServices.vue?vue&type=script&lang=js

/* harmony default export */ var PorfolioServicesvue_type_script_lang_js = ({
  data() {
    return {
      practicesAreas: [],
      url: ''
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  watch: {
    language(val) {
      this.orderData(val);
      this.url = this.$i18n.t('urls.practiceAreaDetail');
    }
  },
  methods: {
    iconSvg(icon) {
      // eslint-disable-next-line no-undef
      return feather.icons[icon].toSvg();
    },
    initialize() {
      this.list();
    },
    list() {
      const me = this;
      this.$axios.get('api/PracticeAreas/GetPracticeAreasFE').then(response => {
        me.practicesAreas = response.data;
        this.orderData(this.language);
      }).catch(error => {
        console.log(error);
      });
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
// CONCATENATED MODULE: ./components/portfolio/PorfolioServices.vue?vue&type=script&lang=js
 /* harmony default export */ var portfolio_PorfolioServicesvue_type_script_lang_js = (PorfolioServicesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/portfolio/PorfolioServices.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  portfolio_PorfolioServicesvue_type_script_lang_js,
  PorfolioServicesvue_type_template_id_78277aa9_render,
  staticRenderFns,
  false,
  null,
  null,
  "e28a5264"
  
)

/* harmony default export */ var PorfolioServices = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=portfolio-porfolio-services.js.map