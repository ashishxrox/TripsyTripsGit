import React from 'react';
import '../../static/culture.css';


const OurCulture = () => {
  return (
    <div className='my-4 py-5' style={{backgroundColor:"#fff"}}>
        <div className='container '>
            <h1 className='title'>Our Services</h1>
            <p style={{fontSize:"24px"}}>Unlock endless possibilities with our 5 essential services at your fingertips!</p>
        </div>
        <div className='container' >
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='our-culture-card flight-card' style={{border:"1px solid #fff", borderRadius:"15px", boxShadow:"5px 5px 15px #000", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden"}}>
                        {/* <div className='clip-art-card d-flex justify-content-center '>
                            <img className='clip-art' src={clip1} alt='' style={{width:"150px", height:"150px"}}/>
                            <ion-icon name="airplane-outline" style={{fontSize:"150px", transform:"rotate(-35deg)",marginLeft:"80px"}}></ion-icon>
                        </div> */}
                        <div className='about-our-culture text-center' style={{backgroundColor:"rgba(255,255,255,0.7)", borderRadius:"15px",color:"#000047",display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center", boxShadow:"2px 2px 25px 10px rgba(255,255,255,0.5)", backdropFilter:"blur(2px)"}}>
                            <h1 > Flight Tickets </h1>
                            <p>Unlock your wanderlust with our flight tickets booking service today!</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='our-culture-card hotel-card' style={{border:"1px solid #fff", borderRadius:"15px", boxShadow:"5px 5px 15px #000", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden"}}>
                        {/* <div className='clip-art-card d-flex justify-content-center '>
                            <img className='clip-art' src={clip1} alt='' style={{width:"150px", height:"150px"}}/>
                            <ion-icon name="airplane-outline" style={{fontSize:"150px", transform:"rotate(-35deg)",marginLeft:"80px"}}></ion-icon>
                        </div> */}
                        <div className='about-our-culture text-center' style={{backgroundColor:"rgba(255,255,255,0.7)", borderRadius:"15px",color:"#000047",display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center", boxShadow:"2px 2px 25px 10px rgba(255,255,255,0.5)", backdropFilter:"blur(2px)"}}>
                            <h1 > Hotel Bookings </h1>
                            <p>Indulge in luxury stays with our seamless hotel booking service!</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='our-culture-card visa-card' style={{border:"1px solid #fff", borderRadius:"15px", boxShadow:"5px 5px 15px #000", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden"}}>
                        {/* <div className='clip-art-card d-flex justify-content-center '>
                            <img className='clip-art' src={clip1} alt='' style={{width:"150px", height:"150px"}}/>
                            <ion-icon name="airplane-outline" style={{fontSize:"150px", transform:"rotate(-35deg)",marginLeft:"80px"}}></ion-icon>
                        </div> */}
                        <div className='about-our-culture text-center' style={{backgroundColor:"rgba(255,255,255,0.7)", borderRadius:"15px",color:"#000047",display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center", boxShadow:"2px 2px 25px 10px rgba(255,255,255,0.5)", backdropFilter:"blur(2px)"}}>
                            <h1 > Tourist Visa </h1>
                            <p>Embark on your journey with our hassle-free tourist visa assistance!</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='our-culture-card insurance-card' style={{border:"1px solid #fff", borderRadius:"15px", boxShadow:"5px 5px 15px #000", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden"}}>
                        {/* <div className='clip-art-card d-flex justify-content-center '>
                            <img className='clip-art' src={clip1} alt='' style={{width:"150px", height:"150px"}}/>
                            <ion-icon name="airplane-outline" style={{fontSize:"150px", transform:"rotate(-35deg)",marginLeft:"80px"}}></ion-icon>
                        </div> */}
                        <div className='about-our-culture text-center' style={{backgroundColor:"rgba(255,255,255,0.7)", borderRadius:"15px",color:"#000047",display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center", boxShadow:"2px 2px 25px 10px rgba(255,255,255,0.5)", backdropFilter:"blur(2px)"}}>
                            <h1 > Travel Insurance </h1>
                            <p>Stay secure on your adventures with our comprehensive travel insurance!</p>
                        </div>
                    </div>
                </div>           
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='our-culture-card package-card' style={{border:"1px solid #fff", borderRadius:"15px", boxShadow:"5px 5px 15px #000", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden"}}>
                        {/* <div className='clip-art-card d-flex justify-content-center '>
                            <img className='clip-art' src={clip1} alt='' style={{width:"150px", height:"150px"}}/>
                            <ion-icon name="airplane-outline" style={{fontSize:"150px", transform:"rotate(-35deg)",marginLeft:"80px"}}></ion-icon>
                        </div> */}
                        <div className='about-our-culture text-center' style={{backgroundColor:"rgba(255,255,255,0.7)", borderRadius:"15px",color:"#000047",display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center", boxShadow:"2px 2px 25px 10px rgba(255,255,255,0.5)", backdropFilter:"blur(2px)"}}>
                            <h1 > Holiday Packages </h1>
                            <p>Explore dream destinations with our curated holiday package experiences!</p>
                        </div>
                    </div>
                </div>              


            </div>
        </div>     
    </div>
  )
}

export default OurCulture
