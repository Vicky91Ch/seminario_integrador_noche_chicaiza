import { useState, useEffect } from 'react'

interface Moto {
  id:     number
  title:  string
  body:   string
  userId: number
}

// Simula una petición asíncrona (como un fetch a un servidor)
function obtenerMotos(): Promise<Moto[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Yamaha MT-07',
          body: 'Bicilíndrica CP2 de 689 cc y 73 CV. Chasis ligero, par generoso a bajas vueltas y peso contenido de 184 kg. La naked más equilibrada para uso diario y escapadas de fin de semana.',
          userId: 1,
        },
        {
          id: 2,
          title: 'Honda CB500F',
          body: 'Bicilíndrica en paralelo de 471 cc y 47 CV. Apta para carné A2, con consumo ajustado y mantenimiento económico. Ideal como primera moto de media cilindrada.',
          userId: 1,
        },
        {
          id: 3,
          title: 'Moto Guzzi V100 Mandello',
          body: 'Bicilíndrica en V transversal de 1042 cc y 115 CV, con aerodinámica activa. Los deflectores se despliegan según la velocidad. Cambio de seis marchas y modos de conducción configurables.',
          userId: 2,
        },
        {
          id: 4,
          title: 'Kawasaki Z650',
          body: 'Bicilíndrica de 649 cc y 68 CV sobre chasis tubular de acero. Postura erguida, suspensión cómoda y respuesta lineal. Una naked versátil para ciudad y carretera.',
          userId: 2,
        },
        {
          id: 5,
          title: 'Suzuki V-Strom 650',
          body: 'Trail de 645 cc en V a 90 grados, con 71 CV y control de tracción de dos niveles. Depósito de 20 litros y gran autonomía. Pensada para viajar con equipaje.',
          userId: 3,
        },
        {
          id: 6,
          title: 'KTM 390 Duke',
          body: 'Monocilíndrica de 399 cc y 45 CV con apenas 165 kg. Cuadro de acero, suspensiones invertidas WP y frenos ByBre. La más ágil del segmento en ciudad.',
          userId: 3,
        },
      ])
    }, 800)
  })
}

export default function FetchUsers() {
  const [motos,   setMotos]   = useState<Moto[]>([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function cargarMotos() {
      setLoading(true)
      setError(null)
      try {
        const data = await obtenerMotos()
        if (!cancelled) setMotos(data)
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Error desconocido')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    cargarMotos()

    // Función de limpieza: se ejecuta al desmontar el componente
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 540, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Inventario de Motos</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useEffect</code> para cargar la lista de motos de forma asíncrona.
      </p>

      {loading && <p style={{ color: '#aaa' }}>Cargando inventario…</p>}

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

      {!loading && !error && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {motos.map((m) => (
            <div
              key={m.id}
              style={{
                padding: '12px 16px',
                background: '#f9f9f9',
                borderRadius: 8,
                border: '1px solid #eee',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                🏍️ {m.title}
              </div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>
                {m.body.slice(0, 100)}…
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}