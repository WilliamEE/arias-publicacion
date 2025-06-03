exports.ids = [63];
exports.modules = {

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return intersectable; });
/* harmony import */ var _directives_intersect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
// Directives
 // Utilities

 // Types


function intersectable(options) {
  return vue__WEBPACK_IMPORTED_MODULE_2___default.a.extend({
    name: 'intersectable',
    data: () => ({
      isIntersecting: false
    }),
    mounted() {
      _directives_intersect__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].inserted(this.$el, {
        name: 'intersect',
        value: this.onObserve
      }, this.$vnode);
    },
    destroyed() {
      _directives_intersect__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].unbind(this.$el, {
        name: 'intersect',
        value: this.onObserve
      }, this.$vnode);
    },
    methods: {
      onObserve(entries, observer, isIntersecting) {
        this.isIntersecting = isIntersecting;
        if (!isIntersecting) return;
        for (let i = 0, length = options.onVisible.length; i < length; i++) {
          const callback = this[options.onVisible[i]];
          if (typeof callback === 'function') {
            callback();
            continue;
          }
          Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleWarn */ "c"])(options.onVisible[i] + ' method is not available on the instance but referenced in intersectable mixin options');
        }
      }
    }
  });
}

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0);
// Styles

 // Components


 // Mixins






 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "a"])('chipGroup'), Object(_mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__[/* factory */ "b"])('inputValue')).extend({
  name: 'v-chip',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    activeClass: {
      type: String,
      default() {
        if (!this.chipGroup) return '';
        return this.chipGroup.activeClass;
      }
    },
    close: Boolean,
    closeIcon: {
      type: String,
      default: '$delete'
    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    disabled: Boolean,
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: '$complete'
    },
    label: Boolean,
    link: Boolean,
    outlined: Boolean,
    pill: Boolean,
    tag: {
      type: String,
      default: 'span'
    },
    textColor: String,
    value: null
  },
  data: () => ({
    proxyClass: 'v-chip--active'
  }),
  computed: {
    classes() {
      return {
        'v-chip': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.classes.call(this),
        'v-chip--clickable': this.isClickable,
        'v-chip--disabled': this.disabled,
        'v-chip--draggable': this.draggable,
        'v-chip--label': this.label,
        'v-chip--link': this.isLink,
        'v-chip--no-color': !this.color,
        'v-chip--outlined': this.outlined,
        'v-chip--pill': this.pill,
        'v-chip--removable': this.hasClose,
        ...this.themeClasses,
        ...this.sizeableClasses,
        ...this.groupClasses
      };
    },
    hasClose() {
      return Boolean(this.close);
    },
    isClickable() {
      return Boolean(_mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.isClickable.call(this) || this.chipGroup);
    }
  },
  created() {
    const breakingProps = [['outline', 'outlined'], ['selected', 'input-value'], ['value', 'active'], ['@input', '@active.sync']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(_util_console__WEBPACK_IMPORTED_MODULE_10__[/* breaking */ "a"])(original, replacement, this);
    });
  },
  methods: {
    click(e) {
      this.$emit('click', e);
      this.chipGroup && this.toggle();
    },
    genFilter() {
      const children = [];
      if (this.isActive) {
        children.push(this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          staticClass: 'v-chip__filter',
          props: {
            left: true
          }
        }, this.filterIcon));
      }
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__[/* VExpandXTransition */ "b"], children);
    },
    genClose() {
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        staticClass: 'v-chip__close',
        props: {
          right: true,
          size: 18
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: e => {
            e.stopPropagation();
            e.preventDefault();
            this.$emit('click:close');
            this.$emit('update:active', false);
          }
        }
      }, this.closeIcon);
    },
    genContent() {
      return this.$createElement('span', {
        staticClass: 'v-chip__content'
      }, [this.filter && this.genFilter(), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_11__[/* getSlot */ "o"])(this), this.hasClose && this.genClose()]);
    }
  },
  render(h) {
    const children = [this.genContent()];
    let {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = {
      ...data.attrs,
      draggable: this.draggable ? 'true' : undefined,
      tabindex: this.chipGroup && !this.disabled ? 0 : data.attrs.tabindex
    };
    data.directives.push({
      name: 'show',
      value: this.active
    });
    data = this.setBackgroundColor(this.color, data);
    const color = this.textColor || this.outlined && this.color;
    return h(tag, this.setTextColor(color, data), children);
  }
}));

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("59b49814", content, true)

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-style:solid;border-width:thin}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(352);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("5bec9846", content, true)

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;justify-content:center;list-style-type:none;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{opacity:.6;pointer-events:none}.v-pagination__item{background:transparent;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{align-items:center;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;height:32px;justify-content:center;margin:.3rem 10px;-webkit-text-decoration:none;text-decoration:none;width:32px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{align-items:flex-end;display:inline-flex;height:32px;justify-content:center;margin:.3rem;width:32px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VPagination_VPagination_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(351);
/* harmony import */ var _src_components_VPagination_VPagination_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VPagination_VPagination_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _mixins_intersectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(320);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);

 // Directives

 // Mixins



 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_mixins_intersectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({
  onVisible: ['init']
}), _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).extend({
  name: 'v-pagination',
  directives: {
    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  props: {
    circle: Boolean,
    disabled: Boolean,
    navigationColor: String,
    navigationTextColor: String,
    length: {
      type: Number,
      default: 0,
      validator: val => val % 1 === 0
    },
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    totalVisible: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    pageAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.page'
    },
    currentPageAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.currentPage'
    },
    previousAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.previous'
    },
    nextAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.next'
    },
    wrapperAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.wrapper'
    }
  },
  data() {
    return {
      maxButtons: 0,
      selected: null
    };
  },
  computed: {
    classes() {
      return {
        'v-pagination': true,
        'v-pagination--circle': this.circle,
        'v-pagination--disabled': this.disabled,
        ...this.themeClasses
      };
    },
    items() {
      const totalVisible = parseInt(this.totalVisible, 10);
      if (totalVisible === 0 || isNaN(this.length) || this.length > Number.MAX_SAFE_INTEGER) {
        return [];
      }
      const maxLength = Math.min(Math.max(0, totalVisible) || this.length, Math.max(0, this.maxButtons) || this.length, this.length);
      if (this.length <= maxLength) {
        return this.range(1, this.length);
      }
      const even = maxLength % 2 === 0 ? 1 : 0;
      const left = Math.floor(maxLength / 2);
      const right = this.length - left + 1 + even;
      if (this.value > left && this.value < right) {
        const firstItem = 1;
        const lastItem = this.length;
        const start = this.value - left + 2;
        const end = this.value + left - 2 - even;
        const secondItem = start - 1 === firstItem + 1 ? 2 : '...';
        const beforeLastItem = end + 1 === lastItem - 1 ? end + 1 : '...';
        return [1, secondItem, ...this.range(start, end), beforeLastItem, this.length];
      } else if (this.value === left) {
        const end = this.value + left - 1 - even;
        return [...this.range(1, end), '...', this.length];
      } else if (this.value === right) {
        const start = this.value - left + 1;
        return [1, '...', ...this.range(start, this.length)];
      } else {
        return [...this.range(1, left), '...', ...this.range(right, this.length)];
      }
    }
  },
  watch: {
    value() {
      this.init();
    }
  },
  beforeMount() {
    this.init();
  },
  methods: {
    init() {
      this.selected = null;
      this.onResize();
      this.$nextTick(this.onResize); // TODO: Change this (f75dee3a, cbdf7caa)

      setTimeout(() => this.selected = this.value, 100);
    },
    onResize() {
      const width = this.$el && this.$el.parentElement ? this.$el.parentElement.clientWidth : window.innerWidth;
      this.maxButtons = Math.floor((width - 96) / 42);
    },
    next(e) {
      e.preventDefault();
      this.$emit('input', this.value + 1);
      this.$emit('next');
    },
    previous(e) {
      e.preventDefault();
      this.$emit('input', this.value - 1);
      this.$emit('previous');
    },
    range(from, to) {
      const range = [];
      from = from > 0 ? from : 1;
      for (let i = from; i <= to; i++) {
        range.push(i);
      }
      return range;
    },
    genIcon(h, icon, disabled, fn, label) {
      return h('li', [h('button', this.setBackgroundColor(this.navigationColor, {
        staticClass: 'v-pagination__navigation',
        class: {
          'v-pagination__navigation--disabled': disabled
        },
        attrs: {
          disabled,
          type: 'button',
          'aria-label': label
        },
        on: disabled ? {} : {
          click: fn
        }
      }), [h(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        props: {
          color: this.navigationTextColor
        }
      }, [icon])])]);
    },
    genItem(h, i) {
      const color = i === this.value && (this.color || 'primary');
      const isCurrentPage = i === this.value;
      const ariaLabel = isCurrentPage ? this.currentPageAriaLabel : this.pageAriaLabel;
      return h('button', this.setBackgroundColor(color, {
        staticClass: 'v-pagination__item',
        class: {
          'v-pagination__item--active': i === this.value
        },
        attrs: {
          type: 'button',
          'aria-current': isCurrentPage,
          'aria-label': this.$vuetify.lang.t(ariaLabel, i)
        },
        on: {
          click: () => this.$emit('input', i)
        }
      }), [i.toString()]);
    },
    genItems(h) {
      return this.items.map((i, index) => {
        return h('li', {
          key: index
        }, [isNaN(Number(i)) ? h('span', {
          class: 'v-pagination__more'
        }, [i.toString()]) : this.genItem(h, i)]);
      });
    },
    genList(h, children) {
      return h('ul', {
        directives: [{
          modifiers: {
            quiet: true
          },
          name: 'resize',
          value: this.onResize
        }],
        class: this.classes
      }, children);
    }
  },
  render(h) {
    const children = [this.genIcon(h, this.$vuetify.rtl ? this.nextIcon : this.prevIcon, this.value <= 1, this.previous, this.$vuetify.lang.t(this.previousAriaLabel)), this.genItems(h), this.genIcon(h, this.$vuetify.rtl ? this.prevIcon : this.nextIcon, this.value >= this.length, this.next, this.$vuetify.lang.t(this.nextAriaLabel))];
    return h('nav', {
      attrs: {
        role: 'navigation',
        'aria-label': this.$vuetify.lang.t(this.wrapperAriaLabel)
      }
    }, [this.genList(h, children)]);
  }
}));

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(321);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(309);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VPagination/VPagination.js
var VPagination = __webpack_require__(364);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/team/LawyerTeam.vue?vue&type=template&id=2057e6d6







