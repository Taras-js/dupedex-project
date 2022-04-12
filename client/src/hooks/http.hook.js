import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        const data = await response.json();
        if (!response.ok) {
          console.log(data);
          throw new Error(data.message || "Что-то пошло совсем не так");
        }
        setLoading(true);
        return data;
      } catch (e) {
        console.log("Catch:", e.message);
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );
  const clearError = useCallback(() => {
    setError(null);
  }, []);
  return { loading, request, error, clearError };
};