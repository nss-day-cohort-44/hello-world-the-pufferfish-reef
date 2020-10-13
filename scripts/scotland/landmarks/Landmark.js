/**
 *  LAndmark: renders each individual landmark objects as HTML
 */

export const Landmark = (landmarkObjects) => {
    return `
        <div class="landmarks">
            <div class="landmark__number">${landmarkObjects.numb}</div>
            <div class="tip__saying">${landmarkObjects.saying}</div>
        </div>
        `
}