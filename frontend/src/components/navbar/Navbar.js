import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../static/Navbar.css' 

import logoImg from '../../static/assets/logo.png'

const Navbar = () => {

    let location = useLocation();
    const myStyle = {
        padding: "10px 0",
    }
    return (
        <div className='py-5' >
            <nav className="navbar navbar-expand-lg " >
                <div className="container-fluid" style={myStyle}>
                    <h1 className='mx-5' style={{position: "absolute", zIndex:"1", width:"600px"}}><Link to="/"><img src={logoImg} alt="Tripsy Trips" style={{ width:"100%"}}/></Link></h1>
                    <button className="navbar-toggler mx-3 my-nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 shift-left" style={{marginLeft: "850px", color:"#fff"}}>
                            <li className="nav-item" style={{ fontSize: "22px", color:"#fff"}}>
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/" style={{color:"#fff"}}>Home |</Link>
                            </li>
                           
                            <li className="nav-item" style={{ fontSize: "22px" }}>
                                <Link className={`nav-link ${location.pathname === "/visa" ? "active" : ""}`} to="/visa" style={{color:"#fff"}}>Visa |</Link>
                            </li>
                            <li className="nav-item" style={{ fontSize: "22px" }}>
                                <Link className={`nav-link ${location.pathname === "/package" ? "active" : ""}`} to="/package" style={{color:"#fff"}}>Packages |</Link>
                            </li>
                            <li className="nav-item" style={{ fontSize: "22px" }}>
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about" style={{color:"#fff"}}>About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
