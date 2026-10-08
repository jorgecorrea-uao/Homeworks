import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTasks } from '../context/TasksContext'

export default function TaskItem({ task }) {
  const { toggleTask, editTask, deleteTask } = useTasks()
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(task.title)

  const saveEdit = async () => {
    await editTask(task.id, title.trim() || task.title)
    setEditing(false)
  }

  return (
    <li className={`task-item ${task.done ? 'done' : ''}`}>
      <Form.Check
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task)}
      />

      {editing ? (
        <Form.Control
          size="sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
      ) : (
        <span className="task-title">{task.title}</span>
      )}

      <div className="task-actions">
        {editing ? (
          <Button size="sm" variant="success" onClick={saveEdit}>
            Guardar
          </Button>
        ) : (
          <Button size="sm" variant="outline-primary" onClick={() => setEditing(true)}>
            Editar
          </Button>
        )}
        <Button size="sm" variant="outline-danger" onClick={() => deleteTask(task.id)}>
          Borrar
        </Button>
      </div>
    </li>
  )
}