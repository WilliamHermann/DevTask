import axios from "axios";

//TODO: Create specifics services utilizing repository pattern

export const api = axios.create({
// i wanted to use "api/v1" and not "api" because its easily to write and read on my api calls
  baseURL: "https://localhost:7242/api/v1",
});

export default api;
