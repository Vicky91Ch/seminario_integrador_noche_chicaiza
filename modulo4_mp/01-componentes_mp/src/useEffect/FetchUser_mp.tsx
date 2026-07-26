import { useState, useEffect } from 'react'

interface Moto {
  id:     number
  title:  string
  body:   string
  userId: number
}

// Simula una petición asíncrona (como un fetch a un servidor)
function obtenerMoto(): Promise<Moto> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Moto Guzzi V100 Mandello',
        body:
          'Bicilíndrica en V transversal de 1042 cc y 115 CV, con aerodinámica activa: ' +
          'los deflectores se despliegan automáticamente según la velocidad. Cambio de ' +
          'seis marchas, embrague antirrebote y modos de conducción configurables. ' +
          'Precio referencial: USD 15.900.',
        userId: 1,
      })
    }, 800)
  })
}

export default function FetchUser() {
  const [moto,    setMoto]    = useState<Moto | null>(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function cargarMoto() {
      setLoading(true)
      setError(null)
      try {
        const data = await obtenerMoto()
        if (!cancelled) setMoto(data)
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Error desconocido')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    cargarMoto()

    // Función de limpieza: se ejecuta al desmontar el componente
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 540, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Detalle de Moto</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useEffect</code> con función de limpieza para evitar actualizar el estado
        en un componente ya desmontado.
      </p>

      {loading && <p style={{ color: '#aaa' }}>Cargando moto…</p>}

      {error && (
        <div
          style={{
            padding: 12,
            background: '#fef2f2',
            border: '1px solid #fca5a5',
            borderRadius: 8,
            color: '#dc2626',
            fontSize: 14,
          }}
        >
          Error al cargar: {error}
        </div>
      )}

      {moto && (
        <div
          style={{
            padding: 16,
            background: '#f9f9f9',
            borderRadius: 10,
            border: '1px solid #eee',
          }}
        >
          <h3 style={{ margin: 0, fontSize: 16, marginBottom: 8 }}>🏍️ {moto.title}</h3>
          <p style={{ margin: 0, fontSize: 14, color: '#555', lineHeight: 1.6 }}>
            {moto.body}
          </p>
        </div>
      )}
    </div>
  )
}