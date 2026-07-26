import { useState } from 'react'

export default function MotoForm() {
  const [modelo, setModelo]   = useState('')
  const [marca,  setMarca]    = useState('')
  const [precio, setPrecio]   = useState('')
  const [color,  setColor]    = useState('')

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 400, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Registrar Moto</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useState</code> para gestionar un formulario de registro de motos.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          value={marca}
          onChange={e => setMarca(e.target.value)}
          placeholder="Marca (Yamaha, Honda...)"
          style={inputStyle}
        />
        <input
          value={modelo}
          onChange={e => setModelo(e.target.value)}
          placeholder="Modelo (R15, CB 500...)"
          style={inputStyle}
        />
        <input
          type="number"
          value={precio}
          onChange={e => setPrecio(e.target.value)}
          placeholder="Precio (USD)"
          style={inputStyle}
        />
        <input
          value={color}
          onChange={e => setColor(e.target.value)}
          placeholder="Color"
          style={inputStyle}
        />

        <div style={{
          padding: 16, background: '#f9f9f9', borderRadius: 8, border: '1px solid #eee',
          fontSize: 14,
        }}>
          <p style={{ margin: 0, fontWeight: 600, marginBottom: 8 }}>Vista previa:</p>
          <p style={{ margin: 0 }}>🏍️ <strong>{marca || 'Marca'}</strong> {modelo || 'Modelo'}</p>
          <p style={{ margin: '4px 0 0', color: '#888' }}>
            ${precio ? Number(precio).toLocaleString() : '0'} · {color || 'Color'}
          </p>
        </div>
      </div>
    </div>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  fontSize: 14,
}
