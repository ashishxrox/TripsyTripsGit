import React, { useState } from 'react'
import SideBar from './SideBar'
import EvisaDashboard from './EvisaDashboard';
import NonEvisaDashboard from './NonEvisaDashboard';
import PackageDash from './PackageDash';
import FlightDash from './FlightDash';
import HotelDash from './HotelDash';
import InsuranceDash from './InsuranceDash'

const Dashboard = () => {
    const [activeItem, setActiveItem] = useState(0);

    const handleClick = (index) => {
        setActiveItem(index);
    };

    return (
        <div style={{ backgroundColor: "#fff", display: "flex", flexDirection: "row", justifyContent: "space-around", height: "100vh" }}>

            <div className="left-side-bar" style={{ flexBasis: "20%", height: "100%" }}>
                <SideBar handleClick={handleClick} activeItem={activeItem} />
            </div>
            <div className="right-side-main" style={{ flexBasis: "80%", borderRadius:"15px", boxShadow:"5px 5px 15px #000", margin:"20px 10px"}}>
                {activeItem === 0 && <EvisaDashboard />}
                {activeItem === 1 && <NonEvisaDashboard />}
                {activeItem === 2 && <PackageDash />}
                {activeItem === 3 && <FlightDash />}
                {activeItem === 4 && <HotelDash />}
                {activeItem === 5 && <InsuranceDash />}
            </div>

        </div>
    )
}

export default Dashboard
