import React from 'react'
import {Link} from 'react-router-dom'

import '../../static/tourBox.css'
import PackageForm from './PackageForm';


const CountryBox = (props) => {
    const { tour } = props;
    // console.log(country.img_url)
   

    return (
        <div className='col-md-3 my-3'>
            <div className="card tour-card" style={{width: "18rem",height:"20rem", boxShadow:"10px 10px 10px", background:"#fff"}}>
                <img src={tour.img_url} className="card-img-top" alt="..." />
                    <div className="card-body" style={{color: "#000047"}}>
                        <h5 className="card-title">{tour.place}</h5>
                        
                        {/* <Link to={{
                            pathname:`/package/application/${tour.place}`}} state={tour}
                        className="btn btn-primary" style={{backgroundColor:"#000047", color:"#fff", textShadow:"none", border:"1px solid #000047", boxShadow:"2px 2px 5px #000", width:"100%"}}>Apply Now</Link> */}
                        <PackageForm/>
                    </div>
            </div>
        </div>
    )
}

export default CountryBox
