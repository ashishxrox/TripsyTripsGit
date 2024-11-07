import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import PkgScrollDownBtn from '../../package/PkgScrollDownBtn'
import BImg1 from '../../../static/assets/blogs/blog5/blog5_img1.jpg'
import BImg2 from '../../../static/assets/blogs/blog5/blog5_img2.jpg'
import BImg3 from '../../../static/assets/blogs/blog5/blog5_img3.jpg'
import BImg4 from '../../../static/assets/blogs/blog5/blog5_img4.jpg'
import BImg5 from '../../../static/assets/blogs/blog5/blog5_img5.jpg'
import BImg6 from '../../../static/assets/blogs/blog5/blog5_img6.jpg'
import BImg7 from '../../../static/assets/blogs/blog5/blog5_img7.jpg'

const Blog5 = () => {

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
                            <h1 style={{ fontFamily: "Clash Display", fontWeight: "500" }}>Travel Hacks: Packing for the Overthinkers – Tripsy Tips Edition!</h1>
                            {/* <h6 style={{ fontWeight: "500", fontSize: "20px" }}>Here are ten super important tips to make your travels more sustainable whilst keeping it enjoyable!</h6> */}
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
                    {/* <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>1.Flight Deals: The Early Bird Gets the... Best Fare!</h4> */}
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Hola, fellow trippers! If you’re anything like us, you must know how packing for a trip feels like gearing up for a high-stakes heist—strategically planning every item like it’s a priceless treasure! You start with a suitcase and somehow end up with a portable library, six pairs of shoes, and enough snacks to feed a small army. Fear not, our overthinking comrades! Here are some wicked tripsy tips for packing that’ll keep you organized and slightly less stressed.</p>
                </div>
                <div className="bs1-img mb-5" style={{ flexBasis: "65%", height: "100%", backgroundImage: `url("${BImg2}")`, backgroundSize: "cover", backgroundPosition: "top" }}></div>
            </div>

            <div className="blog-sec2 blog2-sec2 my-5 d-flex justify-content-between align-items-center flex-column" style={{ width: "90%" }}>
                <div className="bs1-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%" }}>
                    
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>1. The ‘What If’ Game</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Before you throw in your entire wardrobe, let’s play a fun little game. Ask yourself, “What if I need this?” If you can’t remember the last time you used that sequined top or those “just in case” heels, leave them behind. Trust me, you won’t end up at a spontaneous disco in the mountains.</p>
                                
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>2. Roll It Like a Burrito</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Forget folding—roll your clothes! It’s like making a mini burrito of travel joy. Not only does this save space, but it also helps minimize wrinkles. Just make sure your clothes aren’t too spicy, or you might start a fashion emergency!</p>
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>3. The Magic of Packing Cubes</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Think of packing cubes as your suitcase’s personal organizers. They’re versatile, zippered organizers for your suitcase designed to maximize space and streamline packing. Be it a section of thick and thin layers or segregating each item based on which one you’d like most accessible! Additionally, you can also organize them with top and bottom layers, or each specific type of tops and bottoms. For example, outgoing tops, indoor tops and keeping the same idea for your pants!</p>
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
                <div className="bs3-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%" }}>
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>4. Snacks Are Non-Negotiable</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Snacks are a must! Whether it’s from masala peanuts or a protein bar, pack a few for your journey. In moments where you’re overwhelmed with everything around you, be it getting late for your flight, bus or ensuring you’re giving timely updates to your family – grab a snack, my friend. You’re just going to end up being hangry. Also, a quick boost of energy is never a problem</p>
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>5. Tech Check</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Before you stuff your bag with gadgets, make a list. Phone? Check. Charger? Check. Extra power bank? Check. And don’t forget those headphones! The world is full of noises—especially if you’re traveling by public transport—so tune out with your favorite playlist for the occasion!</p>
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>6. The Outfit of the Day (OOTD) Plan</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Plan your outfits ahead of time, because nobody wants to stand in front of a mirror at 3 AM wondering if that shirt goes with those pants. Lay out your travel wardrobe and take photos for quick access. Insta-ready and stress-free? Yes, please!</p>
                </div>
                <div className="bs3-img mb-5 d-flex justify-content-between align-items-center" style={{ flexBasis: "65%", height: "100%" }}>
                    <div className="bs3-i-left" style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg6}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                    <div className="bs3-i-left " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg7}")`, backgroundSize: "cover", backgroundPosition: "center" }}>

                    </div>
                </div>
            </div>

            <div className="blog-sec4 my-5 d-flex justify-content-between align-items-center flex-column" style={{ width: "90%" }}>
                <div className="bs1-text my-1 d-flex justify-content-around align-items-start flex-column" style={{ flexBasis: "35%", height: "100%" }}>
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>Conclusion</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Packing doesn’t have to be a Herculean task. With these tips, you’ll be well on your way to becoming a packing pro. Now, go conquer that suitcase and get ready for an adventure of a lifetime! Happy Tripping!</p>
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

export default Blog5
