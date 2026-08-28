import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import KBUpload from "./pages/KBUpload.jsx";
import KBList from "./pages/KBList.jsx";
import ValidateUpload from "./pages/ValidateUpload.jsx";
import ValidationResults from "./pages/ValidationResults.jsx";
import ValidationHistory from "./pages/ValidationHistory.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx";
function getInitialRoute() {
  const hash = window.location.hash;

  if (hash === "#auth-signup") {
    return { page: "auth", authMode: "signup" };
  }

  if (hash === "#auth-signin") {
    return { page: "auth", authMode: "signin" };
  }

  if (hash === "#kb-upload") {
    return { page: "upload" };
  }

  if (hash === "#knowledge-base") {
    return { page: "knowledge-base" };
  }

  if (hash === "#validate") {
    return { page: "validate" };
  }

  if (hash === "#results") {
    return { page: "results" };
  }

  if (hash === "#history") {
    return { page: "history" };
  }

  if (hash === "#settings") {
    return { page: "settings" };
  }

  return { page: "landing" };
}

export default function App() {
  const [route, setRoute] = useState(getInitialRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getInitialRoute());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigate = (nextPage) => {
    if (nextPage === "signup") {
      window.location.hash = "auth-signup";
      return;
    }

    if (nextPage === "signin" || nextPage === "auth") {
      window.location.hash = "auth-signin";
      return;
    }

    if (nextPage === "workspace") {
      window.location.hash = "knowledge-base";
      return;
    }

    if (nextPage === "upload") {
      window.location.hash = "kb-upload";
      return;
    }

    if (nextPage === "knowledge-base") {
      window.location.hash = "knowledge-base";
      return;
    }

    if (nextPage === "validate") {
      window.location.hash = "validate";
      return;
    }

    if (nextPage === "results") {
      window.location.hash = "results";
      return;
    }

    if (nextPage === "history") {
      window.location.hash = "history";
      return;
    }

    if (nextPage === "settings" || nextPage === "profile") {
      window.location.hash = "settings";
      return;
    }

    window.location.hash = "landing";
  };

  const handleSignOut = () => {
    window.location.hash = "landing";
  };

  if (route.page === "auth") {
    return (
      <AuthPage
        initialMode={route.authMode}
        onNavigate={handleNavigate}
        onAuthSuccess={() => handleNavigate("workspace")}
      />
    );
  }

  if (route.page === "upload") {
    return (
      <KBUpload
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
      />
    );
  }

  if (route.page === "knowledge-base") {
    return (
      <KBList
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
      />
    );
  }

  if (route.page === "validate") {
    return (
      <ValidateUpload
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
      />
    );
  }

  if (route.page === "results") {
    return (
      <ValidationResults
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
      />
    );
  }

  if (route.page === "history") {
      return (
        <ValidationHistory
          onNavigate={handleNavigate}
          onSignOut={handleSignOut}
        />
      );
  }

  if (route.page === "settings") {
  return (
    <ProfileSettings
      onNavigate={handleNavigate}
      onSignOut={handleSignOut}
    />
  );
}

  return <LandingPage onNavigate={handleNavigate} />;
}