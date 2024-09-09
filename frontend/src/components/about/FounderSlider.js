import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

import '../../static/founder.css'

import Gaurav from '../../static/assets/founders/gaurav.jpeg'
import Khush from '../../static/assets/founders/khush.jpeg'
import Karan from '../../static/assets/founders/karan.jpeg'
import Manish from '../../static/assets/founders/manish.jpeg'

const FounderSlider = () => {

    const swiperRef = useRef(null);

    return (
        <div className=' d-flex justify-content-between align-items-center flex-column' style={{ height: "85%", width: "90%" }}>
            <h2 className='founder-title' style={{ fontWeight: "500", fontFamily: "Clash Display" }}>A Word From Our Founders</h2>
            <div className="founder-slider-cont" style={{ width: "100%" }}>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    loop={true}
                    className="mySwiper">
                    <SwiperSlide className='d-flex justify-content-around align-items-center flex-column'>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(205, 205, 205, 1)" }}></div>
                        <div className='founder-c-main-div d-flex justify-content-around align-items-center' style={{ height: "95%", width: "100%" }}>
                            <div className='founder-img' style={{ height: "80%", backgroundImage: `url("${Gaurav}")`, backgroundSize: "cover", backgroundPosition: "center" }}>

                            </div>
                            <div className='founder-line' style={{ width: "1px", }}></div>
                            <div className='d-flex justify-content-center align-items-center founder-content' style={{}}>
                                <div className='founder-annotate d-flex flex-column justify-content-end align-items-start' style={{ height: "100%", width: "80%" }}>
                                    <div style={{ position: "relative" }}>
                                        <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.8758 0L12.1118 29.1039L10.2484 20.7885C13.2505 20.7885 15.735 21.6487 17.7019 23.3692C19.6687 25.0896 20.6522 27.3835 20.6522 30.2509C20.6522 33.1183 19.6687 35.46 17.7019 37.276C15.735 39.092 13.3023 40 10.4037 40C7.40166 40 4.91718 39.092 2.95031 37.276C0.983437 35.3644 0 33.0227 0 30.2509C0 29.2951 0.0517596 28.3871 0.155279 27.5269C0.362319 26.6667 0.672877 25.6631 1.08696 24.5161C1.50103 23.2736 2.07039 21.7921 2.79503 20.0717L10.0932 0H19.8758ZM49.2236 0L41.4596 29.1039L39.5963 20.7885C42.5983 20.7885 45.0828 21.6487 47.0497 23.3692C49.0166 25.0896 50 27.3835 50 30.2509C50 33.1183 49.0166 35.46 47.0497 37.276C45.0828 39.092 42.6501 40 39.7516 40C36.7495 40 34.265 39.092 32.2981 37.276C30.3313 35.3644 29.3478 33.0227 29.3478 30.2509C29.3478 29.2951 29.3996 28.3871 29.5031 27.5269C29.7101 26.6667 30.0207 25.6631 30.4348 24.5161C30.8489 23.2736 31.4182 21.7921 32.1429 20.0717L39.441 0H49.2236Z" fill="url(#paint0_linear_553_20359)" fill-opacity="0.9" />
                                            <defs>
                                                <linearGradient id="paint0_linear_553_20359" x1="27.8844" y1="-1.28983e-05" x2="46.2158" y2="25.487" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF7B01" />
                                                    <stop offset="1" stop-color="#FF7B01" stop-opacity="0.2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>
                                    <div>
                                        <p style={{ textAlign: "left", fontSize: "20px", fontFamily: "General Sans" }}>Gaurav Khandelwal is the visionary founder of Tripsy Trips, specializing in the overall travel business. He holds a Bachelor's degree in Business Administration, specializing in International Business, from MIT Pune. With extensive knowledge and hands-on experience in the travel industry, Gaurav has successfully navigated the complexities of travel planning and execution. His expertise ensures that every trip organized by Tripsy Trips is seamless and memorable. Gaurav's passion for travel and his commitment to excellence drive our mission to deliver top-notch travel experiences to our clients.
                                        </p>
                                    </div>
                                    <div style={{ marginTop: "25px" }}>
                                        <h4 style={{ textAlign: "left", fontFamily: "Clash Display", fontSize: "20px", fontWeight: "500" }}>Gaurav Khandelwal</h4>
                                        <h5 style={{ textAlign: "left", fontFamily: "General Sans", fontSize: "16px", fontWeight: "500", color: "rgba(255, 123, 1, 1)" }}>Founder & Travel Expert</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(205, 205, 205, 1)" }}></div>
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-around align-items-center flex-column'>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(205, 205, 205, 1)" }}></div>
                        <div className='d-flex justify-content-around align-items-center founder-c-main-div' style={{ height: "95%", width: "100%" }}>
                            <div className='founder-img' style={{ height: "80%", backgroundImage:`url("${Manish}")`, backgroundSize:"cover", backgroundPosition:"top" }}>

                            </div>
                            <div className='founder-line' style={{ width: "1px", }}></div>
                            <div className='d-flex justify-content-center align-items-center founder-content' >
                                <div className='founder-annotate d-flex flex-column justify-content-end align-items-start' style={{ height: "100%", width: "80%" }}>
                                    <div style={{ position: "relative" }}>
                                        <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.8758 0L12.1118 29.1039L10.2484 20.7885C13.2505 20.7885 15.735 21.6487 17.7019 23.3692C19.6687 25.0896 20.6522 27.3835 20.6522 30.2509C20.6522 33.1183 19.6687 35.46 17.7019 37.276C15.735 39.092 13.3023 40 10.4037 40C7.40166 40 4.91718 39.092 2.95031 37.276C0.983437 35.3644 0 33.0227 0 30.2509C0 29.2951 0.0517596 28.3871 0.155279 27.5269C0.362319 26.6667 0.672877 25.6631 1.08696 24.5161C1.50103 23.2736 2.07039 21.7921 2.79503 20.0717L10.0932 0H19.8758ZM49.2236 0L41.4596 29.1039L39.5963 20.7885C42.5983 20.7885 45.0828 21.6487 47.0497 23.3692C49.0166 25.0896 50 27.3835 50 30.2509C50 33.1183 49.0166 35.46 47.0497 37.276C45.0828 39.092 42.6501 40 39.7516 40C36.7495 40 34.265 39.092 32.2981 37.276C30.3313 35.3644 29.3478 33.0227 29.3478 30.2509C29.3478 29.2951 29.3996 28.3871 29.5031 27.5269C29.7101 26.6667 30.0207 25.6631 30.4348 24.5161C30.8489 23.2736 31.4182 21.7921 32.1429 20.0717L39.441 0H49.2236Z" fill="url(#paint0_linear_553_20359)" fill-opacity="0.9" />
                                            <defs>
                                                <linearGradient id="paint0_linear_553_20359" x1="27.8844" y1="-1.28983e-05" x2="46.2158" y2="25.487" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF7B01" />
                                                    <stop offset="1" stop-color="#FF7B01" stop-opacity="0.2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>
                                    <div>
                                        <p style={{ textAlign: "left", fontSize: "20px", fontFamily: "General Sans" }}>Manish Dhalwani, Co-Founder of Tripsy Trips, holds a Master of Management degree from the University of Sydney. He specializes in visa services, making the often-daunting process of securing travel documents smooth and hassle-free. Manish’s added skill sets in the travel industry complement our comprehensive service offerings, ensuring that every aspect of your journey is taken care of with precision and care.
                                        </p>
                                    </div>
                                    <div style={{ marginTop: "25px" }}>
                                        <h4 style={{ textAlign: "left", fontFamily: "Clash Display", fontSize: "20px", fontWeight: "500" }}>Manish Dhalwani</h4>
                                        <h5 style={{ textAlign: "left", fontFamily: "General Sans", fontSize: "16px", fontWeight: "500", color: "rgba(255, 123, 1, 1)" }}>Co-Founder & Visa Specialist</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(205, 205, 205, 1)" }}></div>
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-around align-items-center flex-column'>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(205, 205, 205, 1)" }}></div>
                        <div className='founder-c-main-div d-flex justify-content-around align-items-center' style={{ height: "95%", width: "100%" }}>
                            <div className='founder-img' style={{ height: "80%", backgroundImage: `url("${Karan}")`, backgroundSize: "cover", backgroundPosition: "center" }}>

                            </div>
                            <div className='founder-line' style={{ width: "1px", }}></div>
                            <div className='d-flex justify-content-center align-items-center founder-content' >
                                <div className='founder-annotate d-flex flex-column justify-content-end align-items-start' style={{ height: "100%", width: "80%" }}>
                                    <div style={{ position: "relative" }}>
                                        <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.8758 0L12.1118 29.1039L10.2484 20.7885C13.2505 20.7885 15.735 21.6487 17.7019 23.3692C19.6687 25.0896 20.6522 27.3835 20.6522 30.2509C20.6522 33.1183 19.6687 35.46 17.7019 37.276C15.735 39.092 13.3023 40 10.4037 40C7.40166 40 4.91718 39.092 2.95031 37.276C0.983437 35.3644 0 33.0227 0 30.2509C0 29.2951 0.0517596 28.3871 0.155279 27.5269C0.362319 26.6667 0.672877 25.6631 1.08696 24.5161C1.50103 23.2736 2.07039 21.7921 2.79503 20.0717L10.0932 0H19.8758ZM49.2236 0L41.4596 29.1039L39.5963 20.7885C42.5983 20.7885 45.0828 21.6487 47.0497 23.3692C49.0166 25.0896 50 27.3835 50 30.2509C50 33.1183 49.0166 35.46 47.0497 37.276C45.0828 39.092 42.6501 40 39.7516 40C36.7495 40 34.265 39.092 32.2981 37.276C30.3313 35.3644 29.3478 33.0227 29.3478 30.2509C29.3478 29.2951 29.3996 28.3871 29.5031 27.5269C29.7101 26.6667 30.0207 25.6631 30.4348 24.5161C30.8489 23.2736 31.4182 21.7921 32.1429 20.0717L39.441 0H49.2236Z" fill="url(#paint0_linear_553_20359)" fill-opacity="0.9" />
                                            <defs>
                                                <linearGradient id="paint0_linear_553_20359" x1="27.8844" y1="-1.28983e-05" x2="46.2158" y2="25.487" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF7B01" />
                                                    <stop offset="1" stop-color="#FF7B01" stop-opacity="0.2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>
                                    <div>
                                        <p style={{ textAlign: "left", fontSize: "20px", fontFamily: "General Sans" }}>Karan Mirchandani has completed a Bachelor of Commerce degree from Mumbai University. His creativity along with exceptional communication skills, passion for marketing and extensive knowledge of the travel industry make him an invaluable asset to Tripsy Trips. Karan is dedicated to understanding your travel needs and delivering personalized solutions that exceed expectations. His expertise ensures that every interaction with Tripsy Trips is informative, engaging, and customer-centric.
                                        </p>
                                    </div>
                                    <div style={{ marginTop: "25px" }}>
                                        <h4 style={{ textAlign: "left", fontFamily: "Clash Display", fontSize: "20px", fontWeight: "500" }}>Karan Mirchandani</h4>
                                        <h5 style={{ textAlign: "left", fontFamily: "General Sans", fontSize: "16px", fontWeight: "500", color: "rgba(255, 123, 1, 1)" }}>Co- Founder & Marketing Specialist
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(205, 205, 205, 1)" }}></div>
                    </SwiperSlide>

                    <SwiperSlide className='d-flex justify-content-around align-items-center flex-column'>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(205, 205, 205, 1)" }}></div>
                        <div className='d-flex justify-content-around align-items-center founder-c-main-div' style={{ height: "95%", width: "100%" }}>
                            <div className='founder-img' style={{ height: "80%", backgroundImage:`url("${Khush}")`, backgroundSize:"cover", backgroundPosition:"top" }}>

                            </div>
                            <div className='founder-line' style={{ width: "1px", }}></div>
                            <div className='d-flex justify-content-center align-items-center founder-content'>
                                <div className='founder-annotate d-flex flex-column justify-content-end align-items-start' style={{ height: "100%", width: "80%" }}>
                                    <div style={{ position: "relative" }}>
                                        <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.8758 0L12.1118 29.1039L10.2484 20.7885C13.2505 20.7885 15.735 21.6487 17.7019 23.3692C19.6687 25.0896 20.6522 27.3835 20.6522 30.2509C20.6522 33.1183 19.6687 35.46 17.7019 37.276C15.735 39.092 13.3023 40 10.4037 40C7.40166 40 4.91718 39.092 2.95031 37.276C0.983437 35.3644 0 33.0227 0 30.2509C0 29.2951 0.0517596 28.3871 0.155279 27.5269C0.362319 26.6667 0.672877 25.6631 1.08696 24.5161C1.50103 23.2736 2.07039 21.7921 2.79503 20.0717L10.0932 0H19.8758ZM49.2236 0L41.4596 29.1039L39.5963 20.7885C42.5983 20.7885 45.0828 21.6487 47.0497 23.3692C49.0166 25.0896 50 27.3835 50 30.2509C50 33.1183 49.0166 35.46 47.0497 37.276C45.0828 39.092 42.6501 40 39.7516 40C36.7495 40 34.265 39.092 32.2981 37.276C30.3313 35.3644 29.3478 33.0227 29.3478 30.2509C29.3478 29.2951 29.3996 28.3871 29.5031 27.5269C29.7101 26.6667 30.0207 25.6631 30.4348 24.5161C30.8489 23.2736 31.4182 21.7921 32.1429 20.0717L39.441 0H49.2236Z" fill="url(#paint0_linear_553_20359)" fill-opacity="0.9" />
                                            <defs>
                                                <linearGradient id="paint0_linear_553_20359" x1="27.8844" y1="-1.28983e-05" x2="46.2158" y2="25.487" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF7B01" />
                                                    <stop offset="1" stop-color="#FF7B01" stop-opacity="0.2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>
                                    <div>
                                        <p style={{ textAlign: "left", fontSize: "20px", fontFamily: "General Sans" }}>Khushbu Vaswani, who has completed an MSc in Innovation & Enterprise from Nottingham Trent University- UK, excels in understanding client requirements and tailoring travel experiences to meet their unique needs. Her profound knowledge of the travel industry, coupled with her ability to innovate, ensures that Tripsy Trips remains at the forefront of customer satisfaction and service excellence. Khushbu's dedication to client relations is the cornerstone of our commitment to making every journey special.
                                        </p>
                                    </div>
                                    <div style={{ marginTop: "25px" }}>
                                        <h4 style={{ textAlign: "left", fontFamily: "Clash Display", fontSize: "20px", fontWeight: "500" }}>Khushbu Vaswani</h4>
                                        <h5 style={{ textAlign: "left", fontFamily: "General Sans", fontSize: "16px", fontWeight: "500", color: "rgba(255, 123, 1, 1)" }}>CO- Founder & Client Relations Expert</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(205, 205, 205, 1)" }}></div>
                    </SwiperSlide>
                </Swiper>
                <div className='d-flex justify-content-center flex-row align-items-center' style={{ position: "relative", zIndex: "9999" }}>
                    <div className='mx-3 founder-ctrl-btn-left' style={{ cursor: "pointer" }} onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="17.25" transform="rotate(180 18 18)" stroke="#024786" stroke-width="1.5" />
                            <path d="M10.4026 17.4466C10.097 17.7522 10.097 18.2478 10.4026 18.5534L15.3831 23.5339C15.6887 23.8395 16.1843 23.8395 16.4899 23.5339C16.7955 23.2283 16.7955 22.7327 16.4899 22.4271L12.0628 18L16.4899 13.5729C16.7955 13.2673 16.7955 12.7717 16.4899 12.4661C16.1843 12.1605 15.6887 12.1605 15.3831 12.4661L10.4026 17.4466ZM25.043 17.2174L10.956 17.2174L10.956 18.7826L25.043 18.7826L25.043 17.2174Z" fill="#024786" />
                        </svg>
                    </div>
                    <div className='founder-ctrl-btn-right' style={{ cursor: "pointer" }} onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="17.25" stroke="#024786" stroke-width="1.5" />
                            <path d="M25.5974 18.5534C25.903 18.2478 25.903 17.7522 25.5974 17.4466L20.6169 12.4661C20.3113 12.1605 19.8157 12.1605 19.5101 12.4661C19.2045 12.7717 19.2045 13.2673 19.5101 13.5729L23.9372 18L19.5101 22.4271C19.2045 22.7327 19.2045 23.2283 19.5101 23.5339C19.8157 23.8395 20.3113 23.8395 20.6169 23.5339L25.5974 18.5534ZM10.957 18.7826H25.044V17.2174H10.957V18.7826Z" fill="#024786" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FounderSlider
