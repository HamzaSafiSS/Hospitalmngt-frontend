import { useAuth } from "../context/AuthContext"

export default function AdminDashboard() {
  const { logout } = useAuth()

  return (
    <div className="min-h-screen flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

        <ul className="space-y-4">
          <li>Dashboard</li>
          <li>Manage Doctors</li>
          <li>Manage Patients</li>
          <li>Create Admin</li>
        </ul>

        <button
          onClick={logout}
          className="mt-10 bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Welcome Admin 👑</h1>
      </div>
    </div>
  )
}