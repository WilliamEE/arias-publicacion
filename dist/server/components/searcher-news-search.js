exports.ids = [54];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=searcher-news-search.js.map