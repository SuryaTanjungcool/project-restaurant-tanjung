import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { API_Login } from "../../util/BaseUrl";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_Login}/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        const { token, data } = response.data;

        // Simpan token ke localStorage
        localStorage.setItem("authToken", token);
        localStorage.setItem("adminData", JSON.stringify(data));

        Swal.fire({
          icon: "success",
          title: "Login berhasil!",
          text: "Anda akan diarahkan ke Dashboard.",
        });

        navigate("/dashboard");
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Gagal login. Email atau password salah.";

      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: errorMsg,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Login Admin</h2>
        <form onSubmit={handleLogin}>
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
                    d="M15 12m-6 0a6 6 0 1112 0 6 6 0 11-12 0zm3-9v2m6 3h-2m2 12h-2m-3 3v-2M6 6h2m-2 3h2M3 12h2m0 6h2m2 3v-2m-3-3H6m0-3H4m3-3H4m3-3H4m3-3H4"
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
                    d="M15 12m-6 0a6 6 0 1112 0 6 6 0 11-12 0zm3-9v2m6 3h-2m2 12h-2m-3 3v-2M6 6h2m-2 3h2M3 12h2m0 6h2m2 3v-2m-3-3H6m0-3H4m3-3H4m3-3H4m3-3H4"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Belum punya akun?{" "}
          <button
            className="text-blue-400 underline"
            onClick={() => navigate("/register")}
          >
            Daftar
          </button>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
