import React, { useState,  useContext } from "react";
import VisaContext from "../../context/Visa/VisaContext";
import SearchBox from "./SearchBox";
import '../../static/pkgSearch.css'
import TourBox from './TourBox'



const Search = () => {

  const context = useContext(VisaContext);
  const { countries } = context;
  const [filteredCountry, setFilteredCountry] = useState({});
  const [searchPerformed, setSearchPerformed] = useState(false);


  const handleSearch = (searchTerm) => {

    const filtered = countries.filter((country) => {
      const includes = country.country.toLowerCase().includes(searchTerm.toLowerCase());
      return includes;
    });



    if (filtered.length === 0) {
      setSearchPerformed(true);
    } else {
      setSearchPerformed(true);
      setFilteredCountry(filtered);
    }

    setFilteredCountry(filtered);

    if (searchTerm.length === 0) {
      setSearchPerformed(false)
    }



  };



  return (
    <div className="container" style={{
      width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
      transform: "translateY(25px)", zIndex:"1"
    }}>
      <h5 className = "pkg-steps-title" style={{color:"#E8C81C"}}>Book Holiday Packages with Us</h5>
      {/* <ul className="steps-for-visa">
        <li>1. Choose your destination</li>
        <li>2. Select your Visa</li>
        <li>3. Upload your documents and submit</li>
      </ul> */}
      <span className="search-left-cont"></span>
      <SearchBox onSearch={handleSearch} />
      {searchPerformed && <div className="row my-4" style={{zIndex:"9999999"}}>
        {filteredCountry.length > 0 ? (
          <TourBox country={filteredCountry[0]} />
        ) : (
          <p style={{ marginTop: "15px", padding: "15px 45px", fontSize: "24px", backgroundColor: "#fff", borderRadius: "15px", boxShadow: "5px 5px 15px", color: "#000047", textAlign: "center" }}>Sorry!!<br />No Matching countries found</p>
        )}
      </div>}
      <span className="search-right-cont"></span>
    </div>
  );
};

export default Search;