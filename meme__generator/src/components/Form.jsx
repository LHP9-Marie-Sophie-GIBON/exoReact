import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([]) // allMemes is an array of objects
    
    React.useEffect(() => { // fetch all memes from the API
        fetch("https://api.imgflip.com/get_memes") 
            .then(res => res.json()) // convert the response to json
            .then(data => setAllMemes(data.data.memes)) // set the state of allMemes with the data from the API
    }, []) // empty array to run the effect only once
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length) // get a random number between 0 and the length of the array
        const url = allMemes[randomNumber].url // get the url of the meme with the random number
        setMeme(prevMeme => ({
            ...prevMeme, // keep the previous state
            randomImage: url // set the state of randomImage with the url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target // get the name and the value of the input
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value // set the state of the input with the name and the value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}