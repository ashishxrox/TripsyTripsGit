import React from 'react'
import '../../static/TandC.css';

const TandC = ({ closeBtn }) => {
    return (
        <div className="tandc-container">
            <div className="tandc-box">
                <button className="close-btn" onClick={closeBtn}>X</button>
                <h2 style={{width:"95%",backgroundColor:"#000047", padding:"10px 20px", color:"#fff"}}>Terms and Conditions</h2>
                <ul >
                    <li style={{listStyleType:"disc"}}>We are a Visa facilitator only and do not influence any visa delays or immigration issues if
                        occurred.</li>
                    <li style={{listStyleType:"disc"}}>Visa issuance is the sole prerogative of a country's government. if Visa is refused or rejected due
                        to any reason, we will not be responsible for the same</li>
                    <li style={{listStyleType:"disc"}}>Please verify all Visa details, if any change or error on the Visa reported/sent to us after 2 hrs will
                        not be corrected/entertained.</li>
                    <li style={{listStyleType:"disc"}}>Once applied all visa fees are non-refundable, Visa fees and Service charges once paid, cannot
                        be refunded under any circumstances. By completing and submitting this form you agree to the
                        terms and conditions.</li>

                </ul>

            </div>
        </div>
    )
}

export default TandC
