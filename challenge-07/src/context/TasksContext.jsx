import { createContext, useContext, useEffect } from 'react'
import { useCollection } from '../hooks/useCollection'
import { useAuth } from './AuthContext'

const TasksContext = createContext()

export function TasksProvider({ children }) {
  const { user } = useAuth()

  const filters = user ? [['userId', '==', user.uid]] : []

  const { documents: tasks, loading, getAll, add, update, remove } =
    useCollection('tasks', filters)

  useEffect(() => {
    if (user) getAll()
  }, [user])

  const addTask = (title) =>
    add({ title, done: false, userId: user.uid, createdAt: Date.now() })

  const toggleTask = (task) => update(task.id, { done: !task.done })
  const editTask = (id, title) => update(id, { title })
  const deleteTask = (id) => remove(id)

  return (
    <TasksContext.Provider
      value={{ tasks, loading, addTask, toggleTask, editTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => useContext(TasksContext)