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

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interact_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interact-dom */ "./src/interact-dom.js");



const generateMenuContent = function () {
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    const mainMenuContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('main', 'main-menu-content', 'mainMenuContent')
    const menuTitle = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'menu-title', 'menuTitle')

    mainMenuContent.appendChild(menuTitle)
    menuTitle.textContent = 'Menu'

    mainContent.appendChild(mainMenuContent)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenuContent);

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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const generateHeader = (function(){
    const mainHeader = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('header', 'main-header', 'mainHeader')
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    
    const homeButton = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'home-page', 'homePage')
    homeButton.textContent = 'Home'
    const menuButton = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'menu-page', 'menuPage')
    menuButton.textContent = 'Menu'
    const contactButton = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'contact-page', 'contactPage')
    contactButton.textContent = 'Contact'

    mainHeader.appendChild(homeButton)
    mainHeader.appendChild(menuButton)
    mainHeader.appendChild(contactButton)

    document.body.appendChild(mainHeader)
    return { homeButton, menuButton, contactButton, mainContent }
})()

const clearDOM = function(){
    while (generateHeader.mainContent.hasChildNodes()) {
        generateHeader.mainContent.removeChild(generateHeader.mainContent.firstChild);
      }
}

generateHeader.contactButton.addEventListener('click', e => {
    e.preventDefault()
    clearDOM()
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])()
})

generateHeader.menuButton.addEventListener('click', e =>{
    e.preventDefault()
    clearDOM()
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
})

