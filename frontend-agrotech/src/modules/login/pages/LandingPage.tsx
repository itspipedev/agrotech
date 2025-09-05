import MainTemplate from '../components/4-templates/MainTemplate';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/auth');
  };

  return <MainTemplate onLoginClick={handleLoginClick} />;
}

export default LandingPage;