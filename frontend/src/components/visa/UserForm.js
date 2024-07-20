import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import FormDataContext from '../../context/FormData/FormDataContext';


import '../../static/userForm.css';
// import PaymentInterface from './PaymentInterface';
import TandC from './TandC';





const UserForm = (props) => {

    const navigate = useNavigate();
    const { type, travellerCount, eVisa, cost } = props;
    // console.log(type)

    const visaName = type.name
    const docsReq = type?.docsReq || {};
    const { setFormData, handleSubmit, uploadDocument } = useContext(FormDataContext);
    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        departDates: '',
        returnDates: '',
        travellerCount: travellerCount,
        eVisa: eVisa,
        totalCost: cost,
        visaName: '',
        uniqueStr: '',
        documentUniqueStrs: [],
        portOfEntry: '',
        mstatus: ''
    })
    const [documentUniqueStrs, setDocumentUniqueStrs] = useState([]);

    const [isChecked, setIsChecked] = useState(false);
    const [showTandC, setShowTandC] = useState(false);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [emailError, setEmailError] = useState('');


    useEffect(() => {
        setIsFormComplete(
            data.name !== '' &&
            data.email !== '' &&
            data.contact !== '' &&
            data.departDates !== '' &&
            data.returnDates !== '' &&
            data.visaName !== '' &&
            documentUniqueStrs.length === travellerCount * Object.keys(docsReq).length
        );
    }, [data, documentUniqueStrs, travellerCount, docsReq]);

    const generateUniqueStr = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let uniqueStr = '';
        const length = 10; // Length of the unique string

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            uniqueStr += characters[randomIndex];
        }

        return uniqueStr;
    };


    // eslint-disable-next-line
    useEffect(() => {
        setData({
            ...data,
            travellerCount: travellerCount,
            eVisa: eVisa,
            totalCost: cost,
            visaName: visaName

        });
    }, [travellerCount, eVisa, cost]);

    useEffect(() => {
        if (data.uniqueStr && data.documentUniqueStrs) {
            handleSubmit();
            navigate('/')
        }
    }, [data.uniqueStr, handleSubmit]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        if (name === 'email') {
            if (!validateEmail(value)) {
                setEmailError('Please enter a valid email address');
            } else {
                setEmailError('');
            }
        }
    };

    const handleFileChange = (e, travellerIndex, docIndex) => {
        const file = e.target.files[0];
        const name = `Traveler ${travellerIndex + 1} - ${docsReq[docIndex]}`;
        const uniqueStr = generateUniqueStr();  // Assuming uniqueStr is set correctly
        uploadDocument(file, name, uniqueStr);
        setDocumentUniqueStrs(prevUniqueStrs => [...prevUniqueStrs, uniqueStr]);
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        const uniqueStr = generateUniqueStr()
        if (data.name && data.email && data.contact && data.departDates && data.returnDates && data.visaName) {
            setData((prevData) => ({ ...prevData, uniqueStr: uniqueStr, documentUniqueStrs: documentUniqueStrs })); // Update local state first
            setFormData((prevFormData) => ({ ...prevFormData, ...data, uniqueStr: uniqueStr, documentUniqueStrs: documentUniqueStrs })); // Update context state
        } else {
            // Handle validation failure, you can show an error message or perform any other action
            alert('Please fill in all the fields.');
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked(prevState => !prevState); // Toggle the state
    };

    const toggleTandC = () => {
        setShowTandC(!showTandC);
    };



    // Function to render file upload inputs for each document requirement for each traveller
    const renderFileUploads = () => {
        const travellers = [];
      
        for (let i = 1; i <= travellerCount; i++) {
          const travellerLabel = travellerCount === 1? 'Traveller' : `Traveller ${i}`;
          const travellerFields = Object.keys(docsReq).map((key, index) => (
            <div key={`${i}-${index}`} className="col-md-6 mb-3">
              <label htmlFor={`doc-${i}-${index}`} className="form-label" style={{ fontSize: "16px", fontWeight: "500" }}>{docsReq[key]}</label>
              <input type="file" className="form-control px-4 py-3" id={`doc-${i}-${index}`} name="documents" onChange={(e) => handleFileChange(e, i, index)} required />
            </div>
          ));
      
          travellers.push(
            <div className='my-4' key={i}>
              <h3 className='' style={{fontWeight:"500", fontSize:"20px"}}>{travellerLabel} Documents</h3>
              <p style={{fontWeight:"500", fontSize:"16px", color:"rgba(125, 125, 125, 1)"}}>Only for Indian national passport with a minimum 6 months of validity*</p>
              <div className="row my-4">
                {travellerFields}
              </div>
            </div>
          );
        }
      
        return travellers;
      };



    return (
        <div className='user-form-main py-3' style={{ border: "1px solid #000", backgroundColor: "rgba(247, 247, 247, 1)", borderRadius: "5px" }}>
            {/* Apply Now Button */}
            {/* <button
                type="button"
                className="btn btn-primary apply-btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ backgroundColor: "#ffb800", border: "2px solid #ffb800", color: "black", fontWeight:"700"}}
            >
                Apply Now

            </button> */}

            {/* Modal */}
            <div className="">
                <div className="">
                    <div className="">
                        <h1 className="my-5"  style={{ color: "#000", fontFamily: "Clash Display", fontSize: "24px", lineHeight: "30px", fontWeight: "500" }}>Application Form for {visaName}</h1>
                    </div>
                    <div className="">
                        {/* Form */}
                        <h4 className='my-5' style={{ fontWeight: "500", fontSize: "20px", lineHeight: "30px", fontFamily: "Clash Display" }}>Traveller Details</h4>
                        <form encType="multipart/form-data">
                            <div className='user-form-row1 d-flex justify-content-between align-items-center' style={{ width: "100%" }}>
                                <div className="mb-3" style={{ flexBasis: "48%", width: "100%" }}>
                                    <label htmlFor="name" className="form-label" style={{ fontSize: "16px", fontWeight: "500" }}>Full Name*</label>
                                    <input type="text" className="form-control px-4 py-3" id="name" name='name' onChange={onChange} placeholder="Your Full Name" required />
                                </div>
                                <div className="mb-3" style={{ flexBasis: "48%", width: "100%" }}>
                                    <label htmlFor="email" className="form-label" style={{ fontSize: "16px", fontWeight: "500" }}>Email id:</label>
                                    <input type="email" className="form-control px-4 py-3" id="email" name='email' onChange={onChange} placeholder="Your Email Id" required />
                                    {emailError && <div style={{ color: 'red', marginTop: '5px' }}>{emailError}</div>}
                                </div>
                            </div>
                            <div className='user-form-row1 d-flex justify-content-between align-items-center ' style={{ width: "100%" }}>
                                <div className="mb-3" style={{ flexBasis: "48%", width: "100%" }}>
                                    <label htmlFor="contact" className="form-label" style={{ fontSize: "16px", fontWeight: "500" }}>Contact Number:</label>
                                    <input type="text" className="form-control px-4 py-3" id="contact" name='contact' onChange={onChange} required />
                                </div>
                                <div className="mb-3" style={{ flexBasis: "48%", width: "100%" }}>
                                    <label htmlFor="mstatus" className="form-label" style={{ fontSize: "16px", fontWeight: "500" }}>Marital status: </label> <br />
                                    <select className='px-4 py-3' name="mstatus" id="mstatus" onChange={onChange} style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid grey", width: "100%", textAlign: "left", color: "grey", border: "1px solid grey" }}>
                                        <option value=" ">Select marital status</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Separated">Separated</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Widowed">Widowed</option>
                                        <option value="Civil">Civil</option>
                                        <option value="Partnership">Partnership</option>

                                    </select>
                                </div>
                            </div>
                            <div className='user-form-row1 d-flex justify-content-between align-items-center ' style={{ width: "100%" }}>
                                <div className="mb-3" style={{ flexBasis: "48%", width: "100%" }}>
                                    <label htmlFor="departDates" className="form-label" style={{ fontSize: "16px", fontWeight: "500" }}>Departure Date:</label>
                                    <input type="date" className="form-control px-4 py-3" id="departDates" name='departDates' onChange={onChange} required />
                                </div>
                                <div className="mb-3" style={{ flexBasis: "48%", width: "100%" }}>
                                    <label htmlFor="returnDates" className="form-label" style={{ fontSize: "16px", fontWeight: "500" }}>Return Date:</label>
                                    <input type="date" className="form-control px-4 py-3" id="returnDates" name='returnDates' onChange={onChange} required />
                                </div>
                            </div>
                            {visaName === 'Vietnam E-Visa' && <div className="mb-3">
                                <label htmlFor="portOfEntry" className="form-label">Which city in Vietnam are you arriving in?</label>
                                <input type="text" className="form-control" id="portOfEntry" name='portOfEntry' onChange={onChange} required />
                                <small>This is required on your visa, please provide accurate information</small>
                            </div>}

                            {renderFileUploads()}
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" id="agreeTermsCheckbox" onChange={handleCheckboxChange} checked={isChecked} />
                                <label className="form-check-label" style={{fontSize:"16px", color:"rgba(134, 134, 134, 1)"}}>
                                    I agree to the <span className="tandc-link" onClick={toggleTandC} style={{ color: "#3488E8", cursor: "pointer" }}>
                                        Terms and Conditions
                                    </span>
                                </label>
                            </div>

                            {showTandC && (
                                <div className="tandc-popup" style={{ position: "fixed", zIndex: "9999", backgroundColor: "#fff", top: "30%", left: "40%" }}>
                                    <TandC closeBtn={toggleTandC} />
                                </div>
                            )}
                            {/* Submit Button */}
                            <div className="">
                                <button type="submit" className={`${!isFormComplete || !isChecked? "btn-disabled": "final-btn"}`} style={{ color: "#fff", height:"45px", width:"125px", borderRadius:"30px" }}  onClick={onSubmit} disabled={!isFormComplete || !isChecked}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;


