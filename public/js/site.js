/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/site.js":
/*!******************************!*\
  !*** ./resources/js/site.js ***!
  \******************************/
/***/ (() => {

$(function () {
  setTimeout(function () {
    $('#loader').removeClass("is-active");
  }, 500);

  if ($(".section").length > 0) {
    slideAnchors.push("contact");
    $("#fullpage").fullpage({
      licenseKey: "7E32D915-39324E04-A334765F-3520E7C2",
      anchors: slideAnchors,
      //sectionsColor: ["#000000", "#000000", "#000000", "#000000"],
      navigation: false,
      navigationPosition: "left",
      navigationTooltips: [],
      slidesNavigation: true,
      slidesNavPosition: "bottom",
      controlArrows: true,
      loopHorizontal: true,
      lazyLoading: true,
      // onLeave(index, nextIndex, direction) {},
      // afterLoad: function (anchorLink, index) {},
      afterSlideLoad: function afterSlideLoad(section, origin, destination, direction) {
        //console.log(section.anchor)
        var headerActive = false;

        if ($("header").hasClass("active")) {
          headerActive = true;
        }

        $("header").removeClass().addClass("slide-" + section.anchor + "-slide" + destination.index);
        if (headerActive) $("header").addClass("active");
        var slideSectionAnchor = $("#slide-section-" + section.anchor); // slideSectionAnchor
        //   .find("h2")
        //   .removeClass('slide'+origin.index);

        slideSectionAnchor.find(".fp-slidesNav ul li a span").removeClass("slide" + origin.index);
        slideSectionAnchor.find(".fp-controlArrow.fp-prev").removeClass("slide" + origin.index);
        slideSectionAnchor.find(".fp-controlArrow.fp-next").removeClass("slide" + origin.index); // slideSectionAnchor
        //   .find("h2")
        //   .addClass('slide'+destination.index);

        slideSectionAnchor.find(".fp-slidesNav ul li a span").addClass("slide" + destination.index);
        slideSectionAnchor.find(".fp-controlArrow.fp-prev").addClass("slide" + destination.index);
        slideSectionAnchor.find(".fp-controlArrow.fp-next").addClass("slide" + destination.index);
      },
      afterRender: function afterRender() {
        $(".section").each(function (index) {
          //$(this).find("h2").addClass("slide0");
          $(this).find(".fp-slidesNav ul li a span").addClass("slide0");
          $(this).find(".fp-controlArrow.fp-prev").addClass("slide0");
          $(this).find(".fp-controlArrow.fp-next").addClass("slide0");

          if (index == 0) {
            $("header").addClass("slide-" + $(this).data("anchor") + "-slide0");
          } // console.log($(this))

        }); // setInterval(function () {
        //     fullpage_api.moveSlideRight();
        // }, 5000);
        // console.log('render')
      }
    });
  }

  $(".nav-button").on("click", function (e) {
    e.preventDefault();
    $nav = $(".navigation");

    if ($nav.is(":visible")) {
      $nav.slideToggle(function () {
        $("header").toggleClass("active");
        $(".nav-button-bottomline").toggle();
      });
    } else {
      $("header").toggleClass("active");
      $(".nav-button-bottomline").toggle();
      $nav.slideToggle(function () {});
    }
  });
  $(".up-arrow").on("click", function (e) {
    e.preventDefault();

    if ($(".section").length > 0) {
      var sec = $(".section:eq(0)").data("anchor");
      var url = new URL(location.href); //(location.href);

      url.hash = sec;
      location.href = url;
    } else {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
    }
  });
});

/***/ }),

/***/ "./resources/css/site.scss":
/*!*********************************!*\
  !*** ./resources/css/site.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/site": 0,
/******/ 			"css/site": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/site"], () => (__webpack_require__("./resources/js/site.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/site"], () => (__webpack_require__("./resources/css/site.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;