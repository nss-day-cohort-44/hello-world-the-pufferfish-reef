/**
 *  City: renders each individual city objects as HTML
 */

export const City = (cityObjects) => {
    return `
        <div class="card1">
            <div class="card__city">${cityObjects.name}</div>
            <div><img class="card__image" src="${cityObjects.image}"></div>
        </div>
        `
}
