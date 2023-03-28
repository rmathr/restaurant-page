import interactDOM from "./interact-dom"
import generateHomepage from "./home"
import generateMenuContent from "./menu"
import generateContactPage from "./contact"


const generateHeader = (function(){
    const mainHeader = interactDOM().createElementWithClassAndId('header', 'main-header', 'mainHeader')
    const mainContent = interactDOM().hookDOMelement('mainContent')

    const restaurantTitle = interactDOM().createElementWithClassAndId('div', 'restaurant-title', 'restaurantTitle')
    restaurantTitle.textContent = 'The Last Bite'

    const buttonsContainer = interactDOM().createElementWithClassAndId('div', 'buttons-container', 'buttonsContainer')
    const homeButton = interactDOM().createElementWithClassAndId('button', 'home-page', 'homePage')
    homeButton.textContent = 'Home'
    const menuButton = interactDOM().createElementWithClassAndId('button', 'menu-page', 'menuPage')
    menuButton.textContent = 'Menu'
    const contactButton = interactDOM().createElementWithClassAndId('button', 'contact-page', 'contactPage')
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
    const mainFooter = interactDOM().createElementWithClassAndId('footer', 'footer', 'footer')
    const footerText = interactDOM().createElementWithClassAndId('p', 'footer-text', 'footerText')
    const footerLink = interactDOM().createElementWithClassAndId('a', 'fa-brands', 'footerLink')
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
    generateContactPage()
})

generateHeader.menuButton.addEventListener('click', e =>{
    e.preventDefault()
    clearDOM()
    generateHeader.contactButton.classList.remove('button-clicked')
    generateHeader.menuButton.classList.add('button-clicked')
    generateHeader.homeButton.classList.remove('button-clicked')
    generateMenuContent()
})

generateHeader.homeButton.addEventListener('click', e => {
    e.preventDefault()
    clearDOM()
    generateHeader.contactButton.classList.remove('button-clicked')
    generateHeader.menuButton.classList.remove('button-clicked')
    generateHeader.homeButton.classList.add('button-clicked')
    generateHomepage()
})
