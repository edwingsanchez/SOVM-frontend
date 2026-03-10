const API_BASE_URL = (
  process.env.REACT_APP_API_URL || "https://sovm.onrender.com"
).replace(/\/+$/, "");

export default API_BASE_URL;
