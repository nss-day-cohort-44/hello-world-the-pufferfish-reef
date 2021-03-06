import { useLandmark } from "./LandmarkDataProvider.js"
import { Landmark } from "./Landmark.js"

export const landmarkList = () => {
const contentElement = document.querySelector(".col2")

const landmarks = useLandmark()

let landmarkHTMLRepresentations = ""
for (const landmark of landmarks) {
    landmarkHTMLRepresentations += Landmark(landmark)
}


contentElement.innerHTML += `
<div class="card1">
${landmarkHTMLRepresentations}
</div>
`
}