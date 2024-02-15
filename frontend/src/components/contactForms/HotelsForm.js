import React, {useState, useContext, useEffect} from 'react'
import FormDataContext from '../../context/FormData/FormDataContext'

const HotelsForm = () => {

    const { hotel, setHotel, handleHotelSubmit } = useContext(FormDataContext);

    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        type: 'hotel',
        place: '',
        checkInDate: '',
        checkOutDate: ''

    })

    const onChange = (e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        if(hotel.name){
            handleHotelSubmit(hotel)

        }
    },[hotel])

    const onSubmit = (e) => {
        e.preventDefault();
    
        // Perform validation on the form data
        if (data.name && data.email && data.contact && data.place && data.checkInDate && data.checkOutDate) {
            setHotel(data); // Set hotel data only if all required fields are filled
        } else {
            // Handle validation failure, you can show an error message or perform any other action
            alert('Please fill in all the fields.');
        }
    };
    
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#hotelModal" style={{ width: "80%", backgroundColor: "#fff", border: "1px solid #fff", color: "#000047", fontSize: "20px", fontWeight: "bold", boxShadow: "5px 5px 15px #000" }}>
                Enquire
            </button>

            <div className="modal fade" id="hotelModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{zIndex:'99999999'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor:"#000047", color:"#fff"}}>
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Get in Touch to Book Hotels</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">

                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                               
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="name" name='name' placeholder='Full Name' onChange={onChange} required/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="contact" name='contact' placeholder='Contact Number' onChange={onChange} required/>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder='Email id' onChange={onChange} required/>

                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="place" name='place' placeholder='Destination' onChange={onChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Check In Date</label>
                                    <input type="date" className="form-control" id="checkInDate" name='checkInDate'  onChange={onChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Check Out Date</label>
                                    <input type="date" className="form-control" id="checkOutDate" name='checkOutDate' onChange={onChange} required/>
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

export default HotelsForm
