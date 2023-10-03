import React from "react";
import memes from "../data/memes";

export default function Form(props) {
    
    const [meme, setMeme] = React.useState({ // meme is the state, setMeme is the function to update the state
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData) // memesData is the data from the memes.js file
    
    
    function getMemeImage() { // function to get a random meme image
        const memesArray = allMemeImages.data.memes // memesArray is an array of all the memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)  // randomNumber is a random number between 0 and the length of the memesArray
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })) // setMeme is the function to update the state
        
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}