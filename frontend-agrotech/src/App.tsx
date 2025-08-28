import { useState } from "react";
import "./styles/global.css";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import VerifyCodePage from "./pages/VerifyCodePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

import type { View } from "./types/navigation";

function App() {
  const [view, setView] = useState<View>("landing");

  const navigateTo = (targetView: View) => setView(targetView);

  const renderCurrentView = () => {
    switch (view) {
      case "auth":
        return <AuthPage onNavigate={navigateTo} />;
      case "forgot-password":
        return <ForgotPasswordPage onNavigate={navigateTo} />;
      case "verify-code":
        return <VerifyCodePage onNavigate={navigateTo} />;
      case "reset-password":
        return <ResetPasswordPage onNavigate={navigateTo} />;
      case "landing":
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return <>{renderCurrentView()}</>;
}

export default App;
