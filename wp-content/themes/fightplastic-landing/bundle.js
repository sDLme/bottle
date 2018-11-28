/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cc_header_cc_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_cc_header_cc_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_cc_header_cc_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cc_promo_cc_promo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_cc_promo_cc_promo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_cc_promo_cc_promo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cc_social_cc_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_cc_social_cc_social__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_cc_social_cc_social__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cc_movie_cc_movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_cc_movie_cc_movie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_cc_movie_cc_movie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_cc_share_cc_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _components_cc_share_cc_share__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_cc_share_cc_share__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_cc_language_cc_language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _components_cc_language_cc_language__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_cc_language_cc_language__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_cc_on_us_cc_on_us__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _components_cc_on_us_cc_on_us__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_cc_on_us_cc_on_us__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_cc_tattoo_cc_tattoo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _components_cc_tattoo_cc_tattoo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_cc_tattoo_cc_tattoo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_cc_about_cc_about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _components_cc_about_cc_about__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_cc_about_cc_about__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_cc_commitment_cc_commitment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _components_cc_commitment_cc_commitment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_cc_commitment_cc_commitment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_cc_product_cc_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _components_cc_product_cc_product__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_cc_product_cc_product__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_cc_buy_area_cc_buy_area__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony import */ var _components_cc_buy_area_cc_buy_area__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_cc_buy_area_cc_buy_area__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_cc_shop_cc_shop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);
/* harmony import */ var _components_cc_shop_cc_shop__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_cc_shop_cc_shop__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_cc_footer_cc_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
/* harmony import */ var _components_cc_footer_cc_footer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_cc_footer_cc_footer__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_shared_modal_bootstrap_min__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15);
/* harmony import */ var _components_shared_modal_bootstrap_min__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_shared_modal_bootstrap_min__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_shared_modal_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16);
/* harmony import */ var _components_shared_modal_modal__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_shared_modal_modal__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_shared_cc_arrow_down_cc_arrow_down__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(17);
/* harmony import */ var _components_shared_cc_arrow_down_cc_arrow_down__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_shared_cc_arrow_down_cc_arrow_down__WEBPACK_IMPORTED_MODULE_16__);














/* Shared Components */





