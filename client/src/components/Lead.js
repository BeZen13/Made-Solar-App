import React from 'react'

export default function Leads(props){
    const { name, phone, _id } = props
    return(
        <div className="leads">
            <h1>{ name }</h1>
            <h2>{ phone }</h2>
        </div>
    )
}