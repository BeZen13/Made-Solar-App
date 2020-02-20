import React, { useState } from 'react'
import axios from 'axios'

export const ProposalContext = React.createContext()

const proposalAxios = axios.create()

export default function ProposalProvider(props){
    const initState = {
        proposals: []
    }
    const [ propState, setPropState ] = userState(initState)

    function getUserProposals(){
        proposalAxios.get("api/proposal/user")
            .then(res => {
                setPropState(prevPropState => ({
                    ...prevPropState,
                    proposals: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addProposal(newProposal){
        proposalAxios.post("api/proposal", newProposal)
            .then(res => {
                setProposalState(res => ({
                    ...prevState,
                    proposals: [...[prevState.proposals, res.data]]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <ProposalContext.Provider 
            value={{
                ...propState,
                addProposal,
                getUserProposals
            }}>
                { props.children }
            </ProposalContext.Provider>
    )
}