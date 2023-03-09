import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { useNavigate } from 'react-router-dom';
import './styles.css';

function LogoutButton() {

    const auth = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        try {
            auth.logout();
            navigate("/login");
        } catch (error) {
            console.log('Erro no Logout');
        }
    }

    return (
        <button className='logoutbutton' onClick={handleLogout}>Logout</button>
    )
}

export default LogoutButton