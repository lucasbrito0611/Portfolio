import { useAuth } from "../context/AuthContext";
import AdminLoginModal from "../components/AdminLoginModal";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isCheckingAuth } = useAuth();

  if (isCheckingAuth) return null;

  if (!isAuthenticated) {
    return <AdminLoginModal />;
  }

  return children;
}

export default ProtectedRoute;