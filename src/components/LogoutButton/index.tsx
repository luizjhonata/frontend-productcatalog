import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

function LogoutButton() {

    const [isLogout, setIsLogout] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLogout(true);
        navigate("/");
    };

    if (isLogout) {
        return null;
      }

    return (
        <button className='logoutbutton' onClick={handleLogin}>Logout</button>
    )
}

export default LogoutButton