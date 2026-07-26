import { useReducer } from 'react'

interface FormState {
  modelo:   string
  marca:    string
  email:    string
  password: string
  errors:   Partial<Record<'modelo' | 'marca' | 'email' | 'password', string>>
  status:   'idle' | 'submitting' | 'success' | 'error'
}

type FormAction =
  | { type: 'SET_FIELD'; field: keyof Pick<FormState, 'modelo' | 'marca' | 'email' | 'password'>; value: string }
  | { type: 'SET_ERRORS'; errors: FormState['errors'] }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR' }
  | { type: 'RESET' }

const INITIAL_STATE: FormState = {
  modelo:   '',
  marca:    '',
  email:    '',
  password: '',
  errors:   {},
  status:   'idle',
}

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: undefined },
      }
    case 'SET_ERRORS':
      return { ...state, errors: action.errors }
    case 'SUBMIT_START':
      return { ...state, status: 'submitting' }
    case 'SUBMIT_SUCCESS':
      return { ...INITIAL_STATE, status: 'success' }
    case 'SUBMIT_ERROR':
      return { ...state, status: 'error' }
    case 'RESET':
      return INITIAL_STATE
  }
}

export default function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)

  function validate(): boolean {
    const errors: FormState['errors'] = {}
    if (!state.modelo.trim())    errors.modelo   = 'El modelo es requerido'
    if (!state.marca.trim())     errors.marca    = 'La marca es requerida'
    if (!state.email.includes('@')) errors.email  = 'Email inválido'
    if (state.password.length < 6)  errors.password = 'Mínimo 6 caracteres'

    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors })
      return false
    }
    return true
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return

    dispatch({ type: 'SUBMIT_START' })
    await new Promise((resolve) => setTimeout(resolve, 1200))
    dispatch({ type: 'SUBMIT_SUCCESS' })
  }

  const isSubmitting = state.status === 'submitting'

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}
    >
      {state.status === 'success' && (
        <div style={{ padding: 12, background: '#dcfce7', borderRadius: 6, color: '#166534' }}>
          ✅ Registro de moto exitoso
        </div>
      )}

      <div>
        <input
          value={state.marca}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'marca', value: e.target.value })}
          placeholder="Marca (Yamaha, Honda...)"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.marca)}
        />
        {state.errors.marca && <p style={errorStyle}>{state.errors.marca}</p>}
      </div>

      <div>
        <input
          value={state.modelo}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'modelo', value: e.target.value })}
          placeholder="Modelo (R15, CB 500...)"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.modelo)}
        />
        {state.errors.modelo && <p style={errorStyle}>{state.errors.modelo}</p>}
      </div>

      <div>
        <input
          type="email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
          placeholder="Correo del cliente"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.email)}
        />
        {state.errors.email && <p style={errorStyle}>{state.errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          value={state.password}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })}
          placeholder="Contraseña (mín. 6 caracteres)"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.password)}
        />
        {state.errors.password && <p style={errorStyle}>{state.errors.password}</p>}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            flex: 1, padding: '10px',
            background: isSubmitting ? '#93c5fd' : '#0070f3',
            color: '#fff', border: 'none', borderRadius: 6,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontWeight: 500,
          }}
        >
          {isSubmitting ? 'Registrando...' : 'Registrar Moto'}
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'RESET' })}
          disabled={isSubmitting}
          style={{
            padding: '10px 16px',
            background: '#f3f4f6', color: '#6b7280',
            border: 'none', borderRadius: 6, cursor: 'pointer',
          }}
        >
          Limpiar
        </button>
      </div>
    </form>
  )
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: '100%',
    padding: '8px 12px',
    border: `1px solid ${hasError ? '#ef4444' : '#d1d5db'}`,
    borderRadius: 6,
    fontSize: 14,
    boxSizing: 'border-box',
  }
}

const errorStyle: React.CSSProperties = {
  margin: '4px 0 0',
  fontSize: 12,
  color: '#ef4444',
}
