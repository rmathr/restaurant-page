import interactDOM from "./interact-dom";

const generateHomepage = function(){
    const homeMainElem = interactDOM().createElementWithClassAndId('main', 'home-main-content','homeMainContent')
    const pageTitleElem = interactDOM().createElementWithClassAndId('p', 'page-title', 'pageTitle')
    const restaurantDescriptionElem = interactDOM().createElementWithClassAndId('p', 'restaurant-description', 'restaurantDescription')
    const mainContent = interactDOM().hookDOMelement('mainContent')
    
    // const homeMain = interactDOM().hookDOMelement('homeMainContent')
    // const pageTitle = interactDOM().hookDOMelement('pageTitle')
    // const restaurantDescription = interactDOM().hookDOMelement('restaurantDescription')

    homeMainElem.appendChild(pageTitleElem)
    homeMainElem.appendChild(restaurantDescriptionElem)

    pageTitleElem.textContent = 'Fireside Tavern'
    restaurantDescriptionElem.textContent = "Fireside Tavern is a cozy and welcoming restaurant that exudes warmth and comfort. The atmosphere is reminiscent of a rustic lodge, with exposed wooden beams, stone walls, and a central fireplace that creates a cozy and intimate dining experience. The menu features classic comfort food dishes with a modern twist, as well as a selection of craft cocktails and local beers on tap. Signature dishes include a mouthwatering bacon-wrapped meatloaf, a hearty beef stew, and a delectable mac and cheese with a crispy breadcrumb topping. The restaurant also offers a carefully curated wine list, with options to suit every palate and budget. Whether you're looking for a romantic dinner for two or a fun night out with friends, Fireside Tavern is the perfect destination for a memorable dining experience."







    mainContent.appendChild(homeMainElem)
    // return homeMain
}

export default generateHomepage