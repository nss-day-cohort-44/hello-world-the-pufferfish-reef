import { useCelebrity } from "./CelebritiesDataProvider.js"
import { Celebrity } from "./Celebrity.js"

export const celebrityList = () => {
    const contentElement = document.querySelector(".column3")

    const celebrities = useCelebrity()

    let celebrityHTMLRepresentations = ""
    for (const oneCelebrity of celebrities) {
        celebrityHTMLRepresentations += Celebrity(oneCelebrity)
    }

contentElement.innerHTML += `
<div class="card1">
${celebrityHTMLRepresentations}
</div>
`
}
