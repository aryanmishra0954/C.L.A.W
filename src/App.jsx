import { useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return currentPage === "auth" ? (
    <AuthPage onNavigate={handleNavigate} />
  ) : (
    <LandingPage onNavigate={handleNavigate} />
  );
}