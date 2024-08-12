import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VisaContext from '../../context/Visa/VisaContext';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../static/carouselOverrides.css';

const HomeOurVisaMob = () => {

  const context = useContext(VisaContext);
  const [active, setActive] = useState(0)

  const handleActive = (index) => {
    setActive(index)
    // console.log(index)
  }

  const { countries, asianCountries, africanCountries, europeanCountries } = context;
  const boxStyle = {
    backgroundColor: "#ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "bold",
    height: "95%",
    width: "100%",
    position: "relative",  // Ensure position relative for overlay
    borderRadius: "5px",  // Rounded corners
    overflow: "hidden",  // Hide overflow for rounded corners
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    // backgroundColor: "red",
    zIndex: 2,  // Ensure overlay is above the image
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "20px",
    textAlign: "center",
    color: "#fff",
    fontFamily: "Clash Display",
    fontWeight: "300",
  };

  const [formattedCountries, setFormattedCountries] = useState([]);
  useEffect(() => {
    function formatCountriesData(data) {
      const formatData = [];
      let newArr = [];
      let ctr = 1;

      for (let i = 0; i < data.length; i++) {
        if (ctr <= 3) {
          const countryItem = {
            src: `${data[i]["img_url"]}`,
            alt: `${data[i]["country"]}`,
            title: `${data[i]["country"]}`,
          };
          newArr.push(countryItem);
          ctr += 1;
        } else {
          formatData.push(newArr);
          newArr = [];
          const countryItem = {
            src: `${data[i]["img_url"]}`,
            alt: `${data[i]["country"]}`,
            title: `${data[i]["country"]}`,
          };
          newArr.push(countryItem);
          ctr = 2;
        }
      }

      if (newArr.length > 0) {
        formatData.push(newArr);
      }

      return formatData;
    }

    let countriesToFormat;
    switch (active) {
      case 0:
        countriesToFormat = [...countries]; // Create a copy of the array
        if (countriesToFormat.length > 0) {
          const firstElement = countriesToFormat[0];
          countriesToFormat.push(firstElement);
          const secElement = countriesToFormat[1];
          countriesToFormat.push(secElement);
          const thirdElement = countriesToFormat[2];
          countriesToFormat.push(thirdElement); // Add the first element to the end
        }
        break;
      case 1:
        countriesToFormat = asianCountries;
        break;
      case 2:
        countriesToFormat = africanCountries;
        break;
      case 3:
        countriesToFormat = europeanCountries;
        break;
      default:
        countriesToFormat = countries; // default to europeanCountries
    }

    setFormattedCountries(formatCountriesData(countriesToFormat));
    // eslint-disable-next-line
  }, [active]);

  const carouselData = formattedCountries;
  // console.log(carouselData)

  return (
    <div className='hovm d-flex justify-content-center align-items-center' style={{ backgroundColor: "#fff", width: "100%" }}>
      <div className="main-cont d-flex flex-column" style={{ width: "85%", height: "100%" }}>
        <div className="vm-title d-flex justify-content-start align-items-center" style={{ flexBasis: "2%", width: "100%", height: "100%" }}>
          <h1 style={{ fontFamily: "Clash Display", fontSize: "30px", fontWeight: "500", lineHeight: "57px" }}>Our E-Visa</h1>
        </div>
        <div className="vm-options d-flex justify-content-center align-items-start flex-column py-3" style={{ flexBasis: "5%", width: "85%", height: "100%" }}>
          <ul className='d-flex justify-content-between align-items-start flex-row' style={{ width: "100%", listStyleType: "none", paddingLeft: "0" }}>
            <li onClick={() => handleActive(0)} style={{ fontWeight: `${active === 0 ? "400" : "200"}`, fontSize: "20px", cursor: "pointer", borderBottom: `${active === 0 ? "2px solid #000" : "none"}` }}>All</li>
            <li onClick={() => handleActive(1)} style={{ fontWeight: `${active === 1 ? "400" : "200"}`, fontSize: "20px", cursor: "pointer", borderBottom: `${active === 1 ? "2px solid #000" : "none"}` }}>Asia</li>
            <li onClick={() => handleActive(2)} style={{ fontWeight: `${active === 2 ? "400" : "200"}`, fontSize: "20px", cursor: "pointer", borderBottom: `${active === 2 ? "2px solid #000" : "none"}` }}>Africa</li>
            <li onClick={() => handleActive(3)} style={{ fontWeight: `${active === 3 ? "400" : "200"}`, fontSize: "20px", cursor: "pointer", borderBottom: `${active === 3 ? "2px solid #000" : "none"}` }}>Europe</li>
            {/* <li onClick={handActive(3)} style={{ fontWeight: "400", fontSize: "24px" }}>South America</li> */}
          </ul>
        </div>
        <div className="vm-carousel" style={{ flexBasis: "80%", width: "100%", height: "100%" }}>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            defaultActiveSlide={0}
            useKeyboardArrows={true}
            emulateTouch={true}
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
                  padding: "0px 10px",
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
              <div key={pageIndex} style={{ display: "grid", gridTemplateColumns: "1fr", gridTemplateRows: "repeat(3, 1fr)", gap: "0px", height: "100%", width: "100%" }}>
                {page.map((box, boxIndex) => (
                  <Link className='car-b' key={boxIndex} style={boxStyle} to={{ pathname: `/visa/application/${box.title}` }}>
                    <div className='' style={{ height: "100%", width: "100%" }}>
                      <div className="card country-card" style={{ width: "100%", height: "100%", background: "#fff", overflow: "hidden" }}>
                        <img src={box.src} alt={box.alt} style={{ height: "100%", width: "100%", borderRadius: "5px" }} />
                        <div className="overlay py-4 d-flex justify-content-end align-items-center" style={overlayStyle}>
                          <div className='d-flex justify-content-center align-items-center' style={{ position: "relative", bottom: "15px", left: "5px", fontSize: "20px", fontWeight: "500" }}>
                            <div style={{ width: "55px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                            {box.title}
                            <div style={{ width: "55px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                          </div>
                          <div className="d-flex justify-content-center align-items-center px-5 py-2" style={{ border: "1px solid #fff", borderRadius: "30px", backgroundColor: "rgba(255,255,255,0.1)", fontWeight: "500" }}>
                            <Link to={{ pathname: `/visa/application/${box.title}` }} className='d-flex justify-content-center align-items-center' style={{ color: "#fff", textDecoration: "none", fontFamily: "Clash Display", fontWeight: "500", fontSize: "24px" }}>
                              Visit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default HomeOurVisaMob
