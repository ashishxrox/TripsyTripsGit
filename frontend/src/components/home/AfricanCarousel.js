import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css';
import '../../static/fullVisa.css'

import Egypt from '../../static/assets/country/egypt.jpg'
import Ethiopia from '../../static/assets/country/ethiopia.jpeg'
import Madagascar from '../../static/assets/country/madagascar.jpeg'
import Morocco from '../../static/assets/country/morocco.jpeg'
import Rwanda from '../../static/assets/country/rwanda.jpg'
import Tanzania from '../../static/assets/country/tanzania.jpeg'

const AfricanCarousel = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const boxStyle = {
        backgroundColor: "#ccc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        fontWeight: "bold",
        height: "100%",
        width: "100%",
        position: "relative",  // Ensure position relative for overlay
        borderRadius: "5px",  // Rounded corners
        overflow: "hidden",  // Hide overflow for rounded corners
        flexBasis: "24%"
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.2)",  // Black tint with opacity
        zIndex: 2,  // Ensure overlay is above the image
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "#fff",
        fontFamily: "Clash Display",
        fontWeight: "300",
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper fullVisa"
            >
                <SwiperSlide className='d-flex justify-content-center align-items-center' style={{ }}>
                    <div className="swipe-slide-cont d-flex justify-content-between align-items-center flex-column" style={{ height: "95%", }}>
                        <div className="ssc-top d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "49%", height: "100%", width: "100%" }}>
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Egypt` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Egypt}
                                            alt="Egypt" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Egypt
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{left:"85px"}}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center" ></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Egypt` }}
                                                className="d-flex justify-content-center align-items-center"
                                                style={{
                                                    color: "#fff",
                                                    textDecoration: "none",
                                                    fontFamily: "Clash Display",
                                                    fontWeight: "200",
                                                    fontSize: "24px",
                                                }}
                                            >
                                                Visit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Ethiopia` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Ethiopia}
                                            alt="Ethiopia" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Ethiopia
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{left:"85px"}}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Ethiopian` }}
                                                className="d-flex justify-content-center align-items-center"
                                                style={{
                                                    color: "#fff",
                                                    textDecoration: "none",
                                                    fontFamily: "Clash Display",
                                                    fontWeight: "200",
                                                    fontSize: "24px",
                                                }}
                                            >
                                                Visit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Madagascar` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Madagascar}
                                            alt="Madagascar" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Madagascar
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{left:"85px"}}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Madagascar` }}
                                                className="d-flex justify-content-center align-items-center"
                                                style={{
                                                    color: "#fff",
                                                    textDecoration: "none",
                                                    fontFamily: "Clash Display",
                                                    fontWeight: "200",
                                                    fontSize: "24px",
                                                }}
                                            >
                                                Visit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Tanzania` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Tanzania}
                                            alt="Tanzania" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Tanzania
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{left:"85px"}}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Tanzania` }}
                                                className="d-flex justify-content-center align-items-center"
                                                style={{
                                                    color: "#fff",
                                                    textDecoration: "none",
                                                    fontFamily: "Clash Display",
                                                    fontWeight: "200",
                                                    fontSize: "24px",
                                                }}
                                            >
                                                Visit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="ssc-bottom  d-flex justify-content-start align-items-center flex-row" style={{ flexBasis: "49%", height: "100%", width: "100%" }}>
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Morocco` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Morocco}
                                            alt="Morocco" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Morocco
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{left:"85px"}}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Morocco` }}
                                                className="d-flex justify-content-center align-items-center"
                                                style={{
                                                    color: "#fff",
                                                    textDecoration: "none",
                                                    fontFamily: "Clash Display",
                                                    fontWeight: "200",
                                                    fontSize: "24px",
                                                }}
                                            >
                                                Visit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="ssct-left mx-3" to={{ pathname: `/visa/application/Rwanda` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Rwanda}
                                            alt="Rwanda" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Rwanda
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{left:"85px"}}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Rwanda` }}
                                                className="d-flex justify-content-center align-items-center"
                                                style={{
                                                    color: "#fff",
                                                    textDecoration: "none",
                                                    fontFamily: "Clash Display",
                                                    fontWeight: "200",
                                                    fontSize: "24px",
                                                }}
                                            >
                                                Visit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            
                        </div>

                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );

}

export default AfricanCarousel
