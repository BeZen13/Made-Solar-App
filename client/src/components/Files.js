import React, { useState } from 'react'
import axios from 'axios'



export default function Files(){
    const [stateUsage, setStateUsage] = useState([])
    const [theData, setTheData] = useState([])
    
    const clicked = (e) => {
        e.preventDefault()
        const deets = stateUsage
            console.log(deets)
            //take state info.
            // push to axios get request

            axios.get(`https://vschool-cors.herokuapp.com?url=http://api.eia.gov/series/?api_key=3823d2b0245a8eddfc5e575f02bd0451&series_id=ELEC.GEN.TSN-${deets}-8.A`)
                .then(res => {
                    setTheData(res.data.response.data)
                })
                .catch(err => console.log(err))
    
    }   
    
    
    
    return(
        <div className="refUno">
            <h1>Welcome to the Rep Ref page!</h1>

            
            <h2>Please enter the State you'd like Info For</h2>
            <h3>example (CA, WI, UT)</h3>

            <input className="stateEntry"
            type="text"
            value={stateUsage}
            placeholder="What state?"
            onChange={e => setStateUsage(e.target.value) }
            />
            <button onClick={clicked} className="find">Find It!</button>

            
            <p className="stateInfo">{theData.map(dataUno =>
                <p key={dataUno.i}>{dataUno.name}
                    <h3>Measured in Thousand Megawatts</h3>
                    <p>{dataUno.data}</p>

                <h3>This was updated: {dataUno.updated}</h3>
                </p>
            )}</p>

            <footer className="foot">Information Provided by: API.EIA.GOV</footer>
        </div>
        
    )
}