import { useReducer } from 'react'

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }

function counterReducer(state: number, action: Action): number {
  switch (action.type) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset':     return 0
  }
}

export default function BasicCounter() {
  const [count, dispatch] = useReducer(counterReducer, 0)

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 400, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Contador de Motos</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useReducer</code> para gestionar el estado del contador de inventario.
      </p>
      <p style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, textAlign: 'center' }}>{count}</p>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button
          onClick={() => dispatch({ type: 'decrement' })}
          style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer', fontSize: 14 }}
        >−</button>
        <button
          onClick={() => dispatch({ type: 'reset' })}
          style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #fca5a5', background: '#fef2f2', cursor: 'pointer', fontSize: 14 }}
        >Reset</button>
        <button
          onClick={() => dispatch({ type: 'increment' })}
          style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #0070f3', background: '#0070f3', color: 'white', cursor: 'pointer', fontSize: 14 }}
        >+</button>
      </div>
    </div>
  )
}
