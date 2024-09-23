import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function ProtecterRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    if (!user) return <Navigate to="/Login" />;

    return <>{children}</>;
}
