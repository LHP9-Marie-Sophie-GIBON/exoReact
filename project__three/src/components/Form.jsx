import React from "react";
import memes from "../data/memes";

export default function Form(props) {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage () {
        const memesArray = memes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
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
            <img src={memeImage} className="meme--image"/>
        </div>
    </main>
    )
}