import React from 'react'
import Search from '../search/Search'
import VisaBody from './VisaBody'
import { useEffect } from 'react'
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom'

import '../../static/visa.css'

const Visa = () => {

  const location = useLocation()

    useEffect(() => {
        ReactGA.initialize('G-QTRPBPD2RZ'); // Initialize ReactGA with your Measurement ID
        ReactGA.pageview(window.location.pathname + window.location.search); // Track page views

    }, []);

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
