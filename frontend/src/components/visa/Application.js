import React from 'react'
import { useLocation } from 'react-router-dom'
import ImageBox from './ImageBox';
import Timeline from './Timeline';

import '../../static/application.css'
import ReqBox from './ReqBox';





const Application = () => {


    const location = useLocation();
    const country = location.state;
    const steps = [
        { title: "Step 1", description: "Choose your destination and visa" },
        { title: "Step 2", description: "Upload required documents and submit" },
        { title: "Step 3", description: "Complete payment and wait to hear from Tripsy Trips" }
    ]

    const subtitle = "In Just 3 Simple Steps"
    // console.log(location)
    // console.log(country)

    // const visaType = [
    //     {
    //         "name": "Abc Visa",
    //         "entry": "single",
    //         "validity": 60,
    //         "duration": 30,
    //         "processingTime": 5,
    //         "docsReq": {
    //             "doc1": "Passport Scan (Front and Back)",
    //             "doc2": "Pan Card",
    //             "doc3": "Passport Size Photo"
    //         },
    //         "totalCost": "6900"
    //     },
    //     {
    //         "name": "UAE Visa",
    //         "entry": "single",
    //         "validity": 60,
    //         "duration": 30,
    //         "processingTime": 5,
    //         "docsReq": {
    //             "doc1": "Passport Scan (Front and Back)",
    //             "doc2": "Pan Card",
    //             "doc3": "Passport Size Photo"
    //         },
    //         "totalCost": "6900"
    //     },
    //     {
    //         "name": "XYZ Visa",
    //         "entry": "single",
    //         "validity": 60,
    //         "duration": 30,
    //         "processingTime": 5,
    //         "docsReq": {
    //             "doc1": "Passport Scan (Front and Back)",
    //             "doc2": "Pan Card",
    //             "doc3": "Passport Size Photo"
    //         },
    //         "totalCost": "6900"
    //     },
    //     {
    //         "name": "PQR Visa",
    //         "entry": "single",
    //         "validity": 60,
    //         "duration": 30,
    //         "processingTime": 5,
    //         "docsReq": {
    //             "doc1": "Passport Scan (Front and Back)",
    //             "doc2": "Pan Card",
    //             "doc3": "Passport Size Photo"
    //         },
    //         "totalCost": "6900"
    //     },
    //     {
    //         "name": "LMNO Visa",
    //         "entry": "single",
    //         "validity": 60,
    //         "duration": 30,
    //         "processingTime": 5,
    //         "docsReq": {
    //             "doc1": "Passport Scan (Front and Back)",
    //             "doc2": "Pan Card",
    //             "doc3": "Passport Size Photo"
    //         },
    //         "totalCost": "6900"
    //     }
    // ]
    const visaType = country.visaType
    const evisa = visaType.eVisa
    return (
        <div>
            <div className="container" style={{ backgroundColor: "#fff" }}>
                <div className="row-1" >
                    <div className="col1 image-box" style={{ flexBasis: "50%" }}>
                        <ImageBox url={country.img_url} />
                    </div>

                </div>
                <div className="row2 country-header">
                    <div className="col3" style={{ textAlign: "center", color: "#fff", textShadow: "2px 2px 5px #000", fontFamily: "Lora", backgroundColor: "#000047", boxShadow: "5px 5px 15px #000" }}>
                        <h1 style={{}}>Tourist Visa for {country.country}</h1>
                    </div>
                </div>

                <div className="container row my-5 visa-types" style={{ width: "100%", alignItems: "center" }}>
                    {visaType.map((type, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <ReqBox type={type} country={country} />
                        </div>
                    ))}
                </div>
                {evisa === 'yes' && <div className="row4" >
                    <div className="col5"><Timeline steps={steps} subtitle={subtitle} /></div>
                </div>}


                <div className="row5" style={{ color: "black", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundColor: "#E8C81C", padding: "25px 0", cursor: "pointer", }}>
                    <h6>Not sure about applying? </h6>
                    <h6 style={{ textAlign: "center" }}>Contact us  </h6>
                    <div className="phone-numbers">
                        <p>+91 88888 77729</p>
                        <p>+91 88059 60110</p>
                        <p>+91 88280 66947</p>
                        <p>+91 81818 16662</p>
                        </div>
                    <h6 style={{ textAlign: "center" }}>or share your contact details, we will connect with you</h6>
                    <h3>Email your documents to us on</h3>
                    <a href="info@tripsytrips.com"><h4 style={{ letterSpacing: "5px" }}>info@tripsytrips.com</h4></a>
                    <h6>We'll get in touch as soon as possible</h6>
                </div>
            </div>
        </div>
    )
}

export default Application
