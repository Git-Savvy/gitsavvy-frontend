import { api } from "./Axios";

export const fetchUser = async ({ username, password }) => {
  const res = await api.get("/users", {
    params: { username, password },
  });

  if (!res.data.length) {
    throw new Error("Invalid username or password");
  }

  return res.data[0]; //If a user was found, it returns the first person in that list.
};

/* =======================
   UPDATE USER
======================= */
export const updateUser = async (userId, updates) => {
  const res = await api.patch(`/users/${userId}`, updates);
  return res.data;
};
