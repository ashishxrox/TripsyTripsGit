import React, { useState, useEffect, useContext } from 'react';
import '../../static/pkgForm.css';
import { useNavigate } from 'react-router-dom';
import FormDataContext from '../../context/FormData/FormDataContext';

const PackageForm = ({ dest }) => {
    const navigate = useNavigate();
    const { packageData, setPackageData, handlePackageSubmit } = useContext(FormDataContext);
    const [submit, setSubmit] = useState(false);

    // Format the dest prop to create a unique ID
    const destId = dest.replace(/\s+/g, '').replace(/[^\w\s]/gi, '');

    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        place: dest,
        departDate: '',
        returnDate: ''
    });

    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            place: dest
        }));
    }, [dest]);

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (packageData.name && submit) {
            // Handle package submission
            handlePackageSubmit(packageData)
            // alert('Done');
            navigate('/');
    
            // Reset the submit state
            setSubmit(false);
        }
    }, [packageData]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (data.name && data.email && data.contact && data.departDate && data.returnDate) {
            // Update packageData with the correct place value
            const updatedPackageData = { ...data, place: dest };
            setSubmit(true);
            setPackageData(updatedPackageData);
        } else {
            alert('Please fill in all the fields.');
        }
    };

    return (
        <div className="container" style={{ width: "100%" }}>
            <button style={{ backgroundColor: "#000047", padding: "3px 50px", fontSize: "20px", borderRadius: "10px", border: "1px solid #000047", boxShadow: "2px 2px 15px #000" }} type="button" className="btn btn-primary pkg-form-btn" data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${destId}`}>
                Enquire
            </button>

            <div className="modal fade" id={`staticBackdrop-${destId}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`staticBackdropLabel-${destId}`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: "#000047", color: "#fff" }}>
                            <h1 className="modal-title fs-5" id={`staticBackdropLabel-${destId}`}>Enquire for holiday package {dest}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <input type="text" className="form-control" id={`name-${destId}`} name='name' placeholder='Full Name' onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id={`contact-${destId}`} name='contact' placeholder='Contact Number' onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id={`email-${destId}`} name='email' aria-describedby="emailHelp" placeholder='Email id' onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor={`departDate-${destId}`}>Departure Dates</label>
                                    <input type="date" className="form-control" id={`departDate-${destId}`} name='departDate' onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor={`returnDate-${destId}`}>Return Dates</label>
                                    <input type="date" className="form-control" id={`returnDate-${destId}`} name='returnDate' onChange={onChange} required />
                                </div>
                            </div>
                            <div className="modal-footer" style={{ backgroundColor: "#000047", color: "#fff" }}>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: "#fff", color: "#000" }}>Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackageForm;
