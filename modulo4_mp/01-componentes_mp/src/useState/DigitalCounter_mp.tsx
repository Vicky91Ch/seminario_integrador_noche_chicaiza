import { useState } from 'react'

interface CounterProps {
  label: string
  step:  number
}

export default function DigitalCounter({ label, step }: CounterProps) {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 400, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{label}</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useState</code> para contar motos en inventario.
      </p>
      <p style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, textAlign: 'center' }}>{count}</p>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button
          onClick={() => setCount(c => c - step)}
          style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer' }}
        >−{step}</button>
        <button
          onClick={() => setCount(0)}
          style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #fca5a5', background: '#fef2f2', cursor: 'pointer' }}
        >Reset</button>
        <button
          onClick={() => setCount(c => c + step)}
          style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #0070f3', background: '#0070f3', color: 'white', cursor: 'pointer' }}
        >+{step}</button>
      </div>
    </div>
  )
}
