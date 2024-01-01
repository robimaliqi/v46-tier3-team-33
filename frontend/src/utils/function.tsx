export function getApiHost() {
  if (window.location.host === "localhost:5173") {
    return "http://localhost:8081";
  } else {
    return "https://vegilicious-backend.onrender.com";
  }
}
