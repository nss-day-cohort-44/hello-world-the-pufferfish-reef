/**
 *  City: renders each individual city objects as HTML
 */

export const City = (cityObjects) => {
    return `
        <div class="citiess">
            <div class="city__name">${cityObjects.name}</div>
            <div><img class="city__image" src="${cityObjects.image}"></div>
        </div>
        `
}