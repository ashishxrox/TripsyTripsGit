import React, { useRef, useContext, useState, forwardRef } from 'react'
import { useLocation } from 'react-router-dom';

import FormDataContext from '../../context/FormData/FormDataContext'
import '../../static/visaType.css'
import VisaBanner from './VisaBanner'
import Faq from '../Faq/Faq'

import overBg1 from '../../static/assets/about1.jpeg'
import UserForm from './UserForm'
import FaqContext from '../../context/FaqCont/FaqContext';


const VisaType = () => {

  const location = useLocation()
  const country = location.state; 
  const { evisa, appType, isSubmitted } = useContext(FormDataContext)
  const {genFaq} = useContext(FaqContext)


  const renderDocumentList = () => {
    // Check if docs is not null or undefined
    if (appType.docsReq && Object.keys(appType.docsReq).length > 0) {
      // Iterate over the keys of the docs object and render each document
      return (
        <ol style={{ fontSize: "18px", fontWeight: "500" }}>
          {Object.keys(appType.docsReq).map((key, index) => (
            <li key={index}>{appType.docsReq[key]}</li>
          ))}
        </ol>
      );
    } else {
      return <p>No documents to Show</p>;
    }
  };

  const subtitle = "By Following these 3 Simple Steps"
  const steps = [
    { title: "Step 1", description: "Click on Apply Now to upload required documents and submit" },
    { title: "Step 2", description: "Complete payment" },
    { title: "Step 3", description: "Wait to recieve an e-mail from Tripsy Trips" },
  ]

  const overviewRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const [travellerCount, setTravellerCount] = useState(1)

  const handleAdd = () => {
    setTravellerCount(travellerCount + 1)
  }

  const handleSub = () => {
    setTravellerCount(travellerCount - 1)
    console.log(travellerCount)
  }

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <VisaBanner />


      {/* {<div style={{ backgroundColor: "#fff" }}>
        <div className="container docs-req-div">
        <h4 style={{padding:"10px 5px", fontSize:"38px", textAlign:"center", fontWeight:"bold"}}>{appType.name} </h4>
        <ReqAccordion docs = {appType.docsReq}/>
      </div>
        {(evisa === 'no' || appType.name === 'Turkey Tourist Visa') && (
          <div style={{ textAlign: "center", margin: "50px 0", display: "flex", justifyContent: "center", backgroundColor: "#000047" }}>
            <div style={{ backgroundColor: "#fff", padding: "20px", color: "#000047", border: "1px solid #000047", borderRadius: "30%", fontWeight: "bold", boxShadow: "5px 5px 15px #000", textShadow: "1px 1px 20px rgba(0,0,71,0.5)" }}>
              <h4>Want to begin your</h4>
              <h3 ><b>{appType.name} Application ?</b></h3>
            </div>
          </div>
        )}
        {(evisa === 'yes' && appType.name !== 'Turkey Tourist Visa') && (<div className="overview-box-div" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "100px" }}>
          <OverviewBox type={appType} ref={overviewRef} evisa={evisa} />
        </div>
        )}
        {(evisa === 'no' || appType.name === 'Turkey Tourist Visa') && (
          <div className="" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "75px", fontWeight: "500", color: "#000047", position: "relative", top: "-55px" }}>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        )}
        {(evisa === 'no' || appType.name === 'Turkey Tourist Visa') && (
          <div className='non-evisa-div' style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "20px 0" }}>
            <NonEvisaForm type={appType} evisa={evisa} />
          </div>
        )}

        {(evisa === 'no' || appType.name === 'Turkey Tourist Visa') && (
          <div className="overview-box-div" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#E8C81C" }}>
            <Contact ref={contactRef} />
          </div>
        )}
        {(evisa === 'yes' && appType.name !== 'Turkey Tourist Visa') && <div className="container">
          <Timeline steps={steps} subtitle={subtitle} />
        </div>}
        {(evisa === 'yes' && appType.name !== 'Turkey Tourist Visa') && <div style={{ textAlign: 'center', margin: "20px 0", width: "100%" }}>
          <button onClick={() => {
            if (evisa === 'yes') {
              scrollToComponent(overviewRef);
            } else if (evisa === 'no') {
              scrollToComponent(contactRef);
            }
          }} style={{ width: "80%", padding: "5px", border: "1px solid #ffb800", backgroundColor: "#ffb800", borderRadius: "15px", boxShadow: "5px 5px 10px #000", color: "#000", fontWeight: "bold" }}>{evisa === 'yes' ? 'Apply Now' : 'Get in Touch'}</button>
        </div>}

      </div>} */}
      
      <div className="v-final-top my-5 d-flex justify-content-between align-items-center " style={{}}>
        <div className="vft-left mx-1 d-flex justify-content-between align-items-center flex-column" style={{ flexBasis: "60%", height: "90%", width: "95%", backgroundColor: "#fff" }}>
          <div className="vftl-txt my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "25%", height: "100%", width: "100%" }}>
            <h2 style={{ fontFamily: "Clash Display", fontWeight: "500"}}>{appType.name}</h2>
          </div>
          <div className="vftl-content my-1 d-flex justify-content-start align-items-start flex-column" style={{ flexBasis: "75%", height: "100%", width: "100%" }}>
            <h4 className='my-3' style={{ fontFamily: "Clash Display", fontWeight: "500"}}>Please keep these documents ready to apply for visa</h4>
            {renderDocumentList()}
          </div>
        </div>
        <div className="vft-right mx-1" style={{ flexBasis: "40%", height: "80%", width: "95%", backgroundImage: `url(${overBg1})`, borderRadius: "5px", backgroundSize: "cover", overflow: "hidden" }}>
          {/* <OverviewBox type={appType} ref={overviewRef} evisa={evisa} onPassProps={handlePassProps} /> */}
          <div className='container  d-flex justify-content-center align-items-center' ref={overviewRef} style={{ height: "100%", width: "100%", background: "rgba(1, 98, 109, 0.8)" }}>
            <div className=" myCard d-flex justify-content-around align-items-center flex-column py-5" style={{ height: "100%", width: "100%" }}>
              <div className="card-header d-flex justify-content-center align-items-center" style={{ color: "#fff", textAlign: "center" }}>
                <h3 style={{ fontFamily: "Clash Display", fontWeight: "500", fontSize: "24px" }}>Traveller Costing</h3>
              </div>
              <div className="card-body d-flex" style={{ width: "90%" }}>

                <div className="overview-text-field d-flex justify-content-around align-items-center flex-column" style={{ width: "100%" }} >
                  <div className='d-flex justify-content-between align-items-center felex-row' style={{ width: "100%" }}>
                    <div className="overview-text-field-left" style={{ textAlign: "left" }}>
                      <div className="traveller-count" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "24px", fontWeight: "500", color: "#fff" }}>
                        <svg onClick={handleSub} style={{}} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C16 3 18.6442 3 21.0605 4.02201C21.0605 4.02201 23.3936 5.00884 25.1924 6.80761C25.1924 6.80761 26.9912 8.60638 27.978 10.9395C27.978 10.9395 29 13.3558 29 16C29 16 29 18.6442 27.978 21.0605C27.978 21.0605 26.9912 23.3936 25.1924 25.1924C25.1924 25.1924 23.3936 26.9912 21.0605 27.978C21.0605 27.978 18.6442 29 16 29C16 29 13.3558 29 10.9395 27.978C10.9395 27.978 8.60638 26.9912 6.80761 25.1924C6.80761 25.1924 5.00884 23.3936 4.02202 21.0605C4.02202 21.0605 3 18.6442 3 16C3 16 3 13.3558 4.02202 10.9395C4.02202 10.9395 5.00885 8.60638 6.80761 6.80761C6.80761 6.80761 8.60638 5.00884 10.9395 4.02201C10.9395 4.02201 13.3558 3 16 3ZM16 5C16 5 13.7614 5 11.7186 5.86402C11.7186 5.86402 9.74476 6.69889 8.22183 8.22182C8.22183 8.22182 6.6989 9.74476 5.86402 11.7186C5.86402 11.7186 5 13.7614 5 16C5 16 5 18.2386 5.86402 20.2814C5.86402 20.2814 6.69889 22.2552 8.22183 23.7782C8.22183 23.7782 9.74476 25.3011 11.7186 26.136C11.7186 26.136 13.7614 27 16 27C16 27 18.2386 27 20.2814 26.136C20.2814 26.136 22.2552 25.3011 23.7782 23.7782C23.7782 23.7782 25.3011 22.2552 26.136 20.2814C26.136 20.2814 27 18.2386 27 16C27 16 27 13.7614 26.136 11.7186C26.136 11.7186 25.3011 9.74476 23.7782 8.22183C23.7782 8.22183 22.2552 6.69889 20.2814 5.86402C20.2814 5.86402 18.2386 5 16 5Z" fill="white" />
                          <path d="M11 17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H11C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17Z" fill="white" />
                        </svg>

                          <p style={{position:"relative", top:"7px", left:"7px"}}>{travellerCount}</p>
                        <ion-icon name="add-circle-outline" onClick={handleAdd} style={{ height: "32px", width: "32px", paddingLeft: "20px" }}></ion-icon>
                      </div>
                    </div>
                    <div className="overview-right">
                      <div className="overview-text-field-right" style={{ textAlign: "right", fontSize: "18px" }}>

                        <h3 style={{ color: "#fff", fontSize: "20px", position: "relative", top: "15px", fontWeight: "500" }}>&#8377;{appType.totalCost} x <small style={{ fontSize: "12px" }}> {travellerCount}</small></h3>
                        {/* <h3 style={{ fontSize: "24px", fontWeight: "700", position: "relative", top: "15px" }}>&#8377;{type.totalCost * travellerCount}</h3> */}
                      </div>
                      {/* <small style={{ fontSize: "8px" }}>All Taxes Incl.</small> */}
                    </div>
                  </div>
                  <div style={{ height: "2px", width: "100%", backgroundColor: "#fff" }}></div>
                  <div className='d-flex justify-content-between align-items-center flex-row' style={{ width: "100%" }}>
                    <div className="overview-text-field-left" style={{ textAlign: "left" }}>
                      {/* <div className="traveller-count" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "24px", fontWeight: "500" }}>
                  <ion-icon name="remove-circle-outline" onClick={handleSub} style={{ height: "32px", width: "32px" }}></ion-icon>
                  {travellerCount}
                  <ion-icon name="add-circle-outline" onClick={handleAdd} style={{ height: "32px", width: "32px" }}></ion-icon>
                </div> */}
                      <h3 style={{ fontFamily: "Clash Display", fontWeight: "500", fontSize: "24px", color: "#fff" }}>Total Cost</h3>

                    </div>
                    <div className="overview-right">
                      <div className="overview-text-field-right" style={{ textAlign: "right", fontSize: "18px" }}>
                        <h3 style={{ fontFamily: "Clash Display", fontWeight: "500", color: "#fff", fontSize: "24px", position: "relative", top: "15px" }}>&#8377; {appType.totalCost * travellerCount}</h3>
                      </div>
                      <small style={{ fontSize: "14px", color: "#fff", fontWeight: "400", letterSpacing: "1px" }}>All Taxes Incl.</small>
                    </div>
                  </div>


                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="v-form" style={{border:"1px solid #fff"}}>
        {appType && <UserForm type={appType} travellerCount={travellerCount} eVisa={evisa} cost={appType.totalCost * travellerCount}/>}
      </div>
      <Faq content={genFaq} />
    </div>
  )
}

export default VisaType
