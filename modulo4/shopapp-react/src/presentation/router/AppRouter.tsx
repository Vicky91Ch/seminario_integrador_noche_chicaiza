// src/presentation/router/AppRouter.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import { useAuthStore } from '@/presentation/store/auth.store'
import ProtectedRoute from './ProtectedRoute'
import AppShell from '@/presentation/components/AppShell'
import PlaceholderPage from '../pages/PlaceholderPage'

// ─── Lazy imports ─────────────────────────────────────────────────────────────

const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const CatalogPage = lazy(() => import('../pages/catalog/CatalogPage'))
const ProductDetailPage = lazy(() => import('../pages/catalog/ProductDetailPage'))
const CartPage = lazy(() => import('../pages/cart/CartPage'))
const CheckoutPage = lazy(() => import('../pages/orders/CheckoutPage'))
const OrdersPage = lazy(() => import('../pages/orders/OrdersPage'))
const OrderDetailPage = lazy(() => import('../pages/orders/OrderDetailPage'))
const ProfilePage = lazy(() => import('../pages/profile/ProfilePage'))
const AdminDashboardPage = lazy(() => import('../pages/admin/AdminDashboardPage'))
const AdminCategoriesPage = lazy(() => import('../pages/admin/AdminCategoriesPage'))
const AdminProductsPage = lazy(() => import('../pages/admin/AdminProductsPage'))
const AdminUsersPage = lazy(() => import('../pages/admin/AdminUsersPage'))

// ─── Loader global ────────────────────────────────────────────────────────────

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  )
}

// ─── Router ───────────────────────────────────────────────────────────────────

export default function AppRouter() {
  const loadSession = useAuthStore((state) => state.loadSession)

  useEffect(() => {
    loadSession().catch(() => {})
  }, [loadSession])

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* ── Rutas de autenticación (sin AppShell) ── */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* ── Rutas con AppShell ── */}
          <Route element={<AppShell />}>
            {/* Públicas */}
            <Route path="/" element={<CatalogPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />

            {/* Requieren autenticación — placeholder hasta los módulos 6, 7 y 8 */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders/new"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <OrdersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders/:id"
              element={
                <ProtectedRoute>
                  <OrderDetailPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            {/* Requieren autenticación + rol staff — placeholder hasta los módulos 9 a 13 */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireStaff>
                  <AdminDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/categories"
              element={
                <ProtectedRoute requireStaff>
                  <AdminCategoriesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <ProtectedRoute requireStaff>
                  <AdminProductsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <ProtectedRoute requireStaff>
                  <PlaceholderPage title="Admin Órdenes — Módulo 12" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute requireStaff>
                  <AdminUsersPage />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
