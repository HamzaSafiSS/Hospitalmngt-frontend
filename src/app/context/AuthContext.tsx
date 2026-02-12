import { createContext, useContext, useState, ReactNode, useEffect } from "react"

type AuthContextType = {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // ✅ Load auth state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("isAuthenticated")
    if (stored === "true") setIsAuthenticated(true)
  }, [])

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem("isAuthenticated", "true")
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("isAuthenticated")
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used inside AuthProvider")
  return context
}