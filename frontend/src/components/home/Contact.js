import React from 'react'

import '../../static/contact.css'

const Contact = () => {
    return (
        <div className='container my-4' style={{ textAlign: "center", backgroundColor: "#ffffff", }}>
            <div className='cont' style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <h3 style={{ padding: "15px 10px", fontSize: "50px", fontFamily: "Lora", fontWeight: "bold", color: "#000"}}>Contact Us</h3>

                <div className="parent" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <div className="row1" style={{ display: "flex", flexDirection: "row", width: "100%",alignItems:"center", justifyContent:"center", padding:"10px 0"}}>
                        <div className="col" style={{ backgroundColor: "#E8C81C", padding: "10px 0" ,fontSize:"18px", borderRadius:"15px", boxShadow:"10px 10px 15px", color:"#000"}}>
                            <div className="address" style={{ display: "flex", flexDirection: "row", alignItem: "center", justifyContent: "space-around", marginTop:"20px"}}>
                                <ion-icon name="map-outline" style={{ fontSize: "40px", fontWeight: "bold", color: "#000"}}></ion-icon>
                                <p>Office 46, Manisha Terrace,<br/> 2A Moledina Road, <br /> Camp, Pune-411001</p>
                                <hr />
                            </div>
                            <div className="mail" style={{ display: "flex", flexDirection: "row", alignItem: "center", justifyContent: "space-around" }}>
                                <ion-icon name="mail-outline" style={{ fontSize: "40px", fontWeight: "bold", color: "#000" }}></ion-icon>
                                <p>info@tripsytrips.com</p>
                                <hr />
                            </div>
                            <div className="call" style={{ display: "flex", flexDirection: "row", alignItem: "center", justifyContent: "space-around", margin:"20px 0"}}>
                                <ion-icon name="call-outline" style={{ fontSize: "40px", fontWeight: "bold", color: "#000" }}></ion-icon>
                                <div >
                                    <p>+91 88888 77729</p>
                                    <p>+91 88059 60110</p>
                                    <p>+91 88280 66947</p>
                                    <p>+91 81818 16662</p>
                                </div>
                                <hr />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