generateHeader.homeButton.addEventListener('click', e => {
    e.preventDefault()
    clearDOM()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDekM7QUFDQTtBQUNBLHdCQUF3Qix5REFBVztBQUNuQywrQkFBK0IseURBQVc7QUFDMUMseUJBQXlCLHlEQUFXO0FBQ3BDO0FBQ0EsNkJBQTZCLHlEQUFXO0FBQ3hDLDZCQUE2Qix5REFBVztBQUN4Qyw4QkFBOEIseURBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCTztBQUN6QztBQUNBO0FBQ0EseUJBQXlCLHlEQUFXO0FBQ3BDLDBCQUEwQix5REFBVztBQUNyQyxzQ0FBc0MseURBQVc7QUFDakQsd0JBQXdCLHlEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzVCZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQyx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ25CMEI7QUFDekM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlEQUFXO0FBQ25DLDRCQUE0Qix5REFBVztBQUN2QyxzQkFBc0IseURBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7O1VDZGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNIO0FBQ0c7QUFDRztBQUMzQztBQUNBO0FBQ0EsdUJBQXVCLHlEQUFXO0FBQ2xDLHdCQUF3Qix5REFBVztBQUNuQztBQUNBLHVCQUF1Qix5REFBVztBQUNsQztBQUNBLHVCQUF1Qix5REFBVztBQUNsQztBQUNBLDBCQUEwQix5REFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFtQjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFtQjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFnQjtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ludGVyYWN0LWRvbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVDb250YWN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRlbnQnKVxyXG4gICAgY29uc3QgbWFpbkNvbnRhY3RDb250ZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ21haW4nLCAnbWFpbi1jb250YWN0LWNvbnRlbnQnLCAnbWFpbkNvbnRhY3RDb250ZW50JylcclxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2NvbnRhY3QtdGl0bGUnLCAnY29udGFjdFRpdGxlJylcclxuXHJcbiAgICBjb25zdCBmaXJzdENvbnRhY3ROYW1lID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZmlyc3QtY29udGFjdC1uYW1lJywgJ2ZpcnN0Q29udGFjdE5hbWUnKVxyXG4gICAgY29uc3QgZmlyc3RDb250YWN0Um9sZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2ZpcnN0LWNvbnRhY3Qtcm9sZScsICdmaXJzdENvbnRhY3RSb2xlJylcclxuICAgIGNvbnN0IGZpcnN0Q29udGFjdFBob25lID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZmlyc3QtY29udGFjdC1waG9uZScsICdmaXJzdENvbnRhY3RQaG9uZScpXHJcblxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSlcclxuICAgIG1haW5Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChmaXJzdENvbnRhY3ROYW1lKVxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGZpcnN0Q29udGFjdFJvbGUpXHJcbiAgICBtYWluQ29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoZmlyc3RDb250YWN0UGhvbmUpXHJcblxyXG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnXHJcbiAgICBmaXJzdENvbnRhY3ROYW1lLnRleHRDb250ZW50ID0gJ09zY2FyIFN0b25lJ1xyXG4gICAgZmlyc3RDb250YWN0Um9sZS50ZXh0Q29udGVudCA9ICdDaGVmJ1xyXG4gICAgZmlyc3RDb250YWN0UGhvbmUudGV4dENvbnRlbnQgPSAnKDQ3OCkgNjU4IDExMidcclxuXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFjdENvbnRlbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29udGFjdFBhZ2VcclxuIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVIb21lcGFnZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBob21lTWFpbkVsZW0gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnbWFpbicsICdob21lLW1haW4tY29udGVudCcsJ2hvbWVNYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBwYWdlVGl0bGVFbGVtID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAncGFnZS10aXRsZScsICdwYWdlVGl0bGUnKVxyXG4gICAgY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24nLCAncmVzdGF1cmFudERlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRlbnQnKVxyXG4gICAgXHJcbiAgICAvLyBjb25zdCBob21lTWFpbiA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2hvbWVNYWluQ29udGVudCcpXHJcbiAgICAvLyBjb25zdCBwYWdlVGl0bGUgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdwYWdlVGl0bGUnKVxyXG4gICAgLy8gY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgncmVzdGF1cmFudERlc2NyaXB0aW9uJylcclxuXHJcbiAgICBob21lTWFpbkVsZW0uYXBwZW5kQ2hpbGQocGFnZVRpdGxlRWxlbSlcclxuICAgIGhvbWVNYWluRWxlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtKVxyXG5cclxuICAgIHBhZ2VUaXRsZUVsZW0udGV4dENvbnRlbnQgPSAnRmlyZXNpZGUgVGF2ZXJuJ1xyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbS50ZXh0Q29udGVudCA9IFwiRmlyZXNpZGUgVGF2ZXJuIGlzIGEgY296eSBhbmQgd2VsY29taW5nIHJlc3RhdXJhbnQgdGhhdCBleHVkZXMgd2FybXRoIGFuZCBjb21mb3J0LiBUaGUgYXRtb3NwaGVyZSBpcyByZW1pbmlzY2VudCBvZiBhIHJ1c3RpYyBsb2RnZSwgd2l0aCBleHBvc2VkIHdvb2RlbiBiZWFtcywgc3RvbmUgd2FsbHMsIGFuZCBhIGNlbnRyYWwgZmlyZXBsYWNlIHRoYXQgY3JlYXRlcyBhIGNvenkgYW5kIGludGltYXRlIGRpbmluZyBleHBlcmllbmNlLiBUaGUgbWVudSBmZWF0dXJlcyBjbGFzc2ljIGNvbWZvcnQgZm9vZCBkaXNoZXMgd2l0aCBhIG1vZGVybiB0d2lzdCwgYXMgd2VsbCBhcyBhIHNlbGVjdGlvbiBvZiBjcmFmdCBjb2NrdGFpbHMgYW5kIGxvY2FsIGJlZXJzIG9uIHRhcC4gU2lnbmF0dXJlIGRpc2hlcyBpbmNsdWRlIGEgbW91dGh3YXRlcmluZyBiYWNvbi13cmFwcGVkIG1lYXRsb2FmLCBhIGhlYXJ0eSBiZWVmIHN0ZXcsIGFuZCBhIGRlbGVjdGFibGUgbWFjIGFuZCBjaGVlc2Ugd2l0aCBhIGNyaXNweSBicmVhZGNydW1iIHRvcHBpbmcuIFRoZSByZXN0YXVyYW50IGFsc28gb2ZmZXJzIGEgY2FyZWZ1bGx5IGN1cmF0ZWQgd2luZSBsaXN0LCB3aXRoIG9wdGlvbnMgdG8gc3VpdCBldmVyeSBwYWxhdGUgYW5kIGJ1ZGdldC4gV2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgYSByb21hbnRpYyBkaW5uZXIgZm9yIHR3byBvciBhIGZ1biBuaWdodCBvdXQgd2l0aCBmcmllbmRzLCBGaXJlc2lkZSBUYXZlcm4gaXMgdGhlIHBlcmZlY3QgZGVzdGluYXRpb24gZm9yIGEgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlLlwiXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZU1haW5FbGVtKVxyXG4gICAgLy8gcmV0dXJuIGhvbWVNYWluXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSG9tZXBhZ2UiLCJjb25zdCBpbnRlcmFjdERPTSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpXHJcblxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCA9IGZ1bmN0aW9uKHR5cGUsIGNsYXNzTmFtZSwgaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YClcclxuICAgICAgICBlbGVtZW50LmlkID0gYCR7aWROYW1lfWBcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhvb2tET01lbGVtZW50ID0gZnVuY3Rpb24gKGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkTmFtZX1gKVxyXG4gICAgICAgIHJldHVybiBlbGVtXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbWFpbkNvbnRlbnQsIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCwgaG9va0RPTWVsZW1lbnQgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdERPTSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdC1kb21cIjtcclxuXHJcblxyXG5jb25zdCBnZW5lcmF0ZU1lbnVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBtYWluTWVudUNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnbWFpbicsICdtYWluLW1lbnUtY29udGVudCcsICdtYWluTWVudUNvbnRlbnQnKVxyXG4gICAgY29uc3QgbWVudVRpdGxlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnbWVudS10aXRsZScsICdtZW51VGl0bGUnKVxyXG5cclxuICAgIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51VGl0bGUpXHJcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSdcclxuXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluTWVudUNvbnRlbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTWVudUNvbnRlbnQiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdC1kb21cIlxyXG5pbXBvcnQgZ2VuZXJhdGVIb21lcGFnZSBmcm9tIFwiLi9ob21lXCJcclxuaW1wb3J0IGdlbmVyYXRlTWVudUNvbnRlbnQgZnJvbSBcIi4vbWVudVwiXHJcbmltcG9ydCBnZW5lcmF0ZUNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIlxyXG5cclxuY29uc3QgZ2VuZXJhdGVIZWFkZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaGVhZGVyJywgJ21haW4taGVhZGVyJywgJ21haW5IZWFkZXInKVxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcbiAgICBcclxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2hvbWUtcGFnZScsICdob21lUGFnZScpXHJcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnXHJcbiAgICBjb25zdCBtZW51QnV0dG9uID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdtZW51LXBhZ2UnLCAnbWVudVBhZ2UnKVxyXG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51J1xyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY29udGFjdC1wYWdlJywgJ2NvbnRhY3RQYWdlJylcclxuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCdcclxuXHJcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pXHJcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXHJcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluSGVhZGVyKVxyXG4gICAgcmV0dXJuIHsgaG9tZUJ1dHRvbiwgbWVudUJ1dHRvbiwgY29udGFjdEJ1dHRvbiwgbWFpbkNvbnRlbnQgfVxyXG59KSgpXHJcblxyXG5jb25zdCBjbGVhckRPTSA9IGZ1bmN0aW9uKCl7XHJcbiAgICB3aGlsZSAoZ2VuZXJhdGVIZWFkZXIubWFpbkNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgZ2VuZXJhdGVIZWFkZXIubWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQoZ2VuZXJhdGVIZWFkZXIubWFpbkNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgIH1cclxufVxyXG5cclxuZ2VuZXJhdGVIZWFkZXIuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjbGVhckRPTSgpXHJcbiAgICBnZW5lcmF0ZUNvbnRhY3RQYWdlKClcclxufSlcclxuXHJcbmdlbmVyYXRlSGVhZGVyLm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjbGVhckRPTSgpXHJcbiAgICBnZW5lcmF0ZU1lbnVDb250ZW50KClcclxufSlcclxuXHJcbmdlbmVyYXRlSGVhZGVyLmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY2xlYXJET00oKVxyXG4gICAgZ2VuZXJhdGVIb21lcGFnZSgpXHJcbn0pXHJcbi8vIGNvbnN0IGNoYW5nZVBhZ2UgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2NoYW5nZS1wYWdlJywgJ2NoYW5nZVBhZ2UnKVxyXG4vLyBjaGFuZ2VQYWdlLnRleHRDb250ZW50ID0gJ0NoYW5nZSdcclxuLy8gY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcbi8vIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNoYW5nZVBhZ2UpXHJcblxyXG5cclxuLy8gY2hhbmdlUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbi8vICAgICBnZW5lcmF0ZUNvbnRhY3RQYWdlKClcclxuLy8gfSlcclxuXHJcblxyXG4vLyBnZW5lcmF0ZUhvbWVwYWdlKClcclxuLy8gZ2VuZXJhdGVDb250YWN0UGFnZSgpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==