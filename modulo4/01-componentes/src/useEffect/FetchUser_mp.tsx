
import { useState, useEffect } from 'react'

interface Employee {
  id:       number
  name:     string
  email:    string
  username: string
  phone:    string
  website:  string
  company:  { name: string }
}

interface Props {
  defaultEmployeeId?: number
}

export default function FetchEmployee({ defaultEmployeeId = 1 }: Props) {
  const [employeeId, setEmployeeId] = useState(defaultEmployeeId)
  const [customId, setCustomId] = useState('')
  const [employee, setEmployee] = useState<Employee | null>(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchEmployee() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${employeeId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Employee = await res.json()
        if (!cancelled) setEmployee(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchEmployee()

    return () => { cancelled = true }
  }, [employeeId])

  function handleCustomSearch() {
    const id = Number(customId)
    if (id > 0) setEmployeeId(id)
  }

  return (
    <div style={{ maxWidth: 400 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setEmployeeId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: employeeId === id ? '#0070f3' : '#fff',
              color:      employeeId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: employeeId === id ? 600 : 400,
            }}
          >
            Empleado {id}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          type="number"
          min={1}
          max={10}
          value={customId}
          onChange={(e) => setCustomId(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCustomSearch()}
          placeholder="N° de empleado (1-10)"
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', fontSize: 14 }}
        />
        <button
          onClick={handleCustomSearch}
          style={{
            padding: '8px 16px',
            background: '#22c55e',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Buscar
        </button>
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {employee && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: 16 }}>{employee.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            @{employee.username} · {employee.email}
          </p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            {employee.phone}
          </p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            {employee.website} · {employee.company.name}
          </p>
        </div>
      )}
    </div>
  )
}
