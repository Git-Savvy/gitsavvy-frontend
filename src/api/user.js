import { mainApi } from "./Axios";
const token = localStorage.getItem("token")
// GET /profile/ (The one that uses get_current_user)
export const fetchUser = async ({ idToken }) => {
  const response = await mainApi.get("/profile/", {
    headers: { Authorization: `Bearer ${idToken}` },
  });
  return response.data;
};

/* =======================
   UPDATE USER Pref
======================= */
export const updateUserPref = async (updates) => {
  const res = await mainApi.put("/profile/preferences",updates,{
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const fetchUserById = async (id) => {
  const res = await api.get(`/users?id=${id}`);
  return res.data[0]; //If a user was found, it returns the first person in that list becose we are sure ..user is unique.
};
