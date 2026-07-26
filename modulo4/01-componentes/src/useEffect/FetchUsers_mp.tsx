
import { useState, useEffect } from 'react'

interface Employee {
  id:       number
  name:     string
  email:    string
  username: string
  company:  { name: string }
}

export default function FetchEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [loading,   setLoading]   = useState(true)
  const [error,     setError]     = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchEmployees() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)
        const data: Employee[] = await res.json()
        if (!cancelled) setEmployees(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchEmployees()
    return () => { cancelled = true }
  }, []) // sin dependencias — se ejecuta solo al montar

  if (loading) return <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando empleados...</p>
  if (error)   return <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>

  return (
    <div style={{ maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <p style={{ fontSize: 13, color: '#888' }}>{employees.length} empleados</p>
      {employees.map((e) => (
        <div key={e.id} style={{
          padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: 8,
        }}>
          <p style={{ margin: '0 0 2px', fontWeight: 600, fontSize: 14 }}>{e.name}</p>
          <p style={{ margin: 0, fontSize: 12, color: '#6b7280' }}>
            {e.email} · {e.company.name}
          </p>
        </div>
      ))}
    </div>
  )
}