var LawyerTeamvue_type_template_id_2057e6d6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    staticClass: "mt--30"
  }, [_vm._l(_vm.teamContent, function (team) {
    return _c(VCol["a" /* default */], {
      key: team.id,
      attrs: {
        "lg": "3",
        "md": "4",
        "sm": "6",
        "cols": "6"
      }
    }, [_c('div', {
      staticClass: "team-presentation"
    }, [_c('div', {
      staticStyle: {
        "cursor": "pointer"
      },
      on: {
        "click": function ($event) {
          _vm.clickProfile(_vm.$i18n.t('urls.profile') + '/' + team.lawyerId + '/' + _vm.createUrlComplement(team));
        }
      }
    }, [_c(VImg["a" /* default */], {
      staticClass: "thumbnail",
      attrs: {
        "src": team.lawyerImage,
        "loading": "lazy"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "inner"
    }, [_c('div', {
      staticClass: "content"
    }, [_c('h4', {
      staticClass: "title",
      staticStyle: {
        "cursor": "pointer"
      },
      domProps: {
        "innerHTML": _vm._s(team.firtsName + ' ' + team.lastName)
      },
      on: {
        "click": function ($event) {
          _vm.clickProfile(_vm.$i18n.t('urls.profile') + '' + team.lawyerId + '/' + _vm.createUrlComplement(team));
        }
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "designation",
      domProps: {
        "innerHTML": _vm._s(team.offices.countries.abbreviation + ' | ' + (_vm.language === 'es' ? team.lawyerCategories.lawyerCategoryName : team.lawyerCategories.lawyerCategoryNameEn))
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "social-content"
    }, [_c('a', {
      staticClass: "social-content social-hyperlink",
      attrs: {
        "href": team.socialProfessionalNetwork,
        "target": "_blank"
      }
    }, [_c('i', {
      staticClass: "fab fa-linkedin-in"
    })]), _vm._v(" "), _c('p', {
      staticClass: "designation"
    }, [_vm._v(_vm._s(team.email))])])])])]);
  }), _vm._v(" "), _c(VContainer["a" /* default */], {
    staticClass: "max-width",
    attrs: {
      "hidden": _vm.teamContent.length === 0
    }
  }, [_c(VPagination["a" /* default */], {
    staticClass: "paginator",
    attrs: {
      "length": _vm.total,
      "total-visible": 7,
      "circle": true
    },
    model: {
      value: _vm.page,
      callback: function ($$v) {
        _vm.page = $$v;
      },
      expression: "page"
    }
  })], 1), _vm._v(" "), _vm.teamContent.length === 0 ? _c(VContainer["a" /* default */], {
    staticClass: "max-width text-center pt-5 pb-5"
  }, [_c(VChip["a" /* default */], {
    staticClass: "ma-2"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('common.chipNoData')) + "\n        ")])], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/team/LawyerTeam.vue?vue&type=template&id=2057e6d6

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/team/LawyerTeam.vue?vue&type=script&lang=js

/* harmony default export */ var LawyerTeamvue_type_script_lang_js = ({
  components: {},
  data() {
    return {
      page: 1,
      itemPerPage: 12,
      total: 0,
      teamContent: [],
      validator: false
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['language', 'teamFilter1', 'teamFilter2', 'teamFilter3', 'teamFilter4'])
  },
  watch: {
    page(val) {
      this.validator = true;
      this.list();
      this.validator = false;
    },
    teamFilter1(val) {
      this.list();
    },
    teamFilter2(val) {
      this.list();
    },
    teamFilter3(val) {
      this.list();
    },
    teamFilter4(val) {
      this.list();
    }
  },
  methods: {
    initialize() {
      this.teamContent = [];
      this.list();
    },
    list() {
      let page = 1;
      if (this.validator) {
        page = this.page;
      } else {
        this.page = 1;
      }
      const me = this;
      const complement = '?parameters=' + page + '&parameters=' + this.itemPerPage + '&parameters=' + (this.teamFilter1 !== '' ? this.teamFilter1 : 'null') + '&parameters=' + (this.teamFilter2 !== '' ? this.teamFilter2 : 'null') + '&parameters=' + (this.teamFilter3 !== '' ? this.teamFilter3 : 'null') + '&parameters=' + (this.teamFilter4 !== '' ? this.teamFilter4 : 'null');
      this.$axios.get('api/Lawyers/GetLawyersCountFE/' + complement).then(response => {
        me.total = response.data;
      }).catch(error => {
        console.log(error);
      });
      this.$axios.get('api/Lawyers/GetLawyersFE/' + complement).then(response => {
        me.teamContent = response.data;
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
// CONCATENATED MODULE: ./components/team/LawyerTeam.vue?vue&type=script&lang=js
 /* harmony default export */ var team_LawyerTeamvue_type_script_lang_js = (LawyerTeamvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/team/LawyerTeam.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  team_LawyerTeamvue_type_script_lang_js,
  LawyerTeamvue_type_template_id_2057e6d6_render,
  staticRenderFns,
  false,
  null,
  null,
  "1de53bec"
  
)

/* harmony default export */ var LawyerTeam = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=team-lawyer-team.js.map