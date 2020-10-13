import { useLandmarks } from "./LandmarkDataProvider.js"
import { Landmark } from "./Landmark.js"

export const LandmarksList = () => {
const landmarkContent = document.querySelector(".card")

const landmarks = useLandmarks()

let landmarkHTMLRepresentations = ""
for (const landmark of landmarks) {
    landmarkHTMLRepresentations += Landmark(landmark)
}


landmarkContent.innerHTML += `
<div class="card1">
${landmarkHTMLRepresentations}
</div>
`
}