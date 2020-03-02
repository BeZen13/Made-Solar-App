import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import Lead from './Lead.js'

export default function LeadList(props){
    const { leads } = props
    const { getUserLeads } = useContext(UserContext)
    console.log(leads)
    
    useEffect( () => { 
        getUserLeads()
    }, [])
    
    return(
        <div className="leads-list">
            { leads.map(lead => <Lead {...lead} key={lead._id}/>) }
        </div>
    )
}