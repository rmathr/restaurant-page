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


const contactList = []

const createContact = (name, role, phone, order) => {
    const state = {
        name,
        role,
        phone,
        order
    }
    return { ...state }
}

const addContact = (name, role, phone, order) => { 
    const contact = createContact(name, role, phone, order)
    const domElements = {
        name: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', `${contact.name}-${contact.order}`, `${contact.name}${contact.order}`),
        role: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', `${contact.role}-${contact.order}`, `${contact.role}${contact.order}`),
        phone: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', `${contact.name}-${contact.order}-phone`, `${contact.name}-${contact.order}Phone`)
    }
    contactList.push(contact)
    return domElements

}

const generateContactPage = function () {
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    const mainContactContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('main', 'main-contact-content', 'mainContactContent')
    const contactTitle = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'contact-title', 'contactTitle')
    
    const containerOne = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-container', 'containerOne')
    const containerTwo = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-container', 'containerTwo')
    const containerThree = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-container', 'containerThree')

    const contactOne = addContact('Ellie', 'President', '(781) 214 6563', 0)
    const contactTwo = addContact('Dina', 'Vice-President', '(781) 147 788', 1)
    const contactThree = addContact('Joel', 'Chef', '(781) 154 4487', 2)
    
    mainContactContent.appendChild(contactTitle)
    containerOne.appendChild(contactOne.name)
    containerOne.appendChild(contactOne.role)
    containerOne.appendChild(contactOne.phone)

    containerTwo.appendChild(contactTwo.name)
    containerTwo.appendChild(contactTwo.role)
    containerTwo.appendChild(contactTwo.phone)

    containerThree.appendChild(contactThree.name)
    containerThree.appendChild(contactThree.role)
    containerThree.appendChild(contactThree.phone)


    mainContactContent.appendChild(containerOne)
    mainContactContent.appendChild(containerTwo)
    mainContactContent.appendChild(containerThree)
   
    contactTitle.textContent = 'Contact Us'
    contactOne.name.textContent = `${contactList[0].name}`
    contactOne.role.textContent = `${contactList[0].role}`
    contactOne.phone.textContent = `${contactList[0].phone}`

    contactTwo.name.textContent = `${contactList[1].name}`
    contactTwo.role.textContent = `${contactList[1].role}`
    contactTwo.phone.textContent = `${contactList[1].phone}`

    contactThree.name.textContent = `${contactList[2].name}`
    contactThree.role.textContent = `${contactList[2].role}`
    contactThree.phone.textContent = `${contactList[2].phone}`

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


const menu = {
    desserts: []
}

const createFood = (name, description, price, img, order) => {
    const state = {
        name,
        description,
        price,
        img,
        order
    }
    return { ...state }
}

const addFood = (name, description, price, img, order, type) => {
    const food = createFood(name, description, price, img, order)

    const domElements = {
        name: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'foods-name', `name#${food.order}`),
        description: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'foods-description', `description#${food.order}`),
        price: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'foods-price', `price#${food.order}`),
        img: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'foods-image', `image#${food.order}`)
    }
    menu[`${type}`].push(food)
    return domElements
}




