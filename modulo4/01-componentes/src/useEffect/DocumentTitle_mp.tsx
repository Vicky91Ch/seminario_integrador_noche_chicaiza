// src/components/DocumentTitle_mp.tsx

import { useEffect } from 'react'

export default function DocumentTitle() {
  useEffect(() => {
    document.title = 'Sistema de Nómina — React 19'

    // Limpieza: restaurar el título al desmontar
    return () => {
      document.title = 'React App'
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña cambió al montar este componente - NOMINA.
    </p>
  )
}
