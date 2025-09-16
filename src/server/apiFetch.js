const BASE_URL = import.meta.env.VITE_URL;

export const api = {
  get: async (path) => {
    try {
      const res = await fetch(`${BASE_URL}${path}`);
      if (!res.ok) {
        const errorText = await res.text(); // obtener mensaje del servidor
        return { error: true, status: res.status, message: errorText };
      }
      const data = await res.json();
      return { error: false, data };
    } catch (err) {
      return { error: true, message: err.message || "Network error" };
    }
  },

  post: async (path, body) => {
    try {
      const res = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const errorText = await res.text();
        return { error: true, status: res.status, message: errorText };
      }
      const data = await res.json();
      return { error: false, data };
    } catch (err) {
      return { error: true, message: err.message || "Network error" };
    }
  },

  put: async (path, body) => {
    try {
      const res = await fetch(`${BASE_URL}${path}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const errorText = await res.text();
        return { error: true, status: res.status, message: errorText };
      }
      const data = await res.json();
      return { error: false, data };
    } catch (err) {
      return { error: true, message: err.message || "Network error" };
    }
  },

  delete: async (path) => {
    try {
      const res = await fetch(`${BASE_URL}${path}`, { method: "DELETE" });
      if (!res.ok) {
        const errorText = await res.text();
        return { error: true, status: res.status, message: errorText };
      }
      const data = await res.json();
      return { error: false, data };
    } catch (err) {
      return { error: true, message: err.message || "Network error" };
    }
  },
};
