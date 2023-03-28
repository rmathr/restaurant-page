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

;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNEO0FBQ0Y7QUFDQTtBQUNFO0FBQ007QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQ0FBSztBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhDQUFJO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOENBQUk7QUFDakI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQ0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMseURBQVcsb0VBQW9FLHNCQUFzQjtBQUNuSCxjQUFjLHlEQUFXLG9FQUFvRSxzQkFBc0I7QUFDbkgsYUFBYSx5REFBVyxvRUFBb0Usc0JBQXNCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQVc7QUFDbkMsK0JBQStCLHlEQUFXO0FBQzFDLHlCQUF5Qix5REFBVztBQUNwQyx5QkFBeUIseURBQVc7QUFDcEMsd0JBQXdCLHlEQUFXO0FBQ25DLDJCQUEyQix5REFBVztBQUN0QztBQUNBLHlCQUF5Qix5REFBVztBQUNwQyx5QkFBeUIseURBQVc7QUFDcEMsMkJBQTJCLHlEQUFXO0FBQ3RDLDBCQUEwQix5REFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVc7QUFDZixJQUFJLDBEQUFXO0FBQ2YsSUFBSSwwREFBVztBQUNmLElBQUksMERBQVc7QUFDZixzQkFBc0Isa0RBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7O0FDcEZPO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5REFBVztBQUNwQywwQkFBMEIseURBQVc7QUFDckMsc0NBQXNDLHlEQUFXO0FBQ2pELHdCQUF3Qix5REFBVztBQUNuQyxvQ0FBb0MseURBQVc7QUFDL0Msb0NBQW9DLHlEQUFXO0FBQy9DLHNDQUFzQyx5REFBVztBQUNqRCxxQ0FBcUMseURBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQyx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxRQUFRLEtBQUssZUFBZTtBQUNsRSw2Q0FBNkMsUUFBUSxLQUFLLHNCQUFzQjtBQUNoRiwwQ0FBMEMsUUFBUSxLQUFLLGdCQUFnQjtBQUN2RSw2QkFBNkIsUUFBUSxLQUFLLGNBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx3QkFBd0I7QUFDOUQsc0NBQXNDLHdCQUF3QjtBQUM5RCw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDMEI7QUFDVTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBVTtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBVTtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBVTtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBVTtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBVTtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBVTtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBVTtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBVTtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlEQUFXLDBEQUEwRCxRQUFRLEtBQUssYUFBYTtBQUM3RyxxQkFBcUIseURBQVcsd0VBQXdFLFFBQVEsS0FBSyxhQUFhO0FBQ2xJLGVBQWUseURBQVcsNERBQTRELFFBQVEsS0FBSyxhQUFhO0FBQ2hILGFBQWEseURBQVcsOERBQThELFFBQVEsS0FBSyxhQUFhO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQVc7QUFDbkMsNEJBQTRCLHlEQUFXO0FBQ3ZDLHNCQUFzQix5REFBVztBQUNqQyw0QkFBNEIseURBQVc7QUFDdkMsZ0NBQWdDLHlEQUFXO0FBQzNDLGdDQUFnQyx5REFBVztBQUMzQyw2QkFBNkIseURBQVc7QUFDeEMsa0NBQWtDLHlEQUFXO0FBQzdDLGtDQUFrQyx5REFBVztBQUM3QyxvQ0FBb0MseURBQVc7QUFDL0MsbUNBQW1DLHlEQUFXO0FBQzlDLG1DQUFtQyx5REFBVztBQUM5QyxrQ0FBa0MseURBQVc7QUFDN0Msb0NBQW9DLHlEQUFXO0FBQy9DLG9DQUFvQyx5REFBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVc7QUFDZixJQUFJLDBEQUFXO0FBQ2YsSUFBSSwwREFBVztBQUNmLElBQUksMERBQVc7QUFDZixJQUFJLDBEQUFXO0FBQ2YsSUFBSSwwREFBVztBQUNmLElBQUksMERBQVc7QUFDZixJQUFJLDBEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1SmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2Z3QztBQUNIO0FBQ0c7QUFDRztBQUMzQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseURBQVc7QUFDbEMsd0JBQXdCLHlEQUFXO0FBQ25DO0FBQ0EsNEJBQTRCLHlEQUFXO0FBQ3ZDO0FBQ0E7QUFDQSw2QkFBNkIseURBQVc7QUFDeEMsdUJBQXVCLHlEQUFXO0FBQ2xDO0FBQ0EsdUJBQXVCLHlEQUFXO0FBQ2xDO0FBQ0EsMEJBQTBCLHlEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBLHVCQUF1Qix5REFBVztBQUNsQyx1QkFBdUIseURBQVc7QUFDbEMsdUJBQXVCLHlEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGtEQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQW1CO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQW1CO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQWdCO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW50ZXJhY3QtZG9tLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5pbXBvcnQgZWxsaWUgZnJvbSBcIi4uL3NyYy9pbWcvZWxsaWUucG5nXCJcclxuaW1wb3J0IGRpbmEgZnJvbSBcIi4uL3NyYy9pbWcvZGluYS5wbmdcIlxyXG5pbXBvcnQgam9lbCBmcm9tIFwiLi4vc3JjL2ltZy9qb2VsLnBuZ1wiXHJcbmltcG9ydCB0b21teSBmcm9tIFwiLi4vc3JjL2ltZy90b21teS5wbmdcIlxyXG5pbXBvcnQgbG9jYXRpb24gZnJvbSBcIi4uL3NyYy9pbWcvbG9jYXRpb24ucG5nXCJcclxuXHJcblxyXG5jb25zdCBjb250YWN0TGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkVsbGllIFdpbGxpYW1zXCIsXHJcbiAgICAgICAgcm9sZTogXCJEaXJlY3RvclwiLFxyXG4gICAgICAgIGltZzogZWxsaWUsXHJcbiAgICAgICAgb3JkZXI6IDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJEaW5hIFdpbGxpYW1zXCIsXHJcbiAgICAgICAgcm9sZTogXCJHZW5lcmFsIE1hbmFnZXJcIixcclxuICAgICAgICBpbWc6IGRpbmEsXHJcbiAgICAgICAgb3JkZXI6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKb2VsIE1pbGxlclwiLFxyXG4gICAgICAgIHJvbGU6IFwiRXhlY3V0aXZlIENoZWZcIixcclxuICAgICAgICBpbWc6IGpvZWwsXHJcbiAgICAgICAgb3JkZXI6IDJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJUb21teSBNaWxsZXJcIixcclxuICAgICAgICByb2xlOiBcIlNvbW1lbGllclwiLFxyXG4gICAgICAgIGltZzogdG9tbXksXHJcbiAgICAgICAgb3JkZXI6IDMgIFxyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBwb3B1bGF0ZUNvbnRhY3QgPSAoaWQpID0+IHsgXHJcbiAgICBcclxuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0ge1xyXG4gICAgICAgIG5hbWU6IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2NvbnRhY3RzLW5hbWUnLCBgY29udGFjdE5hbWUjJHtjb250YWN0TGlzdFtpZF0ub3JkZXJ9YCksXHJcbiAgICAgICAgcm9sZTogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnY29udGFjdHMtcm9sZScsIGBjb250YWN0Um9sZSMke2NvbnRhY3RMaXN0W2lkXS5vcmRlcn1gKSxcclxuICAgICAgICBpbWc6IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnY29udGFjdHMtaW1nJywgYGNvbnRhY3RJbWcjJHtjb250YWN0TGlzdFtpZF0ub3JkZXJ9YClcclxuICAgIH1cclxuICAgIHJldHVybiBkb21FbGVtZW50c1xyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZUNvbnRhY3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBtYWluQ29udGFjdENvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnbWFpbicsICdtYWluLWNvbnRhY3QtY29udGVudCcsICdtYWluQ29udGFjdENvbnRlbnQnKVxyXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnY29udGFjdC10aXRsZScsICdjb250YWN0VGl0bGUnKVxyXG4gICAgY29uc3QgbG9jYXRpb25UZXh0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnbG9jYXRpb24tdGV4dCcsICdsb2NhdGlvblRleHQnKVxyXG4gICAgY29uc3QgbG9jYXRpb25JbWcgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW1nJywgJ2xvY2F0aW9uLWltZycsICdsb2NhdGlvbkltZycpXHJcbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY29udGFjdC1jb250ZW50JywgJ2NvbnRhY3RDb250ZW50JylcclxuICAgIFxyXG4gICAgY29uc3QgY29udGFpbmVyT25lID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdjb250YWN0LWNvbnRhaW5lcicsICdjb250YWluZXJPbmUnKVxyXG4gICAgY29uc3QgY29udGFpbmVyVHdvID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdjb250YWN0LWNvbnRhaW5lcicsICdjb250YWluZXJUd28nKVxyXG4gICAgY29uc3QgY29udGFpbmVyVGhyZWUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2NvbnRhY3QtY29udGFpbmVyJywgJ2NvbnRhaW5lclRocmVlJylcclxuICAgIGNvbnN0IGNvbnRhaW5lckZvdXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2NvbnRhY3QtY29udGFpbmVyJywgJ2NvbnRhaW5lckZvdXInKVxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RPbmUgPSBwb3B1bGF0ZUNvbnRhY3QoMClcclxuICAgIGNvbnN0IGNvbnRhY3RUd28gPSBwb3B1bGF0ZUNvbnRhY3QoMSlcclxuICAgIGNvbnN0IGNvbnRhY3RUaHJlZSA9IHBvcHVsYXRlQ29udGFjdCgyKVxyXG4gICAgY29uc3QgY29udGFjdEZvdXIgPSBwb3B1bGF0ZUNvbnRhY3QoMylcclxuICAgICBcclxuICAgIG1haW5Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZENvbnRhY0VsZW1lbnRBbmREZWZpbmVDb250ZW50KGNvbnRhaW5lck9uZSwgY29udGFjdE9uZSwgY29udGFjdExpc3QsIDApXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZENvbnRhY0VsZW1lbnRBbmREZWZpbmVDb250ZW50KGNvbnRhaW5lclR3bywgY29udGFjdFR3bywgY29udGFjdExpc3QsIDEpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZENvbnRhY0VsZW1lbnRBbmREZWZpbmVDb250ZW50KGNvbnRhaW5lclRocmVlLCBjb250YWN0VGhyZWUsIGNvbnRhY3RMaXN0LCAyKVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRDb250YWNFbGVtZW50QW5kRGVmaW5lQ29udGVudChjb250YWluZXJGb3VyLCBjb250YWN0Rm91ciwgY29udGFjdExpc3QsIDMpXHJcbiAgICBsb2NhdGlvbkltZy5zcmMgPSBsb2NhdGlvblxyXG5cclxuICAgIG1haW5Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudClcclxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lck9uZSlcclxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lclR3bylcclxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lclRocmVlKVxyXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyRm91cilcclxuICAgIG1haW5Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvblRleHQpXHJcbiAgICBtYWluQ29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWcpXHJcbiAgIFxyXG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ01haW4gY29udGFjdHMnXHJcbiAgICBsb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSAnQmVzdCBidXJndWVyIHBsYWNlIG9mIFRldG9uIENvdW50eSwgV3lvbWluZy4gQ29tZSB2aXNpdCB1cyAoYnV0IG9ubHkgaWYgeW91IGFyZSBub3QgYSB3b2xmKSdcclxuXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFjdENvbnRlbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29udGFjdFBhZ2VcclxuIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5cclxuXHJcbmNvbnN0IGdlbmVyYXRlSG9tZXBhZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaG9tZU1haW5FbGVtID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ21haW4nLCAnaG9tZS1tYWluLWNvbnRlbnQnLCdob21lTWFpbkNvbnRlbnQnKVxyXG4gICAgY29uc3QgcGFnZVRpdGxlRWxlbSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3BhZ2UtdGl0bGUnLCAncGFnZVRpdGxlJylcclxuICAgIGNvbnN0IHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24nLCAncmVzdGF1cmFudERlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRlbnQnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhPbmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdkZXNjcmlwdGlvbi1wYXJhZ3JhcGgnLCAnZGVzY3JpcHRpb25QYXJhZ3JhcGhPbmUnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdkZXNjcmlwdGlvbi1wYXJhZ3JhcGgnLCAnZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28nKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhUaHJlZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Rlc2NyaXB0aW9uLXBhcmFncmFwaCcsICdkZXNjcmlwdGlvblBhcmFncmFwaFRocmVlJylcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUGFyYWdyYXBoRm91ciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Rlc2NyaXB0aW9uLXBhcmFncmFwaCcsICdkZXNjcmlwdGlvblBhcmFncmFwaEZvdXInKVxyXG4gICAgXHJcbiAgICAvLyBjb25zdCBob21lTWFpbiA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2hvbWVNYWluQ29udGVudCcpXHJcbiAgICAvLyBjb25zdCBwYWdlVGl0bGUgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdwYWdlVGl0bGUnKVxyXG4gICAgLy8gY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgncmVzdGF1cmFudERlc2NyaXB0aW9uJylcclxuXHJcbiAgICBob21lTWFpbkVsZW0uYXBwZW5kQ2hpbGQocGFnZVRpdGxlRWxlbSlcclxuICAgIGhvbWVNYWluRWxlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtKVxyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmFncmFwaE9uZSlcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28pXHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYWdyYXBoVGhyZWUpXHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYWdyYXBoRm91cilcclxuXHJcbiAgICBwYWdlVGl0bGVFbGVtLnRleHRDb250ZW50ID0gJ1RoZSBMYXN0IEJpdGUnXHJcbiAgICBcclxuICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoT25lLnRleHRDb250ZW50ID0gXCJUaGUgTGFzdCBCaXRlIGlzIGEgc21hbGwsIHBvc3QtYXBvY2FseXB0aWMgYnVyZ2VyIGpvaW50IGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIEphY2tzb24sIGEgdG93biByYXZhZ2VkIGJ5IG5hdHVyZSBhbmQgdGltZS4gRGVzcGl0ZSBpdHMgcnVuZG93biBhcHBlYXJhbmNlLCBUaGUgTGFzdCBCaXRlIGhhcyBiZWNvbWUgYSBiZWxvdmVkIGxvY2FsIGluc3RpdHV0aW9uLCBzZXJ2aW5nIHVwIGhlYXJ0eSBidXJnZXJzIGFuZCBmcmllcyB0byB3ZWFyeSBjdXN0b21lcnMgbG9va2luZyBmb3IgYSBtb21lbnQgb2YgcmVzcGl0ZSBpbiBhIGhhcnNoIGFuZCB1bmZvcmdpdmluZyB3b3JsZC5cIlxyXG4gICAgZGVzY3JpcHRpb25QYXJhZ3JhcGhUd28udGV4dENvbnRlbnQgPSBcIlRoZSBtZW51IGF0IFRoZSBMYXN0IEJpdGUgaXMgc2ltcGxlIHlldCBzYXRpc2Z5aW5nLCBmZWF0dXJpbmcgY2xhc3NpYyBidXJnZXJzIGFuZCBzaWRlcyBtYWRlIHdpdGggZnJlc2gsIGxvY2FsbHkgc291cmNlZCBpbmdyZWRpZW50cy4gVGhlIGJ1cmdlcnMgYXJlIGNvb2tlZCB0byBwZXJmZWN0aW9uIG9uIGEgZ3JpbGwgaW4gZnVsbCB2aWV3IG9mIHRoZSBjdXN0b21lcnMsIHdpdGggdGhlIGFyb21hIG9mIHNpenpsaW5nIGJlZWYgd2FmdGluZyB0aHJvdWdoIHRoZSBjcmFtcGVkIGFuZCBkaW1seSBsaXQgc3BhY2UuXCJcclxuICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoVGhyZWUudGV4dENvbnRlbnQgPSBcIkRlc3BpdGUgdGhlIGRlc29sYXRlIHN1cnJvdW5kaW5ncywgdGhlIGF0bW9zcGhlcmUgaW5zaWRlIFRoZSBMYXN0IEJpdGUgaXMgd2FybSBhbmQgd2VsY29taW5nLCB3aXRoIHZpbnRhZ2UgcG9zdGVycyBhbmQgcGhvdG9ncmFwaHMgYWRvcm5pbmcgdGhlIHdhbGxzIGFuZCBhIGZldyBzbWFsbCB0YWJsZXMgYW5kIGNoYWlycyBzY2F0dGVyZWQgdGhyb3VnaG91dCB0aGUgc3BhY2UuIEN1c3RvbWVycyBvZnRlbiBsaW5nZXIgb3ZlciB0aGVpciBtZWFscywgc3dhcHBpbmcgc3RvcmllcyBhbmQgc2hhcmluZyBhIG1vbWVudCBvZiBjYW1hcmFkZXJpZSBhbWlkc3QgdGhlIHJ1aW5zIG9mIHRoZWlyIHdvcmxkLlwiXHJcbiAgICBkZXNjcmlwdGlvblBhcmFncmFwaEZvdXIudGV4dENvbnRlbnQgPSBcIkF0IFRoZSBMYXN0IEJpdGUsIGV2ZXJ5IGJ1cmdlciBpcyBzYXZvcmVkIGFzIGlmIGl0IG1pZ2h0IGJlIHRoZSBsYXN0LiBGb3IgdGhlIHdlYXJ5IHRyYXZlbGVycyBhbmQgc3Vydml2b3JzIG9mIHRoZSBhcG9jYWx5cHNlIHdobyBwYXNzIHRocm91Z2ggSmFja3NvbiwgVGhlIExhc3QgQml0ZSBpcyBhIGJlYWNvbiBvZiBob3BlIGFuZCBhIHJlbWluZGVyIHRoYXQgZXZlbiBpbiB0aGUgZGFya2VzdCBvZiB0aW1lcywgdGhlcmUgaXMgc3RpbGwgam95IHRvIGJlIGZvdW5kIGluIGEgd2VsbC1jb29rZWQgYnVyZ2VyIGFuZCBhIG1vbWVudCBvZiByZXNwaXRlLlwiXHJcblxyXG5cclxuXHJcblxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZU1haW5FbGVtKVxyXG4gICAgLy8gcmV0dXJuIGhvbWVNYWluXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSG9tZXBhZ2UiLCJjb25zdCBpbnRlcmFjdERPTSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpXHJcblxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCA9IGZ1bmN0aW9uKHR5cGUsIGNsYXNzTmFtZSwgaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YClcclxuICAgICAgICBlbGVtZW50LmlkID0gYCR7aWROYW1lfWBcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhvb2tET01lbGVtZW50ID0gZnVuY3Rpb24gKGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkTmFtZX1gKVxyXG4gICAgICAgIHJldHVybiBlbGVtXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24oY29udGFpbmVyLCBlbGVtZW50LCBtZW51ICwgdHlwZSwgb3JkZXIpe1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50Lm5hbWUpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuaW5ncmVkaWVudHMpXHJcbiAgICAgICAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQucHJpY2UpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuaW1nKVxyXG5cclxuICAgICAgICBlbGVtZW50Lm5hbWUudGV4dENvbnRlbnQgPSBgJHttZW51W2Ake3R5cGV9YF1bb3JkZXJdLm5hbWV9YFxyXG4gICAgICAgIGVsZW1lbnQuaW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBgJHttZW51W2Ake3R5cGV9YF1bb3JkZXJdLmluZ3JlZGllbnRzfWBcclxuICAgICAgICAvLyBlbGVtZW50LnByaWNlLnRleHRDb250ZW50ID0gYCR7bWVudVtgJHt0eXBlfWBdW29yZGVyXS5wcmljZX1gXHJcbiAgICAgICAgZWxlbWVudC5pbWcuc3JjID0gYCR7bWVudVtgJHt0eXBlfWBdW29yZGVyXS5pbWd9YFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRDb250YWNFbGVtZW50QW5kRGVmaW5lQ29udGVudCA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgZWxlbWVudCwgY29udGFjdExpc3QsIG9yZGVyKXtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5uYW1lKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50LnJvbGUpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuaW1nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGVsZW1lbnQubmFtZS50ZXh0Q29udGVudCA9IGAke2NvbnRhY3RMaXN0W29yZGVyXS5uYW1lfWBcclxuICAgICAgICBlbGVtZW50LnJvbGUudGV4dENvbnRlbnQgPSBgJHtjb250YWN0TGlzdFtvcmRlcl0ucm9sZX1gXHJcbiAgICAgICAgZWxlbWVudC5pbWcuc3JjID0gYCR7Y29udGFjdExpc3Rbb3JkZXJdLmltZ31gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbWFpbkNvbnRlbnQsIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCwgaG9va0RPTWVsZW1lbnQsIGFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudCwgYXBwZW5kQ29udGFjRWxlbWVudEFuZERlZmluZUNvbnRlbnQgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdERPTSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdC1kb21cIjtcclxuaW1wb3J0IGhhbWJ1cmdlcjEgZnJvbSBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTEuanBnXCJcclxuaW1wb3J0IGhhbWJ1cmdlcjIgZnJvbSBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTIuanBnXCJcclxuaW1wb3J0IGhhbWJ1cmdlcjMgZnJvbSBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTMuanBnXCJcclxuaW1wb3J0IGhhbWJ1cmdlcjQgZnJvbSBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTQuanBnXCJcclxuaW1wb3J0IGhhbWJ1cmdlcjUgZnJvbSBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTUuanBnXCJcclxuaW1wb3J0IGhhbWJ1cmdlcjYgZnJvbSBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTYuanBnXCJcclxuaW1wb3J0IGhhbWJ1cmdlcjcgZnJvbSBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTcuanBnXCJcclxuaW1wb3J0IGhhbWJ1cmdlcjggZnJvbSBcIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLTguanBnXCJcclxuXHJcbmNvbnN0IG1lbnUgPSB7XHJcbiAgICBkZXNzZXJ0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDYXJhbWVsIENoZWVzZWNha2VcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiQ3JhY2tlciBjcnVtYnMsIHN1Z2FyLCB1bnNhbHRlZCBidXR0ZXIsIGNyZWFtIGNoZWVzZSwgdmFuaWxsYSBleHRyYWN0LCBlZ2dzLCBjYXJhbWVsIHNhdWNlLCB3aGlwcGVkIGNyZWFtIGFuZCBmcmVzaCBiZXJyaWVzLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCI3XCIsXHJcbiAgICAgICAgICAgIGltZzogXCIuLi9zcmMvaW1nL2Rlc3NlcnQxLmpwZ1wiLFxyXG4gICAgICAgICAgICBvcmRlcjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlJhc3BiZXJyeSBDaGVlc2VjYWtlXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkNyYWNrZXIgY3J1bWJzLCBzdWdhciwgdW5zYWx0ZWQgYnV0dGVyLCBjcmVhbSBjaGVlc2UsIHZhbmlsbGEgZXh0cmFjdCwgZWdncywgcmFzcGJlcnJ5IHNhdWNlLCB3aGlwcGVkIGNyZWFtIGFuZCBmcmVzaCByYXNwYmVycmllcy5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiOFwiLFxyXG4gICAgICAgICAgICBpbWc6IFwiLi4vc3JjL2ltZy9kZXNzZXJ0Mi5qcGdcIixcclxuICAgICAgICAgICAgb3JkZXI6IDFcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgaGFtYnVyZ3VlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXBvY2FseXBzZSBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMiBiZWVmIGJ1cmdlcnMsIHBvcmsgbG9pbiwgc2xpY2VzIG9mIGNoZWRkYXIsIG1venphcmVsbGEgY2hlZXNlIGFuZCBiYXJiZWN1ZSBzYXVjZS5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTFcIixcclxuICAgICAgICAgICAgaW1nOiBoYW1idXJnZXIxLFxyXG4gICAgICAgICAgICBvcmRlcjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlN1cnZpdm9yIEJ1cmdlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJJdGFsaWFuIGJyZWFkLCAyIGJlZWYgYnVyZ2VycywgcG9yayBsb2luLCBiYWNvbiwgbW96emFyZWxsYSBjaGVlc2UgYW5kIGJhcmJlY3VlIHNhdWNlLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIxMlwiLFxyXG4gICAgICAgICAgICBpbWc6IGhhbWJ1cmdlcjIsXHJcbiAgICAgICAgICAgIG9yZGVyOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiIFdhc3RlbGFuZCBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMSBiZWVmIGJ1cmdlciwgcHVsbGVkIHBvcmssIGJhY29uLCBjaGVkZGFyIGNoZWVzZSwgdG9tYXRvIHNsaWNlcyBhbmQgcmVkIG9uaW9uLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCI5XCIsXHJcbiAgICAgICAgICAgIGltZzogaGFtYnVyZ2VyMyxcclxuICAgICAgICAgICAgb3JkZXI6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJPdXRicmVhayBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiQ2lhYmF0dGEgYnJlYWQsIDMgYmVlZiBidXJnZXJzLCBjaGVkZGFyIHN1cHJlbWUgc2F1Y2UsIHRvbWF0byBzbGljZXMsIGxldHR1Y2UgYW5kIHBpY2tsZXMuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjE1XCIsXHJcbiAgICAgICAgICAgIGltZzogaGFtYnVyZ2VyNCxcclxuICAgICAgICAgICAgb3JkZXI6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJMYXN0IEJpdGUgQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkl0YWxpYW4gYnJlYWQsIDIgYmVlZiBidXJnZXJzLCBjaGVkZGFyIGNoZWVzZSwgbW96emFyZWxsYSBjaGVlc2UsIGxldHR1Y2UgYW5kIG9uaW9uIHJpbmdzLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIxMlwiLFxyXG4gICAgICAgICAgICBpbWc6IGhhbWJ1cmdlcjUsXHJcbiAgICAgICAgICAgIG9yZGVyOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiSW5mZWN0ZWQgQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkl0YWxpYW4gYnJlYWQsIDEgYmVlZiBidXJnZXIsIG1venphcmVsbGEgY2hlZXNlLCB0b21hdG8gc2xpY2VzIGFuZCBsZXR0dWNlLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCI4XCIsXHJcbiAgICAgICAgICAgIGltZzogaGFtYnVyZ2VyNixcclxuICAgICAgICAgICAgb3JkZXI6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDbGlja2VyIFN1cnByaXNlIEJ1cmdlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJEYXJrIEl0YWxpYW4gYnJlYWQsIDMgYmVlZiBidXJnZXJzLCBjaGVkZGFyIGNoZWVzZSwgZnJpZWQgZWdncywgYW5kIGxldHR1Y2UuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjE0XCIsXHJcbiAgICAgICAgICAgIGltZzogaGFtYnVyZ2VyNyxcclxuICAgICAgICAgICAgb3JkZXI6IDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJMYXN0IEhvcGUgQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkl0YWxpYW4gYnJlYWQsIDIgYmVlZiBidXJnZXJzLCBiYWNvbiwgY2hlZGRhciBjaGVlc2UsIGxldHR1Y2UgYW5kIHJlZCBvbmlvbi5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTFcIixcclxuICAgICAgICAgICAgaW1nOiBoYW1idXJnZXI4LFxyXG4gICAgICAgICAgICBvcmRlcjogN1xyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuXHJcblxyXG5jb25zdCBwb3B1bGF0ZUZvb2QgPSAodHlwZSwgaWQpID0+IHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0ge1xyXG4gICAgICAgIG5hbWU6IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Zvb2RzLW5hbWUnLCBgbmFtZSMke21lbnVbYCR7dHlwZX1gXVtpZF0ub3JkZXJ9YCksXHJcbiAgICAgICAgaW5ncmVkaWVudHM6IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Zvb2RzLWluZ3JlZGllbnRzJywgYGluZ3JlZGllbnRzIyR7bWVudVtgJHt0eXBlfWBdW2lkXS5vcmRlcn1gKSxcclxuICAgICAgICBwcmljZTogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZm9vZHMtcHJpY2UnLCBgcHJpY2UjJHttZW51W2Ake3R5cGV9YF1baWRdLm9yZGVyfWApLFxyXG4gICAgICAgIGltZzogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2ltZycsICdmb29kcy1pbWFnZScsIGBpbWFnZSMke21lbnVbYCR7dHlwZX1gXVtpZF0ub3JkZXJ9YClcclxuICAgIH1cclxuICAgIHJldHVybiBkb21FbGVtZW50c1xyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZU1lbnVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBtYWluTWVudUNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnbWFpbicsICdtYWluLW1lbnUtY29udGVudCcsICdtYWluTWVudUNvbnRlbnQnKVxyXG4gICAgY29uc3QgbWVudVRpdGxlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnbWVudS10aXRsZScsICdtZW51VGl0bGUnKVxyXG4gICAgY29uc3QgZGVzc2VydHNDb250ZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdkZXNzZXJ0LWNvbnRlbnQnLCAnZGVzc2VydENvbnRlbnQnKVxyXG4gICAgY29uc3QgZGVzc2VydENvbnRhaW5lck9uZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnZGVzc2VydC1jb250YWluZXInLCAnZGVzc2VydENvbnRhaW5lck9uZScpXHJcbiAgICBjb25zdCBkZXNzZXJ0Q29udGFpbmVyVHdvID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdkZXNzZXJ0LWNvbnRhaW5lcicsICdkZXNzZXJ0Q29udGFpbmVyVHdvJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250ZW50JywgJ2hhbWJ1cmdlckNvbnRlbnQnKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyT25lID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lck9uZScpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJUd28gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyVHdvJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lclRocmVlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lclRocmVlJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lckZvdXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyRm91cicpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJGaXZlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lckZpdmUnKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyU2l4ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lclNpeCcpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJTZXZlbiA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJTZXZlbicpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJFaWd0aCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJFaWd0aCcpXHJcblxyXG5cclxuICAgIGNvbnN0IGRlc3NlcnRPbmUgPSBwb3B1bGF0ZUZvb2QoXCJkZXNzZXJ0c1wiLCAwKVxyXG4gICAgY29uc3QgZGVzc2VydFR3byA9IHBvcHVsYXRlRm9vZChcImRlc3NlcnRzXCIsIDEpXHJcblxyXG4gICAgY29uc3QgaGFtYnVyZ3Vlck9uZSA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDApXHJcbiAgICBjb25zdCBoYW1idXJndWVyVHdvID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgMSlcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJUaHJlZSA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDIpXHJcbiAgICBjb25zdCBoYW1idXJndWVyRm91ciA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDMpXHJcbiAgICBjb25zdCBoYW1idXJndWVyRml2ZSA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDQpXHJcbiAgICBjb25zdCBoYW1idXJndWVyU2l4ID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgNSlcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJTZXZlbiA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDYpXHJcbiAgICBjb25zdCBoYW1idXJndWVyRWlnaHQgPSBwb3B1bGF0ZUZvb2QoXCJoYW1idXJndWVyc1wiLCA3KVxyXG5cclxuICAgIC8vIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51VGl0bGUpXHJcbiAgICAvLyBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSdcclxuXHJcbiAgICAvLyBtYWluTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydHNDb250ZW50KVxyXG4gICAgZGVzc2VydHNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRDb250YWluZXJPbmUpXHJcbiAgICBkZXNzZXJ0c0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydENvbnRhaW5lclR3bylcclxuICAgIC8vIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoZGVzc2VydENvbnRhaW5lck9uZSwgZGVzc2VydE9uZSwgbWVudSwgJ2Rlc3NlcnRzJywgMClcclxuICAgIC8vIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoZGVzc2VydENvbnRhaW5lclR3bywgZGVzc2VydFR3bywgbWVudSwgJ2Rlc3NlcnRzJywgMSlcclxuICAgIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250ZW50KVxyXG4gICAgaGFtYnVyZ2VyQ29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250YWluZXJPbmUpXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lclR3bylcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyVGhyZWUpXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lckZvdXIpXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lckZpdmUpXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lclNpeClcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyU2V2ZW4pXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lckVpZ3RoKVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRNZW51RWxlbWVudEFuZERlZmluZUNvbnRlbnQoaGFtYnVyZ2VyQ29udGFpbmVyT25lLCBoYW1idXJndWVyT25lLCBtZW51LCAnaGFtYnVyZ3VlcnMnLCAwKVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRNZW51RWxlbWVudEFuZERlZmluZUNvbnRlbnQoaGFtYnVyZ2VyQ29udGFpbmVyVHdvLCBoYW1idXJndWVyVHdvLCBtZW51LCAnaGFtYnVyZ3VlcnMnLCAxKVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRNZW51RWxlbWVudEFuZERlZmluZUNvbnRlbnQoaGFtYnVyZ2VyQ29udGFpbmVyVGhyZWUsIGhhbWJ1cmd1ZXJUaHJlZSwgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgMilcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lckZvdXIsIGhhbWJ1cmd1ZXJGb3VyLCBtZW51LCAnaGFtYnVyZ3VlcnMnLCAzKVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRNZW51RWxlbWVudEFuZERlZmluZUNvbnRlbnQoaGFtYnVyZ2VyQ29udGFpbmVyRml2ZSwgaGFtYnVyZ3VlckZpdmUsIG1lbnUsICdoYW1idXJndWVycycsIDQpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJTaXgsIGhhbWJ1cmd1ZXJTaXgsIG1lbnUsICdoYW1idXJndWVycycsIDUpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJTZXZlbiwgaGFtYnVyZ3VlclNldmVuLCBtZW51LCAnaGFtYnVyZ3VlcnMnLCA2KVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRNZW51RWxlbWVudEFuZERlZmluZUNvbnRlbnQoaGFtYnVyZ2VyQ29udGFpbmVyRWlndGgsIGhhbWJ1cmd1ZXJFaWdodCwgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgNylcclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5NZW51Q29udGVudClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVNZW51Q29udGVudCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3QtZG9tXCJcclxuaW1wb3J0IGdlbmVyYXRlSG9tZXBhZ2UgZnJvbSBcIi4vaG9tZVwiXHJcbmltcG9ydCBnZW5lcmF0ZU1lbnVDb250ZW50IGZyb20gXCIuL21lbnVcIlxyXG5pbXBvcnQgZ2VuZXJhdGVDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCJcclxuXHJcblxyXG5jb25zdCBnZW5lcmF0ZUhlYWRlciA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdoZWFkZXInLCAnbWFpbi1oZWFkZXInLCAnbWFpbkhlYWRlcicpXHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250ZW50JylcclxuXHJcbiAgICBjb25zdCByZXN0YXVyYW50VGl0bGUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3Jlc3RhdXJhbnQtdGl0bGUnLCAncmVzdGF1cmFudFRpdGxlJylcclxuICAgIHJlc3RhdXJhbnRUaXRsZS50ZXh0Q29udGVudCA9ICdUaGUgTGFzdCBCaXRlJ1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2J1dHRvbnMtY29udGFpbmVyJywgJ2J1dHRvbnNDb250YWluZXInKVxyXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnaG9tZS1wYWdlJywgJ2hvbWVQYWdlJylcclxuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSdcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ21lbnUtcGFnZScsICdtZW51UGFnZScpXHJcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnXHJcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdjb250YWN0LXBhZ2UnLCAnY29udGFjdFBhZ2UnKVxyXG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0J1xyXG5cclxuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKVxyXG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKVxyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQnV0dG9uKVxyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKVxyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkhlYWRlcilcclxuICAgIHJldHVybiB7IGhvbWVCdXR0b24sIG1lbnVCdXR0b24sIGNvbnRhY3RCdXR0b24sIG1haW5Db250ZW50IH1cclxufSkoKVxyXG5cclxuY29uc3QgZ2VuZXJhdGVGb290ZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5Gb290ZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZm9vdGVyJywgJ2Zvb3RlcicsICdmb290ZXInKVxyXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Zvb3Rlci10ZXh0JywgJ2Zvb3RlclRleHQnKVxyXG4gICAgY29uc3QgZm9vdGVyTGluayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdhJywgJ2ZhLWJyYW5kcycsICdmb290ZXJMaW5rJylcclxuICAgIGZvb3RlckxpbmsuY2xhc3NMaXN0LmFkZCgnZmEtZ2l0aHViJylcclxuICAgIGZvb3RlckxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vcm1hdGhyJ1xyXG5cclxuICAgIG1haW5Gb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dClcclxuICAgIG1haW5Gb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluaylcclxuXHJcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gJ3JtYXRowqknXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluRm9vdGVyKVxyXG59KSgpXHJcblxyXG5nZW5lcmF0ZUhvbWVwYWdlKClcclxuXHJcbmNvbnN0IGNsZWFyRE9NID0gZnVuY3Rpb24oKXtcclxuICAgIHdoaWxlIChnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICBnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5yZW1vdmVDaGlsZChnZW5lcmF0ZUhlYWRlci5tYWluQ29udGVudC5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG59XHJcblxyXG5nZW5lcmF0ZUhlYWRlci5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNsZWFyRE9NKClcclxuICAgIGdlbmVyYXRlSGVhZGVyLmNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIubWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5ob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlQ29udGFjdFBhZ2UoKVxyXG59KVxyXG5cclxuZ2VuZXJhdGVIZWFkZXIubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNsZWFyRE9NKClcclxuICAgIGdlbmVyYXRlSGVhZGVyLmNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIubWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5ob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlTWVudUNvbnRlbnQoKVxyXG59KVxyXG5cclxuZ2VuZXJhdGVIZWFkZXIuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjbGVhckRPTSgpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5jb250YWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlSGVhZGVyLm1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIuaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZUhvbWVwYWdlKClcclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9