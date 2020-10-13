export const celebrity = (celebrityObject) => {
    return `
        <div class="celebrity">
            <p class="celebrity__name">${celebrityObject}</p>
            <img class="celebrity__image" src="${celebrityObject}" alt="">
        </div>
    `
} 
