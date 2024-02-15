import React, { useEffect, useState, useContext } from 'react'
import FormDataContext from '../../context/FormData/FormDataContext';

const InsuranceForm = () => {

    const { insurance, setInsurance, handleInsuranceSubmit } = useContext(FormDataContext);
    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        type: 'insurance',
        place: '',
        checkInDate: '',
        checkOutDate: ''
    })

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (insurance.name) {
            console.log("Insurance")
            handleInsuranceSubmit(insurance)

        }
        // eslint-disable-next-line
    }, [insurance])

    const onSubmit = (e) => {
        e.preventDefault();
    
        // Perform validation on the form data
        if (data.name && data.email && data.contact && data.place && data.checkInDate && data.checkOutDate) {
            setInsurance(data); // Set insurance data only if all required fields are filled
        } else {
            // Handle validation failure, you can show an error message or perform any other action
            alert('Please fill in all required fields.');
        }
    };
    

    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#insuranceModal" style={{ width: "80%", backgroundColor: "#fff", border: "1px solid #fff", color: "#000047", fontSize: "20px", fontWeight: "bold", boxShadow: "5px 5px 15px #000" }}>
                Enquire
            </button>

            <div className="modal fade" id="insuranceModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{zIndex:'99999999'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor:"#000047", color:"#fff"}}>
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Get in Touch to get Travel Insurance</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">

                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="name" name='name' placeholder='Full Name' onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="contact" name='contact' placeholder='Contact Number' onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder='Email id' onChange={onChange} />

                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="place" name='place' placeholder='Destination' onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Departure Dates</label>
                                    <input type="date" className="form-control" id="checkInDate" name='departDate' onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Return Dates</label>
                                    <input type="date" className="form-control" id="checkOutDate" name='returnDate' onChange={onChange} required />
                                </div>
                            </div>
                            <div className="modal-footer" style={{backgroundColor:"#000047"}}>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{backgroundColor:"#fff", color:"#000"}}>Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={onSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InsuranceForm
