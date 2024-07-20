import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import '../../static/swipper.css';

import Dubai1 from '../../static/assets/pkgSlider/wtv/dubai1.jpeg'
import Dubai2 from '../../static/assets/pkgSlider/wtv/dubai2.jpeg'
import Dubai3 from '../../static/assets/pkgSlider/wtv/dubai3.jpeg'
import Dubai4 from '../../static/assets/pkgSlider/wtv/dubai4.jpeg'


import Singa1 from '../../static/assets/pkgSlider/wtv/singa1.jpeg'
import Singa2 from '../../static/assets/pkgSlider/wtv/singa2.jpeg'
import Singa3 from '../../static/assets/pkgSlider/wtv/singa3.jpeg'
import Singa4 from '../../static/assets/pkgSlider/wtv/sing4.jpeg'


import Malay1 from '../../static/assets/pkgSlider/wtv/malay1.jpeg'
import Malay2 from '../../static/assets/pkgSlider/wtv/malay2.jpeg'
import Malay3 from '../../static/assets/pkgSlider/wtv/malay3.jpeg'
import Malay4 from '../../static/assets/pkgSlider/wtv/malay4.jpeg'


import Bali1 from '../../static/assets/pkgSlider/wtv/bali1.jpeg'
import Bali2 from '../../static/assets/pkgSlider/wtv/bali2.jpeg'
import Bali3 from '../../static/assets/pkgSlider/wtv/bali3.jpeg'
import Bali4 from '../../static/assets/pkgSlider/wtv/bali4.jpeg'


import Kerala1 from '../../static/assets/pkgSlider/wtv/kerala1.jpeg'
import Kerala2 from '../../static/assets/pkgSlider/wtv/kerala2.jpeg'
import Kerala3 from '../../static/assets/pkgSlider/wtv/kerala3.jpeg'
import Kerala4 from '../../static/assets/pkgSlider/wtv/kerala4.jpeg'


import Turkey1 from '../../static/assets/pkgSlider/wtv/turkey1.jpeg'
import Turkey2 from '../../static/assets/pkgSlider/wtv/turkey2.jpeg'
import Turkey3 from '../../static/assets/pkgSlider/wtv/turkey3.jpeg'
import Turkey4 from '../../static/assets/pkgSlider/wtv/turkey4.jpeg'


import Kashmir1 from '../../static/assets/pkgSlider/wtv/kashmir1.jpeg'
import Kashmir2 from '../../static/assets/pkgSlider/wtv/kashmir2.jpeg'
import Kashmir3 from '../../static/assets/pkgSlider/wtv/kashmir3.jpeg'
import Kashmir4 from '../../static/assets/pkgSlider/wtv/kashmir4.jpeg'


import Viet1 from '../../static/assets/pkgSlider/wtv/vietnam1.jpeg'
import Viet2 from '../../static/assets/pkgSlider/wtv/vietnam2.jpeg'
import Viet3 from '../../static/assets/pkgSlider/wtv/vietnam3.jpeg'
import Viet4 from '../../static/assets/pkgSlider/wtv/vietnam4.jpeg'


import Lanka1 from '../../static/assets/pkgSlider/wtv/sl1.jpeg'
import Lanka2 from '../../static/assets/pkgSlider/wtv/sl2.jpeg'
import Lanka3 from '../../static/assets/pkgSlider/wtv/sl3.jpeg'
import Lanka4 from '../../static/assets/pkgSlider/wtv/sl4.jpeg'


import Thai1 from '../../static/assets/pkgSlider/wtv/thailand1.jpeg'
import Thai2 from '../../static/assets/pkgSlider/wtv/thailand2.jpeg'
import Thai3 from '../../static/assets/pkgSlider/wtv/thailand3.jpeg'
import Thai4 from '../../static/assets/pkgSlider/wtv/thailand3.jpeg'



import Leh1 from '../../static/assets/pkgSlider/wtv/leh1.png'
import Leh2 from '../../static/assets/pkgSlider/wtv/leh2.png'
import Leh3 from '../../static/assets/pkgSlider/wtv/leh3.jpeg'
import Leh4 from '../../static/assets/pkgSlider/wtv/leh4.png'


