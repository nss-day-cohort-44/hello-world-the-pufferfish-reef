
export const Landmark = (landmarkObj) => {
    return`
        div class="card1">
            <h6><div class="card__landmark">${landmarkObj.name}<</div></h6>
            <img class="card__image" src="${landmarkObj.image}" alt="">
        </div>
    `
}