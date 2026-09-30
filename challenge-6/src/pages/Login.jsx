import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, login } = useAuth();
  const navigate = useNavigate();

  if (user) return <Navigate to="/ejercicio-1" replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/ejercicio-1", { replace: true });
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div style={{ maxWidth: 320, margin: "80px auto", display: "flex", flexDirection: "column", gap: 12 }}>
      <h2>Demo Login</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}