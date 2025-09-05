import { useState } from "react";
import "./styles/global.css";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import VerifyCodePage from "./pages/VerifyCodePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UsuariosList from "./components/UsuariosList";

import type { View } from "./types/navigation";

function App() {
  const [view, setView] = useState<View>("landing");
  const [showApiExample, setShowApiExample] = useState(false);

  const navigateTo = (targetView: View) => setView(targetView);

  const renderCurrentView = () => {
    // Mostrar ejemplo de conexión API si está activado
    if (showApiExample) {
      return (
        <div style={{ padding: '20px' }}>
          <button 
            onClick={() => setShowApiExample(false)}
            style={{ 
              marginBottom: '20px', 
              padding: '10px 20px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ← Volver a la página principal
          </button>
          <UsuariosList />
        </div>
      );
    }

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
        return (
          <div>
            <LandingPage onNavigate={navigateTo} />
            {/* Botón para probar la conexión con la API */}
            <div style={{ 
              position: 'fixed', 
              top: '20px', 
              right: '20px', 
              zIndex: 1000 
            }}>
              <button 
                onClick={() => setShowApiExample(true)}
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                🔗 Probar API
              </button>
            </div>
          </div>
        );
    }
  };

  return <>{renderCurrentView()}</>;
}

export default App;
