const cityCollection = [
    {
        name: "Belfast",
        image: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/11/08/10/belfast-city-hall-1-1.jpeg"
    },
    {
        name: "Lisburn",
        image: "https://i.pinimg.com/originals/62/18/d4/6218d464d64963f969168a9063f9c60c.jpg"
    }
]

export const useCity = () => {
    return cityCollection.slice()
}