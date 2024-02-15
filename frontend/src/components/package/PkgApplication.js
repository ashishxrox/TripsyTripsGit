import React from 'react'
import { useLocation } from 'react-router-dom'
import PkgImg from './PkgImg'




import '../../static/application.css';

import '../../static/pkgApplication.css';
import Gallery from './Gallery';
import PackageForm from './PackageForm';





const Application = () => {


    const location = useLocation();
    const tour = location.state;
    const itenerary = tour.inclusion;
    return (
        <div>
            <div className="container" style={{ backgroundColor: "#fff" }}>
                <div className="row-1" >
                    <div className="col1 image-box" style={{ flexBasis: "50%" }}>
                        <PkgImg url={tour.img_url} />
                    </div>

                </div>
                <div className="row2 country-header">
                    <div className="col3" style={{ textAlign: "center", color: "#fff", textShadow: "2px 2px 5px #000", fontFamily: "Lora", backgroundColor: "#000047", boxShadow: "5px 5px 15px #000" }}>
                        <h1 style={{}}>Holiday Package for {tour.place}</h1>
                    </div>
                </div>
                <div className="container pkg-main-cont my-5">
                    <div className="pkg-main-cont-right">
                        <h3>Itinerary</h3>
                        <ul className="list-group list-group-flush">
                            {itenerary.map((item, index) => {
                                return <li className="list-group-item">{item}</li>
                            })}

                        </ul>
                    </div>
                </div>
                <div className="customize-box">
                    <div className="custom-box-cont" style={{ textAlign: "center" }}>
                        <h5>Want a customized tour? </h5>
                        <h3>Get in Touch!</h3>
                    </div>
                </div>
                <div className="" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "75px", fontWeight: "500", color: "#000047", position: "relative", top: "-25px" }}>
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
                <div className="pkg-form">
                    <PackageForm place={tour.place} />
                </div>
                <div className="gallery-head" style={{ textAlign: "center", width: "100%" }}>
                    <h3 style={{ fontSize: "42px", fontFamily: "Oswald" }}>Gallery</h3>
                    <div className="hover">
                        <h5>Hover to see Images</h5>
                    </div>
                    <div className="click">
                        <h5>Click to see Images</h5>
                    </div>
                </div>

                <div className="gallery-container">


                    <Gallery />
                </div>



                <div className="row5" style={{ color: "black", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundColor: "#E8C81C", padding: "25px 0" }}>
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