/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    // function hidePanel(...panelClasses) {
    //     panelClasses.forEach(panelClass => {
    //         $(`.${panelClass}`).removeClass(`${panelClass}--show`);
    //     });
    // }
    //
    // function showPanel(panelClass, panelID) {
    //     console.log(`==> Show panel with id "${panelID}"`);
    //     let $panel = $(`[panel-id=${panelID}]`);
    //     if (!$panel.hasClass(`${panelClass}--show`)) {
    //         hidePanel('cc-share-panel', 'cc-share-tooltip', 'cc-language-panel', 'cc-language-tooltip');
    //         $panel.addClass(`${panelClass}--show`);
    //     } else {
    //         $panel.removeClass(`${panelClass}--show`);
    //     }
    // }
    //
    // /**
    //  * Share section
    //  */
    // function initShareSection($document) {
    //     let $sharePanel = $('[click="share-panel"]');
    //     $sharePanel.off('click', '**');
    //     $sharePanel.click(() => {
    //         const isMobile = $document.width() <= 1000;
    //         if (isMobile) {
    //             showPanel('cc-share-panel', 'share-panel')
    //         } else {
    //             showPanel('cc-share-tooltip', 'share-tooltip')
    //         }
    //     });
    //     let $closeSharePanel = $('[click="close-share-panel"]');
    //     $closeSharePanel.off('click', '**');
    //     $closeSharePanel.click(() => {
    //         const isMobile = $document.width() <= 1000;
    //         if (isMobile) {
    //             hidePanel('cc-share-panel')
    //         }
    //     });
    // }
    //
    // /**
    //  * Language section
    //  */
    // function initLanguageSection($document) {
    //     let $languagePanel = $('[click="language-panel"]');
    //     $languagePanel.off('click', '**');
    //     $languagePanel.click(() => {
    //         const isMobile = $document.width() <= 1000;
    //         if (isMobile) {
    //             showPanel('cc-language-panel', 'language-panel')
    //         } else {
    //             showPanel('cc-language-tooltip', 'language-tooltip')
    //         }
    //     });
    //     let $closeLanguagePanel = $('[click="close-language-panel"]');
    //     $closeLanguagePanel.off('click', '**');
    //     $closeLanguagePanel.click(() => {
    //         const isMobile = $document.width() <= 1000;
    //         if (isMobile) {
    //             hidePanel('cc-language-panel')
    //         }
    //     });
    // }
    //
    // function init() {
    //     const $document = $(document);
    //
    //     initShareSection($document);
    //     initLanguageSection($document);
    //
    //     $(window).resize(() => {
    //         initShareSection($document);
    //         initLanguageSection($document);
    //     })
    // }
    //
    // init();
    //
    var width = $(window).width();

    if (width <= 1000) {
      $('[click="language-panel"]').click(function () {
        $('.cc-language-panel').addClass("cc-language-panel--show");
      });
      $('[click="close-language-panel"]').click(function () {
        $('.cc-language-panel').removeClass("cc-language-panel--show");
      });
      $('[click="share-panel"]').click(function () {
        $('.cc-share-panel').addClass("cc-share-panel--show");
      });
      $('[click="close-share-panel"]').click(function () {
        $('.cc-share-panel').removeClass("cc-share-panel--show");
      });
    } else {
      $('[click="language-panel"]').click(function () {
        if ($('.cc-language-tooltip').hasClass("cc-language-tooltip--show") || $('.cc-share-tooltip').hasClass("cc-share-tooltip--show")) {
          $('.cc-language-tooltip').toggleClass("cc-language-tooltip--show");
          $('.cc-share-tooltip').removeClass("cc-share-tooltip--show");
        } else {
          $('.cc-language-tooltip').addClass("cc-language-tooltip--show");
        }
      });
      $('[click="share-panel"]').click(function () {
        if ($('.cc-share-tooltip').hasClass("cc-share-tooltip--show") || $('.cc-language-tooltip').hasClass("cc-language-tooltip--show")) {
          $('.cc-share-tooltip').toggleClass("cc-share-tooltip--show");
          $('.cc-language-tooltip').removeClass("cc-language-tooltip--show");
        } else {
          $('.cc-share-tooltip').addClass("cc-share-tooltip--show");
        }
      });
    }
  });
})($);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    function showVideo(videoID) {
      var $videoIFrame = $("#".concat(videoID));

      if (!$videoIFrame.hasClass('show')) {
        $videoIFrame.addClass('show');
      }
    }

    function playVideo(playerInstanceKey) {
      window[playerInstanceKey] && window[playerInstanceKey].playVideo();
    }

    function stopVideo(playerInstanceKey) {
      window[playerInstanceKey] && window[playerInstanceKey].stopVideo();
    }

    function init() {
      $('[data-click="play-promo-video"]').click(function () {
        if (window.innerWidth < 1000) {
          $('#play-promo-video-modal').modal('show');
          playVideo('playerModal');
          $('#close-promo-video').click(function () {
            stopVideo('playerModal');
          });
          $('#play-promo-video-modal').on('hidden.bs.modal', function () {
            stopVideo('playerModal');
          });
        } else {
          showVideo('promo-video-id');
          playVideo('player');
          $('[data-click="play-promo-video"]').hide();
        }
      });
    } //////


    init();
  });
})(jQuery);

