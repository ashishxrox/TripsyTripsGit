import React, { useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import '../../static/swipper.css';

import Dubai1 from '../../static/assets/pkgSlider/gallery/dubai1.jpeg'
import Dubai2 from '../../static/assets/pkgSlider/gallery/dubai2.jpeg'
import Dubai3 from '../../static/assets/pkgSlider/gallery/dubai3.jpeg'
import Dubai4 from '../../static/assets/pkgSlider/gallery/dubai4.jpeg'


import Singa1 from '../../static/assets/pkgSlider/gallery/singa1.jpeg'
import Singa2 from '../../static/assets/pkgSlider/gallery/singa2.jpeg'
import Singa3 from '../../static/assets/pkgSlider/gallery/singa3.png'
import Singa4 from '../../static/assets/pkgSlider/gallery/singa4.jpeg'


import Malay1 from '../../static/assets/pkgSlider/gallery/malay1.jpeg'
import Malay2 from '../../static/assets/pkgSlider/gallery/malay2.jpeg'
import Malay3 from '../../static/assets/pkgSlider/gallery/malay3.jpeg'
import Malay4 from '../../static/assets/pkgSlider/gallery/malay4.jpeg'


import Bali1 from '../../static/assets/pkgSlider/gallery/bali1.jpeg'
import Bali2 from '../../static/assets/pkgSlider/gallery/bali2.jpeg'
import Bali3 from '../../static/assets/pkgSlider/gallery/bali3.jpeg'
import Bali4 from '../../static/assets/pkgSlider/gallery/bali4.jpeg'


import Kerala1 from '../../static/assets/pkgSlider/gallery/kerala1.jpeg'
import Kerala2 from '../../static/assets/pkgSlider/gallery/kerala2.jpeg'
import Kerala3 from '../../static/assets/pkgSlider/gallery/kerala3.jpeg'
import Kerala4 from '../../static/assets/pkgSlider/gallery/kerala4.jpeg'


import Turkey1 from '../../static/assets/pkgSlider/gallery/turkey1.jpeg'
import Turkey2 from '../../static/assets/pkgSlider/gallery/turkey2.jpeg'
import Turkey3 from '../../static/assets/pkgSlider/gallery/turkey3.jpeg'
import Turkey4 from '../../static/assets/pkgSlider/gallery/turkey4.jpeg'


import Kashmir1 from '../../static/assets/pkgSlider/gallery/kashmir1.jpeg'
import Kashmir2 from '../../static/assets/pkgSlider/gallery/kashmir2.jpeg'
import Kashmir3 from '../../static/assets/pkgSlider/gallery/kashmir3.jpeg'
import Kashmir4 from '../../static/assets/pkgSlider/gallery/kashmir4.jpeg'


import Viet1 from '../../static/assets/pkgSlider/gallery/vietnam1.jpeg'
import Viet2 from '../../static/assets/pkgSlider/gallery/vietnam2.jpeg'
import Viet3 from '../../static/assets/pkgSlider/gallery/vietnam3.jpeg'
import Viet4 from '../../static/assets/pkgSlider/gallery/vietnam4.jpeg'


import Lanka1 from '../../static/assets/pkgSlider/gallery/sl1.jpeg'
import Lanka2 from '../../static/assets/pkgSlider/gallery/sl2.jpeg'
import Lanka3 from '../../static/assets/pkgSlider/gallery/sl3.jpeg'
import Lanka4 from '../../static/assets/pkgSlider/gallery/sl4.jpeg'


import Thai1 from '../../static/assets/pkgSlider/gallery/thailand1.jpeg'
import Thai2 from '../../static/assets/pkgSlider/gallery/thailand2.jpeg'
import Thai3 from '../../static/assets/pkgSlider/gallery/thailand3.jpeg'
import Thai4 from '../../static/assets/pkgSlider/gallery/thailand3.jpeg'



import Leh1 from '../../static/assets/pkgSlider/gallery/leh1.jpeg'
import Leh2 from '../../static/assets/pkgSlider/gallery/leh2.jpeg'
import Leh3 from '../../static/assets/pkgSlider/gallery/leh3.jpeg'
import Leh4 from '../../static/assets/pkgSlider/gallery/leh4.jpeg'


import Megh1 from '../../static/assets/pkgSlider/gallery/megh1.jpeg'
import Megh2 from '../../static/assets/pkgSlider/gallery/megh2.jpeg'
import Megh3 from '../../static/assets/pkgSlider/gallery/megh3.jpeg'
import Megh4 from '../../static/assets/pkgSlider/gallery/megh4.jpeg'


import Abu1 from '../../static/assets/pkgSlider/gallery/abu1.jpeg'
import Abu2 from '../../static/assets/pkgSlider/gallery/abu2.jpeg'
import Abu3 from '../../static/assets/pkgSlider/gallery/abu3.jpeg'
import Abu4 from '../../static/assets/pkgSlider/gallery/abu4.jpeg'




const slider1Data = {
    "Dubai": [Dubai1, Dubai2, Dubai3, Dubai4,],
    "Singapore": [Singa1, Singa2, Singa3, Singa4,],
    "Malaysia": [Malay1, Malay2, Malay3, Malay4,],
    "Bali": [Bali1, Bali2, Bali3, Bali4,],
    "Kerala": [Kerala1, Kerala2, Kerala3, Kerala4,],
    "Turkey": [Turkey1, Turkey2, Turkey3, Turkey4,],
    "Kashmir": [Kashmir1, Kashmir2, Kashmir3, Kashmir4,],
    "Vietnam": [Viet1, Viet2, Viet3, Viet4,],
    "Sri Lanka": [Lanka1, Lanka2, Lanka3, Lanka4,],
    "Thailand": [Thai1, Thai2, Thai3, Thai4,],
    "Leh & Nubra Valley": [Leh1, Leh2, Leh3, Leh4,],
    "Meghalaya": [Megh1, Megh2, Megh3, Megh4,],
    "Abu Dhabi": [Abu1, Abu2, Abu3, Abu4]
  }


const PkgGallery = ({place}) => {

    const currentPlace = slider1Data[place]
    const swiperRef = useRef(null);
    return (
        <div style={{ height: "80%", width: "100%", borderRadius: "0" }}>
            <Swiper
                ref={swiperRef}
                breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    601: {
                      slidesPerView: 1.3,
                    },
                  }}
                spaceBetween={15}
                className="mySwiper"
            >
                <SwiperSlide className='d-flex justify-content-center flex-column align-items-start' >
                    {/* <img src={singa1} alt="" style={{height:"100%", width:"100%"}} /> */}
                    <div style={{height:"100%", width:"100%", backgroundColor:"red", backgroundImage:`url(${currentPlace[0]})`, backgroundSize:"cover"}}></div>


                </SwiperSlide>
                <SwiperSlide className='d-flex justify-content-center flex-column align-items-start' >
                   {/* <img src={singa2} alt=""  style={{height:"100%", width:"100%"}}/> */}
                   <div style={{height:"100%", width:"100%", backgroundColor:"red", backgroundImage:`url(${currentPlace[1]})`, backgroundSize:"cover"}}></div>

                </SwiperSlide>
                <SwiperSlide className='d-flex justify-content-center flex-column align-items-start' >
                   <div style={{height:"100%", width:"100%", backgroundColor:"red", backgroundImage:`url(${currentPlace[2]})`, backgroundSize:"cover"}}></div>


                </SwiperSlide>
                <SwiperSlide className='d-flex justify-content-center flex-column align-items-start' >
                   <div style={{height:"100%", width:"100%", backgroundColor:"red", backgroundImage:`url(${currentPlace[3]})`, backgroundSize:"cover"}}></div>


                </SwiperSlide>
            </Swiper>
            <div className='d-flex justify-content-center flex-row align-items-center' style={{ position: "relative", top: "-50px", zIndex: "9999" }}>
                <div className='mx-3' style={{ cursor: "pointer", position: "absolute", bottom: "225px", left: "-40px" }} onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()}>
                    <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="54" height="53" rx="26.5" fill="white" />
                        <rect x="0.5" y="0.5" width="54" height="53" rx="26.5" stroke="#868686" />
                        <path d="M16.5404 26.5404C16.2865 26.7942 16.2865 27.2058 16.5404 27.4596L20.677 31.5962C20.9308 31.85 21.3424 31.85 21.5962 31.5962C21.85 31.3424 21.85 30.9308 21.5962 30.677L17.9192 27L21.5962 23.323C21.85 23.0692 21.85 22.6576 21.5962 22.4038C21.3424 22.15 20.9308 22.15 20.677 22.4038L16.5404 26.5404ZM38 26.35L17 26.35L17 27.65L38 27.65L38 26.35Z" fill="#0A1D26" />
                    </svg>

                </div>
                <div style={{ cursor: "pointer", position: "absolute", bottom: "225px", right: "-30px" }} onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()}>
                    <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="54" height="53" rx="26.5" fill="white" />
                        <rect x="0.5" y="0.5" width="54" height="53" rx="26.5" stroke="#868686" />
                        <path d="M38.4596 26.5404C38.7135 26.7942 38.7135 27.2058 38.4596 27.4596L34.323 31.5962C34.0692 31.85 33.6576 31.85 33.4038 31.5962C33.15 31.3424 33.15 30.9308 33.4038 30.677L37.0808 27L33.4038 23.323C33.15 23.0692 33.15 22.6576 33.4038 22.4038C33.6576 22.15 34.0692 22.15 34.323 22.4038L38.4596 26.5404ZM17 26.35L38 26.35L38 27.65L17 27.65L17 26.35Z" fill="#0A1D26" />
                    </svg>


                </div>
            </div>
        </div>
    )
}

export default PkgGallery
