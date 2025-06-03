exports.ids = [25];
exports.modules = {

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/Blog.vue?vue&type=template&id=3bab7bc9



var Blogvue_type_template_id_3bab7bc9_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], [_vm._l(_vm.blogContent, function (item, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      attrs: {
        "lg": "4",
        "md": "4",
        "sm": "4",
        "cols": "12"
      }
    }, [_c('div', {
      staticClass: "blog blog-style--1"
    }, [_c('div', {
      staticClass: "thumbnail"
    }, [_c('router-link', {
      attrs: {
        "to": _vm.$i18n.t('urls.newDetail') + '/' + item.articleId + '/' + _vm.newsType + '/' + _vm.createUrlComplement(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      }
    }, [_c('img', {
      staticClass: "w-100",
      attrs: {
        "src": item.articleImage,
        "alt": "Blog Images"
      }
    })])], 1), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('p', {
      staticClass: "blogtype",
      domProps: {
        "innerHTML": _vm._s((_vm.language === 'es' ? item.countries.countryName : item.countries.countryName) + ' | ' + (_vm.language === 'es' ? item.practiceAreas.shortPracticeAreaName : item.practiceAreas.shortPracticeAreaNameEn))
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "blogtype-date",
      domProps: {
        "innerHTML": _vm._s(_vm.getMonthName(item.publicationDate) + ' ' + _vm.getFullYear(item.publicationDate))
      }
    }), _vm._v(" "), _c('h4', {
      staticClass: "heading-title"
    }, [_c('router-link', {
      attrs: {
        "to": _vm.$i18n.t('urls.newDetail') + '/' + item.articleId + '/' + _vm.newsType + '/' + _vm.createUrlComplement(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      },
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "blog-btn"
    }, [_c('router-link', {
      staticClass: "rn-btn white--text",
      attrs: {
        "to": _vm.$i18n.t('urls.newDetail') + '/' + item.articleId + '/' + _vm.newsType + '/' + _vm.createUrlComplement(_vm.language === 'es' ? item.articleTitle : item.articleTitleEn)
      }
    }, [_vm._v("\n            " + _vm._s(_vm.$t('common.btnReadMore')) + "\n            ")])], 1)])])]);
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "lg": "12",
      "md": "12",
      "sm": "12",
      "cols": "12",
      "hidden": !_vm.url
    }
  }, [_c('div', {
    staticClass: "text-center mt-8"
  }, [_c('a', {
    staticClass: "rn-button-style--2 btn_border btn-size-md px-8",
    attrs: {
      "href": _vm.url
    }
  }, [_vm._v(" \n        " + _vm._s(_vm.$t('common.btnReadAll')) + "\n      ")])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/blog/Blog.vue?vue&type=template&id=3bab7bc9

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/Blog.vue?vue&type=script&lang=js

/* harmony default export */ var Blogvue_type_script_lang_js = ({
  props: ['blogContent', 'url', 'newsType'],
  created() {},
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  methods: {
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
    }
  }
});
// CONCATENATED MODULE: ./components/blog/Blog.vue?vue&type=script&lang=js
 /* harmony default export */ var blog_Blogvue_type_script_lang_js = (Blogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/blog/Blog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_Blogvue_type_script_lang_js,
  Blogvue_type_template_id_3bab7bc9_render,
  staticRenderFns,
  false,
  null,
  null,
  "2a3fb074"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog.js.map