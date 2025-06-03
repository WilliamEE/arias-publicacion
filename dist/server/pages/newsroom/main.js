exports.ids = [10,25,26];
exports.modules = {

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(318);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("d4fee01e", content, true, context)
};

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_index_css_vue_type_style_index_0_prod_lang_css_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(316);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_index_css_vue_type_style_index_0_prod_lang_css_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_index_css_vue_type_style_index_0_prod_lang_css_external__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_index_css_vue_type_style_index_0_prod_lang_css_external__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_index_css_vue_type_style_index_0_prod_lang_css_external__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".svg-map{height:auto;width:100%;stroke:#666;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.svg-map__location{fill:#a1d99b;cursor:pointer}.svg-map__location:focus,.svg-map__location:hover{fill:#b8e2b3;outline:0}.svg-map__location[aria-checked=true]{fill:#f4bc44}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/BlogNewsletter.vue?vue&type=template&id=44115d4f



var BlogNewslettervue_type_template_id_44115d4f_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], [_vm._l(_vm.blogContent, function (item, i) {
    return _c(VCol["a" /* default */], {
      key: i,
      attrs: {
        "lg": "3",
        "md": "3",
        "sm": "3",
        "cols": "12"
      }
    }, [_c('div', {
      staticClass: "blog blog-style--2"
    }, [_c('div', {
      staticClass: "thumbnail"
    }, [_c('router-link', {
      attrs: {
        "to": _vm.$i18n.t('urls.newsletterNew') + '/' + item.newsletterId
      }
    }, [_c('img', {
      staticClass: "w-100",
      attrs: {
        "src": _vm.language === 'es' ? item.newsletterImage : item.newsletterImageEn,
        "alt": "Blog Images"
      }
    })])], 1)])]);
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "lg": "12",
      "md": "12",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "text-center mt-8"
  }, [_c('a', {
    staticClass: "rn-button-style--2 btn_border btn-size-md px-8",
    attrs: {
      "href": _vm.url
    }
  }, [_vm._v(_vm._s(_vm.$t('common.btnReadAll')))])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/blog/BlogNewsletter.vue?vue&type=template&id=44115d4f

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/BlogNewsletter.vue?vue&type=script&lang=js

/* harmony default export */ var BlogNewslettervue_type_script_lang_js = ({
  props: ['blogContent', 'url'],
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  }
});
// CONCATENATED MODULE: ./components/blog/BlogNewsletter.vue?vue&type=script&lang=js
 /* harmony default export */ var blog_BlogNewslettervue_type_script_lang_js = (BlogNewslettervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/blog/BlogNewsletter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogNewslettervue_type_script_lang_js,
  BlogNewslettervue_type_template_id_44115d4f_render,
  staticRenderFns,
  false,
  null,
  null,
  "92145ac2"
  
)

/* harmony default export */ var BlogNewsletter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(309);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newsroom/main.vue?vue&type=template&id=cada7dca




var mainvue_type_template_id_cada7dca_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"rn-blog-area rn-section-gapTop bg_color--1 pt-16\">", "</div>", [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], {
    staticClass: "mb--20",
    attrs: {
      "align": "end"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "lg": "12",
      "md": "12",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-title text-center"
  }, [_c('h1', {
    staticClass: "heading-title",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.aboutData.titleEs : _vm.aboutData.titleEn)
    }
  }), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.aboutData.firstParagraphEs : _vm.aboutData.firstParagraphEn)
    }
  })])])], 1), _vm._v(" "), _c('News', {
    attrs: {
      "blog-content": _vm.news,
      "url": _vm.$i18n.t('urls.newsroomNews'),
      "news-type": 1
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"rn-blog-area rn-section-gapTop bg_color--1 pt-16\">", "</div>", [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], {
    staticClass: "mb--20",
    attrs: {
      "align": "end"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "lg": "12",
      "md": "12",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-title text-center"
  }, [_c('h2', {
    staticClass: "heading-title",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.aboutData2.titleEs : _vm.aboutData2.titleEn)
    }
  }), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.aboutData2.firstParagraphEs : _vm.aboutData2.firstParagraphEn)
    }
  })])])], 1), _vm._v(" "), _c('News', {
    attrs: {
      "blog-content": _vm.knowledgeCenterNews,
      "url": _vm.$i18n.t('urls.newsroomKnowledgecenter'),
      "news-type": 2
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"rn-blog-area rn-section-gapTop bg_color--1 pt-16 mb-16\">", "</div>", [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], {
    staticClass: "mb--20",
    attrs: {
      "align": "end"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "lg": "12",
      "md": "12",
      "sm": "12",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-title text-center"
  }, [_c('h2', {
    staticClass: "heading-title",
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.aboutData3.titleEs : _vm.aboutData3.titleEn)
    }
  }), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.language === 'es' ? _vm.aboutData3.firstParagraphEs : _vm.aboutData3.firstParagraphEn)
    }
  })])])], 1), _vm._v(" "), _c('BlogNewsletter', {
    attrs: {
      "blog-content": _vm.newsLetterNews,
      "url": _vm.$i18n.t('urls.newsroomNewsletter')
    }
  })], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/newsroom/main.vue?vue&type=template&id=cada7dca

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./components/blog/Blog.vue + 4 modules
var Blog = __webpack_require__(355);

