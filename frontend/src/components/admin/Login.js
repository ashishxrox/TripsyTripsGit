import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ height:"20rem", width:"30rem",border: '1px solid #ccc', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 10px 0px #ccc', backgroundColor: '#f9f9f9', display:"flex", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column"}}>
                <h2>Login</h2>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" style={{ marginTop: '10px', padding:"5px 30px", border:"2px solid #000047", borderRadius:"15px", backgroundColor:"#000047", color:"#fff", boxShadow:"5px 5px 10px #000"}}>Login</button>
            </form>
        </div>
    );
};

export default Login;
