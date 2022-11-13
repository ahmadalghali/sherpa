import axios from "axios";

const BASE_URL = "https://sherpa-test-server.fly.dev";
export const api = axios.create({
  baseURL: BASE_URL,
});
