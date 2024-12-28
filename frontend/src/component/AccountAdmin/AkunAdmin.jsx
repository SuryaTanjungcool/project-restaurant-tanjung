import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
