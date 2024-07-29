import React from 'react'
import '../../static/scrollBtn.css'

const PkgScrollDownBtn = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100%", width: "100%" }}>
            {/* <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="56" cy="56" r="53.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6" />
                                    <path d="M55.2929 77.7071C55.6834 78.0976 56.3166 78.0976 56.7071 77.7071L63.0711 71.3431C63.4616 70.9526 63.4616 70.3195 63.0711 69.9289C62.6805 69.5384 62.0474 69.5384 61.6569 69.9289L56 75.5858L50.3431 69.9289C49.9526 69.5384 49.3195 69.5384 48.9289 69.9289C48.5384 70.3195 48.5384 70.9526 48.9289 71.3431L55.2929 77.7071ZM55 34L55 77L57 77L57 34L55 34Z" fill="white" />
                                </svg> */}
            <div className="scrll-btn-outer" style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "50%", border: "2px dashed #fff" }}>

            </div>
            <div className="scroll-arrow" style={{position:"relative"}}>
                <svg width="16" height="44" viewBox="0 0 16 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 43.7071C7.68342 44.0976 8.31658 44.0976 8.7071 43.7071L15.0711 37.3431C15.4616 36.9526 15.4616 36.3195 15.0711 35.9289C14.6805 35.5384 14.0474 35.5384 13.6569 35.9289L8 41.5858L2.34314 35.9289C1.95262 35.5384 1.31946 35.5384 0.928931 35.9289C0.538406 36.3195 0.538406 36.9526 0.928931 37.3431L7.29289 43.7071ZM7 -4.37114e-08L7 43L9 43L9 4.37114e-08L7 -4.37114e-08Z" fill="white" />
                </svg>
                <p>SCROLL <br /> DOWN </p>
            </div>

        </div>
    )
}

export default PkgScrollDownBtn
