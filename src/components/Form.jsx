import React, { useState } from "react"

const Form = () => {
    const [ firstName , setFirstName ] = useState("");
    const [ lastName , setLastName ] = useState("");
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ nameError , setNameError ] = useState("");
    const [ emailError , setEmailError ] = useState("");
    const [ passError , setPassError ] = useState("");
    // const [ isSubmitted , setIsSubmitted ] = (false)


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log({firstName, lastName, email, password})
    //     if(!nameError && !emailError && !passError) {
    //         console.log({firstName, lastName, email, password})
    //         setIsSubmitted(true)
    //     }
    //     else {
    //         alert("Fix the submission form!")
    //     }
    // }

    const handleFirstName = (e) => {
        const valToUpdate = e.target.value 
        setFirstName(e.target.value)
        if(valToUpdate.length < 2) {
            setNameError("You gotta have a longer name than that!")
        }
    }


    const handleLastName = (e) => {
        const valToUpdate = e.target.value 
        setLastName(e.target.value)
        if(valToUpdate.length < 2) {
            setNameError("This app requires a longer surname")
        }
    }


    const handleEmail = (e) => {
        const valToUpdate = e.target.value 
        setEmail(e.target.value)
        if(valToUpdate.length < 4) {
            setEmailError("Please enter a valid email")
        }
    }


    const handlePassword = (e) => {
        const valToUpdate = e.target.value 
        setPassword(e.target.value)
        if(valToUpdate.length < 4) {
            setPassError("Please enter a valid email")
        }
    }


    return (
        <div>
            {/* {
                isSubmitted ?
                    "Please fill in the form":
                    "Thank you for submitting"
            } */}
            <form onSubmit={(e) => e.preventDefault()}>
                <label for="firstName">First Name:</label>
                <input type="text" name="firstName" onChange={handleFirstName} value={firstName} />
                {
                    nameError ?
                    <p style={{color:"red"}}>{nameError}</p> : ""
                }
                <label for="lastName">Last Name:</label>
                <input type="text" name="lastName" onChange={handleLastName} value={lastName} />
                {
                    nameError ?
                    <p style={{color:"red"}}>{nameError}</p> : ""
                }
                <label for="email">email:</label>
                <input type="text" name="email" onChange={handleEmail} value={email} />
                {
                    emailError ?
                    <p style={{color:"red"}}>{emailError}</p> : ""
                }
                <label for="password">password:</label>
                <input type="text" name="password" onChange={handlePassword} value={password} />
                {
                    passError ?
                    <p style={{color:"red"}}>{passError}</p> : ""
                }
                <button type="submit">Submit</button>
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>email: {email}</p>
                <p>Password: {password}</p>
            </div>
        </div>
    )
}

export default Form;