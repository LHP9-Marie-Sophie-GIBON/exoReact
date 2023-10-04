import React from "react"

export default function App() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true
    }) // the initial state of the form is an object with the properties email, password, passwordConfirm, and joinedNewsletter
    
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target // destructure the event.target object to get the name, value, type, and checked properties
        setFormData(prevFormData => ({
            ...prevFormData,    // spread operator to copy the previous state
            [name]: type === "checkbox" ? checked : value // if the type is checkbox, set the value to checked, otherwise set the value to value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault() // prevent the default behavior of the form submitting
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return // return to prevent the rest of the function from running
        }
        
        if(formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email" // the name of the input is set to the name property on the formData object
                    onChange={handleChange}
                    value={formData.email} // the value of the input is set to the value of the email property on the formData object
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        onChange={handleChange}
                        checked={formData.joinedNewsletter} 
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label> 
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
