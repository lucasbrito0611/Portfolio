import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem('admin_token'));

    const login = useCallback((jwt) => {
        localStorage.setItem('admin_token', jwt);
        setToken(jwt);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('admin_token');
        setToken(null);
    }, []);

    const isAuthenticated = Boolean(token);

    return (
        <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
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
