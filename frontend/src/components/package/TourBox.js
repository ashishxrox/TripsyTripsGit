import React from 'react'
import { Link } from 'react-router-dom'

import '../../static/tourBox.css'
import PackageForm from './PackageForm';


const CountryBox = (props) => {
    const { tour } = props;
    // console.log(tour)
    const overlayStyle = {
        position: "absolute",
        top: '-10px',
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 2,
        display: "flex",
        justifyContent: "end",
        alignItems: "start",
        flexDirection: "column",
        textAlign: "center",
        fontWeight: "500",
    };


    return (
        <div className='col-12 col-md-6 col-lg-3 mb-5 d-flex justify-content-start align-items-start' style={{ }}>
            <div className="card tour-card d-flex justify-content-around align-items-center" style={{height:"32rem", background: "#fff", paddingLeft: "0", paddingRight: "0", overflow:"hidden",border:"0.5px solid #808080" }}>
                <img src={tour.img_url} alt={tour.place} style={{ height: "70%", width: "100%", borderRadius: "5px", position: "relative", top: "-90px", borderRadius: "3px", objectFit: "cover" }} />
                <div className=" mx-4" style={overlayStyle}>
                    
                <h3 style={{ color: "#000", fontSize: "20px", fontWeight: "500", marginBottom:"0" }}>
                              {tour.place !== "Leh & Nubra Valley"
                                ? `${tour.place} Package`
                                : "Leh & ... Package"}
                            </h3>
                    {tour.price && <p className='d-flex align-items-center' style={{ fontWeight: "500", fontSize: "20px" }}>Rs. {tour.price} <span style={{ fontSize: "12px", color: "rgba(134, 134, 134, 1)" }}> /person</span> </p>}
                    {!tour.price && <p className='d-flex align-items-center' style={{ fontWeight: "500", fontSize: "20px" }}> -<span style={{ fontSize: "12px", color: "rgba(134, 134, 134, 1)" }}> </span> </p>}
                    <div className="hop-btn d-flex align-items-center justify-content-center" style={{ height: "55px", width: "80%", borderRadius: "30px", border: "1px solid rgba(2, 71, 134, 1)" }}>
                        <Link to={{pathname: `/package/application/${tour.place}`}}  style={{ fontSize: "16px", color: "rgba(2, 71, 134, 1)", textDecoration: "none" }}>See Package</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


{/* <Link to={{
    
}} state={tour}
    className="btn btn-primary" style={{ backgroundColor: "#000047", color: "#fff", textShadow: "none", border: "1px solid #000047", boxShadow: "2px 2px 5px #000", width: "100%" }}>Apply Now</Link> */}
export default CountryBox




