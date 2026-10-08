import { Navbar, Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function NavBar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  if (!user) return null

  return (
    <Navbar className="app-navbar" variant="dark">
      <Container>
        <Navbar.Brand>Mis Tareas</Navbar.Brand>
        <div className="d-flex align-items-center gap-3">
          <span className="text-white small">{user.email}</span>
          <Button size="sm" variant="light" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}