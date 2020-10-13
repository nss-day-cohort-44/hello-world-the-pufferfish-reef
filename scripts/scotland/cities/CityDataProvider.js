const cityCollection = [
    {
        numb: "Tip 1",
        saying: "All fish love salt. Pour an entire shaker in every day to ensure proper salinity. Do not worry about tank size; one shaker should be enough for any tank."
    },
    {
        numb: "Tip 2",
        saying: "All fish love the cold. Kobe an ice cube in every 80 minutes to be safe."
    },
    
]
//The slice method returns a new copy of the array
export const useCities = () => {
    return cityCollection.slice()
}