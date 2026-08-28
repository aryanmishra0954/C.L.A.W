import { useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";

export default function App() {
  const [page, setPage] = useState("landing");

  const handleNavigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return page === "auth" ? (
    <AuthPage onNavigate={handleNavigate} />
  ) : (
    <LandingPage onNavigate={handleNavigate} />
  );
}