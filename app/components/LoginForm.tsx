"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  // const [token, setToken] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    // setToken("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("✅ Logged in successfully!");
      // setToken(data.token);
      localStorage.setItem("token", data.token); // <-- tokenni localStorage ga yozamiz
      router.push("/sign-in");
    } else {
      setMessage(data.message || "❌ Login failed.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center p-3">
      <form
        onSubmit={handleSubmit}
        className="mx-auto md:w-1/4 w-full gap-5 rounded-3xl px-6 py-5 shadow-2xl border border-b-gray-400 flex flex-col"
      >
        <h1 className="text-center text-3xl">Log In</h1>

        <input
          name="email"
          placeholder="Email ..."
          className="border p-3 rounded-xl"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder="Password ..."
          className="border p-3 rounded-xl"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="border p-2 rounded-xl hover:bg-gray-100 transition"
        >
          Log In
        </button>

        <p className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => router.push("/sign-up")}
            className="underline hover:cursor-pointer"
          >
            Sign Up
          </span>
        </p>

        {message && <p className="text-center text-sm mt-3">{message}</p>}
      </form>
    </div>
  );
}
