import React, { useState, forwardRef } from 'react'
import UserForm from './UserForm';

import '../../static/overview.css'

const OverviewBox = forwardRef((props, ref) => {
  const { type, evisa, onPassProps } = props;
  const [travellerCount, setTravellerCount] = useState(1)

  const handleAdd = () => {
    setTravellerCount(travellerCount + 1)
  }

  const handleSub = () => {
    setTravellerCount(travellerCount - 1)
    console.log(travellerCount)
  }

  onPassProps({
    type,
    travellerCount,
    eVisa: evisa,
    cost: type.totalCost * travellerCount
  });


  return (
    <div className='container  d-flex justify-content-center align-items-center' ref={ref} style={{ height: "100%", width: "100%", background: "rgba(1, 98, 109, 0.8)" }}>
      <div className=" myCard d-flex justify-content-around align-items-center flex-column py-5" style={{ height: "100%", width: "100%" }}>
        <div className="card-header d-flex justify-content-center align-items-center" style={{ color: "#fff", textAlign: "center" }}>
          <h3 style={{ fontFamily: "Clash Display", fontWeight: "500", fontSize: "24px" }}>Traveller Costing</h3>
        </div>
        <div className="card-body d-flex" style={{ width: "90%" }}>

          <div className="overview-text-field d-flex justify-content-around align-items-center flex-column"style={{width:"100%"}} >
            <div className='d-flex justify-content-between align-items-center felex-row' style={{width:"100%"}}>
              <div className="overview-text-field-left" style={{ textAlign: "left" }}>
                <div className="traveller-count " style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "24px", fontWeight: "500", color:"#fff" }}>
                  <ion-icon name="remove-circle-outline px-2" onClick={handleSub} style={{ height: "32px", width: "32px", paddingRight:"20px" }}></ion-icon>
                  {travellerCount}
                  <ion-icon name="add-circle-outline" onClick={handleAdd} style={{ height: "32px", width: "32px", paddingLeft:"20px" }}></ion-icon>
                </div>
              </div>
              <div className="overview-right">
                <div className="overview-text-field-right" style={{ textAlign: "right", fontSize: "18px" }}>

                  <h3 style={{color:"#fff", fontSize: "20px", position: "relative", top: "15px", fontWeight: "500" }}>&#8377;{type.totalCost} x <small style={{fontSize:"12px"}}> {travellerCount}</small></h3>
                  {/* <h3 style={{ fontSize: "24px", fontWeight: "700", position: "relative", top: "15px" }}>&#8377;{type.totalCost * travellerCount}</h3> */}
                </div>
                {/* <small style={{ fontSize: "8px" }}>All Taxes Incl.</small> */}
              </div>
            </div>
            <div style={{height:"2px", width:"100%", backgroundColor:"#fff"}}></div>
            <div className='d-flex justify-content-between align-items-center flex-row' style={{width:"100%"}}>
              <div className="overview-text-field-left" style={{ textAlign: "left" }}>
                {/* <div className="traveller-count" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "24px", fontWeight: "500" }}>
                  <ion-icon name="remove-circle-outline" onClick={handleSub} style={{ height: "32px", width: "32px" }}></ion-icon>
                  {travellerCount}
                  <ion-icon name="add-circle-outline" onClick={handleAdd} style={{ height: "32px", width: "32px" }}></ion-icon>
                </div> */}
                <h3 style={{fontFamily:"Clash Display", fontWeight:"500", fontSize:"24px", color:"#fff"}}>Total Cost</h3>
                
              </div>
              <div className="overview-right">
                <div className="overview-text-field-right" style={{ textAlign: "right", fontSize: "18px" }}>
                  <h3 style={{fontFamily:"Clash Display",fontWeight:"500",color:"#fff", fontSize: "24px", position: "relative", top: "15px" }}>&#8377; {type.totalCost * travellerCount}</h3>
                </div>
                <small style={{ fontSize: "14px",color:"#fff", fontWeight:"400", letterSpacing:"1px" }}>All Taxes Incl.</small>
              </div>
            </div>


          </div>
          {/* <UserForm type={type} travellerCount={travellerCount} eVisa={evisa} cost={type.totalCost * travellerCount} /> */}

        </div>
      </div>
    </div>
  )
})

export default OverviewBox
