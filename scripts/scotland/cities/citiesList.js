/**
 *  citiesList: renders individual city objects as HTML. Creates container element and renders each individual city component for each city in collection
 */

import { useCities } from './CityDataProvider.js'
import { City } from './City.js'
export const CitiesList = () => {
    //Reference to `<article class="content">`
   
    const cityContent = document.querySelector(".col1")
    const cities = useCities()
    // debugger

    // console.log(cityContent)

    /*
      Invoke the City component function
      and pass the current city object as an argument.
      Each time, add the return value to the
      citiesHTMLRepresentations variable with `+=`
    */
    let citiesHTMLRepresentations = ""
    for (const city of cities) {
        citiesHTMLRepresentations += City(city)
    }

    //add to existing HTML in the cityContent
    cityContent.innerHTML += `
    <article class="card1">
        ${citiesHTMLRepresentations}
    </article>
    `
}