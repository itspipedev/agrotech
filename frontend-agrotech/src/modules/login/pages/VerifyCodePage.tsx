import AuthTemplate from '../components/4-templates/AuthTemplate';
import VerifyCodeForm from '../components/3-organisms/VerifyCodeForm';
import { useNavigate } from 'react-router-dom';

function VerifyCodePage() {
  const navigate = useNavigate();

  return (
    <AuthTemplate
      heroTitle="Código de verificación"
      heroSubtitle="Ingresa el código que enviamos a tu correo electrónico para continuar de manera segura."
      onBack={() => navigate('/forgot-password')}
    >
      <VerifyCodeForm onSubmit={() => navigate('/reset-password')} />
    </AuthTemplate>
  );
}

export default VerifyCodePage;