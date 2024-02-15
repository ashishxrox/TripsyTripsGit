import React from 'react'
import {Link} from 'react-router-dom'

import '../../static/countryBox.css'


const CountryBox = (props) => {
    const { country} = props;
    // console.log(country.img_url)
   

    return (
        <div className='col-md-3 my-3'>
            <div className="card country-card" style={{width: "18rem",height:"20rem", boxShadow:"10px 10px 10px", background:"#fff"}}>
                <img src={country.img_url} className="card-img-top" alt="..." />
                    <div className="card-body" style={{color: "#000047"}}>
                        <h5 className="card-title">{country.country}</h5>
                        {/* <p className="card-text">{country.price}</p> */}
                        {/* <p className="card-text country-name">Get on, {country.issue_date}</p> */}
                        <Link to={{
                            pathname:`/visa/application/${country.country}`}} state={country}
                        className="btn btn-primary" style={{backgroundColor:"#000047", color:"#fff", textShadow:"none", border:"1px solid #000047", boxShadow:"2px 2px 5px #000", width:"100%"}}>Apply Now</Link>
                    </div>
            </div>
        </div>
    )
}

export default CountryBox
