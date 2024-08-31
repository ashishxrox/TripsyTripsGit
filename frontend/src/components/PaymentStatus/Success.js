import React from 'react'

const Success = () => {
  return (
    <div className='container' style={{height:"60vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div className="message text-center py-5 px-5" style={{backgroundColor:"#87A922", color:"#fff", borderRadius:"15px", boxShadow:"5px 5px 15px #000", textShadow:"2px 2px 5px #000"}}>
        <h2>Congratulations!</h2>
        <h3>Your application was successfully completed.</h3>
        <h4>Kindly check your inbox for an email from us.</h4>
      </div>
    </div>
  )
}

export default Success
