import React from 'react'
import '../../static/gallery.css';

import img1 from '../../static/assets/country/dubai.jpeg'
import img2 from '../../static/assets/country/dubai2.jpeg'
import img3 from '../../static/assets/country/singapore.jpeg'
import img4 from '../../static/assets/country/bali.jpeg'
import img5 from '../../static/assets/country/malaysia.jpeg'

const Gallery = () => {
  return (
    <div>
      
      <div className="gallery">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>
    </div>
  )
}

export default Gallery
