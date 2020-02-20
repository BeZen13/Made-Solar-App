import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.js'


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
                    path="/RepSheet"
                    render={() => <RepSheet />}
                />
                <Route
                    path=""
                />
            </Switch>
        </div>
    )
}