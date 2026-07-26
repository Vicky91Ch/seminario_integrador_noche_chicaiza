import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ShoppingBag, ShoppingCart, LogOut } from 'lucide-react'
import { useAuthStore } from '@/presentation/store/auth.store'
import { useCartStore } from '@/presentation/store/cart.store'
import { useProfileStore } from '@/presentation/store/profile.store'
import { UserAvatar } from '@/presentation/components/UserAvatar'
import { Button } from '@/presentation/components/ui/button'
import { Badge } from '@/presentation/components/ui/badge'
import { CartDrawer } from '@/presentation/components/CartDrawer'

export default function AppShell() {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()
  const openCart = useCartStore((s) => s.openCart)
  const cartItemCount = useCartStore((s) => s.itemCount())
  const { profile, fetchProfile, clearProfile } = useProfileStore()

  useEffect(() => {
    if (user && !profile) {
      fetchProfile()
    }
  }, [user, profile, fetchProfile])

  async function handleLogout() {
    await logout()
    clearProfile()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold">
            <ShoppingBag className="h-5 w-5" />
            <span>ShopApp</span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/catalog">Catálogo</Link>
            </Button>

            {user && (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/orders">Pedidos</Link>
              </Button>
            )}

            {user && (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/profile">Perfil</Link>
              </Button>
            )}

            {user?.is_staff && (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/admin">Admin</Link>
              </Button>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Cart icon */}
            <Button variant="ghost" size="icon" className="relative" onClick={openCart}>
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full p-0 text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {user ? (
              <>
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/profile">
                    <UserAvatar user={profile} size="sm" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Iniciar sesión</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      {/* Cart drawer */}
      <CartDrawer />
    </div>
  )
}
