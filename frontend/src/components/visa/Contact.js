import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="row5" style={{ color: "black", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundColor: "#E8C81C", padding: "25px 0", cursor: "pointer", }}>
                <h6>Not sure about applying? </h6>
                <h6 style={{ textAlign: "center" }}>Contact us </h6>
                <div className="phone-numbers">
                    <p>+91 88888 77729</p>
                    <p>+91 88059 60110</p>
                    <p>+91 88280 66947</p>
                    <p>+91 81818 16662</p>
                </div>
                <h6>or share your contact details, we will connect with you</h6>
                <h3>Email your documents to us on</h3>
                <a href="mailto:info@tripsytrips.com"><h4 style={{ letterSpacing: "5px" }}>info@tripsytrips.com</h4></a>
                <h6>We'll get in touch as soon as possible</h6>
            </div>
        </div>
    )
}

export default Contact
