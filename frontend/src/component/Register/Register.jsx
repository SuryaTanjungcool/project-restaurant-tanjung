import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_Register } from "../../util/BaseUrl";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_Register}/register`, {
        name,
        email,
        password,
      });

      alert("Registrasi berhasil! Silakan login.");
      navigate("/akunlogin");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Terjadi kesalahan.";
      alert(`Gagal registrasi: ${errorMessage}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Nama
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.222A10.477 10.477 0 0112 5c3.06 0 5.907 1.286 8.02 3.222M21 21l-5.197-5.197M15 15c-1.355.97-3.19 1.577-5 1.577-3.355 0-6.5-1.8-8.52-4.64A.94.94 0 011 11c0-.63.39-1.16.98-1.778A10.477 10.477 0 0112 5c3.06 0 5.907 1.286 8.02 3.222"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5c3.06 0 5.907 1.286 8.02 3.222C21.61 9.84 22 10.37 22 11c0 .63-.39 1.16-.98 1.778C17.907 16.714 15.06 18 12 18c-3.06 0-5.907-1.286-8.02-3.222A9.427 9.427 0 012 11c0-.63.39-1.16.98-1.778C6.093 6.286 8.94 5 12 5z"
                  />
                </svg>
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Sudah punya akun?{" "}
          <button
            className="text-blue-400 underline"
            onClick={() => navigate("/akunlogin")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
