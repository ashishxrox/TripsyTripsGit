import React, { useContext } from 'react'

import '../../static/reqBox.css'

import { Link } from 'react-router-dom'

import FormDataContext from '../../context/FormData/FormDataContext'

const ReqBox = (props) => {

    const { type, country } = props
    const eVisa = country.eVisa

    const { setEvisa, setType } = useContext(FormDataContext)

    const handleClick = () => {
        setEvisa(eVisa);
        setType(type)
    }

    // console.log(eVisa)
    return (
        <div className="container visa-type-card-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="card visa-type-card" style={{ overflow: "hidden", border: "1px solid #000", width: "20rem", height: '28rem', borderRadius: "10px", boxShadow: "5px 5px 10px #000" }}>
                <div className="card-body" style={{ textAlign: "center" }}>
                    <h5 className="card-title visa-type-title" style={{ fontSize: "25px", color: "#000047", width: "125%", backgroundColor: "#e9ebf2", padding: "10px 10px", paddingRight: "40px" }}>{type.name}</h5>
                    {(eVisa ==='yes' && type.name !== 'Turkey Tourist Visa') && <div className="card-info-text" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <div className="card-info-text-left" style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "left" }}>
                            <p style={{ fontSize: "16px" }}>Processing Time:</p>
                            <p style={{ fontSize: "16px" }}>Duration:</p>
                            <p style={{ fontSize: "16px" }}>Validity:</p>
                            <p style={{ fontSize: "16px" }}>Entry:</p>
                            <p style={{ fontSize: "16px" }}>Total Cost:</p>
                        </div>
                        <div className="card-info-text-right" style={{ textAlign: "right" }}>
                            <p style={{ fontSize: "16px" }}>Upto Days {type.processingTime}</p>
                            <p style={{ fontSize: "16px" }}>{type.durationDays} Days</p>
                            <p style={{ fontSize: "16px" }}>{type.validityDays} Days</p>
                            <p style={{ fontSize: "16px" }}>{type.entry}</p>
                            <p style={{ fontSize: "20px", color: "#3488E8", fontWeight: "bold" }}>&#8377;{type.totalCost}</p>
                        </div>
                    </div>}
                    {(eVisa === 'no' || type.name === 'Turkey Tourist Visa') && <div className="card-info-text" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>
                        <div className="card-info-text-left" style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "left" }}>
                            {/* <p style={{ fontSize: "16px" }}>Processing Time:</p>
                            <p style={{ fontSize: "16px" }}>Duration:</p>
                            <p style={{ fontSize: "16px" }}>Validity:</p> */}
                            {/* <p style={{ fontSize: "16px" }}>Entry:</p> */}
                            <p style={{ fontSize: "16px" }}>Tripsy Trips Service Charge: </p>
                        </div>
                        <div className="card-info-text-right" style={{ textAlign: "right" }}>
                            {/* <p style={{ fontSize: "16px" }}>-</p>
                            <p style={{ fontSize: "16px" }}>-</p>
                            <p style={{ fontSize: "16px" }}>-</p> */}
                            {/* <p style={{ fontSize: "16px" }}>{type.entry}</p> */}
                            <p style={{ fontSize: "20px", color: "#3488E8", fontWeight: "bold" }}>&#8377;{type.totalCost}</p>
                        </div>
                    </div>}
                    <Link to={{
                        pathname: `/visa/application/${country.country}/${type.name}`
                    }} onClick={handleClick} className="btn btn-light" style={{ width: "100%", padding: "0px 40px", fontSize: "24px", color: "#fff", boxShadow: "5px 5px 10px #000", backgroundColor: "#000047", border: "1px solid #000047" }}>Details</Link>

                    <div className="warning" style={{textAlign:"center", padding:"10px 0", fontSize:"12px"}}>
                        <p style={{textDecoration:"underline"}}>Please dont refresh the page after you click on details.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReqBox
