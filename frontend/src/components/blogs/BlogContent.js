import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import BlogContext from '../../context/Blogs/BlogContext'
import PkgScrollDownBtn from '../package/PkgScrollDownBtn'
import BImg1 from '../../static/assets/blogs/blog1_img1.jpg'
import BImg2 from '../../static/assets/blogs/blog1_img5.jpg'
import BImg3 from '../../static/assets/blogs/blog1_img3.jpg'
import BImg4 from '../../static/assets/blogs/blog1_img4.jpg'
import BImg5 from '../../static/assets/blogs/blog1_img2.jpg'

const BlogContent = () => {
  const { blog_title } = useParams()
  const { blogData } = useContext(BlogContext)
  const [show, setShow] = useState(false)

  const blog = blogData.filter(data => data.title === blog_title)
  console.log(blog)

  

  useEffect(() => {
    const handleScroll = () => {
      const blogSec1 = document.getElementById('blog-sec1');
      const topOffset = blogSec1.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= topOffset) {
        setShow(true)
      } else if (scrollPosition < topOffset) {
        setShow(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <div className="blog-landing " style={{ width: "100%", backgroundImage: `url(${BImg1})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="overlay d-flex justify-content-center py-5 blog-overlay" style={{ height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="bl-cont my-4 d-flex justify-content-between " style={{ height: "50%", width: "90%" }}>
            <div className="blc-left mx-1 my-1 d-flex justify-content-around flex-column" style={{ flexBasis: "60%", height: "98%", width: "100%", color: "#fff" }}>
              <h1 style={{ fontFamily: "Clash Display", fontWeight: "500" }}>The Complete List of Visa-Free Countries for Indian Passport Holders</h1>
              <h6 style={{ fontWeight: "500", fontSize: "20px" }}>Your Ultimate Guide to Visa-Free Countries </h6>
              {/* <div className='d-flex justify-content-start align-items-center flex-row'>
                <div className='d-flex justify-content-center align-items-center' style={{ width: "105px", borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 0)", fontSize: "14px", fontWeight: "500", border: "1px solid #fff", color: "#fff" }}>Travel</div>
                <div className='d-flex justify-content-center align-items-center mx-3' style={{ width: "105px", borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 0)", fontSize: "14px", fontWeight: "500", border: "1px solid #fff", color: "#fff" }}>Nature</div>
                <div className='d-flex justify-content-center align-items-center' style={{ width: "115px", borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 0)", fontSize: "14px", fontWeight: "500", border: "1px solid #fff", color: "#fff" }}>Environment</div>
              </div> */}
            </div>
            <div className="blc-right mx-1 my-2 d-flex justify-content-end align-items-center" style={{ flexBasis: "25%", height: "50%" }}>
              <a href="#blog-sec1" style={{ height: "100%", width: "100%", textDecoration: "none", color: "#fff" }}>
                <PkgScrollDownBtn />

              </a>

            </div>
          </div>
        </div>
      </div>

      <div className="blog-sec1 my-5 d-flex justify-content-between align-items-center flex-column" id='blog-sec1' style={{ width: "90%" }}>
        <div className="bs1-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "25%", height: "100%" }}>
          <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>1. Your Ultimate Guide to Visa-Free Countries for Indian Travellers</h4>
          <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}>Travelling has become increasingly accessible for Indian passport holders, with a growing number of visa-free countries. Whether you're looking to explore new cultures or relax on a tropical beach, understanding where you can travel without the hassle of obtaining a visa is essential. This guide covers all the visa-free countries for Indian travellers, so you can plan your next adventure with ease. </p>
        </div>
        <div className="bs1-img mb-5" style={{ flexBasis: "65%", height: "100%", backgroundImage: `url("${BImg5}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
      </div>

      <div className="blog-sec2 my-5 d-flex justify-content-between align-items-center flex-column" style={{ width: "90%" }}>
        <div className="bs1-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%" }}>
          <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }} >2. Visa-Free Countries for Indian Passport Holders </h4>
          <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}>
            Indian passport holders have the privilege of travelling to several countries without the need for a visa. Here’s a comprehensive list:
          </p>
          <div className='d-flex justify-content-between align-items-start flex-row' style={{ width: "100%" }}>
            <ul style={{ flexBasis: "50%" }}>
              <li>Barbados</li>
              <li>Bhutan</li>
              <li>Dominica</li>
              <li>Grenada</li>
              <li>Haiti</li>
              <li>Thailand</li>
              <li>Maldives</li>
              <li>Mauritius</li>
              <li>Montserrat</li>
              <li>Senegal</li>
            </ul>
            <ul style={{ flexBasis: "50%" }}>
              <li>Serbia</li>
              <li>St. Kitts and Nevis</li>
              <li>St. Vincent and the Grenadines</li>
              <li>Trinidad and Tobago</li>
              <li>Tunisia</li>
              <li>Vanuatu</li>
              <li>Malaysia</li>
              <li>Sri Lanka</li>
              <li>Seychelles</li>
              <li>Nepal</li>

            </ul>
          </div>
          <p style={{ textAlign: "center" }}>Travelling the world has never been more straightforward for Indian passport holders. With numerous visa-free countries, your dream of exploring new places is more accessible than ever. Whether you're planning a spontaneous trip or a planned vacation, this guide provides all the information you need to dream it, plan it, and book it! </p>

        </div>
        <div className="bs2-img mb-2 d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "65%", height: "100%" }}>
          <div className="bs2-i-left" style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg2}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          <div className="bs2-i-left d-flex justify-content-between align-items-center flex-column" style={{ flexBasis: "48%", height: "100%", width: "100%" }}>
            <div className="bs2-il-top " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg3}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="bs2-il-down " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg4}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          </div>
        </div>
      </div>

      {/* <div className="blog-sec3 my-5 d-flex justify-content-between align-items-center flex-column" style={{ height: "100vh", width: "90%" }}>
        <div className="bs1-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%", width: "60%" }}>
          <h4 style={{ fontSize: "20px", fontWeight: "500" }}>1. Diverse Celebrations</h4>
          <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}>One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial.</p>
        </div>
        <div className="bs3-img mb-5 d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "65%", height: "100%", width: "80%" }}>
          <div className="bs3-i-left" style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundColor: "#808080" }}></div>
          <div className="bs3-i-left " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundColor: "#808080" }}>

          </div>
        </div>
      </div> */}

      <div className="blog-action-btn" style={{}}>
        <a className='final-btn ' href="https://wa.me/918805960110" style={{ width: "164px", height: "54px", padding: "14px 30px", color: "#fff", textDecoration: "none", borderRadius: "30px" }}>Book Package</a>
      </div>

      <div className={`reach-pkg-btn justify-content-around align-items-center flex-row pt-3 ${show?"unhide":"hide"}`} style={{ width: "350px", height: "105px", backgroundColor: "#fff", position: "fixed", zIndex: "99999", top: "550px", right: "25px", borderRadius: "100px", border: "1px solid #000" }}>
        <div className='d-flex justify-content-center align-items-start flex-column' style={{height:"100%"}}>
          <h5 style={{fontFamily:"General Sans", fontWeight:"500", fontSize:"18px", color:"#024786"}}>See all Packages</h5>
          <p style={{fontFamily:"General Sans", fontWeight:"400", fontSize:"14px", color:"#024786"}}>Let's Personalize your Trip</p>
        </div>
        <Link to='/package' className='mb-3'>
          <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="27.5" cy="27.5" r="25.875" stroke="#024786" stroke-width="2.25" />
          <path d="M38.898 28.3301C39.3565 27.8716 39.3565 27.1284 38.898 26.6699L31.4273 19.1992C30.9688 18.7407 30.2256 18.7407 29.7671 19.1992C29.3087 19.6576 29.3087 20.4009 29.7671 20.8593L36.4078 27.5L29.7671 34.1407C29.3087 34.5991 29.3087 35.3424 29.7671 35.8008C30.2256 36.2593 30.9688 36.2593 31.4273 35.8008L38.898 28.3301ZM16.9375 28.6739H38.0679V26.3261H16.9375V28.6739Z" fill="#024786" />
        </svg>
        </Link>
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
