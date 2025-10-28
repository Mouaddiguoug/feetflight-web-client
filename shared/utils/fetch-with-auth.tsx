export interface FetchWithAuthOptions extends RequestInit {
  skipRefreshOn401?: boolean;
}

export default async function fetchWithAuth<T = any>(
  url: string,
  options: FetchWithAuthOptions = {}
): Promise<Response> {
  const { skipRefreshOn401 = false, ...fetchOptions } = options;

  fetchOptions.credentials = fetchOptions.credentials || "include";
  fetchOptions.headers = {
    Accept: "application/json",
    ...(fetchOptions.headers || {}),
  };

  let res: Response;

  try {
    res = await fetch(url, fetchOptions);
  } catch (err) {
    console.error("[fetchWithAuth] Network error:", err);
    throw err;
  }

  if (res.status !== 401 || skipRefreshOn401) {
    return res;
  }

  try {
    const refreshRes = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
      headers: { Accept: "application/json" },
    });

    if (!refreshRes.ok) {
      console.warn("[fetchWithAuth] Refresh token failed");
      return res;
    }

    const retryRes = await fetch(url, fetchOptions);
    return retryRes;
  } catch (err) {
    console.error("[fetchWithAuth] Refresh request failed:", err);
    return res;
  }
}
