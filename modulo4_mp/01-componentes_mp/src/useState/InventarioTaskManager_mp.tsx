import { useState } from 'react'

interface Task {
  id:        number
  text:      string
  completed: boolean
}

let nextId = 4

const INITIAL: Task[] = [
  { id: 1, text: 'Ingresar Yamaha R15 al inventario',    completed: false },
  { id: 2, text: 'Verificar documentación Honda CB 500',  completed: true  },
  { id: 3, text: 'Actualizar precios de Suzuki',           completed: false },
]

export default function InventarioTaskManager() {
  const [tasks,  setTasks]  = useState<Task[]>(INITIAL)
  const [input,  setInput]  = useState('')

  function addTask() {
    if (!input.trim()) return
    setTasks(prev => [...prev, { id: nextId++, text: input.trim(), completed: false }])
    setInput('')
  }

  function toggleTask(id: number) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  function deleteTask(id: number) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 420, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Tareas de Inventario</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useState</code> para gestionar una lista de tareas del inventario de motos.
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          placeholder="Nueva tarea de inventario..."
          style={{ flex: 1, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 14 }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '8px 16px', borderRadius: 6, border: '1px solid #0070f3',
            background: '#0070f3', color: 'white', cursor: 'pointer', fontSize: 14,
          }}
        >
          Agregar
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {tasks.map(task => (
          <div key={task.id} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 14px',
            background: task.completed ? '#f0fdf4' : '#fafafa',
            borderRadius: 8,
            border: '1px solid',
            borderColor: task.completed ? '#86efac' : '#e5e5e5',
          }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              style={{ cursor: 'pointer', width: 16, height: 16 }}
            />
            <span style={{
              flex: 1, fontSize: 14,
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#666' : '#111',
            }}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                padding: '2px 8px', borderRadius: 4,
                border: '1px solid #fca5a5', background: '#fef2f2',
                color: '#dc2626', cursor: 'pointer', fontSize: 12,
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 16, fontSize: 12, color: '#aaa' }}>
        {tasks.filter(t => t.completed).length} de {tasks.length} tareas completadas
      </p>
    </div>
  )
}
