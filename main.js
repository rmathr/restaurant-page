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
    const restaurantDescriptionElem = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'restaurant-description', 'restaurantDescription')
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    const descriptionParagraphOne = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'description-paragraph', 'descriptionParagraphOne')
    const descriptionParagraphTwo = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'description-paragraph', 'descriptionParagraphTwo')
    const descriptionParagraphThree = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'description-paragraph', 'descriptionParagraphThree')
    const descriptionParagraphFour = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'description-paragraph', 'descriptionParagraphFour')
    
    // const homeMain = interactDOM().hookDOMelement('homeMainContent')
    // const pageTitle = interactDOM().hookDOMelement('pageTitle')
    // const restaurantDescription = interactDOM().hookDOMelement('restaurantDescription')

    homeMainElem.appendChild(pageTitleElem)
    homeMainElem.appendChild(restaurantDescriptionElem)
    restaurantDescriptionElem.appendChild(descriptionParagraphOne)
    restaurantDescriptionElem.appendChild(descriptionParagraphTwo)
    restaurantDescriptionElem.appendChild(descriptionParagraphThree)
    restaurantDescriptionElem.appendChild(descriptionParagraphFour)

    pageTitleElem.textContent = 'The Last Bite'
    
    descriptionParagraphOne.textContent = "The Last Bite is a small, post-apocalyptic burger joint located in the heart of Jackson, a town ravaged by nature and time. Despite its rundown appearance, The Last Bite has become a beloved local institution, serving up hearty burgers and fries to weary customers looking for a moment of respite in a harsh and unforgiving world."
    descriptionParagraphTwo.textContent = "The menu at The Last Bite is simple yet satisfying, featuring classic burgers and sides made with fresh, locally sourced ingredients. The burgers are cooked to perfection on a grill in full view of the customers, with the aroma of sizzling beef wafting through the cramped and dimly lit space."
    descriptionParagraphThree.textContent = "Despite the desolate surroundings, the atmosphere inside The Last Bite is warm and welcoming, with vintage posters and photographs adorning the walls and a few small tables and chairs scattered throughout the space. Customers often linger over their meals, swapping stories and sharing a moment of camaraderie amidst the ruins of their world."
    descriptionParagraphFour.textContent = "At The Last Bite, every burger is savored as if it might be the last. For the weary travelers and survivors of the apocalypse who pass through Jackson, The Last Bite is a beacon of hope and a reminder that even in the darkest of times, there is still joy to be found in a well-cooked burger and a moment of respite."




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

    const appendElementAndDefineContent = function(container, element, menu , type, order){
        container.appendChild(element.name)
        container.appendChild(element.ingredients)
        // container.appendChild(element.price)
        container.appendChild(element.img)

        element.name.textContent = `${menu[`${type}`][order].name}`
        element.ingredients.textContent = `${menu[`${type}`][order].ingredients}`
        // element.price.textContent = `${menu[`${type}`][order].price}`
        element.img.src = `${menu[`${type}`][order].img}`

    }

    return { mainContent, createElementWithClassAndId, hookDOMelement, appendElementAndDefineContent }
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
    desserts: [
        {
            name: "Caramel Cheesecake",
            ingredients: "Cracker crumbs, sugar, unsalted butter, cream cheese, vanilla extract, eggs, caramel sauce, whipped cream and fresh berries.",
            price: "7",
            img: "../src/img/dessert1.jpg",
            order: 0
        },
        {
            name: "Raspberry Cheesecake",
            ingredients: "Cracker crumbs, sugar, unsalted butter, cream cheese, vanilla extract, eggs, raspberry sauce, whipped cream and fresh raspberries.",
            price: "8",
            img: "../src/img/dessert2.jpg",
            order: 1
        }
    ],
    hamburguers: [
        {
            name: "Pork Loin Burguer",
            ingredients: "Italian bread, 2 beef burgers, pork loin, slices of cheddar, mozzarella cheese and barbecue sauce.",
            price: "11",
            img: "../src/img/hamburger-1.jpg",
            order: 0
        },
        {
            name: "Bacon Pork Loin Burguer",
            ingredients: "Italian bread, 2 beef burgers, pork loin, bacon, mozzarella cheese and barbecue sauce.",
            price: "12",
            img: "../src/img/hamburger-2.jpg",
            order: 1
        },
        {
            name: "Pulled Pork Burguer",
            ingredients: "Italian bread, 1 beef burger, pulled pork, bacon, cheddar cheese, tomato slices and red onion.",
            price: "9",
            img: "../src/img/hamburger-3.jpg",
            order: 2
        },
        {
            name: "Cheddar Supreme Burguer",
            ingredients: "Ciabatta bread, 3 beef burgers, cheddar supreme sauce, tomato slices, lettuce and pickles.",
            price: "15",
            img: "../src/img/hamburger-4.jpg",
            order: 3
        },
        {
            name: "Ranch Burger",
            ingredients: "Italian bread, 2 beef burgers, cheddar cheese, mozzarella cheese, lettuce and onion rings.",
            price: "12",
            img: "../src/img/hamburger-5.jpg",
            order: 4
        },
        {
            name: "Cheeseburger",
            ingredients: "Italian bread, 1 beef burger, mozzarella cheese, tomato slices and lettuce.",
            price: "8",
            img: "../src/img/hamburger-6.jpg",
            order: 5
        },
        {
            name: "Dark Burguer",
            ingredients: "Dark Italian bread, 3 beef burgers, cheddar cheese, fried eggs, and lettuce.",
            price: "14",
            img: "../src/img/hamburger-7.jpg",
            order: 6
        },
        {
            name: "Bacon Burguer",
            ingredients: "Italian bread, 2 beef burgers, bacon, cheddar cheese, lettuce and red onion.",
            price: "11",
            img: "../src/img/hamburger-8.jpg",
            order: 7
        },
    ]
}


