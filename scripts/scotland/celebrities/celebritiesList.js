/**
 *  CelebrityList: renders individual celebrity objects as HTML. Creates container element and renders each individual celebrity component for each celebrity in collection
 */

import { useCelebrities } from './CelebritiesDataProvider.js'
import { Celebrity } from './Celebrity.js'
export const CelebritiesList = () => {
    //Reference to `<article class="content">`
   
    const celebrityContent = document.querySelector(".col3")
    const celebs = useCelebrities()
    

    // console.log(celebrityContent)

    /*
      Invoke the Celebrity component function
      and pass the current celebrity object as an argument.
      Each time, add the return value to the
      celebsHTMLRepresentations variable with `+=`
    */
    let celebsHTMLRepresentations = ""
    for (const celebrity of celebs) {
        celebsHTMLRepresentations += Celebrity(celebrity)
    }

    //add to existing HTML in the celebrityContent
    celebrityContent.innerHTML += `
    <div class="card1">
    ${celebsHTMLRepresentations}
    </div>
    `
}