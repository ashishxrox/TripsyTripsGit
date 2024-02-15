import React, { useContext, useEffect, useState } from 'react'
import FormDataContext from '../../context/FormData/FormDataContext'

const FilghtForm = () => {

    const { flight, setFlight, handleFlightSubmit } = useContext(FormDataContext);

    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        type: 'flight',
        departDate: '',
        arrivalDate: '',
        destination: '',
        location: '',
        trip: 'roundTrip'
    })

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (flight.name) {
            handleFlightSubmit(flight)

        }
    }, [flight])

    const onSubmit = (e) => {
        e.preventDefault();
    
        // Perform validation on the form data
        if (data.name && data.email && data.contact && data.departDate && data.location && data.destination) {
            setFlight(data); // Set flight data only if all required fields are filled
        } else {
            // Handle validation failure, you can show an error message or perform any other action
            alert('Please fill in all the fields.');
        }
    };

    return (
        <div style={{ width: "100%", }}>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#flighteModal" style={{ width: "80%", backgroundColor: "#fff", border: "1px solid #fff", color: "#000047", fontSize: "20px", fontWeight: "bold", boxShadow: "5px 5px 15px #000" }}>
                Enquire
            </button>

            <div className="modal fade" id="flighteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{zIndex:'99999999'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor:"#000047", color:"#fff"}}>
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Get in Touch to Book Flights</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">

                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="name" name='name' placeholder='Full Name' onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="contact" name='contact' placeholder='Contact Number' onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder='Email id' onChange={onChange} required />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tripType" style={{textAlign:"left"}}>Trip Type</label>
                                    <select
                                        id="tripType"
                                        name="trip"
                                        className="form-select"
                                        onChange={onChange}
                                        required
                                    >
                                        <option value="roundTrip">Round Trip</option>
                                        <option value="oneWay">One Way</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Departure Dates</label>
                                    <input type="date" className="form-control" id="departDate" name='departDate' placeholder='Departure Dates' onChange={onChange} required />
                                </div>
                                {data.trip === "roundTrip" && <div className="mb-3">
                                <label htmlFor="">Return Dates</label>
                                    <input type="date" className="form-control" id="arrivalDate" name='arrivalDate' placeholder='Arrival Dates' onChange={onChange} required />
                                </div>}
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="location" name='location' placeholder='Departure City' onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="destination" name='destination' placeholder='Arrival City' onChange={onChange} required />
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

export default FilghtForm
