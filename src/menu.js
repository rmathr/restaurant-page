import interactDOM from "./interact-dom";

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
        name: interactDOM().createElementWithClassAndId('p', 'foods-name', `name#${menu[`${type}`][id].order}`),
        ingredients: interactDOM().createElementWithClassAndId('p', 'foods-ingredients', `ingredients#${menu[`${type}`][id].order}`),
        price: interactDOM().createElementWithClassAndId('p', 'foods-price', `price#${menu[`${type}`][id].order}`),
        img: interactDOM().createElementWithClassAndId('img', 'foods-image', `image#${menu[`${type}`][id].order}`)
    }
    return domElements
}

const generateMenuContent = function () {
    const mainContent = interactDOM().hookDOMelement('mainContent')
    const mainMenuContent = interactDOM().createElementWithClassAndId('main', 'main-menu-content', 'mainMenuContent')
    const menuTitle = interactDOM().createElementWithClassAndId('p', 'menu-title', 'menuTitle')
    const dessertsContent = interactDOM().createElementWithClassAndId('div', 'dessert-content', 'dessertContent')
    const dessertContainerOne = interactDOM().createElementWithClassAndId('div', 'dessert-container', 'dessertContainerOne')
    const dessertContainerTwo = interactDOM().createElementWithClassAndId('div', 'dessert-container', 'dessertContainerTwo')
    const hamburgerContent = interactDOM().createElementWithClassAndId('div', 'hamburger-content', 'hamburgerContent')
    const hamburgerContainerOne = interactDOM().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerOne')
    const hamburgerContainerTwo = interactDOM().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerTwo')
    const hamburgerContainerThree = interactDOM().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerThree')
    const hamburgerContainerFour = interactDOM().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerFour')
    const hamburgerContainerFive = interactDOM().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerFive')
    const hamburgerContainerSix = interactDOM().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerSix')
    const hamburgerContainerSeven = interactDOM().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerSeven')
    const hamburgerContainerEigth = interactDOM().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerEigth')


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
    interactDOM().appendMenuElementAndDefineContent(hamburgerContainerOne, hamburguerOne, menu, 'hamburguers', 0)
    interactDOM().appendMenuElementAndDefineContent(hamburgerContainerTwo, hamburguerTwo, menu, 'hamburguers', 1)
    interactDOM().appendMenuElementAndDefineContent(hamburgerContainerThree, hamburguerThree, menu, 'hamburguers', 2)
    interactDOM().appendMenuElementAndDefineContent(hamburgerContainerFour, hamburguerFour, menu, 'hamburguers', 3)
    interactDOM().appendMenuElementAndDefineContent(hamburgerContainerFive, hamburguerFive, menu, 'hamburguers', 4)
    interactDOM().appendMenuElementAndDefineContent(hamburgerContainerSix, hamburguerSix, menu, 'hamburguers', 5)
    interactDOM().appendMenuElementAndDefineContent(hamburgerContainerSeven, hamburguerSeven, menu, 'hamburguers', 6)
    interactDOM().appendMenuElementAndDefineContent(hamburgerContainerEigth, hamburguerEight, menu, 'hamburguers', 7)
    mainContent.appendChild(mainMenuContent)
}

export default generateMenuContent