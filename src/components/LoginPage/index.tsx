import { useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './styles.css';
import { toast } from 'react-toastify';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        onFinish({ username, password })
    };

    async function onFinish(values: { username: string, password: string }) {
        try {
            await auth.authenticate(values.username, values.password);
            if (auth.authenticate != null) {
                navigate("/");
            }
        } catch (error) {
            toast.warning('Invalid username or password',
                {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
        }
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
                    <form className='form' onSubmit={handleSubmit}>
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