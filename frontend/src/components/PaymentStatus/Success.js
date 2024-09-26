import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode';

const Success = () => {
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate(); 

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const token = urlParams.get('token');

  //   if (token) {
  //     try {
  //       // Decode and validate token (optionally verify expiration here)
  //       const decoded = jwtDecode(token);

  //       // Perform additional checks if necessary
  //       if (decoded.uniqueStr) {
  //         setIsValid(true);
  //       } else {
  //         throw new Error('Invalid token');
  //       }
  //     } catch (error) {
  //       console.error('Token validation failed:', error);
  //       navigate('/'); // Redirect to homepage if validation fails
  //     }
  //   } else {
  //     navigate('/'); // Redirect to homepage if token is missing
  //   }
  // }, [navigate]);

  return (
    isValid ? (
      <div className='container' style={{height:"60vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div className="message text-center py-5 px-5" style={{backgroundColor:"#87A922", color:"#fff", borderRadius:"15px", boxShadow:"5px 5px 15px #000", textShadow:"2px 2px 5px #000"}}>
          <h2>Congratulations!</h2>
          <h3>Your application was successfully submitted.</h3>
          <h4>Kindly check your inbox for an email from us.</h4>
        </div>
      </div>
    ) : null
  )
}

export default Success;