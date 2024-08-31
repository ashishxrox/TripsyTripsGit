import React from 'react'
import { Link } from 'react-router-dom';

import '../../static/review.css'
import blog1 from '../../static/assets/blog1.jpeg'
import blog2 from '../../static/assets/blog2.jpeg'
import ReviewBox from './ReviewBox'
// import img1 from '../../static/assets/instagram/img1.jpeg'
// import img2 from '../../static/assets/instagram/img2.jpeg'
// import img3 from '../../static/assets/instagram/img3.jpeg'
// import img4 from '../../static/assets/instagram/img4.jpeg'
// import img5 from '../../static/assets/instagram/img5.jpeg'
// import img6 from '../../static/assets/instagram/img6.jpeg'

const Reviews = () => {
  return (
    <div className='my-revs py-5' style={{ background: "transparents" }}>
      <div className="row1" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "column" }}>
        <div className="col d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
          <div className="reviews-cont d-flex justify-content-between align-items-center" style={{ height: "100%" }}>
            <div className="review-cont-left  d-flex justify-content-between flex-column align-items-center" style={{ flexBasis: "49%", width: "100%", height: "100%" }}>
              <div className="rcl-title my-3 d-flex  align-items-center" style={{ flexBasis: "20%", height: "100%", width: "100%" }}>
                <h3 style={{ fontFamily: "Clash Display", fontWeight: "500" }}>What our travellers say</h3>
              </div>
              <div className="rcl-content my-3 d-flex  align-items-center" style={{ flexBasis: "60%", height: "100%", width: "100%" }}>
                <div className="rclc-left mx-1 d-flex justify-content-center flex-column" style={{ flexBasis: "30%", height: "100%", width: "100%", backgroundColor: "#fff" }}>
                  <h4 style={{ fontFamily: "Clash Display", fontSize: "34px", fontWeight: "500", color: "rgba(116, 138, 152, 1)" }}>2000+</h4><h6 style={{ fontSize: "18px", fontWeight: "500" }}>Travellers</h6>
                </div>
                <div className="rclc-left mx-1 d-flex justify-content-center flex-column" style={{ flexBasis: "30%", height: "100%", width: "100%", backgroundColor: "#fff" }}>
                  <h4 style={{ fontFamily: "Clash Display", fontSize: "34px", fontWeight: "500", color: "rgba(116, 138, 152, 1)" }}>100+</h4><h6 style={{ fontSize: "18px", fontWeight: "500" }}>Reviews</h6>
                </div>
                <div className="rclc-left mx-1 d-flex justify-content-center flex-column" style={{ flexBasis: "30%", height: "100%", width: "100%", backgroundColor: "#fff" }}>
                  <h4 style={{ fontFamily: "Clash Display", fontSize: "34px", fontWeight: "500", color: "rgba(116, 138, 152, 1)" }}>46</h4><h6 style={{ fontSize: "18px", fontWeight: "500" }}>Workers</h6>
                </div>
              </div>
              <div className="rcl-btn my-3 d-flex align-items-start" style={{ flexBasis: "20%", height: "100%", width: "100%" }}>
                <div className='rclb-btn d-flex justify-content-center align-items-center' style={{ cursor: "pointer", height: "55px",width:"205px", padding:"10px 10px",border: "1px solid rgba(2, 71, 134, 1)", borderRadius: "30px", transition:"1s" }}>
                  <Link to="/about" style={{ textDecoration: "none", color: "rgba(2, 71, 134, 1)" }}>Read more about us</Link>
                </div>
              </div>
            </div>
            <div className='revs-line' style={{ backgroundColor: "#000" }}></div>
            <div className="review-cont-right" style={{ flexBasis: "49%", width: "100%", height: "100%" }}>
              <ReviewBox />
            </div>
          </div>
        </div>
        <div className="home-blogs my-5 d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
          <div className="home-blogs-cont  d-flex justify-content-between flex-column align-items-center" style={{ width: "85%", height: "100%" }}>
            <div className="blogs-title d-flex justify-content-center align-items-center" style={{ height: "100%", width: "100%" }}>
              <div className='d-flex justify-content-center align-items-center'>
                <h3 style={{ fontFamily: "Clash Display" }}>Read our Blogs</h3>
              </div>
            </div>
            <div className="blogs-main-content d-flex align-items-center my-2" style={{ flexBasis: "80%", height: "100%", width: "100%" }}>
              <div className="blogs-main-content-left d-flex justify-content-between align-items-center flex-column" style={{  border: "1px solid #000", width: "100%", borderRadius: "15px" }}>
                <div className="bmcl-top" style={{ maxHeight: "100%", width: "100%", backgroundColor: "red", borderRadius: "15px", overflow: "hidden" }}>
                  <img src={blog1} alt="" style={{ height: "100%", width: "100%" }} />
                </div>
                <div className="bmcl-bottom d-flex justify-content-between align-items-center py-4 px-3" style={{ height: "100%", width: "100%", overflow: "none" }}>
                  <div className="bmcl-b-left mx-1 d-flex align-items-start flex-column" style={{ flexBasis: "80%", height: "100%", width: "100%" }}>
                    <h4 style={{ fontFamily: "Clash Display", fontWeight: "500" }}>Travel Lovers prefer to stay in hostels rather than hotels</h4>
                    <div className='d-flex justify-content-between align-items-start flex-row' style={{ width: "50%" }}>
                      <p className='py-2 mx-1' style={{ backgroundColor: "rgba(243, 236, 230, 1)", borderRadius: "30px" }}>Travel</p>
                      <p className='py-2 ' style={{ backgroundColor: "rgba(243, 236, 230, 1)", borderRadius: "30px" }}>Nature</p>
                      <p className='py-2 mx-1' style={{ backgroundColor: "rgba(243, 236, 230, 1)", borderRadius: "30px" }}>Environmental</p>
                    </div>
                  </div>
                  <div className="bmcl-b-right mx-1 d-flex justify-content-center align-items-center" style={{ flexBasis: "20%", height: "100%", width: "100%" }}>
                    <svg style={{ cursor: "pointer" }} width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="27" cy="27" r="25.875" stroke="#024786" stroke-width="2.25" />
                      <path d="M38.3961 27.8301C38.8545 27.3716 38.8545 26.6284 38.3961 26.1699L30.9253 18.6992C30.4669 18.2407 29.7236 18.2407 29.2652 18.6992C28.8067 19.1576 28.8067 19.9009 29.2652 20.3593L35.9058 27L29.2652 33.6407C28.8067 34.0991 28.8067 34.8424 29.2652 35.3008C29.7236 35.7593 30.4669 35.7593 30.9253 35.3008L38.3961 27.8301ZM16.4355 28.1739H37.566V25.8261H16.4355V28.1739Z" fill="#024786" />
                    </svg>
                    <a href="#">Read More</a>

                  </div>
                </div>
              </div>
              <div className="blogs-main-content-right d-flex justify-content-between align-items-center flex-column" style={{ flexBasis: "49.5%", height: "100%", width: "100%" }}>
                <div className="bmcr-top d-flex justify-content-center align-items-center flex-column" style={{ flexBasis: "49.5%", height: "100%", width: "100%", borderRadius: "15px", border: "1px solid #000" }}>
                  <div style={{ flexBasis: "60%", height: "100%", width: "100%" }}>
                    <img src={blog2} alt="" style={{ width: "100%", height: "253px", borderRadius: "15px" }} />
                  </div>
                  <div style={{ flexBasis: "40%", height: "100%", width: "100%" }}>
                    <div className="bmcr-bottom d-flex justify-content-between align-items-center py-4 px-3" style={{ flexBasis: "22%", height: "100%", width: "100%", overflow: "none" }}>
                      <div className="bmcr-b-left mx-1 d-flex justify-content-between align-items-start" style={{ flexBasis: "80%", height: "100%", width: "100%" }}>
                        <h4 style={{ fontFamily: "Clash Display", fontWeight: "500" }}>Hiking Tour</h4>
                        <div className='d-flex justify-content-between align-items-start flex-row' style={{ width: "50%" }}>
                          <p className='py-2 mx-1' style={{ backgroundColor: "rgba(243, 236, 230, 1)", borderRadius: "30px" }}>Travel</p>
                          <p className='py-2' style={{ backgroundColor: "rgba(243, 236, 230, 1)", borderRadius: "30px" }}>Nature</p>
                          <p className='py-2 mx-1' style={{ backgroundColor: "rgba(243, 236, 230, 1)", borderRadius: "30px" }}>Environmental</p>
                        </div>
                      </div>
                      <div className="bmcl-b-right mx-1 d-flex justify-content-center align-items-center" style={{ flexBasis: "20%", height: "100%", width: "100%",  }}>
                        <svg style={{ cursor: "pointer" }} width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="27" cy="27" r="25.875" stroke="#024786" stroke-width="2.25" />
                          <path d="M38.3961 27.8301C38.8545 27.3716 38.8545 26.6284 38.3961 26.1699L30.9253 18.6992C30.4669 18.2407 29.7236 18.2407 29.2652 18.6992C28.8067 19.1576 28.8067 19.9009 29.2652 20.3593L35.9058 27L29.2652 33.6407C28.8067 34.0991 28.8067 34.8424 29.2652 35.3008C29.7236 35.7593 30.4669 35.7593 30.9253 35.3008L38.3961 27.8301ZM16.4355 28.1739H37.566V25.8261H16.4355V28.1739Z" fill="#024786" />
                        </svg>
                        <a href="#">Read More</a>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bmcr-top d-flex justify-content-center align-items-center flex-column" style={{ flexBasis: "49.5%", height: "100%", width: "100%", borderRadius: "15px", border: "1px solid #000" }}>
                  <div style={{ flexBasis: "60%", height: "100%", width: "100%" }}>
                    <img src={blog2} alt="" style={{ width: "100%", height: "253px", borderRadius: "15px" }} />
                  </div>
                  <div style={{ flexBasis: "40%", height: "100%", width: "100%" }}>
                    <div className="bmcr-bottom d-flex justify-content-between align-items-center py-4 px-3" style={{ flexBasis: "22%", height: "100%", width: "100%", overflow: "none" }}>
                      <div className="bmcr-b-left mx-1 d-flex justify-content-between align-items-start flex-column" style={{ flexBasis: "80%", height: "100%", width: "100%" }}>
                        <h4 style={{ fontFamily: "Clash Display", fontSize: "24px", fontWeight: "500" }}>Hiking Tour</h4>
                        <div className='d-flex justify-content-between align-items-start flex-row' style={{ width: "50%" }}>
                          <p className='py-2 mx-1' style={{ backgroundColor: "rgba(243, 236, 230, 1)", borderRadius: "30px" }}>Travel</p>
                          <p className='py-2' style={{ backgroundColor: "rgba(243, 236, 230, 1)", borderRadius: "30px" }}>Nature</p>
                          <p className='py-2 mx-1' style={{ backgroundColor: "rgba(243, 236, 230, 1)", borderRadius: "30px" }}>Environmental</p>
                        </div>
                      </div>
                      <div className="bmcl-b-right mx-1 d-flex justify-content-center align-items-center" style={{ flexBasis: "20%", height: "100%", width: "100%" }}>
                        <svg style={{ cursor: "pointer" }} width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="27" cy="27" r="25.875" stroke="#024786" stroke-width="2.25" />
                          <path d="M38.3961 27.8301C38.8545 27.3716 38.8545 26.6284 38.3961 26.1699L30.9253 18.6992C30.4669 18.2407 29.7236 18.2407 29.2652 18.6992C28.8067 19.1576 28.8067 19.9009 29.2652 20.3593L35.9058 27L29.2652 33.6407C28.8067 34.0991 28.8067 34.8424 29.2652 35.3008C29.7236 35.7593 30.4669 35.7593 30.9253 35.3008L38.3961 27.8301ZM16.4355 28.1739H37.566V25.8261H16.4355V28.1739Z" fill="#024786" />
                        </svg>
                        <a href="#">Read More</a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="blogs-btn d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
          <div className="blogs-btn-cont d-flex justify-content-center align-items-center" style={{ height: "55px", width: "200px", borderRadius: "30px", border: "1px solid rgba(2, 71, 134, 1)" }}>
            <Link to="/blogs" style={{ color: "rgba(2, 71, 134, 1)", textDecoration: "none", fontSize: "16px" }}>  Read more blogs</Link>
          </div>
        </div>
        <div className="tripsy-insta-title d-flex justify-content-between align-items-center" style={{ width: "85%", marginTop:"75px" }}>
          <div className="insta-title-left d-flex justify-content-start align-items-end" style={{ height: "100%" }}>
            <h3 style={{ fontFamily: "Clash Display", fontWeight: "500" }}>Check out our Instagram</h3>
          </div>
          <div className="insta-title-right d-flex justify-content-end align-items-end" style={{ height: "100%" }}>
            <div className="follow-btn d-flex justify-content-center align-items-center" style={{ width: "200px", border: "1px solid rgba(2, 71, 134, 1)", borderRadius: "30px" }}>
              <a href="https://www.instagram.com/tripsytrips_" target="_blank" style={{ color: "rgba(2, 71, 134, 1)", textDecoration: "none", fontSize: "16px" }}>Follow us for more</a>
            </div>
          </div>
        </div>

        <div className="col2 instagram" style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", width: "85%", position: "relative", zIndex: "1" }}>

          <div className="tripsy-insta-frame d-flex justify-content-center align-item-center" style={{ flexBasis: "85%", height: "100%", width: "100%" }}>
            <iframe style={{ width: "100%", overflowY: "hidden" }} title='Tripsy Trips Instagram Feed' src="https://www.instagram.com/tripsytrips_/embed" frameBorder="0" allowtransparency="true" ></iframe>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Reviews
