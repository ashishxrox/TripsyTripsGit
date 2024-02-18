import React, { useState,useContext, useEffect } from 'react'
import FormDataContext from '../../context/FormData/FormDataContext'


const NonEvisaForm = ({type, evisa}) => {

    const {nonEvisa,setNonEvisa, handleNonEvisaSubmit} = useContext(FormDataContext)


    const vName = type.name
    // const eVisa = evisa

    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        departDates: '',
        returnDates: '',
        visaName: vName
    })

    useEffect(() => {
        if (nonEvisa.name) {
            handleNonEvisaSubmit();
            // setSubmitted(true)
        }
    }, [nonEvisa.name, handleNonEvisaSubmit]);

    const onChange = (e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        setNonEvisa(data);
    }


    return (
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: "80%", padding: "10px 0", borderRadius: "15px", fontWeight: "bold", fontSize: "20px", backgroundColor: "#000047", boxShadow: "5px 5px 15px #000", border: "2px solid #000047" }}>
                Get in Touch
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor:"#000047", color:"#fff"}}>
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{vName} </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">
                                
                                
                                   
                                    <div className="form-group my-3">
                                        {/* <label htmlFor="name">Full Name:</label> */}
                                        <input type="text" className="form-control" id="name" name='name' placeholder="Full Name" onChange={onChange} required/>
                                    </div>
                                    <div className="form-group my-3">
                                        {/* <label htmlFor="exampleInputEmail1">Email address:</label> */}
                                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} required/>
                                            
                                    </div>
                                    <div className="form-group my-3">
                                        {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                                        <input type="text" className="form-control" id="text" name='contact' placeholder="Contact Number" onChange={onChange} required/>
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="exampleInputPassword1">Departure Date</label>
                                        <input type="date" className="form-control" name='departDates' id="departDate" placeholder="" onChange={onChange} required/>
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="exampleInputPassword1">Return Date</label>
                                        <input type="date" className="form-control" id="returnDate" name='returnDates' placeholder="" onChange={onChange} required/>
                                    </div>
                                
                            </div>
                            <div className="modal-footer" style={{backgroundColor:"#000047", color:"#fff"}}>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{backgroundColor:"#fff", color:"#000047"}}>Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={onSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NonEvisaForm
