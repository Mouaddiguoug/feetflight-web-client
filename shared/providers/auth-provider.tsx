// components/AuthProvider.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "next/router";
import { Plan, UserData, UserResponse } from "@/pages";
import api from "../utils/axios";

type loginProps = {
  email: string;
  password: string;
};

export interface signupProps {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  userName: string;
  phoneNumber: string;
  plans: Plan[];
  role: string;
  deviceToken: string;
}

const AuthContext = createContext({
  user: null as UserData | null,
  loading: true,
  signUp: async (data: signupProps): Promise<UserResponse> => {
    throw new Error("signUp not implemented");
  },
  login: async ({ email, password }: loginProps) => {},
  logout: async () => {},
  refresh: async () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [expiresIn, setExpiresIn] = useState<string | null>(null);
  const router = useRouter();

  const loadUser = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api("/albums/all-categories", {
        method: "GET",
        headers: { Accept: "application/json" },
      });
    } catch (err) {
      console.error("fetch /me failed", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);


  async function login({ email, password }: loginProps) {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: "Login failed" }));
      throw err;
    }
    const data = await res.json();
    setUser(data.user || null);
    return data;
  }

  async function signUp(signupData: signupProps): Promise<UserResponse> {
    const res = await api.post("/signup", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      data: signupData,
    });
    const resData: UserResponse = res.data;
    setUser(resData.data || null);
    setToken(resData.tokenData.token);
    setExpiresIn(resData.tokenData.expiresIn);
    localStorage.setItem("token", resData.tokenData.token);
    localStorage.setItem("expiresIn", resData.tokenData.expiresIn);
    localStorage.setItem("user", JSON.stringify(resData.data));
  
    return resData as UserResponse;
  }

  async function refresh() {
    try {
      const res = await fetch("/api/auth/refresh", {
        method: "POST",
        credentials: "include",
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        setUser(null);
        return null;
      }
      const data = await res.json();
      setUser(data.user || null);
      return data.user || null;
    } catch (err) {
      console.error("refresh failed", err);
      setUser(null);
      return null;
    }
  }

  async function logout(redirect = "/login") {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {
      console.warn("logout request failed", e);
    }
    setUser(null);
    if (redirect) router.push(redirect);
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, login, signUp, logout, refresh }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