// EXTERNAL MODULE: ./components/blog/BlogNewsletter.vue + 4 modules
var BlogNewsletter = __webpack_require__(416);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newsroom/main.vue?vue&type=script&lang=js



/* harmony default export */ var mainvue_type_script_lang_js = ({
  head() {
    return {
      htmlAttrs: {
        lang: this.$route.params.language
      },
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.$route.params.language === 'es' ? this.layout.titleEs + ' ' + this.layout.descriptionEs : this.layout.titleEn + ' ' + this.layout.descriptionEn
      }],
      title: this.$i18n.t('titles.newsroom')
    };
  },
  components: {
    BlogNewsletter: BlogNewsletter["default"],
    News: Blog["default"]
  },
  data() {
    return {
      urlNews: "/newsroom/news",
      urlNewsletter: "/newsroom/newsletter",
      urlKnowledge: "/newsroom/knowledgecenter",
      items: [{
        src: "https://www.youtube.com/watch?v=ZOoVOfieAF8"
      }],
      news: [],
      knowledgeCenterNews: [],
      newsLetterNews: [],
      index: null,
      layout: {
        type: 2,
        titleEs: '',
        titleEn: '',
        descriptionEs: '',
        descriptionEn: '',
        image: ''
      },
      aboutData: {
        titleEs: '',
        titleEn: '',
        firstParagraphEs: '',
        firstParagraphEn: ''
      },
      aboutData2: {
        titleEs: '',
        titleEn: '',
        firstParagraphEs: '',
        firstParagraphEn: ''
      },
      aboutData3: {
        titleEs: '',
        titleEn: '',
        firstParagraphEs: '',
        firstParagraphEn: ''
      }
    };
  },
  async mounted() {},
  created() {
    this.setChargedPage(false);
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language', 'pageCharge'])
  },
  watch: {
    language(val) {
      if (this.pageCharge) {
        this.$router.push(this.$i18n.t('urls.newsroomMain'));
      }
    }
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setLayout', 'setChargedPage']),
    async initialize() {
      await this.list();
      await this.listNews();
      await this.listKnowledge();
      await this.listNewsletter();
      this.setChargedPage(true);
    },
    async list() {
      const me = this;
      await this.$axios.get('api/PageInformations/GetPageInformationsByCodeFE/9').then(response => {
        me.dataPage = response.data[0];
        // General information
        me.layout.titleEs = me.dataPage.pageInformationTitle;
        me.layout.titleEn = me.dataPage.pageInformationTitleEn;
        me.layout.descriptionEs = me.dataPage.information;
        me.layout.descriptionEn = me.dataPage.informationEn;
        me.layout.image = me.dataPage.imageBanner;
        me.setLayout(me.layout);

        // About Us first paragraph
        me.aboutData.titleEs = me.dataPage.pageParagraphs[0].pageParagraphTitle;
        me.aboutData.titleEn = me.dataPage.pageParagraphs[0].pageParagraphTitleEn;
        me.aboutData.firstParagraphEs = me.dataPage.pageParagraphs[0].firstParagraph;
        me.aboutData.firstParagraphEn = me.dataPage.pageParagraphs[0].firstParagraphEn;

        // About Us first paragraph
        me.aboutData2.titleEs = me.dataPage.pageParagraphs[1].pageParagraphTitle;
        me.aboutData2.titleEn = me.dataPage.pageParagraphs[1].pageParagraphTitleEn;
        me.aboutData2.firstParagraphEs = me.dataPage.pageParagraphs[1].firstParagraph;
        me.aboutData2.firstParagraphEn = me.dataPage.pageParagraphs[1].firstParagraphEn;

        // About Us first paragraph
        me.aboutData3.titleEs = me.dataPage.pageParagraphs[2].pageParagraphTitle;
        me.aboutData3.titleEn = me.dataPage.pageParagraphs[2].pageParagraphTitleEn;
        me.aboutData3.firstParagraphEs = me.dataPage.pageParagraphs[2].firstParagraph;
        me.aboutData3.firstParagraphEn = me.dataPage.pageParagraphs[2].firstParagraphEn;
      }).catch(error => {
        console.log(error);
      });
    },
    async listNews() {
      const me = this;
      await this.$axios.get('api/Articles/GetArticlesPaginatedFE/1/1/3').then(response => {
        me.news = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    async listKnowledge() {
      const me = this;
      await this.$axios.get('api/Articles/GetArticlesPaginatedFE/2/1/3').then(response => {
        me.knowledgeCenterNews = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    async listNewsletter() {
      const me = this;
      await this.$axios.get('api/Newsletters/GetNewslettersPaginatedFE/1/4').then(response => {
        me.newsLetterNews = response.data;
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/newsroom/main.vue?vue&type=script&lang=js
 /* harmony default export */ var newsroom_mainvue_type_script_lang_js = (mainvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/newsroom/main.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(317)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  newsroom_mainvue_type_script_lang_js,
  mainvue_type_template_id_cada7dca_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "59891222"
  
)

/* harmony default export */ var main = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlogNewsletter: __webpack_require__(416).default})


/***/ })

};;
//# sourceMappingURL=main.js.map