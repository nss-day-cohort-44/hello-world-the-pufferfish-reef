const celebrityCollection = [
    {
        name: "Daniel Sloss",
        image: "https://specials-images.forbesimg.com/imageserve/5d9dddbd793bd50006ea280d/960x0.jpg?fit=scale"
    },
    {
        name: "Lewis Capaldi",
        image: "https://cdn.vox-cdn.com/thumbor/4krkJnuiquKlZ8Wv41Cjc1CFmks=/0x0:1024x684/1200x800/filters:focal(479x236:641x398)/cdn.vox-cdn.com/uploads/chorus_image/image/65898870/1193407559.0.jpg"
    },
    
]
//The slice method returns a new copy of the array
export const useCelebrities = () => {
    return celebrityCollection.slice()
}