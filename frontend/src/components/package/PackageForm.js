import React,{useState, useEffect, useContext} from 'react'
import '../../static/pkgForm.css'

import FormDataContext from '../../context/FormData/FormDataContext'

const PackageForm = ({place}) => {

    const {packageData, setPackageData, handlePackageSubmit} = useContext(FormDataContext);

    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        place: place,
        departDate: '',
        returnDate: ''
    })


    const onChange = (e)=>{
        setData({ ...data, [e.target.name]: e.target.value })
    }
    
    useEffect(() => {
        if (packageData.name) {
            
            handlePackageSubmit(packageData)

        }
        // eslint-disable-next-line
    }, [packageData])

    const onSubmit = (e)=>{
        e.preventDefault();
        if(data.name && data.email && data.contact && data.departDate && data.returnDate){ 
            setPackageData(data)
        }else{
            alert('Please fill in all the fields.');
        }
    }
    return (
        <div className="container" style={{width:"100%"}}>
            
            <button style={{backgroundColor: "#000047", padding:"3px 50px", fontSize:"20px", borderRadius:"10px", border: "1px solid #000047", boxShadow:"2px 2px 15px #000"}} type="button" className="btn btn-primary pkg-form-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Enquire
            </button>

            
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor:"#000047", color:"#fff"}}>
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Enquire for holiday package</h1>
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
                                {/* <div className="mb-3">
                                    <input type="text" className="form-control" id="place" name='place' placeholder='Destination' onChange={onChange} required />
                                </div> */}
                                <div className="mb-3">
                                    <label htmlFor="">Departure Dates</label>
                                    <input type="date" className="form-control" id="checkInDate" name='departDate' onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Return Dates</label>
                                    <input type="date" className="form-control" id="checkOutDate" name='returnDate' onChange={onChange} required />
                                </div>
                            </div>
                            <div className="modal-footer" style={{backgroundColor:"#000047", color:"#fff"}}>
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

export default PackageForm
