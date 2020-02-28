import React, { useContext } from 'react'
import LeadForm from './LeadForn.js'
import LeadList from './LeadList.js'

import { UserContext } from '../context/UserProvider'

export default function LeadTracker(){
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
            <h3>You Leads</h3>
            <LeadList leads={leads}/>
        </div>
    )
}