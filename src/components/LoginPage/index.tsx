import React, { useState, useContext } from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';

function LoginPage() {

    // const { authenticated, login } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', { username, password });
        login(username, password);
        //integração com o meu contexto / api
    };

    // COISAS VELHAS ABAIXO



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
                    <form className='form'
                        onSubmit={handleSubmit}>
                        <div className='field'>
                            <label htmlFor="username">Usuário</label>
                            <input type="username"
                                name='username'
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} placeholder="Digite o nome do usuário" />
                        </div>
                        <div className='field'>
                            <label htmlFor="password">Senha</label>
                            <input type="password"
                                name='password'
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} placeholder="Digite a senha" />
                        </div>
                        <div className='btn-container'>
                            <button className="btn-entrar" type="submit">
                                ENTRAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage