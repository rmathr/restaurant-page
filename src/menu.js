import interactDOM from "./interact-dom";

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
        name: interactDOM().createElementWithClassAndId('p', 'foods-name', `name#${food.order}`),
        description: interactDOM().createElementWithClassAndId('p', 'foods-description', `description#${food.order}`),
        price: interactDOM().createElementWithClassAndId('p', 'foods-price', `price#${food.order}`),
        img: interactDOM().createElementWithClassAndId('img', 'foods-image', `image#${food.order}`)
    }
    menu[`${type}`].push(food)
    return domElements
}




const generateMenuContent = function () {
    const mainContent = interactDOM().hookDOMelement('mainContent')
    const mainMenuContent = interactDOM().createElementWithClassAndId('main', 'main-menu-content', 'mainMenuContent')
    const menuTitle = interactDOM().createElementWithClassAndId('p', 'menu-title', 'menuTitle')
    const dessertsContent = interactDOM().createElementWithClassAndId('div', 'dessert-content', 'dessertContent')
    const dessertContainerOne = interactDOM().createElementWithClassAndId('div', 'dessert-container', 'dessertContainerOne')
    const dessertContainerTwo = interactDOM().createElementWithClassAndId('div', 'dessert-container', 'dessertContainerTwo')

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
    the creamy richness of cheesecake. Every slice of Raspberry Cheesecake will leave you craving for more."`, 
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

export default generateMenuContent