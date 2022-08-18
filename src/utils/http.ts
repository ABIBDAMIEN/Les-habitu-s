import axios from "axios";
import { BASE_URL } from "../environment/env.config";

export const http = axios.create({
  baseURL: BASE_URL,
  // headers: { "Content-Type": "multipart/form-dataF" },
});