import React from 'react'

const ReqAccordion = (props) => {
    const {docs} = props
    // console.log(docs)
    const renderDocumentList = () => {
        // Check if docs is not null or undefined
        if (docs && Object.keys(docs).length > 0) {
            // Iterate over the keys of the docs object and render each document
            return (
                <ol>
                    {Object.keys(docs).map((key, index) => (
                        <li key={index}>{docs[key]}</li>
                    ))}
                </ol>
            );
        } else {
            return <p>No documents to Show</p>;
        }
    };
    return (
        <div>
            <div className="accordion" id="accordionExample" style={{border: "2px solid #fff", borderRadius:"5px", boxShadow:"5px 5px 15px #000"}}>
                <div className="accordion-item" style={{border:"2px solid #fff"}}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color:"#000047", fontWeight:"bold"}}>
                            Please have these documents ready to apply for visa
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color:"#000"}}>
                        {renderDocumentList()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReqAccordion
