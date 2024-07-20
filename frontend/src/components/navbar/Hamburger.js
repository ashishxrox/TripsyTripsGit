import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hamburger = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    // const location = useLocation();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    const [show, setShow] = useState(false)

    const handleVisaClick = () => {
        setShow(!show)
    }

    const myStyle = {
        position: "fixed",
        top: "90px",
        left: 0,
        width: isNavOpen ? "100%" : 0,
        height: "100vh",
        overflowX: "hidden",
        transition: "0.5s",
        backgroundColor: "#fff",
        zIndex: "999999999",
    };

    return (
        <div>
            <div className=''>
                <button
                    className="navbar-toggler"
                    onClick={toggleNav}
                    style={{ position: "absolute", zIndex: "1000", border: "none", background: "none", top: "4%" }}
                >
                    <ion-icon name={isNavOpen ? "" : "menu-outline"} style={{ color: "rgba(2, 71, 134, 1)", fontSize: "45px", borderRadius: "10px" }}></ion-icon>
                </button>
            </div>
            <nav className="navbar" style={myStyle}>
                <div className="container-fluid d-flex flex-column align-items-center" style={{ height: "100%" }}>
                    <button
                        className="close-button"
                        onClick={closeNav}
                        style={{ position: "absolute", right: "0", fontSize: "45px", border: "none", background: "none", color: "#000047" }}
                    >
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 shift-left my-3" style={{ padding: "35px 20px", width: "100%", height: "80%" }}>
                        <li className='py-4' style={{ borderBottom: "1px solid #000" }}> <Link to="/" onClick={toggleNav} style={{ color: "#000", textDecoration: "none", fontWeight: "400", fontSize: "34px", fontFamily: "Clash Display", lineHeight: "26px", cursor: "pointer" }}> Home </Link></li>
                        {/* <li> <Link to="/visa" style={{ color: "#000", textDecoration: "none", fontWeight: "400", fontSize: "16px", lineHeight: "26px" }}>Visas </Link></li> */}
                        <li className='py-4' style={{ borderBottom: "1px solid #000" }}>
                            <p onClick={() => { handleVisaClick() }} style={{ position: "relative", top: "8px", color: "#000", fontSize: "34px", fontFamily: "Clash Display", textDecoration: "none", fontWeight: "400", lineHeight: "26px", cursor: "pointer" }}>Visas <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6368 8.9638C18.9883 9.31527 18.9883 9.88512 18.6368 10.2366L12.0004 16.873L5.36399 10.2366C5.01252 9.88512 5.01252 9.31527 5.36399 8.9638C5.71547 8.61233 6.28531 8.61233 6.63679 8.9638L12.0004 14.3274L17.364 8.9638C17.7155 8.61233 18.2853 8.61233 18.6368 8.9638Z" fill="#0A1D26" />
                            </svg>
                            </p>
                            <div className={`visa-drop ${show && "py-3 px-3"} ${show && "visa-drop-show"} d-flex justify-content-center align-items-start flex-column`} style={{ position: "absolute", zIndex: "99" }}>

                                <Link to="/visa" className='my-2 py-2' onClick={toggleNav} style={{ color: "#000", textDecoration: "none", fontWeight: "400", fontSize: "20px", lineHeight: "26px", cursor: "pointer" }}>E-Visa</Link>
                                <Link to="/regVisa" className='my-2 py-2' onClick={toggleNav} style={{ color: "#000", textDecoration: "none", fontWeight: "400", fontSize: "20px", lineHeight: "26px", cursor: "pointer" }}>Regular Visa</Link>
                            </div>
                        </li>

                        <li className='py-4' style={{ borderBottom: "1px solid #000" }}> <Link to="/package" onClick={toggleNav} style={{ color: "#000", fontSize: "34px", fontFamily: "Clash Display", textDecoration: "none", fontWeight: "400", lineHeight: "26px" }}>Packages </Link></li>
                        <li className='py-4' style={{ borderBottom: "1px solid #000" }}> <Link to="/about" onClick={toggleNav} style={{ color: "#000", fontSize: "34px", fontFamily: "Clash Display", textDecoration: "none", fontWeight: "400", lineHeight: "26px" }}>About </Link></li>
                        <li className='py-4' style={{ borderBottom: "1px solid #000" }}> <Link to="/blogs" onClick={toggleNav} style={{ color: "#000", fontSize: "34px", fontFamily: "Clash Display", textDecoration: "none", fontWeight: "400", lineHeight: "26px" }}>Blogs </Link></li>
                        <li className='py-4' style={{ borderBottom: "1px solid #000" }}> <Link to="/contact" onClick={toggleNav} style={{ color: "#000", fontSize: "34px", fontFamily: "Clash Display", textDecoration: "none", fontWeight: "400", lineHeight: "26px" }}>Contact </Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Hamburger;
