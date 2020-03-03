import React, { useState } from 'react'
import axios from 'axios'
import solar1 from './solar1.jpg'



export default function Files(){
    const [stateUsage, setStateUsage] = useState([])
    const [theData, setTheData] = useState([])
    
    const clicked = (e) => {
        e.preventDefault()
        const deets = stateUsage
            console.log(deets)
            //take state info.
            //to axios get request

            axios.get(`https://vschool-cors.herokuapp.com?url=http://api.eia.gov/series/?api_key=3823d2b0245a8eddfc5e575f02bd0451&series_id=ELEC.GEN.TSN-${deets}-8.A`)
                .then(res=> {
                    console.log(res.data.series)
                    setTheData(res.data.series)
                })
                .catch(err => console.log(err))
    
    }  
    
    
    
    return(
        <div className="refUno" style={{ textAlign: "center"}}>
            <h1 style={{
                fontSize: "35px",
                marginBottom: "20px"
            }}>Welcome to the Rep Ref page!</h1>
            <span style= {{
                fontSize: "20px",
                marginBottom: "20px"
            }}>
                <a href="http://localhost:8888/download" style={{
                    textAlign: "center"
                }}>Download Financing Form || </a> 
                <a href="http://localhost:8888/download2" style={{
                    textAlign: "center"
                }}>Download Beginners Guide</a>
            </span>
            <h2 style={{
                marginTop: "20px"
            }}>Please enter the State (in caps) you'd like Info For</h2>
            <h3 style={{
                marginBottom: "20px"
            }}>example(CA, WI, UT)</h3>

            <input className="stateEntry"
            type="text"
            value={stateUsage}
            placeholder="What state?"
            onChange={e => setStateUsage(e.target.value)}
            />
            <button onClick={clicked} style={{
                marginBottom: "20px"
            }}>Find It!</button>


            
            <p className="stateInfo">{theData.map(dataUno =>
                <p key={dataUno.i}>{dataUno.name}
                    <h3>Measured in Thousand MegawattHours</h3><br/>
                <ul>
                    <li>{dataUno.data[0][0]}: {dataUno.data[0][1]}</li><br/>
                    <li>{dataUno.data[1][0]}: {dataUno.data[1][1]}</li><br/>
                    <li>{dataUno.data[2][0]}: {dataUno.data[2][1]}</li><br/>
                    <li>{dataUno.data[3][0]}: {dataUno.data[3][1]}</li><br/>
                    <li>{dataUno.data[4][0]}: {dataUno.data[4][1]}</li><br/>
                    <li>{dataUno.data[5][0]}: {dataUno.data[5][1]}</li><br/>
                </ul>

                <h3>This was updated: {dataUno.updated}</h3>
                </p>
            )}</p>

            <img src={solar1} className="pic"></img>
            
            <footer style={{
                position: "fixed",
                bottom: "0",
                width: "100%",
                backgroundColor: "slateblue"
            }}>Information Provided by: API.EIA.GOV</footer>
        </div>
        
    )
}