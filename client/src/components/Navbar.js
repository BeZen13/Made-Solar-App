import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    const { logout } = props

    return(
        <div className="navbar">
            <Link to="/proposals">Proposal Submit</Link>
            <Link to="/files">Rep Reference</Link>
            <Link to="/LeadTracker">Lead Tracker</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}