const populateFood = (type, id) => {
    const domElements = {
        name: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'foods-name', `name#${menu[`${type}`][id].order}`),
        ingredients: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'foods-ingredients', `ingredients#${menu[`${type}`][id].order}`),
        price: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'foods-price', `price#${menu[`${type}`][id].order}`),
        img: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'foods-image', `image#${menu[`${type}`][id].order}`)
    }
    return domElements
}

const generateMenuContent = function () {
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    const mainMenuContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('main', 'main-menu-content', 'mainMenuContent')
    const menuTitle = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'menu-title', 'menuTitle')
    const dessertsContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'dessert-content', 'dessertContent')
    const dessertContainerOne = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'dessert-container', 'dessertContainerOne')
    const dessertContainerTwo = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'dessert-container', 'dessertContainerTwo')
    const hamburgerContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-content', 'hamburgerContent')
    const hamburgerContainerOne = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerOne')
    const hamburgerContainerTwo = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerTwo')
    const hamburgerContainerThree = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerThree')
    const hamburgerContainerFour = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerFour')
    const hamburgerContainerFive = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerFive')
    const hamburgerContainerSix = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerSix')
    const hamburgerContainerSeven = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerSeven')
    const hamburgerContainerEigth = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerEigth')


    const dessertOne = populateFood("desserts", 0)
    const dessertTwo = populateFood("desserts", 1)

    const hamburguerOne = populateFood("hamburguers", 0)
    const hamburguerTwo = populateFood("hamburguers", 1)
    const hamburguerThree = populateFood("hamburguers", 2)
    const hamburguerFour = populateFood("hamburguers", 3)
    const hamburguerFive = populateFood("hamburguers", 4)
    const hamburguerSix = populateFood("hamburguers", 5)
    const hamburguerSeven = populateFood("hamburguers", 6)
    const hamburguerEight = populateFood("hamburguers", 7)

    // mainMenuContent.appendChild(menuTitle)
    // menuTitle.textContent = 'Menu'

    // mainMenuContent.appendChild(dessertsContent)
    dessertsContent.appendChild(dessertContainerOne)
    dessertsContent.appendChild(dessertContainerTwo)
    // interactDOM().appendElementAndDefineContent(dessertContainerOne, dessertOne, menu, 'desserts', 0)
    // interactDOM().appendElementAndDefineContent(dessertContainerTwo, dessertTwo, menu, 'desserts', 1)
    mainMenuContent.appendChild(hamburgerContent)
    hamburgerContent.appendChild(hamburgerContainerOne)
    hamburgerContent.appendChild(hamburgerContainerTwo)
    hamburgerContent.appendChild(hamburgerContainerThree)
    hamburgerContent.appendChild(hamburgerContainerFour)
    hamburgerContent.appendChild(hamburgerContainerFive)
    hamburgerContent.appendChild(hamburgerContainerSix)
    hamburgerContent.appendChild(hamburgerContainerSeven)
    hamburgerContent.appendChild(hamburgerContainerEigth)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendElementAndDefineContent(hamburgerContainerOne, hamburguerOne, menu, 'hamburguers', 0)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendElementAndDefineContent(hamburgerContainerTwo, hamburguerTwo, menu, 'hamburguers', 1)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendElementAndDefineContent(hamburgerContainerThree, hamburguerThree, menu, 'hamburguers', 2)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendElementAndDefineContent(hamburgerContainerFour, hamburguerFour, menu, 'hamburguers', 3)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendElementAndDefineContent(hamburgerContainerFive, hamburguerFive, menu, 'hamburguers', 4)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendElementAndDefineContent(hamburgerContainerSix, hamburguerSix, menu, 'hamburguers', 5)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendElementAndDefineContent(hamburgerContainerSeven, hamburguerSeven, menu, 'hamburguers', 6)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendElementAndDefineContent(hamburgerContainerEigth, hamburguerEight, menu, 'hamburguers', 7)
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

    const restaurantTitle = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'restaurant-title', 'restaurantTitle')
    restaurantTitle.textContent = 'The Last Bite'

    const buttonsContainer = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'buttons-container', 'buttonsContainer')
    const homeButton = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'home-page', 'homePage')
    homeButton.textContent = 'Home'
    const menuButton = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'menu-page', 'menuPage')
    menuButton.textContent = 'Menu'
    const contactButton = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'contact-page', 'contactPage')
    contactButton.textContent = 'Contact'

    mainHeader.appendChild(restaurantTitle)
    mainHeader.appendChild(buttonsContainer)
    buttonsContainer.appendChild(homeButton)
    buttonsContainer.appendChild(menuButton)
    buttonsContainer.appendChild(contactButton)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMseURBQVcsdUNBQXVDLGFBQWEsR0FBRyxjQUFjLE1BQU0sYUFBYSxFQUFFLGNBQWM7QUFDakksY0FBYyx5REFBVyx1Q0FBdUMsYUFBYSxHQUFHLGNBQWMsTUFBTSxhQUFhLEVBQUUsY0FBYztBQUNqSSxlQUFlLHlEQUFXLHVDQUF1QyxhQUFhLEdBQUcsY0FBYyxZQUFZLGFBQWEsR0FBRyxjQUFjO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlEQUFXO0FBQ25DLCtCQUErQix5REFBVztBQUMxQyx5QkFBeUIseURBQVc7QUFDcEM7QUFDQSx5QkFBeUIseURBQVc7QUFDcEMseUJBQXlCLHlEQUFXO0FBQ3BDLDJCQUEyQix5REFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0JBQW9CO0FBQ3pELHFDQUFxQyxvQkFBb0I7QUFDekQsc0NBQXNDLHFCQUFxQjtBQUMzRDtBQUNBLHFDQUFxQyxvQkFBb0I7QUFDekQscUNBQXFDLG9CQUFvQjtBQUN6RCxzQ0FBc0MscUJBQXFCO0FBQzNEO0FBQ0EsdUNBQXVDLG9CQUFvQjtBQUMzRCx1Q0FBdUMsb0JBQW9CO0FBQzNELHdDQUF3QyxxQkFBcUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RU87QUFDekM7QUFDQTtBQUNBLHlCQUF5Qix5REFBVztBQUNwQywwQkFBMEIseURBQVc7QUFDckMsc0NBQXNDLHlEQUFXO0FBQ2pELHdCQUF3Qix5REFBVztBQUNuQyxvQ0FBb0MseURBQVc7QUFDL0Msb0NBQW9DLHlEQUFXO0FBQy9DLHNDQUFzQyx5REFBVztBQUNqRCxxQ0FBcUMseURBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3JDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQyx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxRQUFRLEtBQUssZUFBZTtBQUNsRSw2Q0FBNkMsUUFBUSxLQUFLLHNCQUFzQjtBQUNoRiwwQ0FBMEMsUUFBUSxLQUFLLGdCQUFnQjtBQUN2RSw2QkFBNkIsUUFBUSxLQUFLLGNBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDaEMwQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlEQUFXLDBEQUEwRCxRQUFRLEtBQUssYUFBYTtBQUM3RyxxQkFBcUIseURBQVcsd0VBQXdFLFFBQVEsS0FBSyxhQUFhO0FBQ2xJLGVBQWUseURBQVcsNERBQTRELFFBQVEsS0FBSyxhQUFhO0FBQ2hILGFBQWEseURBQVcsOERBQThELFFBQVEsS0FBSyxhQUFhO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQVc7QUFDbkMsNEJBQTRCLHlEQUFXO0FBQ3ZDLHNCQUFzQix5REFBVztBQUNqQyw0QkFBNEIseURBQVc7QUFDdkMsZ0NBQWdDLHlEQUFXO0FBQzNDLGdDQUFnQyx5REFBVztBQUMzQyw2QkFBNkIseURBQVc7QUFDeEMsa0NBQWtDLHlEQUFXO0FBQzdDLGtDQUFrQyx5REFBVztBQUM3QyxvQ0FBb0MseURBQVc7QUFDL0MsbUNBQW1DLHlEQUFXO0FBQzlDLG1DQUFtQyx5REFBVztBQUM5QyxrQ0FBa0MseURBQVc7QUFDN0Msb0NBQW9DLHlEQUFXO0FBQy9DLG9DQUFvQyx5REFBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVc7QUFDZixJQUFJLDBEQUFXO0FBQ2YsSUFBSSwwREFBVztBQUNmLElBQUksMERBQVc7QUFDZixJQUFJLDBEQUFXO0FBQ2YsSUFBSSwwREFBVztBQUNmLElBQUksMERBQVc7QUFDZixJQUFJLDBEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ3BKZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0g7QUFDRztBQUNHO0FBQzNDO0FBQ0E7QUFDQSx1QkFBdUIseURBQVc7QUFDbEMsd0JBQXdCLHlEQUFXO0FBQ25DO0FBQ0EsNEJBQTRCLHlEQUFXO0FBQ3ZDO0FBQ0E7QUFDQSw2QkFBNkIseURBQVc7QUFDeEMsdUJBQXVCLHlEQUFXO0FBQ2xDO0FBQ0EsdUJBQXVCLHlEQUFXO0FBQ2xDO0FBQ0EsMEJBQTBCLHlEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFtQjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFtQjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFnQjtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ludGVyYWN0LWRvbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgY29udGFjdExpc3QgPSBbXVxyXG5cclxuY29uc3QgY3JlYXRlQ29udGFjdCA9IChuYW1lLCByb2xlLCBwaG9uZSwgb3JkZXIpID0+IHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgcm9sZSxcclxuICAgICAgICBwaG9uZSxcclxuICAgICAgICBvcmRlclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgLi4uc3RhdGUgfVxyXG59XHJcblxyXG5jb25zdCBhZGRDb250YWN0ID0gKG5hbWUsIHJvbGUsIHBob25lLCBvcmRlcikgPT4geyBcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBjcmVhdGVDb250YWN0KG5hbWUsIHJvbGUsIHBob25lLCBvcmRlcilcclxuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0ge1xyXG4gICAgICAgIG5hbWU6IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgYCR7Y29udGFjdC5uYW1lfS0ke2NvbnRhY3Qub3JkZXJ9YCwgYCR7Y29udGFjdC5uYW1lfSR7Y29udGFjdC5vcmRlcn1gKSxcclxuICAgICAgICByb2xlOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsIGAke2NvbnRhY3Qucm9sZX0tJHtjb250YWN0Lm9yZGVyfWAsIGAke2NvbnRhY3Qucm9sZX0ke2NvbnRhY3Qub3JkZXJ9YCksXHJcbiAgICAgICAgcGhvbmU6IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgYCR7Y29udGFjdC5uYW1lfS0ke2NvbnRhY3Qub3JkZXJ9LXBob25lYCwgYCR7Y29udGFjdC5uYW1lfS0ke2NvbnRhY3Qub3JkZXJ9UGhvbmVgKVxyXG4gICAgfVxyXG4gICAgY29udGFjdExpc3QucHVzaChjb250YWN0KVxyXG4gICAgcmV0dXJuIGRvbUVsZW1lbnRzXHJcblxyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZUNvbnRhY3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBtYWluQ29udGFjdENvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnbWFpbicsICdtYWluLWNvbnRhY3QtY29udGVudCcsICdtYWluQ29udGFjdENvbnRlbnQnKVxyXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnY29udGFjdC10aXRsZScsICdjb250YWN0VGl0bGUnKVxyXG4gICAgXHJcbiAgICBjb25zdCBjb250YWluZXJPbmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2NvbnRhY3QtY29udGFpbmVyJywgJ2NvbnRhaW5lck9uZScpXHJcbiAgICBjb25zdCBjb250YWluZXJUd28gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2NvbnRhY3QtY29udGFpbmVyJywgJ2NvbnRhaW5lclR3bycpXHJcbiAgICBjb25zdCBjb250YWluZXJUaHJlZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY29udGFjdC1jb250YWluZXInLCAnY29udGFpbmVyVGhyZWUnKVxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RPbmUgPSBhZGRDb250YWN0KCdFbGxpZScsICdQcmVzaWRlbnQnLCAnKDc4MSkgMjE0IDY1NjMnLCAwKVxyXG4gICAgY29uc3QgY29udGFjdFR3byA9IGFkZENvbnRhY3QoJ0RpbmEnLCAnVmljZS1QcmVzaWRlbnQnLCAnKDc4MSkgMTQ3IDc4OCcsIDEpXHJcbiAgICBjb25zdCBjb250YWN0VGhyZWUgPSBhZGRDb250YWN0KCdKb2VsJywgJ0NoZWYnLCAnKDc4MSkgMTU0IDQ0ODcnLCAyKVxyXG4gICAgXHJcbiAgICBtYWluQ29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKVxyXG4gICAgY29udGFpbmVyT25lLmFwcGVuZENoaWxkKGNvbnRhY3RPbmUubmFtZSlcclxuICAgIGNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChjb250YWN0T25lLnJvbGUpXHJcbiAgICBjb250YWluZXJPbmUuYXBwZW5kQ2hpbGQoY29udGFjdE9uZS5waG9uZSlcclxuXHJcbiAgICBjb250YWluZXJUd28uYXBwZW5kQ2hpbGQoY29udGFjdFR3by5uYW1lKVxyXG4gICAgY29udGFpbmVyVHdvLmFwcGVuZENoaWxkKGNvbnRhY3RUd28ucm9sZSlcclxuICAgIGNvbnRhaW5lclR3by5hcHBlbmRDaGlsZChjb250YWN0VHdvLnBob25lKVxyXG5cclxuICAgIGNvbnRhaW5lclRocmVlLmFwcGVuZENoaWxkKGNvbnRhY3RUaHJlZS5uYW1lKVxyXG4gICAgY29udGFpbmVyVGhyZWUuYXBwZW5kQ2hpbGQoY29udGFjdFRocmVlLnJvbGUpXHJcbiAgICBjb250YWluZXJUaHJlZS5hcHBlbmRDaGlsZChjb250YWN0VGhyZWUucGhvbmUpXHJcblxyXG5cclxuICAgIG1haW5Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJPbmUpXHJcbiAgICBtYWluQ29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyVHdvKVxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lclRocmVlKVxyXG4gICBcclxuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJ1xyXG4gICAgY29udGFjdE9uZS5uYW1lLnRleHRDb250ZW50ID0gYCR7Y29udGFjdExpc3RbMF0ubmFtZX1gXHJcbiAgICBjb250YWN0T25lLnJvbGUudGV4dENvbnRlbnQgPSBgJHtjb250YWN0TGlzdFswXS5yb2xlfWBcclxuICAgIGNvbnRhY3RPbmUucGhvbmUudGV4dENvbnRlbnQgPSBgJHtjb250YWN0TGlzdFswXS5waG9uZX1gXHJcblxyXG4gICAgY29udGFjdFR3by5uYW1lLnRleHRDb250ZW50ID0gYCR7Y29udGFjdExpc3RbMV0ubmFtZX1gXHJcbiAgICBjb250YWN0VHdvLnJvbGUudGV4dENvbnRlbnQgPSBgJHtjb250YWN0TGlzdFsxXS5yb2xlfWBcclxuICAgIGNvbnRhY3RUd28ucGhvbmUudGV4dENvbnRlbnQgPSBgJHtjb250YWN0TGlzdFsxXS5waG9uZX1gXHJcblxyXG4gICAgY29udGFjdFRocmVlLm5hbWUudGV4dENvbnRlbnQgPSBgJHtjb250YWN0TGlzdFsyXS5uYW1lfWBcclxuICAgIGNvbnRhY3RUaHJlZS5yb2xlLnRleHRDb250ZW50ID0gYCR7Y29udGFjdExpc3RbMl0ucm9sZX1gXHJcbiAgICBjb250YWN0VGhyZWUucGhvbmUudGV4dENvbnRlbnQgPSBgJHtjb250YWN0TGlzdFsyXS5waG9uZX1gXHJcblxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRhY3RDb250ZW50KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUNvbnRhY3RQYWdlXHJcbiIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdC1kb21cIjtcclxuXHJcbmNvbnN0IGdlbmVyYXRlSG9tZXBhZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaG9tZU1haW5FbGVtID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ21haW4nLCAnaG9tZS1tYWluLWNvbnRlbnQnLCdob21lTWFpbkNvbnRlbnQnKVxyXG4gICAgY29uc3QgcGFnZVRpdGxlRWxlbSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3BhZ2UtdGl0bGUnLCAncGFnZVRpdGxlJylcclxuICAgIGNvbnN0IHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24nLCAncmVzdGF1cmFudERlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRlbnQnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhPbmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdkZXNjcmlwdGlvbi1wYXJhZ3JhcGgnLCAnZGVzY3JpcHRpb25QYXJhZ3JhcGhPbmUnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdkZXNjcmlwdGlvbi1wYXJhZ3JhcGgnLCAnZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28nKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhUaHJlZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Rlc2NyaXB0aW9uLXBhcmFncmFwaCcsICdkZXNjcmlwdGlvblBhcmFncmFwaFRocmVlJylcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUGFyYWdyYXBoRm91ciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Rlc2NyaXB0aW9uLXBhcmFncmFwaCcsICdkZXNjcmlwdGlvblBhcmFncmFwaEZvdXInKVxyXG4gICAgXHJcbiAgICAvLyBjb25zdCBob21lTWFpbiA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2hvbWVNYWluQ29udGVudCcpXHJcbiAgICAvLyBjb25zdCBwYWdlVGl0bGUgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdwYWdlVGl0bGUnKVxyXG4gICAgLy8gY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgncmVzdGF1cmFudERlc2NyaXB0aW9uJylcclxuXHJcbiAgICBob21lTWFpbkVsZW0uYXBwZW5kQ2hpbGQocGFnZVRpdGxlRWxlbSlcclxuICAgIGhvbWVNYWluRWxlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtKVxyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmFncmFwaE9uZSlcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28pXHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYWdyYXBoVGhyZWUpXHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYWdyYXBoRm91cilcclxuXHJcbiAgICBwYWdlVGl0bGVFbGVtLnRleHRDb250ZW50ID0gJ1RoZSBMYXN0IEJpdGUnXHJcbiAgICBcclxuICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoT25lLnRleHRDb250ZW50ID0gXCJUaGUgTGFzdCBCaXRlIGlzIGEgc21hbGwsIHBvc3QtYXBvY2FseXB0aWMgYnVyZ2VyIGpvaW50IGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIEphY2tzb24sIGEgdG93biByYXZhZ2VkIGJ5IG5hdHVyZSBhbmQgdGltZS4gRGVzcGl0ZSBpdHMgcnVuZG93biBhcHBlYXJhbmNlLCBUaGUgTGFzdCBCaXRlIGhhcyBiZWNvbWUgYSBiZWxvdmVkIGxvY2FsIGluc3RpdHV0aW9uLCBzZXJ2aW5nIHVwIGhlYXJ0eSBidXJnZXJzIGFuZCBmcmllcyB0byB3ZWFyeSBjdXN0b21lcnMgbG9va2luZyBmb3IgYSBtb21lbnQgb2YgcmVzcGl0ZSBpbiBhIGhhcnNoIGFuZCB1bmZvcmdpdmluZyB3b3JsZC5cIlxyXG4gICAgZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28udGV4dENvbnRlbnQgPSBcIlRoZSBtZW51IGF0IFRoZSBMYXN0IEJpdGUgaXMgc2ltcGxlIHlldCBzYXRpc2Z5aW5nLCBmZWF0dXJpbmcgY2xhc3NpYyBidXJnZXJzIGFuZCBzaWRlcyBtYWRlIHdpdGggZnJlc2gsIGxvY2FsbHkgc291cmNlZCBpbmdyZWRpZW50cy4gVGhlIGJ1cmdlcnMgYXJlIGNvb2tlZCB0byBwZXJmZWN0aW9uIG9uIGEgZ3JpbGwgaW4gZnVsbCB2aWV3IG9mIHRoZSBjdXN0b21lcnMsIHdpdGggdGhlIGFyb21hIG9mIHNpenpsaW5nIGJlZWYgd2FmdGluZyB0aHJvdWdoIHRoZSBjcmFtcGVkIGFuZCBkaW1seSBsaXQgc3BhY2UuXCJcclxuICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoVGhyZWUudGV4dENvbnRlbnQgPSBcIkRlc3BpdGUgdGhlIGRlc29sYXRlIHN1cnJvdW5kaW5ncywgdGhlIGF0bW9zcGhlcmUgaW5zaWRlIFRoZSBMYXN0IEJpdGUgaXMgd2FybSBhbmQgd2VsY29taW5nLCB3aXRoIHZpbnRhZ2UgcG9zdGVycyBhbmQgcGhvdG9ncmFwaHMgYWRvcm5pbmcgdGhlIHdhbGxzIGFuZCBhIGZldyBzbWFsbCB0YWJsZXMgYW5kIGNoYWlycyBzY2F0dGVyZWQgdGhyb3VnaG91dCB0aGUgc3BhY2UuIEN1c3RvbWVycyBvZnRlbiBsaW5nZXIgb3ZlciB0aGVpciBtZWFscywgc3dhcHBpbmcgc3RvcmllcyBhbmQgc2hhcmluZyBhIG1vbWVudCBvZiBjYW1hcmFkZXJpZSBhbWlkc3QgdGhlIHJ1aW5zIG9mIHRoZWlyIHdvcmxkLlwiXHJcbiAgICBkZXNjcmlwdGlvblBhcmFncmFwaEZvdXIudGV4dENvbnRlbnQgPSBcIkF0IFRoZSBMYXN0IEJpdGUsIGV2ZXJ5IGJ1cmdlciBpcyBzYXZvcmVkIGFzIGlmIGl0IG1pZ2h0IGJlIHRoZSBsYXN0LiBGb3IgdGhlIHdlYXJ5IHRyYXZlbGVycyBhbmQgc3Vydml2b3JzIG9mIHRoZSBhcG9jYWx5cHNlIHdobyBwYXNzIHRocm91Z2ggSmFja3NvbiwgVGhlIExhc3QgQml0ZSBpcyBhIGJlYWNvbiBvZiBob3BlIGFuZCBhIHJlbWluZGVyIHRoYXQgZXZlbiBpbiB0aGUgZGFya2VzdCBvZiB0aW1lcywgdGhlcmUgaXMgc3RpbGwgam95IHRvIGJlIGZvdW5kIGluIGEgd2VsbC1jb29rZWQgYnVyZ2VyIGFuZCBhIG1vbWVudCBvZiByZXNwaXRlLlwiXHJcblxyXG5cclxuXHJcblxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZU1haW5FbGVtKVxyXG4gICAgLy8gcmV0dXJuIGhvbWVNYWluXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSG9tZXBhZ2UiLCJjb25zdCBpbnRlcmFjdERPTSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpXHJcblxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCA9IGZ1bmN0aW9uKHR5cGUsIGNsYXNzTmFtZSwgaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YClcclxuICAgICAgICBlbGVtZW50LmlkID0gYCR7aWROYW1lfWBcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhvb2tET01lbGVtZW50ID0gZnVuY3Rpb24gKGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkTmFtZX1gKVxyXG4gICAgICAgIHJldHVybiBlbGVtXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQgPSBmdW5jdGlvbihjb250YWluZXIsIGVsZW1lbnQsIG1lbnUgLCB0eXBlLCBvcmRlcil7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQubmFtZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5pbmdyZWRpZW50cylcclxuICAgICAgICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5wcmljZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5pbWcpXHJcblxyXG4gICAgICAgIGVsZW1lbnQubmFtZS50ZXh0Q29udGVudCA9IGAke21lbnVbYCR7dHlwZX1gXVtvcmRlcl0ubmFtZX1gXHJcbiAgICAgICAgZWxlbWVudC5pbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGAke21lbnVbYCR7dHlwZX1gXVtvcmRlcl0uaW5ncmVkaWVudHN9YFxyXG4gICAgICAgIC8vIGVsZW1lbnQucHJpY2UudGV4dENvbnRlbnQgPSBgJHttZW51W2Ake3R5cGV9YF1bb3JkZXJdLnByaWNlfWBcclxuICAgICAgICBlbGVtZW50LmltZy5zcmMgPSBgJHttZW51W2Ake3R5cGV9YF1bb3JkZXJdLmltZ31gXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IG1haW5Db250ZW50LCBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQsIGhvb2tET01lbGVtZW50LCBhcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudCB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0RE9NIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgbWVudSA9IHtcclxuICAgIGRlc3NlcnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkNhcmFtZWwgQ2hlZXNlY2FrZVwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJDcmFja2VyIGNydW1icywgc3VnYXIsIHVuc2FsdGVkIGJ1dHRlciwgY3JlYW0gY2hlZXNlLCB2YW5pbGxhIGV4dHJhY3QsIGVnZ3MsIGNhcmFtZWwgc2F1Y2UsIHdoaXBwZWQgY3JlYW0gYW5kIGZyZXNoIGJlcnJpZXMuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjdcIixcclxuICAgICAgICAgICAgaW1nOiBcIi4uL3NyYy9pbWcvZGVzc2VydDEuanBnXCIsXHJcbiAgICAgICAgICAgIG9yZGVyOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiUmFzcGJlcnJ5IENoZWVzZWNha2VcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiQ3JhY2tlciBjcnVtYnMsIHN1Z2FyLCB1bnNhbHRlZCBidXR0ZXIsIGNyZWFtIGNoZWVzZSwgdmFuaWxsYSBleHRyYWN0LCBlZ2dzLCByYXNwYmVycnkgc2F1Y2UsIHdoaXBwZWQgY3JlYW0gYW5kIGZyZXNoIHJhc3BiZXJyaWVzLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCI4XCIsXHJcbiAgICAgICAgICAgIGltZzogXCIuLi9zcmMvaW1nL2Rlc3NlcnQyLmpwZ1wiLFxyXG4gICAgICAgICAgICBvcmRlcjogMVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBoYW1idXJndWVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJQb3JrIExvaW4gQnVyZ3VlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJJdGFsaWFuIGJyZWFkLCAyIGJlZWYgYnVyZ2VycywgcG9yayBsb2luLCBzbGljZXMgb2YgY2hlZGRhciwgbW96emFyZWxsYSBjaGVlc2UgYW5kIGJhcmJlY3VlIHNhdWNlLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIxMVwiLFxyXG4gICAgICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy9oYW1idXJnZXItMS5qcGdcIixcclxuICAgICAgICAgICAgb3JkZXI6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCYWNvbiBQb3JrIExvaW4gQnVyZ3VlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJJdGFsaWFuIGJyZWFkLCAyIGJlZWYgYnVyZ2VycywgcG9yayBsb2luLCBiYWNvbiwgbW96emFyZWxsYSBjaGVlc2UgYW5kIGJhcmJlY3VlIHNhdWNlLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIxMlwiLFxyXG4gICAgICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy9oYW1idXJnZXItMi5qcGdcIixcclxuICAgICAgICAgICAgb3JkZXI6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJQdWxsZWQgUG9yayBCdXJndWVyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkl0YWxpYW4gYnJlYWQsIDEgYmVlZiBidXJnZXIsIHB1bGxlZCBwb3JrLCBiYWNvbiwgY2hlZGRhciBjaGVlc2UsIHRvbWF0byBzbGljZXMgYW5kIHJlZCBvbmlvbi5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiOVwiLFxyXG4gICAgICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy9oYW1idXJnZXItMy5qcGdcIixcclxuICAgICAgICAgICAgb3JkZXI6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDaGVkZGFyIFN1cHJlbWUgQnVyZ3VlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJDaWFiYXR0YSBicmVhZCwgMyBiZWVmIGJ1cmdlcnMsIGNoZWRkYXIgc3VwcmVtZSBzYXVjZSwgdG9tYXRvIHNsaWNlcywgbGV0dHVjZSBhbmQgcGlja2xlcy5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTVcIixcclxuICAgICAgICAgICAgaW1nOiBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTQuanBnXCIsXHJcbiAgICAgICAgICAgIG9yZGVyOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiUmFuY2ggQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkl0YWxpYW4gYnJlYWQsIDIgYmVlZiBidXJnZXJzLCBjaGVkZGFyIGNoZWVzZSwgbW96emFyZWxsYSBjaGVlc2UsIGxldHR1Y2UgYW5kIG9uaW9uIHJpbmdzLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIxMlwiLFxyXG4gICAgICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy9oYW1idXJnZXItNS5qcGdcIixcclxuICAgICAgICAgICAgb3JkZXI6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDaGVlc2VidXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMSBiZWVmIGJ1cmdlciwgbW96emFyZWxsYSBjaGVlc2UsIHRvbWF0byBzbGljZXMgYW5kIGxldHR1Y2UuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjhcIixcclxuICAgICAgICAgICAgaW1nOiBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTYuanBnXCIsXHJcbiAgICAgICAgICAgIG9yZGVyOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiRGFyayBCdXJndWVyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkRhcmsgSXRhbGlhbiBicmVhZCwgMyBiZWVmIGJ1cmdlcnMsIGNoZWRkYXIgY2hlZXNlLCBmcmllZCBlZ2dzLCBhbmQgbGV0dHVjZS5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTRcIixcclxuICAgICAgICAgICAgaW1nOiBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTcuanBnXCIsXHJcbiAgICAgICAgICAgIG9yZGVyOiA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQmFjb24gQnVyZ3VlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJJdGFsaWFuIGJyZWFkLCAyIGJlZWYgYnVyZ2VycywgYmFjb24sIGNoZWRkYXIgY2hlZXNlLCBsZXR0dWNlIGFuZCByZWQgb25pb24uXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjExXCIsXHJcbiAgICAgICAgICAgIGltZzogXCIuLi9zcmMvaW1nL2hhbWJ1cmdlci04LmpwZ1wiLFxyXG4gICAgICAgICAgICBvcmRlcjogN1xyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuXHJcblxyXG5jb25zdCBwb3B1bGF0ZUZvb2QgPSAodHlwZSwgaWQpID0+IHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0ge1xyXG4gICAgICAgIG5hbWU6IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Zvb2RzLW5hbWUnLCBgbmFtZSMke21lbnVbYCR7dHlwZX1gXVtpZF0ub3JkZXJ9YCksXHJcbiAgICAgICAgaW5ncmVkaWVudHM6IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Zvb2RzLWluZ3JlZGllbnRzJywgYGluZ3JlZGllbnRzIyR7bWVudVtgJHt0eXBlfWBdW2lkXS5vcmRlcn1gKSxcclxuICAgICAgICBwcmljZTogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZm9vZHMtcHJpY2UnLCBgcHJpY2UjJHttZW51W2Ake3R5cGV9YF1baWRdLm9yZGVyfWApLFxyXG4gICAgICAgIGltZzogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2ltZycsICdmb29kcy1pbWFnZScsIGBpbWFnZSMke21lbnVbYCR7dHlwZX1gXVtpZF0ub3JkZXJ9YClcclxuICAgIH1cclxuICAgIHJldHVybiBkb21FbGVtZW50c1xyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZU1lbnVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBtYWluTWVudUNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnbWFpbicsICdtYWluLW1lbnUtY29udGVudCcsICdtYWluTWVudUNvbnRlbnQnKVxyXG4gICAgY29uc3QgbWVudVRpdGxlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnbWVudS10aXRsZScsICdtZW51VGl0bGUnKVxyXG4gICAgY29uc3QgZGVzc2VydHNDb250ZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdkZXNzZXJ0LWNvbnRlbnQnLCAnZGVzc2VydENvbnRlbnQnKVxyXG4gICAgY29uc3QgZGVzc2VydENvbnRhaW5lck9uZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnZGVzc2VydC1jb250YWluZXInLCAnZGVzc2VydENvbnRhaW5lck9uZScpXHJcbiAgICBjb25zdCBkZXNzZXJ0Q29udGFpbmVyVHdvID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdkZXNzZXJ0LWNvbnRhaW5lcicsICdkZXNzZXJ0Q29udGFpbmVyVHdvJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250ZW50JywgJ2hhbWJ1cmdlckNvbnRlbnQnKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyT25lID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lck9uZScpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJUd28gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyVHdvJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lclRocmVlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lclRocmVlJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lckZvdXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyRm91cicpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJGaXZlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lckZpdmUnKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyU2l4ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lclNpeCcpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJTZXZlbiA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJTZXZlbicpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJFaWd0aCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJFaWd0aCcpXHJcblxyXG5cclxuICAgIGNvbnN0IGRlc3NlcnRPbmUgPSBwb3B1bGF0ZUZvb2QoXCJkZXNzZXJ0c1wiLCAwKVxyXG4gICAgY29uc3QgZGVzc2VydFR3byA9IHBvcHVsYXRlRm9vZChcImRlc3NlcnRzXCIsIDEpXHJcblxyXG4gICAgY29uc3QgaGFtYnVyZ3Vlck9uZSA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDApXHJcbiAgICBjb25zdCBoYW1idXJndWVyVHdvID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgMSlcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJUaHJlZSA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDIpXHJcbiAgICBjb25zdCBoYW1idXJndWVyRm91ciA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDMpXHJcbiAgICBjb25zdCBoYW1idXJndWVyRml2ZSA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDQpXHJcbiAgICBjb25zdCBoYW1idXJndWVyU2l4ID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgNSlcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJTZXZlbiA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDYpXHJcbiAgICBjb25zdCBoYW1idXJndWVyRWlnaHQgPSBwb3B1bGF0ZUZvb2QoXCJoYW1idXJndWVyc1wiLCA3KVxyXG5cclxuICAgIC8vIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51VGl0bGUpXHJcbiAgICAvLyBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSdcclxuXHJcbiAgICAvLyBtYWluTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydHNDb250ZW50KVxyXG4gICAgZGVzc2VydHNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRDb250YWluZXJPbmUpXHJcbiAgICBkZXNzZXJ0c0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydENvbnRhaW5lclR3bylcclxuICAgIC8vIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoZGVzc2VydENvbnRhaW5lck9uZSwgZGVzc2VydE9uZSwgbWVudSwgJ2Rlc3NlcnRzJywgMClcclxuICAgIC8vIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoZGVzc2VydENvbnRhaW5lclR3bywgZGVzc2VydFR3bywgbWVudSwgJ2Rlc3NlcnRzJywgMSlcclxuICAgIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250ZW50KVxyXG4gICAgaGFtYnVyZ2VyQ29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250YWluZXJPbmUpXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lclR3bylcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyVGhyZWUpXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lckZvdXIpXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lckZpdmUpXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lclNpeClcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyU2V2ZW4pXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lckVpZ3RoKVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJPbmUsIGhhbWJ1cmd1ZXJPbmUsIG1lbnUsICdoYW1idXJndWVycycsIDApXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lclR3bywgaGFtYnVyZ3VlclR3bywgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgMSlcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoaGFtYnVyZ2VyQ29udGFpbmVyVGhyZWUsIGhhbWJ1cmd1ZXJUaHJlZSwgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgMilcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoaGFtYnVyZ2VyQ29udGFpbmVyRm91ciwgaGFtYnVyZ3VlckZvdXIsIG1lbnUsICdoYW1idXJndWVycycsIDMpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lckZpdmUsIGhhbWJ1cmd1ZXJGaXZlLCBtZW51LCAnaGFtYnVyZ3VlcnMnLCA0KVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJTaXgsIGhhbWJ1cmd1ZXJTaXgsIG1lbnUsICdoYW1idXJndWVycycsIDUpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lclNldmVuLCBoYW1idXJndWVyU2V2ZW4sIG1lbnUsICdoYW1idXJndWVycycsIDYpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lckVpZ3RoLCBoYW1idXJndWVyRWlnaHQsIG1lbnUsICdoYW1idXJndWVycycsIDcpXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluTWVudUNvbnRlbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTWVudUNvbnRlbnQiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdC1kb21cIlxyXG5pbXBvcnQgZ2VuZXJhdGVIb21lcGFnZSBmcm9tIFwiLi9ob21lXCJcclxuaW1wb3J0IGdlbmVyYXRlTWVudUNvbnRlbnQgZnJvbSBcIi4vbWVudVwiXHJcbmltcG9ydCBnZW5lcmF0ZUNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIlxyXG5cclxuY29uc3QgZ2VuZXJhdGVIZWFkZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaGVhZGVyJywgJ21haW4taGVhZGVyJywgJ21haW5IZWFkZXInKVxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcblxyXG4gICAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdyZXN0YXVyYW50LXRpdGxlJywgJ3Jlc3RhdXJhbnRUaXRsZScpXHJcbiAgICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIExhc3QgQml0ZSdcclxuXHJcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdidXR0b25zLWNvbnRhaW5lcicsICdidXR0b25zQ29udGFpbmVyJylcclxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2hvbWUtcGFnZScsICdob21lUGFnZScpXHJcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnXHJcbiAgICBjb25zdCBtZW51QnV0dG9uID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdtZW51LXBhZ2UnLCAnbWVudVBhZ2UnKVxyXG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51J1xyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY29udGFjdC1wYWdlJywgJ2NvbnRhY3RQYWdlJylcclxuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCdcclxuXHJcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRUaXRsZSlcclxuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcilcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbilcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbilcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5IZWFkZXIpXHJcbiAgICByZXR1cm4geyBob21lQnV0dG9uLCBtZW51QnV0dG9uLCBjb250YWN0QnV0dG9uLCBtYWluQ29udGVudCB9XHJcbn0pKClcclxuXHJcbmNvbnN0IGNsZWFyRE9NID0gZnVuY3Rpb24oKXtcclxuICAgIHdoaWxlIChnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICBnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5yZW1vdmVDaGlsZChnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG59XHJcblxyXG5nZW5lcmF0ZUhlYWRlci5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNsZWFyRE9NKClcclxuICAgIGdlbmVyYXRlQ29udGFjdFBhZ2UoKVxyXG59KVxyXG5cclxuZ2VuZXJhdGVIZWFkZXIubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNsZWFyRE9NKClcclxuICAgIGdlbmVyYXRlTWVudUNvbnRlbnQoKVxyXG59KVxyXG5cclxuZ2VuZXJhdGVIZWFkZXIuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjbGVhckRPTSgpXHJcbiAgICBnZW5lcmF0ZUhvbWVwYWdlKClcclxufSlcclxuLy8gY29uc3QgY2hhbmdlUGFnZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY2hhbmdlLXBhZ2UnLCAnY2hhbmdlUGFnZScpXHJcbi8vIGNoYW5nZVBhZ2UudGV4dENvbnRlbnQgPSAnQ2hhbmdlJ1xyXG4vLyBjb25zdCBtYWluQ29udGVudCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250ZW50JylcclxuLy8gbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hhbmdlUGFnZSlcclxuXHJcblxyXG4vLyBjaGFuZ2VQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuLy8gICAgIGdlbmVyYXRlQ29udGFjdFBhZ2UoKVxyXG4vLyB9KVxyXG5cclxuXHJcbi8vIGdlbmVyYXRlSG9tZXBhZ2UoKVxyXG4vLyBnZW5lcmF0ZUNvbnRhY3RQYWdlKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9