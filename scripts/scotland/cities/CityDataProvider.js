const cityCollection = [
    {
        name: "Glasgow",
        image: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/08/ccimage-shutterstock_484514338.jpg"
    },
    {
        name: "Edinburgh",
        image: "https://www.planetware.com/photos-large/SCO/scotland-edinburgh-castle.jpg"
    },
    
]
//The slice method returns a new copy of the array
export const useCities = () => {
    return cityCollection.slice()
}