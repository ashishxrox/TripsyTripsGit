import React, { useState } from 'react';
// import PaymentInterface from '../../components/visa/PaymentInterface';
import FormDataContext from './FormDataContext';

const FormDataState = (props) => {
    // Define state variables to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        travellerCount: 0,
        totalCost: 0,
        eVisa: '',
        departDates: '',
        returnDates: '',
        paymentStatus: '',
        uniqueStr: '',
        visaName: '',
        documentUniqueStrs: [],
        portOfEntry: ''

    })

    const [nonEvisa, setNonEvisa] = useState({
        name: '',
        email: '',
        contact: '',
        departDates: '',
        returnDates: '',
        visaName: ''
    })

    const [flight, setFlight] = useState({
        name: '',
        email: '',
        contact: '',
        type: '',
        departDate: '',
        arrivalDate: '',
        destination: '',
        location: '',
        trip: ''
    })

    const [hotel, setHotel] = useState({
        name: '',
        email: '',
        contact: '',
        place: '',
        checkInDate: '',
        checkOutDate: ''
    })

    const [insurance, setInsurance] = useState({
        name: '',
        email: '',
        contact: '',
        place: '',
        departDate: '',
        returnDate: ''
    })

    const [packageData, setPackageData] = useState({
        name: '',
        email: '',
        contact: '',
        place: '',
        departDate: '',
        returnDate: ''
    })

    const [evisa, setEvisa] = useState('');
    const [appType, setType] = useState(null);
    // eslint-disable-next-line 
    const [isSubmitted, setSubmitted] = useState(false)


    // Function to update form data
    const updateFormData = (key, value) => {
        setFormData({ ...formData, [key]: value });
        console.log(formData)
    };

    // Function to handle E Visa form submission
    const handleSubmit = async () => {
        // event.preventDefault();
        
        // Send form data to the endpoint
        console.log(formData)
        console.log(formData.visaName)
        try {
            const response = await fetch('http://localhost:4321/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle success
                console.log('Form data submitted successfully');
                alert("Your application was submitted successfully, we will get in touch with you soon!")
                setSubmitted(true)
            } else {
                // Handle errors
                console.error('Failed to submit form data');
                alert("There seems to be some problem, please try again later!")
            }
        } catch (error) {
            console.error('Error:', error);
            alert("There seems to be some problem, please try again later!")
        }
    };

    // Function to upload Documents

    const uploadDocument = async (file, name, uniqueStr) => {
        
        const formData = new FormData();
        formData.append('documents', file);
        formData.append('name', name);
        formData.append('uniqueStr', uniqueStr);

        console.log(formData)

        try {
            const response = await fetch('http://localhost:4321/api/submit-form/uploadDocs', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                console.log('Document uploaded successfully');

            } else {
                console.error('Failed to upload document:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading document:', error);
        }
    };

    // Function to submit Non E Visa

    const handleNonEvisaSubmit = async()=>{
        try {
            const response = await fetch('http://localhost:4321/api/submit-form/uploadNonEvisa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nonEvisa)
            });
            if (response.ok) {
                // Handle success
                console.log('Form data submitted successfully');
                alert("Your application was submitted successfully, we will get in touch with you soon!")
            } else {
                // Handle errors
                console.error('Failed to submit form data');
                alert("There seems to be some problem, please try again later!")
            }
        } catch (error) {
            console.error('Error:', error);
            alert("There seems to be some problem, please try again later!")
        }
    }

    // Function to handle Flight Form
    const handleFlightSubmit = async()=>{
        console.log(flight)
        try {
            const response = await fetch('http://localhost:4321/api/submit-form/flight', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(flight)
            });
            if (response.ok) {
                // Handle success
                console.log('Form data submitted successfully');
                alert("Your application was submitted successfully, we will get in touch with you soon!")
                
            } else {
                // Handle errors
                console.error('Failed to submit form data');
                alert("There seems to be some problem, please try again later!")
            }
        } catch (error) {
            console.error('Error:', error);
            alert("There seems to be some problem, please try again later!")
        }
    }

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
                alert("Your application was submitted successfully, we will get in touch with you soon!")
                
            } else {
                // Handle errors
                console.error('Failed to submit form data');
                alert("There seems to be some problem, please try again later!")
            }
        } catch (error) {
            console.error('Error:', error);
            alert("There seems to be some problem, please try again later!");
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
                alert("Your application was submitted successfully, we will get in touch with you soon!")
                
            } else {
                // Handle errors
                console.error('Failed to submit form data');
                alert("There seems to be some problem, please try again later!")
            }
        } catch (error) {
            console.error('Error:', error);
            alert("There seems to be some problem, please try again later!")
        }
    }

    const handlePackageSubmit = async()=>{
        // console.log(packageData)
        try {
            const response = await fetch('http://localhost:4321/api/submit-form/packages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(packageData)
            });
            if (response.ok) {
                // Handle success
                console.log('Form data submitted successfully');
                alert("Your application was submitted successfully, we will get in touch with you soon!")
                
            } else {
                // Handle errors
                console.error('Failed to submit form data');
                alert("There seems to be some problem, please try again later!")
            }
        } catch (error) {
            console.error('Error:', error);
            alert("There seems to be some problem, please try again later!")
        }
    }
    // if (isSubmitted) {
    //     return <PaymentInterface />;
    // }

    return (
        <FormDataContext.Provider value={{ formData, 
                                           evisa,
                                           appType,
                                           nonEvisa,
                                           flight,
                                           hotel,
                                           insurance,
                                           packageData,
                                           setPackageData,
                                           updateFormData,
                                           setFormData,
                                           setEvisa,
                                           setType,
                                           handleSubmit, 
                                           uploadDocument,
                                           setNonEvisa,
                                           handleNonEvisaSubmit,
                                           handleInsuranceSubmit,
                                           handleFlightSubmit,
                                           handleHotelSubmit,
                                           handlePackageSubmit,
                                           setFlight,
                                           setHotel,
                                           setInsurance}}>
            {props.children}
        </FormDataContext.Provider>
    );
};

export default FormDataState;
