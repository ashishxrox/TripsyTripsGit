import React from 'react';
import logoImg from '../../static/assets/TripsyTripLogo.png';
import {Link} from 'react-router-dom'

const LogoImg = () => {
  return (
    <div className='container' style={{ height: "150px", overflow: "hidden" }}>
      <div className="logo-box" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <img src={logoImg} alt="" style={{ width:"70%", height:"70%", aspectRatio:"3/2"}} />
      </div>
    </div>
  );
};

export default LogoImg;
