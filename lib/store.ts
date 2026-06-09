import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthStore {
  token: string | null
  userId: string | null
  tokensCount: number
  isPro: boolean
  setAuth: (token: string, userId: string, tokensCount: number) => void
  setTokens: (n: number) => void
  setIsPro: (v: boolean) => void
  logout: () => void
}

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      userId: null,
      tokensCount: 0,
      isPro: false,
      setAuth: (token, userId, tokensCount) => set({ token, userId, tokensCount }),
      setTokens: (tokensCount) => set({ tokensCount }),
      setIsPro: (isPro) => set({ isPro }),
      logout: () => set({ token: null, userId: null, tokensCount: 0, isPro: false }),
    }),
    { name: 'nv-auth' },
  ),
)
