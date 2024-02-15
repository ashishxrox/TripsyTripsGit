import React, { useState } from 'react';
import '../../static/sideBar.css';



const SideBar = ({activeItem, handleClick}) => {

    return (
        <div style={{ backgroundColor: "#20293a", height: "100%", margin: "20px 10px", borderRadius: "15px", boxShadow: "5px 5px 10px #000", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div className="side-bar-title" style={{ display: "flex", color: "#20293a", padding: "20px 10px", flexDirection: "row", alignItems: "center", justifyContent: "space-around", flexBasis: "20%" }}>
                <h2 style={{ fontSize: "30px", backgroundColor: "#fff", padding: "15px 10px", borderRadius: "15px", boxShadow: "5px 5px 15px #000" }}>Check Enquires</h2>
            </div>
            <div className="side-bar-menu" style={{ flexBasis: "80%", height: "100%", }}>
                <ul style={{ height: "100%", color: "#fff", listStyleType: "none", fontSize: "24px", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                    <li className={activeItem === 0 ? 'active' : ''} onClick={() => handleClick(0)}>
                         E Visa </li>
                    <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
                        Non E Visa </li>
                    <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
                         Packages </li>
                    <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
                         Flights </li>
                    <li className={activeItem === 4 ? 'active' : ''} onClick={() => handleClick(4)}>
                         Hotels </li>
                    <li className={activeItem === 5 ? 'active' : ''} onClick={() => handleClick(5)}>
                         Insurances </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
