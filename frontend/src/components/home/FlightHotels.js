import React from 'react'

import '../../static/flightHotels.css'
import FilghtForm from '../contactForms/FilghtForm'
import HotelsForm from '../contactForms/HotelsForm'
import InsuranceForm from '../contactForms/InsuranceForm'

const FlightHotels = () => {
    return (
        <div className='action-boxes' style={{ backgroundColor: "white", padding: "60px 20px" }}>
            <div className="row1" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%" }}>
                <div className="col1"><div className="card" style={{ width: "15rem",height:"15rem", textAlign: "center", boxShadow: "10px 10px 15px", backgroundColor: "#000047" }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: "35px", color: "white" }}>Book Flights</h5>
                        <ion-icon name="airplane-outline" style={{ fontSize: "100px", color: "white" }}></ion-icon>
                        <FilghtForm/>
                    </div>
                </div></div>
                <div className="col2"><div className="card" style={{ width: "15rem",height:"15rem", textAlign: "center", boxShadow: "10px 10px 15px", backgroundColor: "#000047" }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: "35px", color: "white" }}>Book Hotels</h5>
                        <i className="fa-solid fa-hotel" style={{ fontSize: "100px", color: "white", padding: "5px 0" }}></i>
                        <HotelsForm/>
                    </div>
                </div></div>
                <div className="col3"><div className="card" style={{ width: "15rem",height:"15rem", textAlign: "center", boxShadow: "10px 10px 15px", backgroundColor: "#000047" }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: "35px", color: "white" }}>Travel Insurance</h5>
                        <ion-icon name="document-text-outline" style={{ fontSize: "65px", color: "white" }}></ion-icon><br />
                        <InsuranceForm/>
                    </div>
                </div></div>
            </div>

        </div>
    )
}

export default FlightHotels
