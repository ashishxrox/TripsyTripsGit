import React from 'react'
import '../../static/homeIntro.css'

const HomeIntro = () => {
    const myStyle = {
        textAlign: "center",
        padding: "20px",
        // fontFamily: 'Oswald',
        // fontFamily: 'Bebas Neue',
        // fontFamily: 'Roboto Condensed',
        fontFamily:'DM Serif Display',
        fontStyle: "italic",
        // background: "rgba(255, 255, 255, 0.8)",
        width: "100%",
        

        
    }
  return (
    <div>
      <div style={myStyle} className="my-home-intro">
        <h2 style={{color:"#000",textShadow:"3px 3px 10px #fff"}}>Experience The World With</h2>
        <h1 style={{ color:"#000", textShadow:"3px 3px 15px #fff", letterSpacing:"2px",}}>Tripsy Trips</h1>
      </div>
    </div>
  )
}

export default HomeIntro
