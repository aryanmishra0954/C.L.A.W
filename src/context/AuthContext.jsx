import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  // Placeholder shape — wire this up to real auth (Google/Microsoft/email)
  // once AuthPage.jsx and lib/api.js are built out.
  const [user, setUser] = useState(null)

  const login = (userData) => setUser(userData)
  const logout = () => setUser(null)

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
