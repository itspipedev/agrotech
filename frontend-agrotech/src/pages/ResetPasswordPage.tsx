import type { View } from "../types/navigation";
import AuthTemplate from '../components/4-templates/AuthTemplate';
import ResetPasswordForm from '../components/3-organisms/ResetPasswordForm';

function ResetPasswordPage({ onNavigate }: { onNavigate: (v: View) => void }) {
  return (
    <AuthTemplate
      heroTitle="Actualiza tu contraseña"
      heroSubtitle="Ingresa y confirma tu nueva contraseña para continuar gestionando tus cultivos de manera segura."
      onBack={() => onNavigate('forgot-password')}
    >
      <ResetPasswordForm onSubmit={() => onNavigate('auth')} />
    </AuthTemplate>
  );
}
export default ResetPasswordPage;