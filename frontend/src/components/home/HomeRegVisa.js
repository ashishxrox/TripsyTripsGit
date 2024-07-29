import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import VisaContext from '../../context/Visa/VisaContext';
import '../../static/home.css'

// import homeReg from '../../static/assets/homeReg.png'


const HomeRegVisa = () => {

    const context = useContext(VisaContext);

    const { regVisaCountries } = context;
    const canadaData = regVisaCountries.find(visa => visa.country === "Canada");
    const australiaData = regVisaCountries.find(visa => visa.country === "Australia");
    const turkeyData = regVisaCountries.find(visa => visa.country === "Turkey");
    const ukData = regVisaCountries.find(visa => visa.country === "United Kingdom");
    const taiwanData = regVisaCountries.find(visa => visa.country === "Taiwan");
    const usaData = regVisaCountries.find(visa => visa.country === "United States of America");

    return (
        <div className='hrv-main d-flex justify-content-center align-items-center' style={{ width: "100%" }}>
            <div className="hrv-main-cont d-flex justify-content-around align-items-center flex-column" style={{borderRadius:"30px" }}>
                <div className="hrv-top d-flex" style={{ height: "100%", width: "100%" }}>
                    <div className="hrvt-box px-4 d-flex flex-column justify-content-center" style={{ height: "100%" }}>
                        <h2 style={{ fontSize: "46px", fontWeight: "500", fontFamily: "Clash Display", color: "#fff" }}>Sticker Visa</h2>
                        <p style={{ fontSize: "16px", fontWeight: "500", color: "#fff" }}>Seamless visa assistance for every adventure!</p>
                        <Link to="/regVisa" className='hrvtb-link d-flex justify-content-center align-items-center' style={{ padding: "14px 15px", width: "215px", borderRadius: "30px", color: "#fff", textDecoration: "none" }}>Check out Sticker Visa</Link>
                    </div>
                </div>
                <div className="hrv-bottom-desk justify-content-end align-items-center" style={{ flexBasis: "15%", height: "100%", width: "100%" }}>
                    <ul style={{ width: "70%", height: "100%", listStyleType: "none", color: "#fff" }} className='d-flex justify-content-around align-items-center flex-row'>
                        <li><Link to={{
                            pathname: "/regvisa/application/Australia/"
                        }} state={australiaData} style={{ color: "#fff",}}>Australia</Link> </li>
                        <li><Link to={{
                            pathname: "/regvisa/application/Turkey/"
                        }} state={turkeyData} style={{ color: "#fff", }}>Turkey</Link> </li>
                        <li><Link to={{
                            pathname: "/regvisa/application/United Kingdom/"
                        }} state={ukData} style={{ color: "#fff", }}>United Kingdom</Link> </li>
                        <li><Link to={{
                            pathname: "/regvisa/application/Taiwan/"
                        }} state={taiwanData} style={{ color: "#fff", }}>Taiwan</Link> </li>
                        <li><Link to={{
                            pathname: "/regvisa/application/Canada/"
                        }} state={canadaData} style={{ color: "#fff",}}>Canada</Link> </li>
                        <li><Link to={{
                            pathname: "/regvisa/application/United States of America/"
                        }} state={usaData} style={{ color: "#fff", }}>United States of America</Link> </li>
                        <li><Link to="/regVisa" style={{ color: "#fff", }}>& More</Link> </li>
                    </ul>
                </div>
                <div className="hrv-bottom-mob  justify-content-center align-items-center" style={{ flexBasis: "15%", height: "100%", width: "100%" }}>
                    <ul  style={{ width: "100%", height: "100%", listStyleType: "none", color: "#fff" }} className='d-flex justify-content-around align-items-center flex-column'>
                        <div style={{width:"100%", marginRight:"40px"}} className='d-flex justify-content-around align-items-center flex-row'>
                            <li><Link to={{
                                pathname: "/regvisa/application/Australia/"
                            }} state={australiaData} style={{ color: "#fff" }}>Australia</Link> </li>
                            <li><Link to={{
                                pathname: "/regvisa/application/Turkey/"
                            }} state={turkeyData} style={{ color: "#fff"}}>Turkey</Link> </li>
                            <li><Link to={{
                                pathname: "/regvisa/application/Canada/"
                            }} state={canadaData} style={{ color: "#fff"}}>Canada</Link> </li>
                             <li><Link to={{
                                pathname: "/regvisa/application/Taiwan/"
                            }} state={taiwanData} style={{ color: "#fff" }}>Taiwan</Link> </li>
                        </div>
                        <div style={{width:"100%", marginRight:"40px"}} className='d-flex justify-content-around align-items-center flex-row'>
                           
                            
                            <li><Link to={{
                                pathname: "/regvisa/application/United States of America/"
                            }} state={usaData} style={{ color: "#fff" }}>The United States of America</Link> </li>
                            <li><Link to="/regVisa" style={{ color: "#fff" }}>& More</Link> </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeRegVisa
