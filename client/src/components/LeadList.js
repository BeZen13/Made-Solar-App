import React from 'react'
import Lead from './Lead.js'

export default function LeadList(props){
    const { leads } = props
    return(
        <div className="leads-list">
            { leads.map(lead => <Lead {...lead} key={lead._id}/>) }
        </div>
    )
}