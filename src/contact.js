import interactDOM from "./interact-dom";

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
        name: interactDOM().createElementWithClassAndId('p', 'contacts-name', `contactName#${contactList[id].order}`),
        role: interactDOM().createElementWithClassAndId('p', 'contacts-role', `contactRole#${contactList[id].order}`),
        img: interactDOM().createElementWithClassAndId('img', 'contacts-img', `contactImg#${contactList[id].order}`)
    }
    return domElements
}

const generateContactPage = function () {
    const mainContent = interactDOM().hookDOMelement('mainContent')
    const mainContactContent = interactDOM().createElementWithClassAndId('main', 'main-contact-content', 'mainContactContent')
    const contactTitle = interactDOM().createElementWithClassAndId('p', 'contact-title', 'contactTitle')
    const locationText = interactDOM().createElementWithClassAndId('p', 'location-text', 'locationText')
    const locationImg = interactDOM().createElementWithClassAndId('img', 'location-img', 'locationImg')
    const contactContent = interactDOM().createElementWithClassAndId('div', 'contact-content', 'contactContent')
    
    const containerOne = interactDOM().createElementWithClassAndId('div', 'contact-container', 'containerOne')
    const containerTwo = interactDOM().createElementWithClassAndId('div', 'contact-container', 'containerTwo')
    const containerThree = interactDOM().createElementWithClassAndId('div', 'contact-container', 'containerThree')
    const containerFour = interactDOM().createElementWithClassAndId('div', 'contact-container', 'containerFour')

    const contactOne = populateContact(0)
    const contactTwo = populateContact(1)
    const contactThree = populateContact(2)
    const contactFour = populateContact(3)
     
    mainContactContent.appendChild(contactTitle)
    interactDOM().appendContacElementAndDefineContent(containerOne, contactOne, contactList, 0)
    interactDOM().appendContacElementAndDefineContent(containerTwo, contactTwo, contactList, 1)
    interactDOM().appendContacElementAndDefineContent(containerThree, contactThree, contactList, 2)
    interactDOM().appendContacElementAndDefineContent(containerFour, contactFour, contactList, 3)
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

export default generateContactPage
