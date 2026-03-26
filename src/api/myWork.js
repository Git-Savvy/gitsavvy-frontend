import { mainApi } from "./Axios";
export const fetchMyWork = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const response = await mainApi.get("/my-work", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
