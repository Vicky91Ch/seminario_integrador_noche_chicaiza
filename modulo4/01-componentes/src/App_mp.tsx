// src/App_mp.tsx

//import ConceptoNominaList from "./components/ConceptoNominaList_mp"
//import EmployeeGreeting from "./components/EmployeeGreeting_mp"
//import WelcomeBanner from "./components/WelcomeBanner_mp"
import AutoFocusInput from "./useRef/AutoFocusInput_mp"

import FetchUser from "./useEffect/FetchUser_mp"
import InlineEditor from "./useRef/InlineEditor_mp"
import BasicCounter from "./useReducer/BasicCounter_mp"
import RegistrationForm from "./useReducer/RegistrationForm_mp"
import ThemeToggle from "./UseContext/ThemeToggle_mp"
import EmployeeBadge from "./UseContext/EmployeeBadge_mp"
import LoginForm from "./UseContext/LoginForm_mp"
import AppHeader from "./UseContext/AppHeader_mp"
import { useAuth } from "./contexts/AuthContext_mp"
import PrimeSieve from "./useMemo/PrimeSieve_mp"
import FilteredCatalog from "./useMemo/FilteredCatalog_mp"
import OrderMetrics from "./useMemo/OrderMetrics_mp"
import MultiTagFilter from "./useMemo/MultiTagFilter_mp"
import MemoizedList from "./useCallback/MemoizedList_mp"
import SearchWithFetch from "./useCallback/SearchWithFetch_mp"
import FilterTable from "./useCallback/FilterTable_mp"
import PaginatedFetch from "./useCallback/PaginatedFetch_mp"
import ThemeSelector from "./customHooks/ThemeSelector_mp"
//import WelcomeBanner from "./components/WelcomeBanner_mp"
//import ConceptoNominaList from "./components/ConceptoNominaList_mp"
import NominaTaskManager from "./useState/NominaTaskManager_mp"
import ConceptoNominaList from "./components/ConceptoNominaList_mp"
import EmployeeProfileForm from "./useState/EmployeeProfileForm_mp"
import DocumentTitle from "./useEffect/DocumentTitle_mp"
import FetchUsers from "./useEffect/FetchUsers_mp"
//import HorasCounter from "./useState/HorasCounter_mp"
//import EmployeeProfileForm from "./useState/EmployeeProfileForm_mp"

const PASO = 90

const conceptos = [
  { name: "Sueldo base",    icon: "💰", monto: 460.00 },
  { name: "Décimo tercero", icon: "🎁", monto:  38.33 },
  { name: "Horas extra",    icon: "⏰", monto:  59.99 },
]

const catalog = [
  { id: 1, name: "Sueldo base",          price: 460.00 },
  { id: 2, name: "Décimo tercero",       price:  38.33 },
  { id: 3, name: "Décimo cuarto",        price: 460.00, outOfStock: true },
  { id: 4, name: "Bono de transporte",   price:  30.00 },
]

export default function App() {
  const { state } = useAuth()
  const content =
    // PASO === 1 ? <WelcomeBanner /> :

    // PASO === 2 ? (
    //   <>
    //     <EmployeeGreeting
    //       name="Gabriela Calderón"
    //       occupation="Vendedora"
    //     />
    //     <br />
    //     <EmployeeGreeting
    //       name="Jorge Vera"
    //       occupation="Bodeguero"
    //     />
    //   </>
    // ) :

    // PASO === 6 ? <ConceptoNominaList conceptos={conceptos} title="Conceptos de nómina" /> :

    // USE STATE
    //PASO === 14 ? (
    //   <HorasCounter label="Contador" step={1} />
    // ) :

    // PASO === 15 ? ( <EmployeeProfileForm />) : 
    // PASO === 16 ? ( <NominaTaskManager />) :

    //USE EFFECT
    // PASO === 30 ? ( <DocumentTitle />) : 
    // PASO === 31 ? ( <FetchUser />) : 
    // PASO === 32 ? ( <FetchUsers />) : 

    //USE REF
    // PASO === 40 ? ( <AutoFocusInput />) : 
    // PASO === 41 ? ( <InlineEditor />) : 

    //USE REDUCER
    // PASO === 50 ? ( <BasicCounter />) : 
    // PASO === 51 ? ( <RegistrationForm />) : 

    //USE CONTEXT
    // PASO === 60 ? (<ThemeToggle/>):
    // PASO === 61 ? <EmployeeBadge /> :
    // PASO === 62 ? <LoginForm /> :
    // PASO === 63 ? <AppHeader /> :

    // USE MEMO
    // PASO === 70 ? <PrimeSieve /> :
    // PASO === 71 ? <FilteredCatalog /> :
    // PASO === 72 ? <OrderMetrics /> :
    // PASO === 73 ? <MultiTagFilter /> :

    // USE CALLBACK
    // PASO === 80 ? <MemoizedList /> :
    // PASO === 81 ? <SearchWithFetch /> :
    // PASO === 82 ? <FilterTable /> :
    // PASO === 83 ? <PaginatedFetch /> :

    PASO === 90 ? <ThemeSelector /> :


    (
      <p style={{ color: "#e00" }}>
        Paso {PASO}: crea el componente primero
      </p>
    )

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {PASO === 90? content : (
        <>
          {state.user && (
            <p style={{ marginBottom: 16, fontSize: 14, color: '#6b7280' }}>
              Sesión activa: <strong>{state.user.name}</strong>
            </p>
          )}
          {content}
        </>
      )}
    </main>
  )
}
