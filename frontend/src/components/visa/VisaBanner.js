import React from 'react'
import {useLocation} from 'react-router-dom'
import visaBanner from '../../static/assets/visaBanner.png'
import Hong from '../../static/assets/banners/hong.jpeg'
import Viet from '../../static/assets/banners/vietnam.jpeg'
import Azer from '../../static/assets/banners/azer.jpeg'
import Tan from '../../static/assets/banners/tan.jpeg'
import Mong from '../../static/assets/banners/mong.jpeg'
import Bah from '../../static/assets/banners/bah.jpeg'
import Cam from '../../static/assets/banners/cam.jpeg'
import Lanka from '../../static/assets/banners/sl.jpeg'
import Egy from '../../static/assets/banners/egy.jpeg'
import Ethio from '../../static/assets/banners/ethiopia.jpeg'
import Geor from '../../static/assets/banners/geor.jpeg'
import Indo from '../../static/assets/banners/indo.jpeg'
import Jordan from '../../static/assets/banners/jordan.jpeg'
import Mold from '../../static/assets/banners/mald.jpeg'
import Uae from '../../static/assets/banners/uae.jpeg'
import Kyrg from '../../static/assets/banners/kyrg.jpeg'
import Laos from '../../static/assets/banners/laos.jpeg'
import Mada from '../../static/assets/banners/madagas.jpeg'
import Mor from '../../static/assets/banners/mor.jpeg'
import Oman from '../../static/assets/banners/oman.jpeg'
import Rus from '../../static/assets/banners/rus.jpeg'
import Rwanda from '../../static/assets/banners/rwanda.jpeg'
import Saudi from '../../static/assets/banners/saudi.jpeg'
import Qatar from '../../static/assets/banners/qatar.jpeg'

import '../../static/visaBanner.css'

const VisaBanner = () => {

    const location = useLocation()
    const path = location.pathname
    
    


    return (
        <div className="visa-banner my-2 d-flex justify-content-center align-items-center" 
                style={{ width: "100%", backgroundImage: path === '/visa/application/Hong%20Kong%20(PAR)'? `url(${Hong})`:
                                                         path === '/visa/application/Vietnam'? `url(${Viet})`: 
                                                         path === '/visa/application/Azerbaijan'? `url(${Azer})`:
                                                         path === '/visa/application/Tanzania'? `url(${Tan})`:
                                                         path === '/visa/application/Mongolia'? `url(${Mong})`:
                                                         path === '/visa/application/Bahrain'? `url(${Bah})`:
                                                         path === '/visa/application/Cambodia'? `url(${Cam})`:
                                                         path === '/visa/application/Sri%20Lanka'? `url(${Lanka})`:
                                                         path === '/visa/application/Egypt'? `url(${Egy})`:
                                                         path === '/visa/application/Ethiopia'? `url(${Ethio})`:
                                                         path === '/visa/application/Georgia'? `url(${Geor})`:
                                                         path === '/visa/application/Indonesia'? `url(${Indo})`:
                                                         path === '/visa/application/Jordan'? `url(${Jordan})`:
                                                         path === '/visa/application/Moldova'? `url(${Mold})`:
                                                         path === '/visa/application/United%20Arab%20Emirates'? `url(${Uae})`:
                                                         path === '/visa/application/Laos'? `url(${Laos})`:
                                                         path === '/visa/application/Madagascar'? `url(${Mada})`:
                                                         path === '/visa/application/Morocco'? `url(${Mor})`:
                                                         path === '/visa/application/Oman'? `url(${Oman})`:
                                                         path === '/visa/application/Russia'? `url(${Rus})`:
                                                         path === '/visa/application/Rwanda'? `url(${Rwanda})`:
                                                         path === '/visa/application/Saudi%20Arabia'? `url(${Saudi})`:
                                                         path === '/visa/application/Qatar'? `url(${Qatar})`:
                                                         path === '/visa/application/Kyrgzstan'? `url(${Kyrg})`:
                                                          `url(${visaBanner})`
                                                          , backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <div className="visa-overlay d-flex justify-content-center align-items-center" style={{height:"100%", width:"100%",  background: "radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}>
            <div className="about-title-box d-flex justify-content-center align-items-center" style={{ height: "40%"}}>
                <h1 style={{fontFamily:"Clash Display", fontSize:"60px", fontWeight:"400", color:"#fff"}}>E-Visa</h1>
                </div>
            </div>
            
        </div>

    )
}

export default VisaBanner
