/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interact_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interact-dom */ "./src/interact-dom.js");


const generateContactPage = function () {
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    const mainContactContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('main', 'main-contact-content', 'mainContactContent')
    const contactTitle = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'contact-title', 'contactTitle')

    const firstContactName = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'first-contact-name', 'firstContactName')
    const firstContactRole = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'first-contact-role', 'firstContactRole')
    const firstContactPhone = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'first-contact-phone', 'firstContactPhone')

    mainContactContent.appendChild(contactTitle)
    mainContactContent.appendChild(firstContactName)
    mainContactContent.appendChild(firstContactRole)
    mainContactContent.appendChild(firstContactPhone)

    contactTitle.textContent = 'Contact Us'
    firstContactName.textContent = 'Oscar Stone'
    firstContactRole.textContent = 'Chef'
    firstContactPhone.textContent = '(478) 658 112'

    mainContent.appendChild(mainContactContent)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContactPage);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interact_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interact-dom */ "./src/interact-dom.js");


const generateHomepage = function(){
    const homeMainElem = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('main', 'home-main-content','homeMainContent')
    const pageTitleElem = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'page-title', 'pageTitle')
    const restaurantDescriptionElem = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'restaurant-description', 'restaurantDescription')
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    
    
    // const homeMain = interactDOM().hookDOMelement('homeMainContent')
    // const pageTitle = interactDOM().hookDOMelement('pageTitle')
    // const restaurantDescription = interactDOM().hookDOMelement('restaurantDescription')

    homeMainElem.appendChild(pageTitleElem)
    homeMainElem.appendChild(restaurantDescriptionElem)

    pageTitleElem.textContent = 'Fireside Tavern'
    restaurantDescriptionElem.textContent = "Fireside Tavern is a cozy and welcoming restaurant that exudes warmth and comfort. The atmosphere is reminiscent of a rustic lodge, with exposed wooden beams, stone walls, and a central fireplace that creates a cozy and intimate dining experience. The menu features classic comfort food dishes with a modern twist, as well as a selection of craft cocktails and local beers on tap. Signature dishes include a mouthwatering bacon-wrapped meatloaf, a hearty beef stew, and a delectable mac and cheese with a crispy breadcrumb topping. The restaurant also offers a carefully curated wine list, with options to suit every palate and budget. Whether you're looking for a romantic dinner for two or a fun night out with friends, Fireside Tavern is the perfect destination for a memorable dining experience."







    mainContent.appendChild(homeMainElem)
    // return homeMain
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHomepage);

/***/ }),

/***/ "./src/interact-dom.js":
/*!*****************************!*\
  !*** ./src/interact-dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const interactDOM = function(){
    const mainContent = document.getElementById('mainContent')


    const createElementWithClassAndId = function(type, className, idName){
        const element = document.createElement(type)
        element.classList.add(`${className}`)
        element.id = `${idName}`
        return element
    }

    const hookDOMelement = function (idName){
        const elem = document.getElementById(`${idName}`)
        return elem
    }

    return { mainContent, createElementWithClassAndId, hookDOMelement }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interactDOM);

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interact_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interact-dom */ "./src/interact-dom.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const generateHeader = (function(){
    const mainHeader = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('header', 'main-header', 'mainHeader')
    
    const homeButton = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'home-page', 'homePage')
    homeButton.textContent = 'Home'
    const contactButton = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'contact-page', 'contactPage')
    contactButton.textContent = 'Contact'

    mainHeader.appendChild(homeButton)
    mainHeader.appendChild(contactButton)

    document.body.appendChild(mainHeader)
    return { homeButton, contactButton }
})()

generateHeader.contactButton.addEventListener('click', e => {
         e.preventDefault()
         ;(0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])()
     })

generateHeader.homeButton.addEventListener('click', e => {
    e.preventDefault()
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
})
// const changePage = interactDOM().createElementWithClassAndId('button', 'change-page', 'changePage')
// changePage.textContent = 'Change'
// const mainContent = interactDOM().hookDOMelement('mainContent')
// mainContent.appendChild(changePage)


// changePage.addEventListener('click', e => {
//     e.preventDefault()
//     generateContactPage()
// })


