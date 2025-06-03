exports.ids = [35];
exports.modules = {

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardActions; });
/* unused harmony export VCardSubtitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(292);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(396);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("e8a466fa", content, true)

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{border-radius:50%;outline:none;padding:.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(291);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VRating/VRating.sass
var VRating = __webpack_require__(395);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/delayable/index.js
var delayable = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/sizeable/index.js
var sizeable = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(28);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/rippleable/index.js
// Directives
 // Types


/* harmony default export */ var rippleable = (external_vue_default.a.extend({
  name: 'rippleable',
  directives: {
    ripple: ripple["a" /* default */]
  },
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  methods: {
    genRipple(data = {}) {
      if (!this.ripple) return null;
      data.staticClass = 'v-input--selection-controls__ripple';
      data.directives = data.directives || [];
      data.directives.push({
        name: 'ripple',
        value: {
          center: true
        }
      });
      return this.$createElement('div', data);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js
// Styles
 // Components

 // Mixins





 // Utilities



/* @vue/component */

/* harmony default export */ var VRating_VRating = (Object(mixins["a" /* default */])(colorable["a" /* default */], delayable["a" /* default */], rippleable, sizeable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-rating',
  props: {
    backgroundColor: {
      type: String,
      default: 'accent'
    },
    color: {
      type: String,
      default: 'primary'
    },
    clearable: Boolean,
    dense: Boolean,
    emptyIcon: {
      type: String,
      default: '$ratingEmpty'
    },
    fullIcon: {
      type: String,
      default: '$ratingFull'
    },
    halfIcon: {
      type: String,
      default: '$ratingHalf'
    },
    halfIncrements: Boolean,
    hover: Boolean,
    length: {
      type: [Number, String],
      default: 5
    },
    readonly: Boolean,
    size: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    iconLabel: {
      type: String,
      default: '$vuetify.rating.ariaLabel.icon'
    }
  },
  data() {
    return {
      hoverIndex: -1,
      internalValue: this.value
    };
  },
  computed: {
    directives() {
      if (this.readonly || !this.ripple) return [];
      return [{
        name: 'ripple',
        value: {
          circle: true
        }
      }];
    },
    iconProps() {
      const {
        dark,
        large,
        light,
        medium,
        small,
        size,
        xLarge,
        xSmall
      } = this.$props;
      return {
        dark,
        large,
        light,
        medium,
        size,
        small,
        xLarge,
        xSmall
      };
    },
    isHovering() {
      return this.hover && this.hoverIndex >= 0;
    }
  },
  watch: {
    internalValue(val) {
      val !== this.value && this.$emit('input', val);
    },
    value(val) {
      this.internalValue = val;
    }
  },
  methods: {
    createClickFn(i) {
      return e => {
        if (this.readonly) return;
        const newValue = this.genHoverIndex(e, i);
        if (this.clearable && this.internalValue === newValue) {
          this.internalValue = 0;
        } else {
          this.internalValue = newValue;
        }
      };
    },
    createProps(i) {
      const props = {
        index: i,
        value: this.internalValue,
        click: this.createClickFn(i),
        isFilled: Math.floor(this.internalValue) > i,
        isHovered: Math.floor(this.hoverIndex) > i
      };
      if (this.halfIncrements) {
        props.isHalfHovered = !props.isHovered && (this.hoverIndex - i) % 1 > 0;
        props.isHalfFilled = !props.isFilled && (this.internalValue - i) % 1 > 0;
      }
      return props;
    },
    genHoverIndex(e, i) {
      let isHalf = this.isHalfEvent(e);
      if (this.halfIncrements && this.$vuetify.rtl) {
        isHalf = !isHalf;
      }
      return i + (isHalf ? 0.5 : 1);
    },
    getIconName(props) {
      const isFull = this.isHovering ? props.isHovered : props.isFilled;
      const isHalf = this.isHovering ? props.isHalfHovered : props.isHalfFilled;
      return isFull ? this.fullIcon : isHalf ? this.halfIcon : this.emptyIcon;
    },
    getColor(props) {
      if (this.isHovering) {
        if (props.isHovered || props.isHalfHovered) return this.color;
      } else {
        if (props.isFilled || props.isHalfFilled) return this.color;
      }
      return this.backgroundColor;
    },
    isHalfEvent(e) {
      if (this.halfIncrements) {
        const rect = e.target && e.target.getBoundingClientRect();
        if (rect && e.pageX - rect.left < rect.width / 2) return true;
      }
      return false;
    },
    onMouseEnter(e, i) {
      this.runDelay('open', () => {
        this.hoverIndex = this.genHoverIndex(e, i);
      });
    },
    onMouseLeave() {
      this.runDelay('close', () => this.hoverIndex = -1);
    },
    genItem(i) {
      const props = this.createProps(i);
      if (this.$scopedSlots.item) return this.$scopedSlots.item(props);
      const listeners = {
        click: props.click
      };
      if (this.hover) {
        listeners.mouseenter = e => this.onMouseEnter(e, i);
        listeners.mouseleave = this.onMouseLeave;
        if (this.halfIncrements) {
          listeners.mousemove = e => this.onMouseEnter(e, i);
        }
      }
      return this.$createElement(VIcon["a" /* default */], this.setTextColor(this.getColor(props), {
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.iconLabel, i + 1, Number(this.length))
        },
        directives: this.directives,
        props: this.iconProps,
        on: listeners
      }), [this.getIconName(props)]);
    }
  },
  render(h) {
    const children = Object(helpers["h" /* createRange */])(Number(this.length)).map(i => this.genItem(i));
    return h('div', {
      staticClass: 'v-rating',
      class: {
        'v-rating--readonly': this.readonly,
        'v-rating--dense': this.dense
      }
    }, children);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/infography/Infography.vue?vue&type=template&id=0285428c






var Infographyvue_type_template_id_0285428c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], _vm._l(_vm.infographies, function (infography) {
    return _c(VCol["a" /* default */], {
      key: infography.id,
      attrs: {
        "cols": "12"
      }
    }, [_c('div', {
      directives: [{
        name: "observe-visibility",
        rawName: "v-observe-visibility",
        value: _vm.onChange,
        expression: "onChange"
      }]
    }, [_c('div', {
      staticClass: "rn-infography-content"
    }, [_c(VCard["a" /* default */], {
      staticClass: "v-card",
      attrs: {
        "flat": ""
      }
    }, [_c(components_VCard["b" /* VCardText */], [_c(VRow["a" /* default */], {
      staticClass: "inner"
    }, [_c(VCol["a" /* default */], {
      staticClass: "col-text",
      attrs: {
        "xs": "12",
        "sm": "12",
        "md": "3",
        "lg": "3",
        "cols": "12"
      }
    }, [_c('h2', {
      domProps: {
        "innerHTML": _vm._s(infography.percentage + '%')
      }
    }), _vm._v(" "), _c('p', {
      domProps: {
        "innerHTML": _vm._s(_vm.language === 'es' ? infography.diversityDescription : infography.diversityDescriptionEn)
      }
    })]), _vm._v(" "), _c(VCol["a" /* default */], {
      staticClass: "col-infography hidden-xs-only",
      attrs: {
        "xs": "12",
        "sm": "12",
        "md": "9",
        "lg": "9",
        "cols": "12"
      }
    }, [_c(VRating_VRating, {
      staticClass: "rating",
      attrs: {
        "color": "primary",
        "empty-icon": "$Man",
        "full-icon": "$Woman",
        "length": _vm.lengthBase,
        "size": "120",
        "value": _vm.calculate(infography.percentage),
        "readonly": ""
      }
    })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
      staticClass: "col-infography hidden-sm-and-up",
      attrs: {
        "xs": "12",
        "sm": "12",
        "md": "9",
        "lg": "9",
        "cols": "12"
      }
    }, [_c(VRating_VRating, {
      staticClass: "rating",
      attrs: {
        "empty-icon": "$Man",
        "full-icon": "$Woman",
        "length": "5",
        "size": "120",
        "value": _vm.calculateMobiles(infography.percentage, 1),
        "readonly": ""
      }
    })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
      staticClass: "col-infography hidden-sm-and-up",
      attrs: {
        "xs": "12",
        "sm": "12",
        "md": "9",
        "lg": "9",
        "cols": "12"
      }
    }, [_c(VRating_VRating, {
      staticClass: "rating",
      attrs: {
        "empty-icon": "$Man",
        "full-icon": "$Woman",
        "length": "5",
        "size": "120",
        "value": _vm.calculateMobiles(infography.percentage, 2),
        "readonly": ""
      }
    })], 1)], 1)], 1)], 1)], 1)])]);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/infography/Infography.vue?vue&type=template&id=0285428c

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/infography/Infography.vue?vue&type=script&lang=js

/* harmony default export */ var Infographyvue_type_script_lang_js = ({
  components: {},
  data() {
    return {
      firstVisible: false,
      tab: null,
      lengthBase: 10,
      counter: 0,
      colorsWoman: ['#EDD2D3', '#EBBBBC', '#EAA5A7', '#E88F90', '#E67A7C', '#E46466', '#E34D50', '#E13639', '#DE1519'],
      colorsMan: ['#DFDFDF', '#D1D1D3', '#C4C4C6', '#B6B7B9', '#A8A9AC', '#9B9C9F', '#8E8E92', '#808185', '#6D6E73'],
      infographies: []
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language'])
  },
  watch: {
    firstVisible(val) {
      if (val) {
        this.animation();
      }
    }
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setRatingColor']),
    initialize() {
      this.list();
    },
    list() {
      const me = this;
      this.$axios.get('api/Diversities/GetDiversitiesFE').then(response => {
        me.infographies = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    onChange(isVisible) {
      if (isVisible && !this.firstVisible) {
        this.firstVisible = true;
      }
    },
    animation() {
      for (let i = 1; i < 10; i++) {
        setTimeout(this.suma, i * 60);
      }
    },
    suma() {
      const rating = {
        color1: this.colorsWoman[this.counter],
        color2: this.colorsMan[this.counter]
      };
      this.setRatingColor(rating);
      this.counter = this.counter + 1;
      // console.log('Hola mundo')
    },
    calculate(number) {
      const quantity = Math.round(number / 100 * 10);
      return quantity;
    },
    calculateMobiles(number, type) {
      let quantity = Math.round(number / 100 * 10);
      if (type === 2) {
        quantity = quantity - 5;
      }
      return quantity;
    }
  }
});
// CONCATENATED MODULE: ./components/infography/Infography.vue?vue&type=script&lang=js
 /* harmony default export */ var infography_Infographyvue_type_script_lang_js = (Infographyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/infography/Infography.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  infography_Infographyvue_type_script_lang_js,
  Infographyvue_type_template_id_0285428c_render,
  staticRenderFns,
  false,
  null,
  null,
  "1ef880e6"
  
)

/* harmony default export */ var Infography = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=infography.js.map