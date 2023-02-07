import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.svg';

function LoginPage() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate("/main");
    };

    if (isLoggedIn) {
        return null;
      }

    return (
        <div className='logincontainer'>
            <div className='loginbox'>
                <div className='logincontent'>
                    <div className='logocontainer'>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className='logintitle'>
                        <div>
                            <h1> Bem vindo ao</h1>
                        </div>
                        <div className='maintitle'>
                            <h1> Product Catalog</h1>
                        </div>
                    </div>
                    <div className='infosubtitle'>
                        <h2>Preencha os dados de login para acessar</h2>
                    </div>
                    <div className='datacontainer'>
                        <div className='userform'>
                            <h2>Usuário</h2>
                            <input type="text" placeholder="Digite o nome do usuário" />
                        </div>
                        <div className='passwordform'>
                            <h2>Senha</h2>
                            <input type="password" placeholder="Digite a senha" />
                        </div>
                    </div>
                    <div className='btn-container'>
                        <button className="btn-entrar" onClick={handleLogin}>
                            ENTRAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage