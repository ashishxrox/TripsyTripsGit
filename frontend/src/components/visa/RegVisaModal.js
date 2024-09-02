import React from 'react'
import '../../static/regVisa.css'

const RegVisaModal = ({country}) => {
    return (
        <div className=' d-flex justify-content-center align-items-center ' style={{ cursor: "pointer" }}>

            <button type="button" className="btn regVisa-final-btn" data-bs-toggle="modal" data-bs-target="#regVisaModal" style={{ fontWeight: "700", fontSize: "18px", borderRadius: "30px", width: "250px", color: "#fff", fontFamily: "General Sans", fontWeight: "500", fontSize: "16px" }}>
                Contact Us
            </button>

            <div className="modal fade" id="regVisaModal" tabIndex="-1" aria-labelledby="regVisaModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="regVisaModalLabel">Get in Touch
                                <svg style={{marginLeft:"20px"}} width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="20" fill="#242A3A" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0419 29.8281H20.0378C18.3711 29.8276 16.7335 29.4114 15.279 28.6218L10 30L11.4127 24.8645C10.5413 23.3615 10.0827 21.6566 10.0835 19.9099C10.0857 14.4456 14.5529 10 20.0418 10C22.7057 10.0011 25.206 11.0332 27.0861 12.9065C28.9662 14.7797 30.0011 17.2697 30 19.9177C29.9978 25.3807 25.5323 29.8259 20.0419 29.8281ZM15.5224 26.8296L15.8247 27.0081C17.0954 27.7586 18.5521 28.1557 20.0374 28.1563H20.0407C24.6027 28.1563 28.3156 24.461 28.3175 19.919C28.3183 17.718 27.4582 15.6485 25.8955 14.0914C24.3329 12.5344 22.2547 11.6765 20.044 11.6758C15.4785 11.6758 11.7655 15.3707 11.7637 19.9123C11.763 21.4688 12.2006 22.9846 13.0291 24.2961L13.2259 24.6077L12.3898 27.6474L15.5224 26.8296ZM24.7166 22.0571C24.8901 22.1406 25.0073 22.197 25.0574 22.2801C25.1195 22.3833 25.1195 22.8792 24.9123 23.4577C24.7049 24.0361 23.7108 24.564 23.2327 24.6351C22.8041 24.6989 22.2616 24.7255 21.6655 24.537C21.3041 24.4229 20.8407 24.2705 20.2471 24.0153C17.9144 23.0129 16.338 20.7629 16.0401 20.3377C16.0192 20.3079 16.0046 20.287 15.9965 20.2762L15.9945 20.2736C15.8628 20.0987 14.9805 18.9271 14.9805 17.7146C14.9805 16.5739 15.5435 15.9761 15.8026 15.7009C15.8204 15.682 15.8367 15.6647 15.8513 15.6488C16.0794 15.4008 16.349 15.3389 16.5148 15.3389C16.6807 15.3389 16.8468 15.3404 16.9917 15.3476C17.0096 15.3485 17.0282 15.3484 17.0475 15.3483C17.1925 15.3475 17.3732 15.3464 17.5516 15.7727C17.6202 15.9368 17.7206 16.18 17.8264 16.4365C18.0405 16.9553 18.2771 17.5285 18.3187 17.6114C18.3809 17.7354 18.4224 17.8799 18.3395 18.0453C18.327 18.07 18.3155 18.0934 18.3045 18.1158C18.2422 18.2424 18.1964 18.3355 18.0907 18.4583C18.0491 18.5066 18.0061 18.5587 17.9631 18.6108C17.8775 18.7145 17.792 18.8183 17.7174 18.8922C17.5929 19.0157 17.4632 19.1496 17.6083 19.3975C17.7535 19.6455 18.2528 20.4563 18.9925 21.113C19.7877 21.8188 20.4788 22.1172 20.8291 22.2684C20.8975 22.2979 20.9529 22.3218 20.9935 22.3421C21.2423 22.4661 21.3874 22.4453 21.5326 22.2801C21.6777 22.1148 22.1546 21.557 22.3204 21.3091C22.4863 21.0613 22.6522 21.1026 22.8802 21.1852C23.1084 21.2679 24.3317 21.8669 24.5805 21.9908C24.6291 22.015 24.6745 22.0369 24.7166 22.0571Z" fill="white" />
                                </svg></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {country === "Australia" && <p style={{padding:"5px 25px", textAlign:"center"}}>Although an e-Visa, this application process is LOOOONNNGGG</p>}
                            {country === "Australia" &&<p style={{padding:"5px 25px", textAlign:"center"}}>We recommend contacting us directly while applying.</p>}
                            <ul className='d-flex justify-content-around align-items-center flex-row' style={{ listStyleType: "none" }}>
                                <div>

                                    <li className='my-3' style={{ backgroundColor: "#25D366", padding: "10px 25px", borderRadius: "5px", color: "#fff", boxShadow: "0px 2px 5px #000" }}>
                                        <a href="https://wa.me/918181816662" style={{ color: '#fff', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">8181816662</a>
                                    </li>
                                    <li className='my-3' style={{ backgroundColor: "#25D366", padding: "10px 25px", borderRadius: "5px", color: "#fff", boxShadow: "0px 2px 5px #000" }}>
                                        <a href="https://wa.me/918888877729" style={{ color: '#fff', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">8888877729</a>
                                    </li>
                                </div>
                                <div>
                                    <li className='my-3' style={{ backgroundColor: "#25D366", padding: "10px 25px", borderRadius: "5px", color: "#fff", boxShadow: "0px 2px 5px #000" }}>
                                        <a href="https://wa.me/918805960110" style={{ color: '#fff', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">8805960110</a>
                                    </li>
                                    <li className='my-3' style={{ backgroundColor: "#25D366", padding: "10px 25px", borderRadius: "5px", color: "#fff", boxShadow: "0px 2px 5px #000" }}>
                                        <a href="https://wa.me/918828066947" style={{ color: '#fff', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">8828066947</a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegVisaModal
