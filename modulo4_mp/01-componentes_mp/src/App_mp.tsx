import { useState, Component } from 'react';
import type { ReactNode } from 'react';

import { ThemeProvider } from './contexts/ThemeContext_mp';
import { AuthProvider } from './contexts/AuthContext_mp';

// components
import MotoList from './components/MotoList_mp';
import WelcomeBanner from './components/WelcomeBanner_mp';
import CatalogoMotos from './components/CatalogoMotos_mp';
import VendedorGreeting from './components/VendedorGreeting_mp';

// useState
import DigitalCounter from './useState/DigitalCounter_mp';
import InventarioTaskManager from './useState/InventarioTaskManager_mp';
import MotoForm from './useState/MotoForm_mp';

// useEffect
import DocumentTitle from './useEffect/DocumentTitle_mp';
import FetchUser from './useEffect/FetchUser_mp';
import FetchUsers from './useEffect/FetchUsers_mp';

// useRef
import AutoFocusInput from './useRef/AutoFocusInput_mp';
import InlineEditor from './useRef/InlineEditor_mp';

// useMemo
import FilteredCatalog from './useMemo/FilteredCatalog_mp';
import MultiTagFilter from './useMemo/MultiTagFilter_mp';
import OrderMetrics from './useMemo/OrderMetrics_mp';
import PrimeSieve from './useMemo/PrimeSieve_mp';

// useCallback
import FilterTable from './useCallback/FilterTable_mp';
import MemoizedList from './useCallback/MemoizedList_mp';
import PaginatedFetch from './useCallback/PaginatedFetch_mp';
import SearchWithFetch from './useCallback/SearchWithFetch_mp';

// useReducer
import BasicCounter from './useReducer/BasicCounter_mp';
import RegistrationForm from './useReducer/RegistrationForm_mp';

// UseContext
import AppHeader from './UseContext/AppHeader_mp';
import LoginForm from './UseContext/LoginForm_mp';
import MotoBadge from './UseContext/MotoBadge_mp';
import ThemeToggle from './UseContext/ThemeToggle_mp';

// customHooks
import ThemeSelector from './customHooks/ThemeSelector_mp';

// ---------------------------------------------------------------
// Datos de prueba para los componentes que reciben props
// ---------------------------------------------------------------
const motosDemo = [
  { name: 'Yamaha MT-07', emoji: '🏍️', precio: 8500 },
  { name: 'Honda CB500F', emoji: '🛵', precio: 7200 },
  { name: 'Moto Guzzi V100 Mandello', emoji: '🏁', precio: 15900 },
  { name: 'Kawasaki Z650', emoji: '⚡', precio: 7900 },
];

// ---------------------------------------------------------------
// Lista de ejercicios, en orden didáctico
// ---------------------------------------------------------------
type Ejercicio = { carpeta: string; nombre: string; elemento: ReactNode };

const ejercicios: Ejercicio[] = [
  // 1. Componentes y props
  { carpeta: 'components', nombre: 'WelcomeBanner', elemento: <WelcomeBanner /> },
  {
    carpeta: 'components',
    nombre: 'VendedorGreeting',
    elemento: <VendedorGreeting name="Vicky Chicaiza" occupation="Asesora de ventas" />,
  },
  {
    carpeta: 'components',
    nombre: 'MotoList',
    elemento: <MotoList motos={motosDemo} title="Inventario de Motos" />,
  },
  {
    carpeta: 'components',
    nombre: 'CatalogoMotos',
    elemento: <CatalogoMotos motos={motosDemo} title="Catálogo de Motos" />,
  },

  // 2. useState
  {
    carpeta: 'useState',
    nombre: 'DigitalCounter',
    elemento: <DigitalCounter label="Motos vendidas hoy" step={1} />,
  },
  { carpeta: 'useState', nombre: 'MotoForm', elemento: <MotoForm /> },
  { carpeta: 'useState', nombre: 'InventarioTaskManager', elemento: <InventarioTaskManager /> },

  // 3. useEffect
  { carpeta: 'useEffect', nombre: 'DocumentTitle', elemento: <DocumentTitle /> },
  { carpeta: 'useEffect', nombre: 'FetchUser', elemento: <FetchUser /> },
  { carpeta: 'useEffect', nombre: 'FetchUsers', elemento: <FetchUsers /> },

  // 4. useRef
  { carpeta: 'useRef', nombre: 'AutoFocusInput', elemento: <AutoFocusInput /> },
  { carpeta: 'useRef', nombre: 'InlineEditor', elemento: <InlineEditor /> },

  // 5. useMemo
  { carpeta: 'useMemo', nombre: 'PrimeSieve', elemento: <PrimeSieve /> },
  { carpeta: 'useMemo', nombre: 'FilteredCatalog', elemento: <FilteredCatalog /> },
  { carpeta: 'useMemo', nombre: 'MultiTagFilter', elemento: <MultiTagFilter /> },
  { carpeta: 'useMemo', nombre: 'OrderMetrics', elemento: <OrderMetrics /> },

  // 6. useCallback
  { carpeta: 'useCallback', nombre: 'MemoizedList', elemento: <MemoizedList /> },
  { carpeta: 'useCallback', nombre: 'FilterTable', elemento: <FilterTable /> },
  { carpeta: 'useCallback', nombre: 'SearchWithFetch', elemento: <SearchWithFetch /> },
  { carpeta: 'useCallback', nombre: 'PaginatedFetch', elemento: <PaginatedFetch /> },

  // 7. useReducer
  { carpeta: 'useReducer', nombre: 'BasicCounter', elemento: <BasicCounter /> },
  { carpeta: 'useReducer', nombre: 'RegistrationForm', elemento: <RegistrationForm /> },

  // 8. useContext
  { carpeta: 'UseContext', nombre: 'ThemeToggle', elemento: <ThemeToggle /> },
  { carpeta: 'UseContext', nombre: 'LoginForm', elemento: <LoginForm /> },
  { carpeta: 'UseContext', nombre: 'MotoBadge', elemento: <MotoBadge /> },
  { carpeta: 'UseContext', nombre: 'AppHeader', elemento: <AppHeader /> },

  // 9. custom hooks
  { carpeta: 'customHooks', nombre: 'ThemeSelector', elemento: <ThemeSelector /> },
];

