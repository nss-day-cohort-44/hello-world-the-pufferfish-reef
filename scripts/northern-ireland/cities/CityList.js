import { useCity } from "./CityDataProvider.js"
import { City } from "./City.js"

export const cityList = () => {
const contentElement = document.querySelector(".card")

const celebrities = useCity()

let cityHTMLRepresentations = ""
for (const celebrity of celebrities) {
    cityHTMLRepresentations += City(city)
}


contentElement.innerHTML += `
<div class="card1">
${cityHTMLRepresentations}
</div>
`
}