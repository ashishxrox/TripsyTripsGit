import React from 'react'
import { useLocation } from 'react-router-dom'
import '../static/callBox.css'


const CallBox = () => {
    const location = useLocation();
    return (
        <>
        {location.pathname !== '/adminxcv876_@@plm123Qw' && <div className='container call-box'>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "#000047", border: "2px solid #000047", boxShadow: "2px 2px 5px #000", fontSize:"35px", borderRadius:"50%"}}>
            <i className="fa-brands fa-rocketchat"></i>
            </button>


            <div className="modal fade call-box-form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" >
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Get in Touch</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{textAlign:"center"}}>
                            <h2>E-mail us on:</h2>
                            <h5 style={{letterSpacing:"2px"}}><a href="mailto:info@tripsytrips.com" target="_blank" style={{textDecoration:"none"}}>info@tripsytrips.com</a></h5>
                            <small style={{position:"absolute", left:"40%", top:"80%" , color:"grey"}}>Click to e-mail</small>
                        </div>
                        <div className="modal-body" style={{textAlign:"center"}}>
                            <h2>DM us on Instagram:</h2>
                            <h5 style={{letterSpacing:"2px", fontSize:"28px"}}><a href='https://www.instagram.com/tripsytrips_' target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>tripsytrips_</a></h5>
                            <small style={{position:"absolute", top:"52%", left:"43%", color:"grey"}}>Click to DM</small><br/>
                            <p>We are here to help you with any of your queries</p>
                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{backgroundColor:"#000047"}}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}

export default CallBox
