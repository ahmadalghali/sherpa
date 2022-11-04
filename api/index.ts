import axios from "axios";

const BASE_URL = "http://api.ikoosa.com";
// const BASE_URL = "https://sherpa.fly.dev";
export const api = axios.create({
  baseURL: BASE_URL,
});
