import React, { useState } from 'react'
import {Link } from 'react-router-dom'


import '../../static/footer.css'
// import TandC from '../visa/TandC'

const Footer = () => {
    const [showTandC, setShowTandC] = useState(false);
    const toggleTandC = () => {
        setShowTandC(!showTandC);
    };
    return (
        <div className='footer'>
            <div className="developer-crds" style={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "10px 0", alignItems: "center" }}>
            <h6 style={{ padding: "0", fontSize: "28px", color:"#fff"}}>Contact us</h6>
            <p style={{ padding: "0", position: "relative", top: "-10px", fontSize: "8px", color:"#fff"}}>+91 88888 77729 | +91 88059 60110 | +91 88280 66947 | +91 81818 16662</p>
                <h6 style={{ padding: "0", fontSize: "16px", color:"#fff"}}>Developed by Ashish Nair</h6>
                <p style={{ padding: "0", position: "relative", top: "-10px", fontSize: "8px", color:"#fff"}}>+91 9823097992 | ashishnair732@gmail.com</p>
            </div>
            <div className="copyright-box" style={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "10px 0", alignItems: "center" }}>
                <p style={{ fontSize: "16px", letterSpacing: "2px", color:"#fff"}}>All rights reserved by</p>
                <h4 style={{ position: "relative", top: "-20px", fontSize: "34px", color:"#fff"}}>&#169; Tripsy Trips</h4>
            </div>
            <div className="imp-link" style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "20px 0" }}>
                <ul style={{ display: "flex", justifyContent: "space-around" }}>
                    <li><Link to='/'> Home | </Link></li>
                    <li><Link to='/visa'> Visa | </Link></li>
                    <li><Link to='/package'> Package | </Link></li>
                    <li><Link to='/about'> About us | </Link></li>
                </ul>
                <div className="terms">
                    <Link to="/terms" style={{color:"#fff"}}>Terms and Conditions</Link>
                </div>
                <div className="terms" >
                    <Link to="/policy" style={{color:"#fff"}}> Privacy Policy</Link>
                </div>
                <div className="terms" >
                    <Link to="/refund" style={{color:"#fff"}}> Cancellation and Refund Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
