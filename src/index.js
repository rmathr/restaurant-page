import interactDOM from "./interact-dom"
import generateHomepage from "./home"
import generateContactPage from "./contact"

const generateHeader = (function(){
    const mainHeader = interactDOM().createElementWithClassAndId('header', 'main-header', 'mainHeader')
    
    const homeButton = interactDOM().createElementWithClassAndId('button', 'home-page', 'homePage')
    homeButton.textContent = 'Home'
    const contactButton = interactDOM().createElementWithClassAndId('button', 'contact-page', 'contactPage')
    contactButton.textContent = 'Contact'

    mainHeader.appendChild(homeButton)
    mainHeader.appendChild(contactButton)

    document.body.appendChild(mainHeader)
    return { homeButton, contactButton }
})()

generateHeader.contactButton.addEventListener('click', e => {
         e.preventDefault()
         generateContactPage()
     })

generateHeader.homeButton.addEventListener('click', e => {
    e.preventDefault()
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
