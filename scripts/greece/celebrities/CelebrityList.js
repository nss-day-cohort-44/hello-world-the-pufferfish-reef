import { useCelebrity } from "./CelebritiesDataProvider.js"
import { celebrity } from "./Celebrity.js"

export const celebrityList = () => {
    const contentElement = document.querySelector(".card")

    const celebrities = useCelebrity()

    let celebrityHTMLRepresentations = ""
    for (const oneCelebrity of celebrities) {
        celebrityHTMLRepresentations += celebrity(oneCelebrity)

    }
}

contentElement.innerHTML += `
<div class="card1">
${celebrityHTMLRepresentations}
</div>
`
}
