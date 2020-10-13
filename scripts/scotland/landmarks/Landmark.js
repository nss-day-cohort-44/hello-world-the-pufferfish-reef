/**
 *  Landmark: renders each individual landmark objects as HTML
 */

export const Landmark = (landmarkObject) => {
    return `
        <div class="card1">
            <h6><div class="card__landmark">${landmarkObject.name}</div></h6>
            <img class="card__image" src="${landmarkObject.image}" alt="">
        </div>
    `
}