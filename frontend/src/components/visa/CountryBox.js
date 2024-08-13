import React from 'react';
import { Link } from 'react-router-dom';
import '../../static/countryBox.css';
import Abu from '../../static/assets/country/madagascar.jpeg'

const CountryBox = (props) => {
    const { country } = props;

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
        zIndex: 2,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "#fff",
        fontFamily: "Clash Display",
        fontWeight: "300",
    };

    return (
        <div className='col-md-3 my-1' style={{ height: "450px", overflow: "hidden", borderRadius: "8px" }}>
            <div className='card-hover' style={{ height: "100%", width: "100%", borderRadius: "8px" }}>
                <Link to={{ pathname: `/visa/application/${country.country}`, state: country }} state={country} className="card country-card" style={{ width: "18rem", height: "26rem", background: "#fff", overflow: "hidden" }}>
                    <img src={country.img_url} alt={country.country} style={{ height: "100%", width: "100%", borderRadius: "5px", objectFit: "cover" }} />
                    <div className="overlay py-4" style={overlayStyle}>
                        <div className='d-flex justify-content-center align-items-center' style={{ position: "relative", bottom: "15px", left: "5px", fontSize: "20px", fontWeight: "500" }}>
                            <div style={{ width: "55px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                            {country.country}
                            <div style={{ width: "55px", height: "1px", backgroundColor: "#fff", margin: "0 5px" }}></div>
                        </div>
                        <div className=" justify-content-center align-items-center px-5 py-2 visa-btn-mob" style={{ border: "1px solid #fff", borderRadius: "30px", backgroundColor: "rgba(255,255,255,0.2)", fontWeight: "500" }}>
                            <Link to={{ pathname: `/visa/application/${country.country}`, state: country }} state={country} style={{ color: "#fff", textDecoration: "none", fontFamily: "Clash Display", fontWeight: "200", fontSize: "24px" }}  >
                                Visit
                            </Link>
                        </div>
                    </div>

                </Link>



                <div className="visit-btn justify-content-center align-items-center">
                    <div className='visit-btn-bdr d-flex justify-content-center align-items-center'>

                    </div>
                    <div className="link-container" style={{ position: "absolute", zIndex: "9999" }}>
                        <Link to={{ pathname: `/visa/application/${country.country}`, state: country }} state={country} style={{ color: "#fff", textDecoration: "none", fontFamily: "Clash Display", fontWeight: "200", fontSize: "24px" }}  >
                            Visit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryBox;


