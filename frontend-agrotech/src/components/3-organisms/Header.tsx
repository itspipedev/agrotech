import Image from '../1-atoms/Image';
import Nav from '../2-molecules/Nav';

function Header({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <header className="header">
      <Image src="/LogoTic.png" alt="Logo TIC Yamboró" className="header__logo" />
      <Nav onLoginClick={onLoginClick} />
    </header>
  );
}

export default Header;