/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    function hidePlaceholder(blockName, placeholderID) {
      var $videoPlaceholder = $("[placeholder-id=".concat(blockName, "__").concat(placeholderID, "]"));

      if ($videoPlaceholder.hasClass("".concat(blockName, "__video-placeholder--show"))) {
        $videoPlaceholder.removeClass("".concat(blockName, "__video-placeholder--show"));
      }
    }

    function showPlaceholder(blockName, placeholderID) {
      var $videoPlaceholder = $("[placeholder-id=".concat(blockName, "__").concat(placeholderID, "]"));

      if ($videoPlaceholder.hasClass("".concat(blockName, "__video-placeholder--show"))) {
        $videoPlaceholder.removeClass("".concat(blockName, "__video-placeholder--show"));
      }
    }

    function hideVideoPlaceholderAndPlayVideo(blockName, placeholderID) {
      window.onUsPlayer && window.onUsPlayer.playVideo();
      setTimeout(function () {
        hidePlaceholder(blockName, placeholderID);
      }, 400);
    }

    function playVideo(playerInstanceKey) {
      window[playerInstanceKey] && window[playerInstanceKey].playVideo();
    }

    function stopVideo(playerInstanceKey) {
      window[playerInstanceKey] && window[playerInstanceKey].stopVideo();
    }

    function init() {
      $('[click="cc-on-us__video-placeholder"]').click(function () {
        if (window.innerWidth < 1000) {
          $('#play-on-us-video-modal').modal('show');
          playVideo('onUsPlayerModal');
          $('#close-on-us-video').click(function () {
            stopVideo('onUsPlayerModal');
          });
          $('#play-on-us-video-modal').on('hidden.bs.modal', function () {
            stopVideo('onUsPlayerModal');
          });
        } else {
          hideVideoPlaceholderAndPlayVideo('cc-on-us', 'video-placeholder');
        }
      });
    }

    init();
  });
})($);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    var sliderSelectors = ['.cc-tattoo__slider'];

    for (var _i = 0; _i < sliderSelectors.length; _i++) {
      var sliderSelector = sliderSelectors[_i];
      $(sliderSelector).slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        responsive: [{
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false
          }
        }]
      });
    }
  });
})($);

/***/ }),
/* 9 */
/***/ (function(module, exports) {



/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ }),
/* 11 */
/***/ (function(module, exports) {



/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    console.log('==> DOM is ready!');
    var $countrySelect = $('#cc-shop__select');
    $countrySelect.change(function (e) {
      var $countrySelected = $('#cc-shop__select option:selected')[0];
      $(".cc-shop a").attr("href", $countrySelected.value);
    });
    var $countryLink = $('#cc-shop__link');
    $countryLink.click(function () {
      var $countrySelected = $('#cc-shop__select option:selected')[0];
      $(".cc-shop a").attr("href", $countrySelected.value);
      window.dataLayer = window && window.dataLayer || [];
      window.dataLayer.push({
        'event': 'shopByCountry',
        'Country': $countrySelected.text
      });
    });
  });
})(jQuery);

