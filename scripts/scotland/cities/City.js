/**
 *  City: renders each individual city objects as HTML
 */

export const City = (cityObjects) => {
    return `
        <div class="cities">
            <div class="tip__number">${cityObjects.numb}</div>
            <div class="tip__saying">${cityObjects.saying}</div>
        </div>
        `
}