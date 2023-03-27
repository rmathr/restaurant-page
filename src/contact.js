import interactDOM from "./interact-dom";

const contactList = []

const createContact = (name, role, phone, order) => {
    const state = {
        name,
        role,
        phone,
        order
    }
    return { ...state }
}

const addContact = (name, role, phone, order) => { 
    const contact = createContact(name, role, phone, order)
    const domElements = {
        name: interactDOM().createElementWithClassAndId('p', `${contact.name}-${contact.order}`, `${contact.name}${contact.order}`),
        role: interactDOM().createElementWithClassAndId('p', `${contact.role}-${contact.order}`, `${contact.role}${contact.order}`),
        phone: interactDOM().createElementWithClassAndId('p', `${contact.name}-${contact.order}-phone`, `${contact.name}-${contact.order}Phone`)
    }
    contactList.push(contact)
    return domElements

}

const generateContactPage = function () {
    const mainContent = interactDOM().hookDOMelement('mainContent')
    const mainContactContent = interactDOM().createElementWithClassAndId('main', 'main-contact-content', 'mainContactContent')
    const contactTitle = interactDOM().createElementWithClassAndId('p', 'contact-title', 'contactTitle')
    
    const containerOne = interactDOM().createElementWithClassAndId('div', 'contact-container', 'containerOne')
    const containerTwo = interactDOM().createElementWithClassAndId('div', 'contact-container', 'containerTwo')
    const containerThree = interactDOM().createElementWithClassAndId('div', 'contact-container', 'containerThree')

    const contactOne = addContact('Ellie', 'President', '(781) 214 6563', 0)
    const contactTwo = addContact('Dina', 'Vice-President', '(781) 147 788', 1)
    const contactThree = addContact('Joel', 'Chef', '(781) 154 4487', 2)
    
    mainContactContent.appendChild(contactTitle)
    containerOne.appendChild(contactOne.name)
    containerOne.appendChild(contactOne.role)
    containerOne.appendChild(contactOne.phone)

    containerTwo.appendChild(contactTwo.name)
    containerTwo.appendChild(contactTwo.role)
    containerTwo.appendChild(contactTwo.phone)

    containerThree.appendChild(contactThree.name)
    containerThree.appendChild(contactThree.role)
    containerThree.appendChild(contactThree.phone)


    mainContactContent.appendChild(containerOne)
    mainContactContent.appendChild(containerTwo)
    mainContactContent.appendChild(containerThree)
   
    contactTitle.textContent = 'Contact Us'
    contactOne.name.textContent = `${contactList[0].name}`
    contactOne.role.textContent = `${contactList[0].role}`
    contactOne.phone.textContent = `${contactList[0].phone}`

    contactTwo.name.textContent = `${contactList[1].name}`
    contactTwo.role.textContent = `${contactList[1].role}`
    contactTwo.phone.textContent = `${contactList[1].phone}`

    contactThree.name.textContent = `${contactList[2].name}`
    contactThree.role.textContent = `${contactList[2].role}`
    contactThree.phone.textContent = `${contactList[2].phone}`

    mainContent.appendChild(mainContactContent)
}

export default generateContactPage
