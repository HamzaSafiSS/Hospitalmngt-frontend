import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  allowedRoles: string[]
}

export default function RoleProtectedRoute({ children, allowedRoles }: Props) {
  const { isAuthenticated, role } = useAuth()

  if (!isAuthenticated) return <Navigate to="/login" />

  if (!role || !allowedRoles.includes(role))
    return <Navigate to="/dashboard" />

  return <>{children}</>
}