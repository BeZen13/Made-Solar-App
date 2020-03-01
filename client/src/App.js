import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import { UserContext } from './context/UserProvider.js'
import Auth from './components/Auth.js'
import ProtectedRoute from './components/ProtectedRoute.js'
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
                    render={() => token ? <Redirect to="/LeadTracker" /> : <Auth/>}
                />
                <ProtectedRoute
                    path="/Proposals"
                    component={Proposals}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute
                    path="/Files"
                    component={Files}
                    redirectTo="/"
                    token={token}

                />
                <ProtectedRoute
                    path="/LeadTracker"
                    component={LeadTracker}
                    redirectTo="/"
                    token={token}
                />
            </Switch>
        </div>
    )
}