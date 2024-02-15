import React from 'react'

import '../../static/imageBox.css'

const ImageBox = ({url}) => {
    
  return (
    <div className='image-box'>
      <img src={url} alt="" style={{ boxShadow:"10px 10px 15px"}}/>
    </div>
  )
}

export default ImageBox
