import React from 'react'
import { Link } from 'react-router-dom';
import '../../static/regVisa.css'

const RegVisaBox = (props) => {
    const {country} = props
    return (
        <div className="reg-visa-box-main container visa-type-card-container col-md-3 mb-4 my-3" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="card visa-type-card" style={{ overflow: "hidden", border: "1px solid #000", width: "30rem", height: '22rem', borderRadius: "10px" }}>
                <div className="d-flex justify-content-center align-items-center flex-column p-2" style={{ textAlign: "left", height: "100%", width: "100%" }}>
                    <div className="vtc-card-title p-3 d-flex justify-content-between align-items-start flex-column" style={{ width: "100%" }}>
                        <h5 className='my-3' style={{ fontSize: "20px", fontWeight: "500" }}>{country.country} Visa</h5>
                        <div style={{ height: "2px", width: "100%", backgroundColor: "#000" }}></div>
                    </div>
                    <div className="vtc-card-body px-2 d-flex justify-content-around align-items-start flex-column" style={{ flexBasis: "55%", height: "100%", width: "100%" }}>
                        <div>
                            <p style={{ fontStyle: "italic", fontSize: "16px", fontWeight: "400" }}>Sticker Visa / Non E-Visa </p>
                        </div>
                        <div>
                            <h5 style={{ fontSize: "20px", fontWeight: "500" }}>Rs. 3000 <span style={{ fontSize: "12px", color: "rgba(3, 21, 47, 1)", fontWeight: "500" }}>/person</span> </h5>
                        </div>
                    </div>
                    <div className="vtc-card-btn d-flex justify-content-center align-items-center flex-column" style={{ flexBasis: "20%", height: "100%", width: "100%" }}>
                        <Link to={{
                            pathname: `/regvisa/application/${country.country}/`
                        }}  state={country} className="vtcbb btn btn-light d-flex justify-content-center align-items-center flex-column" style={{ width: "240px", borderRadius: "30px", height: "55px", fontSize: "24px", color: "#fff" }}>Details</Link>

                        <div className="warning" style={{ textAlign: "center", padding: "10px 0", fontSize: "10px" }}>
                            <p style={{ textDecoration: "underline" }}>Please don't refresh the page after you click on details.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default RegVisaBox
