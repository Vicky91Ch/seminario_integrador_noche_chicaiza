interface CatalogoMoto {
  name: string
  emoji: string
  precio: number
}

interface CatalogoMotosProps {
  motos: CatalogoMoto[]
  title?: string
}

export default function CatalogoMotos({ motos, title = 'Catálogo de Motos' }: CatalogoMotosProps) {
  if (motos.length === 0) {
    return <p style={{ color: '#999' }}>No hay motos en el catálogo.</p>
  }

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {motos.map((moto) => (
          <li
            key={moto.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{moto.emoji} {moto.name}</span>
            <span style={{ color: '#888', fontSize: 13 }}>${moto.precio.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
