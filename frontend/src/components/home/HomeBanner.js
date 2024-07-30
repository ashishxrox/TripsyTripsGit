import React from 'react'
import '../../static/banner.css'
import UspBox from './UspBox'

import Landing from '../../static/assets/homeLandingImg.jpeg'

const HomeBanner = () => {
    const myStyle = {
        // width: "100%",
        // height: "120vh",
        backgroundColor: "#fff"
    }
    return (
        <div className="home-banner" style={myStyle}>
            <div className="img-box d-flex justify-content-center" style={{ width: "100%", backgroundImage: `url(${Landing})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                {/* Overlay with radial gradient */}
                <div className='d-flex justify-content-center align-items-start' style={{ position: "relative", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)" }}>
                    <div className="landing-text d-flex justify-content-between flex-column align-items-center" style={{ height: "150px", color: "#fff", position: "relative" }}>
                        <h1 style={{ fontFamily: "Clash Display", lineHeight: "74px", textAlign: "center" }}>Let's Travel The World</h1>
                        <h5 style={{fontFamily: "General Sans", fontSize:"20px", fontWeight:"500"}}>Dream It. Plan It. Book It.</h5>
                    </div>
                </div>

            </div>

            {/* DIV FOR USP BOX */}
            {/* <UspBox /> */}
        </div>
    )
}

export default HomeBanner