const generateMenuContent = function () {
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    const mainMenuContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('main', 'main-menu-content', 'mainMenuContent')
    const menuTitle = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'menu-title', 'menuTitle')
    const dessertsContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'dessert-content', 'dessertContent')
    const dessertContainerOne = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'dessert-container', 'dessertContainerOne')
    const dessertContainerTwo = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'dessert-container', 'dessertContainerTwo')

    const dessertOne = addFood(
    "Caramel Cheesecake", 
    `Caramel Cheesecake combines the creamy texture of cheesecake with the rich, 
    buttery sweetness of caramel. Every bite of Caramel Cheesecake is a heavenly experience!`, 
    "7",
     "../src/img/dessert1.jpg",
    0,
    "desserts")


    const dessertTwo = addFood(
    "Raspberry Cheesecake", 
    `
    Raspberry Cheesecake perfectly blends the tangy sweetness of raspberries with 
    the creamy richness of cheesecake.Every slice of Raspberry Cheesecake will leave you craving for more."`, 
    "8", 
    "../src/img/dessert2.jpg", 
    1, 
    "desserts")


    mainMenuContent.appendChild(menuTitle)
    menuTitle.textContent = 'Menu'

    mainMenuContent.appendChild(dessertsContent)
    dessertsContent.appendChild(dessertContainerOne)
    dessertsContent.appendChild(dessertContainerTwo)

    dessertContainerOne.appendChild(dessertOne.name)
    dessertContainerOne.appendChild(dessertOne.description)
    dessertContainerOne.appendChild(dessertOne.price)
    dessertContainerOne.appendChild(dessertOne.img)

    dessertOne.name.textContent = `${menu.desserts[0].name}`
    dessertOne.description.textContent = `${menu.desserts[0].description}`
    dessertOne.price.textContent = `${menu.desserts[0].price}`
    dessertOne.img.src = `${menu.desserts[0].img}`

    dessertContainerTwo.appendChild(dessertTwo.name)
    dessertContainerTwo.appendChild(dessertTwo.description)
    dessertContainerTwo.appendChild(dessertTwo.price)
    dessertContainerTwo.appendChild(dessertTwo.img)

    dessertTwo.name.textContent = `${menu.desserts[1].name}`
    dessertTwo.description.textContent = `${menu.desserts[1].description}`
    dessertTwo.price.textContent = `${menu.desserts[1].price}`
    dessertTwo.img.src = `${menu.desserts[1].img}`

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW50ZXJhY3QtZG9tLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3QtZG9tXCI7XHJcblxyXG5jb25zdCBjb250YWN0TGlzdCA9IFtdXHJcblxyXG5jb25zdCBjcmVhdGVDb250YWN0ID0gKG5hbWUsIHJvbGUsIHBob25lLCBvcmRlcikgPT4ge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICByb2xlLFxyXG4gICAgICAgIHBob25lLFxyXG4gICAgICAgIG9yZGVyXHJcbiAgICB9XHJcbiAgICByZXR1cm4geyAuLi5zdGF0ZSB9XHJcbn1cclxuXHJcbmNvbnN0IGFkZENvbnRhY3QgPSAobmFtZSwgcm9sZSwgcGhvbmUsIG9yZGVyKSA9PiB7IFxyXG4gICAgY29uc3QgY29udGFjdCA9IGNyZWF0ZUNvbnRhY3QobmFtZSwgcm9sZSwgcGhvbmUsIG9yZGVyKVxyXG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSB7XHJcbiAgICAgICAgbmFtZTogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCBgJHtjb250YWN0Lm5hbWV9LSR7Y29udGFjdC5vcmRlcn1gLCBgJHtjb250YWN0Lm5hbWV9JHtjb250YWN0Lm9yZGVyfWApLFxyXG4gICAgICAgIHJvbGU6IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgYCR7Y29udGFjdC5yb2xlfS0ke2NvbnRhY3Qub3JkZXJ9YCwgYCR7Y29udGFjdC5yb2xlfSR7Y29udGFjdC5vcmRlcn1gKSxcclxuICAgICAgICBwaG9uZTogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCBgJHtjb250YWN0Lm5hbWV9LSR7Y29udGFjdC5vcmRlcn0tcGhvbmVgLCBgJHtjb250YWN0Lm5hbWV9LSR7Y29udGFjdC5vcmRlcn1QaG9uZWApXHJcbiAgICB9XHJcbiAgICBjb250YWN0TGlzdC5wdXNoKGNvbnRhY3QpXHJcbiAgICByZXR1cm4gZG9tRWxlbWVudHNcclxuXHJcbn1cclxuXHJcbmNvbnN0IGdlbmVyYXRlQ29udGFjdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250ZW50JylcclxuICAgIGNvbnN0IG1haW5Db250YWN0Q29udGVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdtYWluJywgJ21haW4tY29udGFjdC1jb250ZW50JywgJ21haW5Db250YWN0Q29udGVudCcpXHJcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdjb250YWN0LXRpdGxlJywgJ2NvbnRhY3RUaXRsZScpXHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRhaW5lck9uZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY29udGFjdC1jb250YWluZXInLCAnY29udGFpbmVyT25lJylcclxuICAgIGNvbnN0IGNvbnRhaW5lclR3byA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY29udGFjdC1jb250YWluZXInLCAnY29udGFpbmVyVHdvJylcclxuICAgIGNvbnN0IGNvbnRhaW5lclRocmVlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdjb250YWN0LWNvbnRhaW5lcicsICdjb250YWluZXJUaHJlZScpXHJcblxyXG4gICAgY29uc3QgY29udGFjdE9uZSA9IGFkZENvbnRhY3QoJ0VsbGllJywgJ1ByZXNpZGVudCcsICcoNzgxKSAyMTQgNjU2MycsIDApXHJcbiAgICBjb25zdCBjb250YWN0VHdvID0gYWRkQ29udGFjdCgnRGluYScsICdWaWNlLVByZXNpZGVudCcsICcoNzgxKSAxNDcgNzg4JywgMSlcclxuICAgIGNvbnN0IGNvbnRhY3RUaHJlZSA9IGFkZENvbnRhY3QoJ0pvZWwnLCAnQ2hlZicsICcoNzgxKSAxNTQgNDQ4NycsIDIpXHJcbiAgICBcclxuICAgIG1haW5Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpXHJcbiAgICBjb250YWluZXJPbmUuYXBwZW5kQ2hpbGQoY29udGFjdE9uZS5uYW1lKVxyXG4gICAgY29udGFpbmVyT25lLmFwcGVuZENoaWxkKGNvbnRhY3RPbmUucm9sZSlcclxuICAgIGNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChjb250YWN0T25lLnBob25lKVxyXG5cclxuICAgIGNvbnRhaW5lclR3by5hcHBlbmRDaGlsZChjb250YWN0VHdvLm5hbWUpXHJcbiAgICBjb250YWluZXJUd28uYXBwZW5kQ2hpbGQoY29udGFjdFR3by5yb2xlKVxyXG4gICAgY29udGFpbmVyVHdvLmFwcGVuZENoaWxkKGNvbnRhY3RUd28ucGhvbmUpXHJcblxyXG4gICAgY29udGFpbmVyVGhyZWUuYXBwZW5kQ2hpbGQoY29udGFjdFRocmVlLm5hbWUpXHJcbiAgICBjb250YWluZXJUaHJlZS5hcHBlbmRDaGlsZChjb250YWN0VGhyZWUucm9sZSlcclxuICAgIGNvbnRhaW5lclRocmVlLmFwcGVuZENoaWxkKGNvbnRhY3RUaHJlZS5waG9uZSlcclxuXHJcblxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lck9uZSlcclxuICAgIG1haW5Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJUd28pXHJcbiAgICBtYWluQ29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyVGhyZWUpXHJcbiAgIFxyXG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnXHJcbiAgICBjb250YWN0T25lLm5hbWUudGV4dENvbnRlbnQgPSBgJHtjb250YWN0TGlzdFswXS5uYW1lfWBcclxuICAgIGNvbnRhY3RPbmUucm9sZS50ZXh0Q29udGVudCA9IGAke2NvbnRhY3RMaXN0WzBdLnJvbGV9YFxyXG4gICAgY29udGFjdE9uZS5waG9uZS50ZXh0Q29udGVudCA9IGAke2NvbnRhY3RMaXN0WzBdLnBob25lfWBcclxuXHJcbiAgICBjb250YWN0VHdvLm5hbWUudGV4dENvbnRlbnQgPSBgJHtjb250YWN0TGlzdFsxXS5uYW1lfWBcclxuICAgIGNvbnRhY3RUd28ucm9sZS50ZXh0Q29udGVudCA9IGAke2NvbnRhY3RMaXN0WzFdLnJvbGV9YFxyXG4gICAgY29udGFjdFR3by5waG9uZS50ZXh0Q29udGVudCA9IGAke2NvbnRhY3RMaXN0WzFdLnBob25lfWBcclxuXHJcbiAgICBjb250YWN0VGhyZWUubmFtZS50ZXh0Q29udGVudCA9IGAke2NvbnRhY3RMaXN0WzJdLm5hbWV9YFxyXG4gICAgY29udGFjdFRocmVlLnJvbGUudGV4dENvbnRlbnQgPSBgJHtjb250YWN0TGlzdFsyXS5yb2xlfWBcclxuICAgIGNvbnRhY3RUaHJlZS5waG9uZS50ZXh0Q29udGVudCA9IGAke2NvbnRhY3RMaXN0WzJdLnBob25lfWBcclxuXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFjdENvbnRlbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29udGFjdFBhZ2VcclxuIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVIb21lcGFnZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBob21lTWFpbkVsZW0gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnbWFpbicsICdob21lLW1haW4tY29udGVudCcsJ2hvbWVNYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBwYWdlVGl0bGVFbGVtID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAncGFnZS10aXRsZScsICdwYWdlVGl0bGUnKVxyXG4gICAgY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24nLCAncmVzdGF1cmFudERlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRlbnQnKVxyXG4gICAgXHJcbiAgICAvLyBjb25zdCBob21lTWFpbiA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2hvbWVNYWluQ29udGVudCcpXHJcbiAgICAvLyBjb25zdCBwYWdlVGl0bGUgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdwYWdlVGl0bGUnKVxyXG4gICAgLy8gY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgncmVzdGF1cmFudERlc2NyaXB0aW9uJylcclxuXHJcbiAgICBob21lTWFpbkVsZW0uYXBwZW5kQ2hpbGQocGFnZVRpdGxlRWxlbSlcclxuICAgIGhvbWVNYWluRWxlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtKVxyXG5cclxuICAgIHBhZ2VUaXRsZUVsZW0udGV4dENvbnRlbnQgPSAnRmlyZXNpZGUgVGF2ZXJuJ1xyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbS50ZXh0Q29udGVudCA9IFwiRmlyZXNpZGUgVGF2ZXJuIGlzIGEgY296eSBhbmQgd2VsY29taW5nIHJlc3RhdXJhbnQgdGhhdCBleHVkZXMgd2FybXRoIGFuZCBjb21mb3J0LiBUaGUgYXRtb3NwaGVyZSBpcyByZW1pbmlzY2VudCBvZiBhIHJ1c3RpYyBsb2RnZSwgd2l0aCBleHBvc2VkIHdvb2RlbiBiZWFtcywgc3RvbmUgd2FsbHMsIGFuZCBhIGNlbnRyYWwgZmlyZXBsYWNlIHRoYXQgY3JlYXRlcyBhIGNvenkgYW5kIGludGltYXRlIGRpbmluZyBleHBlcmllbmNlLiBUaGUgbWVudSBmZWF0dXJlcyBjbGFzc2ljIGNvbWZvcnQgZm9vZCBkaXNoZXMgd2l0aCBhIG1vZGVybiB0d2lzdCwgYXMgd2VsbCBhcyBhIHNlbGVjdGlvbiBvZiBjcmFmdCBjb2NrdGFpbHMgYW5kIGxvY2FsIGJlZXJzIG9uIHRhcC4gU2lnbmF0dXJlIGRpc2hlcyBpbmNsdWRlIGEgbW91dGh3YXRlcmluZyBiYWNvbi13cmFwcGVkIG1lYXRsb2FmLCBhIGhlYXJ0eSBiZWVmIHN0ZXcsIGFuZCBhIGRlbGVjdGFibGUgbWFjIGFuZCBjaGVlc2Ugd2l0aCBhIGNyaXNweSBicmVhZGNydW1iIHRvcHBpbmcuIFRoZSByZXN0YXVyYW50IGFsc28gb2ZmZXJzIGEgY2FyZWZ1bGx5IGN1cmF0ZWQgd2luZSBsaXN0LCB3aXRoIG9wdGlvbnMgdG8gc3VpdCBldmVyeSBwYWxhdGUgYW5kIGJ1ZGdldC4gV2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgYSByb21hbnRpYyBkaW5uZXIgZm9yIHR3byBvciBhIGZ1biBuaWdodCBvdXQgd2l0aCBmcmllbmRzLCBGaXJlc2lkZSBUYXZlcm4gaXMgdGhlIHBlcmZlY3QgZGVzdGluYXRpb24gZm9yIGEgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlLlwiXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZU1haW5FbGVtKVxyXG4gICAgLy8gcmV0dXJuIGhvbWVNYWluXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSG9tZXBhZ2UiLCJjb25zdCBpbnRlcmFjdERPTSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpXHJcblxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCA9IGZ1bmN0aW9uKHR5cGUsIGNsYXNzTmFtZSwgaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YClcclxuICAgICAgICBlbGVtZW50LmlkID0gYCR7aWROYW1lfWBcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhvb2tET01lbGVtZW50ID0gZnVuY3Rpb24gKGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkTmFtZX1gKVxyXG4gICAgICAgIHJldHVybiBlbGVtXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbWFpbkNvbnRlbnQsIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCwgaG9va0RPTWVsZW1lbnQgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdERPTSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdC1kb21cIjtcclxuXHJcbmNvbnN0IG1lbnUgPSB7XHJcbiAgICBkZXNzZXJ0czogW11cclxufVxyXG5cclxuY29uc3QgY3JlYXRlRm9vZCA9IChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltZywgb3JkZXIpID0+IHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgaW1nLFxyXG4gICAgICAgIG9yZGVyXHJcbiAgICB9XHJcbiAgICByZXR1cm4geyAuLi5zdGF0ZSB9XHJcbn1cclxuXHJcbmNvbnN0IGFkZEZvb2QgPSAobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWcsIG9yZGVyLCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBmb29kID0gY3JlYXRlRm9vZChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltZywgb3JkZXIpXHJcblxyXG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSB7XHJcbiAgICAgICAgbmFtZTogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZm9vZHMtbmFtZScsIGBuYW1lIyR7Zm9vZC5vcmRlcn1gKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZm9vZHMtZGVzY3JpcHRpb24nLCBgZGVzY3JpcHRpb24jJHtmb29kLm9yZGVyfWApLFxyXG4gICAgICAgIHByaWNlOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdmb29kcy1wcmljZScsIGBwcmljZSMke2Zvb2Qub3JkZXJ9YCksXHJcbiAgICAgICAgaW1nOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW1nJywgJ2Zvb2RzLWltYWdlJywgYGltYWdlIyR7Zm9vZC5vcmRlcn1gKVxyXG4gICAgfVxyXG4gICAgbWVudVtgJHt0eXBlfWBdLnB1c2goZm9vZClcclxuICAgIHJldHVybiBkb21FbGVtZW50c1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBnZW5lcmF0ZU1lbnVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBtYWluTWVudUNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnbWFpbicsICdtYWluLW1lbnUtY29udGVudCcsICdtYWluTWVudUNvbnRlbnQnKVxyXG4gICAgY29uc3QgbWVudVRpdGxlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnbWVudS10aXRsZScsICdtZW51VGl0bGUnKVxyXG4gICAgY29uc3QgZGVzc2VydHNDb250ZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdkZXNzZXJ0LWNvbnRlbnQnLCAnZGVzc2VydENvbnRlbnQnKVxyXG4gICAgY29uc3QgZGVzc2VydENvbnRhaW5lck9uZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnZGVzc2VydC1jb250YWluZXInLCAnZGVzc2VydENvbnRhaW5lck9uZScpXHJcbiAgICBjb25zdCBkZXNzZXJ0Q29udGFpbmVyVHdvID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdkZXNzZXJ0LWNvbnRhaW5lcicsICdkZXNzZXJ0Q29udGFpbmVyVHdvJylcclxuXHJcbiAgICBjb25zdCBkZXNzZXJ0T25lID0gYWRkRm9vZChcclxuICAgIFwiQ2FyYW1lbCBDaGVlc2VjYWtlXCIsIFxyXG4gICAgYENhcmFtZWwgQ2hlZXNlY2FrZSBjb21iaW5lcyB0aGUgY3JlYW15IHRleHR1cmUgb2YgY2hlZXNlY2FrZSB3aXRoIHRoZSByaWNoLCBcclxuICAgIGJ1dHRlcnkgc3dlZXRuZXNzIG9mIGNhcmFtZWwuIEV2ZXJ5IGJpdGUgb2YgQ2FyYW1lbCBDaGVlc2VjYWtlIGlzIGEgaGVhdmVubHkgZXhwZXJpZW5jZSFgLCBcclxuICAgIFwiN1wiLFxyXG4gICAgIFwiLi4vc3JjL2ltZy9kZXNzZXJ0MS5qcGdcIixcclxuICAgIDAsXHJcbiAgICBcImRlc3NlcnRzXCIpXHJcblxyXG5cclxuICAgIGNvbnN0IGRlc3NlcnRUd28gPSBhZGRGb29kKFxyXG4gICAgXCJSYXNwYmVycnkgQ2hlZXNlY2FrZVwiLCBcclxuICAgIGBcclxuICAgIFJhc3BiZXJyeSBDaGVlc2VjYWtlIHBlcmZlY3RseSBibGVuZHMgdGhlIHRhbmd5IHN3ZWV0bmVzcyBvZiByYXNwYmVycmllcyB3aXRoIFxyXG4gICAgdGhlIGNyZWFteSByaWNobmVzcyBvZiBjaGVlc2VjYWtlLkV2ZXJ5IHNsaWNlIG9mIFJhc3BiZXJyeSBDaGVlc2VjYWtlIHdpbGwgbGVhdmUgeW91IGNyYXZpbmcgZm9yIG1vcmUuXCJgLCBcclxuICAgIFwiOFwiLCBcclxuICAgIFwiLi4vc3JjL2ltZy9kZXNzZXJ0Mi5qcGdcIiwgXHJcbiAgICAxLCBcclxuICAgIFwiZGVzc2VydHNcIilcclxuXHJcblxyXG4gICAgbWFpbk1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVUaXRsZSlcclxuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdNZW51J1xyXG5cclxuICAgIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0c0NvbnRlbnQpXHJcbiAgICBkZXNzZXJ0c0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydENvbnRhaW5lck9uZSlcclxuICAgIGRlc3NlcnRzQ29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0Q29udGFpbmVyVHdvKVxyXG5cclxuICAgIGRlc3NlcnRDb250YWluZXJPbmUuYXBwZW5kQ2hpbGQoZGVzc2VydE9uZS5uYW1lKVxyXG4gICAgZGVzc2VydENvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChkZXNzZXJ0T25lLmRlc2NyaXB0aW9uKVxyXG4gICAgZGVzc2VydENvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChkZXNzZXJ0T25lLnByaWNlKVxyXG4gICAgZGVzc2VydENvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChkZXNzZXJ0T25lLmltZylcclxuXHJcbiAgICBkZXNzZXJ0T25lLm5hbWUudGV4dENvbnRlbnQgPSBgJHttZW51LmRlc3NlcnRzWzBdLm5hbWV9YFxyXG4gICAgZGVzc2VydE9uZS5kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke21lbnUuZGVzc2VydHNbMF0uZGVzY3JpcHRpb259YFxyXG4gICAgZGVzc2VydE9uZS5wcmljZS50ZXh0Q29udGVudCA9IGAke21lbnUuZGVzc2VydHNbMF0ucHJpY2V9YFxyXG4gICAgZGVzc2VydE9uZS5pbWcuc3JjID0gYCR7bWVudS5kZXNzZXJ0c1swXS5pbWd9YFxyXG5cclxuICAgIGRlc3NlcnRDb250YWluZXJUd28uYXBwZW5kQ2hpbGQoZGVzc2VydFR3by5uYW1lKVxyXG4gICAgZGVzc2VydENvbnRhaW5lclR3by5hcHBlbmRDaGlsZChkZXNzZXJ0VHdvLmRlc2NyaXB0aW9uKVxyXG4gICAgZGVzc2VydENvbnRhaW5lclR3by5hcHBlbmRDaGlsZChkZXNzZXJ0VHdvLnByaWNlKVxyXG4gICAgZGVzc2VydENvbnRhaW5lclR3by5hcHBlbmRDaGlsZChkZXNzZXJ0VHdvLmltZylcclxuXHJcbiAgICBkZXNzZXJ0VHdvLm5hbWUudGV4dENvbnRlbnQgPSBgJHttZW51LmRlc3NlcnRzWzFdLm5hbWV9YFxyXG4gICAgZGVzc2VydFR3by5kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke21lbnUuZGVzc2VydHNbMV0uZGVzY3JpcHRpb259YFxyXG4gICAgZGVzc2VydFR3by5wcmljZS50ZXh0Q29udGVudCA9IGAke21lbnUuZGVzc2VydHNbMV0ucHJpY2V9YFxyXG4gICAgZGVzc2VydFR3by5pbWcuc3JjID0gYCR7bWVudS5kZXNzZXJ0c1sxXS5pbWd9YFxyXG5cclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5NZW51Q29udGVudClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVNZW51Q29udGVudCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiXHJcbmltcG9ydCBnZW5lcmF0ZUhvbWVwYWdlIGZyb20gXCIuL2hvbWVcIlxyXG5pbXBvcnQgZ2VuZXJhdGVNZW51Q29udGVudCBmcm9tIFwiLi9tZW51XCJcclxuaW1wb3J0IGdlbmVyYXRlQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiXHJcblxyXG5jb25zdCBnZW5lcmF0ZUhlYWRlciA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdoZWFkZXInLCAnbWFpbi1oZWFkZXInLCAnbWFpbkhlYWRlcicpXHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250ZW50JylcclxuICAgIFxyXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnaG9tZS1wYWdlJywgJ2hvbWVQYWdlJylcclxuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSdcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ21lbnUtcGFnZScsICdtZW51UGFnZScpXHJcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnXHJcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdjb250YWN0LXBhZ2UnLCAnY29udGFjdFBhZ2UnKVxyXG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0J1xyXG5cclxuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbilcclxuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcclxuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbilcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5IZWFkZXIpXHJcbiAgICByZXR1cm4geyBob21lQnV0dG9uLCBtZW51QnV0dG9uLCBjb250YWN0QnV0dG9uLCBtYWluQ29udGVudCB9XHJcbn0pKClcclxuXHJcbmNvbnN0IGNsZWFyRE9NID0gZnVuY3Rpb24oKXtcclxuICAgIHdoaWxlIChnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICBnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5yZW1vdmVDaGlsZChnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG59XHJcblxyXG5nZW5lcmF0ZUhlYWRlci5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNsZWFyRE9NKClcclxuICAgIGdlbmVyYXRlQ29udGFjdFBhZ2UoKVxyXG59KVxyXG5cclxuZ2VuZXJhdGVIZWFkZXIubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNsZWFyRE9NKClcclxuICAgIGdlbmVyYXRlTWVudUNvbnRlbnQoKVxyXG59KVxyXG5cclxuZ2VuZXJhdGVIZWFkZXIuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjbGVhckRPTSgpXHJcbiAgICBnZW5lcmF0ZUhvbWVwYWdlKClcclxufSlcclxuLy8gY29uc3QgY2hhbmdlUGFnZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY2hhbmdlLXBhZ2UnLCAnY2hhbmdlUGFnZScpXHJcbi8vIGNoYW5nZVBhZ2UudGV4dENvbnRlbnQgPSAnQ2hhbmdlJ1xyXG4vLyBjb25zdCBtYWluQ29udGVudCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250ZW50JylcclxuLy8gbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hhbmdlUGFnZSlcclxuXHJcblxyXG4vLyBjaGFuZ2VQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuLy8gICAgIGdlbmVyYXRlQ29udGFjdFBhZ2UoKVxyXG4vLyB9KVxyXG5cclxuXHJcbi8vIGdlbmVyYXRlSG9tZXBhZ2UoKVxyXG4vLyBnZW5lcmF0ZUNvbnRhY3RQYWdlKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9