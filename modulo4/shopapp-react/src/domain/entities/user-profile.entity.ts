/**
 * Perfil del usuario autenticado, tal como lo devuelve GET /users/profile/.
 * No incluye is_staff ni date_joined — esos campos ya están en LoggedUser
 * (módulo 3) a través de authStore.
 */
export interface UserProfile {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  avatar_url: string | null
}
