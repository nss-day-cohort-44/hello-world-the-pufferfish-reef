const celebrityCollection = [

{
    name: "Giannis Antetokounmpo",
    image: "https://cdn.hoopsrumors.com/files/2020/02/Giannis-Antetokounmpo-900x599.jpg"
},
{
    name: "Socrates",
    image: "https://www.brilliantread.com/wp-content/uploads/2019/09/socrates-quotes.jpg"
},
]

export const useCelebrity = () => {
    return celebrityCollection.slice()
}
