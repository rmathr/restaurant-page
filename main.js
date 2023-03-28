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
/* harmony import */ var _src_img_ellie_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/ellie.png */ "./src/img/ellie.png");
/* harmony import */ var _src_img_dina_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/img/dina.png */ "./src/img/dina.png");
/* harmony import */ var _src_img_joel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/img/joel.png */ "./src/img/joel.png");
/* harmony import */ var _src_img_tommy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/img/tommy.png */ "./src/img/tommy.png");
/* harmony import */ var _src_img_location_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/img/location.png */ "./src/img/location.png");








const contactList = [
    {
        name: "Ellie Williams",
        role: "Director",
        img: _src_img_ellie_png__WEBPACK_IMPORTED_MODULE_1__,
        order: 0
    },
    {
        name: "Dina Williams",
        role: "General Manager",
        img: _src_img_dina_png__WEBPACK_IMPORTED_MODULE_2__,
        order: 1
    },
    {
        name: "Joel Miller",
        role: "Executive Chef",
        img: _src_img_joel_png__WEBPACK_IMPORTED_MODULE_3__,
        order: 2
    },
    {
        name: "Tommy Miller",
        role: "Sommelier",
        img: _src_img_tommy_png__WEBPACK_IMPORTED_MODULE_4__,
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
    locationImg.src = _src_img_location_png__WEBPACK_IMPORTED_MODULE_5__

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
/* harmony import */ var _src_img_hamburger_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/hamburger-1.jpg */ "./src/img/hamburger-1.jpg");
/* harmony import */ var _src_img_hamburger_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/img/hamburger-2.jpg */ "./src/img/hamburger-2.jpg");
/* harmony import */ var _src_img_hamburger_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/img/hamburger-3.jpg */ "./src/img/hamburger-3.jpg");
/* harmony import */ var _src_img_hamburger_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/img/hamburger-4.jpg */ "./src/img/hamburger-4.jpg");
/* harmony import */ var _src_img_hamburger_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/img/hamburger-5.jpg */ "./src/img/hamburger-5.jpg");
/* harmony import */ var _src_img_hamburger_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/img/hamburger-6.jpg */ "./src/img/hamburger-6.jpg");
/* harmony import */ var _src_img_hamburger_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/img/hamburger-7.jpg */ "./src/img/hamburger-7.jpg");
/* harmony import */ var _src_img_hamburger_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/img/hamburger-8.jpg */ "./src/img/hamburger-8.jpg");










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
            img: _src_img_hamburger_1_jpg__WEBPACK_IMPORTED_MODULE_1__,
            order: 0
        },
        {
            name: "Survivor Burger",
            ingredients: "Italian bread, 2 beef burgers, pork loin, bacon, mozzarella cheese and barbecue sauce.",
            price: "12",
            img: _src_img_hamburger_2_jpg__WEBPACK_IMPORTED_MODULE_2__,
            order: 1
        },
        {
            name: " Wasteland Burger",
            ingredients: "Italian bread, 1 beef burger, pulled pork, bacon, cheddar cheese, tomato slices and red onion.",
            price: "9",
            img: _src_img_hamburger_3_jpg__WEBPACK_IMPORTED_MODULE_3__,
            order: 2
        },
        {
            name: "Outbreak Burger",
            ingredients: "Ciabatta bread, 3 beef burgers, cheddar supreme sauce, tomato slices, lettuce and pickles.",
            price: "15",
            img: _src_img_hamburger_4_jpg__WEBPACK_IMPORTED_MODULE_4__,
            order: 3
        },
        {
            name: "Last Bite Burger",
            ingredients: "Italian bread, 2 beef burgers, cheddar cheese, mozzarella cheese, lettuce and onion rings.",
            price: "12",
            img: _src_img_hamburger_5_jpg__WEBPACK_IMPORTED_MODULE_5__,
            order: 4
        },
        {
            name: "Infected Burger",
            ingredients: "Italian bread, 1 beef burger, mozzarella cheese, tomato slices and lettuce.",
            price: "8",
            img: _src_img_hamburger_6_jpg__WEBPACK_IMPORTED_MODULE_6__,
            order: 5
        },
        {
            name: "Clicker Surprise Burger",
            ingredients: "Dark Italian bread, 3 beef burgers, cheddar cheese, fried eggs, and lettuce.",
            price: "14",
            img: _src_img_hamburger_7_jpg__WEBPACK_IMPORTED_MODULE_7__,
            order: 6
        },
        {
            name: "Last Hope Burger",
            ingredients: "Italian bread, 2 beef burgers, bacon, cheddar cheese, lettuce and red onion.",
            price: "11",
            img: _src_img_hamburger_8_jpg__WEBPACK_IMPORTED_MODULE_8__,
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

/***/ }),

/***/ "./src/img/dina.png":
/*!**************************!*\
  !*** ./src/img/dina.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cb0776c76d9c8f10437.png";

/***/ }),

