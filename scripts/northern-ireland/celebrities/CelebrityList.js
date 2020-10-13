import { useCelebrity } from "./CelebritiesDataProvider.js"
import { Celebrity } from "./Celebrity.js"

export const celebrityList = () => {
const contentElement = document.querySelector(".card")

const celebrities = useCelebrity()

let celebrityHTMLRepresentations = ""
for (const celebrity of celebrities) {
    celebrityHTMLRepresentations += Celebrity(celebrity)
}


contentElement.innerHTML += `
<div class="card1">
${celebrityHTMLRepresentations}
</div>
`
}