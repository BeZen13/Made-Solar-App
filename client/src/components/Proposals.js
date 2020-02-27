import React from 'react'

import axios from 'axios'

import { useInput } from '../hooks/inputHook.js'


function RepSheet(props) {
    const {
       value: firstName,
       bind: bindFirstName,
       reset: resetFirstName 
    } = useInput("")
    const {
        value: lastName,
        bind: bindLastName,
        reset: resetLastName
    } = useInput("")
    const {
        value: email,
        bind: bindEmail,
        reset: resetEmail
    } = useInput("")
    const {
        value: phone,
        bind: bindPhone,
        reset: resetPhone
    } = useInput("")
    const {
        value: location,
        bind: bindLocation,
        reset: resetLocation
    } = useInput("")
    const {
        value: message,
        bind: bindMessage,
        reset: resetMessage
    } = useInput("")

    const inputs = {
        firstName,
        lastName,
        email,
        phone,
        location,
        message
    }

    const sendProposal = () => {
        axios.post("/send", inputs)
        .then(res => {
            if(res.data.status === "success"){
                alert("Proposal sent for Office Build!")
            }
            else if(res.data.status === "fail") {
                alert("Proposal failed to send! Sorry about that!!!")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        sendProposal()
        resetFirstName()
        resetLastName()
        resetEmail()
        resetPhone()
        resetLocation()
        resetMessage()
    }

    return(
        <form className="propForm" onSubmit={ handleSubmit }>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                { ...bindFirstName }
                required
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                { ...bindLastName }
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                { ...bindEmail }
                required
            />
            <input
                type="phone"
                name="phone"
                placeholder="Phone"
                { ...bindPhone }
                required
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                { ...bindLocation }
                required
            />
            <input
                type="body"
                name="message"
                placeholder="Added Info..."
                { ...bindMessage }
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default RepSheet
