import React, { useState } from 'react'
import newsBg from '../../static/assets/newsBg.png'
import axios from 'axios';
import '../../static/news.css'

// production URL
const apiURL = 'https://www.api.tripsytrips.com'

// Local Host
const localHost = 'http://localhost:4321'

const NewsLetter = ({ place }) => {
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [emailError, setEmailError] = useState('');

    const [formData, setFormData] = useState({
        email: ''
    })

    const handleChange = (e) => {

    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (!validateEmail(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async () => {
        
        try {
            const response = await axios.post(`${apiURL}/api/submit-form/newsletter`, formData);
            console.log('Document uploaded successfully:', response.data);
            alert('Form submitted successfully');
        } catch (error) {
            console.error('Error uploading document:', error);
            alert('Error submitting the form');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubscribeClick = () => {
        if (email && !emailError) {
            handleSubmit();
            setShowMessage(true);
        }
    };

    return (
        <div className="newsletter d-flex justify-content-center py-5" style={{ width: "100%", bottom: "50px", backgroundImage: `url(${newsBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="newsletter-cont d-flex justify-content-between align-items-center" style={{ height: "50%", position: "relative", padding: "80px 10px" }}>
                <div className="nc-left d-flex justify-content-end align-items-start flex-column" style={{ flexBasis: "48.5%", height: "100%" }}>
                    <h3 style={{ fontFamily: "Clash Display", fontWeight: "500" }}>Subscribe to Our Email List</h3>
                    <p style={{ fontSize: "16px", fontWeight: "500" }}>Travelling is unbeatable, but our emails are a close second! Get your dose of wanderlust with travel blogs, deals, tips, and adventure updates.</p>
                </div>
                <div className="nc-right d-flex justify-content-end flex-column" style={{ flexBasis: "40.5%", height: "100%", width: "100%" }}>
                    <input
                        className='my-2'
                        placeholder='Your email address'
                        style={{ borderTop: "none", background: "transparent", borderLeft: "none", borderRight: "none", borderBottom: "1px solid #000", width: "90%", fontWeight: "500", fontSize: "16px", lineHeight: "26px", padding: "10px 10px" }}
                        value={email}
                        onChange={handleInputChange}
                        name = "email"
                    />
                    {emailError && <div style={{ color: 'red', marginBottom: "2px" }}>{emailError}</div>}
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
