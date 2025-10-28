// components/RequireAuth.jsx
import React, { ReactNode, useEffect } from "react";
import { useAuth } from "@/shared/providers/auth-provider";
import { useRouter } from "next/router";

type RequireAuthProps = {
  children: ReactNode;
};

export default function RequireAuth({ children }: RequireAuthProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/"); 
    }
  }, [user, loading, router]);

  if (loading) return null;
  if (!user) return null; 
  return children;
}
