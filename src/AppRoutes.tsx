import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout';
import { AuthProvider } from "./contexts/AuthProvider";
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

export default function AppRoutes() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={
                        <ProtectedLayout>
                            <MainPage />
                        </ProtectedLayout>} />
                </Routes>
            </Router>
        </AuthProvider>
    )
}