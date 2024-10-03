import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import '../../static/home.css'

import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import '../../static/swipper.css';
import '../../static/countryBox.css';

import bg from '../../static/assets/clouds.png'
import Lanka from '../../static/assets/country/sriLanka.jpeg'
import Vietnam from '../../static/assets/country/vietnam.jpeg'
import Bahrain from '../../static/assets/country/bahrain.jpeg'
import HongKong from '../../static/assets/country/hongKong.jpeg'
import Uae from '../../static/assets/country/dubai.jpeg'
import Turkey from '../../static/assets/country/turkey.jpeg'



const PlaceToVisit = () => {

  const swiperRef = useRef(null);

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))",
    zIndex: 2,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "#fff",
    
  };


  return (
    <div className='ptv-main d-flex justify-content-center align-items-center my-4' style={{ width: "100%", backgroundColor: "rgba(3, 21, 47, 1)" }}>
      <div className='d-flex justify-content-center align-items-center' style={{ height: "100%", width: "100%", backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
        <div className="overlay d-flex justify-content-center align-items-center" style={{ height: "100%", width: "100%", backgroundColor: 'rgba(3, 21, 47, 0.8)' }}>
          <div className="main-cont-places d-flex justify-content-center align-items-center flex-column" style={{ width: "90%", position:"relative",}}>
            <div className="pack-top d-flex justify-content-between align-items-center " style={{ flexBasis: "15%", width: "100%", height: "100%" }}>
              <div className="pt-txt-left m-2 d-flex justify-content-start align-items-center" style={{ flexBasis: "30%", height: "100%", width: "100%" }}>
                <h3 style={{ fontFamily: "Clash Display", color: "#fff" }}>Places to visit</h3>
              </div>
              <div className="pt-txt-right m-2 d-flex justify-content-end align-items-center" style={{ flexBasis: "70%", height: "100%" }}>
                <p style={{ fontWeight: "500", fontSize: "16px", linHeight: "57px", color: "#fff" }}>Explore custom travel packages designed for all types of travelers. Whether you crave adventure or relaxation, our packages offer something unique.  </p>
              </div>
            </div>
            <div className="pack-bottom d-flex justify-content-between " style={{ flexBasis: "65%", width: "100%"}}>
              <div className="pb-left ptvb-left m-2 d-flex justify-content-center align-items-center" style={{ height: "150px", width: "100px"}}>
                <button onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                  <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="54" height="53" stroke="white" />
                    <path d="M16.5404 26.5404C16.2865 26.7942 16.2865 27.2058 16.5404 27.4596L20.677 31.5962C20.9308 31.85 21.3424 31.85 21.5962 31.5962C21.85 31.3424 21.85 30.9308 21.5962 30.677L17.9192 27L21.5962 23.323C21.85 23.0692 21.85 22.6576 21.5962 22.4038C21.3424 22.15 20.9308 22.15 20.677 22.4038L16.5404 26.5404ZM38 26.35L17 26.35L17 27.65L38 27.65L38 26.35Z" fill="white" />
                  </svg>
                </button>
                <button onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                  <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="54.5" y="53.5" width="54" height="53" transform="rotate(180 54.5 53.5)" stroke="white" />
                    <path d="M38.4596 27.4596C38.7135 27.2058 38.7135 26.7942 38.4596 26.5404L34.323 22.4038C34.0692 22.15 33.6576 22.15 33.4038 22.4038C33.15 22.6576 33.15 23.0692 33.4038 23.323L37.0808 27L33.4038 30.677C33.15 30.9308 33.15 31.3424 33.4038 31.5962C33.6576 31.85 34.0692 31.85 34.323 31.5962L38.4596 27.4596ZM17 27.65L38 27.65L38 26.35L17 26.35L17 27.65Z" fill="white" />
                  </svg>
                </button>
              </div>
              <div className="pb-right-2 m-2" style={{  width: "100%" }}>
                <div className="pb-right m-2 d-flex justify-content-center align-items-center" style={{ height: "85%", width: "100%" }}>
                  <Swiper
                    ref={swiperRef}
                    breakpoints={{
                      0: {
                        slidesPerView: 1.5,
                      },
                      601: {
                        slidesPerView: 4.2,
                      },
                    }}
                    spaceBetween={15}
                    className="mySwiper"
                  >
                    {/* <SwiperSlide>
                      <div className='card-hover' style={{ height: "101%", width: "100%" }}>
                        <Link to={{ pathname: `/visa/application/Sri Lanka`}} className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                          <img src={Lanka} alt="Sri Lanka" style={{ height: "100%", width: "100%", borderRadius: "5px" }} />
                          <div className="overlay py-4" style={overlayStyle}>
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                            Sri Lanka
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                          </div>
                        </Link>

                        <div className="visit-btn justify-content-center align-items-center">
                          <div className='visit-btn-bdr d-flex justify-content-center align-items-center'>

                          </div>
                          <div className="link-container" style={{ position: "absolute", zIndex: "9999" }}>
                            <Link style={{ color: "#fff", textDecoration: "none", fontFamily: "Clash Display", fontWeight: "200", fontSize: "24px" }} to={{ pathname: `/visa/application/Sri Lanka` }}>
                              Visit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide> */}
                    <SwiperSlide>
                      <div className='card-hover' style={{ height: "101%", width: "100%" }}>
                        <Link to={{ pathname: `/visa/application/Vietnam` }} className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                          <img src={Vietnam} alt="Vietnam" style={{ height: "100%", width: "100%", borderRadius: "5px" }} />
                          <div className="overlay py-4" style={overlayStyle}>
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                            Vietnam
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                          </div>
                        </Link>

                        <div className="visit-btn justify-content-center align-items-center">
                          <div className='visit-btn-bdr d-flex justify-content-center align-items-center'>

                          </div>
                          <div className="link-container" style={{ position: "absolute", zIndex: "9999" }}>
                            <Link style={{ color: "#fff", textDecoration: "none", fontFamily: "Clash Display", fontWeight: "200", fontSize: "24px" }} to={{ pathname: `/visa/application/Vietnam` }}>
                              Visit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='card-hover' style={{ height: "101%", width: "100%" }}>
                        <Link to={{ pathname: `/visa/application/Bahrain` }} className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                          <img src={Bahrain} alt="Bahrain" style={{ height: "100%", width: "100%", borderRadius: "5px" }} />
                          <div className="overlay py-4" style={overlayStyle}>
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                            Bahrain
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                          </div>
                        </Link>

                        <div className="visit-btn justify-content-center align-items-center">
                          <div className='visit-btn-bdr d-flex justify-content-center align-items-center'>

                          </div>
                          <div className="link-container" style={{ position: "absolute", zIndex: "9999" }}>
                            <Link style={{ color: "#fff", textDecoration: "none", fontFamily: "Clash Display", fontWeight: "200", fontSize: "24px" }} to={{ pathname: `/visa/application/Bahrain` }}>
                              Visit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='card-hover' style={{ height: "101%", width: "100%" }}>
                        <Link to={{ pathname: `/visa/application/Hong Kong` }} className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                          <img src={HongKong} alt="Hong Kong" style={{ height: "100%", width: "100%", borderRadius: "5px" }} />
                          <div className="overlay py-4" style={overlayStyle}>
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                            Hong Kong
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                          </div>
                        </Link>

                        <div className="visit-btn justify-content-center align-items-center">
                          <div className='visit-btn-bdr d-flex justify-content-center align-items-center'>

                          </div>
                          <div className="link-container" style={{ position: "absolute", zIndex: "9999" }}>
                            <Link style={{ color: "#fff", textDecoration: "none", fontFamily: "Clash Display", fontWeight: "200", fontSize: "24px" }} to={{ pathname: `/visa/application/Hong Kong` }}>
                              Visit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                      <div className='card-hover' style={{ height: "101%", width: "100%" }}>
                        <Link to={{ pathname: `/visa/application/United Arab Emirates` }} className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                          <img src={Uae} alt="UAE" style={{ height: "100%", width: "100%", borderRadius: "5px" }} />
                          <div className="overlay py-4" style={overlayStyle}>
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                            United Arab Emirates
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                          </div>
                        </Link>

                        <div className="visit-btn justify-content-center align-items-center">
                          <div className='visit-btn-bdr d-flex justify-content-center align-items-center'>

                          </div>
                          <div className="link-container" style={{ position: "absolute", zIndex: "9999" }}>
                            <Link style={{ color: "#fff", textDecoration: "none", fontFamily: "Clash Display", fontWeight: "200", fontSize: "24px" }} to={{ pathname: `/visa/application/United Arab Emirates` }}>
                              Visit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide> */}
                    <SwiperSlide>
                      <div className='card-hover' style={{ height: "101%", width: "100%" }}>
                        <Link to={{ pathname: `/visa/application/Turkey` }} className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                          <img src={Turkey} alt="Turkey" style={{ height: "100%", width: "100%", borderRadius: "5px" }} />
                          <div className="overlay py-4" style={overlayStyle}>
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                            Turkey
                            <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                          </div>
                        </Link>

                        <div className="visit-btn justify-content-center align-items-center">
                          <div className='visit-btn-bdr d-flex justify-content-center align-items-center'>

                          </div>
                          <div className="link-container" style={{ position: "absolute", zIndex: "9999" }}>
                            <Link style={{ color: "#fff", textDecoration: "none", fontFamily: "Clash Display", fontWeight: "200", fontSize: "24px" }} to={{ pathname: `/visa/application/Turkey` }}>
                              Visit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceToVisit

