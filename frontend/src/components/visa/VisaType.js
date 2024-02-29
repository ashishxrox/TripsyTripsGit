import React, {useRef, useContext} from 'react'
import OverviewBox from './OverviewBox'
import ReqAccordion from './ReqAccordion'
import Timeline from './Timeline'

import FormDataContext from '../../context/FormData/FormDataContext'
import '../../static/visaType.css'
import Contact from './Contact'
import NonEvisaForm from './NonEvisaForm'


const VisaType = () => {

  // const location = useLocation()
  // console.log(location)
  const { evisa, appType, isSubmitted} = useContext(FormDataContext)

  
  const subtitle = "By Following these 3 Simple Steps"
  const steps = [
    {title: "Step 1", description:"Click on Apply Now to upload required documents and submit"},
    {title: "Step 2", description:"Complete payment"},
    {title: "Step 3", description:"Wait to recieve an e-mail from Tripsy Trips"},
  ]
  
  const overviewRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // console.log(evisa)
  return (
    <>
    {<div style={{backgroundColor:"#fff"}}>
      {/* This is Visa type {type.name} */}
      <div className="container docs-req-div">
        <h4 style={{padding:"10px 5px", fontSize:"38px", textAlign:"center", fontWeight:"bold"}}>{appType.name} </h4>
        <ReqAccordion docs = {appType.docsReq}/>
      </div>
      {(evisa === 'no' || appType.name === 'Turkey Tourist Visa') && (
        <div style={{textAlign:"center", margin:"50px 0", display:"flex", justifyContent:"center" ,backgroundColor:"#000047"}}>
          <div style={{backgroundColor:"#fff", padding:"20px", color:"#000047", border:"1px solid #000047", borderRadius:"30%", fontWeight:"bold", boxShadow:"5px 5px 15px #000", textShadow:"1px 1px 20px rgba(0,0,71,0.5)"}}>
            <h4>Want to begin your</h4>
            <h3 ><b>{appType.name} Application ?</b></h3>
            </div>
        </div>
      )}
      {(evisa === 'yes' && appType.name !== 'Turkey Tourist Visa')  && (<div className="overview-box-div" style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"100px"}}>
      <OverviewBox type = {appType} ref={overviewRef} evisa={evisa}/>
      </div>
      )}
      {(evisa === 'no' || appType.name === 'Turkey Tourist Visa') && (   
        <div className="" style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"75px", fontWeight:"500", color:"#000047", position:"relative", top:"-55px"}}>
        <i class="fa-solid fa-arrow-down"></i>
        </div>
      )}
      {(evisa === 'no' || appType.name === 'Turkey Tourist Visa') &&(
        <div className='non-evisa-div' style={{width:"100%", display:"flex", justifyContent:"center",alignItems:"center", margin:"20px 0"}}>
          <NonEvisaForm type = {appType} evisa = {evisa}/>
        </div> 
      )}
      
      {(evisa === 'no' || appType.name === 'Turkey Tourist Visa') && (   
        <div className="overview-box-div" style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#E8C81C"}}>
        <Contact ref={contactRef}/>
        </div>
      )}
      {(evisa === 'yes' && appType.name !== 'Turkey Tourist Visa') && <div className="container">
        <Timeline steps = {steps} subtitle = {subtitle}/>
      </div>}
      {(evisa === 'yes' && appType.name !== 'Turkey Tourist Visa') && <div style={{ textAlign: 'center',margin:"20px 0", width:"100%"}}>
        <button onClick={() => {
          if (evisa === 'yes') {
            scrollToComponent(overviewRef);
          } else if (evisa === 'no') {
            scrollToComponent(contactRef);
          }
        }} style={{width:"80%", padding:"5px", border:"1px solid #ffb800", backgroundColor:"#ffb800", borderRadius:"15px", boxShadow:"5px 5px 10px #000", color:"#000",fontWeight:"bold"}}>{evisa === 'yes' ? 'Apply Now' : 'Get in Touch'}</button>
      </div>}
      
    </div>}
    </>
  )
}

export default VisaType
