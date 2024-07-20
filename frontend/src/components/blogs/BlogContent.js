import React from 'react'
import Landing from '../../static/assets/blogSpecLand.jpeg'

const BlogContent = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <div className="blog-landing " style={{ height: "100vh", width: "100%", backgroundImage: `url(${Landing})`, backgroundSize: "100% 100%" }}>
        <div className="overlay d-flex justify-content-center align-items-end py-5" style={{ height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="bl-cont my-4 d-flex justify-content-between align-items-end flex-row" style={{ height: "50%", width: "90%" }}>
            <div className="blc-left mx-1 my-1 d-flex justify-content-around flex-column" style={{ flexBasis: "60%", height: "98%", width: "100%", color: "#fff" }}>
              <h1 style={{ fontFamily: "Clash Display", fontWeight: "500", fontSize: "46px" }}>Travel Lovers prefer to stay in hostels rather than hotels</h1>
              <h6 style={{ fontWeight: "500", fontSize: "20px" }}>We are honored to be a part of something that brings so much to so many and will continue to do so for many years to come.</h6>
              <div className='d-flex justify-content-start align-items-center flex-row'>
                <div className='d-flex justify-content-center align-items-center' style={{ width: "105px", borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 0)", fontSize: "14px", fontWeight: "500", border: "1px solid #fff", color: "#fff" }}>Travel</div>
                <div className='d-flex justify-content-center align-items-center mx-3' style={{ width: "105px", borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 0)", fontSize: "14px", fontWeight: "500", border: "1px solid #fff", color: "#fff" }}>Nature</div>
                <div className='d-flex justify-content-center align-items-center' style={{ width: "115px", borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 0)", fontSize: "14px", fontWeight: "500", border: "1px solid #fff", color: "#fff" }}>Environment</div>
              </div>
            </div>
            <div className="blc-left mx-1 my-2 d-flex justify-content-center align-items-center" style={{ flexBasis: "25%", height: "50%", width: "100%" }}>
              <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="56" cy="56" r="53.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6" />
                <path d="M55.2929 77.7071C55.6834 78.0976 56.3166 78.0976 56.7071 77.7071L63.0711 71.3431C63.4616 70.9526 63.4616 70.3195 63.0711 69.9289C62.6805 69.5384 62.0474 69.5384 61.6569 69.9289L56 75.5858L50.3431 69.9289C49.9526 69.5384 49.3195 69.5384 48.9289 69.9289C48.5384 70.3195 48.5384 70.9526 48.9289 71.3431L55.2929 77.7071ZM55 34L55 77L57 77L57 34L55 34Z" fill="white" />
              </svg>

            </div>
          </div>
        </div>
      </div>

      <div className="blog-sec1 my-5 d-flex justify-content-between align-items-center flex-column" style={{ height: "100vh", width: "90%" }}>
        <div className="bs1-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%", width: "60%" }}>
          <h4 style={{fontSize:"20px", fontWeight:"500"}}>1. Diverse Celebrations</h4>
          <p style={{textAlign:"center", fontSize:"16px", fontWeight:"500"}}>One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial.</p>
        </div>
        <div className="bs1-img my-5" style={{ flexBasis: "65%", height: "100%", width: "80%", backgroundColor: "#808080" }}></div>
      </div>

      <div className="blog-sec2 my-5 d-flex justify-content-between align-items-center flex-column" style={{ height: "100vh", width: "90%" }}>
      <div className="bs1-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%", width: "60%" }}>
          <h4 style={{fontSize:"20px", fontWeight:"500"}}>1. Diverse Celebrations</h4>
          <p style={{textAlign:"center", fontSize:"16px", fontWeight:"500"}}>One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial.</p>
        </div>
        <div className="bs2-img my-5 d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "65%", height: "100%", width: "80%" }}>
          <div className="bs2-i-left" style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
          <div className="bs2-i-left d-flex justify-content-between align-items-center flex-column" style={{ flexBasis: "48%", height: "100%", width: "100%" }}>
            <div className="bs2-il-top " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
            <div className="bs2-il-down " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
          </div>
        </div>
      </div>

      <div className="blog-sec3 my-5 d-flex justify-content-between align-items-center flex-column" style={{ height: "100vh", width: "90%" }}>
      <div className="bs1-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%", width: "60%" }}>
          <h4 style={{fontSize:"20px", fontWeight:"500"}}>1. Diverse Celebrations</h4>
          <p style={{textAlign:"center", fontSize:"16px", fontWeight:"500"}}>One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial.</p>
        </div>
        <div className="bs3-img my-5 d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "65%", height: "100%", width: "80%" }}>
          <div className="bs3-i-left" style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
          <div className="bs3-i-left " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundColor: "#808080" }}>

          </div>
        </div>
      </div>

      <div className="blog-action-btn" style={{ height: "10vh", width: "20%", backgroundColor: "#808080" }}>

      </div>
      <div className="similar-blogs my-5 py-5" style={{ height: "100vh", width: "90%" }}>
        <div className="sb-cont py-5  d-flex justify-content-center align-items-end flex-column" style={{ height: "100%", width: "100%" }}>
          <div className="sbc-title my-1 d-flex justify-content-between align-items-end flex-row" style={{ flexBasis: "15%", height: "100%", width: "100%" }}>
            <div className="sbct-left mx-1" style={{ flexBasis: "60%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
            <div className="sbct-left mx-1" style={{ flexBasis: "20%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
          </div>
          <div className="sbc-title my-1" style={{ flexBasis: "85%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent
