import React, { useRef, useContext } from 'react'
import PackageContext from '../../context/Package/PackageContext';
import { Swiper, SwiperSlide, } from 'swiper/react';
import '../../static/home.css'
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import '../../static/swipper.css';

import bg from '../../static/assets/clouds.png';
import { Link } from 'react-router-dom';


const HomeOurPackage = () => {

  const context = useContext(PackageContext);

  const { tours } = context
  const swiperRef = useRef(null);

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 2,
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    fontWeight: "500",
  };

  const images = tours

  return (
    <div className='hop-main d-flex justify-content-center align-items-center my-5' style={{ width: "100%", backgroundColor: "rgba(3, 21, 47, 1)" }}>
      <div className='d-flex justify-content-center align-items-center' style={{ height: "100%", width: "100%", backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
        <div className="overlay d-flex justify-content-center align-items-center" style={{ height: "100%", width: "100%", backgroundColor: 'rgba(3, 21, 47, 0.8)' }}>
          <div className="main-cont-packages d-flex justify-content-center align-items-center flex-column" style={{}}>
            <div className="pack-top d-flex justify-content-between align-items-center" style={{ flexBasis: "15%", width: "100%", height: "100%" }}>
              <div className="pt-txt-left m-2 d-flex justify-content-start align-items-center" style={{ flexBasis: "30%", height: "100%", width: "100%" }}>
                <h3 style={{ fontFamily: "Clash Display", color: "#fff" }}>Our Packages</h3>
              </div>
              <div className="pt-txt-right m-2 d-flex justify-content-end align-items-center" style={{ flexBasis: "70%", height: "100%" }}>
                <p style={{ fontWeight: "500", fontSize: "16px", linHeight: "57px", color: "#fff" }}>Explore custom travel packages designed for all types of travelers. Whether you crave adventure or relaxation, our packages offer something unique.  </p>
              </div>
            </div>
            <div className="pack-bottom d-flex justify-content-between" style={{ flexBasis: "70%", width: "100%", height: "100%" }}>
              <div className="pb-left m-2 d-flex justify-content-center align-items-center" style={{ height: "100px", width: "100px", position:"relative", top:"15px" }}>
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
              <div className="pb-right m-2" style={{ width: "100%" }}>
                <div className="pb-right-1 m-2 d-flex justify-content-center align-items-center" style={{ height: "100%", width: "100%" }}>
                  <Swiper
                    ref={swiperRef}
                    breakpoints={{
                      0: {
                        slidesPerView: 1.4,
                      },
                      601: {
                        slidesPerView: 3.8,
                      },
                    }}
                    spaceBetween={15}
                    className="mySwiper"
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index} style={{ backgroundColor: "#fff" }}>
                        <img id='hop-slid-card-img' src={image.img_url} alt={image.alt} style={{ width: "100%", position: "relative", top: "-90px", borderRadius: "10px", borderBottomLeftRadius: "0", borderBottomRightRadius: "0", objectFit: "cover" }} />
                        <div className="overlay py-4 my-3" style={overlayStyle}>
                          <div className='d-flex justify-content-center align-items-start flex-column' style={{ width: "90%" }}>

                            <h3 style={{ color: "#000", fontSize: "20px", fontWeight: "500", marginBottom:"0" }}>
                              {image.place !== "Leh & Nubra Valley"
                                ? `${image.place} Package`
                                : "Leh... Package"}
                            </h3>
                            {image.price && <p className='' style={{ fontWeight: "500", fontSize: "20px", marginBottom: "10px" }}>{image.price} <span style={{ fontSize: "12px", color: "rgba(134, 134, 134, 1)" }}> /person</span> </p>}
                            {!image.price && <p className='' style={{ fontWeight: "500", fontSize: "20px", marginBottom: "10px" }}>-<span style={{ fontSize: "12px", color: "rgba(134, 134, 134, 1)" }}> </span> </p>}
                          </div>
                          <div className="hop-btn d-flex align-items-center justify-content-center" style={{ height: "55px", width: "85%", borderRadius: "30px", border: "1px solid rgba(2, 71, 134, 1)" }}>
                            <Link to={{ pathname: `/package/application/${image.place}` }} style={{ fontSize: "16px", color: "rgba(2, 71, 134, 1)", textDecoration: "none", }}>See Package</Link>
                          </div>
                        </div>

                      </SwiperSlide>
                    ))}
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

export default HomeOurPackage
