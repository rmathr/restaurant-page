import interactDOM from "./interact-dom";


const generateMenuContent = function () {
    const mainContent = interactDOM().hookDOMelement('mainContent')
    const mainMenuContent = interactDOM().createElementWithClassAndId('main', 'main-menu-content', 'mainMenuContent')
    const menuTitle = interactDOM().createElementWithClassAndId('p', 'menu-title', 'menuTitle')

    mainMenuContent.appendChild(menuTitle)
    menuTitle.textContent = 'Menu'

    mainContent.appendChild(mainMenuContent)
}

export default generateMenuContent