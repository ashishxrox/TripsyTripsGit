import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import PkgScrollDownBtn from '../../package/PkgScrollDownBtn'
import BImg1 from '../../../static/assets/blogs/blog2/blog2_img1.jpg'
import BImg2 from '../../../static/assets/blogs/blog2/blog2_img2.jpg'
import BImg3 from '../../../static/assets/blogs/blog2/blog2_img3.jpg'
import BImg4 from '../../../static/assets/blogs/blog2/blog2_img4.jpg'
import BImg5 from '../../../static/assets/blogs/blog2/blog2_img5.jpg'
import BImg6 from '../../../static/assets/blogs/blog2/blog2_img6.jpg'
import BImg7 from '../../../static/assets/blogs/blog2/blog2_img7.jpg'

const Blog2 = () => {

    const [show, setShow] = useState(false)

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
                            <h1 style={{ fontFamily: "Clash Display", fontWeight: "500" }}>The Complete List of E-visa Destinations for Indian Passport Holders</h1>
                            <h6 style={{ fontWeight: "500", fontSize: "20px" }}>Your Ultimate Guide to E-visa Travel  </h6>
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
                    <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>1. Your Ultimate Guide to E-visa Options for Indian Travellers</h4>
                    <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}>Travelling has become increasingly accessible for Indian passport holders, with a growing number of destinations offering e-Visas. Whether you're looking to explore new cultures or relax on a tropical beach, understanding where you can easily apply for an e-visa is essential. This guide covers all the e-Visa destinations for Indian travellers, so you can plan your next adventure with ease.</p>
                </div>
                <div className="bs1-img mb-5" style={{ flexBasis: "65%", height: "100%", backgroundImage: `url("${BImg2}")`, backgroundSize: "cover", backgroundPosition: "top" }}></div>
            </div>

            <div className="blog-sec2 my-5 d-flex justify-content-between align-items-center flex-column" style={{ width: "90%" }}>
                <div className="bs1-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%" }}>
                    <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }} >2. E-visa Countries for Indian Passport Holders</h4>
                    <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}>
                        Many countries offer e-Visas to Indian passport holders, making it easier to travel with a simple online application. Here’s a complete list:
                    </p>
                    <div className='d-flex justify-content-between align-items-start flex-row' style={{ width: "100%" }}>
                        <ul style={{ flexBasis: "50%" }}>
                            <li>Vietnam</li>
                            <li>Hong Kong</li>
                            <li>Azerbaijan</li>
                            <li>United Arab Emirates</li>
                            <li>Morocco</li>
                            <li>Turkey</li>
                            <li>Egypt</li>
                            <li>Bahrain</li>
                            <li>Oman</li>
                            <li>Cambodia</li>
                            <li>Tanzania</li>
                            <li>Mongolia</li>

                        </ul>
                        <ul style={{ flexBasis: "50%" }}>
                            <li>Russia</li>
                            <li>Ethiopia</li>
                            <li>Georgia</li>
                            <li>Indonesia</li>
                            <li>Rwanda</li>
                            <li>Jordan</li>
                            <li>Moldova</li>
                            <li>Qatar</li>
                            <li>Kyrgyzstan</li>
                            <li>Laos</li>
                            <li>Madagascar</li>
                            <li>Saudi Arabia</li>

                        </ul>
                    </div>
                    <p style={{ textAlign: "center" }}>With numerous destinations offering e-Visas, your dream of exploring new places is more accessible than ever. Whether you're planning a spontaneous trip or a planned vacation, this guide provides all the information you need to dream it, plan it, and book it!</p>

                </div>
                <div className="bs2-img mb-2 d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "65%", height: "100%" }}>
                    <div className="bs2-i-left" style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg3}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                    <div className="bs2-i-left d-flex justify-content-between align-items-center flex-column" style={{ flexBasis: "48%", height: "100%", width: "100%" }}>
                        <div className="bs2-il-top " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg4}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        <div className="bs2-il-down " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg5}")`, backgroundSize: "cover", backgroundPosition: "top" }}></div>
                    </div>
                </div>
            </div>

            <div className="blog-sec3 my-5 d-flex justify-content-between align-items-center flex-column" style={{ height: "750px", width: "90%" }}>
                <div className="bs3-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%" }}>
                    <h4 style={{ fontSize: "20px", fontWeight: "500" }}>3. Internal Linking: </h4>
                    <div className='d-flex justify-content-center align-items-center bs3-internal-links' style={{ width: "100%" }}>
                        <div className='d-flex justify-content-around align-items-center flex-row' style={{ flexBasis: "50%", height: "100%", width: "100%" }}>
                            <ul>
                                <li><a href="https://tripsytrips.com/visa/application/Vietnam" target="_blank">Vietnam</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Azerbaijan" target="_blank">Azerbaijan</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Bahrain" target="_blank">Bahrain</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Morocco" target="_blank">Morocco</a></li>
                                

                            </ul>
                            <ul >

                                <li><a href="https://tripsytrips.com/visa/application/Oman" target="_blank">Oman</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Cambodia" target="_blank">Cambodia</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Tanzania" target="_blank">Tanzania</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Mongolia" target="_blank">Mongolia</a></li>
                            </ul>
                        </div>
                        <div className='d-flex justify-content-around align-items-center flex-row' style={{ flexBasis: "50%", height: "100%", width: "100%" }}>
                            <ul>
                                <li><a href="https://tripsytrips.com/visa/application/Saudi%20Arabia" target="_blank">Saudi Arabia</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Madagascar" target="_blank">Madagascar</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Jordan" target="_blank">Jordan</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Moldova" target="_blank">Moldova</a></li>


                            </ul>
                            <ul>
                                <li><a href="https://tripsytrips.com/visa/application/Russia" target="_blank">Russia</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Indonesia" target="_blank">Indonesia</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Georgia" target="_blank">Georgia</a></li>
                                <li><a href="https://tripsytrips.com/visa/application/Egypt" target="_blank">Egypt</a></li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className="bs3-img mb-5 d-flex justify-content-between align-items-center" style={{ flexBasis: "65%", height: "100%", width: "80%" }}>
                    <div className="bs3-i-left" style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg6}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                    <div className="bs3-i-left " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg7}")`, backgroundSize: "cover", backgroundPosition: "center" }}>

                    </div>
                </div>
            </div>

            <div className="blog-action-btn" style={{}}>
                <a className='final-btn ' href="https://wa.me/918805960110" style={{ width: "164px", height: "54px", padding: "14px 30px", color: "#fff", textDecoration: "none", borderRadius: "30px" }}>Book Package</a>
            </div>

            <div className={`reach-pkg-btn justify-content-around align-items-center flex-row pt-3 ${show ? "unhide" : "hide"}`} style={{ width: "350px", height: "105px", backgroundColor: "#fff", position: "fixed", zIndex: "99999", top: "550px", right: "25px", borderRadius: "100px", border: "1px solid #000" }}>
                <div className='d-flex justify-content-center align-items-start flex-column' style={{ height: "100%" }}>
                    <h5 style={{ fontFamily: "General Sans", fontWeight: "500", fontSize: "18px", color: "#024786" }}>See all Packages</h5>
                    <p style={{ fontFamily: "General Sans", fontWeight: "400", fontSize: "14px", color: "#024786" }}>Let's Personalize your Trip</p>
                </div>
                <Link to='/package' className='mb-3'>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="27.5" cy="27.5" r="25.875" stroke="#024786" stroke-width="2.25" />
                        <path d="M38.898 28.3301C39.3565 27.8716 39.3565 27.1284 38.898 26.6699L31.4273 19.1992C30.9688 18.7407 30.2256 18.7407 29.7671 19.1992C29.3087 19.6576 29.3087 20.4009 29.7671 20.8593L36.4078 27.5L29.7671 34.1407C29.3087 34.5991 29.3087 35.3424 29.7671 35.8008C30.2256 36.2593 30.9688 36.2593 31.4273 35.8008L38.898 28.3301ZM16.9375 28.6739H38.0679V26.3261H16.9375V28.6739Z" fill="#024786" />
                    </svg>
                </Link>
            </div>

            <meta name='E-visa destinations for Indian travellers' description="Discover all e-visa destinations for Indian passport holders. Plan your next trip with ease and skip the hassle of traditional visa applications."></meta>
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

export default Blog2
