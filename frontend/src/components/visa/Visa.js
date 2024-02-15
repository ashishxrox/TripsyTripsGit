import React from 'react'
import Search from '../search/Search'
import VisaBody from './VisaBody'
import { useEffect } from 'react'

import '../../static/visa.css'

const Visa = () => {

  useEffect(() => {
    const handleScroll = () => {
      const searchBar = document.getElementById("searchBar");
      if (window.pageYOffset > 200) {
        searchBar.classList.add("sticky");
      } else {
        searchBar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{}}>
    <div className="search-bar" id='searchBar'>
    <Search/>
    </div>
    <div className="visa-body-div" style={{zIndex:"-9999"}}>
      <VisaBody/>
      </div>
    </div>
  )
}

export default Visa