/***/ "./src/img/ellie.png":
/*!***************************!*\
  !*** ./src/img/ellie.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66dedc8716bd3d7b8b3f.png";

/***/ }),

/***/ "./src/img/hamburger-1.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79cebbdf92b084231f7b.jpg";

/***/ }),

/***/ "./src/img/hamburger-2.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "508f67d747d71474d407.jpg";

/***/ }),

/***/ "./src/img/hamburger-3.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fab9ed3abf1b8e988854.jpg";

/***/ }),

/***/ "./src/img/hamburger-4.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-4.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e41de6df2747a90eea1.jpg";

/***/ }),

/***/ "./src/img/hamburger-5.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-5.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cb29ebe45983c40da0d.jpg";

/***/ }),

/***/ "./src/img/hamburger-6.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-6.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "398427c5cac2c08d1788.jpg";

/***/ }),

/***/ "./src/img/hamburger-7.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-7.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cb934f792c8597596a4.jpg";

/***/ }),

/***/ "./src/img/hamburger-8.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-8.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "066d9352eed4583cfdfe.jpg";

/***/ }),

/***/ "./src/img/joel.png":
/*!**************************!*\
  !*** ./src/img/joel.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a86b5434cc370a742a4.png";

/***/ }),

/***/ "./src/img/location.png":
/*!******************************!*\
  !*** ./src/img/location.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d468ec08b12c9e65f920.png";

/***/ }),

