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


const contactList = [
    {
        name: "Ellie Williams",
        role: "Director",
        img: "../src/img/ellie.png",
        order: 0
    },
    {
        name: "Dina Williams",
        role: "General Manager",
        img: "../src/img/dina.png",
        order: 1
    },
    {
        name: "Joel Miller",
        role: "Executive Chef",
        img: "../src/img/joel.png",
        order: 2
    },
    {
        name: "Tommy Miller",
        role: "Sommelier",
        img: "../src/img/tommy.png",
        order: 3  
    }
]

const populateContact = (id) => { 
    
    const domElements = {
        name: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'contacts-name', `contactName#${contactList[id].order}`),
        role: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'contacts-role', `contactRole#${contactList[id].order}`),
        img: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'contacts-img', `contactImg#${contactList[id].order}`)
    }
    return domElements
}

const generateContactPage = function () {
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    const mainContactContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('main', 'main-contact-content', 'mainContactContent')
    const contactTitle = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'contact-title', 'contactTitle')
    const locationText = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'location-text', 'locationText')
    const locationImg = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'location-img', 'locationImg')
    const contactContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-content', 'contactContent')
    
    const containerOne = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-container', 'containerOne')
    const containerTwo = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-container', 'containerTwo')
    const containerThree = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-container', 'containerThree')
    const containerFour = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-container', 'containerFour')

    const contactOne = populateContact(0)
    const contactTwo = populateContact(1)
    const contactThree = populateContact(2)
    const contactFour = populateContact(3)
     
    mainContactContent.appendChild(contactTitle)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendContacElementAndDefineContent(containerOne, contactOne, contactList, 0)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendContacElementAndDefineContent(containerTwo, contactTwo, contactList, 1)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendContacElementAndDefineContent(containerThree, contactThree, contactList, 2)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendContacElementAndDefineContent(containerFour, contactFour, contactList, 3)
    locationImg.src = '../src/img/location.png'

    mainContactContent.appendChild(contactContent)
    contactContent.appendChild(containerOne)
    contactContent.appendChild(containerTwo)
    contactContent.appendChild(containerThree)
    contactContent.appendChild(containerFour)
    mainContactContent.appendChild(locationText)
    mainContactContent.appendChild(locationImg)
   
    contactTitle.textContent = 'Main contacts'
    locationText.textContent = 'Best burguer place of Teton County, Wyoming. Come visit us (but only if you are not a wolf)'

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

    const appendMenuElementAndDefineContent = function(container, element, menu , type, order){
        container.appendChild(element.name)
        container.appendChild(element.ingredients)
        // container.appendChild(element.price)
        container.appendChild(element.img)

        element.name.textContent = `${menu[`${type}`][order].name}`
        element.ingredients.textContent = `${menu[`${type}`][order].ingredients}`
        // element.price.textContent = `${menu[`${type}`][order].price}`
        element.img.src = `${menu[`${type}`][order].img}`

    }

    const appendContacElementAndDefineContent = function(container, element, contactList, order){
        container.appendChild(element.name)
        container.appendChild(element.role)
        container.appendChild(element.img)
        
        element.name.textContent = `${contactList[order].name}`
        element.role.textContent = `${contactList[order].role}`
        element.img.src = `${contactList[order].img}`
    }

    return { mainContent, createElementWithClassAndId, hookDOMelement, appendMenuElementAndDefineContent, appendContacElementAndDefineContent }
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
            name: "Apocalypse Burger",
            ingredients: "Italian bread, 2 beef burgers, pork loin, slices of cheddar, mozzarella cheese and barbecue sauce.",
            price: "11",
            img: "../src/img/hamburger-1.jpg",
            order: 0
        },
        {
            name: "Survivor Burger",
            ingredients: "Italian bread, 2 beef burgers, pork loin, bacon, mozzarella cheese and barbecue sauce.",
            price: "12",
            img: "../src/img/hamburger-2.jpg",
            order: 1
        },
        {
            name: " Wasteland Burger",
            ingredients: "Italian bread, 1 beef burger, pulled pork, bacon, cheddar cheese, tomato slices and red onion.",
            price: "9",
            img: "../src/img/hamburger-3.jpg",
            order: 2
        },
        {
            name: "Outbreak Burger",
            ingredients: "Ciabatta bread, 3 beef burgers, cheddar supreme sauce, tomato slices, lettuce and pickles.",
            price: "15",
            img: "../src/img/hamburger-4.jpg",
            order: 3
        },
        {
            name: "Last Bite Burger",
            ingredients: "Italian bread, 2 beef burgers, cheddar cheese, mozzarella cheese, lettuce and onion rings.",
            price: "12",
            img: "../src/img/hamburger-5.jpg",
            order: 4
        },
        {
            name: "Infected Burger",
            ingredients: "Italian bread, 1 beef burger, mozzarella cheese, tomato slices and lettuce.",
            price: "8",
            img: "../src/img/hamburger-6.jpg",
            order: 5
        },
        {
            name: "Clicker Surprise Burger",
            ingredients: "Dark Italian bread, 3 beef burgers, cheddar cheese, fried eggs, and lettuce.",
            price: "14",
            img: "../src/img/hamburger-7.jpg",
            order: 6
        },
        {
            name: "Last Hope Burger",
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
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerOne, hamburguerOne, menu, 'hamburguers', 0)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerTwo, hamburguerTwo, menu, 'hamburguers', 1)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerThree, hamburguerThree, menu, 'hamburguers', 2)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerFour, hamburguerFour, menu, 'hamburguers', 3)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerFive, hamburguerFive, menu, 'hamburguers', 4)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerSix, hamburguerSix, menu, 'hamburguers', 5)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerSeven, hamburguerSeven, menu, 'hamburguers', 6)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerEigth, hamburguerEight, menu, 'hamburguers', 7)
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

