"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const key = type === "text" ? "name" : name;
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("✅ Successfully registered!");
      router.push("/sign-in");
      setFormData({ name: "", email: "", password: "" });
    } else {
      setMessage(data.message || "❌ Registration failed.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center p-3">
      <form
        onSubmit={handleSubmit}
        className="mx-auto md:w-1/4 w-full gap-5 rounded-3xl px-6 py-5 shadow-2xl border border-b-gray-400 flex flex-col"
      >
        <h1 className="text-center text-3xl">Sign Up</h1>

        <input
          name="name"
          placeholder="Full name ..."
          className="border p-3 rounded-xl"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/sign-in")}
            className="underline hover:cursor-pointer"
          >
            Log In
          </span>
        </p>
        <p className="text-center">--- or ---</p>
        <button type="button" className="border p-2 rounded-xl">
          Google
        </button>

        {message && (
          <p
            className="text-center text-sm mt-2"
            style={{ fontFamily: "Neue Machina" }}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
