import React from 'react'

import '../../static/flightHotels.css'
// import FilghtForm from '../contactForms/FilghtForm'
// import HotelsForm from '../contactForms/HotelsForm'
// import InsuranceForm from '../contactForms/InsuranceForm'

const FlightHotels = () => {
    return (
        <div className='action-boxes d-flex justify-content-center align-items-center flex-column' style={{ width: "100%", backgroundColor: "#fff" }}>
            <div className="other-ser-title" style={{  width: "100%" }}>
                <h3 style={{ fontFamily: "Clash Display" }}>Other Services</h3>
            </div>
            <div className="row1 d-flex justify-content-around align-items-center " style={{ flexBasis: "75%", width: "90%", height: "100%" }}>
                <div className="col1">
                    <div className="card my-5" style={{ height: "26rem", textAlign: "center", border: "1px solid black" }}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <div className="card-icon my-2 d-flex flex-column justify-content-center align-items-center" style={{ flexBasis: "20%", width: "100px", height: "100%", backgroundColor: "#fff" }}>
                                <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.46558 39.4245H37.3793C38.7953 39.423 40.1528 38.8598 41.154 37.8586C42.1552 36.8574 42.7184 35.4999 42.7199 34.084V30.9887C42.7204 30.6207 42.5885 30.2648 42.3483 29.986C42.108 29.7073 41.7755 29.5243 41.4115 29.4705C40.6114 29.3447 39.8825 28.9374 39.3561 28.3219C38.8298 27.7063 38.5405 26.923 38.5405 26.1131C38.5405 25.3032 38.8298 24.52 39.3561 23.9044C39.8825 23.2889 40.6114 22.8816 41.4115 22.7558C41.7755 22.702 42.108 22.519 42.3483 22.2403C42.5885 21.9615 42.7204 21.6056 42.7199 21.2376V18.1423C42.7184 16.7264 42.1552 15.3689 41.154 14.3677C40.1528 13.3665 38.7953 12.8033 37.3793 12.8018H5.46558C4.04965 12.8033 2.69215 13.3665 1.69094 14.3677C0.68972 15.3689 0.126555 16.7264 0.125002 18.1423V21.2376C0.124471 21.6056 0.25638 21.9615 0.496621 22.2403C0.736862 22.519 1.06939 22.702 1.43344 22.7558C2.23353 22.8816 2.96241 23.2889 3.48878 23.9044C4.01514 24.52 4.30438 25.3032 4.30438 26.1131C4.30438 26.923 4.01514 27.7063 3.48878 28.3219C2.96241 28.9374 2.23353 29.3447 1.43344 29.4705C1.06939 29.5243 0.736862 29.7073 0.496621 29.986C0.256379 30.2648 0.124471 30.6207 0.125002 30.9887V34.084C0.126553 35.4999 0.689717 36.8574 1.69093 37.8586C2.69215 38.8598 4.04965 39.423 5.46558 39.4245ZM1.67301 31.0146C2.84417 30.8375 3.91243 30.2447 4.6825 29.3447C5.45257 28.4447 5.87298 27.2976 5.86688 26.1131C5.87682 24.9327 5.45901 23.7886 4.69072 22.8923C3.92243 21.996 2.8556 21.4082 1.6875 21.2376V18.1423C1.68858 17.1407 2.08697 16.1803 2.79527 15.472C3.50356 14.7637 4.4639 14.3653 5.46558 14.3643H37.3793C38.381 14.3653 39.3414 14.7637 40.0496 15.472C40.7579 16.1803 41.1563 17.1407 41.1574 18.1423L41.1719 21.2116C40.0054 21.3914 38.9415 21.9823 38.1725 22.8776C37.4034 23.7729 36.9797 24.9137 36.978 26.094C36.9762 27.2743 37.3965 28.4163 38.1629 29.3139C38.9293 30.2115 39.9914 30.8055 41.1574 30.9887V34.084C41.1563 35.0856 40.7579 36.046 40.0496 36.7543C39.3413 37.4626 38.381 37.861 37.3793 37.862H5.46558C4.4639 37.861 3.50356 37.4626 2.79527 36.7543C2.08697 36.046 1.68858 35.0856 1.6875 34.084L1.67301 31.0146Z" fill="black" />
                                    <path d="M41.8403 4.66116C41.5048 3.28467 40.637 2.09747 39.4272 1.36002C38.2175 0.62256 36.7646 0.395069 35.3874 0.727453L4.37847 8.26495C3.56021 8.46335 2.80046 8.85243 2.16123 9.40044C1.522 9.94844 1.02142 10.6398 0.700345 11.4182C0.622219 11.6099 0.62338 11.8248 0.703572 12.0157C0.783765 12.2066 0.936434 12.3579 1.12806 12.4363C1.31968 12.5148 1.5346 12.5139 1.72562 12.434C1.91664 12.3541 2.06815 12.2017 2.14688 12.0102C2.37388 11.4602 2.72778 10.9718 3.17967 10.5847C3.63156 10.1976 4.16861 9.92298 4.74694 9.78316L35.7559 2.24571C36.7304 2.01016 37.7586 2.17094 38.6147 2.69276C39.4708 3.21458 40.0849 4.05478 40.3221 5.02891L42.324 13.274C42.358 13.4669 42.4631 13.64 42.6186 13.7591C42.7741 13.8781 42.9686 13.9345 43.1637 13.9171C43.3588 13.8996 43.5402 13.8096 43.672 13.6648C43.8039 13.52 43.8766 13.331 43.8758 13.1351C43.8757 13.0729 43.8683 13.011 43.8537 12.9505L41.8403 4.66116Z" fill="black" />
                                    <path d="M9.88577 30.2128C10.0911 30.3045 10.3186 30.3349 10.5409 30.3004C10.7631 30.2659 10.9706 30.1679 11.1385 30.0183L12.6705 28.6507C12.8131 28.5236 12.9975 28.4532 13.1885 28.4531H16.7095L14.9799 32.0496C14.8573 32.2934 14.794 32.5628 14.7953 32.8358C14.7957 33.1923 14.9036 33.5403 15.1048 33.8346C15.306 34.1288 15.5912 34.3556 15.9232 34.4854C16.2552 34.6151 16.6187 34.6417 16.9661 34.5618C17.3135 34.4819 17.6287 34.2992 17.8707 34.0374L23.0596 28.4531H25.861C26.4253 28.4602 26.9741 28.2685 27.4113 27.9116C27.8484 27.5547 28.1461 27.0554 28.252 26.5011C28.3081 26.1658 28.2905 25.8223 28.2003 25.4945C28.1102 25.1667 27.9497 24.8625 27.73 24.603C27.5104 24.3435 27.2368 24.135 26.9284 23.9919C26.62 23.8489 26.2841 23.7748 25.9442 23.7747H23.0596L17.873 18.1923C17.6367 17.9342 17.3287 17.7524 16.9886 17.6703C16.6484 17.5881 16.2914 17.6093 15.9633 17.7311C15.6223 17.8555 15.3276 18.0814 15.1187 18.3783C14.9099 18.6753 14.797 19.029 14.7953 19.392C14.7936 19.6607 14.8548 19.926 14.9738 20.1668L16.7094 23.7747H13.1885C12.9978 23.7747 12.8137 23.7045 12.6713 23.5775L11.1385 22.2099C10.9707 22.06 10.763 21.9619 10.5406 21.9273C10.3182 21.8928 10.0906 21.9233 9.88514 22.0153C9.67972 22.1072 9.50529 22.2566 9.38288 22.4455C9.26048 22.6344 9.19534 22.8546 9.19531 23.0797V29.1477C9.19549 29.3729 9.26076 29.5933 9.38325 29.7822C9.50575 29.9712 9.68026 30.1207 9.88577 30.2128ZM16.724 32.9758C16.6963 33.0065 16.66 33.028 16.6197 33.0375C16.5795 33.047 16.5374 33.0439 16.4989 33.0288C16.4587 33.0146 16.4237 32.9885 16.3986 32.9541C16.3734 32.9197 16.3592 32.8784 16.3578 32.8358C16.3573 32.8018 16.3657 32.7683 16.3822 32.7385L18.4437 28.4531H20.9268L16.724 32.9758ZM16.3761 19.4779C16.3633 19.4511 16.357 19.4217 16.3578 19.392C16.3596 19.3482 16.3748 19.306 16.4012 19.2711C16.4277 19.2361 16.4641 19.21 16.5058 19.1963C16.5441 19.1829 16.5856 19.1813 16.6248 19.1915C16.6641 19.2018 16.6994 19.2235 16.7263 19.2539L20.9269 23.7747H18.4436L16.3761 19.4779ZM10.7578 23.9643L11.6314 24.7437C12.0599 25.1261 12.6142 25.3374 13.1885 25.3372H25.9441C26.0577 25.3373 26.1699 25.3622 26.2728 25.4103C26.3757 25.4583 26.4668 25.5283 26.5397 25.6154C26.6127 25.7024 26.6657 25.8044 26.695 25.9141C26.7243 26.0238 26.7292 26.1387 26.7093 26.2505C26.6632 26.4385 26.5536 26.6048 26.399 26.7214C26.2445 26.838 26.0544 26.8978 25.861 26.8906H13.1885C12.6139 26.8905 12.0593 27.1019 11.6306 27.4845L10.7578 28.2635V23.9643Z" fill="black" />
                                    <path d="M32.631 17.2199C32.7813 17.2199 32.9282 17.1754 33.0531 17.0919C33.1781 17.0084 33.2755 16.8897 33.333 16.7508C33.3905 16.612 33.4055 16.4592 33.3762 16.3118C33.3469 16.1644 33.2745 16.029 33.1683 15.9228C33.062 15.8165 32.9266 15.7441 32.7792 15.7148C32.6318 15.6855 32.479 15.7005 32.3402 15.758C32.2013 15.8155 32.0827 15.9129 31.9992 16.0379C31.9157 16.1628 31.8711 16.3098 31.8711 16.46C31.8711 16.5598 31.8907 16.6586 31.9289 16.7508C31.9671 16.843 32.0231 16.9268 32.0936 16.9974C32.1642 17.0679 32.248 17.1239 32.3402 17.1621C32.4324 17.2003 32.5312 17.2199 32.631 17.2199Z" fill="black" />
                                    <path d="M32.631 21.9132C32.7813 21.9132 32.9282 21.8687 33.0531 21.7852C33.1781 21.7017 33.2754 21.583 33.333 21.4441C33.3905 21.3053 33.4055 21.1525 33.3762 21.0051C33.3469 20.8577 33.2745 20.7224 33.1682 20.6161C33.0619 20.5098 32.9266 20.4375 32.7792 20.4082C32.6318 20.3788 32.479 20.3939 32.3401 20.4514C32.2013 20.5089 32.0826 20.6063 31.9991 20.7313C31.9157 20.8562 31.8711 21.0031 31.8711 21.1534C31.8711 21.2532 31.8907 21.352 31.9289 21.4442C31.9671 21.5364 32.0231 21.6202 32.0937 21.6907C32.1642 21.7613 32.248 21.8172 32.3402 21.8554C32.4324 21.8936 32.5312 21.9133 32.631 21.9132Z" fill="black" />
                                    <path d="M32.631 26.6057C32.7813 26.6057 32.9282 26.5611 33.0531 26.4776C33.1781 26.3941 33.2755 26.2754 33.333 26.1366C33.3905 25.9977 33.4055 25.8449 33.3762 25.6975C33.3469 25.5501 33.2745 25.4148 33.1683 25.3085C33.062 25.2022 32.9266 25.1299 32.7792 25.1005C32.6318 25.0712 32.479 25.0863 32.3402 25.1438C32.2013 25.2013 32.0826 25.2987 31.9991 25.4237C31.9157 25.5486 31.8711 25.6955 31.8711 25.8458C31.8711 25.9456 31.8907 26.0444 31.9289 26.1366C31.9671 26.2288 32.0231 26.3126 32.0937 26.3831C32.1642 26.4537 32.248 26.5097 32.3402 26.5479C32.4324 26.586 32.5312 26.6057 32.631 26.6057Z" fill="black" />
                                    <path d="M32.631 31.299C32.7813 31.299 32.9282 31.2545 33.0531 31.171C33.1781 31.0875 33.2755 30.9688 33.333 30.8299C33.3905 30.6911 33.4055 30.5383 33.3762 30.3909C33.3469 30.2435 33.2745 30.1081 33.1683 30.0019C33.062 29.8956 32.9266 29.8232 32.7792 29.7939C32.6318 29.7646 32.479 29.7796 32.3402 29.8371C32.2013 29.8946 32.0827 29.992 31.9992 30.117C31.9157 30.2419 31.8711 30.3889 31.8711 30.5391C31.8711 30.6389 31.8907 30.7377 31.9289 30.8299C31.9671 30.9221 32.0231 31.0059 32.0936 31.0765C32.1642 31.147 32.248 31.203 32.3402 31.2412C32.4324 31.2794 32.5312 31.299 32.631 31.299Z" fill="black" />
                                    <path d="M32.631 35.9914C32.7813 35.9914 32.9282 35.9468 33.0531 35.8633C33.1781 35.7798 33.2754 35.6611 33.333 35.5223C33.3905 35.3834 33.4055 35.2307 33.3762 35.0833C33.3469 34.9359 33.2745 34.8005 33.1682 34.6942C33.0619 34.588 32.9266 34.5156 32.7792 34.4863C32.6318 34.457 32.479 34.472 32.3401 34.5295C32.2013 34.587 32.0826 34.6844 31.9991 34.8094C31.9157 34.9343 31.8711 35.0812 31.8711 35.2315C31.8711 35.3313 31.8907 35.4301 31.9289 35.5223C31.9671 35.6145 32.0231 35.6983 32.0937 35.7688C32.1642 35.8394 32.248 35.8954 32.3402 35.9335C32.4324 35.9717 32.5312 35.9914 32.631 35.9914Z" fill="black" />
                                </svg>

                            </div>
                            <div className="card-title my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "10%", width: "100%", height: "100%", backgroundColor: "#fff" }}>
                                <h4 style={{ fontFamily: "Clash Display", fontSize: "24px", fontWeight: "500" }}>Book Flight Tickets</h4>
                            </div>
                            <div style={{ width: "100%", height: "1px", backgroundColor: "#000" }}></div>
                            <div className="card-text my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "35%", width: "100%", height: "100%", backgroundColor: "#fff" }}>
                                <p style={{ textAlign: "left", fontWeight: "500", fontSize: "16px" }}>
                                    Experience seamless travel with our domestic and international flight bookings, offering great deals and unmatched service for your next adventure.
                                </p>
                            </div>
                            <div className="card-btn my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "25%", width: "100%", height: "100%", backgroundColor: "#fff" }}>
                                <div className='d-flex justify-content-center align-items-center' style={{ cursor: "pointer", width: "174px", height: "55px", border: "1px solid rgba(2, 71, 134, 1)", borderRadius: "30px" }}>
                                    <a href="https://wa.me/919374859311" style={{ textDecoration: "none", color: "rgba(2, 71, 134, 1)", fontSize: "16px" }}>Know More</a>
                                </div>
                            </div>
                            {/* <FilghtForm/> */}
                        </div>
                    </div>
                </div>
                <div className="col2">
                    <div className="card my-5" style={{  height: "26rem", textAlign: "center", border: "1px solid black" }}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <div className="card-icon my-2 d-flex flex-column justify-content-center align-items-center" style={{ flexBasis: "20%", width: "100px", height: "100%", backgroundColor: "#fff" }}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.3333 14H26.6667C27.1273 14 27.5 13.6211 27.5 13.1538V9.76923C27.5 9.30195 27.1273 8.92308 26.6667 8.92308H23.3333C22.8731 8.92308 22.5 9.30195 22.5 9.76923V13.1538C22.5 13.6211 22.8731 14 23.3333 14ZM24.1667 10.6154H25.8333V12.3077H24.1667V10.6154ZM16.6667 36.8462H10C9.53979 36.8462 9.16667 37.2246 9.16667 37.6923V41.0769C9.16667 41.5446 9.53979 41.9231 10 41.9231H16.6667C17.1269 41.9231 17.5 41.5446 17.5 41.0769V37.6923C17.5 37.2246 17.1269 36.8462 16.6667 36.8462ZM15.8333 40.2308H10.8333V38.5385H15.8333V40.2308ZM16.6667 30.0769H10C9.53979 30.0769 9.16667 30.4554 9.16667 30.9231V34.3077C9.16667 34.7754 9.53979 35.1538 10 35.1538H16.6667C17.1269 35.1538 17.5 34.7754 17.5 34.3077V30.9231C17.5 30.4554 17.1269 30.0769 16.6667 30.0769ZM15.8333 33.4615H10.8333V31.7692H15.8333V33.4615ZM16.6667 23.3077H10C9.53979 23.3077 9.16667 23.6866 9.16667 24.1538V27.5385C9.16667 28.0062 9.53979 28.3846 10 28.3846H16.6667C17.1269 28.3846 17.5 28.0062 17.5 27.5385V24.1538C17.5 23.6866 17.1269 23.3077 16.6667 23.3077ZM15.8333 26.6923H10.8333V25H15.8333V26.6923ZM30 14H33.3333C33.7939 14 34.1667 13.6211 34.1667 13.1538V9.76923C34.1667 9.30195 33.7939 8.92308 33.3333 8.92308H30C29.5394 8.92308 29.1667 9.30195 29.1667 9.76923V13.1538C29.1667 13.6211 29.5394 14 30 14ZM30.8333 10.6154H32.5V12.3077H30.8333V10.6154ZM23.3333 34.3077H26.6667C27.1273 34.3077 27.5 33.9292 27.5 33.4615V30.0769C27.5 29.6092 27.1273 29.2308 26.6667 29.2308H23.3333C22.8731 29.2308 22.5 29.6092 22.5 30.0769V33.4615C22.5 33.9292 22.8731 34.3077 23.3333 34.3077ZM24.1667 30.9231H25.8333V32.6154H24.1667V30.9231ZM30 34.3077H33.3333C33.7939 34.3077 34.1667 33.9292 34.1667 33.4615V30.0769C34.1667 29.6092 33.7939 29.2308 33.3333 29.2308H30C29.5394 29.2308 29.1667 29.6092 29.1667 30.0769V33.4615C29.1667 33.9292 29.5394 34.3077 30 34.3077ZM30.8333 30.9231H32.5V32.6154H30.8333V30.9231ZM23.3333 20.7692H26.6667C27.1273 20.7692 27.5 20.3904 27.5 19.9231V16.5385C27.5 16.0712 27.1273 15.6923 26.6667 15.6923H23.3333C22.8731 15.6923 22.5 16.0712 22.5 16.5385V19.9231C22.5 20.3904 22.8731 20.7692 23.3333 20.7692ZM24.1667 17.3846H25.8333V19.0769H24.1667V17.3846ZM30 20.7692H33.3333C33.7939 20.7692 34.1667 20.3904 34.1667 19.9231V16.5385C34.1667 16.0712 33.7939 15.6923 33.3333 15.6923H30C29.5394 15.6923 29.1667 16.0712 29.1667 16.5385V19.9231C29.1667 20.3904 29.5394 20.7692 30 20.7692ZM30.8333 17.3846H32.5V19.0769H30.8333V17.3846ZM23.3333 27.5385H26.6667C27.1273 27.5385 27.5 27.16 27.5 26.6923V23.3077C27.5 22.8404 27.1273 22.4615 26.6667 22.4615H23.3333C22.8731 22.4615 22.5 22.8404 22.5 23.3077V26.6923C22.5 27.16 22.8731 27.5385 23.3333 27.5385ZM24.1667 24.1538H25.8333V25.8462H24.1667V24.1538ZM30 27.5385H33.3333C33.7939 27.5385 34.1667 27.16 34.1667 26.6923V23.3077C34.1667 22.8404 33.7939 22.4615 33.3333 22.4615H30C29.5394 22.4615 29.1667 22.8404 29.1667 23.3077V26.6923C29.1667 27.16 29.5394 27.5385 30 27.5385ZM30.8333 24.1538H32.5V25.8462H30.8333V24.1538ZM49.1667 45.3077H44.1667V17.3846C44.1667 14.1186 41.5495 11.4615 38.3333 11.4615H37.5V8.92308C37.5 5.65704 34.8828 3 31.6667 3H20.8333C17.6168 3 15 5.65704 15 8.92308V18.2308H11.6667C8.45011 18.2308 5.83333 20.8878 5.83333 24.1538V45.3077H0.833333C0.373128 45.3077 0 45.6861 0 46.1538C0 46.6215 0.373128 47 0.833333 47H6.66667H15.8333H20H25H31.6667H36.6667H43.3333H49.1667C49.6273 47 50 46.6215 50 46.1538C50 45.6861 49.6273 45.3077 49.1667 45.3077ZM16.6667 8.92308C16.6667 6.59037 18.536 4.69231 20.8333 4.69231H31.6667C33.964 4.69231 35.8333 6.59037 35.8333 8.92308V45.3077H32.5V37.6923C32.5 37.2246 32.1273 36.8462 31.6667 36.8462H25C24.5398 36.8462 24.1667 37.2246 24.1667 37.6923V45.3077H20.8333V19.0769C20.8333 18.6096 20.4602 18.2308 20 18.2308H16.6667V8.92308ZM15.8333 45.3077H7.5V24.1538C7.5 21.8211 9.3693 19.9231 11.6667 19.9231H19.1667V45.3077H15.8333ZM25.8333 45.3077V38.5385H30.8333V45.3077H25.8333ZM37.5 45.3077V13.1538H38.3333C40.6307 13.1538 42.5 15.0519 42.5 17.3846V45.3077H37.5Z" fill="black" />
                                </svg>


                            </div>
                            <div className="card-title my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "10%", width: "100%", height: "100%", backgroundColor: "#fff" }}>
                                <h4 style={{ fontFamily: "Clash Display", fontSize: "24px", fontWeight: "500" }}>Hotel Bookings</h4>
                            </div>
                            <div style={{ width: "100%", height: "1px", backgroundColor: "#000" }}></div>
                            <div className="card-text my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "35%", width: "100%", height: "100%", backgroundColor: "#fff" }}>
                                <p style={{ textAlign: "left", fontWeight: "500", fontSize: "16px" }}>
                                    Our extensive hotel network guarantees the best rates, offering exceptional value whether you choose luxury or budget-friendly accommodation.
                                </p>
                            </div>
                            <div className="card-btn my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "25%", width: "100%", height: "100%", backgroundColor: "#fff" }}>
                                <div className='d-flex justify-content-center align-items-center' style={{ cursor: "pointer", width: "174px", height: "55px", border: "1px solid rgba(2, 71, 134, 1)", borderRadius: "30px" }}>
                                    <a href="https://wa.me/919374859311" style={{ textDecoration: "none", color: "rgba(2, 71, 134, 1)", fontSize: "16px" }}>Know More</a>
                                </div>
                            </div>
                            {/* <HotelsForm/> */}
                        </div>
                    </div>
                </div>
                <div className="col3">
                    <div className="card my-5" style={{  height: "26rem", textAlign: "center", border: "1px solid black" }}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <div className="card-icon my-2 d-flex flex-column justify-content-center align-items-center" style={{ flexBasis: "20%", width: "100px", height: "100%", backgroundColor: "#fff" }}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.9896 38.517C31.1455 38.6704 31.3567 38.7563 31.5765 38.7563C31.7963 38.7563 32.0074 38.6704 32.1633 38.517C32.3193 38.3636 32.4072 38.1552 32.4072 37.9375V19.25C32.4072 19.0323 32.3193 18.8239 32.1633 18.6705L32.0932 18.7418L32.1633 18.6705C32.0074 18.5171 31.7963 18.4312 31.5765 18.4312C31.3567 18.4312 31.1455 18.5171 30.9896 18.6705C30.8336 18.8239 30.7457 19.0323 30.7457 19.25V37.9375C30.7457 38.1552 30.8336 38.3636 30.9896 38.517Z" fill="black" stroke="black" stroke-width="0.2" />
                                    <path d="M40.3459 45.225H40.346C41.3406 45.2238 42.2945 44.8347 42.9984 44.1424C43.7022 43.4501 44.0985 42.5112 44.0997 41.5314V41.5312V20.6875C44.0997 20.4698 44.0118 20.2614 43.8558 20.108C43.6999 19.9546 43.4887 19.8687 43.2689 19.8687C43.0491 19.8687 42.838 19.9546 42.6821 20.108C42.5261 20.2614 42.4382 20.4698 42.4382 20.6875V41.5312C42.4382 42.0761 42.2181 42.5989 41.8259 42.9847C41.4337 43.3705 40.9013 43.5875 40.3459 43.5875H26.4612C26.2414 43.5875 26.0303 43.6734 25.8744 43.8267C25.7184 43.9801 25.6305 44.1886 25.6305 44.4062C25.6305 44.6239 25.7184 44.8324 25.8744 44.9858C26.0303 45.1391 26.2414 45.225 26.4612 45.225H40.3459Z" fill="black" stroke="black" stroke-width="0.2" />
                                    <path d="M19.0543 15.6561V15.6562V17.0938C19.0543 17.3114 19.1422 17.5199 19.2982 17.6733C19.4541 17.8266 19.6653 17.9125 19.8851 17.9125C20.1049 17.9125 20.316 17.8266 20.4719 17.6733C20.6279 17.5199 20.7158 17.3114 20.7158 17.0938V15.6562C20.7158 15.1114 20.9359 14.5886 21.3281 14.2028C21.7203 13.817 22.2527 13.6 22.8081 13.6H40.3466C40.902 13.6 41.4344 13.817 41.8267 14.2028C42.2189 14.5886 42.4389 15.1114 42.4389 15.6562V17.8125C42.4389 18.0302 42.5268 18.2386 42.6828 18.392C42.8387 18.5454 43.0499 18.6312 43.2697 18.6312C43.4895 18.6312 43.7006 18.5454 43.8565 18.392C44.0125 18.2386 44.1005 18.0302 44.1005 17.8125V15.6562V15.6561C44.0993 14.6763 43.703 13.7374 42.9991 13.0451C42.2953 12.3528 41.3414 11.9637 40.3467 11.9625H40.3466L22.8081 11.9625L22.808 11.9625C21.8134 11.9637 20.8595 12.3528 20.1556 13.0451C19.4518 13.7374 19.0555 14.6763 19.0543 15.6561Z" fill="black" stroke="black" stroke-width="0.2" />
                                    <path d="M36.8353 38.517C36.9912 38.6704 37.2024 38.7563 37.4222 38.7563C37.642 38.7563 37.8531 38.6704 38.009 38.517C38.165 38.3636 38.2529 38.1552 38.2529 37.9375V19.25C38.2529 19.0323 38.165 18.8239 38.009 18.6705L37.9389 18.7418L38.009 18.6705C37.8531 18.5171 37.642 18.4312 37.4222 18.4312C37.2024 18.4312 36.9912 18.5171 36.8353 18.6705C36.6793 18.8239 36.5914 19.0323 36.5914 19.25V37.9375C36.5914 38.1552 36.6793 38.3636 36.8353 38.517Z" fill="black" stroke="black" stroke-width="0.2" />
                                    <path d="M25.1439 21.267C25.2998 21.4204 25.511 21.5062 25.7308 21.5062C25.9506 21.5062 26.1617 21.4204 26.3176 21.267C26.4736 21.1136 26.5615 20.9052 26.5615 20.6875V19.25C26.5615 19.0323 26.4736 18.8239 26.3176 18.6705L26.2475 18.7418L26.3176 18.6705C26.1617 18.5171 25.9506 18.4312 25.7308 18.4312C25.511 18.4312 25.2998 18.5171 25.1439 18.6705C24.9879 18.8239 24.9 19.0323 24.9 19.25V20.6875C24.9 20.9052 24.9879 21.1136 25.1439 21.267Z" fill="black" stroke="black" stroke-width="0.2" />
                                    <path d="M24.1111 47.4397C24.5411 47.8627 25.1239 48.1 25.7314 48.1C26.3388 48.1 26.9217 47.8627 27.3517 47.4397C27.7818 47.0167 28.0237 46.4427 28.0237 45.8438V44.4062C28.0237 44.1886 27.9357 43.9801 27.7798 43.8267C27.6238 43.6734 27.4127 43.5875 27.1929 43.5875H24.2698C24.05 43.5875 23.8389 43.6734 23.683 43.8267C23.527 43.9801 23.4391 44.1886 23.4391 44.4062V45.8438C23.4391 46.4427 23.681 47.0167 24.1111 47.4397ZM25.1006 45.8438V45.225H26.3621V45.8438C26.3621 46.0073 26.2961 46.1645 26.178 46.2807C26.0598 46.3969 25.8992 46.4625 25.7314 46.4625C25.5635 46.4625 25.4029 46.3969 25.2848 46.2807C25.1666 46.1645 25.1006 46.0073 25.1006 45.8438Z" fill="black" stroke="black" stroke-width="0.2" />
                                    <path d="M35.8025 47.4397C36.2325 47.8627 36.8153 48.1 37.4228 48.1C38.0302 48.1 38.6131 47.8627 39.0431 47.4397C39.4732 47.0167 39.7151 46.4427 39.7151 45.8438V44.4062C39.7151 44.1886 39.6271 43.9801 39.4712 43.8267C39.3152 43.6734 39.1041 43.5875 38.8843 43.5875H35.9612C35.7414 43.5875 35.5303 43.6734 35.3744 43.8267C35.2184 43.9801 35.1305 44.1886 35.1305 44.4062V45.8438C35.1305 46.4427 35.3724 47.0167 35.8025 47.4397ZM36.792 45.8438V45.225H38.0535V45.8438C38.0535 46.0073 37.9875 46.1645 37.8694 46.2807C37.7512 46.3969 37.5906 46.4625 37.4228 46.4625C37.255 46.4625 37.0943 46.3969 36.9762 46.2807C36.8581 46.1645 36.792 46.0073 36.792 45.8438Z" fill="black" stroke="black" stroke-width="0.2" />
                                    <path d="M26.4612 13.6H36.692C36.9118 13.6 37.1229 13.5141 37.2789 13.3608C37.4348 13.2074 37.5228 12.9989 37.5228 12.7812V2.71875C37.5228 2.50106 37.4348 2.29264 37.2789 2.13922C37.1229 1.98586 36.9118 1.9 36.692 1.9H26.4612C26.2414 1.9 26.0303 1.98586 25.8744 2.13922C25.7184 2.29264 25.6305 2.50106 25.6305 2.71875V12.7812C25.6305 12.9989 25.7184 13.2074 25.8744 13.3608C26.0303 13.5141 26.2414 13.6 26.4612 13.6ZM35.8612 3.5375V11.9625H27.292V3.5375H35.8612Z" fill="black" stroke="black" stroke-width="0.2" />
                                    <path d="M38.8851 11.4438H39.6158C39.8356 11.4438 40.0468 11.3579 40.2027 11.2045C40.3587 11.0511 40.4466 10.8427 40.4466 10.625C40.4466 10.4073 40.3587 10.1989 40.2027 10.0455C40.0468 9.89212 39.8356 9.80625 39.6158 9.80625H38.8851C38.6653 9.80625 38.4541 9.89212 38.2982 10.0455C38.1422 10.1989 38.0543 10.4073 38.0543 10.625C38.0543 10.8427 38.1422 11.0511 38.2982 11.2045C38.4541 11.3579 38.6653 11.4438 38.8851 11.4438Z" fill="black" stroke="black" stroke-width="0.2" />
                                    <path d="M23.5394 11.4438H24.2701C24.4899 11.4438 24.7011 11.3579 24.857 11.2045C25.013 11.0511 25.1009 10.8427 25.1009 10.625C25.1009 10.4073 25.013 10.1989 24.857 10.0455C24.7011 9.89212 24.4899 9.80625 24.2701 9.80625H23.5394C23.3196 9.80625 23.1084 9.89212 22.9525 10.0455C22.7965 10.1989 22.7086 10.4073 22.7086 10.625C22.7086 10.8427 22.7965 11.0511 22.9525 11.2045C23.1084 11.3579 23.3196 11.4438 23.5394 11.4438Z" fill="black" stroke="black" stroke-width="0.2" />
                                    <path d="M7.93341 28.6927L7.98868 28.6093C8.08115 28.6707 8.16024 28.7498 8.22114 28.842C8.28169 28.9337 8.32302 29.0365 8.34261 29.1443C8.90777 31.7487 9.82714 34.7186 11.3205 37.3517C12.8071 39.9727 14.8592 42.2546 17.6919 43.515C21.2444 41.9377 23.5848 38.762 25.1259 35.2282C26.6575 31.7162 27.3944 27.8618 27.748 24.9029C24.2343 24.0081 20.8538 22.6672 17.6919 20.914C14.53 22.666 11.1498 24.0058 7.63661 24.9C7.69179 25.3586 7.75481 25.8317 7.8275 26.3193L7.82784 26.3216L7.82781 26.3216C7.85451 26.5343 7.79552 26.7486 7.66385 26.9187C7.53223 27.0887 7.33854 27.201 7.12442 27.2321C6.91032 27.2632 6.69218 27.2107 6.51656 27.0856C6.34089 26.9604 6.22154 26.7723 6.18462 26.5611L6.18422 26.5589L6.18425 26.5589C6.06927 25.7975 5.97774 25.0629 5.90453 24.368C5.88351 24.1703 5.93615 23.9721 6.05236 23.8101C6.16855 23.648 6.34029 23.5334 6.53544 23.4868L6.53565 23.4868C10.3035 22.5971 13.9201 21.1744 17.2725 19.2632C17.3999 19.1902 17.5446 19.1518 17.6919 19.1518C17.8392 19.1518 17.9839 19.1902 18.1113 19.2632C21.4635 21.1747 25.0802 22.5974 28.8481 23.4868L28.8483 23.4868C29.0434 23.5332 29.2152 23.6476 29.3316 23.8095C29.4479 23.9714 29.5008 24.1696 29.48 24.3672C29.1506 27.5041 28.3965 31.8367 26.6702 35.8169C24.944 39.7967 22.2406 43.4358 18.0067 45.1644L18.0063 45.1646C17.9066 45.2049 17.7999 45.2256 17.6922 45.2258C17.6921 45.2258 17.6921 45.2258 17.692 45.2258L17.6919 45.1258C17.5953 45.126 17.4996 45.1072 17.4106 45.0704M7.93341 28.6927L17.4106 45.0704M7.93341 28.6927L7.98868 28.6093C7.89621 28.548 7.79222 28.5057 7.68292 28.4848C7.57362 28.4639 7.46118 28.4649 7.35227 28.4877C7.24337 28.5105 7.14015 28.5547 7.0488 28.6176C6.95745 28.6806 6.87981 28.761 6.82059 28.8543C6.76136 28.9476 6.72179 29.0518 6.70431 29.1606C6.68692 29.2688 6.69175 29.3793 6.71849 29.4856L7.93341 28.6927ZM17.4106 45.0704L17.3724 45.1628C17.3724 45.1629 17.3725 45.1629 17.3725 45.1629C17.3726 45.1629 17.3726 45.1629 17.3727 45.163L17.4106 45.0704Z" fill="black" stroke="black" stroke-width="0.2" />
                                    <path d="M12.7197 32.7659L12.7197 32.7659L12.721 32.7672L15.644 35.6421C15.7999 35.7955 16.011 35.8814 16.2308 35.8815H16.2308C16.4506 35.8814 16.6617 35.7955 16.8176 35.6422C16.8176 35.6421 16.8176 35.6421 16.8176 35.6421L22.6637 29.8922L22.6637 29.8922L22.665 29.8909C22.8165 29.7366 22.9006 29.5296 22.8987 29.3144C22.8968 29.0992 22.809 28.8937 22.6548 28.742C22.5007 28.5904 22.2925 28.5047 22.0752 28.5028C21.8579 28.501 21.6482 28.5831 21.4914 28.732L21.4914 28.732L21.4902 28.7333L16.2308 33.9061L13.8945 31.6083L13.8945 31.6082L13.8933 31.607C13.7365 31.4581 13.5268 31.376 13.3095 31.3778C13.0922 31.3797 12.884 31.4654 12.7299 31.617C12.5756 31.7687 12.4879 31.9742 12.486 32.1894C12.4841 32.4046 12.5682 32.6116 12.7197 32.7659Z" fill="black" stroke="black" stroke-width="0.2" />
                                </svg>


                            </div>
                            <div className="card-title my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "10%", width: "100%", height: "100%", backgroundColor: "#fff" }}>
                                <h4 style={{ fontFamily: "Clash Display", fontSize: "24px", fontWeight: "500" }}>Travel Insurance</h4>
                            </div>
                            <div style={{ width: "100%", height: "1px", backgroundColor: "#000" }}></div>
                            <div className="card-text my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "35%", width: "100%", height: "100%", backgroundColor: "#fff" }}>
                                <p style={{ textAlign: "left", fontWeight: "500", fontSize: "16px" }}>
                                We offer travel insurance plans through trusted partners, ensuring medical coverage, trip cancellations, and lost baggage.  
                                </p>
                            </div>
                            <div className="card-btn my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "25%", width: "100%", height: "100%", backgroundColor: "#fff" }}>
                                <div className='d-flex justify-content-center align-items-center' style={{ cursor: "pointer", width: "174px", height: "55px", border: "1px solid rgba(2, 71, 134, 1)", borderRadius: "30px" }}>
                                    <a href="https://wa.me/919374859311" style={{ textDecoration: "none", color: "rgba(2, 71, 134, 1)", fontSize: "16px" }}>Know More</a>
                                </div>
                            </div>
                            {/* <InsuranceForm/> */}
                        </div>
                    </div></div>
            </div>

        </div>
    )
}

export default FlightHotels
