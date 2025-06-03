exports.ids = [55];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=searcher-practice-areas-search.js.map