import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

 const handleLogin = async () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const response = await fetch("http://127.0.0.1:8000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  const data = await response.json()

  if (response.ok) {
    localStorage.setItem("token", data.access_token)
    login()
    navigate("/dashboard")
  } else {
    alert(data.detail)
  }
}

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-96 p-6 shadow-xl rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  )
}