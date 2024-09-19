import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("Please enter both username and password");
      return;
    }

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid authentication");
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex py-56 justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92c355] focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92c355] focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-[#92c355] rounded-md hover:bg-[#92c200] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#92c355]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
