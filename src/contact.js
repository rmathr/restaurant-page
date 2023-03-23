import interactDOM from "./interact-dom";

const generateContactPage = function () {
    const mainContent = interactDOM().hookDOMelement('mainContent')
    const mainContactContent = interactDOM().createElementWithClassAndId('main', 'main-contact-content', 'mainContactContent')
    const contactTitle = interactDOM().createElementWithClassAndId('p', 'contact-title', 'contactTitle')

    const firstContactName = interactDOM().createElementWithClassAndId('p', 'first-contact-name', 'firstContactName')
    const firstContactRole = interactDOM().createElementWithClassAndId('p', 'first-contact-role', 'firstContactRole')
    const firstContactPhone = interactDOM().createElementWithClassAndId('p', 'first-contact-phone', 'firstContactPhone')

    mainContactContent.appendChild(contactTitle)
    mainContactContent.appendChild(firstContactName)
    mainContactContent.appendChild(firstContactRole)
    mainContactContent.appendChild(firstContactPhone)

    contactTitle.textContent = 'Contact Us'
    firstContactName.textContent = 'Oscar Stone'
    firstContactRole.textContent = 'Chef'
    firstContactPhone.textContent = '(478) 658 112'

    mainContent.appendChild(mainContactContent)
}

export default generateContactPage
