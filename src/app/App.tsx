import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import RoleProtectedRoute from "./components/RoleProtectedRoute"
import AdminDashboard from "./pages/AdminDashboard"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
  path="/admin"
  element={
    <RoleProtectedRoute allowedRoles={["ADMIN"]}>
      <AdminDashboard />
    </RoleProtectedRoute>
  }
/>

<Route
  path="/dashboard"
  element={
    <RoleProtectedRoute allowedRoles={["DOCTOR", "PATIENT"]}>
      <Dashboard />
    </RoleProtectedRoute>
  }
/>
      
    </Routes>
  )
}