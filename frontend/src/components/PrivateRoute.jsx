import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { validateToken } from '../services/token';

const PrivateRoute = ({ Component }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuthentication = async () => {
            const result = await validateToken();
            setIsAuthenticated(result);
        };

        checkAuthentication();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
