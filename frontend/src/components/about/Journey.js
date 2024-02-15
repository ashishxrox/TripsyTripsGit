import React from 'react';
import '../../static/journey.css'


const Journey = () => {
  return (
    <>
    <div className='mt-5 journey-section ' style={{backgroundColor:"white"}}>
        <div className="container">
            <h1 className=' title pt-5' style={{color:"#000047"}}>Our Journey</h1>
            <p className='' style={{fontSize:"24px"}}>Our 5 years of journey 2024 ......</p>
        </div>
        <div className='timeline pb-4 '>

            <div className='tl-container left-container'>
                <div className='outer-circle circle d-flex flex-column justify-content-center'> <div className='inner-circle m-auto circle'></div> </div>
                <div className='text-box' style={{boxShadow:"10px 10px 20px #000", color:"#000047"}}>
                    <h2>Journey Title</h2>
                    <small>2022 - 2024</small>
                    <p>About this journey-point Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <span className='left-arrow'></span>
                </div>
            </div>

            <div className='tl-container right-container'>
                <div className='outer-circle circle d-flex flex-column justify-content-center'> <div className='inner-circle m-auto circle'></div> </div>
                <div className='text-box' style={{backgroundColor:"#000047", boxShadow:"10px 10px 20px #000", color:"#fff", textShadow:"2px 2px 5px #000"}}>
                    <h2>Journey Title</h2>
                    <small>2022 - 2024</small>
                    <p>About this journey-point Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <span className='right-arrow'></span>
                </div>
            </div>

            <div className='tl-container left-container'>
                <div className='outer-circle circle d-flex flex-column justify-content-center'> <div className='inner-circle m-auto circle'></div> </div>
                <div className='text-box' style={{boxShadow:"10px 10px 20px #000", color:"#000047"}}>
                    <h2>Journey Title</h2>
                    <small>2022 - 2024</small>
                    <p>About this journey-point Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <span className='left-arrow'></span>
                </div>
            </div>

            <div className='tl-container right-container'>
                <div className='outer-circle circle d-flex flex-column justify-content-center'> <div className='inner-circle m-auto circle'></div> </div>
                <div className='text-box' style={{backgroundColor:"#000047", boxShadow:"10px 10px 20px #000", color:"#fff", textShadow:"2px 2px 5px #000"}}>
                    <h2>Journey Title</h2>
                    <small>2022 - 2024</small>
                    <p>About this journey-point Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <span className='right-arrow'></span>
                </div>
            </div>

        </div> 
    </div>
    </>
  )
}

export default Journey
