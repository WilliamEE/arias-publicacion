exports.ids = [53];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=searcher-lawyers-search.js.map