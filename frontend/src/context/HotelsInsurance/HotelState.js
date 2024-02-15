import React,{useState} from 'react'
import HotelContext from './HotelContext'

const HotelState = () => {

    const [hotel, setHotel] = useState({
        name: '',
        email: '',
        contact: ''
    })

    const [insurance, setInsurance] = useState({
        name: '',
        email: '',
        contact: ''
    })

    // Function to handle Hotel Form
    const handleHotelSubmit = async()=>{
        try {
            const response = await fetch('http://localhost:4321/api/submit-form/hotel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(hotel)
            });
            if (response.ok) {
                // Handle success
                console.log('Form data submitted successfully');
                
            } else {
                // Handle errors
                console.error('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        
    }

    // Function to handle Insurance Form
    const handleInsuranceSubmit = async()=>{
        try {
            const response = await fetch('http://localhost:4321/api/submit-form/insurance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(insurance)
            });
            if (response.ok) {
                // Handle success
                console.log('Form data submitted successfully');
                
            } else {
                // Handle errors
                console.error('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div>
      <HotelContext.Provider value={{ handleInsuranceSubmit,
                                      handleHotelSubmit,
                                      setHotel,
                                      setInsurance,
                                      hotel,
                                      insurance}}>
            
        </HotelContext.Provider>
    </div>
  )
}

export default HotelState
