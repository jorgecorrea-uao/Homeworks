import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [esRegistro, setEsRegistro] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { user, login, register } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async () => {
    setError('');
    try {
      if (esRegistro) {
        await register(email, password);
      } else {
        await login(email, password);
      }
      navigate('/', { replace: true });
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="auth">
      <form
        className="auth__card"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h2>{esRegistro ? 'Crear cuenta' : 'Iniciar sesión'}</h2>

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input
          type="password"
          placeholder="Password (mínimo 6 caracteres)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn">
          {esRegistro ? 'Registrarme' : 'Ingresar'}
        </button>

        <button type="button" className="auth__cambiar" onClick={() => setEsRegistro(!esRegistro)}>
          {esRegistro ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
        </button>
      </form>
    </div>
  );
}

export default Login;