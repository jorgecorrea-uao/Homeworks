import { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { useTasks } from '../context/TasksContext'

export default function TaskForm() {
  const { addTask } = useTasks()
  const [title, setTitle] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    await addTask(title.trim())
    setTitle('')
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <InputGroup>
        <Form.Control
          placeholder="Nueva tarea..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit" className="btn-grad">
          Agregar
        </Button>
      </InputGroup>
    </Form>
  )
}