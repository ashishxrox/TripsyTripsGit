import React from 'react'
import '../../static/footer.css'

const Credit = () => {
    return (
        <div className='cred-main d-flex justify-content-between align-items-center flex-row' style={{ height: "75px", width: "100%", backgroundColor: "rgba(10, 29, 38, 1)" }}>
            <div className='cred-foot-1' style={{ height:"100%", width:"100%"}}>
                <div className='foot-line2' style={{ backgroundColor: "#fff"}}></div>
                <div className="footer-bottom2-left d-flex justify-content-center flex-column py-2" style={{ height: "100%", width: "90%" }}>
                    <h6 style={{ textDecoration: "none", color: "#fff", fontSize: "10px", padding: "0", margin: "0" }}>Designed By</h6>
                    <a style={{ textDecoration: "none", color: "#fff", fontSize: "16px", letterSpacing: "2px" }} href="https://www.knowledgeunits.com/">Knowledge Units</a>
                </div>
            </div>
            <div className='cred-foot-2' style={{flexBasis:"40%", height:"100%", width:"100%"}}>
                <div className='foot-line2' style={{ backgroundColor: "#fff", transform: "translateX(185px)" }}></div>
                <div className="footer-bottom2 d-flex justify-content-center flex-column py-2" style={{ height: "100%", width: "90%" }}>
                    <h6 style={{ textDecoration: "none", color: "#fff", fontSize: "10px", padding: "0", margin: "0" }}>Developed By</h6>
                    <a style={{ textDecoration: "none", color: "#fff", fontSize: "16px", letterSpacing: "2px" }} href="https://ashishnair.in">Ashish Nair</a>
                </div>
            </div>
        </div>
    )
}

export default Credit