/***/ "./src/img/tommy.png":
/*!***************************!*\
  !*** ./src/img/tommy.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a6c12cfe0c97d0800ef.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ25DO0FBQ0EsNEJBQTRCLHlEQUFXO0FBQ3ZDO0FBQ0E7QUFDQSw2QkFBNkIseURBQVc7QUFDeEMsdUJBQXVCLHlEQUFXO0FBQ2xDO0FBQ0EsdUJBQXVCLHlEQUFXO0FBQ2xDO0FBQ0EsMEJBQTBCLHlEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBLHVCQUF1Qix5REFBVztBQUNsQyx1QkFBdUIseURBQVc7QUFDbEMsdUJBQXVCLHlEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBbUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBbUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBZ0I7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbnRlcmFjdC1kb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3QtZG9tXCI7XHJcbmltcG9ydCBlbGxpZSBmcm9tIFwiLi4vc3JjL2ltZy9lbGxpZS5wbmdcIlxyXG5pbXBvcnQgZGluYSBmcm9tIFwiLi4vc3JjL2ltZy9kaW5hLnBuZ1wiXHJcbmltcG9ydCBqb2VsIGZyb20gXCIuLi9zcmMvaW1nL2pvZWwucG5nXCJcclxuaW1wb3J0IHRvbW15IGZyb20gXCIuLi9zcmMvaW1nL3RvbW15LnBuZ1wiXHJcbmltcG9ydCBsb2NhdGlvbiBmcm9tIFwiLi4vc3JjL2ltZy9sb2NhdGlvbi5wbmdcIlxyXG5cclxuXHJcbmNvbnN0IGNvbnRhY3RMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRWxsaWUgV2lsbGlhbXNcIixcclxuICAgICAgICByb2xlOiBcIkRpcmVjdG9yXCIsXHJcbiAgICAgICAgaW1nOiBlbGxpZSxcclxuICAgICAgICBvcmRlcjogMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRpbmEgV2lsbGlhbXNcIixcclxuICAgICAgICByb2xlOiBcIkdlbmVyYWwgTWFuYWdlclwiLFxyXG4gICAgICAgIGltZzogZGluYSxcclxuICAgICAgICBvcmRlcjogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkpvZWwgTWlsbGVyXCIsXHJcbiAgICAgICAgcm9sZTogXCJFeGVjdXRpdmUgQ2hlZlwiLFxyXG4gICAgICAgIGltZzogam9lbCxcclxuICAgICAgICBvcmRlcjogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlRvbW15IE1pbGxlclwiLFxyXG4gICAgICAgIHJvbGU6IFwiU29tbWVsaWVyXCIsXHJcbiAgICAgICAgaW1nOiB0b21teSxcclxuICAgICAgICBvcmRlcjogMyAgXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IHBvcHVsYXRlQ29udGFjdCA9IChpZCkgPT4geyBcclxuICAgIFxyXG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSB7XHJcbiAgICAgICAgbmFtZTogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnY29udGFjdHMtbmFtZScsIGBjb250YWN0TmFtZSMke2NvbnRhY3RMaXN0W2lkXS5vcmRlcn1gKSxcclxuICAgICAgICByb2xlOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdjb250YWN0cy1yb2xlJywgYGNvbnRhY3RSb2xlIyR7Y29udGFjdExpc3RbaWRdLm9yZGVyfWApLFxyXG4gICAgICAgIGltZzogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2ltZycsICdjb250YWN0cy1pbWcnLCBgY29udGFjdEltZyMke2NvbnRhY3RMaXN0W2lkXS5vcmRlcn1gKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRvbUVsZW1lbnRzXHJcbn1cclxuXHJcbmNvbnN0IGdlbmVyYXRlQ29udGFjdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250ZW50JylcclxuICAgIGNvbnN0IG1haW5Db250YWN0Q29udGVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdtYWluJywgJ21haW4tY29udGFjdC1jb250ZW50JywgJ21haW5Db250YWN0Q29udGVudCcpXHJcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdjb250YWN0LXRpdGxlJywgJ2NvbnRhY3RUaXRsZScpXHJcbiAgICBjb25zdCBsb2NhdGlvblRleHQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdsb2NhdGlvbi10ZXh0JywgJ2xvY2F0aW9uVGV4dCcpXHJcbiAgICBjb25zdCBsb2NhdGlvbkltZyA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnbG9jYXRpb24taW1nJywgJ2xvY2F0aW9uSW1nJylcclxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdjb250YWN0LWNvbnRlbnQnLCAnY29udGFjdENvbnRlbnQnKVxyXG4gICAgXHJcbiAgICBjb25zdCBjb250YWluZXJPbmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2NvbnRhY3QtY29udGFpbmVyJywgJ2NvbnRhaW5lck9uZScpXHJcbiAgICBjb25zdCBjb250YWluZXJUd28gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2NvbnRhY3QtY29udGFpbmVyJywgJ2NvbnRhaW5lclR3bycpXHJcbiAgICBjb25zdCBjb250YWluZXJUaHJlZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY29udGFjdC1jb250YWluZXInLCAnY29udGFpbmVyVGhyZWUnKVxyXG4gICAgY29uc3QgY29udGFpbmVyRm91ciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY29udGFjdC1jb250YWluZXInLCAnY29udGFpbmVyRm91cicpXHJcblxyXG4gICAgY29uc3QgY29udGFjdE9uZSA9IHBvcHVsYXRlQ29udGFjdCgwKVxyXG4gICAgY29uc3QgY29udGFjdFR3byA9IHBvcHVsYXRlQ29udGFjdCgxKVxyXG4gICAgY29uc3QgY29udGFjdFRocmVlID0gcG9wdWxhdGVDb250YWN0KDIpXHJcbiAgICBjb25zdCBjb250YWN0Rm91ciA9IHBvcHVsYXRlQ29udGFjdCgzKVxyXG4gICAgIFxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSlcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kQ29udGFjRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyT25lLCBjb250YWN0T25lLCBjb250YWN0TGlzdCwgMClcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kQ29udGFjRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyVHdvLCBjb250YWN0VHdvLCBjb250YWN0TGlzdCwgMSlcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kQ29udGFjRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyVGhyZWUsIGNvbnRhY3RUaHJlZSwgY29udGFjdExpc3QsIDIpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZENvbnRhY0VsZW1lbnRBbmREZWZpbmVDb250ZW50KGNvbnRhaW5lckZvdXIsIGNvbnRhY3RGb3VyLCBjb250YWN0TGlzdCwgMylcclxuICAgIGxvY2F0aW9uSW1nLnNyYyA9IGxvY2F0aW9uXHJcblxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KVxyXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyT25lKVxyXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyVHdvKVxyXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyVGhyZWUpXHJcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJGb3VyKVxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uVGV4dClcclxuICAgIG1haW5Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbkltZylcclxuICAgXHJcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnTWFpbiBjb250YWN0cydcclxuICAgIGxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9ICdCZXN0IGJ1cmd1ZXIgcGxhY2Ugb2YgVGV0b24gQ291bnR5LCBXeW9taW5nLiBDb21lIHZpc2l0IHVzIChidXQgb25seSBpZiB5b3UgYXJlIG5vdCBhIHdvbGYpJ1xyXG5cclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWN0Q29udGVudClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVDb250YWN0UGFnZVxyXG4iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3QtZG9tXCI7XHJcblxyXG5cclxuY29uc3QgZ2VuZXJhdGVIb21lcGFnZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBob21lTWFpbkVsZW0gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnbWFpbicsICdob21lLW1haW4tY29udGVudCcsJ2hvbWVNYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBwYWdlVGl0bGVFbGVtID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAncGFnZS10aXRsZScsICdwYWdlVGl0bGUnKVxyXG4gICAgY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAncmVzdGF1cmFudC1kZXNjcmlwdGlvbicsICdyZXN0YXVyYW50RGVzY3JpcHRpb24nKVxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmFncmFwaE9uZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Rlc2NyaXB0aW9uLXBhcmFncmFwaCcsICdkZXNjcmlwdGlvblBhcmFncmFwaE9uZScpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmFncmFwaFR3byA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Rlc2NyaXB0aW9uLXBhcmFncmFwaCcsICdkZXNjcmlwdGlvblBhcmFncmFwaFR3bycpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmFncmFwaFRocmVlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZGVzY3JpcHRpb24tcGFyYWdyYXBoJywgJ2Rlc2NyaXB0aW9uUGFyYWdyYXBoVGhyZWUnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhGb3VyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZGVzY3JpcHRpb24tcGFyYWdyYXBoJywgJ2Rlc2NyaXB0aW9uUGFyYWdyYXBoRm91cicpXHJcbiAgICBcclxuICAgIC8vIGNvbnN0IGhvbWVNYWluID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnaG9tZU1haW5Db250ZW50JylcclxuICAgIC8vIGNvbnN0IHBhZ2VUaXRsZSA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ3BhZ2VUaXRsZScpXHJcbiAgICAvLyBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdyZXN0YXVyYW50RGVzY3JpcHRpb24nKVxyXG5cclxuICAgIGhvbWVNYWluRWxlbS5hcHBlbmRDaGlsZChwYWdlVGl0bGVFbGVtKVxyXG4gICAgaG9tZU1haW5FbGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0pXHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYWdyYXBoT25lKVxyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmFncmFwaFR3bylcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhZ3JhcGhUaHJlZSlcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhZ3JhcGhGb3VyKVxyXG5cclxuICAgIHBhZ2VUaXRsZUVsZW0udGV4dENvbnRlbnQgPSAnVGhlIExhc3QgQml0ZSdcclxuICAgIFxyXG4gICAgZGVzY3JpcHRpb25QYXJhZ3JhcGhPbmUudGV4dENvbnRlbnQgPSBcIlRoZSBMYXN0IEJpdGUgaXMgYSBzbWFsbCwgcG9zdC1hcG9jYWx5cHRpYyBidXJnZXIgam9pbnQgbG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgSmFja3NvbiwgYSB0b3duIHJhdmFnZWQgYnkgbmF0dXJlIGFuZCB0aW1lLiBEZXNwaXRlIGl0cyBydW5kb3duIGFwcGVhcmFuY2UsIFRoZSBMYXN0IEJpdGUgaGFzIGJlY29tZSBhIGJlbG92ZWQgbG9jYWwgaW5zdGl0dXRpb24sIHNlcnZpbmcgdXAgaGVhcnR5IGJ1cmdlcnMgYW5kIGZyaWVzIHRvIHdlYXJ5IGN1c3RvbWVycyBsb29raW5nIGZvciBhIG1vbWVudCBvZiByZXNwaXRlIGluIGEgaGFyc2ggYW5kIHVuZm9yZ2l2aW5nIHdvcmxkLlwiXHJcbiAgICBkZXNjcmlwdGlvblBhcmFncmFwaFR3by50ZXh0Q29udGVudCA9IFwiVGhlIG1lbnUgYXQgVGhlIExhc3QgQml0ZSBpcyBzaW1wbGUgeWV0IHNhdGlzZnlpbmcsIGZlYXR1cmluZyBjbGFzc2ljIGJ1cmdlcnMgYW5kIHNpZGVzIG1hZGUgd2l0aCBmcmVzaCwgbG9jYWxseSBzb3VyY2VkIGluZ3JlZGllbnRzLiBUaGUgYnVyZ2VycyBhcmUgY29va2VkIHRvIHBlcmZlY3Rpb24gb24gYSBncmlsbCBpbiBmdWxsIHZpZXcgb2YgdGhlIGN1c3RvbWVycywgd2l0aCB0aGUgYXJvbWEgb2Ygc2l6emxpbmcgYmVlZiB3YWZ0aW5nIHRocm91Z2ggdGhlIGNyYW1wZWQgYW5kIGRpbWx5IGxpdCBzcGFjZS5cIlxyXG4gICAgZGVzY3JpcHRpb25QYXJhZ3JhcGhUaHJlZS50ZXh0Q29udGVudCA9IFwiRGVzcGl0ZSB0aGUgZGVzb2xhdGUgc3Vycm91bmRpbmdzLCB0aGUgYXRtb3NwaGVyZSBpbnNpZGUgVGhlIExhc3QgQml0ZSBpcyB3YXJtIGFuZCB3ZWxjb21pbmcsIHdpdGggdmludGFnZSBwb3N0ZXJzIGFuZCBwaG90b2dyYXBocyBhZG9ybmluZyB0aGUgd2FsbHMgYW5kIGEgZmV3IHNtYWxsIHRhYmxlcyBhbmQgY2hhaXJzIHNjYXR0ZXJlZCB0aHJvdWdob3V0IHRoZSBzcGFjZS4gQ3VzdG9tZXJzIG9mdGVuIGxpbmdlciBvdmVyIHRoZWlyIG1lYWxzLCBzd2FwcGluZyBzdG9yaWVzIGFuZCBzaGFyaW5nIGEgbW9tZW50IG9mIGNhbWFyYWRlcmllIGFtaWRzdCB0aGUgcnVpbnMgb2YgdGhlaXIgd29ybGQuXCJcclxuICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoRm91ci50ZXh0Q29udGVudCA9IFwiQXQgVGhlIExhc3QgQml0ZSwgZXZlcnkgYnVyZ2VyIGlzIHNhdm9yZWQgYXMgaWYgaXQgbWlnaHQgYmUgdGhlIGxhc3QuIEZvciB0aGUgd2VhcnkgdHJhdmVsZXJzIGFuZCBzdXJ2aXZvcnMgb2YgdGhlIGFwb2NhbHlwc2Ugd2hvIHBhc3MgdGhyb3VnaCBKYWNrc29uLCBUaGUgTGFzdCBCaXRlIGlzIGEgYmVhY29uIG9mIGhvcGUgYW5kIGEgcmVtaW5kZXIgdGhhdCBldmVuIGluIHRoZSBkYXJrZXN0IG9mIHRpbWVzLCB0aGVyZSBpcyBzdGlsbCBqb3kgdG8gYmUgZm91bmQgaW4gYSB3ZWxsLWNvb2tlZCBidXJnZXIgYW5kIGEgbW9tZW50IG9mIHJlc3BpdGUuXCJcclxuXHJcblxyXG5cclxuXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChob21lTWFpbkVsZW0pXHJcbiAgICAvLyByZXR1cm4gaG9tZU1haW5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIb21lcGFnZSIsImNvbnN0IGludGVyYWN0RE9NID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50JylcclxuXHJcblxyXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkID0gZnVuY3Rpb24odHlwZSwgY2xhc3NOYW1lLCBpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBgJHtpZE5hbWV9YFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG9va0RPTWVsZW1lbnQgPSBmdW5jdGlvbiAoaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWROYW1lfWApXHJcbiAgICAgICAgcmV0dXJuIGVsZW1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRNZW51RWxlbWVudEFuZERlZmluZUNvbnRlbnQgPSBmdW5jdGlvbihjb250YWluZXIsIGVsZW1lbnQsIG1lbnUgLCB0eXBlLCBvcmRlcil7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQubmFtZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5pbmdyZWRpZW50cylcclxuICAgICAgICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5wcmljZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5pbWcpXHJcblxyXG4gICAgICAgIGVsZW1lbnQubmFtZS50ZXh0Q29udGVudCA9IGAke21lbnVbYCR7dHlwZX1gXVtvcmRlcl0ubmFtZX1gXHJcbiAgICAgICAgZWxlbWVudC5pbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGAke21lbnVbYCR7dHlwZX1gXVtvcmRlcl0uaW5ncmVkaWVudHN9YFxyXG4gICAgICAgIC8vIGVsZW1lbnQucHJpY2UudGV4dENvbnRlbnQgPSBgJHttZW51W2Ake3R5cGV9YF1bb3JkZXJdLnByaWNlfWBcclxuICAgICAgICBlbGVtZW50LmltZy5zcmMgPSBgJHttZW51W2Ake3R5cGV9YF1bb3JkZXJdLmltZ31gXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZENvbnRhY0VsZW1lbnRBbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24oY29udGFpbmVyLCBlbGVtZW50LCBjb250YWN0TGlzdCwgb3JkZXIpe1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50Lm5hbWUpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQucm9sZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5pbWcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbWVudC5uYW1lLnRleHRDb250ZW50ID0gYCR7Y29udGFjdExpc3Rbb3JkZXJdLm5hbWV9YFxyXG4gICAgICAgIGVsZW1lbnQucm9sZS50ZXh0Q29udGVudCA9IGAke2NvbnRhY3RMaXN0W29yZGVyXS5yb2xlfWBcclxuICAgICAgICBlbGVtZW50LmltZy5zcmMgPSBgJHtjb250YWN0TGlzdFtvcmRlcl0uaW1nfWBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBtYWluQ29udGVudCwgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkLCBob29rRE9NZWxlbWVudCwgYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50LCBhcHBlbmRDb250YWNFbGVtZW50QW5kRGVmaW5lQ29udGVudCB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0RE9NIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5pbXBvcnQgaGFtYnVyZ2VyMSBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItMS5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyMiBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItMi5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyMyBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItMy5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyNCBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItNC5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyNSBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItNS5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyNiBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItNi5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyNyBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItNy5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyOCBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItOC5qcGdcIlxyXG5cclxuY29uc3QgbWVudSA9IHtcclxuICAgIGRlc3NlcnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkNhcmFtZWwgQ2hlZXNlY2FrZVwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJDcmFja2VyIGNydW1icywgc3VnYXIsIHVuc2FsdGVkIGJ1dHRlciwgY3JlYW0gY2hlZXNlLCB2YW5pbGxhIGV4dHJhY3QsIGVnZ3MsIGNhcmFtZWwgc2F1Y2UsIHdoaXBwZWQgY3JlYW0gYW5kIGZyZXNoIGJlcnJpZXMuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjdcIixcclxuICAgICAgICAgICAgaW1nOiBcIi4uL3NyYy9pbWcvZGVzc2VydDEuanBnXCIsXHJcbiAgICAgICAgICAgIG9yZGVyOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiUmFzcGJlcnJ5IENoZWVzZWNha2VcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiQ3JhY2tlciBjcnVtYnMsIHN1Z2FyLCB1bnNhbHRlZCBidXR0ZXIsIGNyZWFtIGNoZWVzZSwgdmFuaWxsYSBleHRyYWN0LCBlZ2dzLCByYXNwYmVycnkgc2F1Y2UsIHdoaXBwZWQgY3JlYW0gYW5kIGZyZXNoIHJhc3BiZXJyaWVzLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCI4XCIsXHJcbiAgICAgICAgICAgIGltZzogXCIuLi9zcmMvaW1nL2Rlc3NlcnQyLmpwZ1wiLFxyXG4gICAgICAgICAgICBvcmRlcjogMVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBoYW1idXJndWVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJBcG9jYWx5cHNlIEJ1cmdlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJJdGFsaWFuIGJyZWFkLCAyIGJlZWYgYnVyZ2VycywgcG9yayBsb2luLCBzbGljZXMgb2YgY2hlZGRhciwgbW96emFyZWxsYSBjaGVlc2UgYW5kIGJhcmJlY3VlIHNhdWNlLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIxMVwiLFxyXG4gICAgICAgICAgICBpbWc6IGhhbWJ1cmdlcjEsXHJcbiAgICAgICAgICAgIG9yZGVyOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU3Vydml2b3IgQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkl0YWxpYW4gYnJlYWQsIDIgYmVlZiBidXJnZXJzLCBwb3JrIGxvaW4sIGJhY29uLCBtb3p6YXJlbGxhIGNoZWVzZSBhbmQgYmFyYmVjdWUgc2F1Y2UuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjEyXCIsXHJcbiAgICAgICAgICAgIGltZzogaGFtYnVyZ2VyMixcclxuICAgICAgICAgICAgb3JkZXI6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCIgV2FzdGVsYW5kIEJ1cmdlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJJdGFsaWFuIGJyZWFkLCAxIGJlZWYgYnVyZ2VyLCBwdWxsZWQgcG9yaywgYmFjb24sIGNoZWRkYXIgY2hlZXNlLCB0b21hdG8gc2xpY2VzIGFuZCByZWQgb25pb24uXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjlcIixcclxuICAgICAgICAgICAgaW1nOiBoYW1idXJnZXIzLFxyXG4gICAgICAgICAgICBvcmRlcjogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIk91dGJyZWFrIEJ1cmdlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJDaWFiYXR0YSBicmVhZCwgMyBiZWVmIGJ1cmdlcnMsIGNoZWRkYXIgc3VwcmVtZSBzYXVjZSwgdG9tYXRvIHNsaWNlcywgbGV0dHVjZSBhbmQgcGlja2xlcy5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTVcIixcclxuICAgICAgICAgICAgaW1nOiBoYW1idXJnZXI0LFxyXG4gICAgICAgICAgICBvcmRlcjogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkxhc3QgQml0ZSBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMiBiZWVmIGJ1cmdlcnMsIGNoZWRkYXIgY2hlZXNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgbGV0dHVjZSBhbmQgb25pb24gcmluZ3MuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjEyXCIsXHJcbiAgICAgICAgICAgIGltZzogaGFtYnVyZ2VyNSxcclxuICAgICAgICAgICAgb3JkZXI6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJJbmZlY3RlZCBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMSBiZWVmIGJ1cmdlciwgbW96emFyZWxsYSBjaGVlc2UsIHRvbWF0byBzbGljZXMgYW5kIGxldHR1Y2UuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjhcIixcclxuICAgICAgICAgICAgaW1nOiBoYW1idXJnZXI2LFxyXG4gICAgICAgICAgICBvcmRlcjogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkNsaWNrZXIgU3VycHJpc2UgQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkRhcmsgSXRhbGlhbiBicmVhZCwgMyBiZWVmIGJ1cmdlcnMsIGNoZWRkYXIgY2hlZXNlLCBmcmllZCBlZ2dzLCBhbmQgbGV0dHVjZS5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTRcIixcclxuICAgICAgICAgICAgaW1nOiBoYW1idXJnZXI3LFxyXG4gICAgICAgICAgICBvcmRlcjogNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkxhc3QgSG9wZSBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMiBiZWVmIGJ1cmdlcnMsIGJhY29uLCBjaGVkZGFyIGNoZWVzZSwgbGV0dHVjZSBhbmQgcmVkIG9uaW9uLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIxMVwiLFxyXG4gICAgICAgICAgICBpbWc6IGhhbWJ1cmdlcjgsXHJcbiAgICAgICAgICAgIG9yZGVyOiA3XHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufVxyXG5cclxuXHJcbmNvbnN0IHBvcHVsYXRlRm9vZCA9ICh0eXBlLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSB7XHJcbiAgICAgICAgbmFtZTogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZm9vZHMtbmFtZScsIGBuYW1lIyR7bWVudVtgJHt0eXBlfWBdW2lkXS5vcmRlcn1gKSxcclxuICAgICAgICBpbmdyZWRpZW50czogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZm9vZHMtaW5ncmVkaWVudHMnLCBgaW5ncmVkaWVudHMjJHttZW51W2Ake3R5cGV9YF1baWRdLm9yZGVyfWApLFxyXG4gICAgICAgIHByaWNlOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdmb29kcy1wcmljZScsIGBwcmljZSMke21lbnVbYCR7dHlwZX1gXVtpZF0ub3JkZXJ9YCksXHJcbiAgICAgICAgaW1nOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW1nJywgJ2Zvb2RzLWltYWdlJywgYGltYWdlIyR7bWVudVtgJHt0eXBlfWBdW2lkXS5vcmRlcn1gKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRvbUVsZW1lbnRzXHJcbn1cclxuXHJcbmNvbnN0IGdlbmVyYXRlTWVudUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250ZW50JylcclxuICAgIGNvbnN0IG1haW5NZW51Q29udGVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdtYWluJywgJ21haW4tbWVudS1jb250ZW50JywgJ21haW5NZW51Q29udGVudCcpXHJcbiAgICBjb25zdCBtZW51VGl0bGUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdtZW51LXRpdGxlJywgJ21lbnVUaXRsZScpXHJcbiAgICBjb25zdCBkZXNzZXJ0c0NvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2Rlc3NlcnQtY29udGVudCcsICdkZXNzZXJ0Q29udGVudCcpXHJcbiAgICBjb25zdCBkZXNzZXJ0Q29udGFpbmVyT25lID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdkZXNzZXJ0LWNvbnRhaW5lcicsICdkZXNzZXJ0Q29udGFpbmVyT25lJylcclxuICAgIGNvbnN0IGRlc3NlcnRDb250YWluZXJUd28gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2Rlc3NlcnQtY29udGFpbmVyJywgJ2Rlc3NlcnRDb250YWluZXJUd28nKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRlbnQnLCAnaGFtYnVyZ2VyQ29udGVudCcpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJPbmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyT25lJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lclR3byA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJUd28nKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyVGhyZWUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyVGhyZWUnKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyRm91ciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJGb3VyJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lckZpdmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyRml2ZScpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJTaXggPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyU2l4JylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lclNldmVuID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lclNldmVuJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lckVpZ3RoID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lckVpZ3RoJylcclxuXHJcblxyXG4gICAgY29uc3QgZGVzc2VydE9uZSA9IHBvcHVsYXRlRm9vZChcImRlc3NlcnRzXCIsIDApXHJcbiAgICBjb25zdCBkZXNzZXJ0VHdvID0gcG9wdWxhdGVGb29kKFwiZGVzc2VydHNcIiwgMSlcclxuXHJcbiAgICBjb25zdCBoYW1idXJndWVyT25lID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgMClcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJUd28gPSBwb3B1bGF0ZUZvb2QoXCJoYW1idXJndWVyc1wiLCAxKVxyXG4gICAgY29uc3QgaGFtYnVyZ3VlclRocmVlID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgMilcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJGb3VyID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgMylcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJGaXZlID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgNClcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJTaXggPSBwb3B1bGF0ZUZvb2QoXCJoYW1idXJndWVyc1wiLCA1KVxyXG4gICAgY29uc3QgaGFtYnVyZ3VlclNldmVuID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgNilcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJFaWdodCA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDcpXHJcblxyXG4gICAgLy8gbWFpbk1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVUaXRsZSlcclxuICAgIC8vIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdNZW51J1xyXG5cclxuICAgIC8vIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0c0NvbnRlbnQpXHJcbiAgICBkZXNzZXJ0c0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydENvbnRhaW5lck9uZSlcclxuICAgIGRlc3NlcnRzQ29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0Q29udGFpbmVyVHdvKVxyXG4gICAgLy8gaW50ZXJhY3RET00oKS5hcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudChkZXNzZXJ0Q29udGFpbmVyT25lLCBkZXNzZXJ0T25lLCBtZW51LCAnZGVzc2VydHMnLCAwKVxyXG4gICAgLy8gaW50ZXJhY3RET00oKS5hcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudChkZXNzZXJ0Q29udGFpbmVyVHdvLCBkZXNzZXJ0VHdvLCBtZW51LCAnZGVzc2VydHMnLCAxKVxyXG4gICAgbWFpbk1lbnVDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRlbnQpXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lck9uZSlcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyVHdvKVxyXG4gICAgaGFtYnVyZ2VyQ29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250YWluZXJUaHJlZSlcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyRm91cilcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyRml2ZSlcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyU2l4KVxyXG4gICAgaGFtYnVyZ2VyQ29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250YWluZXJTZXZlbilcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyRWlndGgpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJPbmUsIGhhbWJ1cmd1ZXJPbmUsIG1lbnUsICdoYW1idXJndWVycycsIDApXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJUd28sIGhhbWJ1cmd1ZXJUd28sIG1lbnUsICdoYW1idXJndWVycycsIDEpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJUaHJlZSwgaGFtYnVyZ3VlclRocmVlLCBtZW51LCAnaGFtYnVyZ3VlcnMnLCAyKVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRNZW51RWxlbWVudEFuZERlZmluZUNvbnRlbnQoaGFtYnVyZ2VyQ29udGFpbmVyRm91ciwgaGFtYnVyZ3VlckZvdXIsIG1lbnUsICdoYW1idXJndWVycycsIDMpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJGaXZlLCBoYW1idXJndWVyRml2ZSwgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgNClcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lclNpeCwgaGFtYnVyZ3VlclNpeCwgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgNSlcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lclNldmVuLCBoYW1idXJndWVyU2V2ZW4sIG1lbnUsICdoYW1idXJndWVycycsIDYpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJFaWd0aCwgaGFtYnVyZ3VlckVpZ2h0LCBtZW51LCAnaGFtYnVyZ3VlcnMnLCA3KVxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbk1lbnVDb250ZW50KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZU1lbnVDb250ZW50IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdC1kb21cIlxyXG5pbXBvcnQgZ2VuZXJhdGVIb21lcGFnZSBmcm9tIFwiLi9ob21lXCJcclxuaW1wb3J0IGdlbmVyYXRlTWVudUNvbnRlbnQgZnJvbSBcIi4vbWVudVwiXHJcbmltcG9ydCBnZW5lcmF0ZUNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIlxyXG5cclxuXHJcbmNvbnN0IGdlbmVyYXRlSGVhZGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtYWluSGVhZGVyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2hlYWRlcicsICdtYWluLWhlYWRlcicsICdtYWluSGVhZGVyJylcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRlbnQnKVxyXG5cclxuICAgIGNvbnN0IHJlc3RhdXJhbnRUaXRsZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAncmVzdGF1cmFudC10aXRsZScsICdyZXN0YXVyYW50VGl0bGUnKVxyXG4gICAgcmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBMYXN0IEJpdGUnXHJcblxyXG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnYnV0dG9ucy1jb250YWluZXInLCAnYnV0dG9uc0NvbnRhaW5lcicpXHJcbiAgICBjb25zdCBob21lQnV0dG9uID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdob21lLXBhZ2UnLCAnaG9tZVBhZ2UnKVxyXG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJ1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnbWVudS1wYWdlJywgJ21lbnVQYWdlJylcclxuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSdcclxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2NvbnRhY3QtcGFnZScsICdjb250YWN0UGFnZScpXHJcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnXHJcblxyXG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50VGl0bGUpXHJcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpXHJcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pXHJcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXHJcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluSGVhZGVyKVxyXG4gICAgcmV0dXJuIHsgaG9tZUJ1dHRvbiwgbWVudUJ1dHRvbiwgY29udGFjdEJ1dHRvbiwgbWFpbkNvbnRlbnQgfVxyXG59KSgpXHJcblxyXG5jb25zdCBnZW5lcmF0ZUZvb3RlciA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWFpbkZvb3RlciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdmb290ZXInLCAnZm9vdGVyJywgJ2Zvb3RlcicpXHJcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZm9vdGVyLXRleHQnLCAnZm9vdGVyVGV4dCcpXHJcbiAgICBjb25zdCBmb290ZXJMaW5rID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2EnLCAnZmEtYnJhbmRzJywgJ2Zvb3RlckxpbmsnKVxyXG4gICAgZm9vdGVyTGluay5jbGFzc0xpc3QuYWRkKCdmYS1naXRodWInKVxyXG4gICAgZm9vdGVyTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9ybWF0aHInXHJcblxyXG4gICAgbWFpbkZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KVxyXG4gICAgbWFpbkZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKVxyXG5cclxuICAgIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSAncm1hdGjCqSdcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Gb290ZXIpXHJcbn0pKClcclxuXHJcblxyXG5jb25zdCBjbGVhckRPTSA9IGZ1bmN0aW9uKCl7XHJcbiAgICB3aGlsZSAoZ2VuZXJhdGVIZWFkZXIubWFpbkNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgZ2VuZXJhdGVIZWFkZXIubWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQoZ2VuZXJhdGVIZWFkZXIubWFpbkNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgIH1cclxufVxyXG5cclxuZ2VuZXJhdGVIZWFkZXIuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjbGVhckRPTSgpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5jb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlSGVhZGVyLm1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIuaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZUNvbnRhY3RQYWdlKClcclxufSlcclxuXHJcbmdlbmVyYXRlSGVhZGVyLm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjbGVhckRPTSgpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5jb250YWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlSGVhZGVyLm1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIuaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZU1lbnVDb250ZW50KClcclxufSlcclxuXHJcbmdlbmVyYXRlSGVhZGVyLmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY2xlYXJET00oKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIuY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5tZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlSGVhZGVyLmhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVIb21lcGFnZSgpXHJcbn0pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==