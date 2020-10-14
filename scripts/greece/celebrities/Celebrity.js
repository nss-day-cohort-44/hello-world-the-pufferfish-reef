export const Celebrity = (celebrityObject) => {
    return `
        <div class="celebrity">
            <p class="celebrity__name">${celebrityObject.name}</p>
            <img class="celebrity__image" src="${celebrityObject.image}" alt="">
        </div>

    `
}
