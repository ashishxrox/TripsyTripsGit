import React, { useState, useContext } from 'react'
import VisaBody from './VisaBody'
import { useEffect } from 'react'
import ReactGA from 'react-ga';
// import { useLocation } from 'react-router-dom'

import '../../static/visa.css'
import Faq from '../Faq/Faq';
import VisaBanner from './VisaBanner';
import FaqContext from '../../context/FaqCont/FaqContext';
// import NewsLetter from '../newsLetter/NewsLetter'

const Visa = () => {

  const context = useContext(FaqContext)
  const { genFaq } = context

  // const location = useLocation()

  const [active, setActive] = useState(0)


  const handleActive = (index) => {
    setActive(index)
    console.log(index)
  }

  useEffect(() => {
    ReactGA.initialize('G-QTRPBPD2RZ'); // Initialize ReactGA with your Measurement ID
    ReactGA.pageview(window.location.pathname + window.location.search); // Track page views

  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const searchBar = document.getElementById("searchBar");
  //     if (window.pageYOffset > 200) {
  //       searchBar.classList.add("sticky");
  //     } else {
  //       searchBar.classList.remove("sticky");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    // <div style={{}}>
    // <div className="search-bar" id='searchBar'>
    // <Search/>
    // </div>
    // <div className="visa-body-div" style={{zIndex:"-9999"}}>
    //   <VisaBody/>
    //   </div>
    // </div>
    <div className='d-flex justify-content-center align-items-center flex-column'>

      <VisaBanner />
      <div className="visa-title d-flex justify-content-start align-items-start flex-column" style={{ width: "85%", backgroundColor: "#fff" }}>
        <div className="head-box my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "25%", height: "80%" }}>
          <h2 style={{ fontSize: "46px", fontWeight: "500", fontFamily: "Clash Display" }}>E-Visa in 3 steps</h2>
        </div>
        <div className="headbox-desc" style={{ flexBasis: "55%", height: "100%" }}>
          <p style={{ fontSize: "20px", fontWeight: "500" }}>Planning a trip to iconic spots like the Burj Khalifa or Baku? Tripsy Trips makes e-visa applications a breeze!</p>
          <ol style={{ fontSize: "18px", fontWeight: "500" }}>
            <li>Select Your Destination & Visa</li>
            <li>Upload Your Documents </li>
            <li>Make Your Payment Through Our Secure Portal  </li>
          </ol>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>Then relax and focus on your vacation outfits while your e-visa is processed!  </p>
        </div>
        <div className="v-options-box my-5" style={{ flexBasis: "5%", height: "100%" }}>
          <div className="v-options d-flex justify-content-center align-items-start flex-column" style={{ flexBasis: "10%", height: "100%" }}>
            <ul className='d-flex justify-content-between align-items-center flex-row' style={{ width: "100%", listStyleType: "none", paddingLeft: "0", height:"100%" }}>
              <li onClick={() => handleActive(0)} style={{ fontWeight: `${active === 0 ? "400" : "200"}`, fontSize: `${active === 0 ? "20px" : "20px"}`, cursor: "pointer", borderBottom: `${active === 0 ? "2px solid #000" : "none"}` }}>All</li>
              <li onClick={() => handleActive(1)} style={{ fontWeight: `${active === 1 ? "400" : "200"}`, fontSize: `${active === 1 ? "20px" : "20px"}`, cursor: "pointer", borderBottom: `${active === 1 ? "2px solid #000" : "none"}` }}>Asia</li>
              <li onClick={() => handleActive(2)} style={{ fontWeight: `${active === 2 ? "400" : "200"}`, fontSize: `${active === 2 ? "20px" : "20px"}`, cursor: "pointer", borderBottom: `${active === 2 ? "2px solid #000" : "none"}` }}>Africa</li>
              <li onClick={() => handleActive(3)} style={{ fontWeight: `${active === 3 ? "400" : "200"}`, fontSize: `${active === 3 ? "20px" : "20px"}`, cursor: "pointer", borderBottom: `${active === 3 ? "2px solid #000" : "none"}` }}>Europe</li>
              {/* <li onClick={handActive(3)} style={{ fontWeight: "400", fontSize: "24px" }}>South America</li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="visa-content-body" style={{ width: "85%" }}>
        <VisaBody active={active} />
      </div>
      <Faq content={genFaq} />

    </div>
  )
}

export default Visa
