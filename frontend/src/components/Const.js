// switch between "dev" and "prod"
const env = "prod";

export const APIBASE =
  env === "prod" ? "https://donlee.online/api" : "http://127.0.0.1:8000/api";
