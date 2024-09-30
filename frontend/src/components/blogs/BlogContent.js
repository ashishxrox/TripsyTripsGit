import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BlogContext from '../../context/Blogs/BlogContext'
import Landing from '../../static/assets/blogSpecLand.jpeg'
import PkgScrollDownBtn from '../package/PkgScrollDownBtn'

const BlogContent = () => {
  const { blog_title } = useParams()
  const { blogData } = useContext(BlogContext)

  const blog = blogData.filter(data => data.title === blog_title)
  console.log(blog)
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <div className="blog-landing " style={{ height: "750px", width: "100%", backgroundImage: `url(${blog[0].img_src})`, backgroundSize: "100% 100%" }}>
        <div className="overlay d-flex justify-content-center align-items-end py-5" style={{ height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="bl-cont my-4 d-flex justify-content-between align-items-end flex-row" style={{ height: "50%", width: "90%" }}>
            <div className="blc-left mx-1 my-1 d-flex justify-content-around flex-column" style={{ flexBasis: "60%", height: "98%", width: "100%", color: "#fff" }}>
              <h1 style={{ fontFamily: "Clash Display", fontWeight: "500", fontSize: "46px" }}>{blog_title}</h1>
              <h6 style={{ fontWeight: "500", fontSize: "20px" }}>{blog[0].cover_text}</h6>
              {/* <div className='d-flex justify-content-start align-items-center flex-row'>
                <div className='d-flex justify-content-center align-items-center' style={{ width: "105px", borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 0)", fontSize: "14px", fontWeight: "500", border: "1px solid #fff", color: "#fff" }}>Travel</div>
                <div className='d-flex justify-content-center align-items-center mx-3' style={{ width: "105px", borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 0)", fontSize: "14px", fontWeight: "500", border: "1px solid #fff", color: "#fff" }}>Nature</div>
                <div className='d-flex justify-content-center align-items-center' style={{ width: "115px", borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 0)", fontSize: "14px", fontWeight: "500", border: "1px solid #fff", color: "#fff" }}>Environment</div>
              </div> */}
            </div>
            <div className="blc-left mx-1 my-2 d-flex justify-content-center align-items-center" style={{ flexBasis: "25%", height: "50%", width: "100%" }}>
              <a href="#blog-sec1" style={{ height: "100%", width: "100%", textDecoration: "none", color: "#fff" }}>
                <PkgScrollDownBtn />

              </a>

            </div>
          </div>
        </div>
      </div>

      <div className="blog-sec1 my-5 d-flex justify-content-between align-items-center flex-column" id='blog-sec1' style={{ width: "90%", height: "750px" }}>
        <div className="bs1-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%", width: "60%" }}>
          <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>{blog[0].content[0].sub_title}</h4>
          <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}>{blog[0].content[0].blog_cont}</p>
        </div>
        <div className="bs1-img my-5" style={{ flexBasis: "65%", height: "100%", width: "80%", backgroundColor: "#808080" }}></div>
      </div>

      <div className="blog-sec2 my-5 d-flex justify-content-between align-items-center flex-column"  style={{ width: "90%", height: " 750px" }}>
        <div className="bs1-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%", width: "60%" }}>
          <h4 style={{ fontSize: "20px", fontWeight: "500" }} >{blog[0].content[1].sub_title}</h4>
          <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}>{blog[0].content[1].blog_cont}</p>
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
          <h4 style={{ fontSize: "20px", fontWeight: "500" }}>1. Diverse Celebrations</h4>
          <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}>One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial.</p>
        </div>
        <div className="bs3-img my-5 d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "65%", height: "100%", width: "80%" }}>
          <div className="bs3-i-left" style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
          <div className="bs3-i-left " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundColor: "#808080" }}>

          </div>
        </div>
      </div>

      <div className="blog-action-btn" style={{}}>
        <a className='final-btn ' href="https://wa.me/918805960110" style={{ width: "164px", height: "54px", padding: "14px 30px", color: "#fff", textDecoration: "none", borderRadius: "30px" }}>Book Package</a>
      </div>
      <meta name='Visa-free destinations for Indian travellers ' description="Discover all visa-free destinations for Indian passport holders. Plan your next trip with ease and skip the hassle of traditional visa applications. "></meta>
      {/* <div className="similar-blogs my-5 py-5" style={{ height: "100vh", width: "90%" }}>
        <div className="sb-cont py-5  d-flex justify-content-center align-items-end flex-column" style={{ height: "100%", width: "100%" }}>
          <div className="sbc-title my-1 d-flex justify-content-between align-items-end flex-row" style={{ flexBasis: "15%", height: "100%", width: "100%" }}>
            <div className="sbct-left mx-1" style={{ flexBasis: "60%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
            <div className="sbct-left mx-1" style={{ flexBasis: "20%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
          </div>
          <div className="sbc-title my-1" style={{ flexBasis: "85%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
        </div>
      </div> */}
    </div>
  )
}

export default BlogContent
