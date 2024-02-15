import React from 'react'
import Search from './Search'
import PackageBody from './PackageBody'
import { useEffect } from 'react'

import '../../static/package.css'

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
      <PackageBody/>
      </div>
    </div>
  )
}

export default Visa
