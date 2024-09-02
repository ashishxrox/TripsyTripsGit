import React, { useState } from 'react';
// import PaymentInterface from '../../components/visa/PaymentInterface';
import FormDataContext from './FormDataContext';

import axios from 'axios'

// production URL
const apiURL = 'https://www.api.tripsytrips.com'

// Local Host URL
const localHost = 'http://localhost:4321'

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
        portOfEntry: '',
        hotelAddress: '',
        hotelPostalCode: '',
        mstatus: ''

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
        // console.log(formData)
        // console.log(formData.visaName)
        try {
            const response = await fetch(`${apiURL}/api/submit-form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSubmitted(true)
                // Handle success
                try {
                    const notifyResponse = await fetch(`${apiURL}/api/getNotify/evisa`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: formData.name,
                            type: 'E-visa'
                        })
                    });
                    if (notifyResponse.ok) {
                        console.log('Notification sent successfully');
                        // Handle notification success if needed
                    } else {
                        console.error('Failed to send notification');
                        // Handle notification failure if needed
                    }
                } catch (error) {
                    console.error('Error sending notification:', error);
                }

                console.log('Form data submitted successfully');
                alert("Your form was submitted successfully, please complete the payment to proceed further!")

                callPhonePePaymentAPI();




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

    // Function to call the PhonePe payment API

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const callPhonePePaymentAPI = async () => {
        try {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

            if (!res) {
                alert('Failed to load Razorpay SDK.');
                return;
            }

            // Fetch payment details from your backend
            const response = await axios.post(`${apiURL}/api/phonepe`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data && response.data.success) {
                const { orderId, amount, currency, key } = response.data;

                const options = {
                    key: key, // Razorpay API key
                    amount: amount, // Amount in paise (1 INR = 100 paise)
                    currency: currency,
                    name: "Tripsy Trips", // Your brand or company name
                    description: "Visa Application Fee",
                    order_id: orderId, // Order ID from backend
                    handler: async function (response) {
                        const paymentData = {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature
                        };

                        try {
                            // Verify the payment on your backend
                            const verifyResponse = await axios.post(`${apiURL}/api/phonepe/verify-payment`, paymentData);

                            if (verifyResponse.data && verifyResponse.data.success) {
                                alert('Your payment is completed successfully. Please check your registered email; you must have received an email from Tripsy Trips.');
                                window.location.href = 'https://tripsytrips.com/thank-you';
                            } else {
                                console.error('Failed to verify payment');
                            }
                        } catch (error) {
                            console.error('Error occurred while verifying payment:', error);
                        }
                    },
                    prefill: {
                        name: formData.name,
                        email: formData.email,
                        contact: formData.contact
                    },
                    theme: {
                        color: "#3399cc"
                    }
                };

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } else {
                console.error('Failed to create Razorpay order');
            }
        } catch (error) {
            console.error('Error occurred while processing payment:', error);
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
            const response = await fetch(`${apiURL}/api/submit-form/uploadDocs`, {
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

    const handleNonEvisaSubmit = async () => {
        try {
            const response = await fetch(`${apiURL}/api/submit-form/uploadNonEvisa`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nonEvisa)
            });
            if (response.ok) {
                // Handle success
                try {
                    const notifyResponse = await fetch(`${apiURL}/api/getNotify/nonevisa`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: nonEvisa.name,
                            type: 'Non E-Visa'
                        })
                    });
                    if (notifyResponse.ok) {
                        console.log('Notification sent successfully');
                        // Handle notification success if needed
                    } else {
                        console.error('Failed to send notification');
                        // Handle notification failure if needed
                    }
                } catch (error) {
                    console.error('Error sending notification:', error);
                }

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
    const handleFlightSubmit = async () => {
        console.log(flight)
        try {
            const response = await fetch(`${apiURL}/api/submit-form/flight`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(flight)
            });
            if (response.ok) {
                // Handle success

                try {
                    const notifyResponse = await fetch(`${apiURL}/api/getNotify/flight`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: flight.name,
                            type: 'flight'
                        })
                    });
                    if (notifyResponse.ok) {
                        console.log('Notification sent successfully');
                        // Handle notification success if needed
                    } else {
                        console.error('Failed to send notification');
                        // Handle notification failure if needed
                    }
                } catch (error) {
                    console.error('Error sending notification:', error);
                }

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
    const handleHotelSubmit = async () => {
        try {
            const response = await fetch(`${apiURL}/api/submit-form/hotel`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(hotel)
            });
            if (response.ok) {
                // Handle success
                try {
                    const notifyResponse = await fetch(`${apiURL}/api/getNotify/hotel`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: hotel.name,
                            type: 'hotel'
                        })
                    });
                    if (notifyResponse.ok) {
                        console.log('Notification sent successfully');
                        // Handle notification success if needed
                    } else {
                        console.error('Failed to send notification');
                        // Handle notification failure if needed
                    }
                } catch (error) {
                    console.error('Error sending notification:', error);
                }

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
    const handleInsuranceSubmit = async () => {
        try {
            const response = await fetch(`${apiURL}/api/submit-form/insurance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(insurance)
            });
            if (response.ok) {
                // Handle success
                try {
                    const notifyResponse = await fetch(`${apiURL}/api/getNotify/insurance`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: insurance.name,
                            type: 'insurance'
                        })
                    });
                    if (notifyResponse.ok) {
                        console.log('Notification sent successfully');
                        // Handle notification success if needed
                    } else {
                        console.error('Failed to send notification');
                        // Handle notification failure if needed
                    }
                } catch (error) {
                    console.error('Error sending notification:', error);
                }
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

    const handlePackageSubmit = async () => {
        // console.log(packageData)
        try {
            const response = await fetch(`${apiURL}/api/submit-form/packages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(packageData)
            });
            if (response.ok) {
                // Handle success
                try {
                    const notifyResponse = await fetch(`${apiURL}/api/getNotify/package`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: packageData.name,
                            type: 'package'
                        })
                    });
                    if (notifyResponse.ok) {
                        console.log('Notification sent successfully');
                        // Handle notification success if needed
                    } else {
                        console.error('Failed to send notification');
                        // Handle notification failure if needed
                    }
                } catch (error) {
                    console.error('Error sending notification:', error);
                }

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
        <FormDataContext.Provider value={{
            formData,
            evisa,
            appType,
            nonEvisa,
            flight,
            hotel,
            insurance,
            packageData,
            isSubmitted,
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
            setInsurance,
        }}>
            {props.children}
        </FormDataContext.Provider>
    );
};

export default FormDataState;
