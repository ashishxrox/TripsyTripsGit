import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Hamburger = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const location = useLocation();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    const myStyle = {
        position: "fixed",
        top: 0,
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
                    className="navbar-toggler mx-3"
                    onClick={toggleNav}
                    style={{ position: "absolute", zIndex: "1000", border: "none", background: "none", top:"8%", left:"-15px"}}
                >
                    <ion-icon name={isNavOpen ? "" : "menu-outline"} style={{ color: "#fff", fontSize: "45px", borderRadius:"10px"}}></ion-icon>
                </button>
            </div>
            <nav className="navbar" style={myStyle}>
                <div className="container-fluid">
                    <button
                        className="close-button"
                        onClick={closeNav}
                        style={{ position: "absolute", top: "20%", right: "15px", fontSize: "45px", border: "none", background: "none", color: "#000047" }}
                    >
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 shift-left" style={{ padding: "35px 20px",width:"100%", display:"flex", alignItems:"center"}}>
                        <li className="nav-item" style={{ fontSize: "26px", borderBottom:"2px solid #000047", width:"80%", display:"flex", alignItems:"center", justifyContent:"center", padding:"10px 0"}}>
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={toggleNav} to="/">Home</Link>
                        </li>
                        
                        <li className="nav-item" style={{ fontSize: "26px", borderBottom:"2px solid black", width:"80%", display:"flex", alignItems:"center", justifyContent:"center", padding:"10px 0"}}>
                            <Link className={`nav-link ${location.pathname === "/visa" ? "active" : ""}`} onClick={toggleNav} to="/visa">Visa</Link>
                        </li>
                        <li className="nav-item" style={{ fontSize: "26px", borderBottom:"2px solid black", width:"80%", display:"flex", alignItems:"center", justifyContent:"center",padding:"10px 0"}}>
                            <Link className={`nav-link ${location.pathname === "/package" ? "active" : ""}`} onClick={toggleNav} to="/package">Packages</Link>
                        </li>
                        <li className="nav-item" style={{ fontSize: "26px", borderBottom:"2px solid black", width:"80%", display:"flex", alignItems:"center", justifyContent:"center", padding:"10px 0"}}>
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} onClick={toggleNav} to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Hamburger;
