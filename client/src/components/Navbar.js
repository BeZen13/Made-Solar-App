import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    const { logout } = props

    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/Proposals">Rep Sheet</Link>
            <Link to="/Public">Public Domain</Link>
            <Link to="/Files">Rep Files</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}