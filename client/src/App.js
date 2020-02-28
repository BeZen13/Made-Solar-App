import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import { UserContext } from './context/UserProvider.js'
import Auth from './components/Auth.js'
import Home from './components/Home.js'
import Proposals from './components/Proposals.js'
import Files from './components/Files.js'
import LeadTracker from './components/LeadTracker.js'




export default function App(){
    const { token, logout } = useContext(UserContext)

    return(
        <div className="app">
            { token && <Navbar logout={logout}/> }
            <Switch>
                <Route
                    exact path="/"
                    render={() => token ? <Redirect to="/Home" /> : <Auth/>}
                />
                <Route
                    path="/Proposals"
                    render={() => <Proposals />}
                />
                <Route
                    path="/Files"
                    render={() => <Files />}
                />
                <Route
                    path="/Home"
                    render={() => <Home />}
                />
                <Route
                    path="/LeadTracker"
                    render={() => <LeadTracker />}
                />
            </Switch>
        </div>
    )
}