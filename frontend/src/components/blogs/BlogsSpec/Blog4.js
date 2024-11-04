import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import PkgScrollDownBtn from '../../package/PkgScrollDownBtn'
import BImg1 from '../../../static/assets/blogs/blog4/blog4_img1.jpg'
import BImg2 from '../../../static/assets/blogs/blog4/blog4_img2.jpg'
import BImg3 from '../../../static/assets/blogs/blog4/blog4_img3.jpg'
import BImg4 from '../../../static/assets/blogs/blog4/blog4_img4.jpg'
import BImg5 from '../../../static/assets/blogs/blog4/blog4_img5.jpg'
import BImg6 from '../../../static/assets/blogs/blog4/blog4_img6.jpg'
import BImg7 from '../../../static/assets/blogs/blog4/blog4_img7.jpg'

const Blog4 = () => {

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
                            <h1 style={{ fontFamily: "Clash Display", fontWeight: "500" }}>How to Travel on a Budget and Still Have Fun – Tripsy Tips Edition!</h1>
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
                    <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>1.Flight Deals: The Early Bird Gets the... Best Fare!</h4>
                    <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>First things first—start stalking those flight prices like your favorite celebrity’s Instagram account! Use comparison websites and set alerts. The earlier you book, the more kharcha-paani you can save! Pro tip: Flying mid-week often scores you better deals. So, maybe skip that Wednesday biryani for a less cha-ching flight instead! BONUS TIP – shhh.... you can go Incognito to check flights, so you’re not advertised raised prices... thank us later! OR.. You know... just do it all through us. I mean, why the hassle right?</p>
                </div>
                <div className="bs1-img mb-5" style={{ flexBasis: "65%", height: "100%", backgroundImage: `url("${BImg2}")`, backgroundSize: "cover", backgroundPosition: "top" }}></div>
            </div>

            <div className="blog-sec2 blog2-sec2 my-5 d-flex justify-content-between align-items-center flex-column" style={{ width: "90%" }}>
                <div className="bs1-text my-1 d-flex justify-content-around align-items-center flex-column" style={{ flexBasis: "35%", height: "100%" }}>
                    
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>2. Accommodations: Hostels Are Not Just for Backpackers!</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Forget the lavish hotels—embrace the quirky world of hostels! Not only will you save some bucks, but you’ll also meet fellow travel junkies. Bonus: Many hostels offer free breakfast! Just imagine—starting your day with toast while swapping stories of your epic travels. And who knows, you might find your next travel buddy (or future bestie!). In a better case and budget, Tripsy Trips TOO ensure some great deals on hotel bookings if you’re looking for premium yet affordable!</p>
                                
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>3. Street Food: Budget Bites!</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Who needs Michelin stars when you have street food? Indulge in local delicacies and eat like a king on a budget! Sometimes you’ve got to just breathe the fresh air while downing some mean feasts on the road – a chip thrill that will save your money for the long run!</p>
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
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>4. Public Transport: The Real Local Experience!</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Skip the expensive cabs and hop on public transport! It’s not just budget-friendly; it’s an adventure waiting to happen! Squeeze into crowded buses, navigate train systems, and relish the thrill of finding your way. Plus, you’ll have stories to tell your friends about that time you accidentally ended up in the wrong city!</p>
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>5.Free Attractions: Culture Without the Cost!</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Many cities offer free walking tours, museums, and parks. Spend your day exploring without spending a dime. Just remember to pack snacks from the local market—because nothing fuels your adventures like some good local treats!</p>
                </div>
                <div className="bs3-img mb-5 d-flex justify-content-between align-items-center" style={{ flexBasis: "65%", height: "100%" }}>
                    <div className="bs3-i-left" style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg6}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                    <div className="bs3-i-left " style={{ flexBasis: "48%", height: "100%", width: "100%", backgroundImage: `url("${BImg7}")`, backgroundSize: "cover", backgroundPosition: "center" }}>

                    </div>
                </div>
            </div>

            <div className="blog-sec4 my-5 d-flex justify-content-between align-items-center flex-column" style={{ width: "90%" }}>
                <div className="bs1-text my-1 d-flex justify-content-around align-items-start flex-column" style={{ flexBasis: "35%", height: "100%" }}>
                <h4 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>Final Thoughts:</h4>
                <p style={{ textAlign: "justify", fontSize: "16px", fontWeight: "500" }}>Traveling on a budget doesn’t mean skimping on fun. With a bit of creativity and finding joy in old-school methods, you can no doubt build a core memory and an experience that can be a conversation starter for fun conversations to come. So there we have it; you are now ready for your traversal quest without breaking the bank. Happy Tripping, Fellow Trippers!</p>
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

export default Blog4
