import React, { useState } from 'react'
import newsBg from '../../static/assets/newsBg.png'
import newsBg2 from '../../static/assets/newsBg2.png'
import '../../static/news.css'

const NewsLetter = ({ place }) => {
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [emailError, setEmailError] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (!validateEmail(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubscribeClick = () => {
        if (email && !emailError) {
            setShowMessage(true);
        }
    };

    return (
        <div className="newsletter d-flex justify-content-center py-5" style={{ height: `${place === 'home' ? '100vh' : '100vh'}`, width: "100%", bottom: "50px", backgroundImage: `url(${newsBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="newsletter-cont d-flex justify-content-between align-items-center" style={{ width: "85%", height: "50%", position: "relative", padding: "80px 10px" }}>
                <div className="nc-left d-flex justify-content-end align-items-start flex-column" style={{ flexBasis: "48.5%", height: "100%" }}>
                    <h3 style={{ fontFamily: "Clash Display", fontWeight: "500" }}>Subscribe to Our Email List</h3>
                    <p style={{ fontSize: "16px", fontWeight: "500" }}>Travelling is unbeatable, but our emails are a close second! Get your dose of wanderlust with travel blogs, deals, tips, and adventure updates.</p>
                </div>
                <div className="nc-right d-flex justify-content-end align-items-start flex-column" style={{ flexBasis: "40.5%", height: "100%", width: "100%" }}>
                    <input
                        className='my-2'
                        placeholder='Your email address'
                        style={{ borderTop: "none", background: "transparent", borderLeft: "none", borderRight: "none", borderBottom: "1px solid #000", width: "90%", fontWeight: "500", fontSize: "16px", lineHeight: "26px", padding: "10px 10px" }}
                        value={email}
                        onChange={handleInputChange}
                    />
                    {emailError && <div style={{ color: 'red', marginBottom:"2px" }}>{emailError}</div>}
                    <div
                        className={`subs-btn my-3 d-flex justify-content-center align-items-center ${email && !emailError ? '' : 'disabled'}`}
                        style={{ height: "50px", width: "150px", borderRadius: "30px", backgroundColor: email && !emailError ? "rgba(2, 71, 134, 1)" : "grey", color: "#fff", cursor: email && !emailError ? "pointer" : "not-allowed" }}
                        onClick={handleSubscribeClick}
                    >
                        Subscribe
                    </div>
                </div>
            </div>
            {showMessage && (
                <div className="news-msg-box d-flex justify-content-center align-items-center px-3" style={{ height: "140px", width: "505px", backgroundColor: "#fff", position: "absolute", right: "100px", marginBottom: "20px", borderRadius: "5px", border: "1px solid #000" }}>
                    <p style={{ fontSize: "16px", fontWeight: "500" }}>Your response has been recorded. Stay tuned to some exciting content.</p>
                </div>
            )}
        </div>
    )
}

export default NewsLetter
