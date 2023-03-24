import interactDOM from "./interact-dom"
import generateHomepage from "./home"
import generateMenuContent from "./menu"
import generateContactPage from "./contact"

const generateHeader = (function(){
    const mainHeader = interactDOM().createElementWithClassAndId('header', 'main-header', 'mainHeader')
    const mainContent = interactDOM().hookDOMelement('mainContent')
    
    const homeButton = interactDOM().createElementWithClassAndId('button', 'home-page', 'homePage')
    homeButton.textContent = 'Home'
    const menuButton = interactDOM().createElementWithClassAndId('button', 'menu-page', 'menuPage')
    menuButton.textContent = 'Menu'
    const contactButton = interactDOM().createElementWithClassAndId('button', 'contact-page', 'contactPage')
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
    generateContactPage()
})

generateHeader.menuButton.addEventListener('click', e =>{
    e.preventDefault()
    clearDOM()
    generateMenuContent()
})

generateHeader.homeButton.addEventListener('click', e => {
    e.preventDefault()
    clearDOM()
    generateHomepage()
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
