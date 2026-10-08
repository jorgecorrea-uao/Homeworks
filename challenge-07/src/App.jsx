import { Routes, Route, Navigate } from 'react-router-dom'
import { TasksProvider } from './context/TasksContext'
import NavBar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Tasks from './pages/Tasks'

export default function App() {
  return (
    <TasksProvider>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </TasksProvider>
  )
}