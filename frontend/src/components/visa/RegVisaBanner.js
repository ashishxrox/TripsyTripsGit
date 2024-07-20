import React from 'react'
import {useLocation} from 'react-router-dom'
import visaBanner from '../../static/assets/visaBanner.png'
import Can from '../../static/assets/banners/can.jpeg'
import Aus from '../../static/assets/banners/aus.jpeg'
import Usa from '../../static/assets/banners/usa.jpeg'
import Tur from '../../static/assets/banners/turkey.jpeg'
import Tai from '../../static/assets/banners/taiwan.jpeg'
import Uk from '../../static/assets/banners/uk.jpeg'
import Schen from '../../static/assets/banners/schengen.jpeg'
import Nz from '../../static/assets/banners/nz.jpeg'



import '../../static/visaBanner.css'

const RegVisaBanner = () => {

    const location = useLocation()
    const path = location.pathname
    return (
        <div className="visa-banner d-flex justify-content-center align-items-center" 
        style={{ width: "100%", 
        backgroundImage: path === '/regvisa/application/Canada/'? `url(${Can})`:
                         path === '/regvisa/application/Australia/'? `url(${Aus})`: 
                         path === '/regvisa/application/Schengen%20Area/'? `url(${Schen})`:
                         path === '/regvisa/application/Turkey/'? `url(${Tur})`:
                         path === '/regvisa/application/Taiwan/'? `url(${Tai})`:
                         path === '/regvisa/application/United%20Kingdom/'? `url(${Uk})`:
                         path === '/regvisa/application/United%20States%20of%20America/'? `url(${Usa})`:
                         path === '/regvisa/application/New%20Zealand/'? `url(${Nz})`:
                         `url(${visaBanner})`, backgroundSize:"cover",backgroundRepeat: "no-repeat" }}>
            <div className="overlay d-flex justify-content-center align-items-center" style={{ height: "100%", width: "100%", background: "radial-gradient(circle, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0) 100%)" }}>
                <div className="n-visa-title-box d-flex justify-content-center align-items-center" style={{  height: "40%" }}>
                    <h1 style={{ fontFamily: "Clash Display", fontWeight: "400", color: "#fff", fontSize:"60px" }}>Non E-Visa / Sticker Visa</h1>
                </div>
            </div>

        </div>
    )
}

export default RegVisaBanner