/***/ }),
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
  "use strict";

  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (t) {
  "use strict";

  function e(e, o) {
    return this.each(function () {
      var s = t(this),
          n = s.data("bs.modal"),
          r = t.extend({}, i.DEFAULTS, s.data(), "object" == _typeof(e) && e);
      n || s.data("bs.modal", n = new i(this, r)), "string" == typeof e ? n[e](o) : r.show && n.show(o);
    });
  }

  var i = function i(e, _i) {
    this.options = _i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };

  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, i.prototype.toggle = function (t) {
    return this.isShown ? this.hide() : this.show(t);
  }, i.prototype.show = function (e) {
    var o = this,
        s = t.Event("show.bs.modal", {
      relatedTarget: e
    });
    this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      o.$element.one("mouseup.dismiss.bs.modal", function (e) {
        t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var s = t.support.transition && o.$element.hasClass("fade");
      o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), s && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
      var n = t.Event("shown.bs.modal", {
        relatedTarget: e
      });
      s ? o.$dialog.one("bsTransitionEnd", function () {
        o.$element.trigger("focus").trigger(n);
      }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(n);
    }));
  }, i.prototype.hide = function (e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal());
  }, i.prototype.enforceFocus = function () {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
      document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
    }, this));
  }, i.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
      27 == t.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, i.prototype.resize = function () {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");
  }, i.prototype.hideModal = function () {
    var t = this;
    this.$element.hide(), this.backdrop(function () {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
    });
  }, i.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, i.prototype.backdrop = function (e) {
    var o = this,
        s = this.$element.hasClass("fade") ? "fade" : "";

    if (this.isShown && this.options.backdrop) {
      var n = t.support.transition && s;
      if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
      n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");

      var r = function r() {
        o.removeBackdrop(), e && e();
      };

      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r();
    } else e && e();
  }, i.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, i.prototype.adjustDialog = function () {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    });
  }, i.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    });
  }, i.prototype.checkScrollbar = function () {
    var t = window.innerWidth;

    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left);
    }

    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar();
  }, i.prototype.setScrollbar = function () {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth);
  }, i.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, i.prototype.measureScrollbar = function () {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e;
  };
  var o = t.fn.modal;
  t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
    return t.fn.modal = o, this;
  }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
    var o = t(this),
        s = o.attr("href"),
        n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
        r = n.data("bs.modal") ? "toggle" : t.extend({
      remote: !/#/.test(s) && s
    }, n.data(), o.data());
    o.is("a") && i.preventDefault(), n.one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || n.one("hidden.bs.modal", function () {
        o.is(":visible") && o.trigger("focus");
      });
    }), e.call(n, r, this);
  });
}(jQuery), +function (t) {
  "use strict";

  function e() {
    var t = document.createElement("bootstrap"),
        e = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };

    for (var i in e) {
      if (void 0 !== t.style[i]) return {
        end: e[i]
      };
    }

    return !1;
  }

  t.fn.emulateTransitionEnd = function (e) {
    var i = !1,
        o = this;
    t(this).one("bsTransitionEnd", function () {
      i = !0;
    });

    var s = function s() {
      i || t(o).trigger(t.support.transition.end);
    };

    return setTimeout(s, e), this;
  }, t(function () {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function handle(e) {
        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
      }
    });
  });
}(jQuery);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    var $mobileSlider = $('.cc-modal-slider');
    $('[modal-slider="click-prev"]').click(function () {
      $mobileSlider.slick('slickPrev');
      console.log('==> Slick show previous slide');
    });
    $('[modal-slider="click-next"]').click(function () {
      $mobileSlider.slick('slickNext');
      console.log('==> Slick show next slide');
    });
    var $modalWindow = $('#modal-window');
    var isSliderInitialized = false;
    $modalWindow.on('shown.bs.modal', function () {
      var sliderIndex = parseInt($modalWindow.attr('data-slide-index'));

      if (!isSliderInitialized) {
        isSliderInitialized = true;
        $mobileSlider.slick({
          initialSlide: sliderIndex,
          arrows: false
        });
        console.log('==> Slick was successfully initialized');
        hideLoaderGif();
      }
    });
    $modalWindow.on('hidden.bs.modal', function () {
      $mobileSlider.slick('unslick');
      isSliderInitialized = false;
      showLoaderGif();
      console.log('==> Slick was successfully destroyed');
      console.log('==> Modal window closed');
    });
    /**
     * Add Event Listener to open modal window with predefined slider
     */

    $('[data-click="open-modal"]').click(function () {
      var sliderIndex = parseInt($(this).attr('data-slider-index'));
      $modalWindow.attr('data-slide-index', sliderIndex);
      $modalWindow.modal('show');
    });

    function hideLoaderGif() {
      var $modalLoaderGif = $('.cc-modal-slider__loader');

      if (!$modalLoaderGif.hasClass('cc-modal-slider__loader--hidden')) {
        $modalLoaderGif.addClass('cc-modal-slider__loader--hidden');
      }
    }

    function showLoaderGif() {
      var $modalLoaderGif = $('.cc-modal-slider__loader');

      if ($modalLoaderGif.hasClass('cc-modal-slider__loader--hidden')) {
        $modalLoaderGif.removeClass('cc-modal-slider__loader--hidden');
      }
    }
  });
})(jQuery);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    $(".cc-arrow-down").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href');
      var top = $(id).offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 500);
    });
  });
})(jQuery);

/***/ })
/******/ ]);