import Button from '../1-atoms/Button';

function Nav({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <nav className="nav">
      <a href="#caracteristicas" className="nav__link">Características</a>
      <a href="#acerca-de" className="nav__link">Acerca de</a>
      <Button onClick={onLoginClick} className="btn primary">Iniciar sesión</Button>
    </nav>
  );
}

export default Nav;