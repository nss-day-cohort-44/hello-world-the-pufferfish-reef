/**
 *  Celebrity: renders each individual celebrity objects as HTML
 */

export const Celebrity = (celebrityObjects) => {
    return `
        <div class="celebs">
            <div class="celeb__name">${celebrityObjects.name}</div>
            <div><img class="celeb__image" src="${celebrityObjects.image}"></div>
        </div>
        `
}