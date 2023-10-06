import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode] = React.useState(true) // set the default value of darkMode to true

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode) // toggle the value of darkMode with the previous value of darkMode (true or false)
    }

    return (
        <div className="container">
            <Navbar 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            />
            <Main 
            darkMode={darkMode}
            />
        </div>
    )
}