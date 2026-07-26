import { useState, useMemo } from 'react'

interface Moto {
  id:       number
  name:     string
  category: string
  price:    number
  active:   boolean
  stock:    number
}

const CATALOG: Moto[] = [
  { id:  1, name: 'Yamaha R15',       category: 'Deportiva',     price: 4500,  active: true,  stock: 5 },
  { id:  2, name: 'Honda CB 500',     category: 'Naked',         price: 6500,  active: true,  stock: 3 },
  { id:  3, name: 'Suzuki GSX-R150',  category: 'Deportiva',     price: 3800,  active: false, stock: 0 },
  { id:  4, name: 'Kawasaki Z400',    category: 'Naked',         price: 7200,  active: true,  stock: 2 },
  { id:  5, name: 'Honda PCX 160',    category: 'Scooter',       price: 3200,  active: true,  stock: 8 },
  { id:  6, name: 'Yamaha MT-09',     category: 'Naked',         price: 8900,  active: true,  stock: 1 },
  { id:  7, name: 'KTM Duke 390',     category: 'Naked',         price: 5400,  active: false, stock: 0 },
  { id:  8, name: 'BMW G 310 R',      category: 'Deportiva',     price: 6100,  active: true,  stock: 4 },
  { id:  9, name: 'Honda ADV 160',    category: 'Scooter',       price: 3900,  active: true,  stock: 6 },
  { id: 10, name: 'Yamaha XMAX 300',  category: 'Scooter',       price: 7800,  active: true,  stock: 2 },
]

type SortKey = 'name' | 'price' | 'stock'

export default function FilteredCatalog() {
  const [search,     setSearch]     = useState('')
  const [onlyActive, setOnlyActive] = useState(true)
  const [category,   setCategory]   = useState('Todas')
  const [sortBy,     setSortBy]     = useState<SortKey>('name')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return CATALOG.filter(p =>
      (!onlyActive || p.active) &&
      (category === 'Todas' || p.category === category) &&
      (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    )
  }, [search, onlyActive, category])

  const sorted = useMemo(
    () => [...filtered].sort((a, b) =>
      sortBy === 'name'  ? a.name.localeCompare(b.name)  :
      sortBy === 'price' ? a.price - b.price              :
                           b.stock - a.stock
    ),
    [filtered, sortBy]
  )

  const categories = useMemo(
    () => ['Todas', ...new Set(CATALOG.map(p => p.category))],
    []
  )

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Catálogo de Motos</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Dos <code>useMemo</code> encadenados: filtrar → ordenar.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Buscar moto..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 140, padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value as SortKey)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          <option value="name">A–Z</option>
          <option value="price">Precio ↑</option>
          <option value="stock">Stock ↓</option>
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={onlyActive}
            onChange={e => setOnlyActive(e.target.checked)}
          />
          Solo disponibles
        </label>
      </div>

      <p style={{ fontSize: 13, color: '#888', marginBottom: 12 }}>
        {sorted.length} de {CATALOG.length} motos
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {sorted.map(p => (
          <div key={p.id} style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            padding:        '10px 14px',
            background:     p.active ? '#f9f9f9' : '#f0f0f0',
            borderRadius:   8,
            border:         '1px solid #e5e5e5',
            opacity:        p.active ? 1 : 0.6,
          }}>
            <div>
              <span style={{ fontWeight: 600, fontSize: 14 }}>🏍️ {p.name}</span>
              <span style={{ marginLeft: 8, fontSize: 12, color: '#888' }}>{p.category}</span>
            </div>
            <div style={{ textAlign: 'right', fontSize: 13 }}>
              <div style={{ fontWeight: 700 }}>${p.price.toLocaleString()}</div>
              <div style={{ color: p.stock < 3 ? '#e00' : '#888' }}>
                Stock: {p.stock}
              </div>
            </div>
          </div>
        ))}
        {sorted.length === 0 && (
          <p style={{ textAlign: 'center', color: '#aaa', padding: 24 }}>
            Sin resultados.
          </p>
        )}
      </div>
    </div>
  )
}
