import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'

export default function Leads(props){

    const { deleteLead } = useContext(UserContext)
    const { name, phone, _id } = props
    return(
        <div className="leads">
            <h1>{ name }</h1>
            <h2>{ phone }</h2>
            <button onClick={deleteLead}>Delete</button>
        </div>
    )
}