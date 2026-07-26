// src/components/ConceptoNominaList_mp.tsx

interface Concepto {
  name: string
  icon: string
  monto: number
}

interface ConceptoNominaListProps {
  conceptos: Concepto[]
  title?: string
}

export default function ConceptoNominaList({ conceptos, title = 'Conceptos' }: ConceptoNominaListProps) {
  if (conceptos.length === 0) {
    return <p style={{ color: '#999' }}>No hay conceptos en la lista.</p>
  }

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {conceptos.map((c) => (
          <li
            key={c.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{c.icon} {c.name}</span>
            <span style={{ color: '#888', fontSize: 13 }}>${c.monto.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
