import AuthTemplate from '../components/4-templates/AuthTemplate';
import ResetPasswordForm from '../components/3-organisms/ResetPasswordForm';
import { useNavigate } from 'react-router-dom';

function ResetPasswordPage() {
  const navigate = useNavigate();

  return (
    <AuthTemplate
      heroTitle="Actualiza tu contraseña"
      heroSubtitle="Ingresa y confirma tu nueva contraseña para continuar gestionando tus cultivos de manera segura."
      onBack={() => navigate('/forgot-password')}
    >
      <ResetPasswordForm onSubmit={() => navigate('/auth')} />
    </AuthTemplate>
  );
}

export default ResetPasswordPage;