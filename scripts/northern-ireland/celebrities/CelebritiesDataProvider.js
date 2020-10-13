const celebrityCollection = [
    {
        name: "Liam Neeson",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/02/04/08/liam-neeson.jpg"
    },
    {
        name: "Mary Peters",
        image: "https://www.telegraph.co.uk/content/dam/athletics/2019/10/17/TELEMMGLPICT000003710370_trans_NvBQzQNjv4Bqe8joXUDPJk7655HDLfqJior2F0RlfwBQu7ZMfeS_wd0.jpeg"
    }
]

export const useCelebrity = () => {
    return celebrityCollection.slice()
}
