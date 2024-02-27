import React from 'react'

const Refund = () => {
    return (
        <div className='container py-5 px-5' style={{ backgroundColor: "#fff" }}>
            <h2 style={{fontSize:"45px"}}>Order Cancellation and Refund</h2>
            <h4 style={{fontSize:"22px"}}>We reserve the right to refuse or cancel Your Application at any time for certain reasons
                including but not limited to:</h4>
            <ol style={{textAlign:"justify"}}>
                <li>Downtime and availability of Embassy/third party systems</li>
                <li>Or any other unavoidable for unforeseen circumstances</li>
                <li>If any wrong information provided by the User is wrong or incomplete like wrong
                    travel dates, unclear passport copy or if the User fails to revert to the communication
                    sent by Tripsy Trips within 24 hours of the receipt of the same</li>
                <li>We reserve the right to refuse or cancel Your Application if fraud or an unauthorized
                    or illegal transaction is suspected.</li>
                <li>We have a strict NO REFUND policy. Tripsy Trips will not refund the Visa fees or the
                    Tripsy Trips Service fees for any reason whatsoever. Even if your visa is rejected by the
                    embassy/consulate or the concerned authorities, Tripsy Trips will not be liable to offer
                    you a refund on the fees.</li>
                <li>If You decide to overstay without legitimate approvals at a particular destination, in
                    such circumstances, You shall be liable to bear the penalty charges, disciplinary action,
                    legal proceedings etc. by the Government or other such concerned authorities. Tripsy
                    Trips will not bear any responsibility.</li>
            </ol>
        </div>
    )
}

export default Refund
