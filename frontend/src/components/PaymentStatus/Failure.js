import React from 'react'

const Failure = () => {
  return (
    <div className='container' style={{height:"60vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div className="message text-center py-5 px-5" style={{backgroundColor:"#F28585", color:"#fff", borderRadius:"15px", boxShadow:"5px 5px 15px #000", textShadow:"2px 2px 5px #000"}}>
        <h2>OOPS!</h2>
        <h3>There's some problem with your bank server.</h3>
        <h4>Your application has not been successfully submitted, Please try again later.</h4>
      </div>
    </div>
  )
}

export default Failure
