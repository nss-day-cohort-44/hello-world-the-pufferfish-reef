const landmarkCollection = [
    {
        name: "Glasgow Green",
        image: "https://www.glasgowtimes.co.uk/resources/images/10104155/?type=responsive-gallery"
    },
    {
        name: "Edinburgh Castle",
        image: "https://www.edinburghcastle.scot/media/1068/concerts.jpg?anchor=center&mode=crop&width=500&height=300&rnd=131964542290000000"
    }
]

export const useLandmarks = () => {
    return landmarkCollection.slice()
}
