import React, { useState, forwardRef } from 'react'
import UserForm from './UserForm';
import '../../static/overview.css'

const OverviewBox = forwardRef((props, ref) => {
  const { type, evisa } = props;
  const [travellerCount, setTravellerCount] = useState(1)

  const handleAdd = () => {
    setTravellerCount(travellerCount + 1)
  }

  const handleSub = () => {
    setTravellerCount(travellerCount - 1)
    console.log(travellerCount)
  }


  return (
    <div className='container px-5' ref={ref}>
      <div className="card myCard" style={{border:"1px solid white", boxShadow:"5px 5px 15px #000"}}>
        <div className="card-header" style={{backgroundColor:"#000047", color:"#fff", textAlign:"center", textShadow:"2px 2px 5px #000"}}>
          <h3>Start Your Visa Journey</h3>
        </div>
        <div className="card-body">

          <div className="overview-text-field" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div className="overview-text-field-left" style={{textAlign:"left"}}>
              <h3>Traveller</h3>
              <h3>Cost</h3>
              <h3>Total</h3>
            </div>
            <div className="overview-right">
              <div className="overview-text-field-right" style={{textAlign:"right", fontSize:"18px"}}>
                <div className="traveller-count" style={{display:"flex", alignItems:"center", justifyContent:"flex-end",fontSize:"25px"}}>
                <ion-icon name="remove-circle-outline" onClick = {handleSub}></ion-icon>
                {travellerCount}
                <ion-icon name="add-circle-outline" onClick = {handleAdd}></ion-icon>
                </div>
                <h3 style={{fontSize:"16px", position:"relative", top:"15px"}}>&#8377;{type.totalCost} x <small> {travellerCount}</small></h3>
                <h3 style={{fontSize:"24px", fontWeight:"700",position:"relative", top:"15px"}}>&#8377;{type.totalCost * travellerCount}</h3>
              </div>
              <small style={{fontSize:"8px"}}>All Taxes Incl.</small>
              </div>
          </div>
          <UserForm type = {type} travellerCount = {travellerCount} eVisa = {evisa} cost={type.totalCost * travellerCount}/>
          
        </div>
      </div>
    </div>
  )
})

export default OverviewBox
