import React, { useState, useEffect } from 'react'
// import Download from './Download';
import axios from 'axios'

const apiURL = 'https://www.api.tripsytrips.com'

const localHost = 'http://localhost:4321'

const EvisaBox = ({ data, docs }) => {


    // const [select, setSelect] = useState(data.visaGranted)
    const [comment, setComment] = useState(data.comment)
    const [handle, setHandle] = useState(data.handle)
    const [handleChanged, setHandleChanged] = useState(false);

    const filteredDocs = docs.filter(doc => {
        return data.documentUniqueStrs.includes(doc.uniqueStr);
    });

    const handleDownload = async () => {
        try {
            // Send a POST request to the server to create a zip file
            const response = await axios.post(`${localHost}/api/fetchFormData/download`, filteredDocs, {
                responseType: 'blob', // Ensure response type is set to blob
            });

            // Create a temporary URL for the blob
            const url = window.URL.createObjectURL(new Blob([response.data]));

            // Create a link element and click it to initiate download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'documents.zip');
            document.body.appendChild(link);
            link.click();

            // Clean up
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading documents:', error);
        }
    };

    function convertToIST(dateString) {
        // Given date string
        var date = new Date(dateString);

        // Convert UTC time to IST time
        var ISTOffset = 330;   // IST offset in minutes
        var dateIST = new Date(date.getTime() + (ISTOffset * 60000));

        // Format the date and time
        var formattedDate = ('0' + dateIST.getUTCHours()).slice(-2) + ':' +
            ('0' + dateIST.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateIST.getUTCSeconds()).slice(-2) + ' ' +
            ('0' + dateIST.getUTCDate()).slice(-2) + '|' +
            ('0' + (dateIST.getUTCMonth() + 1)).slice(-2) + '|' +
            dateIST.getUTCFullYear();

        return formattedDate;
    }

    const changeState = async () => {
        try {
            const query = await axios.get(`${localHost}/api/update/${data.uniqueStr}`);
            alert("Visa Applied")
        } catch (error) {
            console.log(error)
        }
    }

    const changeVisaSent = async () => {
        try {
            const query = await axios.get(`${localHost}/api/update/setGranted/${data.uniqueStr}`);
            alert("Visa Sent")
        } catch (error) {
            console.log(error)
        }
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };


    

    const handleSubmit = async () => {

        try {
            const query = await axios.get(`${localHost}/api/update/comment/${data.uniqueStr}/${comment}`)
            alert("Comment added");
        } catch (error) {
            console.log(error)
        }
    }



    const handleHandledByChange = (event) => {
        setHandle(event.target.value);
        setHandleChanged(true); // Set the flag to indicate handle change
    };

    useEffect(() => {
        if (handleChanged) {
            handleHandledBySubmit();
            setHandleChanged(false); // Reset the flag
        }
    }, [handleChanged]);

    


    const handleHandledBySubmit = async () => {
        try {
            const query = await axios.get(`${localHost}/api/update/handledBy/${data.uniqueStr}/${handle}`)
            alert(`Client handled by ${handle}`);
        } catch (error) {
            console.log(error)
        }
    }





    return (
        <div className='my-5' style={{ height: "35%", width: "100%" }}>
            <div className="data-container" style={{ overflow: "hidden", backgroundColor: "#20293a", borderRadius: "15px", boxShadow: "5px 5px 15px #000", color: "#fff", margin: "40px 10px" }}>
                <div className="data-title" style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", height: "100%", alignItems: "center", flexDirection: "row" }}>
                    <h4>{data.name}</h4>
                    <h5>{data.visaName}</h5>
                    <p>Created at:{convertToIST(data.createdAt)}</p>
                </div>
                <div className="data-body" style={{ backgroundColor: "#fff", width: "100%", height: "100%", overflow: "hidden", padding: "10px 30px" }}>
                    <div className="data-body-top">
                        <div className="data-body-left" style={{ display: "flex", justifyContent: "space-between", color: "#20293a" }}>
                            <p>E-mail ID: <a href={`mailto:${data.email}`} style={{ color: "#20293a", textDecoration: "none", cursor: "pointer" }}>{data.email}</a></p>
                            <p>Contact : {data.contact}</p>
                            <p>Marital Status : {data.mstatus}</p>
                        </div>
                        <div className="data-body-right" style={{ color: "#20293a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p>Traveller Count: {data.travellerCount}</p>
                            <p>Total Cost: &#8377;{data.totalCost}/-</p>
                        </div>
                        <div className="data-body-right" style={{ color: "#20293a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p>Departure Dates: {data.departDates}</p>
                            <p>Return Dates: {data.returnDates}</p>
                        </div>
                        {data.visaName === 'Vietnam E-Visa' && <div className="data-body-right" style={{ color: "#20293a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p>Place of Entry: {data.portOfEntry}</p>
                        </div>}
                        {data.visaName === 'Vietnam 30 Days Single Entry Express E-Visa( 2-3 Working Days )' && <div className="data-body-right" style={{ color: "#20293a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p>Place of Entry: {data.portOfEntry}</p>
                        </div>}
                        {data.visaName === 'Vietnam 30 Days Single Entry Express E-Visa (1 Working Day )' && <div className="data-body-right" style={{ color: "#20293a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p>Place of Entry: {data.portOfEntry}</p>
                        </div>}
                        {data.visaName === 'Vietnam 30 Days Multiple Entry E-Visa' && <div className="data-body-right" style={{ color: "#20293a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p>Place of Entry: {data.portOfEntry}</p>
                        </div>}
                        {data.visaName === 'Vietnam 90 Days Multiple Entry E-Visa' && <div className="data-body-right" style={{ color: "#20293a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p>Place of Entry: {data.portOfEntry}</p>
                        </div>}
                        {data.visaName === 'Indonesia E-Visa' && <div className="data-body-right" style={{ color: "#20293a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p>Hotel Address Information: {data.hotelAddress}</p>
                            <p>Hotel Postal Code: {data.hotelPostalCode}</p>
                        </div>}

                        <div className="data-body-right" style={{ color: "#20293a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p style={{ color: data.paymentStatus === "Pending" ? "red" : "green" }}>Payment Status: {data.paymentStatus}</p>
                            <button type="button" className="btn" onClick={handleDownload} style={{ backgroundColor: "#000047", color: "#fff", boxShadow: "2px 2px 10px #000" }}>Download Documents</button>
                        </div>
                        <div className="data-body-right my-2" style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", alignItems: "center" }}>
                            <div className="form-check form-switch">
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: "#20293a" }}>Visa Applied</label>
                                <input className="form-check-input" type="checkbox" role="switch" checked={data.visaApplied} onChange={changeState} style={{ cursor: "pointer" }} />
                            </div>
                            {/* <div className="visaRes">
                                <select value={data.visaGranted === "" ? select : data.visaGranted} onChange={handleSelectOption} style={{padding:"5px 15px", paddingRight:"10px", border:"2px solid #000", borderColor: data.visaGranted === "Visa Expected"? "#87A922" : "#EE4266",borderRadius:"15px", backgroundColor: data.visaGranted === "Visa Expected"? "#87A922" : "#EE4266", color:"#fff", boxShadow:"2px 2px 5px #000"}}>
                                    <option value="">Select Option</option>
                                    <option value="Visa Expected">Visa Expected</option>
                                    <option value="Visa Rejected">Visa Rejected</option>
                                </select>
                            </div> */}
                            <div className="form-check form-switch">
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: "#20293a" }}>Visa Sent</label>
                                <input className="form-check-input" type="checkbox" role="switch" checked={data.visaGranted} onChange={changeVisaSent} style={{ cursor: "pointer" }} />
                            </div>
                            <div className="comment-form">
                                <input type="text" onChange={handleCommentChange} placeholder={data.comment ? data.comment : ""} style={{ width: "550px", border: "1px solid #000", borderRadius: "5px", margin: "0 10px", boxShadow: "2px 2px 10px #000", padding: "2px 5px", color: "#000047" }} />
                                <button onClick={handleSubmit} style={{ padding: "2px 15px", borderRadius: "10px", backgroundColor: "#000047", border: "2px solid #000047", color: "#fff", boxShadow: "2px 2px 10px #000" }}>Save</button>
                            </div>
                            <div className="handledBy">
                                <select value={handle} onChange={handleHandledByChange}>
                                    <option value="">Select Handled By</option>
                                    <option value="GK">GK</option>
                                    <option value="MD">MD</option>
                                    <option value="KM">KM</option>
                                    <option value="KV">KV</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EvisaBox
