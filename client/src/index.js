import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import UserProvider from './context/UserProvider.js'
import ProposalProvider from './context/ProposalProvider.js'
import './css/styles.css'

ReactDOM.render(
    <BrowserRouter>
        <ProposalProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </ProposalProvider>
    </BrowserRouter>,
    document.getElementById('root')
)