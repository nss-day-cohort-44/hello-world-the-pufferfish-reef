const landmarkCollection = [
    {
        name: "The Dark Hedges",
        image: "https://www.belfasttelegraph.co.uk/incoming/780ab/35874867.ece/AUTOCROP/w800/32298_The_Dark_Hedges.jpg"
    },
    {
        name: "Castle Ward",
        image: "https://www.greatdays.co.uk/wp-content/uploads/Game-of-Thrones-Film-Location-Winterfell-Castle-Ward-%C2%A9Northern-ireland-Tourist-boardjpg-1-e1500638062832-525x350.jpg"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}