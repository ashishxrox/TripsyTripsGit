import React from 'react'

const Download = ({ docs }) => {
    console.log(docs)
    if (!Array.isArray(docs) || !docs) {
        return null; // or return an error message or placeholder
    }
    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Download
                </button>
                <ul className="dropdown-menu">
                   {docs.map((doc,index)=>{
                        return <li key={index}>{doc.name}</li>
                   })}
                </ul>
            </div>
        </div>
    )
}

export default Download
