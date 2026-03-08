import axios from "axios";

// 1. existing mock server (json-server) - Keeps current code working(just in development process)
export const api = axios.create({
  baseURL: "http://127.0.0.1:4000",
});

// 2. new real backend (Docker / FastAPI) - Use this for the Docs endpoints
export const mainApi = axios.create({
  // baseURL: "http://127.0.0.1:8000", 
  baseURL: "/",//to solve browser blocking 
});