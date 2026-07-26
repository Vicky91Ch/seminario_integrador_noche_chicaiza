// src/App.tsx

//import FruitList from "./components/FruitList"
//import UserGreeting from "./components/UserGreeting"
//import WelcomeBanner from "./components/WelcomeBanner"
import AutoFocusInput from "./useRef/AutoFocusInput"
import DocumentTitle from "./useEffect/DocumentTitle"
import FetchUser from "./useEffect/FetchUser"
import InlineEditor from "./useRef/InlineEditor"
import BasicCounter from "./useReducer/BasicCounter"
import RegistrationForm from "./useReducer/RegistrationForm"
import ThemeToggle from "./UseContext/ThemeToggle"
import UserBadge from "./UseContext/UserBadge"
import LoginForm from "./UseContext/LoginForm"
import AppHeader from "./UseContext/AppHeader"
import { useAuth } from "./contexts/AuthContext"
import PrimeSieve from "./useMemo/PrimeSieve"
import FilteredCatalog from "./useMemo/FilteredCatalog"
import OrderMetrics from "./useMemo/OrderMetrics"
import MultiTagFilter from "./useMemo/MultiTagFilter"
import MemoizedList from "./useCallback/MemoizedList"
import SearchWithFetch from "./useCallback/SearchWithFetch"
import FilterTable from "./useCallback/FilterTable"
import PaginatedFetch from "./useCallback/PaginatedFetch"
import ThemeSelector from "./customHooks/ThemeSelector"
//import DigitalCounter from "./useState/DigitalCounter"
//import TaskManager from "./useState/TaskManager"
//import UserProfileForm from "./useState/UserProfileForm"

const PASO = 90

const fruits = [
  { name: "Manzana", emoji: "🍎", calories: 52 },
  { name: "Banana", emoji: "🍌", calories: 89 },
  { name: "Naranja", emoji: "🍊", calories: 47 },
]

const catalog = [
  { id: 1, name: "Teclado mecánico", price: 89.99 },
  { id: 2, name: "Monitor 27 pulgadas", price: 349.99 },
  { id: 3, name: "Mouse inalámbrico", price: 29.99, outOfStock: true },
  { id: 4, name: "Webcam HD", price: 59.99 },
]

export default function App() {
  const { state } = useAuth()
  const content =
    // PASO === 1 ? <WelcomeBanner /> :

    // PASO === 2 ? (
    //   <>
    //     <UserGreeting
    //       name="Carlos López Ruiz"
    //       occupation="Desarrollador Frontend"
    //     />
    //     <br />
    //     <UserGreeting
    //       name="Alison Venegas"
    //       occupation="Desarrolladora Frontend"
    //     />
    //   </>
    // ) :

    // PASO === 3 ? <CurrentDateDisplay /> :

    // PASO === 4 ? (
    //   <div style={{ display: "flex", gap: 12 }}>
    //     <ColoredBox color="#0070f3" label="Primary" />
    //     <ColoredBox color="#22c55e" label="Success" />
    //     <ColoredBox color="#e00" label="Danger" />
    //   </div>
    // ) :

    // PASO === 5 ? (
    //   <ConditionalGreeting
    //     isLoggedIn={true}
    //     userName="Ana"
    //     timeOfDay="afternoon"
    //   />
    // ) :

    // PASO === 6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> :

    // PASO === 7 ? (
    //   <div style={{ display: "flex", gap: 24, alignItems: "flex-end" }}>
    //     <PriceTag amount={99.99} currency="USD" />
    //     <PriceTag amount={99.99} currency="USD" discountPercent={20} />
    //   </div>
    // ) :

    // PASO === 8 ? (
    //   <div style={{ display: "flex", gap: 8 }}>
    //     <StatusBadge status="active" />
    //     <StatusBadge status="pending" />
    //     <StatusBadge status="error" />
    //     <StatusBadge status="inactive" />
    //   </div>
    // ) :

    // PASO === 9 ? (
    //   <MiniProfileCard
    //     fullName="Ana García"
    //     role="Senior Developer"
    //     department="Ingeniería"
    //     status="active"
    //     joinedYear={2019}
    //   />
    // ) :

    // PASO === 10 ? (
    //   <SimpleInfoTable
    //     title="Resumen del pedido"
    //     rows={[
    //       { label: "Subtotal", value: "$89.99" },
    //       { label: "Envío", value: "$5.00" },
    //       { label: "Total", value: "$94.99", highlight: true },
    //     ]}
    //   />
    // ) :

    // PASO === 11 ? (
    //   <ProductCard
    //     title="Teclado inalámbrico"
    //     description="Bluetooth 5.0, retroiluminado"
    //     highlighted
    //   />
    // ) :

    // PASO === 12 ? (
    //   <ProductCatalogList
    //     products={catalog}
    //     title="Productos disponibles"
    //   />
    // ) :

    // PASO === 13 ? (
    //   <UserProfileCard
    //     fullName="Ana García"
    //     email="ana@ejemplo.com"
    //     role="admin"
    //     isActive={true}
    //     skills={["TypeScript", "React", "Node.js"]}
    //     bio="Desarrolladora fullstack con 5 años de experiencia."
    //   />
    // ) :

    // USE STATE
    // PASO === 14 ? (
    //   <DigitalCounter label="Contador" step={1} />
    // ) :

    // PASO === 15 ? ( <UserProfileForm />) : 
    // PASO === 16 ? ( <TaskManager />) : 

    //USE EFFECT
    // PASO === 30 ? ( <DocumentTitle />) : 
    // PASO === 31 ? ( <FetchUser />) : 
    // PASO === 32 ? ( <FetchUsers />) : 

    //USE REF
    // PASO === 40 ? ( <AutoFocusInput />) : 
    //PASO === 41 ? ( <InlineEditor />) : 

    //USE REDUCER
    //PASO === 50 ? ( <BasicCounter />) : 
    //PASO === 51 ? ( <RegistrationForm />) : 

    //USE CONTEXT
    //PASO === 60 ? (<ThemeToggle/>):
    //PASO === 61 ? <UserBadge /> :
    //PASO === 62 ? <LoginForm /> :
    //PASO === 63 ? <AppHeader /> :

    // USE MEMO
    //PASO === 70 ? <PrimeSieve /> :
    //PASO === 71 ? <FilteredCatalog /> :
    //PASO === 72 ? <OrderMetrics /> :
    //PASO === 73 ? <MultiTagFilter /> :

    // USE CALLBACK
    //PASO === 80 ? <MemoizedList /> :
    //PASO === 81 ? <SearchWithFetch /> :
    //PASO === 82 ? <FilterTable /> :
    //PASO === 83 ? <PaginatedFetch /> :

    PASO === 90 ? <ThemeSelector /> :


    (
      <p style={{ color: "#e00" }}>
        Paso {PASO}: crea el componente primero
      </p>
    )

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {PASO === 90 ? content : (
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