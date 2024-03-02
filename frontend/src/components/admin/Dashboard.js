import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import EvisaDashboard from './EvisaDashboard';
import NonEvisaDashboard from './NonEvisaDashboard';
import PackageDash from './PackageDash';
import FlightDash from './FlightDash';
import HotelDash from './HotelDash';
import InsuranceDash from './InsuranceDash';
import Login from './Login'; // Import your Login component
import axios from 'axios';

const Dashboard = () => {
    const [activeItem, setActiveItem] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track authentication status

    useEffect(() => {
        // Fetch authentication status from the server or local storage
        // For demonstration, we assume it's stored in local storage
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (username, password) => {
        // You can add your authentication logic here
        // For simplicity, I'm hardcoding the credentials
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true);
            // Store authentication status in local storage
            localStorage.setItem('isLoggedIn', 'true');
        } else {
            setIsLoggedIn(false);
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleClick = (index) => {
        setActiveItem(index);
    };

    const handleLogout = () => {
        // Clear local storage and set isLoggedIn to false
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        // Redirect to the home page
        window.location.href = '/'; // Redirect to the home page
    };

    // Render login prompt if not logged in
    if (!isLoggedIn) {
        return <Login onLogin={handleLogin} />;
    }

    // Render admin dashboard if logged in
    return (
        <div>
            <div className="logoutBtn container my-3" style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"flex-end"}}>
                <button onClick={handleLogout} style={{backgroundColor:"#fff", padding:"10px 20px", borderRadius:"15px", border:"2px solid #fff", boxShadow:"2px 2px 10px #000", color:"#000", fontSize:"20px", fontWeight:"500"}}>Logout</button>
            </div>
            <div className="main-content" style={{ backgroundColor: "#fff", display: "flex", flexDirection: "row", justifyContent: "space-around", height: "100vh" }}>
                <div className="left-side-bar" style={{ flexBasis: "20%", height: "100%" }}>
                    <SideBar handleClick={handleClick} activeItem={activeItem} />
                </div>
                <div className="right-side-main" style={{ flexBasis: "80%", borderRadius: "15px", boxShadow: "5px 5px 15px #000", margin: "20px 10px" }}>
                    {activeItem === 0 && <EvisaDashboard />}
                    {activeItem === 1 && <NonEvisaDashboard />}
                    {activeItem === 2 && <PackageDash />}
                    {activeItem === 3 && <FlightDash />}
                    {activeItem === 4 && <HotelDash />}
                    {activeItem === 5 && <InsuranceDash />}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
