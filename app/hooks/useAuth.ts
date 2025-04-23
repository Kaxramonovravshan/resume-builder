// hooks/useAuth.ts
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      const res = await fetch("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        localStorage.removeItem("token");
        router.push("/login");
      }
    };

    checkAuth();
  }, []);
};
