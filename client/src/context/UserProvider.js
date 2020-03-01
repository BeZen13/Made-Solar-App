import React, { useState, useContext } from 'react'
import axios from 'axios'
//import { ProposalContext } from '../context/ProposalProvider.js'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization=`Bearer ${token}`
    return config
})

export default function UserProvider(props){
    //const { getUserProposals } = useContext(ProposalContext)

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        leads: [],
        errMsg: ""
    }

    const [ userState, setUserState ] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then( res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    
    function login(credentials){
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                //getUserProposals()
                getUserLeads()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }


    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            leads: [userState.leads]
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }
   
    function getUserLeads(){
        userAxios.get("/api/lead/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    leads: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addLead(newLead){
        userAxios.post("/api/lead", newLead)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    leads: [...prevState.leads, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    
    function deleteLead(_id){
        userAxios.delete(`/api/lead/${_id}`)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    leads: []
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }


    return(
        <UserContext.Provider   
            value={{
                ...userState,
                signup,
                login,
                logout,
                addLead,
                deleteLead,
                resetAuthErr
            }}>
                { props.children }
            </UserContext.Provider>
    )
}