const generateFooter = (function(){
    const mainFooter = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('footer', 'footer', 'footer')
    const footerText = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'footer-text', 'footerText')
    const footerLink = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('a', 'fa-brands', 'footerLink')
    footerLink.classList.add('fa-github')
    footerLink.href = 'https://github.com/rmathr'

    mainFooter.appendChild(footerText)
    mainFooter.appendChild(footerLink)

    footerText.textContent = 'rmath©'

    document.body.appendChild(mainFooter)
})()


const clearDOM = function(){
    while (generateHeader.mainContent.hasChildNodes()) {
        generateHeader.mainContent.removeChild(generateHeader.mainContent.firstChild);
      }
}

generateHeader.contactButton.addEventListener('click', e => {
    e.preventDefault()
    clearDOM()
    generateHeader.contactButton.classList.add('button-clicked')
    generateHeader.menuButton.classList.remove('button-clicked')
    generateHeader.homeButton.classList.remove('button-clicked')
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])()
})

generateHeader.menuButton.addEventListener('click', e =>{
    e.preventDefault()
    clearDOM()
    generateHeader.contactButton.classList.remove('button-clicked')
    generateHeader.menuButton.classList.add('button-clicked')
    generateHeader.homeButton.classList.remove('button-clicked')
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
})

generateHeader.homeButton.addEventListener('click', e => {
    e.preventDefault()
    clearDOM()
    generateHeader.contactButton.classList.remove('button-clicked')
    generateHeader.menuButton.classList.remove('button-clicked')
    generateHeader.homeButton.classList.add('button-clicked')
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ludGVyYWN0LWRvbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgY29udGFjdExpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJFbGxpZSBXaWxsaWFtc1wiLFxyXG4gICAgICAgIHJvbGU6IFwiRGlyZWN0b3JcIixcclxuICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy9lbGxpZS5wbmdcIixcclxuICAgICAgICBvcmRlcjogMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRpbmEgV2lsbGlhbXNcIixcclxuICAgICAgICByb2xlOiBcIkdlbmVyYWwgTWFuYWdlclwiLFxyXG4gICAgICAgIGltZzogXCIuLi9zcmMvaW1nL2RpbmEucG5nXCIsXHJcbiAgICAgICAgb3JkZXI6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKb2VsIE1pbGxlclwiLFxyXG4gICAgICAgIHJvbGU6IFwiRXhlY3V0aXZlIENoZWZcIixcclxuICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy9qb2VsLnBuZ1wiLFxyXG4gICAgICAgIG9yZGVyOiAyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiVG9tbXkgTWlsbGVyXCIsXHJcbiAgICAgICAgcm9sZTogXCJTb21tZWxpZXJcIixcclxuICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy90b21teS5wbmdcIixcclxuICAgICAgICBvcmRlcjogMyAgXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IHBvcHVsYXRlQ29udGFjdCA9IChpZCkgPT4geyBcclxuICAgIFxyXG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSB7XHJcbiAgICAgICAgbmFtZTogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnY29udGFjdHMtbmFtZScsIGBjb250YWN0TmFtZSMke2NvbnRhY3RMaXN0W2lkXS5vcmRlcn1gKSxcclxuICAgICAgICByb2xlOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdjb250YWN0cy1yb2xlJywgYGNvbnRhY3RSb2xlIyR7Y29udGFjdExpc3RbaWRdLm9yZGVyfWApLFxyXG4gICAgICAgIGltZzogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2ltZycsICdjb250YWN0cy1pbWcnLCBgY29udGFjdEltZyMke2NvbnRhY3RMaXN0W2lkXS5vcmRlcn1gKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRvbUVsZW1lbnRzXHJcbn1cclxuXHJcbmNvbnN0IGdlbmVyYXRlQ29udGFjdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250ZW50JylcclxuICAgIGNvbnN0IG1haW5Db250YWN0Q29udGVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdtYWluJywgJ21haW4tY29udGFjdC1jb250ZW50JywgJ21haW5Db250YWN0Q29udGVudCcpXHJcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdjb250YWN0LXRpdGxlJywgJ2NvbnRhY3RUaXRsZScpXHJcbiAgICBjb25zdCBsb2NhdGlvblRleHQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdsb2NhdGlvbi10ZXh0JywgJ2xvY2F0aW9uVGV4dCcpXHJcbiAgICBjb25zdCBsb2NhdGlvbkltZyA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnbG9jYXRpb24taW1nJywgJ2xvY2F0aW9uSW1nJylcclxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdjb250YWN0LWNvbnRlbnQnLCAnY29udGFjdENvbnRlbnQnKVxyXG4gICAgXHJcbiAgICBjb25zdCBjb250YWluZXJPbmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2NvbnRhY3QtY29udGFpbmVyJywgJ2NvbnRhaW5lck9uZScpXHJcbiAgICBjb25zdCBjb250YWluZXJUd28gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2NvbnRhY3QtY29udGFpbmVyJywgJ2NvbnRhaW5lclR3bycpXHJcbiAgICBjb25zdCBjb250YWluZXJUaHJlZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY29udGFjdC1jb250YWluZXInLCAnY29udGFpbmVyVGhyZWUnKVxyXG4gICAgY29uc3QgY29udGFpbmVyRm91ciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY29udGFjdC1jb250YWluZXInLCAnY29udGFpbmVyRm91cicpXHJcblxyXG4gICAgY29uc3QgY29udGFjdE9uZSA9IHBvcHVsYXRlQ29udGFjdCgwKVxyXG4gICAgY29uc3QgY29udGFjdFR3byA9IHBvcHVsYXRlQ29udGFjdCgxKVxyXG4gICAgY29uc3QgY29udGFjdFRocmVlID0gcG9wdWxhdGVDb250YWN0KDIpXHJcbiAgICBjb25zdCBjb250YWN0Rm91ciA9IHBvcHVsYXRlQ29udGFjdCgzKVxyXG4gICAgIFxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSlcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kQ29udGFjRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyT25lLCBjb250YWN0T25lLCBjb250YWN0TGlzdCwgMClcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kQ29udGFjRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyVHdvLCBjb250YWN0VHdvLCBjb250YWN0TGlzdCwgMSlcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kQ29udGFjRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyVGhyZWUsIGNvbnRhY3RUaHJlZSwgY29udGFjdExpc3QsIDIpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZENvbnRhY0VsZW1lbnRBbmREZWZpbmVDb250ZW50KGNvbnRhaW5lckZvdXIsIGNvbnRhY3RGb3VyLCBjb250YWN0TGlzdCwgMylcclxuICAgIGxvY2F0aW9uSW1nLnNyYyA9ICcuLi9zcmMvaW1nL2xvY2F0aW9uLnBuZydcclxuXHJcbiAgICBtYWluQ29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpXHJcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJPbmUpXHJcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJUd28pXHJcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJUaHJlZSlcclxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lckZvdXIpXHJcbiAgICBtYWluQ29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25UZXh0KVxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uSW1nKVxyXG4gICBcclxuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdNYWluIGNvbnRhY3RzJ1xyXG4gICAgbG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gJ0Jlc3QgYnVyZ3VlciBwbGFjZSBvZiBUZXRvbiBDb3VudHksIFd5b21pbmcuIENvbWUgdmlzaXQgdXMgKGJ1dCBvbmx5IGlmIHlvdSBhcmUgbm90IGEgd29sZiknXHJcblxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRhY3RDb250ZW50KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUNvbnRhY3RQYWdlXHJcbiIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdC1kb21cIjtcclxuXHJcbmNvbnN0IGdlbmVyYXRlSG9tZXBhZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaG9tZU1haW5FbGVtID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ21haW4nLCAnaG9tZS1tYWluLWNvbnRlbnQnLCdob21lTWFpbkNvbnRlbnQnKVxyXG4gICAgY29uc3QgcGFnZVRpdGxlRWxlbSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3BhZ2UtdGl0bGUnLCAncGFnZVRpdGxlJylcclxuICAgIGNvbnN0IHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24nLCAncmVzdGF1cmFudERlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRlbnQnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhPbmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdkZXNjcmlwdGlvbi1wYXJhZ3JhcGgnLCAnZGVzY3JpcHRpb25QYXJhZ3JhcGhPbmUnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdkZXNjcmlwdGlvbi1wYXJhZ3JhcGgnLCAnZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28nKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhUaHJlZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Rlc2NyaXB0aW9uLXBhcmFncmFwaCcsICdkZXNjcmlwdGlvblBhcmFncmFwaFRocmVlJylcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUGFyYWdyYXBoRm91ciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Rlc2NyaXB0aW9uLXBhcmFncmFwaCcsICdkZXNjcmlwdGlvblBhcmFncmFwaEZvdXInKVxyXG4gICAgXHJcbiAgICAvLyBjb25zdCBob21lTWFpbiA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2hvbWVNYWluQ29udGVudCcpXHJcbiAgICAvLyBjb25zdCBwYWdlVGl0bGUgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdwYWdlVGl0bGUnKVxyXG4gICAgLy8gY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgncmVzdGF1cmFudERlc2NyaXB0aW9uJylcclxuXHJcbiAgICBob21lTWFpbkVsZW0uYXBwZW5kQ2hpbGQocGFnZVRpdGxlRWxlbSlcclxuICAgIGhvbWVNYWluRWxlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtKVxyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmFncmFwaE9uZSlcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28pXHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYWdyYXBoVGhyZWUpXHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYWdyYXBoRm91cilcclxuXHJcbiAgICBwYWdlVGl0bGVFbGVtLnRleHRDb250ZW50ID0gJ1RoZSBMYXN0IEJpdGUnXHJcbiAgICBcclxuICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoT25lLnRleHRDb250ZW50ID0gXCJUaGUgTGFzdCBCaXRlIGlzIGEgc21hbGwsIHBvc3QtYXBvY2FseXB0aWMgYnVyZ2VyIGpvaW50IGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIEphY2tzb24sIGEgdG93biByYXZhZ2VkIGJ5IG5hdHVyZSBhbmQgdGltZS4gRGVzcGl0ZSBpdHMgcnVuZG93biBhcHBlYXJhbmNlLCBUaGUgTGFzdCBCaXRlIGhhcyBiZWNvbWUgYSBiZWxvdmVkIGxvY2FsIGluc3RpdHV0aW9uLCBzZXJ2aW5nIHVwIGhlYXJ0eSBidXJnZXJzIGFuZCBmcmllcyB0byB3ZWFyeSBjdXN0b21lcnMgbG9va2luZyBmb3IgYSBtb21lbnQgb2YgcmVzcGl0ZSBpbiBhIGhhcnNoIGFuZCB1bmZvcmdpdmluZyB3b3JsZC5cIlxyXG4gICAgZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28udGV4dENvbnRlbnQgPSBcIlRoZSBtZW51IGF0IFRoZSBMYXN0IEJpdGUgaXMgc2ltcGxlIHlldCBzYXRpc2Z5aW5nLCBmZWF0dXJpbmcgY2xhc3NpYyBidXJnZXJzIGFuZCBzaWRlcyBtYWRlIHdpdGggZnJlc2gsIGxvY2FsbHkgc291cmNlZCBpbmdyZWRpZW50cy4gVGhlIGJ1cmdlcnMgYXJlIGNvb2tlZCB0byBwZXJmZWN0aW9uIG9uIGEgZ3JpbGwgaW4gZnVsbCB2aWV3IG9mIHRoZSBjdXN0b21lcnMsIHdpdGggdGhlIGFyb21hIG9mIHNpenpsaW5nIGJlZWYgd2FmdGluZyB0aHJvdWdoIHRoZSBjcmFtcGVkIGFuZCBkaW1seSBsaXQgc3BhY2UuXCJcclxuICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoVGhyZWUudGV4dENvbnRlbnQgPSBcIkRlc3BpdGUgdGhlIGRlc29sYXRlIHN1cnJvdW5kaW5ncywgdGhlIGF0bW9zcGhlcmUgaW5zaWRlIFRoZSBMYXN0IEJpdGUgaXMgd2FybSBhbmQgd2VsY29taW5nLCB3aXRoIHZpbnRhZ2UgcG9zdGVycyBhbmQgcGhvdG9ncmFwaHMgYWRvcm5pbmcgdGhlIHdhbGxzIGFuZCBhIGZldyBzbWFsbCB0YWJsZXMgYW5kIGNoYWlycyBzY2F0dGVyZWQgdGhyb3VnaG91dCB0aGUgc3BhY2UuIEN1c3RvbWVycyBvZnRlbiBsaW5nZXIgb3ZlciB0aGVpciBtZWFscywgc3dhcHBpbmcgc3RvcmllcyBhbmQgc2hhcmluZyBhIG1vbWVudCBvZiBjYW1hcmFkZXJpZSBhbWlkc3QgdGhlIHJ1aW5zIG9mIHRoZWlyIHdvcmxkLlwiXHJcbiAgICBkZXNjcmlwdGlvblBhcmFncmFwaEZvdXIudGV4dENvbnRlbnQgPSBcIkF0IFRoZSBMYXN0IEJpdGUsIGV2ZXJ5IGJ1cmdlciBpcyBzYXZvcmVkIGFzIGlmIGl0IG1pZ2h0IGJlIHRoZSBsYXN0LiBGb3IgdGhlIHdlYXJ5IHRyYXZlbGVycyBhbmQgc3Vydml2b3JzIG9mIHRoZSBhcG9jYWx5cHNlIHdobyBwYXNzIHRocm91Z2ggSmFja3NvbiwgVGhlIExhc3QgQml0ZSBpcyBhIGJlYWNvbiBvZiBob3BlIGFuZCBhIHJlbWluZGVyIHRoYXQgZXZlbiBpbiB0aGUgZGFya2VzdCBvZiB0aW1lcywgdGhlcmUgaXMgc3RpbGwgam95IHRvIGJlIGZvdW5kIGluIGEgd2VsbC1jb29rZWQgYnVyZ2VyIGFuZCBhIG1vbWVudCBvZiByZXNwaXRlLlwiXHJcblxyXG5cclxuXHJcblxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZU1haW5FbGVtKVxyXG4gICAgLy8gcmV0dXJuIGhvbWVNYWluXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSG9tZXBhZ2UiLCJjb25zdCBpbnRlcmFjdERPTSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpXHJcblxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCA9IGZ1bmN0aW9uKHR5cGUsIGNsYXNzTmFtZSwgaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YClcclxuICAgICAgICBlbGVtZW50LmlkID0gYCR7aWROYW1lfWBcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhvb2tET01lbGVtZW50ID0gZnVuY3Rpb24gKGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkTmFtZX1gKVxyXG4gICAgICAgIHJldHVybiBlbGVtXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24oY29udGFpbmVyLCBlbGVtZW50LCBtZW51ICwgdHlwZSwgb3JkZXIpe1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50Lm5hbWUpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuaW5ncmVkaWVudHMpXHJcbiAgICAgICAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQucHJpY2UpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuaW1nKVxyXG5cclxuICAgICAgICBlbGVtZW50Lm5hbWUudGV4dENvbnRlbnQgPSBgJHttZW51W2Ake3R5cGV9YF1bb3JkZXJdLm5hbWV9YFxyXG4gICAgICAgIGVsZW1lbnQuaW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBgJHttZW51W2Ake3R5cGV9YF1bb3JkZXJdLmluZ3JlZGllbnRzfWBcclxuICAgICAgICAvLyBlbGVtZW50LnByaWNlLnRleHRDb250ZW50ID0gYCR7bWVudVtgJHt0eXBlfWBdW29yZGVyXS5wcmljZX1gXHJcbiAgICAgICAgZWxlbWVudC5pbWcuc3JjID0gYCR7bWVudVtgJHt0eXBlfWBdW29yZGVyXS5pbWd9YFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRDb250YWNFbGVtZW50QW5kRGVmaW5lQ29udGVudCA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgZWxlbWVudCwgY29udGFjdExpc3QsIG9yZGVyKXtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5uYW1lKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50LnJvbGUpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuaW1nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGVsZW1lbnQubmFtZS50ZXh0Q29udGVudCA9IGAke2NvbnRhY3RMaXN0W29yZGVyXS5uYW1lfWBcclxuICAgICAgICBlbGVtZW50LnJvbGUudGV4dENvbnRlbnQgPSBgJHtjb250YWN0TGlzdFtvcmRlcl0ucm9sZX1gXHJcbiAgICAgICAgZWxlbWVudC5pbWcuc3JjID0gYCR7Y29udGFjdExpc3Rbb3JkZXJdLmltZ31gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbWFpbkNvbnRlbnQsIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCwgaG9va0RPTWVsZW1lbnQsIGFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudCwgYXBwZW5kQ29udGFjRWxlbWVudEFuZERlZmluZUNvbnRlbnQgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdERPTSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdC1kb21cIjtcclxuXHJcbmNvbnN0IG1lbnUgPSB7XHJcbiAgICBkZXNzZXJ0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDYXJhbWVsIENoZWVzZWNha2VcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiQ3JhY2tlciBjcnVtYnMsIHN1Z2FyLCB1bnNhbHRlZCBidXR0ZXIsIGNyZWFtIGNoZWVzZSwgdmFuaWxsYSBleHRyYWN0LCBlZ2dzLCBjYXJhbWVsIHNhdWNlLCB3aGlwcGVkIGNyZWFtIGFuZCBmcmVzaCBiZXJyaWVzLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCI3XCIsXHJcbiAgICAgICAgICAgIGltZzogXCIuLi9zcmMvaW1nL2Rlc3NlcnQxLmpwZ1wiLFxyXG4gICAgICAgICAgICBvcmRlcjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlJhc3BiZXJyeSBDaGVlc2VjYWtlXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkNyYWNrZXIgY3J1bWJzLCBzdWdhciwgdW5zYWx0ZWQgYnV0dGVyLCBjcmVhbSBjaGVlc2UsIHZhbmlsbGEgZXh0cmFjdCwgZWdncywgcmFzcGJlcnJ5IHNhdWNlLCB3aGlwcGVkIGNyZWFtIGFuZCBmcmVzaCByYXNwYmVycmllcy5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiOFwiLFxyXG4gICAgICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy9kZXNzZXJ0Mi5qcGdcIixcclxuICAgICAgICAgICAgb3JkZXI6IDFcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgaGFtYnVyZ3VlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXBvY2FseXBzZSBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMiBiZWVmIGJ1cmdlcnMsIHBvcmsgbG9pbiwgc2xpY2VzIG9mIGNoZWRkYXIsIG1venphcmVsbGEgY2hlZXNlIGFuZCBiYXJiZWN1ZSBzYXVjZS5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTFcIixcclxuICAgICAgICAgICAgaW1nOiBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTEuanBnXCIsXHJcbiAgICAgICAgICAgIG9yZGVyOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU3Vydml2b3IgQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkl0YWxpYW4gYnJlYWQsIDIgYmVlZiBidXJnZXJzLCBwb3JrIGxvaW4sIGJhY29uLCBtb3p6YXJlbGxhIGNoZWVzZSBhbmQgYmFyYmVjdWUgc2F1Y2UuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjEyXCIsXHJcbiAgICAgICAgICAgIGltZzogXCIuLi9zcmMvaW1nL2hhbWJ1cmdlci0yLmpwZ1wiLFxyXG4gICAgICAgICAgICBvcmRlcjogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIiBXYXN0ZWxhbmQgQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkl0YWxpYW4gYnJlYWQsIDEgYmVlZiBidXJnZXIsIHB1bGxlZCBwb3JrLCBiYWNvbiwgY2hlZGRhciBjaGVlc2UsIHRvbWF0byBzbGljZXMgYW5kIHJlZCBvbmlvbi5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiOVwiLFxyXG4gICAgICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy9oYW1idXJnZXItMy5qcGdcIixcclxuICAgICAgICAgICAgb3JkZXI6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJPdXRicmVhayBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiQ2lhYmF0dGEgYnJlYWQsIDMgYmVlZiBidXJnZXJzLCBjaGVkZGFyIHN1cHJlbWUgc2F1Y2UsIHRvbWF0byBzbGljZXMsIGxldHR1Y2UgYW5kIHBpY2tsZXMuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjE1XCIsXHJcbiAgICAgICAgICAgIGltZzogXCIuLi9zcmMvaW1nL2hhbWJ1cmdlci00LmpwZ1wiLFxyXG4gICAgICAgICAgICBvcmRlcjogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkxhc3QgQml0ZSBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMiBiZWVmIGJ1cmdlcnMsIGNoZWRkYXIgY2hlZXNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgbGV0dHVjZSBhbmQgb25pb24gcmluZ3MuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjEyXCIsXHJcbiAgICAgICAgICAgIGltZzogXCIuLi9zcmMvaW1nL2hhbWJ1cmdlci01LmpwZ1wiLFxyXG4gICAgICAgICAgICBvcmRlcjogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkluZmVjdGVkIEJ1cmdlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJJdGFsaWFuIGJyZWFkLCAxIGJlZWYgYnVyZ2VyLCBtb3p6YXJlbGxhIGNoZWVzZSwgdG9tYXRvIHNsaWNlcyBhbmQgbGV0dHVjZS5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiOFwiLFxyXG4gICAgICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy9oYW1idXJnZXItNi5qcGdcIixcclxuICAgICAgICAgICAgb3JkZXI6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDbGlja2VyIFN1cnByaXNlIEJ1cmdlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJEYXJrIEl0YWxpYW4gYnJlYWQsIDMgYmVlZiBidXJnZXJzLCBjaGVkZGFyIGNoZWVzZSwgZnJpZWQgZWdncywgYW5kIGxldHR1Y2UuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjE0XCIsXHJcbiAgICAgICAgICAgIGltZzogXCIuLi9zcmMvaW1nL2hhbWJ1cmdlci03LmpwZ1wiLFxyXG4gICAgICAgICAgICBvcmRlcjogNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkxhc3QgSG9wZSBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMiBiZWVmIGJ1cmdlcnMsIGJhY29uLCBjaGVkZGFyIGNoZWVzZSwgbGV0dHVjZSBhbmQgcmVkIG9uaW9uLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIxMVwiLFxyXG4gICAgICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy9oYW1idXJnZXItOC5qcGdcIixcclxuICAgICAgICAgICAgb3JkZXI6IDdcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5cclxuY29uc3QgcG9wdWxhdGVGb29kID0gKHR5cGUsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IHtcclxuICAgICAgICBuYW1lOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdmb29kcy1uYW1lJywgYG5hbWUjJHttZW51W2Ake3R5cGV9YF1baWRdLm9yZGVyfWApLFxyXG4gICAgICAgIGluZ3JlZGllbnRzOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdmb29kcy1pbmdyZWRpZW50cycsIGBpbmdyZWRpZW50cyMke21lbnVbYCR7dHlwZX1gXVtpZF0ub3JkZXJ9YCksXHJcbiAgICAgICAgcHJpY2U6IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Zvb2RzLXByaWNlJywgYHByaWNlIyR7bWVudVtgJHt0eXBlfWBdW2lkXS5vcmRlcn1gKSxcclxuICAgICAgICBpbWc6IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnZm9vZHMtaW1hZ2UnLCBgaW1hZ2UjJHttZW51W2Ake3R5cGV9YF1baWRdLm9yZGVyfWApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZG9tRWxlbWVudHNcclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVNZW51Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRlbnQnKVxyXG4gICAgY29uc3QgbWFpbk1lbnVDb250ZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ21haW4nLCAnbWFpbi1tZW51LWNvbnRlbnQnLCAnbWFpbk1lbnVDb250ZW50JylcclxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ21lbnUtdGl0bGUnLCAnbWVudVRpdGxlJylcclxuICAgIGNvbnN0IGRlc3NlcnRzQ29udGVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnZGVzc2VydC1jb250ZW50JywgJ2Rlc3NlcnRDb250ZW50JylcclxuICAgIGNvbnN0IGRlc3NlcnRDb250YWluZXJPbmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2Rlc3NlcnQtY29udGFpbmVyJywgJ2Rlc3NlcnRDb250YWluZXJPbmUnKVxyXG4gICAgY29uc3QgZGVzc2VydENvbnRhaW5lclR3byA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnZGVzc2VydC1jb250YWluZXInLCAnZGVzc2VydENvbnRhaW5lclR3bycpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250ZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGVudCcsICdoYW1idXJnZXJDb250ZW50JylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lck9uZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJPbmUnKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyVHdvID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lclR3bycpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJUaHJlZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJUaHJlZScpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJGb3VyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lckZvdXInKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyRml2ZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJGaXZlJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lclNpeCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJTaXgnKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyU2V2ZW4gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyU2V2ZW4nKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyRWlndGggPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyRWlndGgnKVxyXG5cclxuXHJcbiAgICBjb25zdCBkZXNzZXJ0T25lID0gcG9wdWxhdGVGb29kKFwiZGVzc2VydHNcIiwgMClcclxuICAgIGNvbnN0IGRlc3NlcnRUd28gPSBwb3B1bGF0ZUZvb2QoXCJkZXNzZXJ0c1wiLCAxKVxyXG5cclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJPbmUgPSBwb3B1bGF0ZUZvb2QoXCJoYW1idXJndWVyc1wiLCAwKVxyXG4gICAgY29uc3QgaGFtYnVyZ3VlclR3byA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDEpXHJcbiAgICBjb25zdCBoYW1idXJndWVyVGhyZWUgPSBwb3B1bGF0ZUZvb2QoXCJoYW1idXJndWVyc1wiLCAyKVxyXG4gICAgY29uc3QgaGFtYnVyZ3VlckZvdXIgPSBwb3B1bGF0ZUZvb2QoXCJoYW1idXJndWVyc1wiLCAzKVxyXG4gICAgY29uc3QgaGFtYnVyZ3VlckZpdmUgPSBwb3B1bGF0ZUZvb2QoXCJoYW1idXJndWVyc1wiLCA0KVxyXG4gICAgY29uc3QgaGFtYnVyZ3VlclNpeCA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDUpXHJcbiAgICBjb25zdCBoYW1idXJndWVyU2V2ZW4gPSBwb3B1bGF0ZUZvb2QoXCJoYW1idXJndWVyc1wiLCA2KVxyXG4gICAgY29uc3QgaGFtYnVyZ3VlckVpZ2h0ID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgNylcclxuXHJcbiAgICAvLyBtYWluTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVRpdGxlKVxyXG4gICAgLy8gbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnXHJcblxyXG4gICAgLy8gbWFpbk1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRzQ29udGVudClcclxuICAgIGRlc3NlcnRzQ29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0Q29udGFpbmVyT25lKVxyXG4gICAgZGVzc2VydHNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRDb250YWluZXJUd28pXHJcbiAgICAvLyBpbnRlcmFjdERPTSgpLmFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50KGRlc3NlcnRDb250YWluZXJPbmUsIGRlc3NlcnRPbmUsIG1lbnUsICdkZXNzZXJ0cycsIDApXHJcbiAgICAvLyBpbnRlcmFjdERPTSgpLmFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50KGRlc3NlcnRDb250YWluZXJUd28sIGRlc3NlcnRUd28sIG1lbnUsICdkZXNzZXJ0cycsIDEpXHJcbiAgICBtYWluTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGVudClcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyT25lKVxyXG4gICAgaGFtYnVyZ2VyQ29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250YWluZXJUd28pXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lclRocmVlKVxyXG4gICAgaGFtYnVyZ2VyQ29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250YWluZXJGb3VyKVxyXG4gICAgaGFtYnVyZ2VyQ29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250YWluZXJGaXZlKVxyXG4gICAgaGFtYnVyZ2VyQ29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250YWluZXJTaXgpXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lclNldmVuKVxyXG4gICAgaGFtYnVyZ2VyQ29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250YWluZXJFaWd0aClcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lck9uZSwgaGFtYnVyZ3Vlck9uZSwgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgMClcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lclR3bywgaGFtYnVyZ3VlclR3bywgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgMSlcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lclRocmVlLCBoYW1idXJndWVyVGhyZWUsIG1lbnUsICdoYW1idXJndWVycycsIDIpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJGb3VyLCBoYW1idXJndWVyRm91ciwgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgMylcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lckZpdmUsIGhhbWJ1cmd1ZXJGaXZlLCBtZW51LCAnaGFtYnVyZ3VlcnMnLCA0KVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRNZW51RWxlbWVudEFuZERlZmluZUNvbnRlbnQoaGFtYnVyZ2VyQ29udGFpbmVyU2l4LCBoYW1idXJndWVyU2l4LCBtZW51LCAnaGFtYnVyZ3VlcnMnLCA1KVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRNZW51RWxlbWVudEFuZERlZmluZUNvbnRlbnQoaGFtYnVyZ2VyQ29udGFpbmVyU2V2ZW4sIGhhbWJ1cmd1ZXJTZXZlbiwgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgNilcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lckVpZ3RoLCBoYW1idXJndWVyRWlnaHQsIG1lbnUsICdoYW1idXJndWVycycsIDcpXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluTWVudUNvbnRlbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTWVudUNvbnRlbnQiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdC1kb21cIlxyXG5pbXBvcnQgZ2VuZXJhdGVIb21lcGFnZSBmcm9tIFwiLi9ob21lXCJcclxuaW1wb3J0IGdlbmVyYXRlTWVudUNvbnRlbnQgZnJvbSBcIi4vbWVudVwiXHJcbmltcG9ydCBnZW5lcmF0ZUNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIlxyXG5cclxuY29uc3QgZ2VuZXJhdGVIZWFkZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaGVhZGVyJywgJ21haW4taGVhZGVyJywgJ21haW5IZWFkZXInKVxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcblxyXG4gICAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdyZXN0YXVyYW50LXRpdGxlJywgJ3Jlc3RhdXJhbnRUaXRsZScpXHJcbiAgICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIExhc3QgQml0ZSdcclxuXHJcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdidXR0b25zLWNvbnRhaW5lcicsICdidXR0b25zQ29udGFpbmVyJylcclxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2hvbWUtcGFnZScsICdob21lUGFnZScpXHJcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnXHJcbiAgICBjb25zdCBtZW51QnV0dG9uID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdtZW51LXBhZ2UnLCAnbWVudVBhZ2UnKVxyXG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51J1xyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY29udGFjdC1wYWdlJywgJ2NvbnRhY3RQYWdlJylcclxuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCdcclxuXHJcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRUaXRsZSlcclxuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcilcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbilcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbilcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5IZWFkZXIpXHJcbiAgICByZXR1cm4geyBob21lQnV0dG9uLCBtZW51QnV0dG9uLCBjb250YWN0QnV0dG9uLCBtYWluQ29udGVudCB9XHJcbn0pKClcclxuXHJcbmNvbnN0IGdlbmVyYXRlRm9vdGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtYWluRm9vdGVyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2Zvb3RlcicsICdmb290ZXInLCAnZm9vdGVyJylcclxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdmb290ZXItdGV4dCcsICdmb290ZXJUZXh0JylcclxuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYScsICdmYS1icmFuZHMnLCAnZm9vdGVyTGluaycpXHJcbiAgICBmb290ZXJMaW5rLmNsYXNzTGlzdC5hZGQoJ2ZhLWdpdGh1YicpXHJcbiAgICBmb290ZXJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3JtYXRocidcclxuXHJcbiAgICBtYWluRm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpXHJcbiAgICBtYWluRm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmspXHJcblxyXG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9ICdybWF0aMKpJ1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkZvb3RlcilcclxufSkoKVxyXG5cclxuXHJcbmNvbnN0IGNsZWFyRE9NID0gZnVuY3Rpb24oKXtcclxuICAgIHdoaWxlIChnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICBnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5yZW1vdmVDaGlsZChnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG59XHJcblxyXG5nZW5lcmF0ZUhlYWRlci5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNsZWFyRE9NKClcclxuICAgIGdlbmVyYXRlSGVhZGVyLmNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIubWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5ob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlQ29udGFjdFBhZ2UoKVxyXG59KVxyXG5cclxuZ2VuZXJhdGVIZWFkZXIubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNsZWFyRE9NKClcclxuICAgIGdlbmVyYXRlSGVhZGVyLmNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIubWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5ob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlTWVudUNvbnRlbnQoKVxyXG59KVxyXG5cclxuZ2VuZXJhdGVIZWFkZXIuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjbGVhckRPTSgpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5jb250YWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlSGVhZGVyLm1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIuaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZUhvbWVwYWdlKClcclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9