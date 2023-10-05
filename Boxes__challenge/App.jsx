import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) { // the toggle function is passed down to the Box component as a prop and is called when the Box is clicked on
        setSquares(prevSquares => {
            return prevSquares.map((square) => { // map() returns a new array with the same length as the original array but with each element modified by the callback function
                return square.id === id ? {...square, on: !square.on} : square // if the square.id matches the id passed in, return a new object with the same properties as the original object but with the on property set to the opposite of the original value, otherwise return the original object
            })
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={() => toggle(square.id)} // the toggle function is passed down to the Box component as a prop and is called when the Box is clicked on
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
