import { useRef, useEffect } from 'react'

export default function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 400, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Búsqueda de Motos</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useRef</code> para enfocar automáticamente el input de búsqueda.
      </p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar moto por modelo o marca..."
        style={{
          width: '100%', padding: '10px 14px',
          border: '2px solid #0070f3', borderRadius: 8,
          fontSize: 14, boxSizing: 'border-box',
        }}
      />
    </div>
  )
}
