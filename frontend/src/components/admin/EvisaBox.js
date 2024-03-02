import React, { useState } from 'react'
// import Download from './Download';
import axios from 'axios'

const apiURL = 'https://www.api.tripsytrips.com'

const EvisaBox = ({ data, docs }) => {



    const filteredDocs = docs.filter(doc => {
        return data.documentUniqueStrs.includes(doc.uniqueStr);
    });

    const handleDownload = async () => {
        try {
            // Send a POST request to the server to create a zip file
            const response = await axios.post(`${apiURL}/api/fetchFormData/download`, filteredDocs, {
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
            const query = await axios.get(`${apiURL}/api/update/${data.uniqueStr}`);
            alert("Visa Applied")
        } catch (error) {
            console.log(error)
        }
    }



    // console.log(filteredDocs)


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
                        
                        <div className="data-body-right" style={{ color: "#20293a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p style={{ color: data.paymentStatus === "Pending" ? "red" : "green" }}>Payment Status: {data.paymentStatus}</p>
                            <button type="button" className="btn" onClick={handleDownload} style={{ backgroundColor: "#000047", color: "#fff", boxShadow: "2px 2px 10px #000" }}>Download Documents</button>
                        </div>
                        <div className="data-body-right">
                            <div className="form-check form-switch">
                                <label className="form-check-label" for="flexSwitchCheckDefault" style={{color:"#20293a"}}>Visa Applied</label>
                                <input className="form-check-input" type="checkbox" role="switch" checked={data.visaApplied} onChange={changeState} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EvisaBox
