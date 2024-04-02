import React from 'react'
import {Link} from 'react-router-dom'

import '../../static/tourBox.css'
import PackageForm from './PackageForm';


const CountryBox = (props) => {
    const { tour } = props;
    // console.log(tour)
   

    return (
        <div className='col-md-3 my-3'>
            <div className="card tour-card" style={{width: "18rem",height:"20rem", boxShadow:"10px 10px 10px", background:"#fff"}}>
                <img src={tour.img_url} className="card-img-top" alt="..." />
                    <div className="card-body" style={{color: "#000047"}}>
                        <h5 className="card-title">{tour.place}</h5>
                        
                        {/* <Link to={{
                            pathname:`/package/application/${tour.place}`}} state={tour}
                        className="btn btn-primary" style={{backgroundColor:"#000047", color:"#fff", textShadow:"none", border:"1px solid #000047", boxShadow:"2px 2px 5px #000", width:"100%"}}>Apply Now</Link> */}
                        {tour.place === 'Dubai' && <PackageForm dest={'Dubai'}/>}
                        {tour.place === 'Singapore' && <PackageForm dest={'Singapore'}/>}
                        {tour.place === 'Malaysia' && <PackageForm dest={'Malaysia'}/>}
                        {tour.place === 'Bali' && <PackageForm dest={'Bali'}/>}
                        {tour.place === 'Turkey (Istanbul and Cappadocia)' && <PackageForm dest={'Turkey (Istanbul and Cappadocia)'}/>}
                        {tour.place === 'Kerala' && <PackageForm dest={'Kerala'}/>}
                        {tour.place === 'Kashmir' && <PackageForm dest={'Kashmir'}/>}
                        {tour.place === 'Vietnam' && <PackageForm dest={'Vietnam'}/>}
                        {tour.place === 'Sri Lanka' && <PackageForm dest={'Sri Lanka'}/>}
                        {tour.place === 'Thailand' && <PackageForm dest={'Thailand'}/>}
                    </div>
            </div>
        </div>
    )
}

export default CountryBox



 
