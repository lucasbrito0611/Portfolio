import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'
import Home from './pages/Home.jsx'
import AdminPage from './pages/Admin.jsx'
import App from './App.jsx'
import './i18n';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* AuthProvider fornece o estado de autenticação para toda a árvore de componentes */}
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            {/* ProtectedRoute protege a rota /admin — exibe o modal se não autenticado */}
            <Route
              path='admin'
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)