import Megh1 from '../../static/assets/pkgSlider/wtv/megh1.png'
import Megh2 from '../../static/assets/pkgSlider/wtv/megh2.png'
import Megh3 from '../../static/assets/pkgSlider/wtv/megh3.png'
import Megh4 from '../../static/assets/pkgSlider/wtv/megh4.png'


import Abu1 from '../../static/assets/pkgSlider/wtv/abu1.jpeg'
import Abu2 from '../../static/assets/pkgSlider/wtv/abu2.png'
import Abu3 from '../../static/assets/pkgSlider/wtv/abu3.jpeg'
import Abu4 from '../../static/assets/pkgSlider/wtv/abu4.jpeg'


const PkWtvSlider = ({ place }) => {

  const swiperRef = useRef(null);

  // const overlayStyle = {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   height: "100%",
  //   width: "100%",
  //   background: "linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))",
  //   zIndex: 2,
  //   display: "flex",
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  //   flexDirection: "column",
  //   textAlign: "center",
  //   color: "#fff",
  //   fontFamily: "Clash Display",
  //   fontWeight: "300",
  // };

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

  const slideNames = {
    "Dubai": ["Desert Safari", "Burj Khalifa", "Jumeirah Beach", "Dubai Gold Souk"],
    "Singapore": ["The Merlion", "Sentosa", "Botanic Gardens", "Gardens by the bay"],
    "Malaysia": ["Patronas Tower", "Langkawi Sky Bridge", "Batu Caves", "Tioman Islands"],
    "Bali": ["Tanah Lot", "Rice Terraces", "Mount Batur", "Beaches"],
    "Kerala": ["Alleppey's tranquil backwaters", "Tea Plantations", "Kovalam's pristine beaches", "Kathakali performances"],
    "Turkey": ["Blue Mosque", "Cappadocia's Hot Air Balloon", "Hagia Sophia Mosque", "Rose Valley"],
    "Kashmir": ["Shikara rides", "Skiing", "Handicraft Market", "Pine Forests"],
    "Vietnam": ["Hoan Kiem Lake", "Cruise Halong Bay's", "Mekong Delta", "Phu Quoc's beaches"],
    "Sri Lanka": ["Temple of the Tooth Relic", "Kandy Lake", "Anuradhapura's ancient ruins", "Sigiriya's Lion Rock"],
    "Thailand": ["Bangkok's temple", "Krabi Beach", "Chiang Mai's mountain", "Chiang Mai's mountain"],
    "Leh & Nubra Valley": ["Khardung La Pass", "hot springs in Panamik", "Camel rides", "June's Hemis Festival"],
    "Meghalaya": ["Umiam lake", "Seven Sisters Falls", "Mawlynnong", "Mawsmai and Laitlum caves"],
    "Abu Dhabi": ["Sheikh Zayed Grand Mosque", "Kayaking at Mangrove National Park", "the Yas Marina Circuit", "Ferrari World"]
  }

  const currentPlace = slider1Data[place]
  const currentPlaceName = slideNames[place]

  return (
    <div className="pkg-slider-outer d-flex justify-content-between align-items-start" style={{ flexBasis: "100%", width: "100%", height: "100%" }}>
      <div className="pkg-slider-btn-cont m-2 d-flex justify-content-center align-items-center" style={{ height: "150px", width: "100px", position: "relative", zIndex: "9999" }}>
        <button onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>

          <svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="0.5" width="54" height="53" fill="white" />
            <rect x="1" y="0.5" width="54" height="53" stroke="#868686" />
            <path d="M38.9596 26.5404C39.2135 26.7942 39.2135 27.2058 38.9596 27.4596L34.823 31.5962C34.5692 31.85 34.1576 31.85 33.9038 31.5962C33.65 31.3424 33.65 30.9308 33.9038 30.677L37.5808 27L33.9038 23.323C33.65 23.0692 33.65 22.6576 33.9038 22.4038C34.1576 22.15 34.5692 22.15 34.823 22.4038L38.9596 26.5404ZM17.5 26.35L38.5 26.35L38.5 27.65L17.5 27.65L17.5 26.35Z" fill="#0A1D26" />
          </svg>

        </button>
        <button onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
          <svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="0.5" width="54" height="53" fill="white" />
            <rect x="1" y="0.5" width="54" height="53" stroke="#868686" />
            <path d="M17.0404 26.5404C16.7865 26.7942 16.7865 27.2058 17.0404 27.4596L21.177 31.5962C21.4308 31.85 21.8424 31.85 22.0962 31.5962C22.35 31.3424 22.35 30.9308 22.0962 30.677L18.4192 27L22.0962 23.323C22.35 23.0692 22.35 22.6576 22.0962 22.4038C21.8424 22.15 21.4308 22.15 21.177 22.4038L17.0404 26.5404ZM38.5 26.35L17.5 26.35L17.5 27.65L38.5 27.65L38.5 26.35Z" fill="#0A1D26" />
          </svg>

        </button>
      </div>
      <div className=" d-flex justify-content-center align-items-center" style={{ height: "95%", width: "100%" }}>
        <div className="pkwtvs-main-cont d-flex justify-content-center align-items-center" style={{ height: "100%", width: "100%", position: "relative" }}>
          <Swiper
            ref={swiperRef}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              601: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={15}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='pkg-slider-slide' style={{ height: "411px", backgroundImage: `url(${currentPlace[0]})`, backgroundSize: "cover" }}>
                <div className="overlay d-flex align-items-center justify-content-end flex-column py-3" style={{background: "linear-gradient(to bottom, transparent, rgba())", height:"100%", width:"100%"}}>
                  <div style={{height:"0.5px", width:'50%', backgroundColor:"#fff"}}></div>
                  <p style={{ color: "#fff", marginBottom:"0" }}>{currentPlaceName[0]}</p>
                  <div style={{height:"0.5px", width:'50%', backgroundColor:"#fff"}}></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pkg-slider-slide' style={{ height: "411px", backgroundImage: `url(${currentPlace[1]})`, backgroundSize: "cover" }}>
              <div className="overlay d-flex align-items-center justify-content-end flex-column py-3" style={{background: "linear-gradient(to bottom, transparent, black)", height:"100%", width:"100%"}}>
                  <div style={{height:"0.5px", width:'50%', backgroundColor:"#fff"}}></div>
                  <p style={{ color: "#fff", marginBottom:"0" }}>{currentPlaceName[1]}</p>
                  <div style={{height:"0.5px", width:'50%', backgroundColor:"#fff"}}></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pkg-slider-slide' style={{ height: "411px", backgroundImage: `url(${currentPlace[2]})`, backgroundSize: "cover" }}>
              <div className="overlay d-flex align-items-center justify-content-end flex-column py-3" style={{background: "linear-gradient(to bottom, transparent, black)", height:"100%", width:"100%"}}>
                  <div style={{height:"0.5px", width:'50%', backgroundColor:"#fff"}}></div>
                  <p style={{ color: "#fff", marginBottom:"0" }}>{currentPlaceName[2]}</p>
                  <div style={{height:"0.5px", width:'50%', backgroundColor:"#fff"}}></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='pkg-slider-slide' style={{ height: "411px", backgroundImage: `url(${currentPlace[3]})`, backgroundSize: "cover" }}>
              <div className="overlay d-flex align-items-center justify-content-end flex-column py-3" style={{background: "linear-gradient(to bottom, transparent, black)", height:"100%", width:"100%"}}>
                  <div style={{height:"0.5px", width:'50%', backgroundColor:"#fff"}}></div>
                  <p style={{ color: "#fff", marginBottom:"0" }}>{currentPlaceName[3]}</p>
                  <div style={{height:"0.5px", width:'50%', backgroundColor:"#fff"}}></div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default PkWtvSlider
