import React from 'react'

import '../../static/review.css'
// import img1 from '../../static/assets/instagram/img1.jpeg'
// import img2 from '../../static/assets/instagram/img2.jpeg'
// import img3 from '../../static/assets/instagram/img3.jpeg'
// import img4 from '../../static/assets/instagram/img4.jpeg'
// import img5 from '../../static/assets/instagram/img5.jpeg'
// import img6 from '../../static/assets/instagram/img6.jpeg'

const Reviews = () => {
  return (
    <div className='my-revs py-5' style={{ backgroundColor: "#000047" }}>
      <div className="row1" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection:"column-reverse"}}>
        <div className="col1 my-5" style={{ flexBasis: "50%", textAlign: "center", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor:"#000047"}}>
          <h4 className="tripsy-title"style={{ fontSize: "52px", fontFamily: "Trirong", color: "#fff", fontWeight: "bold", textShadow: "2px 2px 5px #000047", borderRadius: "55px", backgroundColor:"#E8C81C", textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}><p><ion-icon name="airplane-outline"></ion-icon></p>Tripsy Trippers</h4>
          <div className="rev-body">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <div className="carousel-body" style={{ backgroundColor: "#3488E8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", color: "white", padding: "15px 5px" }}>
                    <h3 style={{ fontFamily: "Oswald" }}>Trisha Fernandes</h3>
                    <hr />
                    <p style={{ width: "70%", textAlign: "center" }}>I have booked flight tickets at multiple occasions with Tripsy Trips and it's always been a great experience. I got good deals and upgrades that are hard to find online. I didn't have to bother about managing big group (family/friends) bookings, flight changes, boarding passes and other hassles that come with self booking. They are quick at responding to queries and I highly recommend to use their services.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-body" style={{ backgroundColor: "#39FFDE", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", padding: "15px 5px" }}>
                    <h3 style={{ fontFamily: "Oswald", color: "#3488E8" }}>Aakash Zivaya</h3>
                    <hr />
                    <p style={{ width: "70%", textAlign: "center" }}>Zero Hassle. Excellent service and best prices! They are super reliable, I have asked them to book my tickets multiple times now and they have always given the best price compared to EMT or MMT or any other platforms. They even provide you with an option of selecting your seats at no extra cost plus a free meal on every flight you book.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-body" style={{ backgroundColor: "#E8C81C", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", padding: "15px 5px"}}>
                    <h3 style={{ fontFamily: "Oswald" }}>Jaimin Mehta</h3>
                    <hr />
                    <p style={{ width: "70%", textAlign: "center" }}>I usually don’t book through travel agents, but kid you not, they took me by surprise. They have given me really good deals, along with great assistance and support.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
          <div className="col2 instagram" style={{ flexBasis: "50%", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", width:"80%"}}>
            <h4 className="tripsy-insta"style={{fontSize: "40px",fontFamily: "Trirong", color: "#ffffff", fontWeight: "bold", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", textShadow:"2px 2px 5px #000", borderRadius: "55px", backgroundColor:"#E8C81C"}}><p><i className="fa-solid fa-hashtag"></i></p>Find Us on Instagram
            
            </h4>
            {/* eslint-disable-next-line */}
            {/* <a href='https://www.instagram.com/tripsytrips_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className="parent" target="_blank" style={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-around", backgroundColor: "blue" }}>
              <div className="row" style={{flexBasis:"50%",textAlign: "center" }}>
                <div className="col" style={{ backgroundImage: `url(${img1})` }}>
                </div>
                <div className="col" style={{ backgroundImage: `url(${img2})` }}>
                </div>
                <div className="col" style={{ backgroundImage: `url(${img3})` }}>
                </div>
              </div>
              <div className="row" style={{ flexBasis: "50%", width: "100%", textAlign: "center" }}>
                <div className="col" style={{ backgroundImage: `url(${img4})` }}>
                </div>
                <div className="col" style={{ backgroundImage: `url(${img5})` }}>
                </div>
                <div className="col" style={{ backgroundImage: `url(${img6})` }}>
                </div>
              </div>
            </a> */}
            <iframe title='Tripsy Trips Instagram Feed' src="https://www.instagram.com/tripsytrips_/embed" style={{width:"100%"}} frameBorder="0"  allowtransparency="true" className='insta-iframe'></iframe>
          

          </div>
      </div>
    </div>
  )
}

export default Reviews