// generateHomepage()
// generateContactPage()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDekM7QUFDQTtBQUNBLHdCQUF3Qix5REFBVztBQUNuQywrQkFBK0IseURBQVc7QUFDMUMseUJBQXlCLHlEQUFXO0FBQ3BDO0FBQ0EsNkJBQTZCLHlEQUFXO0FBQ3hDLDZCQUE2Qix5REFBVztBQUN4Qyw4QkFBOEIseURBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCTztBQUN6QztBQUNBO0FBQ0EseUJBQXlCLHlEQUFXO0FBQ3BDLDBCQUEwQix5REFBVztBQUNyQyxzQ0FBc0MseURBQVc7QUFDakQsd0JBQXdCLHlEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDN0JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7O1VDbkJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ053QztBQUNIO0FBQ007QUFDM0M7QUFDQTtBQUNBLHVCQUF1Qix5REFBVztBQUNsQztBQUNBLHVCQUF1Qix5REFBVztBQUNsQztBQUNBLDBCQUEwQix5REFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFNBQVMscURBQW1CO0FBQzVCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFnQjtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ludGVyYWN0LWRvbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVDb250YWN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRlbnQnKVxyXG4gICAgY29uc3QgbWFpbkNvbnRhY3RDb250ZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ21haW4nLCAnbWFpbi1jb250YWN0LWNvbnRlbnQnLCAnbWFpbkNvbnRhY3RDb250ZW50JylcclxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2NvbnRhY3QtdGl0bGUnLCAnY29udGFjdFRpdGxlJylcclxuXHJcbiAgICBjb25zdCBmaXJzdENvbnRhY3ROYW1lID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZmlyc3QtY29udGFjdC1uYW1lJywgJ2ZpcnN0Q29udGFjdE5hbWUnKVxyXG4gICAgY29uc3QgZmlyc3RDb250YWN0Um9sZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2ZpcnN0LWNvbnRhY3Qtcm9sZScsICdmaXJzdENvbnRhY3RSb2xlJylcclxuICAgIGNvbnN0IGZpcnN0Q29udGFjdFBob25lID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZmlyc3QtY29udGFjdC1waG9uZScsICdmaXJzdENvbnRhY3RQaG9uZScpXHJcblxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSlcclxuICAgIG1haW5Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChmaXJzdENvbnRhY3ROYW1lKVxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGZpcnN0Q29udGFjdFJvbGUpXHJcbiAgICBtYWluQ29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoZmlyc3RDb250YWN0UGhvbmUpXHJcblxyXG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnXHJcbiAgICBmaXJzdENvbnRhY3ROYW1lLnRleHRDb250ZW50ID0gJ09zY2FyIFN0b25lJ1xyXG4gICAgZmlyc3RDb250YWN0Um9sZS50ZXh0Q29udGVudCA9ICdDaGVmJ1xyXG4gICAgZmlyc3RDb250YWN0UGhvbmUudGV4dENvbnRlbnQgPSAnKDQ3OCkgNjU4IDExMidcclxuXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFjdENvbnRlbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29udGFjdFBhZ2VcclxuIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVIb21lcGFnZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBob21lTWFpbkVsZW0gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnbWFpbicsICdob21lLW1haW4tY29udGVudCcsJ2hvbWVNYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBwYWdlVGl0bGVFbGVtID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAncGFnZS10aXRsZScsICdwYWdlVGl0bGUnKVxyXG4gICAgY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24nLCAncmVzdGF1cmFudERlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRlbnQnKVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIGNvbnN0IGhvbWVNYWluID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnaG9tZU1haW5Db250ZW50JylcclxuICAgIC8vIGNvbnN0IHBhZ2VUaXRsZSA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ3BhZ2VUaXRsZScpXHJcbiAgICAvLyBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdyZXN0YXVyYW50RGVzY3JpcHRpb24nKVxyXG5cclxuICAgIGhvbWVNYWluRWxlbS5hcHBlbmRDaGlsZChwYWdlVGl0bGVFbGVtKVxyXG4gICAgaG9tZU1haW5FbGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0pXHJcblxyXG4gICAgcGFnZVRpdGxlRWxlbS50ZXh0Q29udGVudCA9ICdGaXJlc2lkZSBUYXZlcm4nXHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtLnRleHRDb250ZW50ID0gXCJGaXJlc2lkZSBUYXZlcm4gaXMgYSBjb3p5IGFuZCB3ZWxjb21pbmcgcmVzdGF1cmFudCB0aGF0IGV4dWRlcyB3YXJtdGggYW5kIGNvbWZvcnQuIFRoZSBhdG1vc3BoZXJlIGlzIHJlbWluaXNjZW50IG9mIGEgcnVzdGljIGxvZGdlLCB3aXRoIGV4cG9zZWQgd29vZGVuIGJlYW1zLCBzdG9uZSB3YWxscywgYW5kIGEgY2VudHJhbCBmaXJlcGxhY2UgdGhhdCBjcmVhdGVzIGEgY296eSBhbmQgaW50aW1hdGUgZGluaW5nIGV4cGVyaWVuY2UuIFRoZSBtZW51IGZlYXR1cmVzIGNsYXNzaWMgY29tZm9ydCBmb29kIGRpc2hlcyB3aXRoIGEgbW9kZXJuIHR3aXN0LCBhcyB3ZWxsIGFzIGEgc2VsZWN0aW9uIG9mIGNyYWZ0IGNvY2t0YWlscyBhbmQgbG9jYWwgYmVlcnMgb24gdGFwLiBTaWduYXR1cmUgZGlzaGVzIGluY2x1ZGUgYSBtb3V0aHdhdGVyaW5nIGJhY29uLXdyYXBwZWQgbWVhdGxvYWYsIGEgaGVhcnR5IGJlZWYgc3RldywgYW5kIGEgZGVsZWN0YWJsZSBtYWMgYW5kIGNoZWVzZSB3aXRoIGEgY3Jpc3B5IGJyZWFkY3J1bWIgdG9wcGluZy4gVGhlIHJlc3RhdXJhbnQgYWxzbyBvZmZlcnMgYSBjYXJlZnVsbHkgY3VyYXRlZCB3aW5lIGxpc3QsIHdpdGggb3B0aW9ucyB0byBzdWl0IGV2ZXJ5IHBhbGF0ZSBhbmQgYnVkZ2V0LiBXaGV0aGVyIHlvdSdyZSBsb29raW5nIGZvciBhIHJvbWFudGljIGRpbm5lciBmb3IgdHdvIG9yIGEgZnVuIG5pZ2h0IG91dCB3aXRoIGZyaWVuZHMsIEZpcmVzaWRlIFRhdmVybiBpcyB0aGUgcGVyZmVjdCBkZXN0aW5hdGlvbiBmb3IgYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UuXCJcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChob21lTWFpbkVsZW0pXHJcbiAgICAvLyByZXR1cm4gaG9tZU1haW5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIb21lcGFnZSIsImNvbnN0IGludGVyYWN0RE9NID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50JylcclxuXHJcblxyXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkID0gZnVuY3Rpb24odHlwZSwgY2xhc3NOYW1lLCBpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBgJHtpZE5hbWV9YFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG9va0RPTWVsZW1lbnQgPSBmdW5jdGlvbiAoaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWROYW1lfWApXHJcbiAgICAgICAgcmV0dXJuIGVsZW1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBtYWluQ29udGVudCwgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkLCBob29rRE9NZWxlbWVudCB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0RE9NIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3QtZG9tXCJcclxuaW1wb3J0IGdlbmVyYXRlSG9tZXBhZ2UgZnJvbSBcIi4vaG9tZVwiXHJcbmltcG9ydCBnZW5lcmF0ZUNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIlxyXG5cclxuY29uc3QgZ2VuZXJhdGVIZWFkZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaGVhZGVyJywgJ21haW4taGVhZGVyJywgJ21haW5IZWFkZXInKVxyXG4gICAgXHJcbiAgICBjb25zdCBob21lQnV0dG9uID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdob21lLXBhZ2UnLCAnaG9tZVBhZ2UnKVxyXG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJ1xyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY29udGFjdC1wYWdlJywgJ2NvbnRhY3RQYWdlJylcclxuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCdcclxuXHJcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pXHJcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluSGVhZGVyKVxyXG4gICAgcmV0dXJuIHsgaG9tZUJ1dHRvbiwgY29udGFjdEJ1dHRvbiB9XHJcbn0pKClcclxuXHJcbmdlbmVyYXRlSGVhZGVyLmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgIGdlbmVyYXRlQ29udGFjdFBhZ2UoKVxyXG4gICAgIH0pXHJcblxyXG5nZW5lcmF0ZUhlYWRlci5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGdlbmVyYXRlSG9tZXBhZ2UoKVxyXG59KVxyXG4vLyBjb25zdCBjaGFuZ2VQYWdlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdjaGFuZ2UtcGFnZScsICdjaGFuZ2VQYWdlJylcclxuLy8gY2hhbmdlUGFnZS50ZXh0Q29udGVudCA9ICdDaGFuZ2UnXHJcbi8vIGNvbnN0IG1haW5Db250ZW50ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRlbnQnKVxyXG4vLyBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjaGFuZ2VQYWdlKVxyXG5cclxuXHJcbi8vIGNoYW5nZVBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4vLyAgICAgZ2VuZXJhdGVDb250YWN0UGFnZSgpXHJcbi8vIH0pXHJcblxyXG5cclxuLy8gZ2VuZXJhdGVIb21lcGFnZSgpXHJcbi8vIGdlbmVyYXRlQ29udGFjdFBhZ2UoKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=