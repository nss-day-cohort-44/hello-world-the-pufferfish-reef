/**
 *  Celebrity: renders each individual celebrity objects as HTML
 */

export const Celebrity = (celebrityObjects) => {
    return `
        <div class="card1">
            <div class="card__person">${celebrityObjects.name}</div>
            <div><img class="card__image" src="${celebrityObjects.image}"></div>
        </div>
        `
}
