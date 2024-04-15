import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import FormDataContext from '../../context/FormData/FormDataContext';


import '../../static/userForm.css';
// import PaymentInterface from './PaymentInterface';
import TandC from './TandC';





const UserForm = (props) => {

    const navigate =useNavigate();
    const { type, travellerCount, eVisa, cost } = props;
    const visaName = type.name
    const docsReq = type.docsReq;
    const { setFormData, handleSubmit, uploadDocument} = useContext(FormDataContext);
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

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

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
        if(data.name && data.email && data.contact && data.departDates && data.returnDates && data.visaName) 
        {
            setData((prevData) => ({ ...prevData, uniqueStr: uniqueStr, documentUniqueStrs: documentUniqueStrs })); // Update local state first
            setFormData((prevFormData) => ({ ...prevFormData, ...data, uniqueStr: uniqueStr, documentUniqueStrs: documentUniqueStrs })); // Update context state
        }else {
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
            const travellerLabel = travellerCount === 1 ? 'Traveller' : `Traveller ${i}`;
            const travellerFields = Object.keys(docsReq).map((key, index) => (
                <div key={`${i}-${index}`} className="mb-3">
                    <label htmlFor={`doc-${i}-${index}`} className="form-label">{`${travellerLabel} - ${docsReq[key]}`}</label>
                    <br/>
                    {docsReq[key] === 'Passport Scan (Front Page)' && <h6 style={{fontSize:"7px",margin:"0",padding:"0",color:"#808080"}}>Only for Indian national passport with a minimum 6 months of validity*</h6>}
                    {docsReq[key] === 'Passport Scan (Last Page)' && <h6 style={{fontSize:"7px",margin:"0",padding:"0",color:"#808080"}}>Only for Indian national passport with a minimum 6 months of validity*</h6>}
                    <input type="file" className="form-control" id={`doc-${i}-${index}`} name="documents" onChange={(e) => handleFileChange(e, i, index)} required/>
                </div>
            ));
            travellers.push(travellerFields);
        }

        return travellers.map((travellerFields, index) => (
            <div key={index}>
                <h3>{travellerCount === 1 ? 'Traveller' : `Traveller ${index + 1}`}</h3>
                {travellerFields}
            </div>
        ));
    };





    return (
        <div>
            {/* Apply Now Button */}
            <button
                type="button"
                className="btn btn-primary apply-btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ backgroundColor: "#ffb800", border: "2px solid #ffb800", color: "black", fontWeight:"700"}}
            >
                Apply Now

            </button>

            {/* Modal */}
            {<div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
                style={{ zIndex: "999999" }}
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: "#000047" }}>
                            <h1 className="modal-title fs-5" id="staticBackdropLabel" style={{ color: "#fff" }}>Application Form for {visaName}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Form */}
                            <form encType="multipart/form-data">
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your information with anyone else.</small> */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full Name:</label>
                                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email id:</label>
                                    <input type="email" className="form-control" id="email" name='email' onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contact" className="form-label">Contact Number:</label>
                                    <input type="text" className="form-control" id="contact" name='contact' onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mstatus" className="form-label">Marital status: </label> <br />
                                    <select name="mstatus" id="mstatus" onChange={onChange} style={{padding:"5px 10px", borderRadius:"5px", border:"1px solid grey", width: "100%", textAlign:"left", color:"grey", border:"1px solid grey"}}>
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
                                <div className="mb-3">
                                    <label htmlFor="departDates" className="form-label">Departure Date:</label>
                                    <input type="date" className="form-control" id="departDates" name='departDates' onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="returnDates" className="form-label">Return Date:</label>
                                    <input type="date" className="form-control" id="returnDates" name='returnDates' onChange={onChange} required />
                                </div>
                                {visaName === 'Vietnam E-Visa' &&<div className="mb-3">
                                    <label htmlFor="portOfEntry" className="form-label">Which city in Vietnam are you arriving in?</label>
                                    <input type="text" className="form-control" id="portOfEntry" name='portOfEntry' onChange={onChange} required />
                                </div>}

                                {renderFileUploads()}
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="agreeTermsCheckbox" onChange={handleCheckboxChange} checked={isChecked} />
                                    <label className="form-check-label">
                                        I agree to the <span className="tandc-link" onClick={toggleTandC} style={{color:"#3488E8", cursor:"pointer"}}>
                                            Terms and Conditions
                                        </span>
                                    </label>
                                </div>

                                {showTandC && (
                                    <div className="tandc-popup" style={{position:"fixed", zIndex:"9999", backgroundColor:"#fff", top:"30%", left:"40%"}}>
                                        <TandC closeBtn = {toggleTandC}/>
                                    </div>
                                )}
                                {/* Submit Button */}
                                <div className="modal-footer" style={{ backgroundColor: "#000047" }}>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: "#fff", color: "#000" }}>Close</button>
                                    <button type="submit" className="btn btn-primary" style={{ color: "#fff" }} data-bs-dismiss="modal" onClick={onSubmit} disabled={!isFormComplete || !isChecked}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default UserForm;


