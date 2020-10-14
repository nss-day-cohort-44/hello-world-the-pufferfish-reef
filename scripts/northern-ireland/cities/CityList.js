import { useCity } from "./CityDataProvider.js"
import { City } from "./City.js"

export const cityList = () => {
const contentElement = document.querySelector(".col1")

const cities = useCity()

let cityHTMLRepresentations = ""
for (const city of cities) {
    cityHTMLRepresentations += City(city)
}


contentElement.innerHTML += `
<div class="card1">
${cityHTMLRepresentations}
</div>
`
}