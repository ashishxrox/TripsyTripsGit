import React from 'react'
import '../static/pageloader.css'
import img from '../static/assets/country/schengen.jpeg'

const PageLoader = () => {
  return (
    <div style={{height:"100%", width:"100%", display:"flex", justifyContent:"center"}}>
      <div className="loading-content">Loading</div>
      <img src={img} alt="" />
    </div>
  )
}

export default PageLoader
