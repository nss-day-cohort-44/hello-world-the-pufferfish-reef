
export const Celebrity = (celebrityObj) => {
    return `
        <div class="card1">
            <h6><div class="card__person">${celebrityObj.name}</div></h6>
            <img class="card__image" src="${celebrityObj.image}" alt="">
        </div>
    `
}