import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { jwtDecode } from "jwt-decode"

type UserRole = "ADMIN" | "DOCTOR" | "PATIENT"

type AuthContextType = {
  isAuthenticated: boolean
  role: UserRole | null
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [role, setRole] = useState<UserRole | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const decoded: any = jwtDecode(token)
      setIsAuthenticated(true)
      setRole(decoded.role)
    }
  }, [])

  const login = (token: string) => {
    const decoded: any = jwtDecode(token)

    localStorage.setItem("token", token)
    setIsAuthenticated(true)
    setRole(decoded.role)
  }

  const logout = () => {
    localStorage.removeItem("token")
    setIsAuthenticated(false)
    setRole(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used inside AuthProvider")
  return context
}