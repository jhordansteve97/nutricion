const BASE_URL = import.meta.env.VITE_URL;
export const login = async (email, password) => {
  try {
    const res = await fetch(
      `${BASE_URL}/users?email=${email}&password=${password}`
    );
    if (!res.ok) throw new Error("Error en la petición");

    const users = await res.json();

    if (users.length > 0) {
      return { success: true, user: users[0] };
    } else {
      return { success: false, message: "Email o contraseña incorrectos" };
    }
  } catch (err) {
    return { success: false, message: err.message };
  }
};
