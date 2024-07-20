import React, { useContext, useState } from 'react';

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import '../../static/carouselOverrides.css';  // Import the custom CSS file


import FullVisaCarousel from './FullVisaCarousel';
import AsianCarousel from './AsianCarousel';
import AfricanCarousel from './AfricanCarousel';
import EuropeanCarousel from './EuropeanCarousel';


const HomeOurVisa = () => {
  // const context = useContext(VisaContext);
  const [active, setActive] = useState(0)


  const handleActive = (index) => {
    setActive(index)
    console.log(index)
  }

  // const { countries, asianCountries, africanCountries, europeanCountries } = context;

  // const carouselData = [{
  //   images: [{
  //             src: "https://images.unsplash.com/photo-1538380037660-580d161e3307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //             alt: "Sri Lanka",
  //             title: "SRI LANKA"
  //           }]
  // }]


  return (

    <div className='hov d-flex justify-content-center align-items-center' style={{ backgroundColor: "#fff", width: "100%" }}>
      <div className="main-cont d-flex justify-content-between align-items-start flex-column" style={{ width: "85%", height: "100%" }}>
        <div className="v-title d-flex justify-content-start align-items-center" style={{ flexBasis: "10%", width: "40%", height: "100%" }}>
          <h1 style={{ fontFamily: "Clash Display", fontSize: "46px", fontWeight: "500", lineHeight: "57px" }}>Our E-Visa</h1>
        </div>
        <div className="v-options d-flex justify-content-center align-items-center flex-column py-1" style={{ flexBasis: "5%", width: "40%", height: "100%" }}>
          <ul className='d-flex justify-content-between align-items-center flex-row' style={{ width: "100%", marginBottom:"0",listStyleType: "none", paddingLeft:"0"}}>
            <li onClick={() => handleActive(0)} style={{ fontWeight: `${active === 0 ? "400" : "200"}`, fontSize: `${active === 0 ? "20px" : "20px"}`, cursor: "pointer", borderBottom: `${active === 0 ? "2px solid #000" : "none"}` }}>All</li>
            <li onClick={() => handleActive(1)} style={{ fontWeight: `${active === 1 ? "400" : "200"}`, fontSize: `${active === 1 ? "20px" : "20px"}`, cursor: "pointer", borderBottom: `${active === 1 ? "2px solid #000" : "none"}` }}>Asia</li>
            <li onClick={() => handleActive(2)} style={{ fontWeight: `${active === 2 ? "400" : "200"}`, fontSize: `${active === 2 ? "20px" : "20px"}`, cursor: "pointer", borderBottom: `${active === 2 ? "2px solid #000" : "none"}` }}>Africa</li>
            <li onClick={() => handleActive(3)} style={{ fontWeight: `${active === 3 ? "400" : "200"}`, fontSize: `${active === 3 ? "20px" : "20px"}`, cursor: "pointer", borderBottom: `${active === 3 ? "2px solid #000" : "none"}` }}>Europe</li>
            {/* <li onClick={handActive(3)} style={{ fontWeight: "400", fontSize: "24px" }}>South America</li> */}
          </ul>
        </div>
        {/* <div className="v-carousel" style={{ flexBasis: "80%", width: "100%", height: "100%" }}>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            defaultActiveSlide={0}
            swipeable={false}
            autoPlay={false}
            renderIndicator={(onClick, isSelected, index, label) => (
              <button
                type="button"
                onClick={onClick}
                style={{
                  border: "none",
                  backgroundColor: isSelected ? "#000" : "#fff",
                  color: isSelected ? "#fff" : "#808080",
                  padding: "5px 10px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: "20px",
                  margin: "5px 2px",
                }}
              >
                {index + 1}
              </button>
            )}
          >
            {carouselData.map((page, pageIndex) => (
              <div
                key={`page-${pageIndex}`} // Add a unique key to the outer div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gridTemplateRows: "repeat(2, 1fr)",
                  gap: "10px",
                  height: "100%",
                  width: "100%",
                }}
              >
                {page.map((box, boxIndex) => (
                  <Link
                    key={`box-${boxIndex}-${pageIndex}`} // Use a unique key for each box
                    className="car-b"
                    style={boxStyle}
                    to={{ pathname: `/visa/application/${box.title}` }}
                  >
                    <div className="card-hover" style={{ height: "101%", width: "100%" }}>
                      <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                        <img
                          src={box.src}
                          alt={box.title} // Use box.title as the alt text for better accessibility
                          style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                        />
                        <div className="overlay py-4" style={overlayStyle}>
                          <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                          {box.title}
                          <div style={{ width: "25px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                        </div>
                      </div>
                      <div className="visit-btn justify-content-center align-items-center">
                        <div className="visit-btn-bdr d-flex justify-content-center align-items-center"></div>
                        <div
                          className="link-container d-flex justify-content-center align-items-center"
                          style={{ position: "absolute", zIndex: "9999" }}
                        >
                          <Link
                            to={{ pathname: `/visa/application/${box.title}` }}
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
                ))}
              </div>
            ))}
          </Carousel>
        </div> */}
        <div className="v-carousel" style={{ flexBasis: "85%", width: "100%", height: "100%" }}>
          {active === 0 && <FullVisaCarousel/>}
          {active === 1 && <AsianCarousel/>}
          {active === 2 && <AfricanCarousel/>}
          {active === 3 && <EuropeanCarousel/>}
        </div>
      </div>
    </div>
  );
}

export default HomeOurVisa;




