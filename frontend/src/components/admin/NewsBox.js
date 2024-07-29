import React from 'react'

const NewsBox = ({data}) => {
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
    return (
        <div style={{ height: "30%", width: "100%" }}>
            <div className="data-container" style={{ overflow:"hidden",backgroundColor: "#20293a", borderRadius: "15px", boxShadow: "5px 5px 15px #000", color: "#fff", margin: "10px 10px" }}>
                <div className="data-title" style={{display:"flex", justifyContent:"space-between",  padding: "10px 20px", height: "100%",alignItems:"center", flexDirection:"row"}}>
                    <h4>{data.email}</h4>
                    <p>Created at:{convertToIST(data.createdAt)}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsBox
