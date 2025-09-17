import { useEffect, useState } from "react";
import { api } from "../../server/apiFetch";

export const useUser = (id) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDataUser = async (userId) => {
    try {
      setLoading(true);
      const res = await api.get(`/users/${userId}`);
      setUserData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) getDataUser(id);
  }, [id]);

  return { userData, loading, error, getDataUser };
};
