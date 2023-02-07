import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

function LogoutButton() {

    const [isLoggout, setIsLoggout] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoggout(true);
        navigate("/");
    };

    if (isLoggout) {
        return null;
      }

    return (
        <button className='logoutbutton' onClick={handleLogin}>Logout</button>
    )
}

export default LogoutButton