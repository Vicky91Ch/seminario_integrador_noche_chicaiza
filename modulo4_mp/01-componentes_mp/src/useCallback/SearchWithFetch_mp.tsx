import { useState, useEffect, useCallback } from 'react'

interface Moto {
  id:    number
  title: string
  body:  string
}

// Catálogo que simula la base de datos del servidor
const CATALOGO: Moto[] = [
  {
    id: 1,
    title: 'Yamaha MT-07',
    body: 'Bicilíndrica CP2 de 689 cc y 73 CV. Chasis ligero, par generoso a bajas vueltas y peso contenido de 184 kg. La naked más equilibrada para uso diario.',
  },
  {
    id: 2,
    title: 'Honda CB500F',
    body: 'Bicilíndrica en paralelo de 471 cc y 47 CV. Apta para carné A2, con consumo ajustado y mantenimiento económico. Ideal como primera moto de media cilindrada.',
  },
  {
    id: 3,
    title: 'Moto Guzzi V100 Mandello',
    body: 'Bicilíndrica en V transversal de 1042 cc y 115 CV, con aerodinámica activa. Los deflectores se despliegan según la velocidad. Modos de conducción configurables.',
  },
  {
    id: 4,
    title: 'Kawasaki Z650',
    body: 'Bicilíndrica de 649 cc y 68 CV sobre chasis tubular de acero. Postura erguida, suspensión cómoda y respuesta lineal. Versátil para ciudad y carretera.',
  },
  {
    id: 5,
    title: 'Suzuki V-Strom 650',
    body: 'Trail de 645 cc en V a 90 grados, con 71 CV y control de tracción de dos niveles. Depósito de 20 litros y gran autonomía. Pensada para viajar con equipaje.',
  },
  {
    id: 6,
    title: 'KTM 390 Duke',
    body: 'Monocilíndrica de 399 cc y 45 CV con apenas 165 kg. Cuadro de acero, suspensiones invertidas WP y frenos ByBre. La más ágil del segmento en ciudad.',
  },
  {
    id: 7,
    title: 'Honda Africa Twin',
    body: 'Bicilíndrica de 1084 cc y 102 CV, disponible con cambio DCT. Suspensiones de largo recorrido y modos todoterreno. Referencia en trail de gran cilindrada.',
  },
  {
    id: 8,
    title: 'Yamaha Ténéré 700',
    body: 'Trail de 689 cc con 21 pulgadas delante y chasis tubular resistente. Electrónica mínima y mecánica fiable. Diseñada para viajes largos fuera del asfalto.',
  },
]

// Simula la petición al servidor con filtro por nombre
function buscarMotos(termino: string): Promise<Moto[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const t = termino.trim().toLowerCase()
      const resultado = t
        ? CATALOGO.filter((m) => m.title.toLowerCase().includes(t))
        : CATALOGO.slice(0, 5)
      resolve(resultado)
    }, 500)
  })
}

export default function SearchWithFetch() {
  const [query,   setQuery]   = useState('')
  const [motos,   setMotos]   = useState<Moto[]>([])
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  // useCallback estabiliza la función: solo se recrea cuando cambia query
  const fetchMotos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await buscarMotos(query)
      setMotos(data)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }, [query])

  useEffect(() => {
    fetchMotos()
  }, [fetchMotos])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 540, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Buscar Motos</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useCallback</code> estabiliza la función de búsqueda en las dependencias de{' '}
        <code>useEffect</code>.
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Buscar motos por nombre..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            flex: 1,
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: 8,
            fontSize: 14,
          }}
        />
        <button
          onClick={fetchMotos}
          style={{
            padding: '8px 16px',
            borderRadius: 8,
            border: '1px solid #0070f3',
            background: '#0070f3',
            color: 'white',
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Buscar
        </button>
      </div>

      {error && (
        <div
          style={{
            padding: 12,
            background: '#fef2f2',
            border: '1px solid #fca5a5',
            borderRadius: 8,
            color: '#dc2626',
            fontSize: 14,
            marginBottom: 16,
          }}
        >
          Error al cargar: {error}
        </div>
      )}

      {loading ? (
        <div style={{ textAlign: 'center', padding: 32, color: '#aaa' }}>Cargando motos…</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {motos.map((moto) => (
            <div
              key={moto.id}
              style={{
                padding: '12px 16px',
                background: '#f9f9f9',
                borderRadius: 8,
                border: '1px solid #eee',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                🏍️ {moto.title}
              </div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>
                {moto.body.slice(0, 100)}…
              </div>
            </div>
          ))}
          {motos.length === 0 && (
            <p style={{ textAlign: 'center', color: '#aaa' }}>Sin resultados.</p>
          )}
        </div>
      )}
    </div>
  )
}