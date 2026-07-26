// src/infrastructure/storage/local-token-storage.ts
import type { AuthTokens } from '@/domain/entities/auth-tokens.entity'

const ACCESS_KEY = 'access_token'
const REFRESH_KEY = 'refresh_token'

export const localTokenStorage = {
  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_KEY)
  },

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_KEY)
  },

  getTokens(): AuthTokens | null {
    const access = localStorage.getItem(ACCESS_KEY)
    const refresh = localStorage.getItem(REFRESH_KEY)
    if (access && refresh) return { access, refresh }
    return null
  },

  setTokens(access: string, refresh: string): void {
    localStorage.setItem(ACCESS_KEY, access)
    localStorage.setItem(REFRESH_KEY, refresh)
  },

  clearTokens(): void {
    localStorage.removeItem(ACCESS_KEY)
    localStorage.removeItem(REFRESH_KEY)
  },
}
