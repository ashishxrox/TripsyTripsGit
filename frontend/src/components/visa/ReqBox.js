import React, { useContext, useEffect } from 'react'
import '../../static/reqBox.css'
import { Link } from 'react-router-dom'
import FormDataContext from '../../context/FormData/FormDataContext'

const ReqBox = (props) => {
    const { type, country } = props
    const eVisa = country.eVisa

    const { setEvisa, setType } = useContext(FormDataContext)

    useEffect(() => {
        setEvisa(null)
        setType(null)
    }, [setEvisa, setType])

    const handleClick = () => {
        setEvisa(eVisa)
        setType(type)
    }

    return (
        <div className="container visa-type-card-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="card visa-type-card" style={{ overflow: "hidden", border: "1px solid #000", width: "30rem", height: '28rem', borderRadius: "10px" }}>
                <div className="d-flex justify-content-center align-items-center flex-column p-2" style={{ textAlign: "left", height: "100%", width: "100%" }}>
                    <div className="vtc-card-title p-3 d-flex justify-content-between align-items-start flex-column" style={{ flexBasis: "25%", height: "100%", width: "100%" }}>
                        <h5 style={{ fontSize: "20px", fontWeight: "500" }}>{type.name}</h5>
                        <div style={{ height: "2px", width: "100%", backgroundColor: "#000" }}></div>
                    </div>
                    <div className="vtc-card-body px-2 d-flex justify-content-around align-items-start flex-column" style={{ flexBasis: "55%", height: "100%", width: "100%" }}>
                        <div>
                            <p style={{ fontStyle: "italic", fontSize: "16px", fontWeight: "400" }}>Processing Time - {type.processingTime} working {type.processingTime === '1' ? 'day' : 'days'}</p>
                            <h5 style={{ fontSize: "16px", fontWeight: "500" }}>Duration - {type.durationDays} {type.durationDays === '1' ? 'day' : 'days'} </h5>
                            <h5 style={{ fontSize: "16px", fontWeight: "500" }}>Validity - {type.validityDays} {type.validityDays === '1' ? 'day' : 'days'} </h5>
                            <p style={{ fontStyle: "italic", fontSize: "16px", fontWeight: "400" }}>Entry - {type.entry}</p>
                        </div>
                        <div>
                            <h5 style={{ fontSize: "20px", fontWeight: "500" }}>Rs. {type.totalCost} <span style={{ fontSize: "12px", color:"rgba(3, 21, 47, 1)",fontWeight: "500" }}>/person</span> </h5>
                        </div>
                    </div>
                    <div className="vtc-card-btn d-flex justify-content-center align-items-center flex-column" style={{ flexBasis: "20%", height: "100%", width: "100%" }}>
                        <Link to={{
                            pathname: `/visa/application/${country.country}/${type.name}`
                        }} onClick={handleClick} className="vtcbb btn btn-light d-flex justify-content-center align-items-center flex-column" style={{ width: "240px", borderRadius:"30px",height:"55px", fontSize: "16px", color: "#fff", fontFamily:"General Sans" }}>Apply Now</Link>

                        <div className="warning" style={{ textAlign: "center", padding: "10px 0", fontSize: "10px" }}>
                            <p style={{ textDecoration: "underline" }}>Please don't refresh the page after you click on details.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReqBox
