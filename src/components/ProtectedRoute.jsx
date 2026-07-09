import { useAuth } from "../context/AuthContext";
import AdminLoginModal from "../components/AdminLoginModal";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <AdminLoginModal />;
  }

  return children;
}

export default ProtectedRoute;