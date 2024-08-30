import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import '../../static/swipper.css';

import '../../static/review.css'

const ReviewBox = () => {
    const swiperRef = useRef(null);
    return (
        <div className='rb-main' style={{ height: "300px", overflow: "hidden" }}>
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={15}
                className="mySwiper"
            >
                <SwiperSlide className='d-flex justify-content-center flex-column align-items-start px-4 py-2' >
                    <div className='my-3'>
                        <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7205 0.5L7.75155 19.4176L6.55901 14.0125C8.48033 14.0125 10.0704 14.5717 11.3292 15.69C12.588 16.8082 13.2174 18.2993 13.2174 20.1631C13.2174 22.0269 12.588 23.549 11.3292 24.7294C10.0704 25.9098 8.51346 26.5 6.65838 26.5C4.73706 26.5 3.147 25.9098 1.8882 24.7294C0.6294 23.4869 0 21.9648 0 20.1631C0 19.5418 0.0331262 18.9516 0.0993786 18.3925C0.231884 17.8333 0.430642 17.181 0.695652 16.4355C0.960662 15.6278 1.32505 14.6649 1.78882 13.5466L6.45963 0.5H12.7205ZM31.5031 0.5L26.5342 19.4176L25.3416 14.0125C27.2629 14.0125 28.853 14.5717 30.1118 15.69C31.3706 16.8082 32 18.2993 32 20.1631C32 22.0269 31.3706 23.549 30.1118 24.7294C28.853 25.9098 27.2961 26.5 25.441 26.5C23.5197 26.5 21.9296 25.9098 20.6708 24.7294C19.412 23.4869 18.7826 21.9648 18.7826 20.1631C18.7826 19.5418 18.8157 18.9516 18.882 18.3925C19.0145 17.8333 19.2133 17.181 19.4783 16.4355C19.7433 15.6278 20.1077 14.6649 20.5714 13.5466L25.2422 0.5H31.5031Z" fill="url(#paint0_linear_46_8997)" fill-opacity="0.8" />
                            <defs>
                                <linearGradient id="paint0_linear_46_8997" x1="17.846" y1="0.499992" x2="29.819" y2="16.8905" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF7B01" />
                                    <stop offset="1" stop-color="#DB6900" stop-opacity="0.5" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                    <p style={{ textAlign: "left", fontWeight: "500", fontStyle: "16px" }}>They follow through the service they guarantee. There’s no room for error with this company.Recommend to all who don’t like the hassle of book arrangements. They make it quite easy for you. I would personally recommend Karan there. He helped out with out the details.</p>
                    <h4 className="rev-slider-title" style={{ textAlign: "left", fontWeight: "600", fontStyle: "20px", color: "rgba(10, 29, 38, 1)" }}>Ritika Makhija</h4>
                    {/* <h5 style={{ textAlign: "left", fontWeight: "600", fontStyle: "20px", color: "rgba(116, 138, 152, 1)" }}>Designation</h5> */}


                </SwiperSlide>
                <SwiperSlide className='d-flex justify-content-center flex-column align-items-start px-4 py-2' >
                    <div className='my-3'>
                        <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7205 0.5L7.75155 19.4176L6.55901 14.0125C8.48033 14.0125 10.0704 14.5717 11.3292 15.69C12.588 16.8082 13.2174 18.2993 13.2174 20.1631C13.2174 22.0269 12.588 23.549 11.3292 24.7294C10.0704 25.9098 8.51346 26.5 6.65838 26.5C4.73706 26.5 3.147 25.9098 1.8882 24.7294C0.6294 23.4869 0 21.9648 0 20.1631C0 19.5418 0.0331262 18.9516 0.0993786 18.3925C0.231884 17.8333 0.430642 17.181 0.695652 16.4355C0.960662 15.6278 1.32505 14.6649 1.78882 13.5466L6.45963 0.5H12.7205ZM31.5031 0.5L26.5342 19.4176L25.3416 14.0125C27.2629 14.0125 28.853 14.5717 30.1118 15.69C31.3706 16.8082 32 18.2993 32 20.1631C32 22.0269 31.3706 23.549 30.1118 24.7294C28.853 25.9098 27.2961 26.5 25.441 26.5C23.5197 26.5 21.9296 25.9098 20.6708 24.7294C19.412 23.4869 18.7826 21.9648 18.7826 20.1631C18.7826 19.5418 18.8157 18.9516 18.882 18.3925C19.0145 17.8333 19.2133 17.181 19.4783 16.4355C19.7433 15.6278 20.1077 14.6649 20.5714 13.5466L25.2422 0.5H31.5031Z" fill="url(#paint0_linear_46_8997)" fill-opacity="0.8" />
                            <defs>
                                <linearGradient id="paint0_linear_46_8997" x1="17.846" y1="0.499992" x2="29.819" y2="16.8905" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF7B01" />
                                    <stop offset="1" stop-color="#DB6900" stop-opacity="0.5" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                    <p style={{ textAlign: "left", fontWeight: "500", fontStyle: "16px" }}>I Recently had the pleasure of booking my dream vacation through an extraordinary travel agency.
                        From the moment i contacted them to the end of my trip, every detail was handled with utmost professionalism and care.</p>
                    <h4 className="rev-slider-title" style={{ textAlign: "left", fontWeight: "600", fontStyle: "20px", color: "rgba(10, 29, 38, 1)" }}>Rohit Advani</h4>
                    {/* <h5 style={{ textAlign: "left", fontWeight: "600", fontStyle: "20px", color: "rgba(116, 138, 152, 1)" }}>Designation</h5> */}


                </SwiperSlide>
                <SwiperSlide className='d-flex justify-content-center flex-column align-items-start px-4 py-2' >
                    <div className='my-3'>
                        <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7205 0.5L7.75155 19.4176L6.55901 14.0125C8.48033 14.0125 10.0704 14.5717 11.3292 15.69C12.588 16.8082 13.2174 18.2993 13.2174 20.1631C13.2174 22.0269 12.588 23.549 11.3292 24.7294C10.0704 25.9098 8.51346 26.5 6.65838 26.5C4.73706 26.5 3.147 25.9098 1.8882 24.7294C0.6294 23.4869 0 21.9648 0 20.1631C0 19.5418 0.0331262 18.9516 0.0993786 18.3925C0.231884 17.8333 0.430642 17.181 0.695652 16.4355C0.960662 15.6278 1.32505 14.6649 1.78882 13.5466L6.45963 0.5H12.7205ZM31.5031 0.5L26.5342 19.4176L25.3416 14.0125C27.2629 14.0125 28.853 14.5717 30.1118 15.69C31.3706 16.8082 32 18.2993 32 20.1631C32 22.0269 31.3706 23.549 30.1118 24.7294C28.853 25.9098 27.2961 26.5 25.441 26.5C23.5197 26.5 21.9296 25.9098 20.6708 24.7294C19.412 23.4869 18.7826 21.9648 18.7826 20.1631C18.7826 19.5418 18.8157 18.9516 18.882 18.3925C19.0145 17.8333 19.2133 17.181 19.4783 16.4355C19.7433 15.6278 20.1077 14.6649 20.5714 13.5466L25.2422 0.5H31.5031Z" fill="url(#paint0_linear_46_8997)" fill-opacity="0.8" />
                            <defs>
                                <linearGradient id="paint0_linear_46_8997" x1="17.846" y1="0.499992" x2="29.819" y2="16.8905" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF7B01" />
                                    <stop offset="1" stop-color="#DB6900" stop-opacity="0.5" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                    <p style={{ textAlign: "left", fontWeight: "500", fontStyle: "16px" }}>Kudos to Khush and her Team,
                        Booking our trip with u guyz through WhatsApp was like chatting with friends who happen to be travel experts!
                        The time to understand our preferences, answering all our questions promptly, and crafting an itinerary that felt tailor-made just for us. Thanks to your warmth, attention to detail, and genuine care with absolute professionalism. Cheers!!
                    </p>
                    <h4 className="rev-slider-title" style={{ textAlign: "left", fontWeight: "600", fontStyle: "20px", color: "rgba(10, 29, 38, 1)" }}>Sourav Dutta</h4>
                    {/* <h5 style={{ textAlign: "left", fontWeight: "600", fontStyle: "20px", color: "rgba(116, 138, 152, 1)" }}>Designation</h5> */}


                </SwiperSlide>
            </Swiper>
            <div className='rb-ctrl-btn d-flex justify-content-center flex-row align-items-center' style={{ position: "relative", zIndex: "9999" }}>
                <div className='mx-3' style={{ cursor: "pointer" }} onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="17.25" transform="rotate(180 18 18)" stroke="#024786" stroke-width="1.5" />
                        <path d="M10.4026 17.4466C10.097 17.7522 10.097 18.2478 10.4026 18.5534L15.3831 23.5339C15.6887 23.8395 16.1843 23.8395 16.4899 23.5339C16.7955 23.2283 16.7955 22.7327 16.4899 22.4271L12.0628 18L16.4899 13.5729C16.7955 13.2673 16.7955 12.7717 16.4899 12.4661C16.1843 12.1605 15.6887 12.1605 15.3831 12.4661L10.4026 17.4466ZM25.043 17.2174L10.956 17.2174L10.956 18.7826L25.043 18.7826L25.043 17.2174Z" fill="#024786" />
                    </svg>
                </div>
                <div style={{ cursor: "pointer" }} onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="17.25" stroke="#024786" stroke-width="1.5" />
                        <path d="M25.5974 18.5534C25.903 18.2478 25.903 17.7522 25.5974 17.4466L20.6169 12.4661C20.3113 12.1605 19.8157 12.1605 19.5101 12.4661C19.2045 12.7717 19.2045 13.2673 19.5101 13.5729L23.9372 18L19.5101 22.4271C19.2045 22.7327 19.2045 23.2283 19.5101 23.5339C19.8157 23.8395 20.3113 23.8395 20.6169 23.5339L25.5974 18.5534ZM10.957 18.7826H25.044V17.2174H10.957V18.7826Z" fill="#024786" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default ReviewBox
