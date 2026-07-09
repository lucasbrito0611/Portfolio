import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import api from '../lib/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        api.get('/auth/me')
            .then(() => setIsAuthenticated(true))
            .catch(() => setIsAuthenticated(false))
            .finally(() => setIsCheckingAuth(false));
    }, []);

    const login = useCallback(() => {
        setIsAuthenticated(true);
    }, []);
    const logout = useCallback(async () => {
        try {
            await api.post('/auth/logout');
        } catch {
            console.error("Error logging out");
        } finally {
            setIsAuthenticated(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, isCheckingAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}
