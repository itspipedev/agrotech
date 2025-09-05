import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '././modules/login/pages/LandingPage';
import AuthPage from '././modules/login/pages/AuthPage';
import ForgotPasswordPage from '././modules/login/pages/ForgotPasswordPage';
import VerifyCodePage from '././modules/login/pages/VerifyCodePage';
import ResetPasswordPage from '././modules/login/pages/ResetPasswordPage';
import DashboardLayout from '././components/templates/DashboardLayout';
import HomePage from '././modules/login/pages/HomePage';
import RegistroCultivos from '././modules/cultivos/components/pages/RegistroCultivos';

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/verify-code", element: <VerifyCodePage /> },
  { path: "/reset-password", element: <ResetPasswordPage /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "cultivos", element: <RegistroCultivos /> }
    ]
  },
]);