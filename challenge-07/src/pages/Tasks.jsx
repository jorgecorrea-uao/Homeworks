import { Container } from 'react-bootstrap'
import { useTasks } from '../context/TasksContext'
import TaskForm from '../components/TaskForm'
import TaskItem from '../components/TaskItem'

export default function Tasks() {
  const { tasks, loading } = useTasks()

  return (
    <Container className="tasks-page">
      <h1 className="page-title">Lista de Tareas</h1>

      <TaskForm />

      {loading && <p className="text-center">Cargando tareas...</p>}

      {!loading && tasks.length === 0 && (
        <p className="empty">No tienes tareas todavía</p>
      )}

      <ul className="task-list">
        {tasks
          .slice()
          .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
          .map((t) => (
            <TaskItem key={t.id} task={t} />
          ))}
      </ul>
    </Container>
  )
}