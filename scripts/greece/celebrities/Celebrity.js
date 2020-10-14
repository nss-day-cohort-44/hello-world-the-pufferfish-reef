export const Celebrity = (celebrityObject) => {
    return `
        <div class="card1">
            <p class="card__person">${celebrityObject.name}</p>
            <img class="card__image" src="${celebrityObject.image}" alt="">
        </div>

    `
}
