import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Success = () => {
  // const [isValid, setIsValid] = useState(false);

  const {amount, order_id} = useParams()

  console.log(amount/100)
  console.log(order_id)
  
  return (

    <div className='container' style={{ height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="message text-center py-5 px-5" style={{ backgroundColor: "#87A922", color: "#fff", borderRadius: "15px", boxShadow: "5px 5px 15px #000", textShadow: "2px 2px 5px #000" }}>
        <h2>Congratulations!</h2>
        <h3>Your application was successfully submitted and  </h3>
        <h3>your payment of  &#8377;{amount/100} has been received.</h3>
        
        <h4 style={{marginTop:"50px"}}>Kindly check your inbox for an email from us.</h4>
        <h6 style={{textDecoration:"underline", width:"100%", marginTop:"50px", textAlign:"left", pointerEvents:"none"}}> Payment ID: {order_id} </h6>
      </div>
    </div>

  )
}

export default Success;