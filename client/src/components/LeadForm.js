import React, { useState } from 'react'

const initLeadInputs = {
    name: "",
    phone: "",
}

export default function LeadForm(props){
    const [ inputs, setInputs ] = useState(initLeadInputs)
    const { addLead } = props

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addLead(inputs)
        setInputs(initLeadInputs)
    }
    
    
    const { name, phone } = inputs

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="number"
                name="phone"
                value={phone}
                onChange={handleChange}
                placeholder="Phone"
            />
            <button>Add Lead</button>
        </form>
    )

}