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

export default interactDOM