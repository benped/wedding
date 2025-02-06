import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated) {
        return <Navigate to="/password" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute; 