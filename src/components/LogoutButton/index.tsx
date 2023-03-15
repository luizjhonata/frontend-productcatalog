import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { useNavigate } from 'react-router-dom';
import './styles.css';

function LogoutButton() {

    const auth = useAuth();
    const navigate = useNavigate();

    const userLogged = auth.username;

    function handleLogout() {
        try {
            auth.logout();
            navigate("/login");
        } catch (error) {
            console.log('Erro no Logout');
        }
    }

    return (
        <div>
            <p className="username">{userLogged}</p>
            <button className='logoutbutton' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default LogoutButton