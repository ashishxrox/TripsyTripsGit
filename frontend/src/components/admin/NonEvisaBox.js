import React, { useState, useEffect } from 'react'

import axios from 'axios'

const apiURL = 'https://www.api.tripsytrips.com'

const localHost = 'http://localhost:4321'

const NonEvisaBox = ({ data }) => {

    const [comment, setComment] = useState(data.comment)
    const [handle, setHandle] = useState(data.handle)
    const [handleChanged, setHandleChanged] = useState(false);

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

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = async () => {

        try {
            const query = await axios.get(`${apiURL}/api/update/nonevisacomment/${data.uniqueStr}/${comment}`)
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
            const query = await axios.get(`${apiURL}/api/update/nonevisahandledBy/${data.uniqueStr}/${handle}`)
            alert(`Client handled by ${handle}`);
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div style={{ height: "30%", width: "100%" }}>
            <div className="data-container" style={{ overflow:"hidden",backgroundColor: "#20293a", borderRadius: "15px", boxShadow: "5px 5px 15px #000", color: "#fff", margin: "10px 10px" }}>
                <div className="data-title" style={{display:"flex", justifyContent:"space-between",  padding: "10px 20px", height: "100%",alignItems:"center", flexDirection:"row"}}>
                    <h4>{data.name}</h4>
                    <h5>{data.visaName}</h5>
                    <p>Created at:{convertToIST(data.createdAt)}</p>
                </div>
                <div className="data-body" style={{backgroundColor:"#fff", width:"100%", height:"100%", overflow:"hidden", padding:"10px 30px"}}>
                    <div className="data-body-top">
                        <div className="data-body-left" style={{display:"flex", justifyContent:"space-between", color:"#20293a"}}>
                            <p>E-mail ID: <a href={`mailto:${data.email}`} style={{color:"#20293a", textDecoration:"none", cursor:"pointer"}}>{data.email}</a></p>
                            <p>Contact : {data.contact}</p>
                        </div>
                        <div className="data-body-right" style={{color:"#20293a", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <p>Departure Date: {data.departDates}</p>
                            <p>Return Date: {data.returnDates}</p>
                        </div>
                    </div>
                    <div className="data-body-bottom">
                    <div className="data-body-left"></div>
                        <div className="data-body-right"></div>
                    </div>
                </div>
                <div className="data-body" style={{ backgroundColor: "#fff", width: "100%", height: "100%", overflow: "hidden", padding: "10px 30px" }}>
                    <div className="data-body-top" style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
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
    )
}

export default NonEvisaBox
