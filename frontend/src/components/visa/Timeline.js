import React, { forwardRef } from 'react';
import '../../static/journey.css';

const Timeline = forwardRef(({ steps, subtitle }, ref) => {
    return (
        <div ref = {ref}>
            <div className='mt-5 journey-section' style={{ backgroundColor: "white" }}>
                <div className="container">
                    <h1 className='title pt-5'>Get Your Visa </h1>
                    <p className='' style={{ fontSize: "24px" }}>{subtitle}</p>
                </div>
                <div className='timeline pb-4'>

                    {steps.map((step, index) => (
                        <div key={index} className={`tl-container ${index % 2 === 0 ? 'left-container' : 'right-container'}`}>
                            <div className='outer-circle circle d-flex flex-column justify-content-center'> <div className='inner-circle m-auto circle'></div> </div>
                            <div className='text-box' style={{ backgroundColor: index % 2 !== 0 ? "#000047" : "white", boxShadow: "10px 10px 20px #000", color: index % 2 !== 0 ? "#fff" : "#000047", textShadow: index % 2 !== 0 ? "2px 2px 5px #000" : "none" }}>
                                <h2>{step.title}</h2>
                                {/* <small>2022 - 2024</small> */}
                                <p>{step.description}</p>
                                <span className={index % 2 === 0 ? 'left-arrow' : 'right-arrow'}></span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
})

export default Timeline;
