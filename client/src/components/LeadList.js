import React from 'react'
import Leads from './Leads.js'

export default function LeadList(props){
    const { leads } = props
    return(
        <div className="leads-list">
            { leads.map(lead => <Leads {...lead} key={lead._id}/>) }
        </div>
    )
}