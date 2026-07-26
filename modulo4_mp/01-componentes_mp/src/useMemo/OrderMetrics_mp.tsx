import { useState, useMemo } from 'react'

interface Venta {
  id:        number
  cliente:   string
  amount:    number
  status:    'pending' | 'paid' | 'refunded'
  createdAt: string
}

const VENTAS: Venta[] = [
  { id: 1, cliente: 'Juan Pérez',      amount: 4500,  status: 'paid',     createdAt: '2026-01-15' },
  { id: 2, cliente: 'Ana García',      amount: 6500,  status: 'paid',     createdAt: '2026-01-18' },
  { id: 3, cliente: 'Carlos López',    amount: 3800,  status: 'pending',  createdAt: '2026-01-20' },
  { id: 4, cliente: 'María Torres',    amount: 7200,  status: 'refunded', createdAt: '2026-01-22' },
  { id: 5, cliente: 'Juan Pérez',      amount: 3200,  status: 'paid',     createdAt: '2026-02-01' },
  { id: 6, cliente: 'Pedro Sánchez',   amount: 5400,  status: 'pending',  createdAt: '2026-02-05' },
  { id: 7, cliente: 'Ana García',      amount: 8900,  status: 'paid',     createdAt: '2026-02-08' },
  { id: 8, cliente: 'Sofía Ramírez',   amount: 6100,  status: 'paid',     createdAt: '2026-02-10' },
]

export default function OrderMetrics() {
  const [statusFilter, setStatusFilter] = useState<Venta['status'] | 'all'>('all')
  const [minAmount,    setMinAmount]    = useState(0)

  const visibleVentas = useMemo(
    () => VENTAS.filter(o =>
      (statusFilter === 'all' || o.status === statusFilter) &&
      o.amount >= minAmount
    ),
    [statusFilter, minAmount]
  )

  const total   = useMemo(() => visibleVentas.reduce((s, o) => s + o.amount, 0), [visibleVentas])
  const average = useMemo(() => visibleVentas.length ? total / visibleVentas.length : 0, [total, visibleVentas.length])
  const maxVenta = useMemo(
    () => visibleVentas.reduce<Venta | null>((max, o) => (!max || o.amount > max.amount) ? o : max, null),
    [visibleVentas]
  )
  const byStatus = useMemo(
    () => ({
      paid:     visibleVentas.filter(o => o.status === 'paid').length,
      pending:  visibleVentas.filter(o => o.status === 'pending').length,
      refunded: visibleVentas.filter(o => o.status === 'refunded').length,
    }),
    [visibleVentas]
  )

  const STATUS_COLORS: Record<Venta['status'], string> = {
    paid:     '#15803d',
    pending:  '#b45309',
    refunded: '#9333ea',
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 580, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Métricas de Ventas</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Múltiples <code>useMemo</code> independientes derivados de un filtro base de ventas de motos.
      </p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        <label style={{ fontSize: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
          Estado
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as typeof statusFilter)}
            style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
          >
            <option value="all">Todos</option>
            <option value="paid">Pagado</option>
            <option value="pending">Pendiente</option>
            <option value="refunded">Reembolsado</option>
          </select>
        </label>

        <label style={{ fontSize: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
          Monto mínimo: ${minAmount}
          <input
            type="range"
            min={0}
            max={10000}
            step={500}
            value={minAmount}
            onChange={e => setMinAmount(Number(e.target.value))}
            style={{ width: 160 }}
          />
        </label>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 12,
        marginBottom: 24,
      }}>
        {[
          { label: 'Ventas visibles', value: visibleVentas.length },
          { label: 'Total',           value: `$${total.toLocaleString()}` },
          { label: 'Promedio',        value: `$${average.toFixed(2)}` },
          { label: 'Mayor venta',     value: maxVenta ? `$${maxVenta.amount.toLocaleString()} (${maxVenta.cliente})` : '—' },
        ].map(({ label, value }) => (
          <div key={label} style={{
            padding: 14,
            background: '#f5f5f5',
            borderRadius: 10,
            fontSize: 13,
          }}>
            <div style={{ color: '#888', marginBottom: 4 }}>{label}</div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>{value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {(Object.entries(byStatus) as [Venta['status'], number][]).map(([status, count]) => (
          <span key={status} style={{
            padding:    '4px 12px',
            borderRadius: 999,
            fontSize:   12,
            fontWeight: 600,
            background: `${STATUS_COLORS[status]}20`,
            color:      STATUS_COLORS[status],
          }}>
            {status}: {count}
          </span>
        ))}
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr>
            {['#', 'Cliente', 'Monto', 'Estado', 'Fecha'].map(h => (
              <th key={h} style={{
                textAlign: 'left',
                padding:   '6px 8px',
                borderBottom: '2px solid #e5e5e5',
                color: '#666',
                fontWeight: 600,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleVentas.map(o => (
            <tr key={o.id}>
              <td style={{ padding: '6px 8px', color: '#aaa' }}>{o.id}</td>
              <td style={{ padding: '6px 8px', fontWeight: 500 }}>{o.cliente}</td>
              <td style={{ padding: '6px 8px', fontWeight: 700 }}>${o.amount.toLocaleString()}</td>
              <td style={{ padding: '6px 8px' }}>
                <span style={{
                  padding:  '2px 8px',
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 700,
                  background: `${STATUS_COLORS[o.status]}20`,
                  color:      STATUS_COLORS[o.status],
                }}>
                  {o.status}
                </span>
              </td>
              <td style={{ padding: '6px 8px', color: '#888' }}>{o.createdAt}</td>
            </tr>
          ))}
          {visibleVentas.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', padding: 24, color: '#aaa' }}>
                Sin ventas para los filtros actuales.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
