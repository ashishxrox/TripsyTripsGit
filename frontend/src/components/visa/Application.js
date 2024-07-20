import React, { useEffect, useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import '../../static/application.css'
import ReqBox from './ReqBox';

import ReactGA from 'react-ga';

import VisaContext from '../../context/Visa/VisaContext';
import Faq from '../Faq/Faq';
import VisaBanner from './VisaBanner';

import '../../static/visa.css'
import FaqContext from '../../context/FaqCont/FaqContext';





const Application = () => {

    const {genFaq} = useContext(FaqContext)


    const location = useLocation();
    useEffect(() => {
        ReactGA.initialize('G-QTRPBPD2RZ'); // Initialize ReactGA with your Measurement ID
        ReactGA.pageview(window.location.pathname + window.location.search); // Track page views

    }, []);

    const { countryName } = useParams();
    console.log(countryName)

    const { countries } = useContext(VisaContext)

    const country = countries.filter(data => data.country === countryName);



    const steps = [
        { title: "Step 1", description: "Choose your destination and visa" },
        { title: "Step 2", description: "Upload required documents and submit" },
        { title: "Step 3", description: "Complete payment and wait to hear from Tripsy Trips" }
    ]

    const subtitle = "In Just 3 Simple Steps"

    // console.log(location)


    const visaType = country[0].visaType
    const evisa = country[0].eVisa
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <VisaBanner />
                <div className="visat-title my-3 d-flex justify-content-start align-items-start flex-column" style={{ width: "90%", backgroundColor: "#fff" }}>
                    <div className="vt-head-box my-1 d-flex justify-content-start align-items-end" style={{ height: "80%" }}>
                        <h3 style={{fontFamily:"Clash Display", fontWeight:"500px"}}>{country[0].country} Tourist Visa</h3>
                    </div>
                    <div className="vt-options-box my-1 d-flex justify-content-start align-items-center" style={{height: "100%"}}>
                        <h6 style={{fontFamily:"Clash Display", fontWeight:"500px"}}>Types of visas</h6>
                    </div>
                </div>
                <div className="vt-main-cont d-flex justify-content-center align-items-center" style={{ width: "100%", padding: "0 75px" }}>
                    <div className="row" style={{ width: "100%"}}>
                        {visaType.map((type, index) => (
                            <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex" style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                                <ReqBox type={type} country={country[0]} />
                            </div>
                        ))}
                    </div>

                </div>
                {/* <div className="row2 country-header">
                    <div className="col3" style={{ textAlign: "center", color: "#fff", textShadow: "2px 2px 5px #000", fontFamily: "Lora", backgroundColor: "#000047", boxShadow: "5px 5px 15px #000" }}>
                        <h1 style={{}}>Tourist Visa for {country[0].country}</h1>
                    </div>
                </div> */}

                {/* <div className="container row my-5 visa-types" style={{ width: "100%", alignItems: "center" }}>
                    {visaType.map((type, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <ReqBox type={type} country={country[0]} />
                        </div>
                    ))}
                </div> */}




            </div>
            <Faq content={genFaq} />
        </div>

    )
}

export default Application
