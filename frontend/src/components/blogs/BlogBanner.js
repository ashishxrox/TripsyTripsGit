import React from 'react'
import visaBanner from '../../static/assets/visaBanner.png'

const BlogBanner = () => {
    return (
        <div className="about-banner my-2 d-flex justify-content-center align-items-center" style={{ width: "100%", height: "310px", backgroundImage: `url(${visaBanner})`, backgroundSize:"cover", backgroundRepeat: "no-repeat" }}>
            <div className="overlay d-flex justify-content-center align-items-center" style={{ height: "100%", width: "100%", background: "radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0) 100%)" }}>
                <div className="about-title-box d-flex justify-content-center align-items-center" style={{ width: "35%", height: "40%" }}>
                    <h1 style={{ fontFamily: "Clash Display", fontSize: "60px", fontWeight: "400", color: "#fff" }}>Blogs</h1>
                </div>
            </div>

        </div>
    )
}

export default BlogBanner
