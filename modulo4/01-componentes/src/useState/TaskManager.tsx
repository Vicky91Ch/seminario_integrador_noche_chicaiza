import { useState } from 'react'

interface Task {
  id: number
  title: string
  text: string
  done: boolean
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [titleInput, setTitleInput] = useState('')
  const [input, setInput] = useState('')

  // AGREGAR — spread del array anterior más el nuevo item
  function addTask() {
    if (!titleInput.trim() || !input.trim()) return
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: titleInput.trim(), text: input.trim(), done: false },
    ])
    setTitleInput('')
    setInput('')
  }

  // ELIMINAR — filter crea un nuevo array sin el elemento
  function removeTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  // ACTUALIZAR — map crea un nuevo array con el elemento modificado
  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  return (
    <div style={{ maxWidth: 380 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        <input
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Título de la tarea..."
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', fontWeight: 600 }}
        />
        <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Descripción..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <button
          onClick={addTask}
          style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Agregar
        </button>
        </div>
      </div>

      {tasks.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay tareas. ¡Agrega una!</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <div style={{ flex: 1 }}>
              <strong
                style={{
                  display: 'block',
                  textDecoration: task.done ? 'line-through' : 'none',
                  color: task.done ? '#aaa' : '#333',
                }}
              >
                {task.title}
              </strong>
              <span
                style={{
                  fontSize: 13,
                  textDecoration: task.done ? 'line-through' : 'none',
                  color: task.done ? '#aaa' : '#999',
                }}
              >
                {task.text}
              </span>
            </div>
            <button
              onClick={() => removeTask(task.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          {tasks.filter((t) => t.done).length} de {tasks.length} completadas
        </p>
      )}
    </div>
  )
}