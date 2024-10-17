import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import PkgScrollDownBtn from '../../package/PkgScrollDownBtn'
import BImg1 from '../../../static/assets/blogs/blog3/blog3_img1.png'
import BImg2 from '../../../static/assets/blogs/blog3/blog3_img2.jpg'
import BImg3 from '../../../static/assets/blogs/blog3/blog3_img3.jpeg'
import BImg4 from '../../../static/assets/blogs/blog3/blog3_img4.jpeg'
import BImg5 from '../../../static/assets/blogs/blog3/blog3_img5.jpeg'
import BImg6 from '../../../static/assets/blogs/blog3/blog3_img6.jpeg'
import BImg7 from '../../../static/assets/blogs/blog3/blog3_img7.jpeg'

const Blog3 = () => {

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
                            <h1 style={{ fontFamily: "Clash Display", fontWeight: "500" }}>10 Essential Tripsy Tips for Guilt-Free Sustainable Travel</h1>
                            <h6 style={{ fontWeight: "500", fontSize: "20px" }}>Here are ten super important tips to make your travels more sustainable whilst keeping it enjoyable!</h6>
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
                    {/* <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>1. Your Ultimate Guide to E-visa Options for Indian Travellers</h4> */}
                    <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}>Hey, travel lovers! Ready to jet off on your next adventure without leaving a hefty carbon footprint behind? From one Tripsy Tripper to another, let's explore the world while being conscious of our environment. Every travel could be both fun AND eco-friendly!</p>
                </div>
                <div className="bs1-img mb-5" style={{ flexBasis: "65%", height: "100%", backgroundImage: `url("${BImg2}")`, backgroundSize: "cover", backgroundPosition: "top" }}></div>
            </div>

            <div className="blog-sec2 blog2-sec2 my-5 d-flex justify-content-between align-items-center flex-column" style={{ width: "90%" }}>
                <div className="bs1-text my-1 d-flex justify-content-around align-items-start flex-column" style={{ flexBasis: "35%", height: "100%" }}>
                    <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }} >Here are ten super important tips to make your travels more sustainable whilst keeping it enjoyable!</h4>
                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                        1. Choose Smarter Flights
                    </h5>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>
                        Air travel contributes a significant chunk to your carbon footprint, so if flying is a must, make it count! Pack light to reduce the plane's load and opt for non-stop flights whenever possible. Not only will you help the environment, but you'll also get to your destination faster - it’s a win-win situation!
                    </p>

                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                        2. Ditch Single-Use Plastics
                    </h5>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>
                        Plastic water bottles? So passé! Bring your own stylish reusable bottle instead, perhaps one with measurements to help you keep track of your intake. If you’re heading somewhere with questionable water quality, grab a portable water purifier. And don’t forget reusable bags and utensils—your future self (and the planet) will thank you!
                    </p>

                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                        3. Go for Eco-Friendly Toiletries
                    </h5>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>
                        Travel-sized toiletries may look cute, but they contribute massively to plastic waste. Instead, pack refillable containers filled with your favorite products from home. Plus, who knows if the hotel toiletries don’t suit you well? It’s always best to have your fav brands around for the safest experience. Trust us, the ocean’s creatures and your hair will be grateful!
                    </p>



                </div>
                <div className="bs2-img mb-2 d-flex justify-content-between align-items-center flex-row" style={{ flexBasis: "65%", height: "100%" }}>
                    <div className="bs2-i-left" style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg3}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                    <div className="bs2-i-left d-flex justify-content-between align-items-center flex-column" style={{ flexBasis: "48%", height: "100%", width: "100%" }}>
                        <div className="bs2-il-top " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg4}")`, backgroundSize: "cover", backgroundPosition: "top" }}></div>
                        <div className="bs2-il-down " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg5}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                    </div>
                </div>
            </div>

            <div className="blog2-sec3 my-5 d-flex justify-content-between align-items-center flex-column" style={{ width: "90%" }}>
                <div className="bs3-text my-1 d-flex justify-content-around align-items-start flex-column" style={{ flexBasis: "35%", height: "100%" }}>
                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                        4. Conserve Water
                    </h5>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>
                        Water, as we know, is a precious resource, and we mustn't forget this while on vacation! Take shorter showers and turn off the tap while brushing your teeth. If you’re camping, opt for biodegradable soaps to keep nature pristine.
                    </p>
                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                        5. Research Before You Book
                    </h5>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>
                        Before you settle on accommodations or tours, do your homework! Look for certifications from recognized bodies that promote sustainable practices. And remember, not every "eco-friendly" label is legit—ask questions to uncover the truth!
                    </p>
                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                        6. Support Local Economies
                    </h5>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>
                        When traveling, immerse yourself in local culture by choosing homestays, hiring local guides, and shopping at artisan markets. It’s a great way to show your support while ensuring your money goes directly to the community!
                    </p>
                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                        7. Enjoy Low-Impact Adventures
                    </h5>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>
                        Opt for activities that tread lightly on the environment, like hiking, kayaking, or even glamping! These options often lead to unforgettable experiences while minimizing your ecological footprint.
                    </p>
                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                        8. Give Back
                    </h5>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>
                        Think about how you can leave a positive mark during your travels. Participate in community cleanups or donate to local charities. Every little bit contributes to a big difference, you could just make someone’s life much easier by being proactive in this initiative – seeing such efforts could have many restore their faith in humanity, and perhaps even enable a chain reaction to follow similar footsteps!
                    </p>
                </div>
                <div className="bs3-img mb-5 d-flex justify-content-between align-items-center" style={{ flexBasis: "65%", height: "100%" }}>
                    <div className="bs3-i-left" style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg6}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                    <div className="bs3-i-left " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg7}")`, backgroundSize: "cover", backgroundPosition: "center" }}>

                    </div>
                </div>
            </div>

            <div className="blog-sec4 my-5 d-flex justify-content-between align-items-center flex-column" style={{ width: "90%" }}>
                <div className="bs1-text my-1 d-flex justify-content-around align-items-start flex-column" style={{ flexBasis: "35%", height: "100%" }}>
                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                    9. Walk and Explore 
                    </h5>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>
                    What’s the rush? Ditch the rental car and explore on foot or by bike. Not only will you discover hidden gems, but you’ll also reduce emissions. On the plus side, you’re increasing your daily steps for the day! Your body will, no doubt, reward you for it! 
                    </p>

                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                    10. Spread the Word 
                    </h5>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>
                    Finally, share your recent experiences after successfully following the eco-friendly initiative! Talk to friends and family about sustainable travel tips. The more we spread the word, the more we can all enjoy guilt-free adventures while protecting our planet. 
                    </p>

                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                        3. Go for Eco-Friendly Toiletries
                    </h5>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>
                        Travel-sized toiletries may look cute, but they contribute massively to plastic waste. Instead, pack refillable containers filled with your favorite products from home. Plus, who knows if the hotel toiletries don’t suit you well? It’s always best to have your fav brands around for the safest experience. Trust us, the ocean’s creatures and your hair will be grateful!
                    </p>

                    <h5 style={{ fontSize: "16px", fontWeight: "500", textAlign: "center" }}>
                    So, there you have it—ten essential tips for traveling sustainably! With these Tripsy Tips, you can embark on your next journey with a clear conscience. We’re super
                    </h5>

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

export default Blog3
