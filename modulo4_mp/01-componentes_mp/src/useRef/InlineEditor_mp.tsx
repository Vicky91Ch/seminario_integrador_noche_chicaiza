import { useRef, useState } from 'react'

export default function InlineEditor() {
  const [editing, setEditing] = useState(false)
  const [text,    setText]    = useState('Precio de Yamaha R15: $4,500')
  const inputRef = useRef<HTMLInputElement>(null)

  function startEditing() {
    setEditing(true)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  function save() {
    setEditing(false)
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 400, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Editor Inline</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useRef</code> para enfocar el input al editar inline un dato de la moto.
      </p>

      {editing ? (
        <input
          ref={inputRef}
          value={text}
          onChange={e => setText(e.target.value)}
          onBlur={save}
          onKeyDown={e => e.key === 'Enter' && save()}
          style={{
            width: '100%', padding: '10px 14px',
            border: '2px solid #0070f3', borderRadius: 8,
            fontSize: 14, boxSizing: 'border-box',
          }}
        />
      ) : (
        <p
          onClick={startEditing}
          style={{
            padding: '10px 14px',
            border: '2px dashed #d1d5db', borderRadius: 8,
            cursor: 'pointer', fontSize: 14, color: '#333',
          }}
        >
          {text} ✏️
        </p>
      )}
    </div>
  )
}
