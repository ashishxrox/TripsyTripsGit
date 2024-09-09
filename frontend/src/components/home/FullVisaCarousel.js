import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css';
import '../../static/fullVisa.css'

import Vietnam from '../../static/assets/country/vietnam.jpeg'
import HongKong from '../../static/assets/country/hongKong.jpg'
import Azerbaijan from '../../static/assets/country/azerbaijan.jpeg'
import Bahrain from '../../static/assets/country/bahrain.webp'
import Combodia from '../../static/assets/country/cambodia.jpg'
import UAE from '../../static/assets/country/dubai.jpg'
import Egypt from '../../static/assets/country/egypt.jpg'
import Ethiopia from '../../static/assets/country/ethiopia.jpeg'
import Georgia from '../../static/assets/country/georgia.jpeg'
import Indonesia from '../../static/assets/country/bali.jpeg'
import Jordan from '../../static/assets/country/jordan.jpeg'
import Kyrgyzstan from '../../static/assets/country/kyrgyzstan.jpeg'
import Lanka from '../../static/assets/country/lanka.jpg'
import Madagascar from '../../static/assets/country/madagascar.jpeg'
import Moldova from '../../static/assets/country/moldova.jpeg'
import Mongolia from '../../static/assets/country/mongolia.jpeg'
import Morocco from '../../static/assets/country/morocco.jpeg'
import Oman from '../../static/assets/country/oman.jpeg'
import Qatar from '../../static/assets/country/qatar.jpeg'
import Russia from '../../static/assets/country/russia.jpeg'
import Rwanda from '../../static/assets/country/rwanda.jpeg'
import Saudi from '../../static/assets/country/saudi.jpeg'
import Tanzania from '../../static/assets/country/tanzania.jpeg'
import Laos from '../../static/assets/country/laos.jpeg'
import Turkey from '../../static/assets/country/turkeyNew.jpg'




const FullVisaCarousel = () => {

    const pagination = {
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet">${index + 1}</span>`;
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
                <SwiperSlide className='d-flex justify-content-between align-items-center' style={{ }}>
                    <div className="swipe-slide-cont d-flex justify-content-between align-items-center flex-column" style={{ height: "95%", width: "100%" }}>
                        <div className="ssc-top d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "49%", height: "100%", width: "100%" }}>
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Vietnam` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Vietnam}
                                            alt="Vietnam" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Vietnam
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{  }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Vietnam` }}
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Azerbaijan` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Azerbaijan}
                                            alt="Azerbaijan" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Azerbaijan
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{  }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Azerbaijan` }}
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

                            <Link className="ssct-left " to={{ pathname: `/visa/application/United Arab Emirates` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={UAE}
                                            alt="UAE" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            United Arab Emirates
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/United Arab Emirates` }}
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
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
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

                        </div>
                        <div className="ssc-bottom  d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "49%", height: "100%", width: "100%" }}>

                            {/* <Link className="ssct-left " to={{ pathname: `/visa/application/Sri Lanka` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Lanka}
                                            alt="Lanka" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Sri Lanka
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ left: "85px" }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Sri Lanka` }}
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
                            </Link> */}
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Turkey` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Turkey}
                                            alt="Lanka" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Turkey
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Turkey` }}
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
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
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

                            <Link className="ssct-left " to={{ pathname: `/visa/application/Bahrain` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Bahrain}
                                            alt="Bahrain" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Bahrain
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{}}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Bahrain` }}
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Oman` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Oman}
                                            alt="Oman" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Oman
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Oman` }}
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
                <SwiperSlide className='d-flex justify-content-between align-items-center' style={{ }}>
                    <div className="swipe-slide-cont d-flex justify-content-between align-items-center flex-column" style={{ height: "95%", width: "100%" }}>
                        <div className="ssc-top d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "49%", height: "100%", width: "100%" }}>
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Cambodia` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Combodia}
                                            alt="Combodia" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Combodia
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Cambodia` }}
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
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Vietnam` }}
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Mongolia` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Mongolia}
                                            alt="Mongolia" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Mongolia
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Mongolia` }}
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Russia` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Russia}
                                            alt="Russia" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Russia
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Russia` }}
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
                        <div className="ssc-bottom  d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "49%", height: "100%", width: "100%" }}>
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
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Ethiopia` }}
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Georgia` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Georgia}
                                            alt="Georgia" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Georgia
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Georgia` }}
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Indonesia` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Indonesia}
                                            alt="Indonesia" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Indonesia
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{}}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Indonesia` }}
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Rwanda` }} style={boxStyle}>
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
                                    <div className="visit-btn justify-content-center align-items-center" style={{}}>
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
                <SwiperSlide className='d-flex justify-content-between align-items-center' style={{ }}>
                    <div className="swipe-slide-cont d-flex justify-content-between align-items-center flex-column" style={{ height: "95%", width: "100%" }}>
                        <div className="ssc-top d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "48%", height: "100%", width: "100%" }}>
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Jordan` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Jordan}
                                            alt="Jordan" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Jordan
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Jordan` }}
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Moldova` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Moldova}
                                            alt="Moldova" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Moldova
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Moldova` }}
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Hong Kong` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={HongKong}
                                            alt="HongKong" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Hong Kong
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Hong Kong` }}
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Qatar` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Qatar}
                                            alt="Qatar" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Qatar
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{}}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Qatar` }}
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
                        <div className="ssc-bottom  d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "48%", height: "100%", width: "100%" }}>
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Kyrgzstan` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Kyrgyzstan}
                                            alt="Kyrgzstan" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Kyrgzstan
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{  }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Kyrgzstan` }}
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Laos` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Laos}
                                            alt="Laos" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Laos
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Laos` }}
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
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
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
                            <Link className="ssct-left " to={{ pathname: `/visa/application/Saudi Arabia` }} style={boxStyle}>
                                <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                                    <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                                        <img
                                            src={Saudi}
                                            alt="Saudi Arabia" // Use box.title as the alt text for better accessibility
                                            style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                                        />
                                        <div className="overlay py-4" style={overlayStyle}>
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                            Saudi Arabia
                                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                                        </div>
                                    </div>
                                    <div className="visit-btn justify-content-center align-items-center" style={{ }}>
                                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                                        <div
                                            className="link-container d-flex justify-content-center align-items-center"
                                            style={{ position: "absolute", zIndex: "9999" }}
                                        >
                                            <Link
                                                to={{ pathname: `/visa/application/Saudi Arabia` }}
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

export default FullVisaCarousel
