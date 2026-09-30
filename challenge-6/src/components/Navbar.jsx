import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav style={{ display: "flex", gap: 16, alignItems: "center", padding: 12, borderBottom: "1px solid #ccc" }}>
      <strong>👤 {user.name}</strong>
      <Link to="/ejercicio-1">Cola</Link>
      <Link to="/ejercicio-2">Nueva persona</Link>
      <button onClick={handleLogout} style={{ marginLeft: "auto" }}>Logout</button>
    </nav>
  );
}