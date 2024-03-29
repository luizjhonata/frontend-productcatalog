import { useAuth } from "../../contexts/AuthProvider/useAuth";
import LoginPage from "../LoginPage";


//Quando a regra do ProtectedLayout estiver correta vamos receber um children - {children : JSX.Element} é a criação de uma interface inline
export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth()
    if (!auth.username) {
        return <LoginPage />;
    }
    return children
};