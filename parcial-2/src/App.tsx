import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Explorador from './pages/Explorador';
import { PrivateRoute } from './routes/PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Explorador />
          </PrivateRoute>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};