// ---------------------------------------------------------------
// Error boundary
// ---------------------------------------------------------------
type EBProps = { children: ReactNode };
type EBState = { error: Error | null };

class ErrorBoundary extends Component<EBProps, EBState> {
  state: EBState = { error: null };

  static getDerivedStateFromError(error: Error): EBState {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <pre
          style={{
            color: '#b00',
            background: '#fee',
            padding: 12,
            borderRadius: 4,
            whiteSpace: 'pre-wrap',
          }}
        >
          ⚠️ {this.state.error.message}
        </pre>
      );
    }
    return this.props.children;
  }
}

// ---------------------------------------------------------------
// Utilidades
// ---------------------------------------------------------------
const num = (i: number) => String(i + 1).padStart(2, '0');
const urlDe = (i: number) => `${window.location.pathname}?ej=${num(i)}`;

function abrirEnPestana(i: number) {
  window.open(urlDe(i), '_blank', 'noopener,noreferrer');
}

function leerIndice(): number | null {
  const valor = new URLSearchParams(window.location.search).get('ej');
  if (!valor) return null;
  const i = parseInt(valor, 10) - 1;
  return i >= 0 && i < ejercicios.length ? i : null;
}

// ---------------------------------------------------------------
// Vista: un solo ejercicio (pestaña independiente)
// ---------------------------------------------------------------
function VistaEjercicio({ indice }: { indice: number }) {
  const e = ejercicios[indice];

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          paddingBottom: 10,
          marginBottom: 20,
          borderBottom: '2px solid #1f6feb',
        }}
      >
        <span
          style={{
            background: '#1f6feb',
            color: '#fff',
            padding: '3px 10px',
            borderRadius: 4,
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          {num(indice)}
        </span>
        <h2 style={{ margin: 0, fontSize: 20 }}>
          {e.carpeta} / {e.nombre}
        </h2>
        <button
          onClick={() => { window.location.href = window.location.pathname; }}
          style={{
            marginLeft: 'auto',
            fontSize: 13,
            padding: '4px 10px',
            cursor: 'pointer',
            borderRadius: 4,
            border: '1px solid #bbb',
            background: '#f2f2f2',
          }}
        >
          Volver al índice
        </button>
      </div>

      <ErrorBoundary>{e.elemento}</ErrorBoundary>
    </div>
  );
}

// ---------------------------------------------------------------
// Vista: índice con botones que abren pestañas nuevas
// ---------------------------------------------------------------
function VistaIndice() {
  const [aviso, setAviso] = useState('');

  const abrirTodos = () => {
    ejercicios.forEach((_, i) => abrirEnPestana(i));
    setAviso('Si solo se abrió una pestaña, permite las ventanas emergentes para localhost.');
  };

  // Agrupa por carpeta conservando el orden
  const grupos: { carpeta: string; items: { e: Ejercicio; i: number }[] }[] = [];
  ejercicios.forEach((e, i) => {
    const ultimo = grupos[grupos.length - 1];
    if (ultimo && ultimo.carpeta === e.carpeta) ultimo.items.push({ e, i });
    else grupos.push({ carpeta: e.carpeta, items: [{ e, i }] });
  });

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif', maxWidth: 900 }}>
      <h1 style={{ fontSize: 24, marginBottom: 4 }}>Módulo 4 — Componentes y Hooks</h1>
      <p style={{ color: '#666', marginTop: 0 }}>
        {ejercicios.length} ejercicios. Cada botón abre el ejercicio en una pestaña independiente.
      </p>

      <button
        onClick={abrirTodos}
        style={{
          padding: '8px 16px',
          background: '#1f6feb',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          marginBottom: 8,
        }}
      >
        Abrir los {ejercicios.length} en pestañas
      </button>

      {aviso && <p style={{ color: '#a60', fontSize: 13 }}>{aviso}</p>}

      {grupos.map((g) => (
        <div key={g.carpeta} style={{ marginTop: 24 }}>
          <h3
            style={{
              fontSize: 15,
              textTransform: 'uppercase',
              letterSpacing: 1,
              color: '#1f6feb',
              borderBottom: '1px solid #ddd',
              paddingBottom: 4,
            }}
          >
            {g.carpeta}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
            {g.items.map(({ e, i }) => (
              <button
                key={e.nombre}
                onClick={() => abrirEnPestana(i)}
                style={{
                  textAlign: 'left',
                  padding: '8px 12px',
                  fontSize: 14,
                  cursor: 'pointer',
                  borderRadius: 4,
                  border: '1px solid #ddd',
                  background: '#fafafa',
                }}
              >
                <strong style={{ color: '#1f6feb' }}>{num(i)}</strong>
                {'  '}
                {e.nombre}
                <span style={{ color: '#aaa', fontSize: 12 }}>{'  (nueva pestaña)'}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------
// App
// ---------------------------------------------------------------
function App() {
  const indice = leerIndice();

  return (
    <ThemeProvider>
      <AuthProvider>
        {indice === null ? <VistaIndice /> : <VistaEjercicio indice={indice} />}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;