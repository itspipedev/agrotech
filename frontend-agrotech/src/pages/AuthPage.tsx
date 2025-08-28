import { useState as useStateAuth } from 'react';
import AuthTemplate from '../components/4-templates/AuthTemplate';
import LoginForm from '../components/3-organisms/LoginForm';
import RegisterForm from '../components/3-organisms/RegisterForm';

type Mode = "login" | "register";

function AuthPage() {
  const [mode, setMode] = useStateAuth<Mode>("login");
  return (
    <AuthTemplate>
      {mode === "login" ? (
        <LoginForm onSwitch={() => setMode("register")} />
      ) : (
        <RegisterForm onSwitch={() => setMode("login")} />
      )}
    </AuthTemplate>
  );
}

export default AuthPage;