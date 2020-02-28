import React, { useContext } from 'react'
import LeadForm from './LeadForm.js'
import LeadList from './LeadList.js'

import { UserContext } from '../context/UserProvider'

export default function LeadTracker(props){
    const{
        user: {
            username
        },
        addLead,
        leads
    } = useContext(UserContext)

    return(
        <div className="leadTracker">
            <h1>HELLO @{username}!</h1>
            <h3>Add a Lead</h3>
            <LeadForm addLead={addLead}/>
            <h3>Your Leads</h3>
            <LeadList leads={leads}/>
        </div>
    )
}