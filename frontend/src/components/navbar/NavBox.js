import React from 'react'
import '../../static/Navbox.css'
import {Link} from 'react-router-dom'

const NavBox = () => {
  return (
    <div className='container my-5'>
      <div className="row1" style={{display: "flex", alignItems:"center",justifyContent:"space-around", width:"100%"}}>
        <div className="col1" >
          <div className="card my-card" style={{width: "20rem", height:"15rem", boxShadow:"10px 10px 15px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="card-body get-visa-box" style={{borderRadius:"15px", display:"flex", alignItems:"center", justifyContent:"space-between",flexDirection:"column", textAlign:"center"}}>
              {/* <div className="get-visa-body" style={{height:"100%", backgroundColor:"rgba(255,255,255,0.2)", backdropFilter:"blur(1.5px)",display:"flex", justifyContent:"space-around", flexDirection:"column"}}> */}
                <h4 className="card-title" style={{fontSize:"40px", color:"#000047", textShadow:"2px 2px 5px #000" , padding:"5px 10px", fontFamily:"Trirong", fontStyle:"bold", backgroundColor:"rgba(255,255,255,0.2)", backdropFilter:"blur(1.5px)",}}>E-Visa in Just 3 Steps</h4>
                {/* <ion-icon name="newspaper-outline" style={{fontSize:"140px", color:"#2446B2"}}></ion-icon> */}
                <Link to="/visa" className="btn btn-primary my-2 button" style={{fontSize:"24px", padding: "5px 40px",backgroundColor:"#000047", border:"1px solid #000047", boxShadow:"5px 5px 10px #000" ,width:"104%", transform:"translateX(-4px)"}}>Check It Out</Link>
              {/* </div> */}
              </div>
          </div>
        </div>
        <div className="col2" >
          <div className="card my-card2" style={{width: "20rem", height:"15rem", boxShadow:"10px 10px 15px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="card-body" style={{borderRadius:"15px", display:"flex", alignItems:"center", justifyContent:"space-between",flexDirection:"column", textAlign:"center"}}>
              <h4 className="card-title" style={{fontSize:"40px", color:"#000047", textShadow:"2px 2px 5px #000" , padding:"5px 10px", fontFamily:"Trirong", fontStyle:"bold"}}>Our Packages</h4>
              {/* <ion-icon name="newspaper-outline" style={{fontSize:"140px", color:"#2446B2"}}></ion-icon> */}
              <Link to="/package" className="btn btn-primary my-2 button" style={{fontSize:"24px", padding: "5px 40px",backgroundColor:"#000047", border:"1px solid #000047", boxShadow:"5px 5px 10px #000"}}>Check It Out</Link>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default NavBox
