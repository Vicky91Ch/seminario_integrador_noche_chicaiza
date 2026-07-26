import { useState, useEffect } from 'react'

export default function DocumentTitle() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `MotoVentas - Clicks: ${count}`
    return () => {
      document.title = 'MotoVentas - Sistema de Ventas'
    }
  }, [count])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 400, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>DocumentTitle</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Actualiza el título del documento al hacer clic.
      </p>
      <p style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Clicks: {count}</p>
      <button
        onClick={() => setCount(c => c + 1)}
        style={{
          padding: '8px 16px',
          borderRadius: 6,
          border: '1px solid #0070f3',
          background: '#0070f3',
          color: 'white',
          cursor: 'pointer',
          fontSize: 14,
        }}
      >
        Incrementar
      </button>
    </div>
  )
}
